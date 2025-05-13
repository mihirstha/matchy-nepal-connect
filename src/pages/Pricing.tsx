
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your hiring needs and budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105">
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-bold text-brand-secondary mb-2">Basic</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold">NPR 1,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Perfect for small businesses</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Post up to 5 jobs per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Access to basic candidate database</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Job visibility for 15 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => handleSelectPlan("Basic")}
                  >
                    Select Plan
                  </Button>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-brand-primary transform scale-105 relative">
                <div className="absolute top-0 right-0 bg-brand-primary text-white py-1 px-4 text-sm font-bold rounded-bl-lg">
                  POPULAR
                </div>
                <div className="p-6 bg-brand-light">
                  <h3 className="text-xl font-bold text-brand-secondary mb-2">Professional</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold">NPR 4,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Best for growing companies</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Post up to 15 jobs per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Advanced candidate filtering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Job visibility for 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Featured job placement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Priority email & phone support</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-brand-primary hover:bg-brand-secondary" 
                    onClick={() => handleSelectPlan("Professional")}
                  >
                    Select Plan
                  </Button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105">
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-bold text-brand-secondary mb-2">Enterprise</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold">NPR 9,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">For large organizations</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Unlimited job postings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Full candidate database access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Job visibility for 60 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Premium job placement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Custom recruitment solutions</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => handleSelectPlan("Enterprise")}
                  >
                    Select Plan
                  </Button>
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
