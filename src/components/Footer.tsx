import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import budgetLogo from "@/assets/budget.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img 
                src={budgetLogo} 
                alt="Budget Carriers Inc." 
                className="h-12 mb-4"
              />
              <p className="text-slate-300 text-sm mb-4">
                Trusted Canadian transportation and logistics solutions since 2014
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4" />
                  <span>Regina, SK</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13062699777" className="hover:text-white transition-colors">
                    (306) 269-9777
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:Info@budgetcarrierinc.com" className="hover:text-white transition-colors">
                    Info@budgetcarrierinc.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link to="/fleet" className="hover:text-white transition-colors">
                    Fleet & Equipment
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="hover:text-white transition-colors">
                    Locations & Warehousing
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-white transition-colors">
                    Industries We Serve
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="hover:text-white transition-colors">
                    Compliance & Safety
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="hover:text-white transition-colors">
                    Resources & Blog
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-white transition-colors">
                    Request a Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link to="/track" className="hover:text-white transition-colors">
                    Track Load
                  </Link>
                </li>
                <li>
                  <a href="tel:+13062699777" className="hover:text-white transition-colors">
                    Call Dispatch
                  </a>
                </li>
                <li>
                  <a href="mailto:Info@budgetcarrierinc.com" className="hover:text-white transition-colors">
                    Email Us
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xs text-slate-400 mb-2">Operating Hours</p>
                <p className="text-sm font-semibold">24/7 Dispatch</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © 2025 Budget Carriers Inc. All Rights Reserved.
            </p>
            <p>
              Website by{" "}
              <a 
                href="https://kordovatek.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-slate-300 transition-colors"
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
