
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JOB MATCHY NEPAL</h3>
            <p className="mb-4 text-gray-300">
              Connecting Talent with Opportunity! Whether you're looking for a job in Nepal or hiring top talent, JOB MATCHY Nepal is your go-to platform.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-brand-primary transition-colors">Registration</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-brand-primary transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-brand-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-brand-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2 text-gray-300">Company: Jobmatchy Nepal Pvt Ltd</p>
            <p className="mb-2 text-gray-300">Email: info@jobmatchynepal.site</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Jobmatchy Nepal Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
