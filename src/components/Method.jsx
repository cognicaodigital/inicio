import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Compass, Layers, TrendingUp } from 'lucide-react';
import content from '../data/content.json';

const methodIcons = [Dna, Compass, Layers, TrendingUp];
const methodNums = ['01','02','03','04'];

const Method = () => {
  const { method } = content.home;
  return (
    <section className="py-28 bg-cd-navy">
      <div className="container-cd">
        {/* Header */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="text-center mb-16">
          <h2 className="font-black text-cd-white inline-block relative"
            style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',letterSpacing:'-0.02em'}}>
            {method.title}
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
              style={{background:'linear-gradient(90deg,#C9A84C,#1B3358)'}}/>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {method.columns.map((item, i) => {
            const Icon = methodIcons[i];
            return (
              <motion.div key={i}
                initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.6,delay:i*0.12}}
                className="corp-card group relative overflow-hidden p-7">

                {/* Ghost number */}
                <div className="absolute -top-3 -right-2 font-black select-none pointer-events-none"
                  style={{fontSize:'6rem',lineHeight:'1',color:'rgba(201,168,76,0.06)',letterSpacing:'-0.04em',fontFamily:'League Spartan,sans-serif'}}>
                  {methodNums[i]}
                </div>

                {/* Icon circle */}
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5 transition-all duration-400 group-hover:scale-110 relative z-10"
                  style={{background:'rgba(201,168,76,0.1)',border:'1px solid rgba(201,168,76,0.25)'}}>
                  <Icon size={18} color="#C9A84C" strokeWidth={1.8}/>
                </div>

                {/* Tag */}
                <div className="text-[8px] font-black mb-2 relative z-10"
                  style={{letterSpacing:'0.22em',color:'#C9A84C'}}>
                  {item.tag}
                </div>

                {/* Title */}
                <h3 className="font-black text-cd-white mb-3 relative z-10"
                  style={{fontSize:'1rem',letterSpacing:'-0.005em',lineHeight:'1.2'}}>
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-cd-white/85 relative z-10"
                  style={{fontSize:'0.8rem',lineHeight:'1.75',letterSpacing:'0.01em'}}>
                  {item.desc}
                </p>

                {/* Bottom gold line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{background:'linear-gradient(90deg,#C9A84C,#1B3358)'}}/>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Method;
