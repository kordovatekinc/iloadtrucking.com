import { Truck, Thermometer, Shield, Gauge, Calendar, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Fleet = () => {
  const fleetStats = [
    { label: "Modern Fleet", value: "Active", icon: Truck },
    { label: "Average Fleet Age", value: "3.5 yrs", icon: Calendar },
    { label: "Maintenance Centers", value: "4", icon: Wrench },
    { label: "Uptime Rate", value: "98.5%", icon: Gauge },
  ];

  const equipment = [
    {
      type: "Dry Van Trailers",
      specs: {
        length: "53 feet",
        capacity: "45,000 lbs",
        volume: "3,800 cu ft",
        features: ["Air-ride suspension", "Logistics tracking", "Swing & roll-up doors"],
      },
      icon: Truck,
    },
    {
      type: "Refrigerated (Reefer) Trailers",
      specs: {
        length: "53 feet",
        capacity: "43,000 lbs",
        tempRange: "-20°F to +70°F",
        features: ["Multi-temp zones", "Remote monitoring", "Fuel-efficient units"],
      },
      icon: Thermometer,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Fleet</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Modern, well-maintained equipment backed by in-house maintenance facilities
            </p>
          </div>
        </section>

        {/* Fleet Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {fleetStats.map((stat, index) => (
                <Card key={index} className="border-2 border-slate-200 text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="w-10 h-10 mx-auto mb-4 text-slate-900" />
                    <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Details */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
              Equipment Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {equipment.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-slate-900 rounded-lg">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{item.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(item.specs).map(([key, value]) => {
                          if (Array.isArray(value)) return null;
                          return (
                            <div key={key}>
                              <p className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                              <p className="font-semibold text-slate-900">{value}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-sm font-semibold text-slate-700 mb-2">Features:</p>
                        <ul className="space-y-2">
                          {item.specs.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-700">
                              <Shield className="w-4 h-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Wrench className="w-16 h-16 mx-auto mb-6 text-slate-900" />
              <h2 className="text-4xl font-bold mb-6 text-slate-900">In-House Maintenance</h2>
              <p className="text-lg text-slate-700 mb-8">
                Our state-of-the-art maintenance facilities ensure every vehicle in our fleet meets the highest 
                standards of safety and reliability. With certified technicians and advanced diagnostic equipment, 
                we minimize downtime and maximize performance.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">Preventive Maintenance</h3>
                    <p className="text-sm text-slate-600">Regular inspections and scheduled maintenance prevent issues before they occur</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">24/7 Roadside Support</h3>
                    <p className="text-sm text-slate-600">Emergency support network across all major routes</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">DOT Compliance</h3>
                    <p className="text-sm text-slate-600">All vehicles meet or exceed safety regulations</p>
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

export default Fleet;

