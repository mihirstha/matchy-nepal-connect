
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Apple, Play } from "lucide-react";

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleJobSeekerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration successful!",
      description: "Your job seeker account has been created.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
    });
  };

  const handleEmployerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration successful!",
      description: "Your employer account has been created.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                Join JOB MATCHY Nepal
              </h1>
              <p className="text-lg text-gray-600">
                Create your account and start connecting with jobs and talent across Nepal.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>
                  Choose whether you're looking for a job or hiring talent.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="jobseeker">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
                    <TabsTrigger value="employer">Employer</TabsTrigger>
                  </TabsList>

                  <TabsContent value="jobseeker">
                    <form onSubmit={handleJobSeekerSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Enter your full name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
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
                          <Label htmlFor="password">Password</Label>
                          <Input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="Create a password" 
                            value={formData.password}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <Input 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            type="password" 
                            placeholder="Confirm your password" 
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-secondary">
                        Register as Job Seeker
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="employer">
                    <form onSubmit={handleEmployerSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input 
                            id="companyName" 
                            name="companyName" 
                            placeholder="Enter your company name" 
                            value={formData.companyName}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="name">Contact Person Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Enter contact person's name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Enter company email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="password">Password</Label>
                          <Input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="Create a password" 
                            value={formData.password}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <Input 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            type="password" 
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-brand-secondary hover:bg-brand-dark">
                        Register as Employer
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account? <a href="#" className="text-brand-primary font-medium">Sign In</a>
              </p>
            </div>
            
            {/* App Download Section */}
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-brand-secondary mb-2">Download Our App</h2>
                <p className="text-gray-600">Get the JOB MATCHY Nepal experience on your mobile device</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* App Screenshot/Interface */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="JOB MATCHY Nepal App Interface" 
                    className="h-72 object-contain rounded-xl shadow-lg border border-gray-200" 
                  />
                </div>
                
                <div className="w-full md:w-2/3 space-y-6">
                  {/* Company Logo */}
                  <div className="flex justify-center">
                    <img 
                      src="/placeholder.svg" 
                      alt="JOB MATCHY Nepal Logo" 
                      className="h-16 object-contain" 
                    />
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
