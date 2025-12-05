import React, { useState } from 'react';
import CTAButton from './CTAButton';
import { siteConfig } from '../config/siteConfig';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Combine real and placeholder projects
  const projects = [
    ...siteConfig.portfolio.realProjects,
    ...siteConfig.portfolio.placeholderProjects.map(p => ({ ...p, placeholder: true }))
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'business', label: 'Business Sites' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'webapp', label: 'Web Apps' },
    { id: 'ai', label: 'AI Integration' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full mx-auto"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Real projects delivered for real clients, showcasing our expertise across different industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-cyan-400 to-lime-400 text-slate-900 shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
                {(project as any).placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* PROJECT SCREENSHOT PLACEHOLDER */}
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-slate-900 font-bold text-xl">📷</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Coming Soon</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {(project as any).image ? (
                      <img 
                        src={(project as any).image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center hidden">
                      {/* FALLBACK FOR MISSING IMAGES */}
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-lg mx-auto flex items-center justify-center">
                          <span className="text-slate-900 font-bold text-xl">🌐</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Live Project</p>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* View Button */}
                {!(project as any).placeholder && (project as any).liveUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={(project as any).liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200"
                    >
                      View Live
                    </a>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-lime-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {!(project as any).placeholder && (project as any).liveUrl && (
                  <div className="pt-2">
                    <a
                      href={(project as any).liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-lime-400 font-medium text-sm transition-colors duration-200"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}

                {(project as any).placeholder && (
                  <div className="pt-2">
                    <span className="inline-flex items-center space-x-2 text-slate-400 text-sm">
                      <span>Coming Soon</span>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Ready to see your project here? Let's make it happen.
          </p>
          <CTAButton variant="primary" size="lg" type="contact">
            Start Your Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
