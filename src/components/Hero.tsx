
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
              <span className="text-sm font-semibold text-gray-800">\ कामको समीक्षा देख्न सकिन्छ! /</span>
            </div>
            
            <div className="relative mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 inline-block">
                <img 
                  src="/lovable-uploads/00328f56-13a6-436b-9b70-e5b499ea8dc7.png" 
                  alt="Job Matching App Interface" 
                  className="w-64 h-auto mx-auto"
                />
                
                {/* Floating text bubbles */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-bold text-gray-800">पैसा तुरुन्तै जम्मा</span>
                </div>
                <div className="absolute top-1/2 -right-8 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-bold text-gray-800">त्यसै दिन आवेदन<br/>एकल ठीक!</span>
                </div>
                <div className="absolute bottom-4 -left-8 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-bold text-gray-800">अन्तर्वार्ता<br/>रिज्युमे नचाहिने</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="text-lg font-bold text-gray-700 mb-2">स्किम काम सेवा</div>
              <div className="text-2xl font-bold text-gray-700 mb-4">जागिर पोस्ट संख्या※</div>
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
              जागिर पोस्ट नि:शुल्क! काम भर्तीको लागि यहाँ क्लिक गर्नुहोस्
            </Link>
          </div>
        </div>
        
        {/* Bottom disclaimer */}
        <div className="mt-16 text-center text-sm text-gray-600">
          ※२०२५ जुन अवधि_स्किम काम मा बजार अनुसन्धान<br/>
          अनुसन्धान संस्था: नेपाल मार्केटिंग रिसर्च संघ<br/>
          अनुसन्धान अवधि: २०२५ मे १३ देखि जुन १२ सम्म
        </div>
      </div>
    </section>
  );
};

export default Hero;
