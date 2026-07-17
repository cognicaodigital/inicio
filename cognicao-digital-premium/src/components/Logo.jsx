import React from 'react';

const Logo = ({ className = 'h-10 md:h-12' }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* SVG Icon */}
      <svg
        viewBox="0 0 120 120"
        className={`${className} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Chrome/Silver Gradient */}
          <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="75%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          
          {/* Metallic Cobalt Blue Gradient */}
          <linearGradient id="cobaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="30%" stopColor="#0072FF" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Glow/Shadow Filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#00D2FF" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Left Side: 3 Slanted Metallic Chrome Bars */}
        <path
          d="M25 45 L50 20 C53 17 57 17 60 20 L65 25 C68 28 68 32 65 35 L40 60 Z"
          fill="url(#chromeGrad)"
        />
        <path
          d="M35 60 L60 35 C63 32 67 32 70 35 L75 40 C78 43 78 47 75 50 L50 75 Z"
          fill="url(#chromeGrad)"
        />
        <path
          d="M45 75 L70 50 C73 47 77 47 80 50 L85 55 C88 58 88 62 85 65 L60 90 Z"
          fill="url(#chromeGrad)"
        />

        {/* Right Side: Interlocking Cobalt Blue Wrapper */}
        <path
          d="M80 35 C88 43 88 57 80 65 L55 90 C50 95 42 95 37 90 L30 83 C25 78 25 70 30 65 L55 40 C60 35 70 30 80 35 Z"
          fill="url(#cobaltGrad)"
          filter="url(#glow)"
          opacity="0.9"
        />
      </svg>

      {/* Brand & Slogan Text */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1">
          <span 
            className="font-display font-black text-lg md:text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-silver uppercase"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            Cognição
          </span>
          <span 
            className="font-sans font-bold text-xs md:text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-blue-metallic uppercase"
          >
            Digital
          </span>
        </div>
        <span className="text-[7px] md:text-[8px] font-semibold text-slate-400 tracking-[0.18em] uppercase mt-1">
          Estratégia Cognitiva
        </span>
      </div>
    </div>
  );
};

export default Logo;