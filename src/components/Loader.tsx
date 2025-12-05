import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-2xl flex items-center justify-center animate-pulse">
            <span className="text-slate-900 font-bold text-2xl">HX</span>
          </div>
          
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-cyan-400 border-r-lime-400 rounded-2xl animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Loading <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">HoverX</span>
          </h2>
          
          {/* Progress Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
