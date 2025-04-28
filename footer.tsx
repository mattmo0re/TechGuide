import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Monitor className="w-6 h-6 mr-2" />
              <span className="text-xl font-bold text-white">TechGuide</span>
            </div>
            <p className="text-sm mb-4">
              Expert, on-demand IT help. Virtual & in-person support for businesses and individuals in the St. Louis area.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Schedule Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:3145489256" className="hover:text-white transition-colors">314.548.9256</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:matt@techguide.pro" className="hover:text-white transition-colors">matt@techguide.pro</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>© {currentYear} TechGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;