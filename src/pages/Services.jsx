import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Layers, 
  Target, 
  MapPin, 
  Monitor, 
  BookOpen, 
  Globe, 
  Cpu,
  X
} from 'lucide-react';
import content from '../data/content.json';
import CTA from '../components/CTA';

const iconMap = {
  0: Layers,
  1: Target,
  2: MapPin,
  3: Monitor,
  4: BookOpen,
  5: Globe,
  6: Cpu
};

const ServiceModal = ({ service, index, onClose }) => {
  if (!service) return null;
  const Icon = iconMap[index] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden relative shadow-ultra"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-400"
        >
          <X size={24} />
        </button>

        <div className="p-8 lg:p-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-brand-navy text-brand-gold rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <Icon size={32} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-black tracking-tight leading-tight mb-2">
                {service.title}
              </h2>
              <span className="text-[10px] font-black text-brand-gold tracking-[0.2em] uppercase">Estratégia Cognição Digital</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 mb-10 border-l-4 border-brand-gold">
            <p className="text-slate-600 font-medium italic leading-relaxed">
              "{service.desc}"
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-[10px] font-black text-brand-navy/40 tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              Itens inclusos na entrega
            </h3>
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {service.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full border-2 border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-brand-navy/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a 
            href={`https://wa.me/${content.company.contact.whatsapp}?text=Olá! Gostaria de mais informações sobre: ${service.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow w-full !py-6 group"
          >
            Solicitar Proposta Comercial <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const { services } = content;
  const [selectedService, setSelectedService] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Services Hero */}
      <section className="relative py-16 lg:py-24 bg-hero-glow overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pill-badge mb-6">Nossas Soluções</span>
            <h1 className="text-4xl lg:text-7xl mb-8 max-w-5xl mx-auto text-black tracking-tighter">
              {services.hero.title}
            </h1>
            <p className="text-base lg:text-xl text-slate-500 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
              {services.hero.subtitle}
            </p>
            <div className="max-w-4xl mx-auto p-8 lg:p-10 bg-slate-50 rounded-[2rem] border-l-4 border-brand-gold relative text-left">
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed font-medium italic">
                "{services.hero.manifesto}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.list.map((service, index) => {
              const Icon = iconMap[index] || Layers;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedService(service);
                    setSelectedIndex(index);
                  }}
                  className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-brand-gold/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-gold mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-xl font-black mb-6 tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-base text-slate-500 leading-relaxed font-medium mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-brand-gold font-bold text-xs tracking-widest gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    CONSULTAR DETALHES <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            index={selectedIndex}
            onClose={() => {
              setSelectedService(null);
              setSelectedIndex(null);
            }} 
          />
        )}
      </AnimatePresence>

      {/* Global CTA */}
      <CTA />
    </div>
  );
};

export default Services;
