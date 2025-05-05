
const MissionVision = () => {
  const coreValues = [
    {
      title: "Empowering Youth",
      description: "We connect Nepal's talented youth with meaningful job opportunities, both locally and globally. Through innovative features and partnerships, we strive to reduce unemployment and promote economic mobility.",
    },
    {
      title: "Inclusivity & Equality",
      description: "JOB MATCHY Nepal breaks employment barriers, ensuring equal opportunities for all, regardless of ethnicity, background, or gender. We focus on empowering women to take on diverse roles across industries.",
    },
    {
      title: "Community Development",
      description: "We believe labor mobilization drives economic growth. By connecting businesses with local talent, we create jobs in urban and rural areas, strengthening Nepal's workforce and economy.",
    },
    {
      title: "Innovation & Progress",
      description: "Using AI-powered job matching and location-based searches, we provide an efficient, tailored experience for job seekers and employers—leading to faster hiring and better matches.",
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="mb-16 text-center">
          <h2 className="heading-md">OUR MISSION</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              Connecting employers with the right talent and helping job seekers find meaningful work. 
              JOB MATCHY Nepal empowers the workforce, driving the growth of local businesses and communities.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16 text-center">
          <h2 className="heading-md">OUR VISION</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              At JOB MATCHY Nepal, we envision a thriving job market where opportunities are accessible to everyone, 
              regardless of background or gender. We strive to mobilize Nepal's youth, reduce unemployment, and 
              break societal barriers to equal employment.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our platform not only connects job seekers with employers but also drives economic growth by helping 
              businesses of all sizes find the right talent efficiently. We champion inclusion and diversity, 
              with a strong focus on empowering women and marginalized groups to fully participate in the workforce.
            </p>
            <p className="text-lg text-gray-700">
              By facilitating seamless job matching for both blue-collar and white-collar professionals, 
              we are committed to building a resilient and equitable future for Nepal's workforce. 
              Guided by our core values—fairness, innovation, and community empowerment—we work to create lasting change.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-8">
          <h2 className="heading-md">OUR CORE VALUES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-primary">
              <h3 className="text-xl font-bold mb-3 text-brand-secondary">🔹 {value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
