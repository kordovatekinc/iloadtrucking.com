import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingDown, Route, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Solutions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    freight: "",
    weight: "",
    service: "FTL",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
New Freight Quote Request

Company: ${formData.company}
Contact: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Shipment Details:
Origin: ${formData.origin}
Destination: ${formData.destination}
Freight Type: ${formData.freight}
Weight: ${formData.weight}
Service Type: ${formData.service}
Timeline: ${formData.timeline}

Additional Information:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:services@iloadtrucking.com?subject=Freight Quote Request - ${formData.company}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Quote Request Prepared",
      description: "Your email client will open with the quote request.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const solutions = [
    {
      icon: TrendingDown,
      title: "Cost Optimization",
      description: "Reduce freight costs with LTL consolidation, route optimization, and volume discounts",
    },
    {
      icon: Route,
      title: "Route Planning",
      description: "Efficient routing for FTL and multi-stop deliveries across Canada and USA",
    },
    {
      icon: Clock,
      title: "Time-Sensitive",
      description: "Expedited services and team driver options for urgent deliveries",
    },
    {
      icon: Calculator,
      title: "Custom Solutions",
      description: "Tailored logistics strategies for unique freight requirements",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Freight <span className="text-gold">Solutions</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Customized transportation strategies designed to optimize your supply chain
            </p>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-2 border-border bg-background text-center hover:border-gold transition-all">
                  <CardContent className="pt-6">
                    <solution.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                    <h3 className="font-bold text-lg mb-2 text-white">{solution.title}</h3>
                    <p className="text-sm text-gray-400">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">Request a <span className="text-gold">Quote</span></h2>
                <p className="text-lg text-gray-400">
                  Get a customized freight quote tailored to your specific shipping needs
                </p>
              </div>

              <Card className="border-0 shadow-xl bg-card border border-gold/20">
                <CardHeader className="bg-black text-white border-b border-gold/30">
                  <CardTitle className="text-2xl text-gold">Freight Quote Request Form</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="h-11 bg-background border-border text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Contact Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-11 bg-background border-border text-white"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-11 bg-background border-border text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-11 bg-background border-border text-white"
                        />
                      </div>
                    </div>

                    {/* Shipment Details */}
                    <div className="pt-6 border-t border-border">
                      <h3 className="text-lg font-bold text-gold mb-4">Shipment Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Origin (City, Province/State) *
                          </label>
                          <Input
                            type="text"
                            name="origin"
                            value={formData.origin}
                            onChange={handleChange}
                            required
                            className="h-11 bg-background border-border text-white"
                            placeholder="Regina, SK"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Destination (City, Province/State) *
                          </label>
                          <Input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                            className="h-11 bg-background border-border text-white"
                            placeholder="Toronto, ON"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Freight Type *
                          </label>
                          <select
                            name="freight"
                            value={formData.freight}
                            onChange={handleChange}
                            required
                            className="w-full h-11 px-3 bg-background border border-border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold"
                          >
                            <option value="">Select type</option>
                            <option value="General">General Freight</option>
                            <option value="Refrigerated">Refrigerated</option>
                            <option value="Dry Van">Dry Van</option>
                            <option value="Hazmat">Hazmat</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Weight (lbs) *
                          </label>
                          <Input
                            type="text"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            required
                            className="h-11 bg-background border-border text-white"
                            placeholder="e.g., 45000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Service Type *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full h-11 px-3 bg-background border border-border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold"
                          >
                            <option value="FTL">TL (Truckload)</option>
                            <option value="LTL">LTL (Less than Truckload)</option>
                            <option value="Expedited">Expedited</option>
                            <option value="Cross-Border">Cross-Border</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Desired Pickup/Delivery Timeline *
                        </label>
                        <Input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="h-11 bg-background border-border text-white"
                          placeholder="e.g., Within 3 days, November 1-5, ASAP"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Additional Details
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Special handling requirements, frequency of shipments, etc."
                          className="bg-background border-border text-white"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-gold hover:bg-gold/90 text-black font-semibold text-lg"
                    >
                      Request Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Choose the Right <span className="text-gold">Service</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-gold/30 bg-background">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gold">TL (Truckload)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">
                      Dedicated truck for your freight with direct routing and faster delivery
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold text-white">Best for:</p>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Shipments over 10,000 lbs</li>
                        <li>• Time-sensitive deliveries</li>
                        <li>• High-value cargo</li>
                        <li>• Single origin/destination</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gold/30 bg-background">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gold">LTL (Less than Truckload)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">
                      Cost-effective solution for smaller shipments sharing truck space
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold text-white">Best for:</p>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Shipments under 10,000 lbs</li>
                        <li>• Budget-conscious shipping</li>
                        <li>• Regular smaller loads</li>
                        <li>• Flexible timelines</li>
                      </ul>
                    </div>
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

export default Solutions;

