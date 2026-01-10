import { MapPin, Phone, Truck } from 'lucide-react';

const UnavailableMap = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden border-2 border-slate-200 bg-slate-100">
      {/* Map placeholder with pattern */}
      <div className="w-full h-full min-h-[400px] relative" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          #f1f5f9,
          #f1f5f9 10px,
          #e2e8f0 10px,
          #e2e8f0 20px
        )`
      }}>
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-300 shadow-lg">
              <Truck className="w-10 h-10 text-slate-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Truck Location Unavailable
            </h3>
            
            <p className="text-slate-600 mb-6">
              This load may be assigned to a carrier or not yet in transit. Real-time tracking is currently unavailable.
            </p>
            
            <div className="bg-white p-5 rounded-lg shadow-md border border-slate-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-slate-900" />
                <p className="font-semibold text-slate-900">Need Updates?</p>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Contact our dispatch team for current status
              </p>
              <a 
                href="tel:+13062699777" 
                className="inline-block px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                (306) 269-9777
              </a>
            </div>
          </div>
        </div>
        
        {/* Top right badge */}
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-200 z-[1000] flex items-center gap-2">
          <MapPin className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-semibold text-slate-400">Location Unavailable</span>
        </div>
      </div>
    </div>
  );
};

export default UnavailableMap;

