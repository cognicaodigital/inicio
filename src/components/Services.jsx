import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Rocket } from 'lucide-react';
import content from '../data/content.json';

const Services = () => {
  const { atuacao } = content.home;
  const icons = [Target, Globe, Rocket];

  return (
    <section className="py-24 section-container">
      <div className="grid lg:grid-cols-3 gap-10">
        {atuacao.cards.map((card, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-white border border-brand-navy/25 p-12 rounded-[3.5rem] shadow-lg hover:shadow-2xl hover:shadow-brand-gold/5 hover:border-brand-gold/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-20 h-20 bg-brand-gold/10 rounded-3xl flex items-center justify-center text-brand-gold mb-10 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-gold/40 transition-all duration-500 relative z-10">
                <Icon size={36} />
              </div>
              <h3 className="text-3xl font-display font-black leading-tight mb-6">
                {card.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed opacity-80">
                Soluções desenhadas para transformar posicionamento digital em faturamento real e escala de negócios.
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
