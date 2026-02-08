import React from 'react';

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 relative overflow-hidden flex items-center justify-center pt-20">

      <div className="relative z-10 text-center text-white container">
        <div className="mb-6 inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full backdrop-blur-sm fade-up delay-0 hover:border-cyan-400/80 hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-sm font-semibold">Welcome to my portfolio</span>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <p className="text-xl sm:text-2xl text-cyan-300/80 font-medium fade-up delay-1 hover:text-cyan-200 transition-colors duration-300 cursor-default">Hello,</p>
          <p className="text-xl sm:text-2xl text-gray-200/90 font-light fade-up delay-2 hover:text-white transition-colors duration-300 cursor-default">Great to have you here</p>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight fade-up delay-3 whitespace-nowrap group hover:scale-105 transition-transform duration-500">
          <span className="text-white glow-text group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300">I am</span>{' '}<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse group-hover:animate-none transition-all duration-300">AKTHAR HUSSAIN S</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed font-light max-w-3xl mx-auto fade-up delay-4 hover:text-gray-100 transition-colors duration-300 cursor-default">
          Computer Science Undergraduate | Full Stack Developer | DSA & AIML Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-center transform fade-up delay-5">
            Explore My Work
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 border-2 border-cyan-400/60 text-white rounded-lg font-bold hover:bg-cyan-400/20 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-center transform fade-up delay-6">
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-none hover:scale-125 transition-all duration-300 group cursor-pointer">
        <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
