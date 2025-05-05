
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? We're here to help! Reach out to our team for assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-brand-primary mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="What is this regarding?" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="How can we help you?" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">Send Message</Button>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-brand-secondary mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                        <Mail className="text-brand-primary h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Email Address</h3>
                      <p className="text-gray-700 mb-1">For general inquiries:</p>
                      <a href="mailto:info@jobmatchynepal.site" className="text-brand-primary">info@jobmatchynepal.site</a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                        <Phone className="text-brand-primary h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Phone</h3>
                      <p className="text-gray-700">Customer Support:</p>
                      <p className="text-brand-primary">+977 XXXXXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                        <MapPin className="text-brand-primary h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Office Address</h3>
                      <p className="text-gray-700">Jobmatchy Nepal Pvt Ltd</p>
                      <p className="text-gray-700">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-brand-light rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                  <p className="text-gray-700 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
