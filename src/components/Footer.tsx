import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img 
                src="/logo-final.png" 
                alt="iLoad Trucking" 
                className="h-12 mb-4"
              />
              <p className="text-gray-400 text-sm mb-4">
                Asset-based transportation and logistics across North America
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>225 4 Ave E Unit B, Regina, SK S4N 4X9</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4 text-gold" />
                  <a href="tel:+13062166224" className="hover:text-gold transition-colors">
                    (306) 216-6224
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4 text-gold" />
                  <a href="mailto:sales@iloadtrucking.com" className="hover:text-gold transition-colors">
                    sales@iloadtrucking.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/fleet" className="hover:text-gold transition-colors">
                    Fleet & Equipment
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="hover:text-gold transition-colors">
                    Locations & Warehousing
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-gold transition-colors">
                    Industries We Serve
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="hover:text-gold transition-colors">
                    Compliance & Safety
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/" className="hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-gold transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="hover:text-gold transition-colors">
                    Resources & Blog
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-gold transition-colors">
                    Request a Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gold">Quick Actions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/solutions" className="hover:text-gold transition-colors">
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <a href="tel:+13062166224" className="hover:text-gold transition-colors">
                    Call Dispatch
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@iloadtrucking.com" className="hover:text-gold transition-colors">
                    Email Us
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xs text-gray-500 mb-2">Operating Hours</p>
                <p className="text-sm font-semibold text-gold">24/7 Dispatch</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © 2026 iLoad Trucking. All Rights Reserved.
            </p>
            <p>
              Website by{" "}
              <a 
                href="https://kordovatek.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gold hover:text-gold/80 transition-colors"
              >
                Kordova Tek Inc.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
