import React from 'react';
import CTAButton from './CTAButton';
import { siteConfig } from '../config/siteConfig';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-full">
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">{siteConfig.about.badge}</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                {siteConfig.about.title.split(' ')[0]}, {siteConfig.about.title.split(' ')[1]} <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{siteConfig.about.title.split(' ').slice(2).join(' ')}</span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                {siteConfig.about.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '2+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.number}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Our Expertise</h3>
              <div className="space-y-3">
                {[
                  { skill: 'Frontend Development', level: 95 },
                  { skill: 'Backend Development', level: 90 },
                  { skill: 'UI/UX Design', level: 85 },
                  { skill: 'Database Design', level: 88 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item.skill}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">HK</span>
                  </div>
                  <h3 className="text-2xl font-bold">Team HK</h3>
                  <p className="text-indigo-100">Full-Stack Development Team</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Modern Web Technologies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Responsive Design Focus</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Performance Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>24/7 Support & Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
