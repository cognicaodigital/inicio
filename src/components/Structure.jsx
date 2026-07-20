import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users } from 'lucide-react';
import content from '../data/content.json';

const Structure = () => {
  const { structure } = content.home;
  return (
    <section className="py-28 relative overflow-hidden bg-cd-navy">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{backgroundImage:'linear-gradient(rgba(201,168,76,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.05) 1px,transparent 1px)',backgroundSize:'48px 48px'}}/>

      <div className="container-cd relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{opacity:0,x:-28}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
            <span className="section-label">Quem Atendemos</span>
            <h2 className="font-black text-cd-white mb-4"
              style={{fontSize:'clamp(1.8rem,3.5vw,2.8rem)',letterSpacing:'-0.02em',lineHeight:'1.1'}}>
              {structure.title}
            </h2>
            <div className="mb-10 rounded-full" style={{width:'48px',height:'3px',background:'linear-gradient(90deg,#C9A84C,#1B3358)'}}/>

            <div className="flex flex-col gap-4">
              {structure.items.map((item, i) => (
                <motion.div key={i}
                  initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                  transition={{delay:i*0.08}}
                  className="flex items-start gap-4 group p-4 rounded-xl transition-all duration-300"
                  style={{background:'#121E36',border:'1px solid rgba(201,168,76,0.18)'}}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{background:'rgba(201,168,76,0.1)',border:'1px solid rgba(201,168,76,0.25)'}}>
                    <CheckCircle2 size={15} color="#C9A84C"/>
                  </div>
                  <p style={{fontSize:'0.9rem',color:'rgba(255,255,255,0.9)',lineHeight:'1.65',letterSpacing:'0.01em'}}>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative group"
              style={{border:'1px solid rgba(201,168,76,0.18)'}}>
              <img loading="lazy" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=70&w=600"
                alt="Empresas" className="w-full h-full object-cover structure-img" />
              <div className="absolute inset-0 z-10" style={{background:'linear-gradient(to top,#0D1B2A 0%,transparent 50%)'}}/>
            </div>
            {/* Badge */}
            <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              className="absolute -bottom-6 right-4 flex items-center gap-4 p-5 rounded-xl bg-cd-navy float-1 structure-badge z-20"
              style={{border:'1px solid rgba(201,168,76,0.25)',boxShadow:'0 10px 30px rgba(0,0,0,0.5)'}}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{background:'rgba(201,168,76,0.1)'}}>
                <Users size={18} color="#C9A84C"/>
              </div>
              <div>
                <div className="font-black" style={{fontSize:'1.75rem',letterSpacing:'-0.03em',
                  background:'linear-gradient(135deg,#1B3358,#C9A84C)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1}}>+50</div>
                <div style={{fontSize:'0.6rem',fontWeight:800,letterSpacing:'0.18em',color:'#CBD5E1',textTransform:'uppercase',marginTop:'3px'}}>Empresas Impactadas</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Structure;
