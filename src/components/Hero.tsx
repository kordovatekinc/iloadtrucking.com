import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/primary.png"
          alt="iLoad Trucking fleet on highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-8">
        {/* Big Logo */}
        <div className="mb-8 animate-scale-in">
          <img 
            src="/logo-final.png" 
            alt="iLoad Trucking" 
            className="h-28 md:h-36 mx-auto drop-shadow-2xl"
          />
        </div>

        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold border border-gold/40 animate-fade-in-up delay-100">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Asset-Based Carrier • Canada-U.S. Bonded</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-200">
          Dependable Freight. <br />
          <span className="text-gold">Cross-Border Excellence.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-300">
          Asset-based transportation and logistics delivering consistency, compliance, and real-time visibility across North America
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-400">
          <Link to="/solutions">
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold/90 text-lg h-14 px-8 font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/locations">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black text-lg h-14 px-8 font-semibold transition-all duration-300 hover:scale-105"
            >
              Our Locations
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up delay-500">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gold/30 transition-all duration-300 hover:bg-white/10 hover:border-gold/50 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5</div>
            <div className="text-sm text-white/80">Hub Locations</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gold/30 transition-all duration-300 hover:bg-white/10 hover:border-gold/50 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</div>
            <div className="text-sm text-white/80">Dispatch</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gold/30 transition-all duration-300 hover:bg-white/10 hover:border-gold/50 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10K+</div>
            <div className="text-sm text-white/80">Sq Ft Warehouse</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gold/30 transition-all duration-300 hover:bg-white/10 hover:border-gold/50 hover:scale-105">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-gold" />
              <div className="text-2xl md:text-3xl font-bold text-gold">Bonded</div>
            </div>
            <div className="text-sm text-white/80">Canada-U.S. Carrier</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
