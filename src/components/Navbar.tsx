
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-secondary">
              JOB MATCHY <span className="text-brand-primary">NEPAL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Home
            </Link>
            <Link to="/registration" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Registration
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Services
            </Link>
            <Link to="/faq" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Contact
            </Link>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-brand-primary transition-colors flex items-center">
                More
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/terms" className="block px-4 py-2 text-gray-700 hover:bg-brand-light">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="block px-4 py-2 text-gray-700 hover:bg-brand-light">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/registration" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Registration
              </Link>
              <Link to="/services" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/faq" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                FAQs
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
              <Link to="/terms" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Terms of Service
              </Link>
              <Link to="/privacy" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
