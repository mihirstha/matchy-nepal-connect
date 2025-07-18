
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import MissionVision from "@/components/MissionVision";
import CTA from "@/components/CTA";
import JobTypes from "@/components/JobTypes";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <JobTypes />
        <Features />
        <WhyChooseUs />
        <MissionVision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
