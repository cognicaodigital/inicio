import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Stethoscope, 
  Zap, 
  ShoppingBag, 
  Home, 
  Briefcase,
  HelpCircle,
  Mail,
  MessageCircle,
  ExternalLink,
  X
} from 'lucide-react';
import content from '../data/content.json';

const niches = [
  { id: 'saude', title: 'Saúde & Clínicas', desc: 'Médicos, Dentistas e Estética.', icon: Stethoscope },
  { id: 'infoprodutores', title: 'Infoprodutores', desc: 'Cursos, Mentoria e eBooks.', icon: Zap },
  { id: 'varejo', title: 'Varejo Local', desc: 'Lojas físicas e e-commerce.', icon: ShoppingBag },
  { id: 'corretor', title: 'Corretor de Imóveis', desc: 'Lançamentos e Imobiliário.', icon: Home },
  { id: 'b2b', title: 'Serviços B2B', desc: 'Empresas, Consultoria e Projetos.', icon: Briefcase },
];

const Tooltip = ({ text }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block ml-2 align-middle">
      <button 
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="text-brand-gold/50 hover:text-brand-gold transition-colors"
      >
        <HelpCircle size={16} />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 bg-brand-navy text-white text-[11px] leading-relaxed rounded-xl shadow-2xl z-50 pointer-events-none"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-navy" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Diagnostic = () => {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formTopRef = useRef(null);

  const [formData, setFormData] = useState({
    nicho: '',
    nome: '',
    email: '',
    whatsapp: '',
    estado: '',
    cidade: '',
    segmento: '',
    publico: '',
    diferencial: '',
    ticket: '',
    projeto: '',
    temLandingPage: 'Não',
    temFotos: 'Não'
  });

  const [cities, setCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);

  const states = [
    { uf: 'AC', name: 'Acre' }, { uf: 'AL', name: 'Alagoas' }, { uf: 'AP', name: 'Amapá' },
    { uf: 'AM', name: 'Amazonas' }, { uf: 'BA', name: 'Bahia' }, { uf: 'CE', name: 'Ceará' },
    { uf: 'DF', name: 'Distrito Federal' }, { uf: 'ES', name: 'Espírito Santo' }, { uf: 'GO', name: 'Goiás' },
    { uf: 'MA', name: 'Maranhão' }, { uf: 'MT', name: 'Mato Grosso' }, { uf: 'MS', name: 'Mato Grosso do Sul' },
    { uf: 'MG', name: 'Minas Gerais' }, { uf: 'PA', name: 'Pará' }, { uf: 'PB', name: 'Paraíba' },
    { uf: 'PR', name: 'Paraná' }, { uf: 'PE', name: 'Pernambuco' }, { uf: 'PI', name: 'Piauí' },
    { uf: 'RJ', name: 'Rio de Janeiro' }, { uf: 'RN', name: 'Rio Grande do Norte' }, { uf: 'RS', name: 'Rio Grande do Sul' },
    { uf: 'RO', name: 'Rondônia' }, { uf: 'RR', name: 'Roraima' }, { uf: 'SC', name: 'Santa Catarina' },
    { uf: 'SP', name: 'São Paulo' }, { uf: 'SE', name: 'Sergipe' }, { uf: 'TO', name: 'Tocantins' }
  ];

  // Scroll to top when step changes
  useEffect(() => {
    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [step]);

  // Load cities with faster handling
  useEffect(() => {
    if (formData.estado) {
      setLoadingCities(true);
      setCities([]); // Clear immediately
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formData.estado}/municipios?orderBy=nome`)
        .then(res => res.json())
        .then(data => {
          setCities(data);
          setLoadingCities(false);
        })
        .catch(() => setLoadingCities(false));
    }
  }, [formData.estado]);

  const nicheOptions = {
    'Saúde & Clínicas': {
      segments: ['Estética Avançada', 'Odontologia', 'Medicina Especializada', 'Fisioterapia', 'Psicologia', 'Clínica Multidisciplinar', 'Outro'],
      audiences: ['Pacientes Premium (Classe A)', 'Público Geral', 'Convênios', 'Terceira Idade', 'Kids/Pais', 'Outro']
    },
    'Infoprodutores': {
      segments: ['Cursos Online', 'Mentorias High Ticket', 'E-books / PLR', 'Comunidades / Assinatura', 'Eventos / Imersões', 'Outro'],
      audiences: ['Empreendedores', 'Profissionais em Transição', 'Estudantes', 'Pessoas buscando Renda Extra', 'Outro']
    },
    'Varejo Local': {
      segments: ['Moda / Vestuário', 'Alimentação / Gastronomia', 'Móveis / Decoração', 'Pet Shop', 'Automotivo', 'Outro'],
      audiences: ['Moradores da Região', 'Famílias', 'Público Jovem', 'Público Especializado', 'Outro']
    },
    'Corretor de Imóveis': {
      segments: ['Imóveis de Luxo (Alto Padrão)', 'Lançamentos (Na planta)', 'Minha Casa Minha Vida', 'Loteamentos', 'Imóveis Usados / Revenda', 'Outro'],
      audiences: ['Investidores', 'Famílias (Primeira Moradia)', 'Casais Jovens', 'Público de Alta Renda', 'Outro']
    },
    'Serviços B2B': {
      segments: ['Consultoria Estratégica', 'Tecnologia / SaaS', 'Marketing / Agência', 'Contabilidade / Jurídico', 'Educação Corporativa', 'Outro'],
      audiences: ['Micro / Pequenas Empresas', 'Médias / Grandes Empresas', 'Profissionais Liberais', 'Gestores de RH / TI', 'Outro']
    }
  };

  // --- Masks ---
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

  const maskCurrency = (value) => {
    let v = value.replace(/\D/g, '');
    if (!v) return '';
    v = (parseInt(v) / 100).toFixed(2).replace('.', ',');
    v = v.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `R$ ${v}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === 'whatsapp') finalValue = maskWhatsApp(value);
    if (name === 'ticket') finalValue = maskCurrency(value);

    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  // --- Validations ---
  const isNameValid = formData.nome.trim().split(' ').length >= 2;
  const isWhatsAppValid = formData.whatsapp.replace(/\D/g, '').length >= 11;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const canGoToStep2 = isNameValid && isWhatsAppValid && isEmailValid && formData.estado && formData.cidade;
  const canSubmit = formData.segmento && formData.publico && formData.diferencial && formData.ticket;

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    try {
      const response = await fetch('./send_email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.status === 'success') {
        setIsSubmitted(true);
      } else {
        alert("Erro no servidor: " + result.message);
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      // Fallback para não travar o usuário
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 bg-slate-50 flex flex-col items-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl bg-white rounded-[3rem] shadow-ultra p-12 lg:p-20 text-center"
        >
          <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-brand-navy mb-6 tracking-tight">Dados Enviados!</h2>
          <p className="text-slate-500 font-medium mb-12 leading-relaxed">
            Seu diagnóstico foi enviado com sucesso para análise. Você também recebeu uma cópia no e-mail <strong>{formData.email}</strong>.
          </p>
          
          <div className="space-y-4">
            <a 
              href={`https://wa.me/${content.company.contact.whatsapp}?text=Olá, sou o ${formData.nome}, acabei de fazer meu diagnóstico e quero falar com um consultor.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow w-full !py-6 group"
            >
              Falar com um Consultor Agora <MessageCircle className="ml-3 group-hover:rotate-12 transition-transform" />
            </a>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setStep(0);
                setFormData({ ...formData, nicho: '', segmento: '', diferencial: '', ticket: '', email: '', whatsapp: '', nome: '', estado: '', cidade: '' });
              }}
              className="w-full py-6 rounded-2xl border border-slate-100 text-brand-navy font-black text-xs tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
            >
              <ArrowLeft size={16} /> Voltar para o Site
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 bg-slate-50 flex flex-col items-center p-4 pb-20 overflow-y-auto" ref={formTopRef}>
      <div className="w-full max-w-4xl bg-white rounded-[3rem] shadow-ultra overflow-hidden border border-slate-100">
        
        {/* Progress Bar */}
        <div className="h-2 bg-slate-100 flex">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`flex-1 transition-all duration-700 ${step >= i ? 'bg-brand-gold' : 'bg-transparent'}`}
            />
          ))}
        </div>

        <div className="p-8 lg:p-20">
          <AnimatePresence mode="wait">
            
            {/* STEP 0: NICHO SELECTION */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <span className="text-[10px] font-black text-brand-gold tracking-[0.3em] uppercase mb-4 block">Início do Diagnóstico</span>
                  <h2 className="text-3xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">Selecione seu Nicho de Atuação</h2>
                  <p className="text-slate-500 font-medium">Escolha a categoria que melhor define o seu negócio atual.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {niches.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => { setFormData({ ...formData, nicho: n.title }); nextStep(); }}
                      className="p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-brand-gold/30 hover:bg-white hover:shadow-xl transition-all duration-500 text-left group"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-gold mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        <n.icon size={24} />
                      </div>
                      <h3 className="text-xl font-black text-brand-navy mb-3 tracking-tight group-hover:text-brand-gold transition-colors">{n.title}</h3>
                      <p className="text-base text-slate-500 font-medium leading-relaxed">{n.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 1: BASIC INFO */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div className="flex items-center gap-4 text-brand-gold">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <span className="font-black text-sm">01</span>
                  </div>
                  <h2 className="text-2xl font-black text-brand-navy tracking-tight">Informações Básicas</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 flex justify-between">
                      Nome Completo {!isNameValid && formData.nome.length > 0 && <span className="text-red-400 normal-case">Insira seu sobrenome</span>}
                    </label>
                    <input 
                      type="text" 
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Ex: João Silva"
                      className={`w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 transition-all font-medium text-brand-navy outline-none ${!isNameValid && formData.nome.length > 0 ? 'border-red-100 focus:border-red-300' : 'border-transparent focus:border-brand-gold/30 focus:bg-white'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">WhatsApp</label>
                    <input 
                      type="text" 
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="(00) 0.0000-0000"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Estado (UF)</label>
                      <div className="relative">
                        <select 
                          name="estado"
                          required
                          value={formData.estado}
                          onChange={handleInputChange}
                          className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy appearance-none text-sm"
                        >
                          <option value="" className="bg-[#0D1B2A] text-white">UF...</option>
                          {states.map(s => (
                            <option key={s.uf} value={s.uf} className="bg-[#0D1B2A] text-white">{s.uf}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ArrowRight size={14} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Cidade</label>
                      <div className="relative">
                        <select 
                          name="cidade"
                          required
                          disabled={!formData.estado || loadingCities}
                          value={formData.cidade}
                          onChange={handleInputChange}
                          className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy appearance-none disabled:opacity-50 text-sm"
                        >
                          <option value="" className="bg-[#0D1B2A] text-white">{loadingCities ? '...' : 'Cidade'}</option>
                          {cities.map(c => (
                            <option key={c.id} value={c.nome} className="bg-[#0D1B2A] text-white">{c.nome}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ArrowRight size={14} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-8">
                  <button onClick={prevStep} className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-navy transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button 
                    onClick={nextStep} 
                    disabled={!canGoToStep2}
                    className={`btn-yellow px-12 group transition-all duration-300 ${!canGoToStep2 ? 'opacity-40 cursor-not-allowed grayscale' : ''}`}
                  >
                    Próximo Passo <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: STRATEGIC INFO */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div className="flex items-center gap-4 text-brand-gold">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <span className="font-black text-sm">02</span>
                  </div>
                  <h2 className="text-2xl font-black text-brand-navy tracking-tight">Posicionamento & Oferta</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Segmento Específico</label>
                    <div className="relative">
                      <select 
                        name="segmento"
                        required
                        value={formData.segmento}
                        onChange={handleInputChange}
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy appearance-none"
                      >
                        <option value="">Selecione seu foco...</option>
                        {formData.nicho && nicheOptions[formData.nicho]?.segments.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ArrowRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Público Principal</label>
                    <div className="relative">
                      <select 
                        name="publico"
                        required
                        value={formData.publico}
                        onChange={handleInputChange}
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy appearance-none"
                      >
                        <option value="">Quem você atende?</option>
                        {formData.nicho && nicheOptions[formData.nicho]?.audiences.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ArrowRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Maior Diferencial
                      <Tooltip text="O que faz sua empresa ser única no mercado? Pode ser um método próprio, tempo de entrega, garantia exclusiva ou tecnologia." />
                    </label>
                    <input 
                      type="text" 
                      name="diferencial"
                      required
                      value={formData.diferencial}
                      onChange={handleInputChange}
                      placeholder="Ex: Método Exclusivo X"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Ticket Médio
                      <Tooltip text="O ticket médio é o valor médio que cada cliente gasta com seus produtos ou serviços. Ex: Se você vende um curso de R$ 1.000,00, seu ticket é este." />
                    </label>
                    <input 
                      type="text" 
                      name="ticket"
                      required
                      value={formData.ticket}
                      onChange={handleInputChange}
                      placeholder="R$ 0,00"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Tem Landing Page?
                      <Tooltip text="Landing Page é uma página focada 100% em conversão (venda ou captura de leads), sem distrações de menus ou outros links." />
                    </label>
                    <select 
                      name="temLandingPage"
                      required
                      value={formData.temLandingPage}
                      onChange={handleInputChange}
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy appearance-none"
                    >
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Possui Fotos/Vídeos Profissionais?</label>
                    <select 
                      name="temFotos"
                      required
                      value={formData.temFotos}
                      onChange={handleInputChange}
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy appearance-none"
                    >
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
                      Descrição do Projeto (Opcional)
                      <Tooltip text="Fale brevemente sobre o que você deseja desenvolver ou qual a sua maior necessidade atual no digital." />
                    </label>
                    <textarea 
                      name="projeto"
                      value={formData.projeto}
                      onChange={handleInputChange}
                      placeholder="Conte-nos um pouco sobre sua ideia ou necessidade..."
                      rows="4"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-transparent border-2 focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium text-brand-navy resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-8">
                  <button onClick={prevStep} className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-navy transition-colors">
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <button 
                    onClick={handleSubmit} 
                    disabled={!canSubmit}
                    className={`btn-yellow px-12 group shadow-[0_20px_40px_rgba(255,184,0,0.3)] transition-all duration-300 ${!canSubmit ? 'opacity-40 cursor-not-allowed grayscale' : ''}`}
                  >
                    Finalizar Diagnóstico <CheckCircle2 size={18} className="ml-2 group-hover:scale-125 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;
