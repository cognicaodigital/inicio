import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, History, Award, CheckCircle2, Rocket, Eye, Cpu } from 'lucide-react';
import content from '../data/content.json';
import { usePageSEO } from '../utils/seo';

const About = () => {
  usePageSEO('Sobre Nós', 'Fundada em Julho de 2022, a Cognição Digital nasceu com a missão de elevar o padrão da presença online de empresários e profissionais.');
  const { about } = content.home;
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-navy text-slate-300">
      {/* Hero Section */}
      <div className="section-container mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square overflow-hidden rounded-[2.5rem] shadow-premium grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe trabalhando em estratégia" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-electric/10 rounded-3xl -z-10 animate-pulse"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pill-badge mb-6">{about.title}</span>
            <h1 className="text-3xl lg:text-5xl text-white mb-8 tracking-wide">
              Nossa Essência <span className="text-brand-electric">Estratégica</span>
            </h1>
            <p className="text-base lg:text-lg text-slate-400 leading-relaxed font-medium mb-12">
              {about.manifesto}
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              {about.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-black text-brand-electric mb-2 tracking-wide">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Strategic Triad */}
      <div className="section-container mb-24">
        <h2 className="sr-only">Diretrizes da Empresa</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Missão */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-brand-electric/10 text-brand-electric rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-electric group-hover:text-brand-navy transition-all duration-500">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-black text-white mb-4 tracking-wide">Missão</h3>
            <p className="text-slate-400 text-sm lg:text-base font-medium leading-relaxed">
              {about.mission}
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-brand-electric/10 text-brand-electric rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-electric group-hover:text-brand-navy transition-all duration-500">
              <Eye size={32} />
            </div>
            <h3 className="text-xl font-black text-white mb-4 tracking-wide">Visão</h3>
            <p className="text-slate-400 text-sm lg:text-base font-medium leading-relaxed">
              {about.vision}
            </p>
          </motion.div>

          {/* Futuro & IA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-brand-electric/10 text-brand-electric rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-electric group-hover:text-brand-navy transition-all duration-500">
              <Cpu size={32} />
            </div>
            <h3 className="text-xl font-black text-white mb-4 tracking-wide">Futuro & IA</h3>
            <p className="text-slate-400 text-sm lg:text-base font-medium leading-relaxed">
              {about.future}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-24 bg-slate-marble-dark relative overflow-hidden border-y border-white/[0.04]">
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-white mb-6 tracking-wide">{about.values.title}</h2>
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
                className="p-8 bg-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/[0.06] hover:border-brand-electric transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-electric/10 flex items-center justify-center text-brand-electric group-hover:bg-brand-electric group-hover:text-brand-navy transition-all duration-300">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="text-lg font-black text-white tracking-wide">{value.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="section-container text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-12 max-w-4xl mx-auto tracking-wide text-white"
          >
            Não somos uma agência de marketing. <br />
            <span className="text-brand-electric">Somos arquitetos de negócios.</span>
          </motion.h2>
          <p className="text-lg lg:text-xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed italic">
            "Acreditamos que o design sem estratégia é apenas decoração. Na Cognição Digital, cada pixel é planejado para vender e cada funil é desenhado para escalar."
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-slate-marble-dark border-y border-white/[0.04] relative">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-electric font-black tracking-[0.3em] text-[10px] block mb-4">História</span>
              <h2 className="text-3xl lg:text-5xl text-white mb-8 tracking-wide">A <span className="text-brand-electric italic font-display">evolução</span> do método</h2>
              <p className="text-base lg:text-xl text-slate-400 leading-relaxed max-w-lg mb-10 font-medium">
                O que começou como uma indignação com o mercado tradicional transformou-se em uma fábrica de autoridade digital de alto nível.
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full border border-brand-electric/30 flex items-center justify-center text-brand-electric shadow-glow-blue">
                  <History size={20} />
                </div>
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-400">Julho 2022 — Atualmente</span>
              </div>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-0 lg:before:left-[-60px] before:top-0 before:w-[1px] before:bg-white/10">
              {about.timeline.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute left-[-6px] lg:left-[-66px] top-2 w-3 h-3 rounded-full bg-brand-electric shadow-[0_0_15px_rgba(0,210,255,0.6)]"></div>
                  <span className="text-brand-electric font-black text-2xl mb-2 block">{event.year}</span>
                  <h4 className="text-xl font-bold mb-3 tracking-wide text-white">{event.title}</h4>
                  <p className="text-sm lg:text-base text-slate-400 leading-relaxed font-medium">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-700">
            <div className="flex items-center gap-3">
              <Award className="text-brand-electric" size={24} />
              <span className="text-[10px] font-black tracking-[0.2em] text-white">DNA estratégico</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-brand-electric" size={24} />
              <span className="text-[10px] font-black tracking-[0.2em] text-white">Segurança de dados</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-electric" size={24} />
              <span className="text-[10px] font-black tracking-[0.2em] text-white">Performance 100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl mb-10 tracking-wide text-white">Perguntas Frequentes</h2>
          </div>
          
          <div className="space-y-4">
            {about.faq.map((item, index) => (
              <div 
                key={index} 
                className="border border-white/[0.06] rounded-3xl overflow-hidden bg-white/[0.01]"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-lg lg:text-xl font-bold text-white tracking-wide">{item.question}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <ArrowRight size={20} className="text-brand-electric rotate-90" />
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
                      <div className="p-8 pt-0 text-slate-400 leading-relaxed font-medium text-base lg:text-lg">
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
          <div className="bg-brand-navy-card rounded-[3.5rem] border border-white/[0.05] p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-electric/5 blur-3xl pointer-events-none"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-6xl text-white mb-8 tracking-wide leading-none">
                Pronto para sair da <span className="text-brand-electric italic font-display">média?</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
                A estrutura que falta para o seu próximo salto de faturamento começa com um diagnóstico.
              </p>
              <button className="btn-primary !px-16 !py-6 group">
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