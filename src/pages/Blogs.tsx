import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Landing Your Dream Job in Nepal",
      excerpt: "Discover the essential strategies that will help you stand out in Nepal's competitive job market and secure the position you've always wanted.",
      author: "JOB MATCHY Team",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Career Tips"
    },
    {
      id: 2,
      title: "How to Build an Impressive Resume for Nepali Employers",
      excerpt: "Learn the key elements that make a resume compelling to Nepali employers and increase your chances of getting shortlisted.",
      author: "HR Expert",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Resume Building"
    },
    {
      id: 3,
      title: "The Future of Remote Work in Nepal",
      excerpt: "Explore how remote work is transforming the Nepali job market and what opportunities it creates for both employers and job seekers.",
      author: "Industry Analyst",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Industry Trends"
    },
    {
      id: 4,
      title: "Interview Preparation: A Complete Guide for Nepali Job Seekers",
      excerpt: "Master the art of interviewing with our comprehensive guide tailored specifically for the Nepali job market.",
      author: "Career Coach",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "Interview Tips"
    },
    {
      id: 5,
      title: "Top Growing Industries in Nepal for 2025",
      excerpt: "Discover which sectors are expected to boom in Nepal and where the best opportunities lie for job seekers.",
      author: "Market Research Team",
      date: "November 20, 2024",
      readTime: "8 min read",
      category: "Market Insights"
    },
    {
      id: 6,
      title: "Networking in Nepal: Building Professional Connections",
      excerpt: "Learn effective networking strategies that work in Nepal's unique professional environment.",
      author: "Networking Expert",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Professional Development"
    }
  ];

  const categories = ["All", "Career Tips", "Resume Building", "Industry Trends", "Interview Tips", "Market Insights", "Professional Development"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-light to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
                Career Insights & Tips
              </h1>
              <p className="text-xl text-gray-600">
                Stay informed with the latest career advice, industry trends, and job market insights in Nepal
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-brand-light text-brand-primary text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-brand-secondary mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button variant="ghost" className="p-0 h-auto font-medium text-brand-primary hover:text-brand-secondary">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-brand-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 text-gray-300">
                Subscribe to our newsletter for the latest career insights and job market updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <Button className="bg-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
                  Subscribe
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

export default Blogs;