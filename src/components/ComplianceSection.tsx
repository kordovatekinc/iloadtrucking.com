import { Link } from "react-router-dom";
import { Shield, Award, CheckCircle2, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComplianceSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "CTPAT Certified",
      description: "Trusted security partnership ensuring fast border crossings",
    },
    {
      icon: Award,
      title: "DOT Compliant",
      description: "Full compliance with safety and transportation regulations",
    },
    {
      icon: Lock,
      title: "Secure Operations",
      description: "Protected facilities with 24/7 security monitoring",
    },
    {
      icon: CheckCircle2,
      title: "Safety First",
      description: "Satisfactory safety rating with rigorous standards",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Industry-Leading Standards</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Safety & Compliance Excellence
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Protecting your cargo with the highest security and regulatory standards in the industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 bg-white rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-slate-900">
              <h3 className="text-3xl font-bold mb-4">
                🇨🇦 CTPAT-Certified Cross-Border Operations 🇺🇸
              </h3>
              <p className="text-lg text-slate-700 mb-6">
                Our Customs-Trade Partnership Against Terrorism certification means faster 
                customs processing, reduced inspections, and enhanced security for your international shipments.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Priority processing at Canada-USA borders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Reduced inspection times and delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Enhanced supply chain security protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Trusted partnership with CBP and CBSA</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <Card className="border-2 border-slate-200 bg-slate-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900 mb-2">98.5%</div>
                    <p className="text-sm text-slate-600">On-Time Delivery Rate</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-slate-200 bg-slate-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900 mb-2">$2M</div>
                    <p className="text-sm text-slate-600">Cargo Liability Coverage</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-slate-200 bg-slate-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                    <p className="text-sm text-slate-600">Security Monitoring</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/compliance">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 text-lg h-14 px-8 font-semibold">
              View Full Compliance Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

