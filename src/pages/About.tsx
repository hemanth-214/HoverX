import React from 'react';
import AboutComponent from '../components/About';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import CTAButton from '../components/CTAButton';

const About = () => {
  return (
    <div className="pt-16">
      {/* Enhanced About Hero */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold">
              About <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">HoverX</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that inspire, engage, and deliver results. 
              We're passionate about turning your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <CTAButton variant="primary" size="lg" type="contact">
                Get Started Now
              </CTAButton>
              <CTAButton variant="secondary" size="lg" type="portfolio">
                View Our Work
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      
      <AboutComponent />
      <Process />
      <TechStack />
    </div>
  );
};

export default About;
