import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="text-center text-sm font-light mb-1 md:mb-2">
          St. Louis, MO, USA
        </div>
        
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center justify-center w-full md:w-auto">
            <div className="flex items-center justify-center">
              <Monitor className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">TechGuide</span>
            </div>
          </Link>
          
          <div className="hidden md:block text-center w-full">
            <a href="tel:3145489256" className="text-lg font-bold hover:underline">
              314.548.9256
            </a>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className={`mt-4 md:mt-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-100 overflow-hidden'}`}>
          <nav className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <Link 
              to="/" 
              className={`text-lg ${location.pathname === '/' ? 'font-bold' : 'font-medium'} hover:underline transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-lg ${location.pathname === '/services' ? 'font-bold' : 'font-medium'} hover:underline transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/schedule" 
              className={`px-4 py-2 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
          </nav>
        </div>
        
        <div className="md:hidden text-center mt-4">
          <a href="tel:3145489256" className="text-lg font-bold hover:underline">
            314.548.9256
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;