import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import content from '../data/content.json';

const CTA = () => (
  <section className="py-24 bg-cd-navy">
    <div className="container-cd">
      <motion.div initial={{opacity:0,scale:0.97}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
        className="relative rounded-2xl p-14 lg:p-20 text-center overflow-hidden"
        style={{background:'linear-gradient(135deg,#0D1B2A,#1B3358,#0D1B2A)',border:'1px solid rgba(201,168,76,0.3)'}}>

        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{background:'radial-gradient(ellipse at 50% -10%,rgba(201,168,76,0.08) 0%,transparent 65%)'}}/>
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20" style={{height:'2px',background:'linear-gradient(90deg,#C9A84C,transparent)'}}/>
        <div className="absolute top-0 left-0" style={{width:'2px',height:'80px',background:'linear-gradient(180deg,#C9A84C,transparent)'}}/>
        <div className="absolute bottom-0 right-0 w-20" style={{height:'2px',background:'linear-gradient(270deg,#1B3358,transparent)'}}/>
        <div className="absolute bottom-0 right-0" style={{width:'2px',height:'80px',background:'linear-gradient(0deg,#1B3358,transparent)'}}/>

        <div className="relative z-10">
          <span className="section-label">Próximo Passo</span>
          <h2 className="font-black text-cd-white mb-6"
            style={{fontSize:'clamp(2rem,5vw,3.5rem)',letterSpacing:'-0.025em',lineHeight:'1.05'}}>
            Pronto para o{' '}
            <span style={{color:'#C9A84C'}}>próximo nível?</span>
          </h2>
          <p className="text-cd-white/85 mx-auto mb-12"
            style={{fontSize:'1rem',lineHeight:'1.85',letterSpacing:'0.01em',maxWidth:'500px'}}>
            Agende uma reunião de diagnóstico e descubra como podemos estruturar seu negócio para alta performance digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${content.company.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Falar no WhatsApp <MessageCircle size={16} className="shrink-0"/>
            </a>
            <a href={`mailto:${content.company.contact.email}`} className="btn-white-outline">
              Enviar E-mail <Send size={15} className="shrink-0"/>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
export default CTA;
