import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

const InterestModal = ({ isOpen, onClose, courseTitle }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [consent, setConsent] = useState(false);
  const [erro, setErro] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Máscara de WhatsApp idêntica à do diagnóstico
  const maskWhatsApp = (value) => {
    let v = value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    
    if (v.length > 10) {
      return `(${v.slice(0, 2)}) ${v.slice(2, 3)}.${v.slice(3, 7)}-${v.slice(7)}`;
    } else if (v.length > 6) {
      return `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
    } else if (v.length > 2) {
      return `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      return `(${v}`;
    }
    return v;
  };

  const handlePhoneChange = (e) => {
    setWhatsapp(maskWhatsApp(e.target.value));
  };

  // Fecha o modal ao pressionar a tecla Esc
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      if (modalRef.current) {
        modalRef.current.focus();
      }
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (!nome.trim() || !email.trim() || !whatsapp.trim()) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }

    const cleanPhone = whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErro('Por favor, insira um número de WhatsApp completo.');
      return;
    }

    if (!consent) {
      setErro('Você precisa aceitar os termos de consentimento.');
      return;
    }

    const leadData = {
      nome: nome.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      curso: courseTitle || 'Interesse Geral na Academia',
      data: new Date().toISOString()
    };

    try {
      const existing = localStorage.getItem('cd_academia_interesses');
      const list = existing ? JSON.parse(existing) : [];
      list.push(leadData);
      localStorage.setItem('cd_academia_interesses', JSON.stringify(list));
      setSubmitted(true);
    } catch (e) {
      setErro('Erro ao salvar seus dados localmente.');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-cd-navy/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        tabIndex="-1"
        className="w-full max-w-lg bg-[#121E36] border border-cd-blue/30 rounded-[2.5rem] p-6 sm:p-10 relative overflow-hidden shadow-2xl focus:outline-none"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cd-gold/10 blur-3xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-cd-white/60 hover:text-cd-white hover:bg-cd-navy/40 transition-all focus:ring-2 focus:ring-cd-gold focus:outline-none"
          aria-label="Fechar modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <div className="w-10 h-10 bg-cd-gold/10 rounded-xl flex items-center justify-center text-cd-gold mx-auto mb-3">
                <Sparkles size={20} />
              </div>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-cd-white tracking-tight mb-2">
                Quero ser avisado
              </h3>
              <p className="text-xs text-cd-gold-light opacity-90 leading-relaxed max-w-sm mx-auto">
                Você receberá uma notificação em primeira mão quando o conteúdo <strong className="text-cd-gold">"{courseTitle || 'Interesse Geral'}"</strong> for lançado.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {erro && (
                <div className="p-3 text-[11px] font-bold text-red-400 bg-red-950/40 border border-red-500/20 rounded-xl text-center">
                  {erro}
                </div>
              )}

              <div>
                <label htmlFor="modal-name" className="block text-[9px] font-black uppercase tracking-widest text-cd-gold-light mb-1.5">
                  Nome Completo
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full bg-cd-navy/60 border border-cd-blue/20 focus:border-cd-gold/50 rounded-xl px-4 py-3 text-xs text-cd-white placeholder-cd-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-[9px] font-black uppercase tracking-widest text-cd-gold-light mb-1.5">
                  E-mail Profissional
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@empresa.com"
                  className="w-full bg-cd-navy/60 border border-cd-blue/20 focus:border-cd-gold/50 rounded-xl px-4 py-3 text-xs text-cd-white placeholder-cd-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-[9px] font-black uppercase tracking-widest text-cd-gold-light mb-1.5">
                  WhatsApp (com DDD)
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={handlePhoneChange}
                  placeholder="(00) 90000-0000"
                  className="w-full bg-cd-navy/60 border border-cd-blue/20 focus:border-cd-gold/50 rounded-xl px-4 py-3 text-xs text-cd-white placeholder-cd-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  id="modal-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-cd-blue/30 text-cd-gold bg-cd-navy focus:ring-cd-gold"
                />
                <label htmlFor="modal-consent" className="text-[10px] text-cd-white/70 leading-relaxed cursor-pointer select-none">
                  Concordo em receber informações, conteúdos e comunicações da <span className="text-cd-gold font-bold">Cognição Digital</span>.
                </label>
              </div>

              <button
                type="submit"
                className="btn-gold w-full justify-center !py-3.5 !text-[10px] font-black uppercase tracking-widest mt-4"
              >
                Entrar na lista de interesse
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-cd-white tracking-tight mb-2">
              Inscrição Confirmada!
            </h3>
            <p className="text-xs text-cd-white/70 leading-relaxed max-w-sm mx-auto mb-8">
              Obrigado, <strong className="text-cd-white">{nome}</strong>! Seus dados foram salvos com sucesso e nós te avisaremos assim que o conteúdo estiver disponível.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setNome('');
                setEmail('');
                setWhatsapp('');
                setConsent(false);
                onClose();
              }}
              className="btn-gold !py-3 !px-8 !text-[10px] uppercase tracking-wider"
            >
              Concluído
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestModal;
