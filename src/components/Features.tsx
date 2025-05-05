
import { Home, MapPin, Search, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Home className="text-brand-primary w-12 h-12" />,
      title: "Tailored for Nepal",
      description: "JOB MATCHY connects employers and job seekers nationwide, supporting regional needs and linking Nepali talent with local and global opportunities."
    },
    {
      icon: <Search className="text-brand-primary w-12 h-12" />,
      title: "Swipe to Match",
      description: "JOB MATCHY makes job hunting and hiring effortless with an intuitive swipe feature. Job seekers browse jobs, employers view candidates—fast, simple, and engaging!"
    },
    {
      icon: <Users className="text-brand-primary w-12 h-12" />,
      title: "Inclusive Job Matching",
      description: "Even blue-collar workers without a CV can find opportunities by simply creating a profile. JOB MATCHY connects talent with jobs, from one-time gigs to full-time careers."
    },
    {
      icon: <MapPin className="text-brand-primary w-12 h-12" />,
      title: "Find Jobs Near You",
      description: "JOB MATCHY's location-based search helps blue-collar and white-collar workers find jobs in their preferred area. Whether staying local or exploring new regions, connect with the right opportunities while businesses easily hire nearby talent."
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg">Key Features of JOB MATCHY</h2>
          <p className="subheading mx-auto">
            Discover how our innovative platform connects employers and job seekers across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-brand-secondary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
