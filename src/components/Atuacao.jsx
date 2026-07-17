import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const Atuacao = () => {
  const { atuacao } = content.home;
  return (
    <section className="py-24 text-center bg-cd-navy">
      <div className="container-cd">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <h2 className="font-black text-cd-white mb-6"
            style={{fontSize:'clamp(2rem,4vw,3rem)',letterSpacing:'-0.02em'}}>
            {atuacao.title}
          </h2>
          <p className="text-cd-gold-light mx-auto mb-8 italic opacity-90"
            style={{fontSize:'1.05rem',lineHeight:'1.85',maxWidth:'580px',letterSpacing:'0.01em'}}>
            "{atuacao.subtitle}"
          </p>
          {/* Gold underline accent */}
          <div className="mx-auto rounded-full" style={{width:'60px',height:'3px',background:'linear-gradient(90deg,#C9A84C,#1B3358)'}}/>
        </motion.div>
      </div>
    </section>
  );
};
export default Atuacao;
