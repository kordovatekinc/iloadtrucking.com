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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Industry knowledge, shipping guides, and logistics best practices
            </p>
          </div>
        </section>

        {/* Quick Guides */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Quick Reference Guides
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="border-2 border-slate-200 hover:border-slate-900 transition-all cursor-pointer">
                    <CardContent className="pt-6 text-center">
                      <guide.icon className="w-12 h-12 mx-auto mb-4 text-slate-900" />
                      <h3 className="font-bold mb-2 text-slate-900">{guide.title}</h3>
                      <p className="text-sm text-slate-600">{guide.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Industry Articles & Updates
              </h2>

              <div className="space-y-6">
                {articles.map((article, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <span className="px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-slate-500">{article.date}</span>
                      </div>
                      <CardTitle className="text-2xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">{article.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">
                      What areas do you service?
                    </h3>
                    <p className="text-slate-700">
                      We provide comprehensive freight services throughout Canada and the United States, 
                      with primary hubs in Regina SK, Mississauga ON, Winnipeg MB, and Calgary AB. 
                      Our network covers all major routes across North America.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">
                      How do I get a shipping quote?
                    </h3>
                    <p className="text-slate-700">
                      Request a quote through our Solutions page by providing origin, destination, freight type, 
                      and weight. Our team will respond within 24 hours with competitive pricing and service options.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">
                      Do you offer temperature-controlled shipping?
                    </h3>
                    <p className="text-slate-700">
                      Yes, we operate a fleet of refrigerated trailers capable of maintaining temperatures 
                      from -20°F to +70°F, ideal for perishable goods, pharmaceuticals, and temperature-sensitive cargo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">
                      What documents are required for cross-border shipping?
                    </h3>
                    <p className="text-slate-700">
                      Cross-border shipments typically require commercial invoice, bill of lading, PAPS/PARS numbers, 
                      and customs documentation. Our dispatch team assists with all paperwork to ensure smooth customs clearance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">
                      How can I track my shipment?
                    </h3>
                    <p className="text-slate-700">
                      Use our Track Load page with your tracking number or reference number for real-time status updates. 
                      You can also contact our dispatch team directly at (306) 269-9777 for immediate assistance.
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

