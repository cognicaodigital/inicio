import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Activity, Zap } from 'lucide-react';
import content from '../data/content.json';

const Hero = () => {
  const hero = content?.home?.hero;

  if (!hero) return null;

  return (
    <section className="relative pt-36 pb-28 lg:pt-48 lg:pb-40 bg-slate-marble overflow-hidden border-b border-white/[0.03]">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            <div 
              className="pill-badge mb-8 inline-block"
              dangerouslySetInnerHTML={{ __html: hero.badge }}
            />
            
            <h1 
              className="text-5xl lg:text-7xl mb-8 font-display font-black text-white tracking-wide leading-[1.05]"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              dangerouslySetInnerHTML={{ __html: hero.headline }}
            />
            
            <p className="text-base lg:text-xl text-slate-400 max-w-2xl mb-12 font-medium leading-relaxed">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
              <Link to="/diagnostico" className="btn-primary group !px-10 !py-5 text-center">
                Fazer Diagnóstico Estratégico <ArrowRight className="ml-3 group-hover:translate-x-1.5 transition-transform" size={16} />
              </Link>
              <Link to="/orcamento" className="btn-secondary !px-10 !py-5 text-center">
                Solicitar Orçamento
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Premium Cognitive SVG Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center h-[350px] lg:h-[450px]"
          >
            {/* Glowing background halo */}
            <div className="absolute w-[350px] h-[350px] bg-brand-electric/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            {/* Abstract Graphic */}
            <svg 
              viewBox="0 0 400 400" 
              className="w-full max-w-[380px] h-auto relative z-10 drop-shadow-[0_0_35px_rgba(0,210,255,0.15)]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Orbit Rings */}
              <motion.circle 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                cx="200" cy="200" r="160" 
                stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="10 20"
              />
              <motion.circle 
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                cx="200" cy="200" r="110" 
                stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5 10"
              />
              <circle cx="200" cy="200" r="60" stroke="#00D2FF" strokeWidth="1" strokeOpacity="0.2" />

              {/* Core Node */}
              <circle cx="200" cy="200" r="30" fill="url(#circleGrad)" />
              <circle cx="200" cy="200" r="15" fill="#00D2FF" fillOpacity="0.6" />

              {/* Outer Nodes */}
              <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <circle cx="100" cy="120" r="22" fill="#0E1626" stroke="#00D2FF" strokeWidth="1.5" />
                <path d="M92 120 H108 M100 112 V128" stroke="#00D2FF" strokeWidth="1.5" />
              </motion.g>

              <motion.g animate={{ y: [0, 12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <circle cx="300" cy="150" r="26" fill="#0E1626" stroke="#1D4ED8" strokeWidth="1.5" />
                <path d="M292 145 L308 155 M292 155 L308 145" stroke="#00D2FF" strokeWidth="1.5" />
              </motion.g>

              <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <circle cx="260" cy="280" r="20" fill="#0E1626" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="260" cy="280" r="6" fill="#00D2FF" />
              </motion.g>

              <motion.g animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
                <circle cx="120" cy="260" r="24" fill="#0E1626" stroke="#00D2FF" strokeWidth="1.5" />
                <circle cx="120" cy="260" r="10" fill="#1D4ED8" fillOpacity="0.4" />
              </motion.g>

              {/* Connection Lines */}
              <line x1="200" y1="200" x2="100" y2="120" stroke="#00D2FF" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="200" y1="200" x2="300" y2="150" stroke="#1D4ED8" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="200" y1="200" x2="260" y2="280" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />
              <line x1="200" y1="200" x2="120" y2="260" stroke="#00D2FF" strokeWidth="1" strokeOpacity="0.3" />
            </svg>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-4 bg-brand-navy-card/90 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-white shadow-xl"
            >
              <Cpu size={14} className="text-brand-electric" /> Inteligência Ativa
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-4 bg-brand-navy-card/90 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-white shadow-xl"
            >
              <Activity size={14} className="text-brand-electric" /> Alta Performance
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;