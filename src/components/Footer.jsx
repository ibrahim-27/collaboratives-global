import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white px-6 py-6 md:px-12 lg:px-16">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link to='/' className="text-center md:text-left mb-4 md:mb-0">© Collaboratives Global</Link>
                <ul className="flex flex-col md:flex-row gap-4">
                    {/* <li>
                        <Link to="/" className="hover:underline hover:text-secondary">Home</Link>
                    </li> */}
                    <li>
                        <Link to="/services" className="hover:underline hover:text-secondary">Services</Link>
                    </li>
                    <li>
                        <Link to="/industries" className="hover:underline hover:text-secondary">Industries</Link>
                    </li>
                    <li>
                        <Link to="/about-us" className="hover:underline hover:text-secondary">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="hover:underline hover:text-secondary">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/careers" className="hover:underline hover:text-secondary">Careers</Link>
                    </li>
                </ul>
                <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                    <li>
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-secondary">Facebook</Link>
                    </li>
                    <li>
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-secondary">Twitter</Link>
                    </li>
                    <li>
                        <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-secondary">LinkedIn</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;