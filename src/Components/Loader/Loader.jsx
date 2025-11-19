import React from 'react';

const Loader = ({ fadeOut }) => {
  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 loader-bg ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className={`relative flex flex-col items-center justify-center transition-transform duration-700 ${fadeOut ? 'scale-95' : 'scale-100'}`}>
        <div className="relative flex items-center justify-center">
          {/* Spinner Ring */}
          <div className="absolute w-24 h-24 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin"></div>
          
          {/* Logo or Initial */}
          <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20 animate-pulse">
             <span className="text-2xl font-bold text-white">M</span>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold text-white tracking-wider animate-pulse loader-text">MIGUELANGEL</h2>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
