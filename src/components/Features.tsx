import React from 'react';
import CTAButton from './CTAButton';

const Features = () => {
  const features = [
    {
      icon: '📱',
      title: '99% Mobile Optimized',
      description: 'Perfect responsive design across all devices'
    },
    {
      icon: '🏢',
      title: 'Enterprise-Grade Backend',
      description: 'Scalable architecture patterns for growth'
    },
    {
      icon: '💻',
      title: 'Clean Scalable Code',
      description: 'Maintainable and well-documented codebase'
    },
    {
      icon: '⚙️',
      title: 'Feature-Rich Admin Panels',
      description: 'Comprehensive management interfaces'
    },
    {
      icon: '🔐',
      title: 'Authentication Ready',
      description: 'Secure user management systems'
    },
    {
      icon: '📈',
      title: 'SEO + Analytics',
      description: 'Built-in optimization and tracking'
    },
    {
      icon: '💾',
      title: 'Auto Backups',
      description: 'Automated data protection and recovery'
    },
    {
      icon: '⚡',
      title: 'High Speed (95+ Score)',
      description: 'Lighthouse performance optimization'
    },
    {
      icon: '✨',
      title: 'Custom Animations',
      description: 'Smooth micro-interactions and effects'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Key <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full mx-auto"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Every project includes these premium features as standard
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-600 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-lime-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to build something amazing?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            All features included in every project, no hidden costs or surprises.
          </p>
          <CTAButton variant="primary" size="lg" type="contact">
            Start Your Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Features;
