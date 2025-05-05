
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const generalFaqs = [
    {
      question: "What is JOB MATCHY Nepal?",
      answer: "JOB MATCHY Nepal is an innovative job matching platform that connects employers and job seekers through an intuitive swiping system. Our platform focuses on making the hiring process more efficient and effective for all users."
    },
    {
      question: "How does the swipe feature work?",
      answer: "The swipe feature allows job seekers to swipe right on jobs they're interested in and employers to swipe right on candidates they like. When both parties swipe right on each other, it creates a match, enabling them to communicate directly."
    },
    {
      question: "Is the app available for both Android and iOS?",
      answer: "Yes, JOB MATCHY Nepal is available for download on both Android and iOS platforms. You can find our app on the Google Play Store and Apple App Store."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, JOB MATCHY Nepal takes data security seriously. We use encryption protocols to protect your personal information and adhere to strict privacy policies that comply with Nepalese laws and regulations."
    }
  ];

  const jobSeekerFaqs = [
    {
      question: "How do I create a job seeker profile?",
      answer: "Download the app, select 'Sign in as Job Seeker', and follow the prompts to create your profile. You'll need to provide basic information such as your name, contact details, work experience, and skills."
    },
    {
      question: "Do I need to have a CV to use JOB MATCHY?",
      answer: "No, JOB MATCHY Nepal is designed to be inclusive. Even if you don't have a formal CV, you can still create a profile highlighting your skills and experience, making it particularly useful for blue-collar workers."
    },
    {
      question: "How can I increase my chances of getting matched?",
      answer: "Complete your profile thoroughly, including detailed information about your skills and experience. Upload a professional photo and consider adding a self-introduction video to stand out to potential employers."
    },
    {
      question: "What should I do after matching with an employer?",
      answer: "Once matched, you can start a conversation with the employer through our in-app chat feature. Use this opportunity to introduce yourself properly and discuss the job opportunity further."
    }
  ];

  const employerFaqs = [
    {
      question: "How much does it cost to post a job?",
      answer: "We offer two pricing plans: Normal Posting at Rs. 3,000 for 15 days and Premium Posting at Rs. 5,000 for 30 days with additional features like 'Urgent Hiring' tag and boosted visibility."
    },
    {
      question: "How can I filter candidates effectively?",
      answer: "JOB MATCHY Nepal offers various filtering options such as job title, experience level, location, gender, and age to help you find the most suitable candidates for your positions."
    },
    {
      question: "What is the 'Unrestricted Chat' feature?",
      answer: "The 'Unrestricted Chat' feature is a paid option that allows employers to exchange contact details immediately after matching with a candidate, speeding up the interview scheduling and hiring process."
    },
    {
      question: "How can I promote my company to attract better candidates?",
      answer: "You can upload a workplace introduction video to showcase your company culture and work environment, making your job listings more attractive to potential candidates."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about JOB MATCHY Nepal's services, features, and how to use the platform effectively.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-primary mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="px-6">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-primary mb-6">For Job Seekers</h2>
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border">
                {jobSeekerFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`jobseeker-${index}`}>
                    <AccordionTrigger className="px-6">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-6">For Employers</h2>
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border">
                {employerFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`employer-${index}`}>
                    <AccordionTrigger className="px-6">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 text-center p-6 bg-brand-light rounded-lg border border-brand-primary">
              <h3 className="text-xl font-bold mb-2">Can't find what you're looking for?</h3>
              <p className="mb-4">We're here to help! Contact our support team for assistance.</p>
              <a href="/contact" className="btn-primary inline-block">Contact Us</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
