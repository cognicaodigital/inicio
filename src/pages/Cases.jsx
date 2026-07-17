import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, ShieldCheck, X, Sparkles, FolderHeart } from 'lucide-react';
import content from '../data/content.json';
import CTA from '../components/CTA';

const Cases = () => {
  const { cases } = content;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  
  // Form de Captura
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [erro, setErro] = useState('');

  const handlePortfolioClick = () => {
    const isUnlocked = localStorage.getItem('cd_portfolio_lead');
    if (isUnlocked) {
      // Redireciona direto para o catálogo de nichos
      navigate('/cases/templates');
    } else {
      setShowModal(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim() || !whatsapp.trim()) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }
    // Salva o lead localmente
    localStorage.setItem('cd_portfolio_lead', JSON.stringify({ nome, whatsapp, date: new Date().toISOString() }));
    setShowModal(false);
    setErro('');
    
    // Redireciona para o catálogo de nichos
    navigate('/cases/templates');
  };

  return (
    <div className="min-h-screen pt-24 bg-cd-navy text-cd-white">
      {/* Cases Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-cd-navy">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pill-badge mb-6">Portfólio de Resultados</span>
            <h1 className="text-4xl lg:text-7xl mb-8 max-w-5xl mx-auto text-cd-white tracking-tighter">
              {cases.hero.title}
            </h1>
            <p className="text-base lg:text-xl text-cd-gold-light max-w-3xl mx-auto mb-10 font-medium leading-relaxed opacity-80">
              {cases.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* 4 ESTUDOS DE CASO ORIGINAIS */}
            {cases.list.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col justify-between"
              >
                <div>
                  <Link to={`/cases/${project.id}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 bg-[#121E36] border border-cd-blue/30 group-hover:shadow-ultra transition-all duration-700">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-60 group-hover:opacity-90"
                      />
                      <div className="absolute top-8 right-8">
                        <div className="w-14 h-14 bg-cd-gold rounded-full flex items-center justify-center text-cd-navy shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500">
                          <ExternalLink size={24} />
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="p-6 lg:p-8 bg-cd-navy/85 backdrop-blur-md rounded-2xl border border-cd-blue/30">
                          <h3 className="text-2xl lg:text-3xl font-black text-cd-white tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-cd-gold-light text-sm font-bold tracking-widest mt-2">{project.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-2 mb-8">
                    <div>
                      <h4 className="text-[10px] font-black text-cd-gold-light/60 uppercase tracking-widest mb-3">Problema</h4>
                      <p className="text-sm text-cd-white/70 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-cd-gold uppercase tracking-widest mb-3">Resultado</h4>
                      <p className="text-sm lg:text-lg text-cd-white font-black leading-snug">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>

                <Link 
                  to={`/cases/${project.id}`}
                  className="inline-flex items-center gap-3 text-sm font-bold text-cd-gold-light hover:text-cd-gold transition-colors px-2"
                >
                  Ver estudo de caso completo <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}

            {/* 5º CARD: MODELOS DE NICHOS (Netflix de Nichos) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group flex flex-col justify-between"
            >
              <div onClick={handlePortfolioClick} className="cursor-pointer block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 bg-[#121E36] border border-cd-gold/30 group-hover:shadow-ultra transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Biblioteca de Modelos de Nicho"
                    loading="lazy"
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-40 group-hover:opacity-70"
                  />
                  <div className="absolute top-8 right-8">
                    <div className="w-14 h-14 bg-cd-gold rounded-full flex items-center justify-center text-cd-navy shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500">
                      <FolderHeart size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="p-6 lg:p-8 bg-cd-navy/85 backdrop-blur-md rounded-2xl border border-cd-gold/20">
                      <h3 className="text-2xl lg:text-3xl font-black text-cd-gold tracking-tight flex items-center gap-2">
                        Modelos de Nichos <Sparkles size={20} className="text-cd-gold-light animate-pulse" />
                      </h3>
                      <p className="text-cd-white text-sm font-bold tracking-widest mt-2">NOSSOS TEMPLATES DE ALTA CONVERSÃO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-2 mb-8">
                <div>
                  <h4 className="text-[10px] font-black text-cd-gold-light/60 uppercase tracking-widest mb-3">O que é</h4>
                  <p className="text-sm text-cd-white/70 leading-relaxed">
                    Biblioteca interativa contendo modelos de sites construídos para diversos nichos específicos como Advocacia e Grama Sintética.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-cd-gold uppercase tracking-widest mb-3">Objetivo</h4>
                  <p className="text-sm lg:text-lg text-cd-white font-black leading-snug">
                    Interaja com os modelos prontos ao vivo e escolha a estrutura ideal para o seu negócio decolar.
                  </p>
                </div>
              </div>

              <button 
                onClick={handlePortfolioClick}
                className="inline-flex items-center gap-3 text-sm font-bold text-cd-gold hover:text-cd-gold-light transition-colors px-2 text-left"
              >
                Abrir catálogo de modelos exclusivos <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE GATE MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cd-navy/85 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-[#121E36] border border-cd-blue/40 rounded-[2.5rem] w-full max-w-md p-8 lg:p-10 relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cd-gold/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"/>
              
              <button
                onClick={() => { setShowModal(false); setErro(''); }}
                className="absolute top-6 right-6 p-2 rounded-full text-cd-white/60 hover:text-cd-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-cd-gold/10 rounded-2xl flex items-center justify-center text-cd-gold mx-auto mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-black text-cd-white tracking-tight mb-2">
                  Acesso Exclusivo
                </h3>
                <p className="text-xs text-cd-gold-light opacity-80 leading-relaxed">
                  Digite seu nome e WhatsApp para desbloquear nossa biblioteca completa de <strong>Modelos de Nichos</strong>.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-cd-gold-light mb-2">Seu Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl outline-none transition-all bg-[#121E36] border border-cd-blue/20 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-cd-gold-light mb-2">Seu WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (62) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl outline-none transition-all bg-[#121E36] border border-cd-blue/20 text-white"
                  />
                </div>

                {erro && (
                  <p className="text-xs text-red-500 font-bold text-center mt-2">{erro}</p>
                )}

                <button type="submit" className="btn-gold w-full justify-center py-4 mt-6">
                  Acessar Biblioteca de Modelos <ArrowRight size={15} className="ml-2" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[8px] font-bold tracking-wider text-cd-white/40 uppercase mt-4">
                  <ShieldCheck size={12} className="text-cd-gold" />
                  Seus dados estão 100% seguros
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </div>
  );
};

export default Cases;
