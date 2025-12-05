import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const actions = [
    {
      label: 'WhatsApp',
      icon: '💬',
      action: () => window.open('https://wa.me/916266602150', '_blank'),
      color: 'from-green-400 to-green-500'
    },
    {
      label: 'Email',
      icon: '📧',
      action: () => window.open('mailto:hoverxhk007@gmail.com', '_blank'),
      color: 'from-blue-400 to-blue-500'
    },
    {
      label: 'Contact Form',
      icon: '📝',
      action: () => {
        // Navigate to contact page if not already there
        if (window.location.pathname !== '/contact') {
          window.location.href = '/contact';
        } else {
          scrollToContact();
        }
      },
      color: 'from-purple-400 to-purple-500'
    }
  ];

  return (
    <div className="fixed bottom-8 left-8 z-40">
      {/* Action Buttons */}
      <div className={`space-y-3 mb-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        {actions.map((action, index) => (
          <button
            key={action.label}
            onClick={action.action}
            className={`flex items-center space-x-3 bg-gradient-to-r ${action.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="text-lg">{action.icon}</span>
            <span className="font-medium text-sm whitespace-nowrap">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ${
          isOpen ? 'rotate-45 scale-110' : 'hover:scale-110'
        }`}
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingAction;
