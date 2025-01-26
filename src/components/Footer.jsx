import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white p-6 md:px-12 lg:px-16">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Logo and Copyright Section */}
                <div className="flex flex-col gap-4 ">
                    <Link to='/' className="text-2xl font-bold hover:text-secondary hover:underline transition-colors">
                        Collaboratives Global
                    </Link>
                    <p className="text-gray-300 text-lg">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                    <h3 className="text-xl text-center font-semibold mb-2">Quick Links</h3>
                    <ul className="grid md:flex gap-x-6 gap-y-1 text-lg">
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-secondary hover:underline transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-gray-300 hover:text-secondary hover:underline transition-colors">Services</Link>
                        </li>
                        <li>
                            <Link to="/industries" className="text-gray-300 hover:text-secondary hover:underline transition-colors">Industries</Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="text-gray-300 hover:text-secondary hover:underline transition-colors">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="text-gray-300 hover:text-secondary hover:underline transition-colors">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/careers" className="text-gray-300 hover:text-secondary hover:underline transition-colors">Careers</Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Media Links */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                    <ul className="flex gap-6">
                        <li>
                            <Link 
                                to="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-300 hover:text-secondary transition-all duration-300 hover:scale-110 inline-block"
                            >
                                <FaFacebook size={28} />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-300 hover:text-secondary transition-all duration-300 hover:scale-110 inline-block"
                            >
                                <FaTwitter size={28} />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-300 hover:text-secondary transition-all duration-300 hover:scale-110 inline-block"
                            >
                                <FaLinkedin size={28} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;