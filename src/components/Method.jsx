import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Compass, Layers, TrendingUp } from 'lucide-react';
import content from '../data/content.json';

const methodIcons = [Dna, Compass, Layers, TrendingUp];

const Method = () => {
  const { method } = content.home;

  return (
    <section className="py-32 section-container">
      <div className="text-center mb-24">
        <h2 className="text-3xl lg:text-4xl mb-6 relative inline-block">
          {method.title}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-gold rounded-full"></div>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {/* Connection lines (desktop only) */}
        <div className="hidden lg:block absolute top-[25%] left-0 w-full h-[1px] bg-slate-100 -z-10"></div>

        {method.columns.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white border border-brand-navy/25 p-10 rounded-[3rem] shadow-lg hover:shadow-2xl hover:border-brand-gold/40 transition-all duration-500 relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            <div className="relative z-10 mb-10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-[1.5rem] bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:scale-110 transition-all duration-500 shadow-inner">
                {React.createElement(methodIcons[index] || Dna, { size: 28, strokeWidth: 1.5 })}
              </div>
            </div>
            <h3 className="relative z-10 text-xl font-black mb-6 text-center tracking-tight">
              {item.title}
            </h3>
            <p className="relative z-10 text-slate-500 text-sm font-medium leading-relaxed text-center">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Method;
