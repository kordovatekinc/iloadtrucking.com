// API Configuration
const isDev = import.meta.env.DEV;

// Carrier API configurations
const CARRIERS = {
  BUDGET: {
    name: 'Budget Carrier',
    baseUrl: isDev ? '/api/v1/tracking' : 'https://budgetcarrier.kordovatek.com/api/v1/tracking',
    apiKey: 'tk_live_f4APsHzUVFu47jBNQbVLRUqd2KgvAGIeN8NChyBFxKwgFSalNciYbgzeREiOQ',
  },
  ILOAD: {
    name: 'iLoad Trucking',
    baseUrl: 'https://iloadtrucking.kordovatek.com/api/v1/tracking',
    apiKey: 'tk_live_Vqurj2E26mw0wzyQBoSeGzjAbHN7UT6lchfcgNaXcLCaEocxXMGZEn1KKPFP',
  },
  SWIFTRIVER: {
    name: 'SwiftRiver',
    baseUrl: 'https://swiftriverexpress.kordovatek.com/api/v1/tracking',
    apiKey: 'tk_live_NJjSrf0hqOf7yxfR0Lnx4U0au9T3AFS896RqsqOp8pG2v7z8Pk9I1BlMEw68Y',
  },
};

// Type Definitions
export interface LocationData {
  lat: number;
  lng: number;
  address: string;
}

export interface TruckData {
  unit: string;
}

export interface CarrierData {
  id: string;
  name: string;
  company: string;
}

export interface TrackingData {
  orderNo: string;
  loadNo?: number;
  location: LocationData;
  truck: TruckData | null;
  carrier?: CarrierData;
  status: string;
  lastUpdated: string | null;
}

export interface ApiTrackingResponse {
  success: boolean;
  data?: TrackingData;
  error?: string;
  message?: string;
}

// Helper function to query a single carrier API
async function queryCarrierAPI(
  carrierName: string,
  baseUrl: string,
  apiKey: string,
  searchParam: string,
  searchValue: string
): Promise<ApiTrackingResponse | null> {
  const url = `${baseUrl}/location?${searchParam}=${encodeURIComponent(searchValue)}`;
  
  console.log(`=== QUERYING ${carrierName} ===`);
  console.log('URL:', url);
  console.log('Search Param:', searchParam, '=', searchValue);
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(`${carrierName} Response Status:`, response.status);

    if (response.ok) {
      const data = await response.json();
      console.log(`${carrierName} Success:`, JSON.stringify(data, null, 2));
      return data;
    } else if (response.status === 404) {
      console.log(`${carrierName}: Load not found`);
      return null;
    } else {
      console.log(`${carrierName} Error:`, response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error(`${carrierName} Query Error:`, error);
    return null;
  }
}

// API Service
export const trackingApi = {
  /**
   * Track a shipment across multiple carriers with fallback logic
   * @param orderNo - The order/load number
   * @returns Promise with tracking result
   */
  async trackShipment(orderNo: string): Promise<ApiTrackingResponse> {
    console.log('=== MULTI-CARRIER TRACKING START ===');
    console.log('Search Value:', orderNo);
    
    try {
      // Step 1: Query Budget Carrier first
      let result = await queryCarrierAPI(
        CARRIERS.BUDGET.name,
        CARRIERS.BUDGET.baseUrl,
        CARRIERS.BUDGET.apiKey,
        'orderNo',
        orderNo
      );

      // Step 2: Check if carrier is ILOAD - query iLoad API
      if (result?.success && result.data?.carrier?.name?.toUpperCase().includes('ILOAD')) {
        console.log('=== DETECTED ILOAD CARRIER - QUERYING ILOAD API ===');
        const loadNo = result.data.loadNo;
        
        // Try with loadNo first (as loadNo param)
        if (loadNo) {
          const iloadResult = await queryCarrierAPI(
            CARRIERS.ILOAD.name,
            CARRIERS.ILOAD.baseUrl,
            CARRIERS.ILOAD.apiKey,
            'loadNo',
            String(loadNo)
          );
          if (iloadResult?.success && iloadResult.data) {
            console.log('=== FOUND IN ILOAD BY LOADNO ===');
            return iloadResult;
          }
          
          // Try loadNo as orderNo param
          const iloadByOrderNo = await queryCarrierAPI(
            CARRIERS.ILOAD.name,
            CARRIERS.ILOAD.baseUrl,
            CARRIERS.ILOAD.apiKey,
            'orderNo',
            String(loadNo)
          );
          if (iloadByOrderNo?.success && iloadByOrderNo.data) {
            console.log('=== FOUND IN ILOAD BY LOADNO AS ORDERNO ===');
            return iloadByOrderNo;
          }
        }
        
        // Try with original orderNo
        const iloadResult = await queryCarrierAPI(
          CARRIERS.ILOAD.name,
          CARRIERS.ILOAD.baseUrl,
          CARRIERS.ILOAD.apiKey,
          'orderNo',
          orderNo
        );
        if (iloadResult?.success && iloadResult.data) {
          console.log('=== FOUND IN ILOAD BY ORDERNO ===');
          return iloadResult;
        }
      }

      // Step 2.5: Check if carrier is SWIFTRIVER - query SwiftRiver API
      if (result?.success && result.data?.carrier?.name?.toUpperCase().includes('SWIFT')) {
        console.log('=== DETECTED SWIFTRIVER CARRIER - QUERYING SWIFTRIVER API ===');
        const loadNo = result.data.loadNo;
        
        // Try with loadNo first (as loadNo param)
        if (loadNo) {
          const swiftResult = await queryCarrierAPI(
            CARRIERS.SWIFTRIVER.name,
            CARRIERS.SWIFTRIVER.baseUrl,
            CARRIERS.SWIFTRIVER.apiKey,
            'loadNo',
            String(loadNo)
          );
          if (swiftResult?.success && swiftResult.data) {
            console.log('=== FOUND IN SWIFTRIVER BY LOADNO ===');
            return swiftResult;
          }
          
          // Try loadNo as orderNo param
          const swiftByOrderNo = await queryCarrierAPI(
            CARRIERS.SWIFTRIVER.name,
            CARRIERS.SWIFTRIVER.baseUrl,
            CARRIERS.SWIFTRIVER.apiKey,
            'orderNo',
            String(loadNo)
          );
          if (swiftByOrderNo?.success && swiftByOrderNo.data) {
            console.log('=== FOUND IN SWIFTRIVER BY LOADNO AS ORDERNO ===');
            return swiftByOrderNo;
          }
        }
        
        // Try with original orderNo
        const swiftResult = await queryCarrierAPI(
          CARRIERS.SWIFTRIVER.name,
          CARRIERS.SWIFTRIVER.baseUrl,
          CARRIERS.SWIFTRIVER.apiKey,
          'orderNo',
          orderNo
        );
        if (swiftResult?.success && swiftResult.data) {
          console.log('=== FOUND IN SWIFTRIVER BY ORDERNO ===');
          return swiftResult;
        }
      }

      // Step 3: Check if carrier starts with BUDGET from other systems
      if (result?.success && result.data?.carrier?.name?.toUpperCase().startsWith('BUDGET')) {
        console.log('=== BUDGET CARRIER DETECTED - USING BUDGET DATA ===');
        return result;
      }

      // Step 4: If we have a valid result with actual location data, return it
      if (result?.success && result.data && result.data.location.lat !== 0 && result.data.location.lng !== 0) {
        return result;
      }

      // Step 5: Fallback - search all carriers
      console.log('=== FALLBACK: SEARCHING ALL CARRIERS ===');
      
      const carriers = [CARRIERS.ILOAD, CARRIERS.SWIFTRIVER];
      
      for (const carrier of carriers) {
        // Try with orderNo
        let carrierResult = await queryCarrierAPI(
          carrier.name,
          carrier.baseUrl,
          carrier.apiKey,
          'orderNo',
          orderNo
        );
        
        if (carrierResult?.success && carrierResult.data) {
          // Check if this is a Budget load
          if (carrierResult.data.carrier?.name?.toUpperCase().startsWith('BUDGET')) {
            console.log(`=== FOUND BUDGET LOAD IN ${carrier.name} ===`);
            // Query Budget API with the loadNo
            if (carrierResult.data.loadNo) {
              const budgetResult = await queryCarrierAPI(
                CARRIERS.BUDGET.name,
                CARRIERS.BUDGET.baseUrl,
                CARRIERS.BUDGET.apiKey,
                'loadNo',
                String(carrierResult.data.loadNo)
              );
              if (budgetResult?.success && budgetResult.data) {
                return budgetResult;
              }
              
              // Try loadNo as orderNo param
              const budgetByOrderNo = await queryCarrierAPI(
                CARRIERS.BUDGET.name,
                CARRIERS.BUDGET.baseUrl,
                CARRIERS.BUDGET.apiKey,
                'orderNo',
                String(carrierResult.data.loadNo)
              );
              if (budgetByOrderNo?.success && budgetByOrderNo.data) {
                return budgetByOrderNo;
              }
            }
          }
          return carrierResult;
        }
        
        // Try with loadNo if orderNo appears to be numeric
        if (!isNaN(Number(orderNo))) {
          carrierResult = await queryCarrierAPI(
            carrier.name,
            carrier.baseUrl,
            carrier.apiKey,
            'loadNo',
            orderNo
          );
          
          if (carrierResult?.success && carrierResult.data) {
            // Check if this is a Budget load
            if (carrierResult.data.carrier?.name?.toUpperCase().startsWith('BUDGET')) {
              console.log(`=== FOUND BUDGET LOAD IN ${carrier.name} ===`);
              // Query Budget API with the orderNo from the carrier result
              if (carrierResult.data.orderNo) {
                const budgetResult = await queryCarrierAPI(
                  CARRIERS.BUDGET.name,
                  CARRIERS.BUDGET.baseUrl,
                  CARRIERS.BUDGET.apiKey,
                  'orderNo',
                  carrierResult.data.orderNo
                );
                if (budgetResult?.success && budgetResult.data) {
                  return budgetResult;
                }
                
                // Try orderNo as loadNo param
                const budgetByLoadNo = await queryCarrierAPI(
                  CARRIERS.BUDGET.name,
                  CARRIERS.BUDGET.baseUrl,
                  CARRIERS.BUDGET.apiKey,
                  'loadNo',
                  carrierResult.data.orderNo
                );
                if (budgetByLoadNo?.success && budgetByLoadNo.data) {
                  return budgetByLoadNo;
                }
              }
            }
            return carrierResult;
          }
        }
      }

      // Step 6: If Budget had a result but no location, return it anyway
      if (result?.success && result.data) {
        return result;
      }

      // No results found anywhere
      return {
        success: false,
        error: 'Load not found',
        message: 'No tracking information found for this order number. Please verify the number or contact dispatch.',
      };
      
    } catch (error) {
      console.error('=== TRACKING API ERROR ===');
      console.error('Error:', error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
        message: 'Unable to track shipment. Please try again or contact support at (306) 269-9777.',
      };
    }
  },
};

