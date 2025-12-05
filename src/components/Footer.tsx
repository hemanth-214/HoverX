import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import CTAButton from './CTAButton';
import LogoImage from './LogoImage';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Landing Pages',
    'Business Websites',
    'E-Commerce Stores',
    'Web Applications',
    'API Integration',
    'Maintenance & Support'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/">
              <LogoImage size="sm" />
            </Link>
            <p className="text-slate-300 leading-relaxed">
              {siteConfig.company.description}
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.email} className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all duration-300">
                <span className="text-lg">📧</span>
              </a>
              <a href={siteConfig.social.whatsapp} className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 transition-all duration-300">
                <span className="text-lg">💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
                <span className="text-lg">🐙</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-300 hover:text-purple-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-indigo-400">📧</span>
                <span className="text-slate-300">{siteConfig.company.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">💬</span>
                <span className="text-slate-300">{siteConfig.company.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-400">⏰</span>
                <span className="text-slate-300">Response within {siteConfig.company.responseTime}</span>
              </div>
            </div>
            <CTAButton variant="primary" size="md" type="contact" className="w-full">
              Start Project
            </CTAButton>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-300 text-sm">
              © {currentYear} Team HK. All rights reserved. Built with ❤️ using React & Convex.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
