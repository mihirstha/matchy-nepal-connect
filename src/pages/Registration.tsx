
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
