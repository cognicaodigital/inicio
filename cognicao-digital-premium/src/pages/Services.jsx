import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import content from '../data/content.json';
import { usePageSEO } from '../utils/seo';
import { Link } from 'react-router-dom';

const Services = () => {
  usePageSEO('Serviços', 'Conheça nosso catálogo de soluções em arquitetura e engenharia de negócios digitais de alto nível.');
  const { services } = content;

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
          <span className="pill-badge mb-6">Nossas Soluções</span>
          <h1 className="text-4xl lg:text-7xl mb-8 tracking-wide text-white">
            {services.hero.title}
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 font-medium leading-relaxed mb-8">
            {services.hero.subtitle}
          </p>
          <p className="text-base text-slate-500 leading-relaxed border-l-2 border-brand-electric pl-6">
            {services.hero.manifesto}
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="section-container space-y-24">
        {services.list.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 lg:p-16 relative overflow-hidden group"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-electric/[0.03] rounded-full blur-3xl group-hover:bg-brand-electric/[0.06] transition-all duration-500"></div>
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Info */}
              <div className="lg:col-span-7">
                <span className="text-brand-electric font-black text-xs tracking-widest block mb-4 uppercase">
                  Serviço 0{index + 1}
                </span>
                <h2 className="text-2xl lg:text-4xl text-white mb-6 tracking-wide font-black">
                  {service.title}
                </h2>
                <p className="text-base lg:text-lg text-slate-400 leading-relaxed mb-8 font-medium">
                  {service.desc}
                </p>
                <div className="flex gap-4">
                  <Link to="/orcamento" className="btn-primary !px-8 !py-4 text-[10px] tracking-widest font-black uppercase">
                    Solicitar Escopo
                  </Link>
                </div>
              </div>

              {/* Right Side: Deliverables/Items */}
              <div className="lg:col-span-5 bg-white/[0.01] border border-white/[0.04] p-8 rounded-[2rem] relative z-10 backdrop-blur-sm">
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6">
                  Itens de Entrega
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 items-center group/item">
                      <div className="w-6 h-6 rounded-full bg-brand-electric/15 text-brand-electric flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-bold text-slate-300 group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Final */}
      <section className="py-32 section-container">
        <div className="bg-brand-navy-card rounded-[3.5rem] border border-white/[0.05] p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-electric/5 blur-3xl pointer-events-none"></div>
          <h2 className="text-3xl lg:text-6xl text-white mb-8 tracking-wide leading-none">
            Precisa de uma estrutura <span className="text-brand-electric italic font-display">personalizada?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Desenhamos a arquitetura ideal de acordo com o estágio e ambição atual do seu negócio.
          </p>
          <Link to="/diagnostico" className="btn-primary !px-16 !py-6 group">
            Agendar Reunião de Diagnóstico <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;