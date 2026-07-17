import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-brand-navy-card/90 backdrop-blur-xl border border-white/[0.08] p-6 rounded-3xl shadow-2xl z-50 flex flex-col gap-4">
      <div className="text-sm font-bold text-white tracking-wide">🍪 Controle de Cookies</div>
      <p className="text-xs text-slate-400 leading-relaxed font-medium">
        Utilizamos cookies para melhorar sua experiência de navegação e analisar nosso tráfego. Ao clicar em "Aceitar", você concorda com o uso de cookies.
      </p>
      <div className="flex gap-3 justify-end">
        <button 
          onClick={accept} 
          className="btn-primary !px-6 !py-3 !text-[9px] font-black tracking-widest shadow-md"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;