
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Apple, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    navigate("/employer-registration");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
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
                      src="/lovable-uploads/d978bd2d-7078-4927-8710-799f46e4a964.png" 
                      alt="JOB MATCHY Nepal Logo" 
                      className="h-20 object-contain" 
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
          </div>

          {/* Employer Pricing Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-secondary mb-3">
                Employer Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right plan for your business and start hiring the best talent in Nepal
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Normal Posting Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105">
                <div className="p-6 bg-gray-50">
                  <h3 className="text-2xl font-bold text-brand-secondary mb-2">Normal Posting</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold">Rs 3,000</span>
                    <span className="text-gray-600">/job post</span>
                  </div>
                  <p className="text-sm text-gray-600">Standard job posting solution</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">15 Days Listing Duration</span>
                        <p className="text-sm text-gray-600">Your job will be visible for 15 days</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Standard Position</span>
                        <p className="text-sm text-gray-600">Shown after "Urgent Hiring" section</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Video Resume Access</span>
                        <p className="text-sm text-gray-600">View candidate video resumes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 border-2 border-gray-300 rounded shrink-0 mt-0.5"></div>
                      <div>
                        <span className="font-medium text-gray-400">No "Urgent Hiring" Tag</span>
                        <p className="text-sm text-gray-400">Standard listing appearance</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 border-2 border-gray-300 rounded shrink-0 mt-0.5"></div>
                      <div>
                        <span className="font-medium text-gray-400">No Boost Listing</span>
                        <p className="text-sm text-gray-400">Standard visibility</p>
                      </div>
                    </li>
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => handleSelectPlan("Normal")}
                  >
                    Select Normal Posting
                  </Button>
                </div>
              </div>

              {/* Premium Posting Plan */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-brand-primary transform scale-105 relative">
                <div className="absolute top-0 right-0 bg-brand-primary text-white py-1 px-4 text-sm font-bold rounded-bl-lg">
                  RECOMMENDED
                </div>
                <div className="p-6 bg-brand-light">
                  <h3 className="text-2xl font-bold text-brand-secondary mb-2">Premium Posting</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold">Rs 5,000</span>
                    <span className="text-gray-600">/job post</span>
                  </div>
                  <p className="text-sm text-gray-600">Enhanced visibility and features</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">30 Days Listing Duration</span>
                        <p className="text-sm text-gray-600">Extended visibility for 30 days</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">"Urgent Hiring" Tag</span>
                        <p className="text-sm text-gray-600">Priority placement with urgent tag</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Boost Listing</span>
                        <p className="text-sm text-gray-600">Enhanced visibility and reach</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Video Resume Access</span>
                        <p className="text-sm text-gray-600">View candidate video resumes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Top Position on App</span>
                        <p className="text-sm text-gray-600">Shown in "Urgent Hiring" section</p>
                      </div>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-brand-primary hover:bg-brand-secondary" 
                    onClick={() => handleSelectPlan("Premium")}
                  >
                    Select Premium Posting
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Need a custom plan? <a href="/contact" className="text-brand-primary font-medium">Contact our sales team</a>
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
