import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, MapPin } from "lucide-react";
import primaryImage from "@/assets/primary.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={primaryImage}
          alt="Budget Carriers truck on highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Serving North America Since 2014</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
          Reliable. On Time. <br />
          <span className="text-slate-200">Every Mile.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in">
          Trusted Canadian transportation and logistics solutions delivering excellence across North America
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-16">
          <Link to="/solutions">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 text-lg h-14 px-8 font-semibold group"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/track">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-white text-slate-900 hover:bg-slate-100 text-lg h-14 px-8 font-semibold"
            >
              Track Load
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4</div>
            <div className="text-sm text-white/80">Hub Locations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-white/80">Operations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-white" />
              <div className="text-2xl md:text-3xl font-bold text-white">CTPAT</div>
            </div>
            <div className="text-sm text-white/80">Certified</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm">Learn More</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
