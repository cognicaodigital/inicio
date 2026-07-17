import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, ArrowRight } from 'lucide-react';
import content from '../data/content.json';

const Structure = () => {
  const { structure } = content.home;

  return (
    <section className="py-32 bg-slate-marble-dark text-white overflow-hidden border-y border-white/[0.04] relative">
      {/* Background ambient lighting */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-brand-blue-metallic/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Dynamic List Rows */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 
              className="text-4xl lg:text-6xl text-white mb-16 tracking-wide leading-[1] font-display font-black"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              Negócios que <span className="text-brand-electric">Estruturamos</span>
            </h2>
            
            <div className="space-y-4">
              {structure.items.map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white/[0.02] border border-white/[0.04] hover:border-brand-electric/25 px-6 py-5 rounded-2xl flex gap-5 items-center transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-electric/10 flex items-center justify-center text-brand-electric group-hover:bg-brand-electric group-hover:text-brand-navy transition-all duration-300 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-base font-semibold text-slate-300 group-hover:text-white transition-colors duration-300 leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Image & Floating Badges */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-ultra border border-white/[0.08] relative group bg-brand-navy">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipe na mesa de reunião" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
            
            {/* Stats Floating Glass Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group absolute -bottom-8 -left-8 bg-brand-navy-card/90 backdrop-blur-xl border border-white/[0.08] p-8 rounded-3xl shadow-4xl hover:border-brand-electric/30 hover:-translate-y-2 transition-all duration-500 flex items-center gap-5 cursor-default z-20"
            >
              <div className="w-12 h-12 bg-brand-electric/15 rounded-xl flex items-center justify-center text-brand-electric group-hover:bg-brand-electric group-hover:text-brand-navy transition-all duration-500 shrink-0">
                <Users size={24} />
              </div>
              <div className="leading-tight">
                <div className="text-3xl font-black text-white group-hover:text-brand-electric transition-colors duration-500">
                  +50
                </div>
                <div className="text-[9px] font-black tracking-widest text-slate-500 uppercase mt-1">
                  Empresas Impactadas
                </div>
              </div>
            </motion.div>

            {/* Glowing borders ornament */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-electric/20 rounded-tr-3xl pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-electric/20 rounded-bl-3xl pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Structure;