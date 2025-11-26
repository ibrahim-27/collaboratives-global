import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const services = [
  { title: "Financial Management" },
  { title: "Assurance and Compliance" },
  { title: "Risk Advisory" },
  { title: "Standardization and Optimization" },
  { title: "Financial-Operational Management" },
  { title: "Enterprise Resource Planning" },
  { title: "Taxation" },
  { title: "Information Technology" },
  { title: "Corporate Governance" },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 text-primary"
          : "bg-primary py-4 text-white shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight">
          COLLABORATIVES GLOBAL
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-secondary transition-colors">
            Home
          </Link>
          <Link to="/about-us" className="font-medium hover:text-secondary transition-colors">
            About Us
          </Link>
          
          <div className="relative group">
            <button
              onClick={() => setDropdown(dropdown === "services" ? null : "services")}
              className="flex items-center gap-1 font-medium hover:text-secondary transition-colors focus:outline-none"
            >
              Services <FaChevronDown size={12} className={`transition-transform ${dropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown */}
            {(dropdown === "services") && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2 animate-fade-scale-in">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                    onClick={() => setDropdown(null)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/industries" className="font-medium hover:text-secondary transition-colors">
            Industries
          </Link>
          <Link to="/careers" className="font-medium hover:text-secondary transition-colors">
            Careers
          </Link>
          <Link to="/contact-us" className="font-medium hover:text-secondary transition-colors">
            Contact Us
          </Link>
          
          <Link to="/contact-us" className="bg-secondary hover:bg-secondary-light text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get Consultancy
          </Link>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white text-primary shadow-xl border-t border-gray-100 flex flex-col p-6 gap-4 md:hidden animate-slide-up">
            <Link to="/" className="text-lg font-medium hover:text-secondary">Home</Link>
            <Link to="/about-us" className="text-lg font-medium hover:text-secondary">About Us</Link>
            <button 
              onClick={() => setDropdown(dropdown === "services" ? null : "services")}
              className="flex items-center justify-between text-lg font-medium hover:text-secondary"
            >
              Services <FaChevronDown size={14} className={`transition-transform ${dropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {dropdown === "services" && (
              <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 ml-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-600 hover:text-secondary"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/industries" className="text-lg font-medium hover:text-secondary">Industries</Link>
            <Link to="/careers" className="text-lg font-medium hover:text-secondary">Careers</Link>
            <Link to="/contact-us" className="text-lg font-medium hover:text-secondary">Contact Us</Link>
            <Link to="/contact-us" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold mt-2">
              Get Consultancy
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
