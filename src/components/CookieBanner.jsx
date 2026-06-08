import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica no disco do navegador se o usuário já escolheu antes
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Pequeno timer para não abrir bruscamente junto com a tela de load
      const timer = setTimeout(() => setIsVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[450px] bg-brand-navy p-6 rounded-3xl shadow-4xl shadow-black/50 z-[100] border border-white/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
              <Cookie size={20} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-black text-sm mb-2">Respeitamos sua Privacidade</h3>
              <p className="text-white/60 text-xs leading-relaxed mb-6 font-medium">
                Utilizamos cookies de performance para melhorar a arquitetura da sua navegação e estruturar mapas de conversão de maneira anônima. 
                Ao continuar, você concorda com nossa{' '}
                <Link to="/privacidade" className="text-brand-gold hover:underline">Política de Privacidade</Link>.
              </p>
              
              <div className="flex flex-col xl:flex-row gap-3">
                <button 
                  onClick={handleAccept}
                  className="flex-1 px-4 py-3 bg-brand-gold text-brand-navy text-[10px] uppercase tracking-widest font-black rounded-full hover:scale-105 transition-transform text-center shadow-lg shadow-brand-gold/20"
                >
                  Aceitar e Fechar
                </button>
                <button 
                  onClick={handleDecline}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 text-white/50 text-[9px] uppercase tracking-widest font-black rounded-full hover:bg-white/10 hover:text-white transition-colors text-center"
                >
                  Recusar Opcionais
                </button>
              </div>
            </div>

            <button 
              onClick={handleDecline} 
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
              aria-label="Dispensar aviso de privacidade"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
