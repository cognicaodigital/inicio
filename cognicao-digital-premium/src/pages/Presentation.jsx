import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  Target, 
  BarChart3, 
  Search, 
  Link as LinkIcon, 
  MousePointer2, 
  CheckCircle2, 
  Rocket, 
  MessageSquare, 
  Smartphone, 
  Layout 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../utils/seo';

const slides = [
  {
    id: 'evolution',
    tag: 'A Nova Era',
    title: 'O digital evoluiu, e o seu negócio <span class="text-brand-electric italic">também precisa.</span>',
    desc: 'Estar no digital hoje não é mais sobre "quem grita mais alto", mas sobre quem constrói a estrutura mais sólida, inteligente e intencional.',
    icon: <Zap size={40} />,
    color: 'bg-brand-navy-card',
    textColor: 'text-white'
  },
  {
    id: 'authority',
    tag: 'O Diferencial',
    title: 'Deixe de ser apenas um perfil e torne-se uma <span class="text-brand-electric">Autoridade.</span>',
    desc: 'Enquanto outros se preocupam com métricas de vaidade, nós estruturamos o ecossistema que transforma sua presença online em um ativo de escala.',
    icon: <Target size={40} />,
    color: 'bg-brand-navy-card',
    textColor: 'text-white'
  },
  {
    id: 'strategy',
    tag: 'Nossa Entrega',
    title: 'Design que encanta, <br/> <span class="text-brand-electric italic">Estratégia que vende.</span>',
    desc: 'Unimos a sofisticação visual à engenharia de conversão para que cada detalhe da sua marca transmita confiança, exclusividade e lucro.',
    icon: <BarChart3 size={40} />,
    color: 'bg-brand-navy-card',
    textColor: 'text-white'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Presentation = () => {
  usePageSEO('Apresentação', 'Entenda nossa metodologia e saiba por que um showroom digital de elite é o coração da sua autoridade online.');

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-brand-navy pt-24 overflow-x-hidden text-slate-300">
      {/* 1. Pitch Deck Section */}
      <section className="flex items-center justify-center p-4 lg:p-12 min-h-[calc(100vh-6rem)]">
        <motion.div 
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.01 }}
          className="w-full max-w-6xl min-h-[500px] lg:min-h-[600px] rounded-[3rem] overflow-hidden shadow-ultra relative flex flex-col bg-brand-navy-card border border-white/5 group/hero cursor-default"
        >
          {/* Spotlight Effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 z-30"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 210, 255, 0.08), transparent 80%)`
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col lg:flex-row text-white"
            >
              {/* Content Side */}
              <div className="flex-1 p-8 lg:p-20 flex flex-col justify-center relative z-10">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-electric mb-6 block"
                >
                  {slides[currentSlide].tag}
                </motion.span>
                
                <h1 
                  className="text-4xl lg:text-6xl xl:text-7xl font-black tracking-wide leading-[1.1] mb-8 text-white"
                  dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg lg:text-xl xl:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl"
                >
                  {slides[currentSlide].desc}
                </motion.p>

                {/* Progress Indicators */}
                <div className="flex gap-3 mt-12">
                  {slides.map((_, idx) => (
                    <motion.div 
                      key={idx}
                      initial={false}
                      animate={{ 
                        width: currentSlide === idx ? 48 : 16,
                        backgroundColor: currentSlide === idx ? '#00D2FF' : 'rgba(255,255,255,0.1)'
                      }}
                      className="h-1.5 rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Visual/Icon Side */}
              <div className="hidden lg:flex w-1/3 items-center justify-center relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  whileHover={{ rotate: 5, scale: 1.1, boxShadow: "0 0 40px rgba(0, 210, 255, 0.4)" }}
                  transition={{ 
                    rotate: { type: "spring", stiffness: 200, damping: 15 },
                    scale: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="w-40 h-40 xl:w-48 xl:h-48 rounded-[3rem] bg-brand-electric text-brand-navy flex items-center justify-center shadow-2xl relative z-20 cursor-pointer"
                >
                  {slides[currentSlide].icon}
                </motion.div>
                
                {/* Decorative circles */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-80 h-80 xl:w-96 xl:h-96 border border-brand-electric/20 rounded-full"
                ></motion.div>
                <div className="absolute w-[25rem] h-[25rem] xl:w-[30rem] xl:h-[30rem] border border-brand-electric/10 rounded-full"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex gap-4 z-40">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 210, 255, 1)', color: '#080F1A', borderColor: '#00D2FF' }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center transition-all text-white ${currentSlide === 0 ? 'opacity-10 cursor-not-allowed' : ''}`}
            >
              <ArrowLeft size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 210, 255, 1)', color: '#080F1A', borderColor: '#00D2FF' }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center transition-all text-white ${currentSlide === slides.length - 1 ? 'opacity-10 cursor-not-allowed' : ''}`}
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-24 bg-slate-marble-dark border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-6 tracking-wide">
              Por que você está deixando <span className="text-brand-electric italic">dinheiro na mesa?</span>
            </h2>
            <div className="w-20 h-1 bg-brand-electric mx-auto shadow-glow-blue"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Search className="text-brand-electric" />, title: 'Invisibilidade no Google', desc: 'Se o seu cliente te procura no Google e não te encontra, ele está encontrando o seu concorrente.' },
              { icon: <LinkIcon className="text-brand-electric" />, title: 'Link na Bio Amador', desc: 'Um perfil no Instagram sem um destino profissional passa uma imagem de amadorismo e falta de estrutura.' },
              { icon: <MousePointer2 className="text-brand-electric" />, title: 'Fuga de Leads', desc: 'Sem um ambiente controlado (seu site), o lead se perde em notificações e distrações de redes sociais.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="glass-card p-10 group"
              >
                <div className="w-12 h-12 bg-brand-electric/15 rounded-xl flex items-center justify-center text-brand-electric mb-6 group-hover:bg-brand-electric group-hover:text-brand-navy transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-wide">{item.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Core Section */}
      <section className="py-24 relative overflow-hidden px-6 lg:px-20">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl lg:text-5xl text-white mb-8 tracking-wide leading-tight">
                Seu site é o <span className="text-brand-electric">coração</span> da sua presença digital premium.
              </h2>
              <div className="space-y-6">
                {[
                  'Mais autoridade para o seu nome ou empresa.',
                  'Ambiente estruturado para conduzir o lead à conversão.',
                  'Sua loja aberta e funcionando 24 horas por dia.',
                  'Centralização total dos seus recursos e ativos digitais.',
                  'Posicionamento premium frente à sua concorrência.'
                ].map((text, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-electric/20 flex items-center justify-center text-brand-electric shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-slate-300 font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden group shadow-2xl bg-slate-950"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-brand-electric/10 to-transparent z-10"></div>
               <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Web Design" 
                className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                 <div className="px-8 py-4 bg-brand-navy/85 backdrop-blur-md rounded-2xl border border-white/10 text-white font-black tracking-widest text-[10px] uppercase shadow-xl">
                    WEB DESIGN ESTRATÉGICO
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-24 bg-slate-marble-dark px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-4 tracking-wide">Como funciona a criação do seu site</h2>
            <div className="w-20 h-1 bg-brand-electric mx-auto shadow-glow-blue mb-8"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { num: '01', title: 'Análise de Negócio', desc: 'Entendemos seu público, sua oferta e sua concorrência.' },
              { num: '02', title: 'Planejamento', desc: 'Estruturamos a jornada do usuário para máxima conversão.' },
              { num: '03', title: 'Desenvolvimento', desc: 'Criamos seu site com as tecnologias mais modernas.' },
              { num: '04', title: 'Publicação e Suporte', desc: 'Lançamos seu site e garantimos que ele funcione sempre.' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-card p-10 relative overflow-hidden group"
              >
                <span className="text-5xl font-black text-brand-electric/10 absolute top-8 right-8 group-hover:text-brand-electric/25 transition-colors">{step.num}</span>
                <h3 className="text-xl font-black text-white mb-4 tracking-wide relative z-10">{step.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Solutions Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-4 tracking-wide">O que podemos criar para você</h2>
            <div className="w-20 h-1 bg-brand-electric mx-auto shadow-glow-blue"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <Layout />, title: 'Link na Bio Premium', desc: 'Estrutura profissional para o Instagram.' },
              { icon: <Rocket />, title: 'Páginas de Lançamento', desc: 'Foco total em captação e vendas de cursos.' },
              { icon: <BarChart3 />, title: 'Páginas de Vendas', desc: 'Copywriting e design focados em conversão.' },
              { icon: <Smartphone />, title: 'Sites Corporativos', desc: 'Presença digital sólida para empresas.' }
            ].map((sol, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 group"
              >
                <div className="text-brand-electric mb-6 group-hover:scale-110 transition-transform">{sol.icon}</div>
                <h3 className="text-lg font-black text-white mb-3 tracking-wide">{sol.title}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Portfolio Showcase */}
      <section className="py-24 bg-slate-marble-dark border-y border-white/[0.04] px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-4 tracking-wide">Transformando Negócios e Produtores</h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto text-sm">Arquiteturas que entregam autoridade inquestionável, seja qual for o seu segmento ou tecnologia.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12 mb-12"
          >
            {[
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            ].map((img, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="aspect-video bg-slate-950 rounded-[2rem] overflow-hidden border border-white/10 group relative"
              >
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={img} alt="Portfolio" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/cases" className="btn-secondary !px-12 !py-5 group">
              Ver portfólio completo <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Why Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-4 tracking-wide">Por que nos escolher?</h2>
            <div className="w-20 h-1 bg-brand-electric mx-auto shadow-glow-blue"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
          >
            {[
              { icon: <Layout />, title: 'Design Profissional', desc: 'Visuais modernos que transmitem confiança imediata.' },
              { icon: <Smartphone />, title: 'Adaptado para Celular', desc: 'Sua marca impecável em qualquer tamanho de tela.' },
              { icon: <MessageSquare />, title: 'Integração WhatsApp', desc: 'Canais de contato diretos para facilitar a venda.' },
              { icon: <Target />, title: 'Estrutura Estratégica', desc: 'Cada pixel planejado com um objetivo de negócio.' },
              { icon: <Zap />, title: 'Desenvolvimento Ágil', desc: 'Velocidade de entrega sem perder a qualidade premium.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="text-center group p-8 bg-white/[0.01] border border-white/[0.05] rounded-[2.5rem] hover:border-brand-electric/30 hover:bg-white/[0.03] transition-all duration-500"
              >
                <div className="w-16 h-16 bg-brand-electric/10 text-brand-electric rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-electric group-hover:text-brand-navy transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-3 tracking-wide leading-tight">{item.title}</h4>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Objection Section */}
      <section className="py-24 bg-slate-marble-dark border-y border-white/[0.04] text-white overflow-hidden relative px-6">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl lg:text-4xl font-black mb-8 tracking-wide text-white">
              "Mas eu já tenho sucesso no Instagram, preciso de um site?"
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 font-medium leading-relaxed mb-12">
              Sim! Depender apenas do Instagram é construir sua casa em terreno alugado. Um site profissional é o seu ativo real, onde você tem controle total, livre de distrações e focado 100% na sua autoridade.
            </p>
            <Link to="/diagnostico" className="btn-primary !px-16 !py-6 group inline-flex">
              Fazer Diagnóstico Estratégico <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <div className="py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl lg:text-4xl font-black text-white mb-8 tracking-wide">
            Interessado em nossa <span className="text-brand-electric">Arquitetura?</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/diagnostico" className="btn-primary !px-12 !py-5">
              Iniciar Diagnóstico <Zap size={18} className="ml-2" />
            </Link>
            <Link to="/cases" className="btn-secondary !px-12 !py-5">
              Ver Casos de Sucesso
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentation;