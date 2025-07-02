import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, MessageCircle, ShieldCheck, Clock, MapPin, Heart, Building, Globe, Zap, Star } from "lucide-react";

const WhyJobMatchy = () => {
  const features = [
    {
      icon: Video,
      title: "Showcase Yourself with a Self-Promotion Video",
      description: "Job seekers can upload self-introduction videos to highlight their skills and personality. Employers can assess communication and presentation skills before interviews. Companies can also upload workplace introduction videos to attract talent.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Chat-Based Personality Screening",
      description: "After matching, employers and job seekers can communicate directly through an easy-to-use chat feature—just like Facebook. Easy, real-time chat reduces mismatches by understanding candidates beyond their CV.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: ShieldCheck,
      title: "Verified Profiles for Trust and Safety",
      description: "Job seekers can verify their identity by submitting ID and proof of residence to earn a certification badge. Companies undergo a screening process to ensure credibility and safety.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Clock,
      title: "Flexible Work Options – From Full-Time to One-Day Gigs",
      description: "Support for Full-time, Part-time, Internships, and Outsourcing. Immediate hiring available for urgent needs like 'I need someone today' or 'I want to work today'.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Zap,
      title: "Immediate Hiring Available – Flexible Job Opportunities",
      description: "Urgent job vacancies can be filled quickly, and same-day hiring is possible. Instant chat after matching speeds up the hiring process, allowing companies to secure talent fast.",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: MapPin,
      title: "Location-Based Job Search",
      description: "Find jobs or candidates based on location preferences. Helps local businesses hire talent from nearby areas efficiently.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Heart,
      title: "Easy Swipe Matching – Hiring Based on Personality",
      description: "Find jobs or candidates effortlessly with a simple swipe system. Swipe right (✓) to show interest, swipe left (×) to skip. Focus not just on skills but also on personality and compatibility.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: Building,
      title: "Scalable Platform for SMEs to Large Enterprises",
      description: "Caters to businesses of all sizes, from local hiring for SMEs to high-volume recruitment for large enterprises. Advanced employer dashboard with smart filtering features.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: Star,
      title: "Personalized Matching with Smart Algorithm",
      description: "Smart algorithm matches job seekers and employers based on skills, preferences and personality. Increases compatibility and saves time by presenting only the most relevant matches.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: Globe,
      title: "Global Expertise from JOB MATCHY Japan",
      description: "Leveraging the knowledge of JOB MATCHY Japan, we bring a global perspective tailored to Nepal's job market. Adopting Japanese recruitment strategies optimized for Nepal.",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-light to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
                Why Choose JOB MATCHY NEPAL?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                JOB MATCHY Nepal is an innovative job-matching platform that efficiently connects job seekers and employers. 
                Unlike traditional job search platforms, it offers an intuitive and fast matching process, making recruitment 
                and job hunting smoother and more effective.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-brand-secondary mb-4">
                  Unique Features and Strengths
                </h2>
                <p className="text-gray-600">
                  Discover the 10 unique features that make JOB MATCHY Nepal the ideal job platform, 
                  combining intuitive navigation, reliable verification system, fast matching, and flexible recruitment options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${feature.color} shrink-0`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-secondary mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-brand-secondary mb-8">
                Why JOB MATCHY Nepal Stands Out
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="p-6 bg-brand-light rounded-lg">
                  <div className="text-3xl font-bold text-brand-primary mb-2">Fast</div>
                  <p className="text-gray-600">Quick matching and instant chat features</p>
                </div>
                <div className="p-6 bg-brand-light rounded-lg">
                  <div className="text-3xl font-bold text-brand-primary mb-2">Safe</div>
                  <p className="text-gray-600">Verified profiles and trusted screening</p>
                </div>
                <div className="p-6 bg-brand-light rounded-lg">
                  <div className="text-3xl font-bold text-brand-primary mb-2">Smart</div>
                  <p className="text-gray-600">AI-powered matching algorithm</p>
                </div>
                <div className="p-6 bg-brand-light rounded-lg">
                  <div className="text-3xl font-bold text-brand-primary mb-2">Flexible</div>
                  <p className="text-gray-600">From full-time to one-day gigs</p>
                </div>
              </div>

              <div className="bg-brand-secondary text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Experience the Future of Job Matching?
                </h3>
                <p className="text-xl mb-6 text-gray-200">
                  Join thousands of professionals and companies who have already discovered 
                  the power of smart, personality-based job matching in Nepal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/registration" 
                    className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors"
                  >
                    Start Hiring Today
                  </a>
                  <a 
                    href="/signup" 
                    className="bg-white text-brand-secondary px-8 py-3 rounded-lg font-semibold hover:bg-brand-light transition-colors"
                  >
                    Find Your Dream Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyJobMatchy;