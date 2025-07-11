import { CheckCircle } from "lucide-react";

const JobTypes = () => {
  const jobTypes = [
    {
      title: "Same Day Jobs",
      subtitle: "Find work near you!",
      color: "bg-yellow-400",
      image: "/lovable-uploads/add6004b-5a5f-4e8a-8fc3-a5101709de90.png"
    },
    {
      title: "Hourly Work",
      subtitle: "Work you can do today!",
      color: "bg-yellow-400",
      image: "/lovable-uploads/add6004b-5a5f-4e8a-8fc3-a5101709de90.png"
    },
    {
      title: "Nationwide",
      subtitle: "Jobs across all regions",
      color: "bg-yellow-400",
      image: "/lovable-uploads/add6004b-5a5f-4e8a-8fc3-a5101709de90.png"
    }
  ];

  const availableJobs = [
    {
      title: "Restaurant Server",
      location: "Kathmandu",
      salary: "Rs 25,000/month",
      type: "Part-time",
      company: "Mountain View Restaurant"
    },
    {
      title: "Data Entry Clerk",
      location: "Pokhara",
      salary: "Rs 20,000/month", 
      type: "Full-time",
      company: "Tech Solutions Nepal"
    },
    {
      title: "Delivery Driver",
      location: "Lalitpur",
      salary: "Rs 500/day",
      type: "Freelance",
      company: "Quick Delivery Co."
    },
    {
      title: "Customer Support",
      location: "Bhaktapur",
      salary: "Rs 30,000/month",
      type: "Full-time", 
      company: "Digital Services Ltd"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Available Job Categories
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {jobTypes.map((type, index) => (
            <div key={index} className="relative">
              <div className={`${type.color} rounded-full p-6 shadow-lg transform rotate-12 max-w-xs`}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-gray-800" size={20} />
                  <span className="font-bold text-gray-800 text-sm">{type.title}</span>
                </div>
                <div className="text-gray-800 text-xs">{type.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Latest Job Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-yellow h-24 flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-800">{job.company.charAt(0)}</div>
                </div>
                <div className="p-4">
                  <div className="font-bold text-gray-800 mb-2">{job.title}</div>
                  <div className="text-sm text-gray-600 mb-1">{job.company}</div>
                  <div className="text-sm text-gray-600 mb-1">📍 {job.location}</div>
                  <div className="text-sm font-semibold text-green-600 mb-1">{job.salary}</div>
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {job.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobTypes;