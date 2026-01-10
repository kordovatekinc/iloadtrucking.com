import { Truck, Box, Thermometer, Users, Globe, Warehouse, Wrench, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Truckload (TL)",
      description: "Dedicated trucks for full loads with direct routes and faster delivery",
      link: "/fleet",
    },
    {
      icon: Box,
      title: "LTL Freight",
      description: "Cost-effective solutions for smaller loads with shared truck space",
      link: "/industries",
    },
    {
      icon: Globe,
      title: "Cross-Border",
      description: "Seamless Canada-USA freight with CTPAT-certified bonded operations",
      link: "/compliance",
    },
    {
      icon: Users,
      title: "Expedited",
      description: "Time-sensitive freight with team driver options for urgent deliveries",
      link: "/careers",
    },
    {
      icon: Thermometer,
      title: "Reefer & Dry Van",
      description: "Temperature-controlled and dry van transport for all cargo types",
      link: "/fleet",
    },
    {
      icon: Shield,
      title: "Hazmat",
      description: "Certified hazardous materials transport with full compliance",
      link: "/compliance",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "10,000+ sq ft across Regina, Saskatoon, Calgary, Mississauga, San Diego",
      link: "/locations",
    },
    {
      icon: Wrench,
      title: "Fleet Maintenance",
      description: "In-house inspections, diagnostics, and repairs for maximum uptime",
      link: "/fleet",
    },
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
            Comprehensive <span className="text-gold">Logistics Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Built for dependability, efficiency, and tailored solutions — no matter the size or complexity of your freight needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="h-full bg-background border-2 border-border hover:border-gold hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <CardHeader>
                  <div className="mb-4 p-4 bg-gold w-fit rounded-lg group-hover:bg-gold/90 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center animate-fade-in-up delay-500">
          <Link to="/solutions">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-black h-12 px-8 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30">
              Request a Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
