import React from 'react';
import CTAButton from './CTAButton';

const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Landing Pages',
      description: 'High-converting single-page websites designed to capture leads and drive sales.',
      features: ['Conversion-optimized design', 'Mobile-first approach', 'Fast loading speed', 'SEO ready'],
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: '🏢',
      title: 'Business Websites',
      description: 'Professional multi-page websites that establish credibility and showcase your brand.',
      features: ['Custom design', 'Content management', 'Contact forms', 'Analytics integration'],
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: '⚡',
      title: 'Full-Stack Web Apps',
      description: 'Complete web applications with frontend, backend, and database integration.',
      features: ['User authentication', 'Database design', 'API development', 'Real-time features'],
      gradient: 'from-cyan-400 to-lime-400'
    },
    {
      icon: '🛒',
      title: 'E-Commerce Platforms',
      description: 'Online stores with payment processing, inventory management, and order tracking.',
      features: ['Payment integration', 'Product catalog', 'Order management', 'Customer accounts'],
      gradient: 'from-orange-400 to-red-400'
    },
    {
      icon: '📊',
      title: 'Custom Dashboards',
      description: 'Data visualization and management interfaces tailored to your business needs.',
      features: ['Data visualization', 'User management', 'Real-time updates', 'Export features'],
      gradient: 'from-green-400 to-blue-400'
    },
    {
      icon: '🤖',
      title: 'AI Integrations',
      description: 'Smart features powered by artificial intelligence and machine learning.',
      features: ['ChatGPT integration', 'Image processing', 'Natural language', 'Automation'],
      gradient: 'from-indigo-400 to-purple-400'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive Design',
      description: 'Websites that look and work perfectly on all devices and screen sizes.',
      features: ['Responsive layouts', 'Touch optimization', 'Fast mobile loading', 'App-like experience'],
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      icon: '🔧',
      title: 'API + Backend Systems',
      description: 'Robust server-side solutions and third-party service integrations.',
      features: ['RESTful APIs', 'Database optimization', 'Third-party integrations', 'Security measures'],
      gradient: 'from-teal-400 to-cyan-400'
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and optimization for your digital products.',
      features: ['Regular updates', 'Security monitoring', 'Performance optimization', '24/7 support'],
      gradient: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full mx-auto"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Full-stack solutions designed to elevate your digital presence and drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-lime-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-500">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Need something custom? Let's discuss your project requirements.
          </p>
          <CTAButton variant="primary" size="lg" type="contact">
            Get Custom Quote
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
