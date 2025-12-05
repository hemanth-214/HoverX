import React from 'react';
import ContactComponent from '../components/Contact';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Contact Hero */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-slate-900 dark:via-orange-900 dark:to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Get In <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? Let's discuss your requirements and 
              bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      <ContactComponent />
    </div>
  );
};

export default Contact;
