import { MapPin, Warehouse, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Locations = () => {
  const locations = [
    {
      city: "Regina",
      province: "SK",
      type: "Headquarters & Primary Hub",
      address: "155 McDonald Street, Regina, SK",
      features: [
        "50,000 sq ft warehouse",
        "24 loading docks",
        "Main dispatch center",
        "Fleet maintenance facility",
        "CTPAT-compliant yard",
      ],
      hours: "24/7 Operations",
      phone: "(306) 269-9777",
    },
    {
      city: "Mississauga",
      province: "ON",
      type: "Eastern Distribution Center",
      address: "Mississauga, ON",
      features: [
        "40,000 sq ft warehouse",
        "18 loading docks",
        "Cross-border operations",
        "Temperature-controlled storage",
        "Strategic GTA access",
      ],
      hours: "24/7 Operations",
      phone: "(306) 269-9777",
    },
    {
      city: "Winnipeg",
      province: "MB",
      type: "Central Hub",
      address: "Winnipeg, MB",
      features: [
        "35,000 sq ft warehouse",
        "16 loading docks",
        "Regional consolidation",
        "Cold storage available",
        "Rail access",
      ],
      hours: "24/7 Operations",
      phone: "(306) 269-9777",
    },
    {
      city: "Calgary",
      province: "AB",
      type: "Western Distribution Center",
      address: "Calgary, AB",
      features: [
        "30,000 sq ft warehouse",
        "14 loading docks",
        "Oil & gas logistics",
        "Secure yard storage",
        "Mountain route expertise",
      ],
      hours: "24/7 Operations",
      phone: "(306) 269-9777",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Locations</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic warehouse and distribution facilities across Western and Central Canada
            </p>
          </div>
        </section>

        {/* Network Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 border-slate-200 text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-10 h-10 mx-auto mb-4 text-slate-900" />
                  <p className="text-3xl font-bold text-slate-900 mb-2">4</p>
                  <p className="text-sm text-slate-600">Strategic Locations</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-slate-200 text-center">
                <CardContent className="pt-6">
                  <Warehouse className="w-10 h-10 mx-auto mb-4 text-slate-900" />
                  <p className="text-3xl font-bold text-slate-900 mb-2">155K+</p>
                  <p className="text-sm text-slate-600">Total Sq Ft Storage</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-slate-200 text-center">
                <CardContent className="pt-6">
                  <Clock className="w-10 h-10 mx-auto mb-4 text-slate-900" />
                  <p className="text-3xl font-bold text-slate-900 mb-2">24/7</p>
                  <p className="text-sm text-slate-600">All Facilities</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-slate-200 text-center">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 mx-auto mb-4 text-slate-900" />
                  <p className="text-3xl font-bold text-slate-900 mb-2">CTPAT</p>
                  <p className="text-sm text-slate-600">Compliant Facilities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {locations.map((location, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="bg-slate-900 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">
                          {location.city}, {location.province}
                        </CardTitle>
                        <p className="text-slate-300">{location.type}</p>
                      </div>
                      <MapPin className="w-8 h-8" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Address</p>
                        <p className="font-semibold text-slate-900">{location.address}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-slate-600 mb-2">Facility Features</p>
                        <ul className="space-y-2">
                          {location.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-700">
                              <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                        <div>
                          <p className="text-sm text-slate-600">Operating Hours</p>
                          <p className="font-semibold text-slate-900">{location.hours}</p>
                        </div>
                        <a 
                          href={`tel:${location.phone.replace(/\D/g, '')}`}
                          className="text-slate-900 font-semibold hover:text-slate-700"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Warehousing Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-slate-900">Storage Solutions</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Short & long-term storage</li>
                      <li>• Climate-controlled options</li>
                      <li>• Secure yard storage</li>
                      <li>• Inventory management</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-slate-900">Distribution</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Cross-docking services</li>
                      <li>• Load consolidation</li>
                      <li>• Order fulfillment</li>
                      <li>• Same-day processing</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-slate-900">Value-Added</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Packaging & labeling</li>
                      <li>• Quality inspections</li>
                      <li>• Customs documentation</li>
                      <li>• Hazmat handling</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Locations;

