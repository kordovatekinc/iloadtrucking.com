import { ShoppingBag, Factory, Store, Package, Building2, Wheat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Industries = () => {
  const industries = [
    {
      name: "Food & Beverage",
      icon: Package,
      description: "Temperature-controlled transport for perishable goods, beverages, and packaged foods with strict timeline adherence.",
      services: [
        "Refrigerated & dry van transport",
        "Multi-temperature capability",
        "Food safety compliance",
        "Time-sensitive deliveries",
        "Cross-border food shipping",
      ],
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Just-in-time delivery for raw materials, components, and finished goods supporting production schedules.",
      services: [
        "JIT & scheduled deliveries",
        "FTL & LTL options",
        "Heavy equipment transport",
        "Supply chain integration",
        "Returns management",
      ],
    },
    {
      name: "Retail & E-commerce",
      icon: Store,
      description: "Reliable distribution solutions connecting warehouses to retail locations and fulfillment centers.",
      services: [
        "High-volume distribution",
        "Store delivery programs",
        "Seasonal surge capacity",
        "Cross-docking services",
        "Reverse logistics",
      ],
    },
    {
      name: "Consumer Goods",
      icon: ShoppingBag,
      description: "Efficient transport of packaged goods, household products, and consumer electronics with flexible scheduling.",
      services: [
        "Multi-stop routing",
        "Consolidation services",
        "Inventory management",
        "White glove delivery",
        "Product protection protocols",
      ],
    },
    {
      name: "Construction",
      icon: Building2,
      description: "Specialized hauling for building materials, equipment, and supplies to job sites across North America.",
      services: [
        "Heavy & oversized loads",
        "Job site deliveries",
        "Flatbed & dry van options",
        "Flexible scheduling",
        "Material damage prevention",
      ],
    },
    {
      name: "Agriculture",
      icon: Wheat,
      description: "Farm-to-market transportation for crops, livestock feed, equipment, and agricultural supplies.",
      services: [
        "Bulk commodity transport",
        "Seasonal harvest logistics",
        "Equipment hauling",
        "Rural delivery expertise",
        "Temperature control for seeds",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries <span className="text-gold">We Serve</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized logistics solutions tailored to the unique needs of diverse industries
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {industries.map((industry, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-gold/20">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-gold rounded-lg">
                        <industry.icon className="w-8 h-8 text-black" />
                      </div>
                      <CardTitle className="text-2xl text-white">{industry.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-6">{industry.description}</p>
                    <div>
                      <p className="font-semibold text-gold mb-3">Key Services:</p>
                      <ul className="space-y-2">
                        {industry.services.map((service, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Cross-Industry <span className="text-gold">Capabilities</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Our comprehensive logistics infrastructure serves multiple industries with precision and reliability
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <img src="/B.png" alt="iLoad Trucking Fleet" className="rounded-xl shadow-lg border border-gold/20 w-full h-72 object-cover" />
                <img src="/A.png" alt="iLoad Trucking Operations" className="rounded-xl shadow-lg border border-gold/20 w-full h-72 object-cover" />
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-gold">Compliance Expertise</h3>
                    <p className="text-sm text-gray-400">
                      Industry-specific regulations, safety standards, and documentation requirements handled seamlessly
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-gold">Flexible Solutions</h3>
                    <p className="text-sm text-gray-400">
                      Scalable services that adapt to seasonal demands, growth phases, and changing business needs
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-gold">Technology Integration</h3>
                    <p className="text-sm text-gray-400">
                      Real-time visibility and automated reporting for every shipment
                    </p>
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

export default Industries;

