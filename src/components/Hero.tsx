
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-brand-light to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary leading-tight mb-4">
              <span className="text-brand-primary">Instantly Connect</span> with Jobs and Talent on JOB MATCHY!
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Whether you're looking for a job or hiring, JOB MATCHY connects you instantly with the right opportunities and talent across Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/registration" className="btn-primary inline-block text-center">
                Get Started
              </Link>
              <Link to="/services" className="btn-outline inline-block text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-brand-primary rounded-full opacity-20 absolute -top-5 -left-5"></div>
              <div className="relative z-10 animate-bounce-slow">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Job Matching" 
                  className="w-full max-w-md rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-2">
            Connecting Talent with Opportunity!
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Looking for a job in Nepal or hiring top talent? JOB MATCHY Nepal is your go-to platform! Whether you're a job seeker or an employer, we connect talent with opportunity—anytime, anywhere.
          </p>
          <div className="mt-8">
            <Link to="/services" className="inline-flex items-center text-brand-secondary font-medium hover:text-brand-primary transition-colors">
              Discover our services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
