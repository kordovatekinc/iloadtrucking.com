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

    const mailtoLink = `mailto:Info@budgetcarrierinc.com?subject=Contact Form Message&body=${encodeURIComponent(emailBody)}`;
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
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-300">
            Ready to optimize your freight logistics? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Budget Carriers Inc.</h3>
              <p className="text-slate-300 text-lg mb-8">
                Serving Canada and the United States with reliable transportation solutions since 2014
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-white">Headquarters</p>
                      <p className="text-slate-300">155 McDonald Street</p>
                      <p className="text-slate-300">Regina, SK, Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-white">Phone</p>
                      <a
                        href="tel:+13062699777"
                        className="text-slate-300 hover:text-white transition-colors text-lg"
                      >
                        (306) 269-9777
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-white">Email</p>
                      <a
                        href="mailto:Info@budgetcarrierinc.com"
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        Info@budgetcarrierinc.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-white">Dispatch</p>
                      <p className="text-slate-300">24/7 Operations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-6">
              <Link to="/solutions">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 w-full md:w-auto px-8 h-12 text-lg font-semibold">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-slate-300"
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-semibold">
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
