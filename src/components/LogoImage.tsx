import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

interface LogoImageProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const LogoImage: React.FC<LogoImageProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const [logoExists, setLogoExists] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  useEffect(() => {
    // Check if logo file exists
    const img = new Image();
    img.onload = () => {
      setLogoExists(true);
      setLogoLoaded(true);
    };
    img.onerror = () => {
      setLogoExists(false);
      setLogoLoaded(true);
    };
    img.src = siteConfig.logo.path;
  }, []);

  if (!logoLoaded) {
    // Loading state
    return (
      <div className={`${sizeClasses[size]} bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse ${className}`}>
        <div className="w-1/2 h-1/2 bg-white/20 rounded"></div>
      </div>
    );
  }

  if (logoExists) {
    // Show actual logo image
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <img 
          src={siteConfig.logo.path}
          alt={siteConfig.logo.alt}
          className={`${sizeClasses[size]} object-contain rounded-xl`}
        />
        {showText && (
          <span className={`font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${textSizes[size]}`}>
            {siteConfig.company.name}
          </span>
        )}
      </div>
    );
  }

  // Fallback to text logo
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg`}>
        <span className={`text-white font-bold ${textSizes[size]}`}>
          {siteConfig.logo.fallbackText}
        </span>
      </div>
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${textSizes[size]}`}>
          {siteConfig.company.name}
        </span>
      )}
    </div>
  );
};

export default LogoImage;
