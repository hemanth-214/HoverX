import React, { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import CTAButton from './CTAButton';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = useQuery(api.faqs.list, { active: true }) || [];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fallback FAQs if database is empty
  const fallbackFaqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Timeline depends on project complexity. Simple landing pages take 2-3 days, business websites take 5-10 days, and full-stack applications take 10-30 days. We provide detailed timelines during consultation.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies like React, Next.js, Node.js, Tailwind CSS, Convex, and more. We choose the best tech stack based on your project requirements and scalability needs.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we can help set up hosting and domain registration. We work with reliable providers like Vercel, Netlify, and others to ensure your website is fast and secure.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We can redesign and rebuild your existing website with modern design, better performance, and new features while maintaining your brand identity and improving user experience.'
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we provide ongoing maintenance, updates, security monitoring, and technical support. We offer different maintenance packages based on your needs and budget.'
    }
  ];

  const displayFaqs = faqs.length > 0 ? faqs : fallbackFaqs;

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full mx-auto"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions we receive from our clients.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-white dark:bg-slate-800 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Don't hesitate to reach out. We're here to help and answer any questions you might have.
          </p>
          <CTAButton variant="primary" size="lg" type="contact">
            Get In Touch
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
