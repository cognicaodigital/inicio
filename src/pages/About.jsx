import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, History, MessageSquare, Award, CheckCircle2, Rocket, Eye, Cpu } from 'lucide-react';
import content from '../data/content.json';

const About = () => {
  const { about } = content.home;
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      {/* Hero Section (Restoring structure) */}
      <div className="section-container mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square overflow-hidden rounded-[2.5rem] shadow-ultra grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="/strategists_pt.png" 
                alt="Equipe Cognição Digital trabalhando em estratégia" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold rounded-3xl -z-10 animate-pulse opacity-20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pill-badge mb-6">{about.title}</span>
            <p className="text-base lg:text-xl text-slate-500 leading-relaxed font-medium mb-12">
              {about.manifesto}
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              {about.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-black text-brand-gold mb-2 tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Strategic Triad (Mission, Vision, Future) */}
      <div className="section-container mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-slate-50 rounded-[2.5rem] flex flex-col items-center text-center border border-transparent hover:border-brand-gold/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-brand-navy text-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-black text-brand-navy mb-4 tracking-tight">Missão</h3>
            <p className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed">
              {about.mission}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 bg-slate-50 rounded-[2.5rem] flex flex-col items-center text-center border border-transparent hover:border-brand-gold/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-brand-navy text-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <Eye size={32} />
            </div>
            <h3 className="text-xl font-black text-brand-navy mb-4 tracking-tight">Visão</h3>
            <p className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed">
              {about.vision}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-slate-50 rounded-[2.5rem] flex flex-col items-center text-center border border-transparent hover:border-brand-gold/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-brand-navy text-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <Cpu size={32} />
            </div>
            <h3 className="text-xl font-black text-brand-navy mb-4 tracking-tight">Futuro & IA</h3>
            <p className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed">
              {about.future}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section (Follows Triad) */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-glow-alt opacity-10 pointer-events-none"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-white mb-6 tracking-tighter">{about.values.title}</h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto">{about.values.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.list.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-brand-gold transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:!text-[#0D1B2A] transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="text-lg font-black text-white tracking-tight">{value.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section (Follows Values) */}
      <section className="py-24 bg-white">
        <div className="section-container text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-12 max-w-4xl mx-auto tracking-tighter"
          >
            Não somos uma agência de marketing. <br />
            <span className="text-brand-gold">Somos arquitetos de negócios.</span>
          </motion.h2>
          <p className="text-lg lg:text-xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed italic">
            "Acreditamos que o design sem estratégia é apenas decoração. Na Cognição Digital, cada pixel é planejado para vender e cada funil é desenhado para escalar."
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-gold font-black tracking-[0.3em] text-[10px] block mb-4">História</span>
              <h2 className="text-3xl lg:text-5xl text-white mb-8 tracking-tighter">A <span className="text-brand-gold italic font-display">evolução</span> do método</h2>
              <p className="text-base lg:text-xl text-slate-400 leading-relaxed max-w-lg mb-10 font-medium">
                O que começou como uma indignação com o mercado tradicional transformou-se em uma fábrica de autoridade digital.
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <History size={20} />
                </div>
                <span className="text-[10px] font-black tracking-[0.2em]">Julho 2022 - Infinity</span>
              </div>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-0 lg:before:left-[-60px] before:top-0 before:w-[1px] before:h-full before:bg-white/10">
              {about.timeline.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute left-[-6px] lg:left-[-66px] top-2 w-3 h-3 rounded-full bg-brand-gold animate-glow shadow-[0_0_15px_rgba(255,204,0,0.5)]"></div>
                  <span className="text-brand-gold font-black text-2xl mb-2 block">{event.year}</span>
                  <h4 className="text-xl font-bold mb-3 tracking-tight text-white">{event.title}</h4>
                  <p className="text-sm lg:text-base text-slate-400 leading-relaxed font-medium">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white border-b border-slate-50">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="flex items-center gap-3">
              <Award className="text-brand-gold" size={24} />
              <span className="text-[10px] font-black tracking-[0.2em]">DNA estratégico</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-brand-gold" size={24} />
              <span className="text-[10px] font-black tracking-[0.2em]">Segurança de dados</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-gold" size={24} />
              <span className="text-[10px] font-black tracking-[0.2em]">Performance 100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl mb-10 tracking-tighter">Esclarecendo o Modelo</h2>
          </div>
          
          <div className="space-y-4">
            {about.faq.map((item, index) => (
              <div 
                key={index} 
                className="border border-slate-100 rounded-3xl overflow-hidden bg-slate-50/50"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg lg:text-xl font-bold text-brand-navy tracking-tight">{item.question}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <ArrowRight size={20} className="text-brand-gold rotate-90" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-slate-500 leading-relaxed font-medium text-base lg:text-lg">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="section-container">
          <div className="bg-brand-navy rounded-[3.5rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-hero-glow-alt opacity-20 pointer-events-none"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-6xl text-white mb-8 tracking-tighter leading-none">
                Pronto para sair da <span className="text-brand-gold italic font-display">média?</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
                A estrutura que falta para o seu próximo salto de faturamento começa com um diagnóstico.
              </p>
              <button className="btn-yellow !px-16 !py-6 group">
                Solicitar Diagnóstico Estratégico <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
