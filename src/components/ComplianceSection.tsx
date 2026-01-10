import { Link } from "react-router-dom";
import { Truck, Globe, Warehouse, Wrench, CheckCircle2, MapPin
 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComplianceSection = () => {
  const highlights = [
    {
      icon: Truck,
      title: "Asset-Based Fleet",
      description: "Own trucks and specialized trailers for dependable operations",
    },
    {
      icon: Globe,
      title: "Cross-Border Bonded",
      description: "Canada-U.S. bonded carrier for seamless international freight",
    },
    {
      icon: Warehouse,
      title: "Strategic Warehousing",
      description: "10,000+ sq ft across 5 locations in Canada and the U.S.",
    },
    {
      icon: Wrench,
      title: "In-House Maintenance",
      description: "Fleet maintenance ensuring safety, compliance, and uptime",
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold border border-gold/40 mb-6 animate-fade-in-up">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">Full-Service Logistics Partner</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up delay-100">
            Why <span className="text-gold">iLoad Trucking</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up delay-200">
            More than a carrier — a complete transportation and logistics solution for North American freight
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-gold/20 hover:border-gold/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-gold/10 animate-fade-in-up" style={{ animationDelay: `${index * 100 + 300}ms` }}>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 bg-gold rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl border border-gold/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4 text-gold">
                Complete Freight Solutions
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                iLoad Trucking operates its own fleet of trucks and specialized trailers to deliver 
                dependable freight solutions. As a Canada–U.S. bonded carrier, we focus on cross-border 
                operations and time-sensitive freight with consistency, compliance, and real-time visibility.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Truckload (TL), LTL, and expedited shipments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Cross-border freight, hazmat, and reefer transport</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Dispatch, scheduling, rate analysis, and consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Warehousing, staging, and freight consolidation</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <Card className="border-2 border-gold/30 bg-black">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPin className="w-6 h-6 text-gold" />
                      <div className="text-3xl font-bold text-gold">5</div>
                    </div>
                    <p className="text-sm text-gray-400">Strategic Hub Locations</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-gold/30 bg-black">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold mb-2">10K+</div>
                    <p className="text-sm text-gray-400">Sq Ft Warehouse Space</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-gold/30 bg-black">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold mb-2">24/7</div>
                    <p className="text-sm text-gray-400">Dispatch Operations</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/locations">
            <Button className="bg-gold text-black hover:bg-gold/90 text-lg h-14 px-8 font-semibold">
              View Our Locations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

