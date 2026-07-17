import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Rocket } from 'lucide-react';
import content from '../data/content.json';

const icons = [Target, Globe, Rocket];
const descs = [
  'Modelagem e precificação premium de produtos e serviços desenhados para atrair clientes de alto padrão e com alta lucratividade.',
  'Posicionamento magnético focado em autoridade indiscutível no Google, redes sociais e ambientes digitais estratégicos.',
  'Desenho de funis de vendas completos com automação e tráfego pago para criar fluxo constante de novos clientes.',
];

const Services = () => {
  const { atuacao } = content.home;
  return (
    <section className="pb-28 bg-cd-navy">
      <div className="container-cd">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {atuacao.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i}
                initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.65,delay:i*0.14}}
                className="corp-card group relative overflow-hidden p-8 cursor-default">

                {/* Subtle hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.25rem]"
                  style={{background:'radial-gradient(circle at 30% 20%,rgba(201,168,76,0.06) 0%,transparent 65%)'}}/>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110"
                  style={{background: 'rgba(201,168,76,0.1)', border:'1px solid rgba(201,168,76,0.2)'}}>
                  <Icon size={22} color="#C9A84C"/>
                </div>

                {/* Title */}
                <h3 className="font-black mb-4"
                  style={{fontSize:'1.25rem',color:'#C9A84C',letterSpacing:'-0.01em',lineHeight:'1.2'}}>
                  {card.title}
                </h3>

                {/* Desc */}
                <p className="text-cd-white/80" style={{fontSize:'0.875rem',lineHeight:'1.8',letterSpacing:'0.01em'}}>
                  {descs[i]}
                </p>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 text-cd-gray/60 group-hover:text-cd-gold transition-colors duration-300 text-lg">
                  ↗
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
