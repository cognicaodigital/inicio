import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import content from '../data/content.json';
import { usePageSEO } from '../utils/seo';

const Cases = () => {
  usePageSEO('Casos de Sucesso', 'Veja os resultados reais alcançados por nossos parceiros que estruturaram seus negócios digitais.');
  const { cases } = content;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-navy text-slate-300">
      {/* Hero Section */}
      <div className="section-container mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="pill-badge mb-6">Estudos de Caso</span>
          <h1 className="text-4xl lg:text-7xl mb-8 tracking-wide text-white">
            {cases.hero.title}
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 font-medium leading-relaxed">
            {cases.hero.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Cases Grid */}
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12">
          {cases.list.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col h-full border border-white/[0.06] hover:border-brand-electric/30"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden border-b border-white/[0.05] bg-slate-950">
                <div className="absolute inset-0 bg-brand-navy/25 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] text-[9px] font-black text-slate-400 rounded-full tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <span className="text-brand-electric font-black text-[9px] tracking-widest uppercase block mb-2">
                  {item.tagline}
                </span>
                
                <h3 className="text-2xl lg:text-3xl text-white mb-4 tracking-wide font-black group-hover:text-brand-electric transition-colors">
                  {item.title}
                </h3>
                
                <blockquote className="text-slate-400 italic mb-8 border-l-2 border-brand-electric/40 pl-4 text-sm leading-relaxed flex-grow">
                  "{item.quote}"
                </blockquote>

                <div className="pt-6 border-t border-white/[0.04] flex justify-between items-center mt-auto">
                  <Link 
                    to={`/cases/${item.id}`} 
                    className="text-xs font-black tracking-widest uppercase text-white hover:text-brand-electric flex items-center gap-2 group/btn transition-colors duration-300"
                  >
                    Ver Detalhes do Caso <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;