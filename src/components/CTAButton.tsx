import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'contact' | 'pricing' | 'portfolio' | 'services' | 'custom';
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  type = 'contact',
  href
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const baseClasses = 'font-bold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-glow',
    secondary: 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700',
    outline: 'border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (href) {
      if (href.startsWith('http')) {
        window.open(href, '_blank');
      } else {
        navigate(href);
      }
      return;
    }

    switch (type) {
      case 'contact':
        if (location.pathname === '/') {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate('/contact');
        }
        break;
      case 'pricing':
        navigate('/pricing');
        break;
      case 'portfolio':
        navigate('/portfolio');
        break;
      case 'services':
        navigate('/services');
        break;
      default:
        navigate('/contact');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
