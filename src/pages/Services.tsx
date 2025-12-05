import React from 'react';
import ServicesComponent from '../components/Services';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Services Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we offer comprehensive web development services 
              tailored to your business needs.
            </p>
          </div>
        </div>
      </section>
      
      <ServicesComponent />
      <Features />
      <Pricing />
    </div>
  );
};

export default Services;
