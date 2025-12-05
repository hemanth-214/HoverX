import React from 'react';
import CTAButton from './CTAButton';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Requirement & Strategy',
      description: 'We start by understanding your business goals, target audience, and project requirements. This phase includes competitor analysis and strategic planning.',
      icon: '🎯',
      features: ['Business analysis', 'Competitor research', 'Goal setting', 'Strategy planning']
    },
    {
      number: '02',
      title: 'Advance + Wireframe',
      description: 'After receiving your advance payment, we create detailed wireframes and mockups to visualize the project structure and user experience.',
      icon: '📐',
      features: ['Wireframe creation', 'UI/UX design', 'Prototype development', 'Client approval']
    },
    {
      number: '03',
      title: 'Development + Feedback',
      description: 'Our development team brings the design to life with clean, scalable code. We provide regular updates and incorporate your feedback throughout.',
      icon: '⚡',
      features: ['Frontend development', 'Backend integration', 'Regular updates', 'Feedback incorporation']
    },
    {
      number: '04',
      title: 'Launch + Support',
      description: 'We handle the complete launch process including domain setup, hosting, and provide ongoing support to ensure everything runs smoothly.',
      icon: '🚀',
      features: ['Domain & hosting setup', 'Launch preparation', 'Testing & optimization', 'Ongoing support']
    }
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            How We <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full mx-auto"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our proven 4-step process ensures quality delivery and client satisfaction
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-lime-400 rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="space-y-6">
                      {/* Step Number */}
                      <div className="flex items-center space-x-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                        <div className="text-3xl">{step.icon}</div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Features */}
                      <ul className="grid grid-cols-2 gap-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-500">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to start your project?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Let's discuss your requirements and get the process started today.
          </p>
          <CTAButton variant="primary" size="lg" type="contact">
            Get Started Now
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Process;
