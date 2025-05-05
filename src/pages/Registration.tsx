
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Apple, Play } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                Download JOB MATCHY Nepal
              </h1>
              <p className="text-lg text-gray-600">
                Get our mobile app and start connecting with jobs and talent across Nepal.
              </p>
            </div>
            
            {/* App Download Section */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* App Screenshot/Interface */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img 
                    src="/lovable-uploads/add6004b-5a5f-4e8a-8fc3-a5101709de90.png" 
                    alt="JOB MATCHY Nepal App Interface" 
                    className="max-h-[500px] object-contain rounded-xl shadow-lg" 
                  />
                </div>
                
                <div className="w-full md:w-1/2 space-y-6">
                  {/* Company Logo */}
                  <div className="flex justify-center">
                    <img 
                      src="/placeholder.svg" 
                      alt="JOB MATCHY Nepal Logo" 
                      className="h-16 object-contain" 
                    />
                  </div>
                  
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-brand-secondary mb-2">Download Our App</h2>
                    <p className="text-gray-600">Get the JOB MATCHY Nepal experience on your mobile device</p>
                  </div>
                  
                  {/* App Store Links */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.jobmatchynepal&pcampaignid=web_share" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Play size={24} />
                      <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="text-sm font-bold">Google Play</div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://apps.apple.com/np/app/jobmatchy-nepal/id6504403413" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Apple size={24} />
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-sm font-bold">App Store</div>
                      </div>
                    </a>
                  </div>
                  
                  <p className="text-center text-sm text-gray-500">
                    Experience faster job matching and seamless connections with our mobile app
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Join thousands of users already finding opportunities and talent in Nepal!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
