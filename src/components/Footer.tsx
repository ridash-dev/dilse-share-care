
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-dilse-500"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="text-xl font-heading font-semibold text-dilse-600">DilSeDonate</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-xs">
              Connecting generous hearts directly with those in need. No middlemen, just pure generosity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-dilse-500 animate-hover" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-dilse-500 animate-hover" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-dilse-500 animate-hover" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-medium text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-dilse-500 animate-hover">Home</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-600 hover:text-dilse-500 animate-hover">Donate</Link>
              </li>
              <li>
                <Link to="/organizations" className="text-gray-600 hover:text-dilse-500 animate-hover">Organizations</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-dilse-500 animate-hover">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-dilse-500 animate-hover">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-medium text-lg mb-4 text-gray-900">Help & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-dilse-500 animate-hover">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-dilse-500 animate-hover">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-dilse-500 animate-hover">Terms of Service</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-dilse-500 animate-hover">How It Works</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-medium text-lg mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dilse-500 mt-0.5" />
                <span className="text-gray-600">JSPM's BSIOTR Wagholi India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-dilse-500" />
                <span className="text-gray-600">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-dilse-500" />
                <span className="text-gray-600">support@dilsedonate.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} DilSeDonate. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-dilse-500 animate-hover">Privacy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-dilse-500 animate-hover">Terms</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-dilse-500 animate-hover">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
