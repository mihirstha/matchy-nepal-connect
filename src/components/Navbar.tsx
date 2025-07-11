
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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-800">Job Matchy</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/why-job-matchy" className="font-medium text-gray-700 hover:text-primary transition-colors">
              スキマバイトマガジン
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/registration" className="bg-primary text-gray-800 px-6 py-2 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors">
              求人投稿無料！
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signup">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
                求人投稿無料！
                <br />
                求人投稿はこちら
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
