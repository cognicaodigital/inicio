import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Compass, Layers, TrendingUp } from 'lucide-react';
import content from '../data/content.json';

const methodIcons = [Dna, Compass, Layers, TrendingUp];

const Method = () => {
  const { method } = content.home;

  return (
    <section className="py-32 section-container relative">
      <div className="text-center mb-32">
        <h2 className="text-3xl lg:text-5xl mb-6 relative inline-block text-white tracking-wide leading-none">
          {method.title}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-electric rounded-full shadow-glow-blue"></div>
        </h2>
      </div>

      {/* Staggered Grid for Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
        
        {method.columns.map((item, index) => {
          const Icon = methodIcons[index] || Dna;
          // Apply staggered offset effect: even items shifted downwards on large screens
          const offsetClass = index % 2 === 1 ? 'lg:translate-y-8' : '';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`glass-card p-10 relative overflow-hidden group text-left flex flex-col justify-between min-h-[320px] ${offsetClass}`}
            >
              {/* Massive metallic numeric indicator */}
              <div 
                className="absolute right-6 top-4 font-display font-black text-8xl text-transparent bg-clip-text bg-gradient-to-br from-white/10 to-transparent pointer-events-none select-none leading-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                style={{ fontFamily: "'League Spartan', sans-serif" }}
              >
                0{index + 1}
              </div>

              {/* Glowing hover spot */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-brand-electric/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-electric/15 flex items-center justify-center text-brand-electric group-hover:bg-brand-electric group-hover:text-brand-navy group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-500 shadow-inner mb-10">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-black mb-4 text-white tracking-wide">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-400 text-sm font-medium leading-relaxed mt-auto">
                {item.desc}
              </p>
            </motion.div>
          );
        })}

      </div>

      {/* Background visual connections (SVG wavy line flowing across cards) */}
      <div className="hidden lg:block absolute top-[50%] left-0 w-full h-[150px] -z-10 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1200 150" fill="none" className="w-full h-full">
          <path 
            d="M 0 50 Q 150 150, 300 50 T 600 50 T 900 50 T 1200 50" 
            stroke="url(#lineGrad)" 
            strokeWidth="3" 
            strokeDasharray="10 15"
          />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="50%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#00D2FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Method;