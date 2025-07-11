
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-yellow py-20 md:py-32 overflow-hidden min-h-screen">
      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stripes" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
              <rect width="10" height="20" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stripes)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[70vh]">
          <div className="flex-1 text-center lg:text-left">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 inline-block mb-6">
              <span className="text-sm font-semibold text-gray-800">\ Job Reviews Available! /</span>
            </div>
            
            <div className="relative mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 inline-block">
                <img 
                  src="/lovable-uploads/d978bd2d-7078-4927-8710-799f46e4a964.png" 
                  alt="Job Matchy Mascot" 
                  className="w-64 h-auto mx-auto"
                />
                
                {/* Floating text bubbles */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-bold text-gray-800">Instant Payment</span>
                </div>
                <div className="absolute top-1/2 -right-8 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-bold text-gray-800">Same Day<br/>Application!</span>
                </div>
                <div className="absolute bottom-4 -left-8 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-bold text-gray-800">No Resume<br/>Required</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="text-lg font-bold text-gray-700 mb-2">Job Matching Service</div>
              <div className="text-2xl font-bold text-gray-700 mb-4">Job Posts Number※</div>
              <div className="text-8xl md:text-9xl font-black text-gray-800 leading-none">No.1</div>
            </div>
            
            <div className="flex flex-col gap-4 mb-8">
              <a href="#" className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" className="h-10" />
              </a>
              <a href="#" className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
            
            <Link to="/registration" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold inline-block transition-colors">
              Free Job Posting! Click Here for Recruitment
            </Link>
          </div>
        </div>
        
        {/* Bottom disclaimer */}
        <div className="mt-16 text-center text-sm text-gray-600">
          ※June 2025 Period Market Research<br/>
          Research Institute: Nepal Marketing Research Association<br/>
          Research Period: May 13 to June 12, 2025
        </div>
      </div>
    </section>
  );
};

export default Hero;
