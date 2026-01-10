import { Link } from "react-router-dom";
import { CheckCircle2, Award, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Consistent on-time performance across every shipment",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Industry-leading standards in safety and service quality",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Tailored logistics solutions for your unique needs",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships based on trust",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
            About <span className="text-gold">iLoad Trucking</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Asset-based transportation delivering dependable freight solutions across North America
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <img
              src="/A.png"
              alt="iLoad Trucking fleet"
              className="rounded-2xl shadow-2xl w-full h-auto border border-gold/20 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6 text-gray-300 text-lg animate-fade-in-right">
            <p>
              iLoad Trucking is an <strong className="text-gold">asset-based transportation and logistics company</strong> operating 
              its own fleet of trucks and specialized trailers to deliver dependable freight solutions across North America.
            </p>
            <p>
              As a <strong className="text-gold">Canada–U.S. bonded carrier</strong>, we focus on cross-border operations 
              and time-sensitive freight, supporting customers that move goods between provinces, states, and international 
              borders with consistency, compliance, and real-time visibility.
            </p>
            <p>
              Our core services span TL, LTL, expedited shipments, cross-border freight, hazmat loads, and 
              temperature-controlled transport. Beyond hauling freight, we provide <strong className="text-gold">full-service logistics</strong> including 
              dispatch, scheduling, rate analysis, consulting, and billing.
            </p>
            <p>
              With over <strong className="text-gold">10,000 sq ft of warehouse space</strong> across Regina, Saskatoon, Calgary, 
              Mississauga, and San Diego, plus in-house fleet maintenance, we deliver end-to-end logistics solutions.
            </p>
            <div className="pt-4">
              <Link 
                to="/compliance"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold/80 transition-colors"
              >
                Learn about our CTPAT certification
                <CheckCircle2 className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-card border-2 border-border text-center hover:border-gold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/10 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-gold transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-lg mb-2 text-white">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
