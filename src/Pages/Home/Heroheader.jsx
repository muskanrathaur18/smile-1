import React from 'react';

export default function HeroSection() {
  return (
    <div className="h-[300px] sm:h-[400px] bg-[#573d82] relative overflow-hidden flex items-center justify-center">
      {/* Dotted Pattern Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Main Content */}
      <div className="text-center text-white z-10 px-4 sm:px-6">
        {/* Main Text */}
        <div className="mb-6 sm:mb-8">
          <p className="text-2xl sm:text-4xl mb-2 font-bold">Lorem Ipsum is simply</p>
          <p className="text-2xl sm:text-4xl mb-6 font-bold">dummy text printing</p>

          {/* Input Field */}
          <div className="mb-6 sm:mb-8">
            <span className="text-lg sm:text-2xl font-bold">I'm a </span>
            <input
              type="text"
              className="bg-transparent border-b-2 border-white text-white placeholder-white/70 outline-none px-2 py-1 text-base sm:text-lg font-light w-24 sm:w-32"
              placeholder=""
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <button className="px-4 sm:px-6 py-2 border border-white/50 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 transition-colors">
            MULTIMEDIAGRAPH
          </button>
          <button className="px-4 sm:px-6 py-2 border border-white/50 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 transition-colors">
            COMIC ARTIST
          </button>
          <button className="px-4 sm:px-6 py-2 border border-white/50 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 transition-colors">
            WEB EDIT
          </button>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
