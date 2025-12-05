import React from 'react';
import CTAButton from './CTAButton';

const TechStack = () => {
  const technologies = [
    { name: 'HTML5', icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', icon: '🎨', category: 'Frontend' },
    { name: 'JavaScript', icon: '⚡', category: 'Frontend' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '🔺', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '💨', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Express', icon: '🚀', category: 'Backend' },
    { name: 'Supabase', icon: '⚡', category: 'Database' },
    { name: 'Firebase', icon: '🔥', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Vercel', icon: '▲', category: 'Deployment' },
    { name: 'Netlify', icon: '🌐', category: 'Deployment' },
    { name: 'Stripe', icon: '💳', category: 'Payment' },
    { name: 'Razorpay', icon: '💰', category: 'Payment' }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Deployment', 'Payment'];

  return (
    <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Tech <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full mx-auto"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Modern technologies and tools we use to build exceptional digital experiences
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 hover:bg-white dark:hover:bg-slate-600 transition-all duration-300 hover:shadow-xl hover:scale-110 cursor-pointer text-center"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="space-y-3">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-lime-400 group-hover:bg-clip-text transition-all duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              And Many More...
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We stay updated with the latest technologies and tools to ensure your project 
              uses the best solutions available. From design tools to deployment platforms, 
              we've got you covered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full">Figma</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full">Git</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full">Docker</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full">AWS</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full">GraphQL</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Ready to build with cutting-edge technology?
          </p>
          <CTAButton variant="primary" size="lg" type="contact">
            Start Your Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
