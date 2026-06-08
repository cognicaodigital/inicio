import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import content from '../data/content.json';

const Hero = () => {
  const hero = content?.home?.hero;

  if (!hero) return null;

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-hero-glow overflow-hidden">
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="pill-badge mb-6"
            dangerouslySetInnerHTML={{ __html: hero.badge }}
          />
          <h1 
            className="text-4xl lg:text-7xl mb-8 max-w-5xl mx-auto text-black tracking-tighter"
            dangerouslySetInnerHTML={{ __html: hero.headline }}
          />
          <p className="text-base lg:text-xl text-slate-500 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/diagnostico" className="btn-yellow group !px-12 !py-6">
              Fazer Diagnóstico Estratégico <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/orcamento" className="btn-navy !px-12 !py-6">
              Solicitar Orçamento
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Subtle visual elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-brand-gold rounded-full blur-[1px]"></div>
        <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-brand-navy/10 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
