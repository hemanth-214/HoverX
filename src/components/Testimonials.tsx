import React from 'react';
import CTAButton from './CTAButton';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'HoverX delivered an exceptional website that perfectly captured our brand vision. The attention to detail and technical expertise exceeded our expectations.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Solutions',
      role: 'Marketing Director',
      content: 'Working with HoverX was a game-changer for our business. They created a stunning e-commerce platform that increased our conversions by 40%.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      role: 'Founder',
      content: 'The team at HoverX is incredibly talented and professional. They delivered our project on time and the quality was outstanding.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'David Thompson',
      company: 'Local Restaurant',
      role: 'Owner',
      content: 'Our new website has transformed our business. Online orders increased significantly, and customers love the user experience.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Client <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full mx-auto"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full flex items-center justify-center">
                  {/* CLIENT PHOTO PLACEHOLDER */}
                  <span className="text-slate-900 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
              50+
            </div>
            <p className="text-slate-600 dark:text-slate-400">Projects Completed</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
              100%
            </div>
            <p className="text-slate-600 dark:text-slate-400">Client Satisfaction</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
              48h
            </div>
            <p className="text-slate-600 dark:text-slate-400">Average Delivery</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
              24/7
            </div>
            <p className="text-slate-600 dark:text-slate-400">Support Available</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Ready to join our satisfied clients?
          </p>
          <CTAButton variant="primary" size="lg" type="contact">
            Start Your Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
