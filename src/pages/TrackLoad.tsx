import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Package, MapPin, Truck, Clock, Loader2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackingApi, TrackingData } from "@/services/trackingApi";
import TrackingMap from "@/components/TrackingMap";
import UnavailableMap from "@/components/UnavailableMap";

const TrackLoad = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showUnavailable, setShowUnavailable] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setTrackingData(null);
    setShowUnavailable(false);
    setIsLoading(true);

    try {
      const response = await trackingApi.trackShipment(orderNumber);
      
      if (response.success && response.data) {
        setTrackingData(response.data);
      } else if (response.error === 'Load not found') {
        setShowUnavailable(true);
      } else {
        setError(response.message || response.error || 'Unable to find tracking information');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Tracking error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatStatus = (status: string): string => {
    return status.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  };

  const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Track Your Shipment
            </h1>
            <p className="text-xl text-slate-600">
              Real-time visibility into your freight status
            </p>
          </div>

          {/* Tracking Input */}
          <Card className="p-8 mb-8 bg-white shadow-xl border-0">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Order Number / Load Number
                </label>
                <div className="flex gap-3">
                  <Input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="Enter order number"
                    className="flex-1 h-12 text-lg border-slate-300 focus:border-slate-900"
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Tracking...
                      </>
                    ) : (
                      'Track'
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Card>

          {/* Error Message */}
          {error && (
            <Card className="p-6 mb-8 bg-red-50 border-2 border-red-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Tracking Error</h3>
                  <p className="text-red-700">{error}</p>
                  <p className="text-sm text-red-600 mt-2">
                    Please verify your tracking number or contact our dispatch team at{' '}
                    <a href="tel:+13062699777" className="font-semibold underline">
                      (306) 269-9777
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Tracking Unavailable */}
          {showUnavailable && !isLoading && (
            <div className="space-y-6 animate-fade-in">
              {/* Unavailable Map */}
              <Card className="p-6 bg-white shadow-xl border-0">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Shipment Tracking</h3>
                <UnavailableMap />
              </Card>

              {/* Order Info */}
              <Card className="p-8 bg-white shadow-xl border-0">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Order Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <Package className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Order Number</p>
                      <p className="text-lg font-semibold text-slate-900">{orderNumber}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <Truck className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Tracking Status</p>
                      <p className="text-lg font-semibold text-slate-900">Not Available</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Why is tracking unavailable?</strong> This load may be assigned to an external carrier, 
                    not yet dispatched, or the truck's tracking system is not currently transmitting location data. 
                    Please contact dispatch for the most current information.
                  </p>
                </div>
              </Card>

              {/* Contact Support */}
              <Card className="p-6 bg-slate-900 text-white border-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold mb-1">Need assistance?</p>
                    <p className="text-sm text-slate-300">Contact our dispatch team for immediate support</p>
                  </div>
                  <a 
                    href="tel:+13062699777" 
                    className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-center"
                  >
                    (306) 269-9777
                  </a>
                </div>
              </Card>
            </div>
          )}

          {/* Tracking Results */}
          {trackingData && !isLoading && (
            <div className="space-y-6 animate-fade-in">
              {/* Status Overview */}
              <Card className="p-8 bg-white shadow-xl border-0">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Shipment Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <Package className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Order Number</p>
                      <p className="text-lg font-semibold text-slate-900">{trackingData.orderNo}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <Package className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Status</p>
                      <p className="text-lg font-semibold text-slate-900">{trackingData.status ? formatStatus(trackingData.status) : 'N/A'}</p>
                    </div>
                  </div>
                </div>

                {trackingData.location?.lat !== 0 && trackingData.location?.lng !== 0 && trackingData.lastUpdated && (
                  <>
                    {/* Current Location */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-slate-600" />
                        <p className="text-sm font-semibold text-slate-600">Current Location</p>
                      </div>
                      <p className="text-lg text-slate-900">{trackingData.location.address}</p>
                      <p className="text-sm text-slate-500 mt-1">
                        {trackingData.location.lat.toFixed(4)}, {trackingData.location.lng.toFixed(4)}
                      </p>
                    </div>

                    {/* Auto-refresh notice */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-900">
                        Location data is updated in real-time from our truck tracking system. 
                        Refresh this page to see the latest position.
                      </p>
                    </div>
                  </>
                )}
              </Card>

              {/* Live Map - only show if coordinates are not 0,0 */}
              {trackingData.location?.lat !== 0 && trackingData.location?.lng !== 0 ? (
                <Card className="p-6 bg-white shadow-xl border-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Real-Time Location</h3>
                  <TrackingMap
                    lat={trackingData.location.lat}
                    lng={trackingData.location.lng}
                    address={trackingData.location.address || ''}
                    truckUnit={trackingData.truck?.unit}
                  />
                </Card>
              ) : (
                <Card className="p-6 bg-amber-50 border-2 border-amber-200">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">GPS Tracking Unavailable</h3>
                  <p className="text-amber-800">
                    GPS tracking is not currently available for this load. Please contact dispatch at{' '}
                    <a href="tel:+13062699777" className="font-semibold underline">
                      (306) 269-9777
                    </a>
                    {' '}for the most current location information.
                  </p>
                </Card>
              )}

              {/* Contact Support */}
              <Card className="p-6 bg-slate-900 text-white border-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold mb-1">Need assistance?</p>
                    <p className="text-sm text-slate-300">Contact our dispatch team for immediate support</p>
                  </div>
                  <a 
                    href="tel:+13062699777" 
                    className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-center"
                  >
                    (306) 269-9777
                  </a>
                </div>
              </Card>
            </div>
          )}

          {/* Instructions */}
          {!trackingData && !isLoading && !error && (
            <Card className="p-8 bg-white border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">How to Track Your Load</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
                  <span>Enter your order number or load number provided at shipment booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
                  <span>Click "Track" to view real-time truck location on the map</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
                  <span>See live updates including truck unit, current location, and status</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
                  <span>Contact dispatch at (306) 269-9777 if you need immediate assistance</span>
                </li>
              </ul>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackLoad;
