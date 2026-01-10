import { Truck, Box, Thermometer, Users, Globe, Warehouse, Wrench, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Box,
      title: "LTL Freight",
      description: "Cost-effective solutions for smaller loads with shared truck space",
      link: "/industries",
    },
    {
      icon: Truck,
      title: "FTL Services",
      description: "Dedicated trucks for full loads with direct routes and faster delivery",
      link: "/fleet",
    },
    {
      icon: Thermometer,
      title: "Refrigerated Transport",
      description: "Temperature-controlled shipping for perishable and sensitive cargo",
      link: "/fleet",
    },
    {
      icon: Users,
      title: "Team Drivers",
      description: "Single and team driver options for your timeline requirements",
      link: "/careers",
    },
    {
      icon: Globe,
      title: "Cross-Border",
      description: "Seamless Canada-USA freight with CTPAT-certified operations",
      link: "/compliance",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Strategic storage facilities across Western and Central Canada",
      link: "/locations",
    },
    {
      icon: Wrench,
      title: "Fleet Maintenance",
      description: "In-house repair facilities ensuring maximum uptime and reliability",
      link: "/fleet",
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "CTPAT-compliant operations meeting the highest security standards",
      link: "/compliance",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Built for dependability, efficiency, and tailored solutions — no matter the size or complexity of your freight needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="h-full border-2 border-slate-200 hover:border-slate-900 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardHeader>
                  <div className="mb-4 p-4 bg-slate-900 w-fit rounded-lg group-hover:bg-slate-800 transition-colors">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/solutions">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white h-12 px-8 text-lg font-semibold">
              Request a Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
