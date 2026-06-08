import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users } from 'lucide-react';
import content from '../data/content.json';

const Structure = () => {
  const { structure } = content.home;

  return (
    <section className="py-32 bg-brand-navy text-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* List side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-16 tracking-tighter leading-[0.95]">
              {structure.title}
            </h2>
            <div className="space-y-10">
              {structure.items.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500 shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-xl font-bold leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-ultra border-4 border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                alt="Empresas Impactadas" 
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </div>
            
            {/* Stats Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group absolute -bottom-10 right-10 bg-white border border-transparent hover:border-brand-gold/30 p-10 rounded-3xl shadow-4xl hover:shadow-2xl hover:shadow-brand-gold/20 hover:-translate-y-4 transition-all duration-500 flex items-center gap-6 cursor-default"
            >
              <div className="w-14 h-14 bg-brand-gold/10 group-hover:bg-brand-gold group-hover:scale-110 rounded-2xl flex items-center justify-center text-brand-gold group-hover:text-brand-navy transition-all duration-500">
                <Users size={28} />
              </div>
              <div>
                <div className="text-3xl font-black text-brand-navy leading-none mb-1 group-hover:text-brand-gold transition-colors duration-500">
                  +50
                </div>
                <div className="text-[10px] font-black tracking-[0.1em] text-slate-400 group-hover:text-brand-navy transition-colors duration-500">
                  Empresas Impactadas
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
