import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import content from '../data/content.json';

const NetworkSVG = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square select-none group">
    {/* Outer dashed ring */}
    <svg className="absolute inset-0 w-full h-full rotate-slow opacity-30" viewBox="0 0 400 400">
      <circle cx="200" cy="200" r="170" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="6 10"/>
    </svg>
    {/* Middle ring */}
    <svg className="absolute inset-0 w-full h-full pulse-ring opacity-20" viewBox="0 0 400 400">
      <circle cx="200" cy="200" r="120" fill="none" stroke="#1B3358" strokeWidth="1" strokeDasharray="4 8"/>
    </svg>

    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
      <line x1="200" y1="200" x2="130" y2="120" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 6" className="connection-line-orbit"/>
      <line x1="200" y1="200" x2="290" y2="150" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 6" className="connection-line-orbit"/>
      <line x1="200" y1="200" x2="270" y2="290" stroke="#1B3358" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 6" className="connection-line-orbit-blue"/>
      <line x1="200" y1="200" x2="120" y2="270" stroke="#1B3358" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 6" className="connection-line-orbit-blue"/>
    </svg>

    {/* Center node */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 hover:z-30 group/node">
      <div className="relative">
        <div className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover/node:shadow-[0_0_50px_rgba(201,168,76,0.6)]"
          style={{background:'linear-gradient(135deg,#1B3358,#0D1B2A)',boxShadow:'0 0 40px rgba(27,51,88,0.6)'}}>
          <div className="w-8 h-8 rounded-full transition-transform duration-500 group-hover/node:scale-125" style={{background:'rgba(201,168,76,0.8)',boxShadow:'0 0 20px rgba(201,168,76,0.8)'}}/>
        </div>
        <div className="absolute inset-0 rounded-full pulse-ring transition-colors duration-300 group-hover/node:border-cd-gold" style={{border:'2px solid rgba(201,168,76,0.3)'}}/>
      </div>
    </div>

    {/* Node: top-left — + */}
    <div className="absolute cursor-pointer transition-all duration-300 hover:scale-115 hover:z-30 group/node" style={{top:'22%',left:'24%'}}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center text-cd-white font-black text-xl transition-all duration-300 group-hover/node:border-cd-gold group-hover/node:shadow-[0_0_25px_rgba(201,168,76,0.65)]"
        style={{background:'rgba(27,51,88,0.9)',border:'1.5px solid rgba(201,168,76,0.4)',boxShadow:'0 0 16px rgba(201,168,76,0.2)'}}>
        +
      </div>
    </div>

    {/* Node: top-right — × */}
    <div className="absolute cursor-pointer transition-all duration-300 hover:scale-115 hover:z-30 group/node" style={{top:'28%',right:'18%'}}>
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-cd-gold font-black text-lg transition-all duration-300 group-hover/node:border-cd-gold group-hover/node:shadow-[0_0_20px_rgba(201,168,76,0.6)]"
        style={{background:'rgba(27,51,88,0.9)',border:'1.5px solid rgba(27,51,88,0.4)',boxShadow:'0 0 12px rgba(27,51,88,0.2)'}}>
        ×
      </div>
    </div>

    {/* Node: bottom-right */}
    <div className="absolute cursor-pointer transition-all duration-300 hover:scale-115 hover:z-30 group/node" style={{bottom:'22%',right:'22%'}}>
      <div className="w-11 h-11 rounded-full transition-all duration-300 group-hover/node:shadow-[0_0_25px_rgba(201,168,76,0.7)]"
        style={{background:'linear-gradient(135deg,#1B3358,#C9A84C)',boxShadow:'0 0 20px rgba(201,168,76,0.4)'}}>
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-white opacity-60 transition-opacity duration-300 group-hover/node:opacity-90"/>
        </div>
      </div>
    </div>

    {/* Node: bottom-left */}
    <div className="absolute cursor-pointer transition-all duration-300 hover:scale-115 hover:z-30 group/node" style={{bottom:'26%',left:'22%'}}>
      <div className="w-9 h-9 rounded-full transition-all duration-300 group-hover/node:border-cd-gold group-hover/node:shadow-[0_0_20px_rgba(201,168,76,0.6)]"
        style={{background:'rgba(27,51,88,0.9)',border:'1.5px solid rgba(201,168,76,0.5)',boxShadow:'0 0 14px rgba(201,168,76,0.25)'}}>
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover/node:scale-125" style={{background:'#C9A84C'}}/>
        </div>
      </div>
    </div>

    {/* Badge: Inteligência Ativa */}
    <div className="float-1 absolute -top-2 right-0">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full text-[9px] font-bold text-cd-white"
        style={{background:'rgba(27,51,88,0.95)',border:'1px solid rgba(201,168,76,0.3)',backdropFilter:'blur(8px)',letterSpacing:'0.05em'}}>
        <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{background:'rgba(201,168,76,0.2)'}}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
        Inteligência Ativa
      </div>
    </div>

    {/* Badge: Alta Performance */}
    <div className="float-2 absolute bottom-4 right-0">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full text-[9px] font-bold text-cd-white"
        style={{background:'rgba(27,51,88,0.95)',border:'1px solid rgba(13,27,42,0.3)',backdropFilter:'blur(8px)',letterSpacing:'0.05em'}}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        Alta Performance
      </div>
    </div>
  </div>
);

const Hero = () => {
  const hero = content?.home?.hero;
  
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!hero) return null;

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cd-navy">
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{backgroundImage:'linear-gradient(rgba(201,168,76,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.05) 1px,transparent 1px)',backgroundSize:'52px 52px'}}/>
      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle,rgba(201,168,76,0.08) 0%,transparent 70%)',filter:'blur(40px)'}}/>

      <div className="container-cd relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            {/* Badge */}
            {isMobile ? (
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-[9px] font-black"
                style={{background:'rgba(27,51,88,0.8)',border:'1px solid rgba(201,168,76,0.25)',letterSpacing:'0.22em',color:'#CBD5E1'}}>
                <div className="w-1.5 h-1.5 rounded-full bg-cd-gold" style={{boxShadow:'0 0 6px #C9A84C'}}/>
                ESTRATEGISTAS DE NEGÓCIOS DIGITAIS
              </div>
            ) : (
              <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-[9px] font-black"
                style={{background:'rgba(27,51,88,0.8)',border:'1px solid rgba(201,168,76,0.25)',letterSpacing:'0.22em',color:'#CBD5E1'}}>
                <div className="w-1.5 h-1.5 rounded-full bg-cd-gold" style={{boxShadow:'0 0 6px #C9A84C'}}/>
                ESTRATEGISTAS DE NEGÓCIOS DIGITAIS
              </motion.div>
            )}

            {/* Headline */}
            {isMobile ? (
              <h1 className="font-black text-cd-white mb-7"
                style={{fontSize:'clamp(2.5rem,5vw,4rem)',lineHeight:'1.04',letterSpacing:'-0.025em'}}>
                Transforme sua<br/>Operação em uma<br/>
                <span style={{color:'#C9A84C'}}>Máquina de Vendas</span>{' '}Digital
              </h1>
            ) : (
              <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.15}}
                className="font-black text-cd-white mb-7"
                style={{fontSize:'clamp(2.5rem,5vw,4rem)',lineHeight:'1.04',letterSpacing:'-0.025em'}}>
                Transforme sua<br/>Operação em uma<br/>
                <span style={{color:'#C9A84C'}}>Máquina de Vendas</span>{' '}Digital
              </motion.h1>
            )}

            {/* Sub */}
            {isMobile ? (
              <p className="text-cd-gold-light mb-10 max-w-xl"
                style={{fontSize:'1rem',lineHeight:'1.8',letterSpacing:'0.01em'}}>
                {hero.subheadline}
              </p>
            ) : (
              <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.3}}
                className="text-cd-gold-light mb-10 max-w-xl"
                style={{fontSize:'1rem',lineHeight:'1.8',letterSpacing:'0.01em'}}>
                {hero.subheadline}
              </motion.p>
            )}

            {/* Buttons */}
            {isMobile ? (
              <div className="flex flex-wrap gap-4">
                <Link to="/diagnostico" className="btn-gold group">
                  Fazer Diagnóstico Estratégico
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
                <Link to="/orcamento" className="btn-white-outline">
                  Solicitar Orçamento
                </Link>
              </div>
            ) : (
              <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.45}}
                className="flex flex-wrap gap-4">
                <Link to="/diagnostico" className="btn-gold group">
                  Fazer Diagnóstico Estratégico
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
                <Link to="/orcamento" className="btn-white-outline">
                  Solicitar Orçamento
                </Link>
              </motion.div>
            )}
          </div>

          {/* RIGHT — Network graphic */}
          {isMobile ? (
            <div>
              <NetworkSVG/>
            </div>
          ) : (
            <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.9,delay:0.2}}>
              <NetworkSVG/>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};
export default Hero;
