
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
            <Link to="/why-job-matchy" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Why Job Matchy
            </Link>
            <Link to="/registration" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Registration
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="font-medium text-gray-700 hover:text-brand-primary transition-colors">
              Pricing
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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
              <Link to="/why-job-matchy" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Why Job Matchy
              </Link>
              <Link to="/registration" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Registration
              </Link>
              <Link to="/services" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/pricing" className="font-medium text-gray-700 py-2 hover:text-brand-primary transition-colors" onClick={toggleMenu}>
                Pricing
              </Link>
              
              <div className="pt-2 border-t border-gray-200 my-2">
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
