
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  
  const handleSelectPlan = (plan: string) => {
    navigate("/employer-registration");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-brand-light to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
                Employer Pricing Plans
              </h1>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your hiring needs and budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

            <div className="text-center mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-brand-secondary mb-4">Feature Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 font-semibold">Features</th>
                        <th className="py-3 px-4 font-semibold text-brand-primary">Premium Posting</th>
                        <th className="py-3 px-4 font-semibold">Normal Posting</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Price</td>
                        <td className="py-3 px-4">Starting from Rs 5,000 per Job Post</td>
                        <td className="py-3 px-4">Starting from Rs 3,000 per Job Post</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Listing Duration</td>
                        <td className="py-3 px-4">30 Days</td>
                        <td className="py-3 px-4">15 Days</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Position on App</td>
                        <td className="py-3 px-4">"Urgent Hiring" tag shown on the card</td>
                        <td className="py-3 px-4">No "Urgent Hiring" tag and will be shown after "Urgent Hiring" Section</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Boost Listing</td>
                        <td className="py-3 px-4">Yes</td>
                        <td className="py-3 px-4">No</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Video Resume</td>
                        <td className="py-3 px-4">Yes</td>
                        <td className="py-3 px-4">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-secondary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Can I change my plan later?</h3>
                  <p className="text-gray-700">Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">How does billing work?</h3>
                  <p className="text-gray-700">We offer monthly and annual billing options. Annual plans come with a discount. You can pay using credit/debit cards, mobile payments, or bank transfers.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Do you offer custom plans?</h3>
                  <p className="text-gray-700">Yes, we offer customized solutions for larger organizations with specific needs. Please contact our sales team to discuss your requirements.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">What happens when I reach my job posting limit?</h3>
                  <p className="text-gray-700">You'll be notified when you're approaching your limit. You can either upgrade your plan or wait until your next billing cycle for your allocation to reset.</p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-gray-700 mb-4">Have more questions about our pricing plans?</p>
                <Button className="bg-brand-primary hover:bg-brand-secondary" asChild>
                  <a href="/contact">Contact Our Sales Team</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
