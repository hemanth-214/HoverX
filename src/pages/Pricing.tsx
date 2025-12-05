import React from 'react';
import PricingComponent from '../components/Pricing';
import FAQ from '../components/FAQ';

const Pricing = () => {
  return (
    <div className="pt-16">
      {/* Pricing Hero */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-green-900 dark:to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Simple <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. Choose the perfect plan 
              for your project needs.
            </p>
          </div>
        </div>
      </section>
      
      <PricingComponent />
      <FAQ />
    </div>
  );
};

export default Pricing;
