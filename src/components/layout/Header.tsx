import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Platform",
    href: "/platform",
    children: [
      { name: "Strategic Development", href: "/platform/strategic-development" },
      { name: "Capital & Asset Advisory", href: "/platform/capital-advisory" },
      { name: "Investment & Development Sales", href: "/platform/sales" },
      { name: "Development Delivery", href: "/platform/development-delivery" },
    ],
  },
  { name: "Developments", href: "/developments" },
  { name: "Opportunities", href: "/opportunities" },
  {
    name: "Regions",
    href: "/regions",
    children: [
      { name: "United Kingdom", href: "/regions/united-kingdom" },
      { name: "United States", href: "/regions/united-states" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container-wide flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col items-start">
          <span className="font-heading text-xl font-bold tracking-wider text-gold-light">
            WOLLASTON HANKS
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
            Strategic Development
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors ${
                    isActive(item.href) ? "text-gold" : "text-cream/80 hover:text-gold"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="w-3 h-3" />
                </Link>
                {openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-navy-dark border border-gold/20 min-w-[260px] py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-5 py-3 text-sm text-cream/70 hover:text-gold hover:bg-navy-light transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm tracking-wide transition-colors ${
                  isActive(item.href) ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            to="/submit-opportunity"
            className="ml-4 px-5 py-2.5 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-navy transition-all"
          >
            Submit Opportunity
          </Link>
        </nav>

        <button
          className="lg:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-gold/20 max-h-[80vh] overflow-y-auto">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                className="block px-6 py-4 text-sm text-cream/80 hover:text-gold border-b border-navy-light"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className="block pl-10 pr-6 py-3 text-sm text-cream/60 hover:text-gold border-b border-navy-light/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/submit-opportunity"
            className="block mx-6 my-4 px-5 py-3 border border-gold text-gold text-sm text-center tracking-wide"
            onClick={() => setMobileOpen(false)}
          >
            Submit Opportunity
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
