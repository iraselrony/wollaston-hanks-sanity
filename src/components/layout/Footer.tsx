import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-cream/70">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-xl text-gold-light mb-4">WOLLASTON HANKS</h3>
            <p className="text-xs tracking-[0.2em] uppercase text-gold/50 mb-4">
              Strategic Development & Investment Platform
            </p>
            <p className="text-sm leading-relaxed">
              Originating, structuring and delivering complex real estate opportunities across the United Kingdom and United States.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-gold mb-6">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/platform/strategic-development" className="hover:text-gold transition-colors">Strategic Development</Link></li>
              <li><Link to="/platform/capital-advisory" className="hover:text-gold transition-colors">Capital & Asset Advisory</Link></li>
              <li><Link to="/platform/sales" className="hover:text-gold transition-colors">Investment & Development Sales</Link></li>
              <li><Link to="/platform/development-delivery" className="hover:text-gold transition-colors">Development Delivery</Link></li>
              <li><Link to="/developments" className="hover:text-gold transition-colors">Developments</Link></li>
              <li><Link to="/opportunities" className="hover:text-gold transition-colors">Opportunities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-gold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/regions/united-kingdom" className="hover:text-gold transition-colors">United Kingdom</Link></li>
              <li><Link to="/regions/united-states" className="hover:text-gold transition-colors">United States</Link></li>
              <li><Link to="/submit-opportunity" className="hover:text-gold transition-colors">Submit Opportunity</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-gold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>London, United Kingdom<br />New York, United States</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+44 (0)1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>contact@wollastonhanks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Wollaston Hanks Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/40">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
