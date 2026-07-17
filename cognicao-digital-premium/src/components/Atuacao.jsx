import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const Atuacao = () => {
  const { atuacao } = content.home;

  return (
    <section className="py-20 section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-5xl mb-8 tracking-wide">
          {atuacao.title}
        </h2>
        <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed italic opacity-90">
          "{atuacao.subtitle}"
        </p>
        <div className="w-24 h-1 bg-brand-electric mx-auto mt-10 rounded-full opacity-55 shadow-[0_0_10px_rgba(0,210,255,0.5)]"></div>
      </motion.div>
    </section>
  );
};

export default Atuacao;