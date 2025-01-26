import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import hamburgerOpen from "../assets/hamburger-open.png";
import hamburgerClose from "../assets/hamburger-close.png";

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

  return (
      <>
          <nav className="flex justify-between items-center px-4 py-3 sm:py-5 relative bg-primary text-white md:px-8 lg:px-12">
              <Link to='/' className="text-xl font-bold">COLLABORATIVES GLOBAL</Link>
              <div className="sm:hidden absolute top-2 right-2">
                <img 
                src={isMenuOpen?hamburgerClose:hamburgerOpen}
                className={`${isMenuOpen?'w-6 h-6':'w-8 h-8'}`}
                onClick={()=>setIsMenuOpen(prev => !prev)}
                 />
              </div>
              <ul className={`flex flex-col md:items-center gap-3 sm:flex-row md:gap-6 mr-6 md:text-lg ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
                  <Link to="/" className="hover:underline hover:text-secondary">
                      Home
                  </Link>
                  <Link to="/about-us" className="hover:underline hover:text-secondary">
                      About Us
                  </Link>
                  <div className="relative">
                      <button
                          onClick={() => dropdown === 'services' ? setDropdown(null) : setDropdown('services')}
                          className="flex items-center gap-1 hover:underline focus:outline-none hover:text-secondary"
                      >
                          Services <FaChevronDown size={16}/>
                      </button>
                      {dropdown === 'services' && (
                          <ul
                              className="absolute -left-32 md:left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-dropdown"
                              style={{ top: '100%' }}
                          >
                              {services.map((service, index) => (
                                  <li key={index} className="text-text-secondary hover:bg-secondary hover:text-white rounded-md">
                                      <Link
                                          onClick={() => setDropdown(null)}
                                          to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                          className="block px-4 py-2"
                                      >
                                          {service.title}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      )}
                  </div>
                  <Link to="/industries" className="hover:underline hover:text-secondary">
                      Industries
                  </Link>
                  <Link to="/contact-us" className="hover:underline hover:text-secondary">
                      Contact Us
                  </Link>
                  <Link to="/careers" className="hover:underline hover:text-secondary">
                      Careers
                  </Link>
              <div className="md:ml-4 flex">
                <button className="bg-secondary text-white px-4 py-2 rounded-md w-fit">Get Consultancy</button>
              </div>
              </ul>
          </nav>
          {/* <hr className="border-gray-200" /> */}
      </>
  );
};

export default Navbar;
