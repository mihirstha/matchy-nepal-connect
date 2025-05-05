
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                JOB MATCHY NEPAL pvt.,ltd (hereinafter referred to as "the Company") provides services that connect Nepalese companies with job seekers in Nepal.
              </p>
              <p className="mb-6">
                The Company recognizes its social responsibility regarding the protection of all personal information it handles and complies with all applicable laws and regulations concerning individual rights and personal data protection.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acquisition, Use, and Provision of Personal Information</h2>
              <p className="mb-6">
                The Company does not handle personal information beyond the necessary extent to achieve the specified purpose of use (hereinafter referred to as "Unauthorized Use"). Additionally, appropriate measures are taken to prevent Unauthorized Use.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Compliance with Laws and Regulations</h2>
              <p className="mb-6">
                The Company complies with all laws, national guidelines, and other applicable regulations concerning the handling of personal information and ensures lawful and proper management of personal data.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Continuous Improvement of Security Measures</h2>
              <p className="mb-6">
                The Company takes reasonable safety measures to prevent risks such as leakage, loss, or damage of personal information by investing appropriate management resources. The security system for personal information is continuously improved, and in case of any incidents, corrective measures will be promptly implemented.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Response to Complaints and Inquiries</h2>
              <p className="mb-6">
                The Company promptly and sincerely responds to complaints and inquiries regarding the handling of personal information.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Continuous Improvement of the Personal Information Protection Management System</h2>
              <p className="mb-6">
                The Company regularly reviews and improves its personal information protection management system in response to changes in the business environment and operational conditions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Handling of Personal Information</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3">1. Name of Business</h3>
              <p className="mb-6">JOB MATCHY NEPAL pvt.,ltd</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">2. Purpose of Use of Personal Information</h3>
              <p className="mb-3">
                The Company uses personal information for the following purposes in connection with "JOB MATCHY" and other related services (hereinafter collectively referred to as "the Company's Services"):
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>To provide and guide users regarding the Company's Services</li>
                <li>To verify identity (including confirmation of authenticity) and provide authentication services</li>
                <li>To process payments for the Company's Services</li>
                <li>To distribute job and recruitment information and optimize advertisements based on user attributes, browsing history, activity history, and location information</li>
                <li>To respond to after-sales service, inquiries, and complaints</li>
                <li>To conduct surveys regarding the Company's Services</li>
                <li>To distribute gifts for campaigns, promotions, etc.</li>
                <li>To improve the Company's Services and develop new services</li>
                <li>To prevent unauthorized use of the Company's Services</li>
                <li>To conduct surveys, statistical analysis, and market research using anonymized data</li>
                <li>To maintain and troubleshoot systems related to the Company's Services</li>
                <li>To fulfill necessary business communications, contract execution, and negotiations</li>
                <li>To provide information, confirm service usage, and conduct surveys related to the Company's Services</li>
                <li>To provide information about seminars</li>
                <li>To manage business partner information</li>
              </ul>
              
              <p className="text-gray-600 mt-12">
                For the complete Privacy Policy document, please contact us at info@jobmatchynepal.site.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
