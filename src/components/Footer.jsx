import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <Link to='/' className="text-2xl font-display font-bold tracking-tight hover:text-secondary transition-colors">
                            Collaboratives Global
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering businesses with world-class financial and operational solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/" className="text-gray-400 hover:text-secondary transition-colors">Home</Link></li>
                            <li><Link to="/about-us" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-secondary transition-colors">Services</Link></li>
                            <li><Link to="/industries" className="text-gray-400 hover:text-secondary transition-colors">Industries</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/contact-us" className="text-gray-400 hover:text-secondary transition-colors">Contact Us</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-secondary transition-colors">Careers</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-secondary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Connect With Us</h3>
                        <div className="flex gap-4 mb-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Collaboratives Global. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;