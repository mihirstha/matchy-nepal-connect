import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-light to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
                About JOB MATCHY NEPAL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bridging the gap between talented professionals and leading companies across Nepal
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <Target className="h-16 w-16 text-brand-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-brand-secondary mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize the job market in Nepal by creating meaningful connections between job seekers and employers, 
                  fostering economic growth and professional development across all industries.
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-16 w-16 text-brand-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-brand-secondary mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become Nepal's leading job portal, empowering every individual to find their dream career while 
                  helping businesses build exceptional teams that drive innovation and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-secondary mb-8 text-center">Our Story</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded with a deep understanding of Nepal's unique job market challenges, JOB MATCHY NEPAL emerged 
                  from the vision of connecting local talent with opportunities that truly match their skills and aspirations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We recognized that traditional job searching methods often left both employers and job seekers frustrated. 
                  Companies struggled to find qualified candidates, while talented individuals couldn't discover roles that 
                  aligned with their career goals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to serve thousands of professionals and hundreds of companies across Nepal, 
                  making career dreams a reality and helping businesses thrive with the right talent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-brand-secondary mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <Users className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-secondary mb-3">People First</h3>
                <p className="text-gray-600">
                  We put people at the center of everything we do, ensuring authentic connections and meaningful career growth.
                </p>
              </div>
              <div className="text-center p-6">
                <Award className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-secondary mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in our platform, services, and support to deliver exceptional experiences.
                </p>
              </div>
              <div className="text-center p-6">
                <Target className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-secondary mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to stay ahead of market needs and provide cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-brand-secondary mb-8">Our Team</h2>
              <p className="text-gray-600 text-lg mb-8">
                Behind JOB MATCHY NEPAL is a dedicated team of professionals passionate about transforming 
                Nepal's employment landscape. Our diverse team brings together expertise in technology, 
                human resources, and business development.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 leading-relaxed">
                  From our technical developers who ensure our platform runs smoothly, to our customer success 
                  team who supports every user journey, each team member is committed to making job matching 
                  more effective and accessible for everyone in Nepal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;