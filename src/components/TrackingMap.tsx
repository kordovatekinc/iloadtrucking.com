import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface TrackingMapProps {
  lat: number;
  lng: number;
  address: string;
  truckUnit?: string;
}

const TrackingMap = ({ lat, lng, address, truckUnit }: TrackingMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 10,
        zoomControl: true,
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);
    }

    // Create custom truck icon
    const truckIcon = L.divIcon({
      html: `
        <div style="
          background: #0f172a;
          border: 3px solid white;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
            <path d="M15 18H9"/>
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
            <circle cx="17" cy="18" r="2"/>
            <circle cx="7" cy="18" r="2"/>
          </svg>
        </div>
      `,
      className: 'custom-truck-marker',
      iconSize: [48, 48],
      iconAnchor: [24, 48],
    });

    // Add marker with popup
    const marker = L.marker([lat, lng], { icon: truckIcon }).addTo(mapRef.current);
    
    const popupContent = `
      <div style="padding: 8px; min-width: 200px;">
        <div style="font-weight: bold; font-size: 16px; margin-bottom: 8px; color: #0f172a;">
          ${truckUnit ? `Truck Unit: ${truckUnit}` : 'Current Location'}
        </div>
        <div style="color: #475569; font-size: 14px;">
          ${address}
        </div>
      </div>
    `;
    
    marker.bindPopup(popupContent).openPopup();

    // Center map on location
    mapRef.current.setView([lat, lng], 10);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng, address, truckUnit]);

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden border-2 border-slate-200">
      <div ref={mapContainerRef} className="w-full h-full min-h-[400px]" />
      
      {/* Map overlay info */}
      <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-200 z-[1000] flex items-center gap-2">
        <MapPin className="w-4 h-4 text-slate-900" />
        <span className="text-sm font-semibold text-slate-900">Live Location</span>
      </div>
    </div>
  );
};

export default TrackingMap;

