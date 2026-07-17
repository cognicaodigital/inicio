import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const InstagramBrowserNotice = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = ua.indexOf('Instagram') > -1 || ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
    if (isInstagram) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="bg-brand-electric/15 border-b border-brand-electric/30 py-3 px-4 text-center relative z-[100] flex justify-center items-center gap-3">
      <AlertTriangle className="text-brand-electric shrink-0" size={16} />
      <div className="text-[10px] sm:text-xs font-bold text-white tracking-wide">
        Para uma experiência completa (envio de briefings e orçamentos), abra este link no seu navegador padrão (Safari, Chrome).
      </div>
      <button onClick={() => setShow(false)} className="text-white/70 hover:text-white p-1">
        <X size={14} />
      </button>
    </div>
  );
};

export default InstagramBrowserNotice;