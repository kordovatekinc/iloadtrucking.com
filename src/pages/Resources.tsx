import { FileText, Book, AlertCircle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  const articles = [
    {
      category: "Industry Insights",
      title: "Cross-Border Shipping: Essential Documentation for Canada-USA Routes",
      description: "Navigate customs requirements with confidence. Learn about essential paperwork, PAPS, PARS, and compliance standards for seamless international freight.",
      date: "October 2025",
    },
    {
      category: "Best Practices",
      title: "Winter Shipping Preparation: Protecting Freight in Canadian Winters",
      description: "Essential strategies for safeguarding temperature-sensitive cargo during harsh winter conditions across Western and Central Canada.",
      date: "October 2025",
    },
    {
      category: "Supply Chain",
      title: "FTL vs LTL: Choosing the Right Shipping Method for Your Business",
      description: "Comprehensive comparison of full truckload and less-than-truckload services to optimize costs and delivery timelines.",
      date: "September 2025",
    },
    {
      category: "Logistics",
      title: "The Role of Warehousing in Modern Supply Chain Management",
      description: "How strategic warehouse locations reduce transit times, lower costs, and improve inventory management efficiency.",
      date: "September 2025",
    },
    {
      category: "Compliance",
      title: "Understanding CTPAT Certification and Border Security",
      description: "Why CTPAT compliance matters for cross-border shipments and how it accelerates customs processing.",
      date: "August 2025",
    },
    {
      category: "Industry Trends",
      title: "The Future of Trucking: Technology and Sustainability",
      description: "Exploring GPS tracking, fuel efficiency innovations, and environmental initiatives shaping the transportation industry.",
      date: "August 2025",
    },
  ];

  const guides = [
    {
      icon: Book,
      title: "Shipping Guide for New Customers",
      description: "Step-by-step process from quote request to delivery confirmation",
    },
    {
      icon: FileText,
      title: "Required Documentation Checklist",
      description: "Complete list of paperwork needed for domestic and international shipments",
    },
    {
      icon: AlertCircle,
      title: "Freight Classification Standards",
      description: "Understanding NMFC codes and how they affect your shipping rates",
    },
    {
      icon: TrendingUp,
      title: "Supply Chain Optimization Tips",
      description: "Strategies to reduce costs and improve delivery performance",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources & <span className="text-gold">Insights</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry knowledge, shipping guides, and logistics best practices
            </p>
          </div>
        </section>

        {/* Quick Guides */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Quick Reference <span className="text-gold">Guides</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="border-2 border-border bg-background hover:border-gold transition-all cursor-pointer">
                    <CardContent className="pt-6 text-center">
                      <guide.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                      <h3 className="font-bold mb-2 text-white">{guide.title}</h3>
                      <p className="text-sm text-gray-400">{guide.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Industry Articles & <span className="text-gold">Updates</span>
              </h2>

              <div className="space-y-6">
                {articles.map((article, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all bg-card border border-gold/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <span className="px-3 py-1 bg-gold text-black text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <CardTitle className="text-2xl text-white">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{article.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>

              <div className="space-y-4">
                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-gold">
                      What areas do you service?
                    </h3>
                    <p className="text-gray-300">
                      We provide comprehensive freight services throughout Canada and the United States, 
                      with hubs in Regina SK, Saskatoon SK, Calgary AB, Mississauga ON, and San Diego CA. 
                      Our network covers all major routes across North America.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-gold">
                      How do I get a shipping quote?
                    </h3>
                    <p className="text-gray-300">
                      Request a quote through our Solutions page by providing origin, destination, freight type, 
                      and weight. Our team will respond within 24 hours with competitive pricing and service options.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-gold">
                      Do you offer temperature-controlled shipping?
                    </h3>
                    <p className="text-gray-300">
                      Yes, we operate a fleet of refrigerated trailers capable of maintaining temperatures 
                      from -20°F to +70°F, ideal for perishable goods, pharmaceuticals, and temperature-sensitive cargo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-gold">
                      What documents are required for cross-border shipping?
                    </h3>
                    <p className="text-gray-300">
                      Cross-border shipments typically require commercial invoice, bill of lading, PAPS/PARS numbers, 
                      and customs documentation. Our dispatch team assists with all paperwork to ensure smooth customs clearance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gold/30 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-gold">
                      How can I get shipment updates?
                    </h3>
                    <p className="text-gray-300">
                      Contact our dispatch team directly at (306) 216-6224 or email sales@iloadtrucking.com for 
                      real-time status updates on your shipment. Our 24/7 dispatch is always available.
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

export default Resources;

