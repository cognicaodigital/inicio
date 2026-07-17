import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Monitor, Tablet, Phone, ChevronLeft } from 'lucide-react';
import content from '../data/content.json';

const CasePreview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const url = searchParams.get('url') || 'https://quantagramasintetica.com/';
  const title = searchParams.get('title') || 'Visualização do Modelo';
  const category = searchParams.get('category') || '';

  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const iframeUrl = isDev 
    ? `/api/proxy?url=${encodeURIComponent(url)}` 
    : url;

  // State do Simulador: 'desktop', 'tablet', 'mobile'
  const [device, setDevice] = useState('desktop');

  // Redireciona se não houver dados salvos (segurança simples)
  useEffect(() => {
    const isUnlocked = localStorage.getItem('cd_portfolio_lead');
    if (!isUnlocked) {
      navigate('/cases');
    }
  }, [navigate]);

  // Mensagem customizada para o WhatsApp
  const whatsappNumber = content.company.contact.whatsapp;
  const textMsg = encodeURIComponent(`Olá! Gostei muito do modelo "${title}" que vi no portfólio de vocês e gostaria de solicitar um orçamento estratégico.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${textMsg}`;

  // Direcionamento do botão voltar
  const handleBack = () => {
    if (category) {
      navigate(`/cases/templates?category=${category}`);
    } else {
      navigate('/cases/templates');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] h-screen w-screen flex flex-col bg-[#070E1A] overflow-hidden">
      
      {/* Top Bar do Visualizador */}
      <header className="h-16 bg-[#0D1B2A] border-b border-cd-blue/30 flex items-center justify-between px-4 sm:px-6 relative z-10 shrink-0 select-none">
        
        {/* Lado Esquerdo: Voltar */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-xs font-bold text-cd-white/70 hover:text-cd-white transition-colors"
          >
            <ChevronLeft size={16} />
            Voltar ao Portfólio
          </button>
          
          <div className="hidden md:flex h-4 w-[1px] bg-cd-blue/30" />
          
          <h2 className="hidden md:block text-[11px] font-black tracking-widest text-cd-gold uppercase">
            Modelo: {title}
          </h2>
        </div>

        {/* Centro: Seletor de Dispositivos */}
        <div className="flex items-center bg-[#121E36] border border-cd-blue/20 rounded-full p-1 gap-1">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-2 rounded-full transition-all duration-300 ${
              device === 'desktop' ? 'bg-cd-gold text-cd-navy shadow-sm' : 'text-cd-white/50 hover:text-cd-white'
            }`}
            title="Visualização Desktop"
          >
            <Monitor size={16} />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-2 rounded-full transition-all duration-300 ${
              device === 'tablet' ? 'bg-cd-gold text-cd-navy shadow-sm' : 'text-cd-white/50 hover:text-cd-white'
            }`}
            title="Visualização Tablet"
          >
            <Tablet size={16} />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-2 rounded-full transition-all duration-300 ${
              device === 'mobile' ? 'bg-cd-gold text-cd-navy shadow-sm' : 'text-cd-white/50 hover:text-cd-white'
            }`}
            title="Visualização Mobile"
          >
            <Phone size={16} />
          </button>
        </div>

        {/* Lado Direito: WhatsApp Call-to-Action */}
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-2.5 !px-5 !text-[9px]"
          >
            Quero um site assim
          </a>
        </div>
      </header>

      {/* Workspace do Iframe */}
      <div className="flex-grow w-full flex items-center justify-center p-4 relative z-0 bg-[#070E1A] overflow-hidden">
        
        {/* Container Simulado */}
        <div
          className="transition-all duration-500 ease-in-out shadow-2xl relative bg-[#0D1B2A] overflow-hidden"
          style={{
            width: device === 'desktop' ? '100%' : device === 'tablet' ? '768px' : '375px',
            height: device === 'desktop' ? '100%' : device === 'tablet' ? '90%' : '90%',
            maxHeight: '100%',
            borderRadius: device === 'desktop' ? '0px' : '20px',
            border: device === 'desktop' ? 'none' : '10px solid #121E36',
            boxShadow: device === 'desktop' ? 'none' : '0 25px 60px -15px rgba(0,0,0,0.8)'
          }}
        >
          {/* Iframe */}
          <iframe
            src={iframeUrl}
            title={title}
            className="w-full h-full border-none bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CasePreview;
