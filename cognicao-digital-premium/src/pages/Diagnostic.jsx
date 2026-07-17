import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ClipboardCheck, MessageCircle, Send } from 'lucide-react';
import { usePageSEO } from '../utils/seo';
import content from '../data/content.json';

const Diagnostic = () => {
  usePageSEO('Diagnóstico Gratuito', 'Faça um diagnóstico rápido de presença digital e descubra os pontos fracos da sua operação.');
  
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    businessType: '',
    bottleneck: '',
    hasWebsite: '',
    averageTicket: '',
    whatsapp: '',
    name: '',
    email: '',
  });
  
  const steps = [
    {
      id: 'businessType',
      question: 'Qual é o modelo principal do seu negócio?',
      options: [
        'Profissional Liberal (Médico, Advogado, Psicólogo)',
        'Empresa Local / Serviço Físico',
        'Infoprodutos / Educação Online',
        'E-commerce / Vendas de Produtos',
        'Outro'
      ]
    },
    {
      id: 'bottleneck',
      question: 'Qual o maior gargalo da sua operação hoje?',
      options: [
        'Pouco volume de leads / contatos qualificados',
        'Presença online amadora ou inexistente',
        'Dificuldade de cobrar um preço premium (baixo valor percebido)',
        'Falta de automação (perda de tempo com triagem)',
        'Tráfego ineficiente (anúncios caros e sem retorno)'
      ]
    },
    {
      id: 'hasWebsite',
      question: 'Você possui um site ou landing page rodando atualmente?',
      options: [
        'Sim, mas está desatualizado/não converte bem',
        'Sim, e estou satisfeito com ele por enquanto',
        'Não possuo site, vendo apenas pelo Instagram/WhatsApp',
        'Estou construindo/planejando um'
      ]
    },
    {
      id: 'averageTicket',
      question: 'Qual o ticket médio dos seus serviços/produtos?',
      options: [
        'Até R$ 200',
        'R$ 200 a R$ 1.000',
        'R$ 1.000 a R$ 3.000',
        'Acima de R$ 3.000 (Alto Padrão)'
      ]
    },
  ];

  const handleSelectOption = (option) => {
    const currentStepField = steps[step].id;
    setAnswers({ ...answers, [currentStepField]: option });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(steps.length); // Ir para etapa de informações de contato
    }
  };

  const handleInputChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatar mensagem para WhatsApp
    const message = `*DIAGNÓSTICO ESTRATÉGICO - COGNIÇÃO DIGITAL*\n\n` +
      `*Nome:* ${answers.name}\n` +
      `*E-mail:* ${answers.email}\n` +
      `*WhatsApp:* ${answers.whatsapp}\n\n` +
      `*1. Modelo de Negócio:* ${answers.businessType}\n` +
      `*2. Maior Gargalo:* ${answers.bottleneck}\n` +
      `*3. Tem site atual?:* ${answers.hasWebsite}\n` +
      `*4. Ticket Médio:* ${answers.averageTicket}`;
      
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${content.company.contact.whatsapp}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const progressPercent = ((step) / (steps.length + 1)) * 100;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-marble flex items-center text-slate-300">
      <div className="section-container max-w-3xl w-full">
        {/* H1 para SEO */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-wide mb-4">
            Diagnóstico de Presença <span className="text-brand-electric">Digital</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto">
            Responda 4 perguntas rápidas e descubra os pontos cegos que estão impedindo o crescimento da sua marca na internet.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <div 
              className="h-full bg-brand-electric shadow-[0_0_10px_rgba(0,210,255,0.5)] transition-all duration-300" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step < steps.length ? (
              // Quiz Steps
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-black text-brand-electric tracking-widest uppercase">
                    Etapa {step + 1} de {steps.length + 1}
                  </span>
                  {step > 0 && (
                    <button 
                      onClick={handleBack}
                      className="text-xs font-bold text-slate-500 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <ArrowLeft size={14} /> Voltar
                    </button>
                  )}
                </div>

                <h2 className="text-xl md:text-2xl text-white font-black tracking-wide mb-8 leading-snug">
                  {steps[step].question}
                </h2>

                <div className="space-y-4">
                  {steps[step].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option)}
                      className="w-full p-6 text-left rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-electric/50 hover:bg-white/[0.04] text-slate-300 hover:text-white font-semibold transition-all duration-300 flex justify-between items-center group"
                    >
                      <span>{option}</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-brand-electric transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Contact Info / Submit Step
              <motion.div
                key="submit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-black text-brand-electric tracking-widest uppercase">
                    Etapa Final
                  </span>
                  <button 
                    onClick={handleBack}
                    className="text-xs font-bold text-slate-500 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft size={14} /> Voltar
                  </button>
                </div>

                <h2 className="text-xl md:text-2xl text-white font-black tracking-wide mb-4">
                  Excelente! Onde devemos enviar sua análise?
                </h2>
                <p className="text-slate-400 text-sm mb-8 font-medium">
                  Preencha seus dados para conectar e agendar a devolutiva do diagnóstico diretamente com nosso estrategista.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required
                      value={answers.name}
                      onChange={handleInputChange}
                      placeholder="Ex: João Silva" 
                      className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">E-mail Corporativo</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required
                        value={answers.email}
                        onChange={handleInputChange}
                        placeholder="Ex: joao@empresa.com" 
                        className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">WhatsApp com DDD</label>
                      <input 
                        type="tel" 
                        id="whatsapp"
                        name="whatsapp" 
                        required
                        value={answers.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Ex: 62988887777" 
                        className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn-primary !py-5 flex justify-center items-center gap-3 text-xs tracking-widest font-black uppercase shadow-glow-blue mt-8"
                  >
                    Gerar Análise e Enviar pelo WhatsApp <MessageCircle size={18} />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;