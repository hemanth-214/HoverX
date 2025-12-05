import React from 'react';
import CTAButton from './CTAButton';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹3,000',
      period: 'per project',
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Responsive Landing Page',
        'Contact Form Integration',
        'Basic SEO Optimization',
        'Mobile-First Design',
        '3 Revisions Included',
        '7-Day Delivery',
        '30-Day Support'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '₹8,000',
      period: 'per project',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Multi-Page Website (5-8 pages)',
        'CMS Integration',
        'Advanced SEO Setup',
        'Performance Optimization',
        'Social Media Integration',
        'Analytics Setup',
        '5 Revisions Included',
        '14-Day Delivery',
        '60-Day Support'
      ],
      popular: true,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: '₹15,000',
      period: 'per project',
      description: 'Complete solution for large-scale applications',
      features: [
        'Full-Stack Web Application',
        'Custom Database Design',
        'API Development & Integration',
        'User Authentication System',
        'Admin Dashboard',
        'Payment Gateway Integration',
        'Unlimited Revisions',
        '30-Day Delivery',
        '90-Day Support',
        'Deployment & Hosting Setup'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Simple, Transparent <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Choose the perfect plan for your project. All plans include our premium support and satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-indigo-500 ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <div className="text-center space-y-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mx-auto`}>
                    <span className="text-white text-2xl font-bold">{plan.name[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-slate-900 dark:text-white">
                      {plan.price}
                      <span className="text-lg font-normal text-slate-500 dark:text-slate-400">/{plan.period}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">{plan.description}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <CTAButton 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  size="lg" 
                  type="contact"
                  className="w-full"
                >
                  Get Started
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="mt-16 text-center bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Need Something Custom?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Have a unique project in mind? We'd love to discuss your requirements and provide a custom quote tailored to your specific needs.
          </p>
          <CTAButton variant="primary" size="lg" type="contact">
            Get Custom Quote
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
