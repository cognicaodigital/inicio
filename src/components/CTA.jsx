import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import content from '../data/content.json';

const CTA = () => {
  return (
    <section className="py-32 section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-brand-navy rounded-[4rem] p-16 lg:p-24 text-center relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-brand-gold/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl text-white mb-10 tracking-tighter leading-none font-black">
            Pronto para o <span className="text-brand-gold">próximo nível?</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Agende uma reunião de diagnóstico e descubra como podemos estruturar seu negócio para alta performance digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`https://wa.me/${content.company.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow !px-12 !py-6 w-full sm:w-auto"
            >
              Falar no WhatsApp <MessageCircle className="ml-3 shrink-0" size={18} />
            </a>
            <a 
              href={`mailto:${content.company.contact.email}`}
              className="inline-flex items-center justify-center px-12 py-6 border-2 border-white/10 text-white font-black text-xs tracking-[0.2em] rounded-full hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Enviar E-mail <Send className="ml-3 shrink-0" size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
