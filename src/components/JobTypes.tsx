import { CheckCircle } from "lucide-react";

const JobTypes = () => {
  const jobTypes = [
    {
      title: "आजै भेटिने काम",
      subtitle: "नजिकको काम खोज्नुहोस्!",
      color: "bg-yellow-400",
      image: "/lovable-uploads/add6004b-5a5f-4e8a-8fc3-a5101709de90.png"
    },
    {
      title: "कम्तिमा १ घण्टादेखि",
      subtitle: "त्यसै दिन गर्न सकिने काम!",
      color: "bg-yellow-400",
      image: "/lovable-uploads/add6004b-5a5f-4e8a-8fc3-a5101709de90.png"
    },
    {
      title: "राष्ट्रव्यापी",
      subtitle: "४७ जिल्लाका काम सूचना",
      color: "bg-yellow-400",
      image: "/lovable-uploads/add6004b-5a5f-4e8a-8fc3-a5101709de90.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          उदाहरणका लागि यस्ता कामहरू
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/add6004b-5a5f-4e8a-8fc3-a5101709de90.png" 
                alt={`Job category ${item}`}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600">Category</div>
                <div className="font-bold text-gray-800">Job Type {item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobTypes;