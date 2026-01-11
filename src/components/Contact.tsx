import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
New Contact Message

From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:services@iloadtrucking.com?subject=Contact Form Message&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opening",
      description: "Your message will be sent via your email client.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            Ready to optimize your freight logistics? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gold">iLoad Trucking</h3>
              <p className="text-gray-400 text-lg mb-8">
                Asset-based transportation and logistics delivering dependable freight solutions across North America
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 border-gold/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-white">Headquarters</p>
                      <p className="text-gray-400">225 4 Ave E Unit B</p>
                      <p className="text-gray-400">Regina, SK S4N 4X9</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-gold/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-white">Phone</p>
                      <a
                        href="tel:+13062166224"
                        className="text-gray-400 hover:text-gold transition-colors text-lg"
                      >
                        (306) 216-6224
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-gold/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-white">Email</p>
                      <a
                        href="mailto:services@iloadtrucking.com"
                        className="text-gray-400 hover:text-gold transition-colors"
                      >
                        services@iloadtrucking.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-gold/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-white">Dispatch</p>
                      <p className="text-gold font-semibold">24/7 Operations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-6">
              <Link to="/solutions">
                <Button className="bg-gold text-black hover:bg-gold/90 w-full md:w-auto px-8 h-12 text-lg font-semibold">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-gold/20 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background border-border text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background border-border text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border text-white placeholder:text-gray-500"
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-gold hover:bg-gold/90 text-black font-semibold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
