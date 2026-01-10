import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import budgetLogo from "@/assets/budget.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src={budgetLogo} 
              alt="Budget Carriers Inc." 
              className="h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`text-foreground hover:text-accent transition-colors font-medium ${location.pathname === "/" ? "text-accent" : ""}`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/fleet" className="block px-4 py-2 text-sm hover:bg-slate-50 transition-colors">Fleet & Equipment</Link>
                <Link to="/locations" className="block px-4 py-2 text-sm hover:bg-slate-50 transition-colors">Locations</Link>
                <Link to="/industries" className="block px-4 py-2 text-sm hover:bg-slate-50 transition-colors">Industries</Link>
                <Link to="/compliance" className="block px-4 py-2 text-sm hover:bg-slate-50 transition-colors">Compliance & Safety</Link>
              </div>
            </div>

            <Link
              to="/solutions"
              className={`text-foreground hover:text-accent transition-colors font-medium ${location.pathname === "/solutions" ? "text-accent" : ""}`}
            >
              Get a Quote
            </Link>

            <Link
              to="/resources"
              className={`text-foreground hover:text-accent transition-colors font-medium ${location.pathname === "/resources" ? "text-accent" : ""}`}
            >
              Resources
            </Link>

            <Link
              to="/careers"
              className={`text-foreground hover:text-accent transition-colors font-medium ${location.pathname === "/careers" ? "text-accent" : ""}`}
            >
              Careers
            </Link>

            <Link to="/track">
              <Button variant="navy" size="default">
                Track Load
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
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </Link>
            
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/fleet" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-accent">Fleet & Equipment</Link>
                  <Link to="/locations" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-accent">Locations</Link>
                  <Link to="/industries" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-accent">Industries</Link>
                  <Link to="/compliance" onClick={closeMobileMenu} className="block text-sm text-foreground hover:text-accent">Compliance & Safety</Link>
                </div>
              )}
            </div>

            <Link
              to="/solutions"
              onClick={closeMobileMenu}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Get a Quote
            </Link>

            <Link
              to="/resources"
              onClick={closeMobileMenu}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Resources
            </Link>

            <Link
              to="/careers"
              onClick={closeMobileMenu}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Careers
            </Link>

            <Link to="/track" onClick={closeMobileMenu}>
              <Button variant="navy" size="default" className="w-full">
                Track Load
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
