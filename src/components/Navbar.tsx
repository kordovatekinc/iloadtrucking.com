import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      // Show logo after scrolling past hero section (~400px)
      setShowLogo(scrollY > 400 || !isHomePage);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-black ${
        isScrolled 
          ? "shadow-lg shadow-black/20 py-2" 
          : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[56px]">
          <Link
            to="/"
            className={`transition-all duration-500 ease-out transform ${
              showLogo 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-4 pointer-events-none"
            }`}
          >
            <img 
              src="/logo-final.png" 
              alt="iLoad Trucking" 
              className={`transition-all duration-500 ${showLogo ? "h-12" : "h-0"}`}
            />
          </Link>
          
          {/* Spacer when logo is hidden */}
          {!showLogo && <div className="w-1" />}

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`text-foreground hover:text-gold transition-colors font-medium ${location.pathname === "/" ? "text-gold" : ""}`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-gold transition-colors font-medium">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border">
                <Link to="/fleet" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-gold transition-colors">Fleet & Equipment</Link>
                <Link to="/locations" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-gold transition-colors">Locations</Link>
                <Link to="/industries" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-gold transition-colors">Industries</Link>
                <Link to="/compliance" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-gold transition-colors">Compliance & Safety</Link>
              </div>
            </div>

            <Link
              to="/resources"
              className={`text-foreground hover:text-gold transition-colors font-medium ${location.pathname === "/resources" ? "text-gold" : ""}`}
            >
              Resources
            </Link>

            <Link
              to="/careers"
              className={`text-foreground hover:text-gold transition-colors font-medium ${location.pathname === "/careers" ? "text-gold" : ""}`}
            >
              Careers
            </Link>

            <Link to="/solutions">
              <Button variant="gold" size="default">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-4 pb-4">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-left text-foreground hover:text-gold transition-colors font-medium"
            >
              Home
            </Link>
            
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-left text-foreground hover:text-gold transition-colors font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/fleet" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-gold">Fleet & Equipment</Link>
                  <Link to="/locations" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-gold">Locations</Link>
                  <Link to="/industries" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-gold">Industries</Link>
                  <Link to="/compliance" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-gold">Compliance & Safety</Link>
                </div>
              )}
            </div>

            <Link
              to="/resources"
              onClick={closeMobileMenu}
              className="text-left text-foreground hover:text-gold transition-colors font-medium"
            >
              Resources
            </Link>

            <Link
              to="/careers"
              onClick={closeMobileMenu}
              className="text-left text-foreground hover:text-gold transition-colors font-medium"
            >
              Careers
            </Link>

            <Link to="/solutions" onClick={closeMobileMenu}>
              <Button variant="gold" size="default" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
