import React, { useState, useEffect } from 'react';
import { ExternalLink, X, MoreVertical } from 'lucide-react';

const InstagramBrowserNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect if the user is inside Instagram or TikTok in-app browsers
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = ua.indexOf('Instagram') > -1;
    const isTikTok = ua.indexOf('TikTok') > -1;
    
    if (isInstagram || isTikTok) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] animate-in slide-in-from-top duration-700">
      <div className="bg-brand-navy border-b border-brand-gold/30 p-4 shadow-2xl backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
              <ExternalLink size={18} />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-brand-gold mb-1">
                Experiência Premium
              </p>
              <p className="text-xs text-white/80 font-medium leading-tight">
                Para evitar travamentos, clique nos <span className="inline-flex items-center text-white font-bold bg-white/10 px-1 rounded mx-1"><MoreVertical size={12} /></span> e selecione <span className="text-brand-gold font-bold">"Abrir no Navegador"</span>.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 text-white/40 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramBrowserNotice;
