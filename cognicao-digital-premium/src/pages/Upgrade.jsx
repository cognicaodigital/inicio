import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap, BarChart3, ArrowRight, Star, Globe, Cpu } from 'lucide-react';
import { usePageSEO } from '../utils/seo';

const Upgrade = () => {
  usePageSEO('Upgrade Estratégico', 'Leve o seu negócio digital ao nível de elite com inteligência artificial e dominância local.');
  
  const benefits = [
    {
      icon: <Cpu className="text-brand-electric" size={32} />,
      title: "IA de Atendimento 24/7",
      desc: "Implementação de assistentes treinados com o seu DNA para vender enquanto você dorme."
    },
    {
      icon: <Globe className="text-brand-electric" size={32} />,
      title: "Dominância de Busca Local",
      desc: "Sua empresa no topo do Google em todas as regiões estratégicas da sua cidade."
    },
    {
      icon: <BarChart3 className="text-brand-electric" size={32} />,
      title: "Dashboard de Performance",
      desc: "Métricas em tempo real do seu lucro, ROI e custo por lead em uma única tela."
    }
  ];

  return (
    <div className="bg-brand-navy text-slate-300 min-h-screen pt-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue-metallic/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-electric/5 rounded-full blur-[120px] -z-10" />

      <section className="section-container relative z-10">
        {/* Header Upgrade */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-electric/10 border border-brand-electric/30 mb-8"
          >
            <Star size={14} className="text-brand-electric fill-brand-electric" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-electric">Nível de Elite</span>
          </motion.div>
          
          <h1 
            className="text-5xl lg:text-8xl font-black tracking-wide leading-[0.9] mb-10 text-white"
          >
            Leve seu Negócio para o <span className="text-brand-electric italic">Próximo Nível.</span>
          </h1>
          
          <p 
            className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            O digital comum saturou. Para dominar hoje, você precisa de uma arquitetura que integra dados, design de alto valor e inteligência artificial.
          </p>
        </div>

        {/* Upgrade Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-10 group"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-white tracking-wide">{item.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="glass-card p-12 lg:p-20 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none text-brand-electric">
            <Rocket size={200} />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl lg:text-5xl font-black mb-12 tracking-wide text-white">
              O que muda no seu <span className="text-brand-electric">Upgrade?</span>
            </h2>
            
            <div className="space-y-10">
              {[
                { title: "De Site Estático para Ecossistema Vivo", desc: "Sua página deixa de ser um panfleto digital e passa a ser uma ferramenta que aprende com o usuário." },
                { title: "De Autoridade Local para Referência Nacional", desc: "Ajustamos sua comunicação para atrair o público 'High Ticket' de qualquer lugar do país." },
                { title: "De Processos Manuais para Escala com IA", desc: "Automatizamos sua triagem e agendamento, liberando seu tempo para o que importa: Estratégia." }
              ].map((point, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-brand-electric/20 flex items-center justify-center text-brand-electric shrink-0 mt-1">
                    <Zap size={16} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{point.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-24">
          <div
            className="inline-block p-1 bg-gradient-to-r from-brand-blue-metallic/50 via-brand-electric to-brand-blue-metallic/50 rounded-3xl"
          >
            <button className="px-16 py-8 bg-brand-navy text-white rounded-[1.4rem] font-black text-2xl flex items-center gap-4 hover:bg-transparent transition-all group">
              SOLICITAR UPGRADE ESTRATÉGICO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <p className="mt-8 text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Exclusivo para Negócios em Fase de Escala</p>
        </div>
      </section>
    </div>
  );
};

export default Upgrade;