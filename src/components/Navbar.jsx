import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
    const navigate = useNavigate();

    return (
        <>
            <nav className="flex justify-between px-6 py-3 sm:py-5 relative bg-primary text-white md:px-12 lg:px-16">
                <Link to='/' className="text-xl font-bold">Collaboratives Global</Link>
                <ul className="flex flex-col gap-3 sm:flex-row sm:gap-6 text-lg">
                    {/* <Link to="/" className="hover:underline hover:text-secondary">
                        Home
                    </Link> */}
                    <Link to="/about-us" className="hover:underline hover:text-secondary">
                        About Us
                    </Link>
                    <div
                        className="relative"
                    >
                        <button
                            onClick={() => dropdown == 'services' ? setDropdown(null) : setDropdown('services')}
                            className="hover:underline focus:outline-none hover:text-secondary"
                        >
                            Services 
                        </button>
                        {dropdown === 'services' && (
                            <ul
                                className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-dropdown"
                                style={{ top: '100%' }}
                            >
                                {services.map((service, index) => (
                                    <li key={index} className="text-text-secondary hover:bg-secondary hover:text-white">
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
                </ul>
            </nav>
            <hr className="border-gray-200" />
        </>
    );
};

export default Navbar;