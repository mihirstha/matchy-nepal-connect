
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const jobSeekerServices = [
    "Browse Jobs – Get personalized job listings based on your skills, work type, and location preferences.",
    "Location-Based Search – Find jobs near you with our advanced search tool.",
    "Easy Matching – Swipe, chat with employers, and present yourself directly.",
    "Bookmark – Save and compare jobs you're interested in.",
    "Chat Requests – Send chat requests to companies to stand out.",
    "Self-Promotion Videos – Upload a video to showcase your personality and skills."
  ];

  const employerServices = [
    "Job Posting – Easily post job listings and set criteria such as job title, experience, location, gender, and age to filter candidates.",
    "Easy Matching – Once matched, communicate directly with applicants.",
    "Location-Based Recruitment – Focus on local hiring or expand across Nepal.",
    "Favourites – Save and compare candidates for later review.",
    "Chat Requests – Reach out to promising candidates with a direct chat request.",
    "Self-Promotional Video – Showcase your workplace and company culture with a video."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-brand-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h1>
            <p className="max-w-2xl mx-auto text-lg">
              JOB MATCHY Nepal connects employers and job seekers through an intuitive and seamless solution. 
              Whether you're hiring talent or searching for the perfect job, our efficient and user-friendly 
              platform makes the process easier than ever.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-primary text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Register</h3>
                <p>Showcase Yourself: Use descriptions and photos to stand out!</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-primary text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Swipe</h3>
                <p>Swipe Right to Connect! Match and start chatting instantly.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-primary text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Match</h3>
                <p>Like it? Connect & Start Working! Exchange contacts and get started.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services for Job Seekers and Employers */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-brand-primary mb-12">For Jobseekers</h2>
              <div className="max-w-3xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-secondary">JOB MATCHY Nepal: Your Path to the Perfect Job</h3>
                <p className="text-lg text-gray-700 mb-6">
                  JOB MATCHY Nepal makes job hunting easy, whether you're looking for a blue-collar job or a professional opportunity. 
                  Explore diverse job listings across industries and skill levels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-bold mb-4 text-brand-secondary">Services for Job Seekers</h4>
                  <ul className="space-y-3">
                    {jobSeekerServices.map((service, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-bold mb-4 text-brand-secondary">Steps to Get Started</h4>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <div>
                        <strong>Register</strong>
                        <p>Download the app, tap "Sign In as Job Seeker", and complete your profile with personal details, work history, and skills.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <strong>Get Certified</strong>
                        <p>Submit proof of residence and ID to earn a certification mark.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <strong>Search for Jobs</strong>
                        <p>Filter job preferences by location, job type, and salary expectations.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <div>
                        <strong>Swipe and Connect</strong>
                        <p>Swipe right on jobs you like. Once matched, start a conversation and present yourself.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-center text-brand-secondary mb-12">For Employers</h2>
              <div className="max-w-3xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4">JOB MATCHY Nepal: The Smart Way to Find the Right Talent</h3>
                <p className="text-lg text-gray-700 mb-6">
                  JOB MATCHY Nepal provides employers with a powerful platform to quickly and efficiently find the best candidates. 
                  From large corporations to SMEs, we offer flexible hiring solutions tailored to your needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-bold mb-4 text-brand-secondary">Services for Employers</h4>
                  <ul className="space-y-3">
                    {employerServices.map((service, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-bold mb-4 text-brand-secondary">Steps to Get Started</h4>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-brand-light text-brand-secondary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <div>
                        <strong>Registration</strong>
                        <p>Download the app and tap "Sign In as Employer" to enter your company details and create an account.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-brand-light text-brand-secondary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <strong>Enter Job Information</strong>
                        <p>Fill in job title, description, application requirements, and location.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-brand-light text-brand-secondary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <strong>Search for Job Seekers</strong>
                        <p>Use filters such as job title, experience, location, gender, and age to find suitable candidates.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-brand-light text-brand-secondary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <div>
                        <strong>Swipe and Connect</strong>
                        <p>Swipe right on candidates you like. Once matched, start a conversation and, if interested, exchange contact information.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-secondary mb-4">Pricing</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              JOB MATCHY NEPAL offers flexible options for every hiring need.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-brand-primary">
                <CardHeader className="text-center bg-brand-light rounded-t-lg">
                  <CardTitle className="text-brand-secondary text-2xl">Normal Posting</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-center mb-6">Rs. 3,000</p>
                  <p className="text-gray-600 text-center mb-6">For 15 days</p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Post job listings</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Basic visibility</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Standard candidate reach</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <button className="btn-outline w-full">Choose Plan</button>
                </CardFooter>
              </Card>

              <Card className="border-brand-secondary">
                <CardHeader className="text-center bg-brand-secondary text-white rounded-t-lg">
                  <CardTitle className="text-white text-2xl">Premium Posting</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-center mb-6">Rs. 5,000</p>
                  <p className="text-gray-600 text-center mb-6">For 30 days</p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>"Urgent Hiring" tag</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Top placement in search results</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Boosted visibility</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Increased daily candidate reach</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <button className="btn-secondary w-full">Choose Plan</button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Optional Services for Employers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-brand-primary">Manual Human Resource Introduction</h4>
                  <p className="text-gray-700 mb-4">
                    With Manual HR Introduction, JOB MATCHY Nepal handpicks and connects you with potential candidates based on your specific job requirements.
                    Once introduced, you can take over—conduct interviews, discuss terms, and make hiring decisions using your preferred communication tools.
                  </p>
                  <button className="btn-outline">Contact for Details</button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-brand-primary">Consulting Services</h4>
                  <p className="text-gray-700 mb-4">
                    Our HR Consulting Services help you optimize your recruitment strategy, job descriptions, and candidate screening process. 
                    JOB MATCHY Nepal provides expert guidance tailored to your industry needs—ensuring you hire smarter and build a stronger workforce.
                  </p>
                  <button className="btn-outline">Contact for Details</button>
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

export default Services;
