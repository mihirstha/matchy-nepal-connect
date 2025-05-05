
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">Terms and Conditions of Use</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                These Terms and Conditions ("Terms") govern the use of the job matching application "JOB MATCHY" provided by JOBMATCHY NEPAL Pvt. Ltd. ("Company"). 
                By registering and using the services ("Service"), users ("User") agree to abide by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Article 1: Agreement to Terms</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Users must read and agree to these Terms before using the Service.</li>
                <li>Users must be registered members to access the Service.</li>
                <li>By registering, an agreement ("Agreement") is established between the User and the Company.</li>
                <li>Users who do not agree to these Terms must refrain from using the Service.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Article 2: Scope and Application</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>These Terms apply to all Users of the Service.</li>
                <li>If any provision conflicts with Nepalese law, only the conflicting provision will be deemed invalid, and the remaining provisions will remain effective.</li>
                <li>These Terms apply to all actions related to the use of the Service, including browsing, registration, and communication between Users.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Article 3: Service Overview</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>The Service facilitates job matching between Nepalese businesses and non-Nepalese job seekers.</li>
                <li>Some features are free, while paid services may offer enhanced communication options.</li>
                <li>The Company does not guarantee successful job placement.</li>
                <li>The Company reserves the right to modify or discontinue any part of the Service at its discretion.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Article 4: Definitions</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>User: Any individual or business registered to use the Service.</li>
                <li>Content: Any data or information provided by Users through the Service.</li>
                <li>Profile Information: User details such as name, nationality, work history, and other relevant personal information.</li>
                <li>Paid Service: Optional paid membership benefits, including advanced features such as direct messaging.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Article 5: Service Provision and Modification</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>The Company may modify, suspend, or terminate the Service at its discretion without prior notice.</li>
                <li>The Company does not guarantee uninterrupted or error-free service.</li>
                <li>The Company is not liable for damages except in cases of willful misconduct or gross negligence.</li>
                <li>The Company does not guarantee that the Service will be compatible with all devices or operating systems.</li>
              </ul>
              
              {/* Continuing with more articles */}
              <h2 className="text-2xl font-bold mt-8 mb-4">Article 6: User Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>The Service is for non-Nepalese job seekers and Nepalese employers.</li>
                <li>Users must be at least 18 years old.</li>
                <li>The Company reserves the right to refuse registration or terminate accounts for violating these Terms or providing false information.</li>
                <li>The Company reserves the right to deny registration or cancel accounts if the User is linked to criminal activities, antisocial forces, or any form of illegal conduct.</li>
              </ul>
              
              <p className="text-gray-600 mt-12">
                For the complete Terms and Conditions document, please contact us at info@jobmatchynepal.site.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
