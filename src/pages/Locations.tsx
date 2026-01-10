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
      address: "225 4 Ave E Unit B, Regina, SK S4N 4X9",
      features: [
        "Warehouse & staging",
        "Main dispatch center",
        "Fleet maintenance facility",
        "CTPAT-compliant yard",
        "Cross-border coordination",
      ],
      hours: "24/7 Operations",
      phone: "(306) 216-6224",
    },
    {
      city: "Saskatoon",
      province: "SK",
      type: "Regional Hub",
      address: "Saskatoon, SK",
      features: [
        "Warehouse facility",
        "Freight consolidation",
        "Regional distribution",
        "Driver support",
        "Secure storage",
      ],
      hours: "24/7 Operations",
      phone: "(306) 216-6224",
    },
    {
      city: "Calgary",
      province: "AB",
      type: "Western Distribution Center",
      address: "Calgary, AB",
      features: [
        "Warehouse facility",
        "Oil & gas logistics",
        "Secure yard storage",
        "Mountain route expertise",
        "Regional staging",
      ],
      hours: "24/7 Operations",
      phone: "(306) 216-6224",
    },
    {
      city: "Mississauga",
      province: "ON",
      type: "Eastern Distribution Center",
      address: "Mississauga, ON",
      features: [
        "Warehouse facility",
        "Cross-border operations",
        "Strategic GTA access",
        "Freight consolidation",
        "Eastern Canada hub",
      ],
      hours: "24/7 Operations",
      phone: "(306) 216-6224",
    },
    {
      city: "San Diego",
      province: "CA",
      type: "U.S. Operations Hub",
      address: "San Diego, CA",
      features: [
        "U.S. warehouse facility",
        "Cross-border staging",
        "Mexico corridor access",
        "Bonded operations",
        "West coast distribution",
      ],
      hours: "24/7 Operations",
      phone: "(306) 216-6224",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gold">Locations</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic warehouse and distribution facilities across North America
            </p>
          </div>
        </section>

        {/* Network Overview */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 border-gold/30 bg-background text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-10 h-10 mx-auto mb-4 text-gold" />
                  <p className="text-3xl font-bold text-gold mb-2">5</p>
                  <p className="text-sm text-gray-400">Strategic Locations</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gold/30 bg-background text-center">
                <CardContent className="pt-6">
                  <Warehouse className="w-10 h-10 mx-auto mb-4 text-gold" />
                  <p className="text-3xl font-bold text-gold mb-2">10K+</p>
                  <p className="text-sm text-gray-400">Total Sq Ft Storage</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gold/30 bg-background text-center">
                <CardContent className="pt-6">
                  <Clock className="w-10 h-10 mx-auto mb-4 text-gold" />
                  <p className="text-3xl font-bold text-gold mb-2">24/7</p>
                  <p className="text-sm text-gray-400">All Facilities</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gold/30 bg-background text-center">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 mx-auto mb-4 text-gold" />
                  <p className="text-3xl font-bold text-gold mb-2">CTPAT</p>
                  <p className="text-sm text-gray-400">Compliant Facilities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {locations.map((location, index) => (
                <Card key={index} className="border-0 shadow-lg bg-card">
                  <CardHeader className="bg-black text-white border-b border-gold/30">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2 text-gold">
                          {location.city}, {location.province}
                        </CardTitle>
                        <p className="text-gray-400">{location.type}</p>
                      </div>
                      <MapPin className="w-8 h-8 text-gold" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Address</p>
                        <p className="font-semibold text-white">{location.address}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Facility Features</p>
                        <ul className="space-y-2">
                          {location.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Operating Hours</p>
                          <p className="font-semibold text-gold">{location.hours}</p>
                        </div>
                        <a 
                          href={`tel:${location.phone.replace(/\D/g, '')}`}
                          className="text-gold font-semibold hover:text-gold/80"
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
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Warehousing <span className="text-gold">Services</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-gold">Storage Solutions</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Short & long-term storage</li>
                      <li>• Climate-controlled options</li>
                      <li>• Secure yard storage</li>
                      <li>• Inventory management</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-gold">Distribution</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Cross-docking services</li>
                      <li>• Load consolidation</li>
                      <li>• Order fulfillment</li>
                      <li>• Same-day processing</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-gold">Value-Added</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
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

