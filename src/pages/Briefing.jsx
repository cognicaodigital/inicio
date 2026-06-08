import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Trash2, Plus, Download, Copy, Printer, Send, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DEVELOPER_WHATSAPP = "5599999999999";

const nichesConfig = {
  moveis: {
    nome: "Loja de Móveis",
    categorias: [
      "Sofás", "Racks", "Painéis para TV", "Mesas", "Cadeiras", "Guarda-roupas", 
      "Camas", "Colchões", "Cabeceiras", "Cozinhas", "Armários", "Móveis planejados", 
      "Móveis para escritório", "Poltronas", "Aparadores", "Cristaleiras", 
      "Decoração", "Promoções", "Outros"
    ]
  },
  outro: {
    nome: "Outro nicho",
    categorias: []
  }
};

const INITIAL_STATE = {
  nicho: "",
  cliente: { nome: "", empresa: "", whatsapp: "", email: "" },
  empresa: { nomeOficial: "", nomeSite: "", slogan: "", tempoMercado: "", cidade: "", regiao: "", endereco: "", horario: "", descricao: "" },
  contatos: { whatsapp: "", telefone: "", email: "", instagram: "", facebook: "", tiktok: "", youtube: "", maps: "", vendedores: [] },
  objetivo: { principal: "", extras: [] },
  identidade: { temLogo: "", linkLogo: "", cores: "", estilo: "", fotosFachada: "", fotosInternas: "", fotosEquipe: "", fotosShowroom: "", observacoes: "" },
  produtos: { categorias: [], exibirPrecos: "", destacarPromocoes: "", exibirPorCategoria: "", botaoWhatsappProduto: "", galeria: [] },
  diferenciais: { lista: [], outros: "" },
  pagamento: { formas: [], parcelamento: "", condicoesEspeciais: "" },
  entrega: { fazEntrega: "", regioes: "", entregaGratis: "", fazMontagem: "", custoMontagem: "", prazo: "", observacoes: "" },
  provasSociais: { temGoogle: "", linkGoogle: "", temDepoimentos: "", usarFotos: "", listaDepoimentos: [] },
  estrutura: { secoes: [], referencias: "", observacoesFinais: "" }
};

const Briefing = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('briefing_data');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Erro ao carregar do LocalStorage", e);
    }
    return INITIAL_STATE;
  });

  useEffect(() => {
    try {
      localStorage.setItem('briefing_data', JSON.stringify(data));
    } catch (e) {
      console.error("Erro ao salvar no LocalStorage", e);
    }
  }, [data]);

  const updateData = (section, field, value) => {
    setData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNext = () => setStep(s => Math.min(s + 1, 12));
  const handlePrev = () => setStep(s => Math.max(s - 1, 0));

  const clearForm = () => {
    if(window.confirm("Tem certeza que deseja limpar todo o formulário? Essa ação não pode ser desfeita.")) {
      setData(INITIAL_STATE);
      setStep(0);
      localStorage.removeItem('briefing_data');
    }
  };

  const skipProductsSteps = data.nicho === 'outro' && (step === 5 || step === 6);
  useEffect(() => {
    if (data.nicho === 'outro') {
        if (step === 5) setStep(7);
    }
  }, [step, data.nicho]);

  const toggleArrayItem = (section, field, item) => {
    setData(prev => {
      const arr = prev[section][field] || [];
      const newArr = arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];
      return { ...prev, [section]: { ...prev[section], [field]: newArr } };
    });
  };

  const addVendedor = () => {
    setData(prev => ({
      ...prev,
      contatos: {
        ...prev.contatos,
        vendedores: [...prev.contatos.vendedores, { id: Date.now(), nome: "", cargo: "", whatsapp: "" }]
      }
    }));
  };

  const updateVendedor = (id, field, value) => {
    setData(prev => ({
      ...prev,
      contatos: {
        ...prev.contatos,
        vendedores: prev.contatos.vendedores.map(v => v.id === id ? { ...v, [field]: value } : v)
      }
    }));
  };

  const removeVendedor = (id) => {
    setData(prev => ({
      ...prev,
      contatos: {
        ...prev.contatos,
        vendedores: prev.contatos.vendedores.filter(v => v.id !== id)
      }
    }));
  };

  const addProduto = () => {
    setData(prev => ({
      ...prev,
      produtos: {
        ...prev.produtos,
        galeria: [...prev.produtos.galeria, { id: Date.now(), nome: "", categoria: "", link: "", descricao: "", preco: "", promocao: "Não", prontaEntrega: "Sim", obs: "" }]
      }
    }));
  };

  const updateProduto = (id, field, value) => {
    setData(prev => ({
      ...prev,
      produtos: {
        ...prev.produtos,
        galeria: prev.produtos.galeria.map(p => p.id === id ? { ...p, [field]: value } : p)
      }
    }));
  };

  const removeProduto = (id) => {
    setData(prev => ({
      ...prev,
      produtos: {
        ...prev.produtos,
        galeria: prev.produtos.galeria.filter(p => p.id !== id)
      }
    }));
  };

  const addDepoimento = () => {
    setData(prev => ({
      ...prev,
      provasSociais: {
        ...prev.provasSociais,
        listaDepoimentos: [...prev.provasSociais.listaDepoimentos, { id: Date.now(), nome: "", depoimento: "", cidade: "" }]
      }
    }));
  };

  const updateDepoimento = (id, field, value) => {
    setData(prev => ({
      ...prev,
      provasSociais: {
        ...prev.provasSociais,
        listaDepoimentos: prev.provasSociais.listaDepoimentos.map(d => d.id === id ? { ...d, [field]: value } : d)
      }
    }));
  };

  const removeDepoimento = (id) => {
    setData(prev => ({
      ...prev,
      provasSociais: {
        ...prev.provasSociais,
        listaDepoimentos: prev.provasSociais.listaDepoimentos.filter(d => d.id !== id)
      }
    }));
  };

  const generateReportText = () => {
    let report = `BRIEFING DO PROJETO - ${data.cliente.empresa}\n\n`;
    report += `=== DADOS DO CLIENTE ===\nNome: ${data.cliente.nome}\nNicho: ${data.nicho === 'moveis' ? 'Loja de Móveis' : 'Outro'}\nWhatsApp: ${data.cliente.whatsapp}\nE-mail: ${data.cliente.email}\n\n`;
    report += `=== ETAPA 1: EMPRESA ===\nNome Oficial: ${data.empresa.nomeOficial}\nNome Site: ${data.empresa.nomeSite}\nSlogan: ${data.empresa.slogan}\nTempo de Mercado: ${data.empresa.tempoMercado}\nCidade/Estado: ${data.empresa.cidade}\nRegião: ${data.empresa.regiao}\nEndereço: ${data.empresa.endereco}\nHorário: ${data.empresa.horario}\nDescrição: ${data.empresa.descricao}\n\n`;
    // Add rest of the fields logically...
    report += `=== ETAPA 2: CONTATOS ===\nWhatsApp Principal: ${data.contatos.whatsapp}\nInstagram: ${data.contatos.instagram}\nFacebook: ${data.contatos.facebook}\nMaps: ${data.contatos.maps}\n`;
    report += `=== OBJETIVOS ===\nPrincipal: ${data.objetivo.principal}\nExtras: ${data.objetivo.extras.join(', ')}\n\n`;
    
    return report;
  };

  const copyBriefing = () => {
    navigator.clipboard.writeText(generateReportText());
    alert("Briefing copiado para a área de transferência!");
  };

  const downloadJson = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `briefing_${data.cliente.empresa.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadTxt = () => {
    const text = generateReportText();
    const blob = new Blob([text], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `briefing_${data.cliente.empresa.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sendWhatsapp = () => {
    const text = `Olá, preenchi o briefing online para o projeto da empresa *${data.cliente.empresa}*. O nicho é ${data.nicho}. Estou enviando o arquivo ou os dados resumidos.`;
    window.open(`https://wa.me/${DEVELOPER_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const renderButtons = () => (
    <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100">
      <button onClick={handlePrev} className="px-6 py-3 rounded-full font-bold text-slate-500 hover:text-brand-navy hover:bg-slate-100 transition-colors flex items-center gap-2">
        <ChevronLeft size={20} /> Voltar
      </button>
      <button onClick={handleNext} className="bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors flex items-center gap-2 shadow-lg shadow-brand-navy/20">
        Próximo <ChevronRight size={20} />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans print:pt-0 print:bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header / Barra de Progresso */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8 print:hidden">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-black text-brand-navy">Briefing Inteligente para Criação de Sites</h1>
            {step > 0 && step < 12 && (
               <button onClick={clearForm} className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 font-bold">
                 <Trash2 size={16} /> Limpar Tudo
               </button>
            )}
          </div>
          <p className="text-slate-500 mb-6 font-medium">Preencha as informações do seu projeto para que possamos criar um site mais estratégico, bonito e alinhado com o seu negócio.</p>
          
          {step > 0 && step < 12 && (
            <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
              <div 
                className="bg-brand-gold h-2 rounded-full transition-all duration-500" 
                style={{ width: `${(step / 12) * 100}%` }}
              ></div>
            </div>
          )}
          {step > 0 && step < 12 && (
              <p className="text-xs text-right text-slate-400 font-bold uppercase tracking-wider">Etapa {step} de 11</p>
          )}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10 relative overflow-hidden print:shadow-none print:border-none print:p-0">
           <AnimatePresence mode="wait">
             <motion.div
               key={step}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="print:block"
             >
               {/* Step 0: Introdução */}
               {step === 0 && (
                 <div className="space-y-8">
                    <div className="bg-brand-navy/5 text-brand-navy p-5 rounded-2xl border border-brand-navy/10 mb-8">
                      <p className="font-bold">Este formulário foi criado para coletar as informações essenciais do seu projeto. Com ele, conseguimos entender melhor sua empresa, seus objetivos, seus produtos, seu público e a estrutura ideal para o seu novo site.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Seu Nome *</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-medium" value={data.cliente.nome} onChange={e => updateData('cliente', 'nome', e.target.value)} placeholder="Como gostaria de ser chamado" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Nome da Empresa *</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-medium" value={data.cliente.empresa} onChange={e => updateData('cliente', 'empresa', e.target.value)} placeholder="Nome do negócio" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Seu WhatsApp *</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-medium" value={data.cliente.whatsapp} onChange={e => updateData('cliente', 'whatsapp', e.target.value)} placeholder="(DD) 99999-9999" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Seu E-mail</label>
                        <input type="email" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-medium" value={data.cliente.email} onChange={e => updateData('cliente', 'email', e.target.value)} placeholder="contato@email.com" />
                      </div>
                    </div>

                    <div className="pt-4">
                        <label className="block text-sm font-bold text-slate-700 mb-4">Selecione o Nicho do Projeto *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <button onClick={() => setData({...data, nicho: 'moveis'})} className={`p-6 rounded-2xl border-2 text-left transition-all ${data.nicho === 'moveis' ? 'border-brand-gold bg-brand-gold/5 ring-4 ring-brand-gold/10' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}>
                              <div className="flex items-center justify-between">
                                <div className="font-black text-lg text-brand-navy">Loja de Móveis</div>
                                {data.nicho === 'moveis' && <Check className="text-brand-gold" size={24} />}
                              </div>
                              <div className="text-sm text-slate-500 mt-2 font-medium">Lojas físicas, showrooms e fábricas.</div>
                           </button>
                           <button onClick={() => setData({...data, nicho: 'outro'})} className={`p-6 rounded-2xl border-2 text-left transition-all ${data.nicho === 'outro' ? 'border-brand-gold bg-brand-gold/5 ring-4 ring-brand-gold/10' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}>
                              <div className="flex items-center justify-between">
                                <div className="font-black text-lg text-brand-navy">Outro Nicho</div>
                                {data.nicho === 'outro' && <Check className="text-brand-gold" size={24} />}
                              </div>
                              <div className="text-sm text-slate-500 mt-2 font-medium">Serviços, clínicas, imobiliárias, etc.</div>
                           </button>
                        </div>
                    </div>

                    <div className="flex justify-end pt-8 border-t border-slate-100">
                      <button onClick={handleNext} disabled={!data.nicho || !data.cliente.nome || !data.cliente.empresa || !data.cliente.whatsapp} className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-gold hover:text-brand-navy transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center gap-2 shadow-xl shadow-brand-navy/20">
                        Começar Briefing <ChevronRight size={20} />
                      </button>
                    </div>
                 </div>
               )}

               {/* Step 1: Dados da Empresa */}
               {step === 1 && (
                 <div className="space-y-6">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 1 — Dados da Empresa</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Nome Oficial (Razão Social)</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.empresa.nomeOficial} onChange={e => updateData('empresa', 'nomeOficial', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Nome Fantasia (Para o site)</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.empresa.nomeSite} onChange={e => updateData('empresa', 'nomeSite', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Slogan (Se tiver)</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.empresa.slogan} onChange={e => updateData('empresa', 'slogan', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Tempo de Mercado</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.empresa.tempoMercado} onChange={e => updateData('empresa', 'tempoMercado', e.target.value)} placeholder="Ex: 10 anos" /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Cidade e Estado</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.empresa.cidade} onChange={e => updateData('empresa', 'cidade', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Região de Atendimento</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.empresa.regiao} onChange={e => updateData('empresa', 'regiao', e.target.value)} placeholder="Ex: Todo o Brasil, Apenas SP" /></div>
                      <div className="md:col-span-2"><label className="block text-sm font-bold text-slate-700 mb-2">Endereço Completo</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.empresa.endereco} onChange={e => updateData('empresa', 'endereco', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Horário de Funcionamento</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.empresa.horario} onChange={e => updateData('empresa', 'horario', e.target.value)} placeholder="Ex: Seg a Sex das 09h às 18h" /></div>
                      <div className="md:col-span-2"><label className="block text-sm font-bold text-slate-700 mb-2">Breve Descrição da Empresa</label><textarea className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all h-32 resize-none" value={data.empresa.descricao} onChange={e => updateData('empresa', 'descricao', e.target.value)} placeholder="Conte um pouco sobre o que a empresa faz e sua história..."></textarea></div>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 2: Contatos */}
               {step === 2 && (
                 <div className="space-y-6">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 2 — Contatos e Redes Sociais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Principal (Loja)</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.contatos.whatsapp} onChange={e => updateData('contatos', 'whatsapp', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Telefone Fixo</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.contatos.telefone} onChange={e => updateData('contatos', 'telefone', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">E-mail Comercial</label><input type="email" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.contatos.email} onChange={e => updateData('contatos', 'email', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Instagram (@)</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.contatos.instagram} onChange={e => updateData('contatos', 'instagram', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Facebook</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.contatos.facebook} onChange={e => updateData('contatos', 'facebook', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">TikTok (@)</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.contatos.tiktok} onChange={e => updateData('contatos', 'tiktok', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">YouTube</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.contatos.youtube} onChange={e => updateData('contatos', 'youtube', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Link do Google Maps</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all" value={data.contatos.maps} onChange={e => updateData('contatos', 'maps', e.target.value)} /></div>
                    </div>

                    <div className="mt-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h3 className="text-lg font-bold text-brand-navy">Vendedores / Consultores</h3>
                          <p className="text-sm text-slate-500 font-medium">Adicione botões específicos para sua equipe no site.</p>
                        </div>
                        <button onClick={addVendedor} className="bg-brand-navy text-brand-gold px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-opacity-90 transition-all">
                          <Plus size={16} /> Adicionar
                        </button>
                      </div>
                      <div className="space-y-4">
                        {data.contatos.vendedores.length === 0 && <p className="text-sm text-slate-400 italic">Nenhum vendedor adicionado.</p>}
                        {data.contatos.vendedores.map((v, index) => (
                          <div key={v.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 items-center">
                            <div className="sm:col-span-4"><input type="text" placeholder="Nome" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all font-medium text-sm" value={v.nome} onChange={e => updateVendedor(v.id, 'nome', e.target.value)} /></div>
                            <div className="sm:col-span-3"><input type="text" placeholder="Cargo/Setor" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all font-medium text-sm" value={v.cargo} onChange={e => updateVendedor(v.id, 'cargo', e.target.value)} /></div>
                            <div className="sm:col-span-4"><input type="text" placeholder="WhatsApp" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all font-medium text-sm" value={v.whatsapp} onChange={e => updateVendedor(v.id, 'whatsapp', e.target.value)} /></div>
                            <div className="sm:col-span-1 flex justify-end">
                              <button onClick={() => removeVendedor(v.id)} className="text-red-400 hover:text-red-600 p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"><Trash2 size={20} /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 3: Objetivo */}
               {step === 3 && (
                 <div className="space-y-8">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 3 — Objetivo do Site</h2>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-4">Qual é o objetivo PRINCIPAL deste site? *</label>
                      <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none transition-all text-lg font-medium" value={data.objetivo.principal} onChange={e => updateData('objetivo', 'principal', e.target.value)} placeholder="Ex: Vender móveis, Gerar orçamentos, Apresentar a loja..." />
                    </div>

                    <div className="pt-4">
                      <label className="block text-sm font-bold text-slate-700 mb-4">Selecione também os objetivos secundários (Múltipla escolha):</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Gerar contatos pelo WhatsApp",
                          "Apresentar a loja física",
                          "Mostrar catálogo de produtos",
                          "Divulgar promoções",
                          "Fortalecer a marca",
                          "Atrair clientes pelo Google",
                          "Receber pedidos de orçamento",
                          "Preparar estrutura para venda online no futuro"
                        ].map(obj => (
                          <label key={obj} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${data.objetivo.extras.includes(obj) ? 'border-brand-gold bg-brand-gold/5 text-brand-navy font-bold' : 'border-slate-100 hover:bg-slate-50 text-slate-600 font-medium'}`}>
                            <input type="checkbox" checked={data.objetivo.extras.includes(obj)} onChange={() => toggleArrayItem('objetivo', 'extras', obj)} className="w-5 h-5 accent-brand-gold" />
                            {obj}
                          </label>
                        ))}
                      </div>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 4: Identidade Visual */}
               {step === 4 && (
                 <div className="space-y-6">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 4 — Identidade Visual</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">A empresa já possui logomarca?</label>
                        <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium appearance-none" value={data.identidade.temLogo} onChange={e => updateData('identidade', 'temLogo', e.target.value)}>
                          <option value="">Selecione...</option>
                          <option value="Sim">Sim, temos a logo</option>
                          <option value="Não">Não, precisamos criar</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Link da logo (Se estiver online)</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.identidade.linkLogo} onChange={e => updateData('identidade', 'linkLogo', e.target.value)} placeholder="Link do Google Drive, Canva, etc" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Cores Principais da Marca</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.identidade.cores} onChange={e => updateData('identidade', 'cores', e.target.value)} placeholder="Ex: Azul marinho e Dourado" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Estilo Visual Desejado</label>
                        <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium appearance-none" value={data.identidade.estilo} onChange={e => updateData('identidade', 'estilo', e.target.value)}>
                          <option value="">Selecione um estilo principal...</option>
                          {["Moderno", "Sofisticado", "Popular e comercial", "Elegante", "Minimalista", "Familiar", "Acolhedor", "Luxuoso", "Promocional"].map(estilo => (
                            <option key={estilo} value={estilo}>{estilo}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="md:col-span-2 pt-4 border-t border-slate-100">
                        <label className="block text-sm font-bold text-slate-700 mb-4">Fotos e Imagens Disponíveis:</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           {[{id: 'fotosFachada', label: 'Fachada da Loja'}, {id: 'fotosInternas', label: 'Parte Interna'}, {id: 'fotosEquipe', label: 'Equipe/Vendedores'}, {id: 'fotosShowroom', label: 'Showroom'}].map(foto => (
                             <div key={foto.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                               <p className="text-sm font-bold text-brand-navy mb-3 h-10">{foto.label}</p>
                               <div className="flex gap-2">
                                 <button onClick={() => updateData('identidade', foto.id, 'Sim')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${data.identidade[foto.id] === 'Sim' ? 'bg-brand-navy text-white' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100'}`}>Sim</button>
                                 <button onClick={() => updateData('identidade', foto.id, 'Não')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${data.identidade[foto.id] === 'Não' ? 'bg-slate-300 text-slate-800' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100'}`}>Não</button>
                               </div>
                             </div>
                           ))}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Observações sobre a Identidade Visual</label>
                        <textarea className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none h-24 resize-none font-medium" value={data.identidade.observacoes} onChange={e => updateData('identidade', 'observacoes', e.target.value)} placeholder="Alguma exigência específica para o design?"></textarea>
                      </div>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 5: Produtos/Categorias (Móveis) */}
               {step === 5 && (
                 <div className="space-y-8">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 5 — Produtos e Categorias</h2>
                    
                    <div className="bg-brand-gold/10 text-brand-navy p-5 rounded-2xl border border-brand-gold/20">
                      <p className="font-bold">Quais categorias de móveis devem aparecer em destaque no site?</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {nichesConfig.moveis.categorias.map(cat => (
                        <label key={cat} className={`flex items-center gap-2 p-3 rounded-xl border transition-all cursor-pointer ${data.produtos.categorias.includes(cat) ? 'border-brand-gold bg-brand-gold text-brand-navy font-bold' : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-sm font-medium'}`}>
                          <input type="checkbox" checked={data.produtos.categorias.includes(cat)} onChange={() => toggleArrayItem('produtos', 'categorias', cat)} className="w-4 h-4 hidden" />
                          <div className={`w-4 h-4 rounded flex items-center justify-center ${data.produtos.categorias.includes(cat) ? 'bg-brand-navy text-white' : 'border border-slate-300'}`}>
                            {data.produtos.categorias.includes(cat) && <Check size={12} strokeWidth={4} />}
                          </div>
                          {cat}
                        </label>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Deseja mostrar preços dos produtos?</label>
                        <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium appearance-none" value={data.produtos.exibirPrecos} onChange={e => updateData('produtos', 'exibirPrecos', e.target.value)}>
                          <option value="">Selecione...</option>
                          <option value="Sim, em todos">Sim, em todos os produtos</option>
                          <option value="Sim, em alguns">Sim, apenas em alguns (Ex: Promoções)</option>
                          <option value="Não, apenas botão WhatsApp">Não, apenas botão de consultar no WhatsApp</option>
                        </select>
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-3">Deseja exibir produtos por categoria?</label>
                         <div className="flex gap-4">
                           <label className="flex items-center gap-2 font-medium"><input type="radio" name="porCategoria" value="Sim" checked={data.produtos.exibirPorCategoria === 'Sim'} onChange={e => updateData('produtos', 'exibirPorCategoria', e.target.value)} className="w-5 h-5 accent-brand-gold" /> Sim</label>
                           <label className="flex items-center gap-2 font-medium"><input type="radio" name="porCategoria" value="Não" checked={data.produtos.exibirPorCategoria === 'Não'} onChange={e => updateData('produtos', 'exibirPorCategoria', e.target.value)} className="w-5 h-5 accent-brand-gold" /> Não, exibir tudo junto</label>
                         </div>
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-3">Deseja destacar produtos em promoção?</label>
                         <div className="flex gap-4">
                           <label className="flex items-center gap-2 font-medium"><input type="radio" name="destaquePromo" value="Sim" checked={data.produtos.destacarPromocoes === 'Sim'} onChange={e => updateData('produtos', 'destacarPromocoes', e.target.value)} className="w-5 h-5 accent-brand-gold" /> Sim</label>
                           <label className="flex items-center gap-2 font-medium"><input type="radio" name="destaquePromo" value="Não" checked={data.produtos.destacarPromocoes === 'Não'} onChange={e => updateData('produtos', 'destacarPromocoes', e.target.value)} className="w-5 h-5 accent-brand-gold" /> Não</label>
                         </div>
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-3">Ter botão "Comprar/Orçar" em cada produto?</label>
                         <div className="flex gap-4">
                           <label className="flex items-center gap-2 font-medium"><input type="radio" name="botaoProduto" value="Sim" checked={data.produtos.botaoWhatsappProduto === 'Sim'} onChange={e => updateData('produtos', 'botaoWhatsappProduto', e.target.value)} className="w-5 h-5 accent-brand-gold" /> Sim</label>
                           <label className="flex items-center gap-2 font-medium"><input type="radio" name="botaoProduto" value="Não" checked={data.produtos.botaoWhatsappProduto === 'Não'} onChange={e => updateData('produtos', 'botaoWhatsappProduto', e.target.value)} className="w-5 h-5 accent-brand-gold" /> Não</label>
                         </div>
                      </div>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 6: Galeria de Produtos */}
               {step === 6 && (
                 <div className="space-y-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-black text-brand-navy">Etapa 6 — Catálogo / Galeria (Opcional)</h2>
                      <button onClick={addProduto} className="bg-brand-navy text-brand-gold px-5 py-3 rounded-xl font-bold hover:bg-brand-gold hover:text-brand-navy transition-all flex items-center gap-2">
                        <Plus size={20} /> Add Produto
                      </button>
                    </div>

                    <p className="text-slate-500 font-medium mb-8">Adicione aqui alguns produtos chave que você deseja exibir no site. Isso nos ajuda a entender o padrão de imagens que você possui.</p>

                    <div className="space-y-6">
                      {data.produtos.galeria.length === 0 && (
                        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center text-slate-400 font-bold">
                          Nenhum produto cadastrado para o catálogo inicial.<br/><span className="text-sm font-medium">Clique no botão "Add Produto" acima para começar.</span>
                        </div>
                      )}
                      
                      {data.produtos.galeria.map((p, index) => (
                        <div key={p.id} className="bg-white border border-slate-200 shadow-lg shadow-slate-100 rounded-2xl p-6 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>
                          <div className="flex justify-between items-start mb-4 pl-4">
                            <h3 className="font-bold text-brand-navy text-lg">Produto {index + 1}</h3>
                            <button onClick={() => removeProduto(p.id)} className="text-red-400 hover:text-red-600 bg-red-50 p-2 rounded-lg transition-colors"><Trash2 size={20} /></button>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-4">
                            <div><label className="block text-xs font-bold text-slate-500 mb-1">Nome do Produto</label><input type="text" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={p.nome} onChange={e => updateProduto(p.id, 'nome', e.target.value)} /></div>
                            <div><label className="block text-xs font-bold text-slate-500 mb-1">Categoria</label><input type="text" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={p.categoria} onChange={e => updateProduto(p.id, 'categoria', e.target.value)} /></div>
                            <div><label className="block text-xs font-bold text-slate-500 mb-1">Preço (Opcional)</label><input type="text" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={p.preco} onChange={e => updateProduto(p.id, 'preco', e.target.value)} /></div>
                            <div className="sm:col-span-2 md:col-span-3"><label className="block text-xs font-bold text-slate-500 mb-1">Link da Foto (Drive, Canva, etc)</label><input type="text" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={p.link} onChange={e => updateProduto(p.id, 'link', e.target.value)} /></div>
                            <div className="sm:col-span-2 md:col-span-3"><label className="block text-xs font-bold text-slate-500 mb-1">Descrição Curta</label><input type="text" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={p.descricao} onChange={e => updateProduto(p.id, 'descricao', e.target.value)} /></div>
                            
                            <div className="pt-2"><label className="flex items-center gap-2 text-sm font-bold text-slate-700 cursor-pointer"><input type="checkbox" checked={p.promocao === 'Sim'} onChange={e => updateProduto(p.id, 'promocao', e.target.checked ? 'Sim' : 'Não')} className="w-5 h-5 accent-brand-gold" /> Em Promoção?</label></div>
                            <div className="pt-2 sm:col-span-2"><label className="flex items-center gap-2 text-sm font-bold text-slate-700 cursor-pointer"><input type="checkbox" checked={p.prontaEntrega === 'Sim'} onChange={e => updateProduto(p.id, 'prontaEntrega', e.target.checked ? 'Sim' : 'Não')} className="w-5 h-5 accent-brand-gold" /> Pronta Entrega?</label></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 7: Diferenciais */}
               {step === 7 && (
                 <div className="space-y-8">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 7 — Diferenciais da Empresa</h2>
                    <p className="text-slate-500 font-medium mb-4">Selecione os pontos fortes do seu negócio que devemos destacar no site:</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Atendimento personalizado", "Entrega rápida", "Montagem própria", 
                        "Facilidade no pagamento", "Produtos para pronta entrega", "Grande variedade de móveis", 
                        "Preços acessíveis", "Produtos de qualidade", "Loja física confiável", 
                        "Atendimento pelo WhatsApp", "Garantia nos produtos", "Equipe especializada"
                      ].map(diff => (
                        <label key={diff} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${data.diferenciais.lista.includes(diff) ? 'border-brand-navy bg-brand-navy text-white font-bold' : 'border-slate-100 hover:bg-slate-50 text-slate-600 font-medium'}`}>
                          <input type="checkbox" checked={data.diferenciais.lista.includes(diff)} onChange={() => toggleArrayItem('diferenciais', 'lista', diff)} className="w-5 h-5 accent-brand-gold" />
                          <span className="text-sm">{diff}</span>
                        </label>
                      ))}
                    </div>
                    
                    <div className="pt-6">
                      <label className="block text-sm font-bold text-slate-700 mb-3">Escreva outros diferenciais (Opcional):</label>
                      <textarea className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none h-24 resize-none font-medium" value={data.diferenciais.outros} onChange={e => updateData('diferenciais', 'outros', e.target.value)}></textarea>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 8: Pagamento */}
               {step === 8 && (
                 <div className="space-y-8">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 8 — Formas de Pagamento</h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {[
                        "Pix", "Dinheiro", "Cartão de crédito", "Cartão de débito", 
                        "Parcelamento", "Boleto", "Crediário próprio", "Financiamento", "Entrada + parcelas"
                      ].map(pag => (
                        <label key={pag} className={`flex items-center justify-center text-center p-4 rounded-xl border-2 cursor-pointer transition-all ${data.pagamento.formas.includes(pag) ? 'border-green-500 bg-green-50 text-green-800 font-bold' : 'border-slate-100 hover:bg-slate-50 text-slate-600 font-medium'}`}>
                          <input type="checkbox" checked={data.pagamento.formas.includes(pag)} onChange={() => toggleArrayItem('pagamento', 'formas', pag)} className="hidden" />
                          <span className="text-sm">{pag}</span>
                        </label>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Em até quantas vezes parcela no cartão?</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.pagamento.parcelamento} onChange={e => updateData('pagamento', 'parcelamento', e.target.value)} placeholder="Ex: Em até 10x sem juros" /></div>
                      <div><label className="block text-sm font-bold text-slate-700 mb-2">Existe alguma condição especial?</label><input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.pagamento.condicoesEspeciais} onChange={e => updateData('pagamento', 'condicoesEspeciais', e.target.value)} placeholder="Ex: Desconto de 10% no Pix" /></div>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 9: Entrega e Montagem */}
               {step === 9 && (
                 <div className="space-y-6">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 9 — Entrega e Montagem</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">A loja faz entrega?</label>
                        <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium appearance-none" value={data.entrega.fazEntrega} onChange={e => updateData('entrega', 'fazEntrega', e.target.value)}>
                          <option value="">Selecione...</option>
                          <option value="Sim">Sim</option>
                          <option value="Não">Não (Retirada na loja)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Quais cidades ou regiões atende?</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.entrega.regioes} onChange={e => updateData('entrega', 'regioes', e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Existe entrega grátis em alguma região?</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.entrega.entregaGratis} onChange={e => updateData('entrega', 'entregaGratis', e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Prazo médio de entrega</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.entrega.prazo} onChange={e => updateData('entrega', 'prazo', e.target.value)} placeholder="Ex: Imediato, 1 a 3 dias..." />
                      </div>
                      
                      <div className="border-t border-slate-100 pt-6">
                        <label className="block text-sm font-bold text-slate-700 mb-3">A loja faz montagem?</label>
                        <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium appearance-none" value={data.entrega.fazMontagem} onChange={e => updateData('entrega', 'fazMontagem', e.target.value)}>
                          <option value="">Selecione...</option>
                          <option value="Sim, grátis">Sim, montagem gratuita</option>
                          <option value="Sim, cobrada">Sim, mas cobrada a parte</option>
                          <option value="Não">Não fazemos montagem</option>
                        </select>
                      </div>
                      <div className="border-t border-slate-100 pt-6">
                        <label className="block text-sm font-bold text-slate-700 mb-3">Observações sobre entrega/montagem</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.entrega.observacoes} onChange={e => updateData('entrega', 'observacoes', e.target.value)} />
                      </div>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 10: Provas Sociais */}
               {step === 10 && (
                 <div className="space-y-6">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 10 — Provas Sociais</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">A empresa possui avaliações no Google Meu Negócio?</label>
                        <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium appearance-none" value={data.provasSociais.temGoogle} onChange={e => updateData('provasSociais', 'temGoogle', e.target.value)}>
                          <option value="">Selecione...</option>
                          <option value="Sim">Sim</option>
                          <option value="Não">Não</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">Link do Google Meu Negócio</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none font-medium" value={data.provasSociais.linkGoogle} onChange={e => updateData('provasSociais', 'linkGoogle', e.target.value)} placeholder="Cole o link aqui..." />
                      </div>
                    </div>

                    <div className="bg-brand-gold/10 p-6 rounded-2xl border border-brand-gold/20 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-brand-navy mb-1">Depoimentos Escritos</h3>
                        <p className="text-sm text-brand-navy/80 font-medium">Você tem depoimentos de clientes que gostaria de exibir no site?</p>
                      </div>
                      <button onClick={addDepoimento} className="bg-brand-navy text-brand-gold px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-navy/90 transition-all whitespace-nowrap">
                        <Plus size={20} /> Add Depoimento
                      </button>
                    </div>

                    <div className="space-y-4 mb-8">
                      {data.provasSociais.listaDepoimentos.map((d, index) => (
                        <div key={d.id} className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 relative">
                          <button onClick={() => removeDepoimento(d.id)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"><Trash2 size={20} /></button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-8">
                             <div><label className="block text-xs font-bold text-slate-500 mb-1">Nome do Cliente</label><input type="text" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 outline-none font-medium" value={d.nome} onChange={e => updateDepoimento(d.id, 'nome', e.target.value)} /></div>
                             <div><label className="block text-xs font-bold text-slate-500 mb-1">Cidade/Bairro</label><input type="text" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 outline-none font-medium" value={d.cidade} onChange={e => updateDepoimento(d.id, 'cidade', e.target.value)} /></div>
                             <div className="md:col-span-2"><label className="block text-xs font-bold text-slate-500 mb-1">Texto do Depoimento</label><textarea className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 outline-none font-medium resize-none h-20" value={d.depoimento} onChange={e => updateDepoimento(d.id, 'depoimento', e.target.value)}></textarea></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 11: Estrutura Desejada */}
               {step === 11 && (
                 <div className="space-y-8">
                    <h2 className="text-2xl font-black text-brand-navy mb-8">Etapa 11 — Estrutura e Seções</h2>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-4">Quais seções você gostaria de ter no site? (Selecione)</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          "Topo com logo e menu", "Banner principal", "Botão de WhatsApp", 
                          "Sobre a empresa", "Categorias de produtos", "Galeria de produtos", 
                          "Produtos em promoção", "Diferenciais da loja", "Formas de pagamento", 
                          "Entrega e montagem", "Depoimentos de clientes", "Localização com Google Maps", 
                          "Rodapé com contatos", "Botões para vendedores", "Página de catálogo separada", "Blog (Futuro)"
                        ].map(sec => (
                          <label key={sec} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${data.estrutura.secoes.includes(sec) ? 'border-brand-navy bg-brand-navy text-white font-bold' : 'border-slate-100 hover:bg-slate-50 text-slate-600 font-medium'}`}>
                            <input type="checkbox" checked={data.estrutura.secoes.includes(sec)} onChange={() => toggleArrayItem('estrutura', 'secoes', sec)} className="w-4 h-4 hidden" />
                            <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${data.estrutura.secoes.includes(sec) ? 'bg-brand-gold text-brand-navy' : 'border border-slate-300 bg-white'}`}>
                              {data.estrutura.secoes.includes(sec) && <Check size={14} strokeWidth={4} />}
                            </div>
                            <span className="text-sm leading-tight">{sec}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 pt-6 border-t border-slate-100">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Existem sites que você admira e gostaria de usar como referência?</label>
                        <textarea className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none h-24 resize-none font-medium" value={data.estrutura.referencias} onChange={e => updateData('estrutura', 'referencias', e.target.value)} placeholder="Cole os links dos sites aqui..."></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Observações finais sobre o projeto</label>
                        <textarea className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-gold outline-none h-24 resize-none font-medium" value={data.estrutura.observacoesFinais} onChange={e => updateData('estrutura', 'observacoesFinais', e.target.value)} placeholder="Algo importante que não foi perguntado? Escreva aqui..."></textarea>
                      </div>
                    </div>
                    {renderButtons()}
                 </div>
               )}

               {/* Step 12: Resumo Final */}
               {step === 12 && (
                 <div className="space-y-8 print:space-y-4">
                    <div className="text-center mb-10 print:mb-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 print:hidden">
                        <Check size={40} strokeWidth={3} />
                      </div>
                      <h2 className="text-3xl font-black text-brand-navy">Briefing Concluído!</h2>
                      <p className="text-slate-500 mt-2 font-medium print:hidden">Revise as informações abaixo. Você pode salvar, imprimir ou nos enviar pelo WhatsApp.</p>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10 print:hidden border-b border-slate-100 pb-10">
                       <button onClick={copyBriefing} className="bg-slate-100 text-slate-700 px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all text-sm"><Copy size={18}/> Copiar</button>
                       <button onClick={downloadTxt} className="bg-slate-100 text-slate-700 px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all text-sm"><Download size={18}/> Baixar .TXT</button>
                       <button onClick={downloadJson} className="bg-slate-100 text-slate-700 px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all text-sm"><Download size={18}/> Baixar .JSON</button>
                       <button onClick={() => window.print()} className="bg-slate-100 text-slate-700 px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all text-sm"><Printer size={18}/> Imprimir / PDF</button>
                       <button onClick={() => setStep(0)} className="bg-slate-100 text-slate-700 px-5 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all text-sm"><ChevronLeft size={18}/> Editar</button>
                       
                       <button onClick={sendWhatsapp} className="w-full sm:w-auto mt-4 sm:mt-0 bg-green-500 text-white px-8 py-3 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg shadow-green-500/30 uppercase tracking-wide">
                         <Send size={20}/> Enviar p/ Desenvolvedor
                       </button>
                    </div>

                    {/* PREVIEW CONTENT */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-sm font-medium print:p-0 print:bg-white print:border-none">
                      <h3 className="font-black text-xl mb-6 text-brand-navy border-b border-slate-200 pb-2 uppercase">1. Informações Essenciais</h3>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div><strong className="text-slate-500 block mb-1">Cliente:</strong> {data.cliente.nome}</div>
                        <div><strong className="text-slate-500 block mb-1">Empresa (Oficial):</strong> {data.empresa.nomeOficial}</div>
                        <div><strong className="text-slate-500 block mb-1">Nicho:</strong> {data.nicho === 'moveis' ? 'Loja de Móveis' : 'Outro'}</div>
                        <div><strong className="text-slate-500 block mb-1">WhatsApp Cliente:</strong> {data.cliente.whatsapp}</div>
                      </div>

                      <h3 className="font-black text-xl mb-6 text-brand-navy border-b border-slate-200 pb-2 uppercase">2. A Empresa</h3>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div><strong className="text-slate-500 block mb-1">Nome no Site:</strong> {data.empresa.nomeSite}</div>
                        <div><strong className="text-slate-500 block mb-1">Slogan:</strong> {data.empresa.slogan}</div>
                        <div><strong className="text-slate-500 block mb-1">Cidades Atendidas:</strong> {data.empresa.cidade} / {data.empresa.regiao}</div>
                        <div className="col-span-2"><strong className="text-slate-500 block mb-1">Descrição:</strong> {data.empresa.descricao}</div>
                      </div>

                      <h3 className="font-black text-xl mb-6 text-brand-navy border-b border-slate-200 pb-2 uppercase">3. Design & Estrutura</h3>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div><strong className="text-slate-500 block mb-1">Estilo Visual:</strong> {data.identidade.estilo}</div>
                        <div><strong className="text-slate-500 block mb-1">Cores:</strong> {data.identidade.cores}</div>
                        <div><strong className="text-slate-500 block mb-1">Tem Logo?</strong> {data.identidade.temLogo}</div>
                        <div className="col-span-2"><strong className="text-slate-500 block mb-1">Seções Escolhidas:</strong> {data.estrutura.secoes.join(' • ')}</div>
                      </div>

                      <h3 className="font-black text-xl mb-6 text-brand-navy border-b border-slate-200 pb-2 uppercase">4. Oferta (Móveis/Produtos)</h3>
                      <div className="grid grid-cols-1 gap-4 mb-8">
                        <div><strong className="text-slate-500 block mb-1">Categorias:</strong> {data.produtos.categorias.join(' • ')}</div>
                        <div><strong className="text-slate-500 block mb-1">Diferenciais:</strong> {data.diferenciais.lista.join(' • ')} {data.diferenciais.outros && `• ${data.diferenciais.outros}`}</div>
                        <div><strong className="text-slate-500 block mb-1">Pagamento:</strong> {data.pagamento.formas.join(' • ')} ({data.pagamento.parcelamento})</div>
                        <div><strong className="text-slate-500 block mb-1">Entrega:</strong> {data.entrega.fazEntrega} (Grátis: {data.entrega.entregaGratis}) | Montagem: {data.entrega.fazMontagem}</div>
                      </div>
                      
                      <div className="text-center pt-8 print:hidden">
                         <Link to="/" className="text-brand-gold font-bold hover:underline">← Voltar para a página inicial</Link>
                      </div>
                    </div>
                 </div>
               )}
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Briefing;
