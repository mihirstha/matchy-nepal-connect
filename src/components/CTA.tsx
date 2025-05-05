
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-gradient-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Connect with the Perfect Match?
        </h2>
        <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
          Whether you're a job seeker looking for the next career opportunity or an employer seeking quality talent,
          JOB MATCHY Nepal makes the process simple and effective.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/registration" className="bg-white text-brand-secondary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
            Get Started Now
          </Link>
          <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-brand-secondary transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
