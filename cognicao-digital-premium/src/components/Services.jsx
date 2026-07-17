import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Rocket, ArrowUpRight } from 'lucide-react';
import content from '../data/content.json';

const Services = () => {
  const { atuacao } = content.home;
  const icons = [Target, Globe, Rocket];
  
  // Bento grid config: 3 cards structured as asymmetrical blocks
  // Card 0 (Estruturação de Ofertas) -> Col-span-5
  // Card 1 (Engenharia de Presença) -> Col-span-7
  // Card 2 (Ecossistemas de Vendas) -> Col-span-12 (Double-wide master card)
  const colSpans = ['lg:col-span-5', 'lg:col-span-7', 'lg:col-span-12'];

  return (
    <section className="py-24 section-container">
      <div className="grid lg:grid-cols-12 gap-8">
        
        {atuacao.cards.map((card, index) => {
          const Icon = icons[index % icons.length];
          const spanClass = colSpans[index] || 'lg:col-span-4';
          const isMaster = index === 2; // Ecossistemas de Vendas

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`glass-card p-10 lg:p-12 relative overflow-hidden group flex flex-col justify-between ${spanClass}`}
            >
              {/* Blur gradient hover spots */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-brand-electric/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {isMaster ? (
                // Master Bento Card (Ecossistemas de Vendas) - Split Layout
                <div className="grid md:grid-cols-12 gap-8 items-center w-full">
                  <div className="md:col-span-7 text-left">
                    <div className="w-16 h-16 bg-brand-electric/10 rounded-2xl flex items-center justify-center text-brand-electric mb-8 group-hover:scale-110 group-hover:bg-brand-electric group-hover:text-brand-navy group-hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-500">
                      <Icon size={30} />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-display font-black leading-tight mb-4 text-white group-hover:text-brand-electric transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 font-medium leading-relaxed max-w-lg">
                      Integração de funis de vendas inteligentes e automações avançadas que conectam todos os pontos da sua presença digital para captar clientes em escala de elite.
                    </p>
                  </div>
                  
                  {/* Decorative visual on the right of the master card */}
                  <div className="md:col-span-5 h-full min-h-[150px] bg-white/[0.01] border border-white/[0.04] rounded-[2rem] p-6 flex flex-col justify-center gap-4 relative z-10">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-3">
                      <span>Engenharia de Conversão</span>
                      <ArrowUpRight size={14} className="text-brand-electric animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-3/4 bg-brand-electric/20 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                      <div className="h-2 w-5/6 bg-brand-blue-metallic/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ) : (
                // Standard Bento Card
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="w-16 h-16 bg-brand-electric/10 rounded-2xl flex items-center justify-center text-brand-electric mb-8 group-hover:scale-110 group-hover:bg-brand-electric group-hover:text-brand-navy group-hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-500">
                      <Icon size={30} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display font-black leading-tight mb-4 text-white group-hover:text-brand-electric transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 font-medium leading-relaxed">
                      {index === 0 
                        ? 'Modelagem e precificação premium de produtos e serviços desenhados para atrair clientes de alto padrão e com alta lucratividade.'
                        : 'Posicionamento magnético focado em autoridade indiscutível no Google, redes sociais e ambientes digitais estratégicos.'
                      }
                    </p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <span className="text-slate-600 group-hover:text-brand-electric transition-colors duration-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              )}

            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default Services;