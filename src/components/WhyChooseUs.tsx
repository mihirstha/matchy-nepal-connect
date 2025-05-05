
const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg">Why Choose JOB MATCHY</h2>
          <p className="subheading mx-auto">
            Our platform offers unique advantages for both job seekers and employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* For Job Seekers */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">For Job Seekers</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span><strong>Easy Apply:</strong> Submit your profile in clicks.</span>
              </li>
              <li className="flex">
                <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span><strong>Find Your Job:</strong> Explore thousands of listings by industry, location, and experience.</span>
              </li>
              <li className="flex">
                <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span><strong>Stay Updated:</strong> Match with jobs, chat instantly, and land your dream role!</span>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-secondary mb-4">For Employers</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span><strong>Find Top Talent:</strong> Post jobs for free and reach candidates across Nepal.</span>
              </li>
              <li className="flex">
                <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span><strong>Effortless Hiring:</strong> Filter by location, experience, and start date—chat instantly with candidates.</span>
              </li>
              <li className="flex">
                <span className="bg-brand-light text-brand-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span><strong>Smart Selection:</strong> Hire based on personality, not just CVs, for the perfect fit!</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Why Our App Uses the Swipe System?</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Our app adopts the swipe system to provide a smoother and more intuitive matching experience:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2 text-brand-primary">Intuitive and Stress-Free Navigation</h4>
                <p className="text-gray-600">
                  We've made it simple for anyone to use—just swipe to choose a potential match, making the process more seamless and engaging.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2 text-brand-primary">Gamification for Better Experience</h4>
                <p className="text-gray-600">
                  The act of swiping itself feels like a game, naturally increasing user engagement and creating more opportunities for meaningful matches.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2 text-brand-primary">Avoiding Choice Overload</h4>
                <p className="text-gray-600">
                  With the swipe system, users view one person at a time, allowing for quick and instinctive decisions, leading to a more effective matching experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
