import React from 'react';
import PortfolioComponent from '../components/Portfolio';

const Portfolio = () => {
  return (
    <div className="pt-16">
      {/* Portfolio Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Our <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Explore our latest projects and see how we've helped businesses 
              transform their digital presence.
            </p>
          </div>
        </div>
      </section>
      
      <PortfolioComponent />
    </div>
  );
};

export default Portfolio;
