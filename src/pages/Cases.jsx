import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import content from '../data/content.json';
import CTA from '../components/CTA';

const Cases = () => {
  const { cases } = content;

  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Cases Hero */}
      <section className="relative py-16 lg:py-24 bg-hero-glow overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pill-badge mb-6">Portfólio de Resultados</span>
            <h1 className="text-4xl lg:text-7xl mb-8 max-w-5xl mx-auto text-black tracking-tighter">
              {cases.hero.title}
            </h1>
            <p className="text-base lg:text-xl text-slate-500 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
              {cases.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {cases.list.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/cases/${project.id}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-10 bg-slate-100 group-hover:shadow-ultra transition-all duration-700">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-8 right-8">
                      <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ExternalLink size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                         <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm font-bold tracking-widest mt-2">{project.tagline}</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-2">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Problema</h4>
                    <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-4">Resultado</h4>
                    <p className="text-sm lg:text-lg text-brand-navy font-black leading-tight">
                      {project.result}
                    </p>
                  </div>
                </div>

                <Link 
                  to={`/cases/${project.id}`}
                  className="inline-flex items-center gap-3 mt-10 text-sm font-bold text-slate-400 hover:text-brand-gold transition-colors px-2"
                >
                  Ver estudo de caso completo <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Cases;
