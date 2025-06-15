import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-30 blur-3xl rounded-full scale-150"></div>
              <div className="absolute inset-6 md:inset-8 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-white">JS</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, Im a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              React Front-end Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Crafting beautiful, responsive web applications with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button 
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded px-8 py-3 transition-colors duration-300"
            >
              View My Work
            </button>
            <a 
            className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded px-8 py-3 transition-colors duration-300"
            href='/JhonPaulGulleUpdatedResumeFinal.pdf'
            download={'JhonPaulGulle_Resume'}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
