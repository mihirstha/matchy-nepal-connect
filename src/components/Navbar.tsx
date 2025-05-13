
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Briefcase, LogIn, UserPlus } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const redirectToEmployerHub = () => {
    window.location.href = "https://job-matchy-employer-hub.lovable.app/jobs";
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d978bd2d-7078-4927-8710-799f46e4a964.png" 
              alt="JOB MATCHY NEPAL Logo" 
              className="h-10 w-auto"
            />
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
            <Link to="/pricing" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Pricing
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

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={redirectToEmployerHub} 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <Briefcase size={18} />
              Post a Job
            </Button>

            <div className="border-l border-gray-300 h-8 mx-2" />

            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <LogIn size={16} />
                Sign In
              </Button>
            </Link>
            
            <Link to="/signup">
              <Button variant="default" size="sm" className="flex items-center gap-1">
                <UserPlus size={16} />
                Sign Up
              </Button>
            </Link>
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
              <Link to="/pricing" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Pricing
              </Link>
              <Link to="/terms" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Terms of Service
              </Link>
              <Link to="/privacy" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Privacy Policy
              </Link>
              
              <div className="pt-2 border-t border-gray-200 my-2">
                <button 
                  onClick={redirectToEmployerHub} 
                  className="w-full text-left font-medium text-brand-primary py-2 flex items-center gap-2"
                >
                  <Briefcase size={18} />
                  Post a Job
                </button>
                
                <Link to="/login" className="block font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                  <div className="flex items-center gap-2">
                    <LogIn size={18} />
                    Sign In
                  </div>
                </Link>
                
                <Link to="/signup" className="block font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                  <div className="flex items-center gap-2">
                    <UserPlus size={18} />
                    Sign Up
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
