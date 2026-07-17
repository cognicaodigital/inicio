import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Send } from 'lucide-react';
import { usePageSEO } from '../utils/seo';
import content from '../data/content.json';

const Briefing = () => {
  usePageSEO('Briefing Online', 'Envie as informações básicas para darmos início ao desenvolvimento de seu ecossistema digital.');

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    name: '',
    whatsapp: '',
    email: '',
    businessDescription: '',
    differentiators: '',
    targetAudience: '',
    wantedPages: '',
    colorPreferences: '',
    referenceSites: '',
    brandTone: '',
    hasBranding: '',
    additionalInfo: ''
  });

  const steps = [
    {
      id: 'name',
      label: 'Identificação',
      question: 'Qual o seu nome completo e o nome do seu negócio?',
      type: 'text',
      placeholder: 'Ex: Roberto Souza - Advocacia Souza',
    },
    {
      id: 'whatsapp',
      label: 'Contato',
      question: 'Por favor, informe seu WhatsApp e e-mail corporativo:',
      type: 'contact',
    },
    {
      id: 'businessDescription',
      label: 'Atividade',
      question: 'Descreva detalhadamente a atividade principal e serviços que sua empresa oferece:',
      type: 'textarea',
      placeholder: 'Nos conte o que sua empresa faz no dia a dia...',
    },
    {
      id: 'differentiators',
      label: 'Diferenciais',
      question: 'Quais são os maiores diferenciais do seu negócio perante a concorrência?',
      type: 'textarea',
      placeholder: 'Por que o cliente deve escolher você e não o concorrente?',
    },
    {
      id: 'targetAudience',
      label: 'Público-Alvo',
      question: 'Quem é o seu público-alvo ideal? (Ex: Idade, classe social, gênero, dores)',
      type: 'textarea',
      placeholder: 'Ex: Empresários de 30 a 50 anos, classe A/B, que buscam...',
    },
    {
      id: 'wantedPages',
      label: 'Páginas',
      question: 'Quais páginas você gostaria de incluir na estrutura do seu site?',
      type: 'textarea',
      placeholder: 'Ex: Início, Sobre Mim, Serviços, Artigos, Formulário de Contato...',
    },
    {
      id: 'colorPreferences',
      label: 'Cores',
      question: 'Você possui alguma preferência de cores para a identidade visual do site?',
      type: 'textarea',
      placeholder: 'Ex: Azul marinho e prata (luxo), tons escuros com azul elétrico...',
    },
    {
      id: 'referenceSites',
      label: 'Referências',
      question: 'Cole links de sites de referência que você acha bonitos ou eficientes:',
      type: 'textarea',
      placeholder: 'Ex: www.referencia1.com.br, www.referencia2.com...',
    },
    {
      id: 'brandTone',
      label: 'Tom de Voz',
      question: 'Qual o tom de comunicação que melhor define seu posicionamento?',
      type: 'select',
      options: [
        'Premium / Luxo / Sofisticado',
        'Corporativo / Formal / Técnico',
        'Moderno / Descontraído / Jovem',
        'Direto / Comercial / Agressivo'
      ]
    },
    {
      id: 'hasBranding',
      label: 'Logo',
      question: 'Você já possui logotipo em alta qualidade e manual de marca?',
      type: 'select',
      options: [
        'Sim, possuo em PDF/vetor e posso enviar',
        'Sim, mas apenas imagem de baixa qualidade',
        'Não, preciso de ajuda com o redesign/desenvolvimento da marca',
        'Estou em processo de criação'
      ]
    },
    {
      id: 'additionalInfo',
      label: 'Extras',
      question: 'Deseja acrescentar mais alguma informação ou observação importante para o projeto?',
      type: 'textarea',
      placeholder: 'Qualquer outro detalhe, integração de sistema ou requisito...'
    }
  ];

  const handleInputChange = (e) => {
    setAnswers({ ...answers, [steps[step].id]: e.target.value });
  };

  const handleSelectOption = (option) => {
    setAnswers({ ...answers, [steps[step].id]: option });
    handleNext();
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(steps.length); // Final Step
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*BRIEFING ESTRUTURAL - COGNIÇÃO DIGITAL*\n\n` +
      `*1. Nome/Empresa:* ${answers.name}\n` +
      `*2. WhatsApp/E-mail:* ${answers.whatsapp || answers.email}\n` +
      `*3. Descrição Atividade:* ${answers.businessDescription}\n` +
      `*4. Diferenciais:* ${answers.differentiators}\n` +
      `*5. Público-Alvo:* ${answers.targetAudience}\n` +
      `*6. Estrutura de Páginas:* ${answers.wantedPages}\n` +
      `*7. Preferência de Cores:* ${answers.colorPreferences}\n` +
      `*8. Referências:* ${answers.referenceSites}\n` +
      `*9. Tom da Marca:* ${answers.brandTone}\n` +
      `*10. Identidade Visual:* ${answers.hasBranding}\n` +
      `*11. Notas Extras:* ${answers.additionalInfo}`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${content.company.contact.whatsapp}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const progressPercent = ((step) / steps.length) * 100;
  const currentStep = steps[step];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-marble flex items-center text-slate-300">
      <div className="section-container max-w-3xl w-full">
        {/* H1 para SEO */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-wide mb-4">
            Briefing de <span className="text-brand-electric">Criação de Sites</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto">
            Por favor, preencha este formulário detalhadamente para orientar o desenvolvimento técnico e criativo da sua nova estrutura.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <div 
              className="h-full bg-brand-electric shadow-[0_0_10px_rgba(0,210,255,0.5)] transition-all duration-300" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step < steps.length ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="px-3 py-1 bg-brand-electric/10 rounded-full text-[9px] font-black text-brand-electric uppercase tracking-widest">
                    {currentStep.label} - {step + 1} / {steps.length}
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
                  {currentStep.question}
                </h2>

                {/* Question Inputs */}
                {currentStep.type === 'text' && (
                  <div className="space-y-6">
                    <input 
                      type="text"
                      required
                      value={answers[currentStep.id]}
                      onChange={handleInputChange}
                      placeholder={currentStep.placeholder}
                      className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                    <button onClick={handleNext} className="btn-primary !px-8 !py-4 text-[10px] tracking-widest font-black uppercase flex items-center gap-2 mt-4 ml-auto">
                      Avançar <ArrowRight size={14} />
                    </button>
                  </div>
                )}

                {currentStep.type === 'contact' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-2">WhatsApp</label>
                        <input 
                          type="tel"
                          required
                          value={answers.whatsapp}
                          onChange={(e) => setAnswers({ ...answers, whatsapp: e.target.value })}
                          placeholder="Ex: 62988887777"
                          className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-2">E-mail</label>
                        <input 
                          type="email"
                          required
                          value={answers.email}
                          onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                          placeholder="Ex: roberto@advocacia.com.br"
                          className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <button onClick={handleNext} className="btn-primary !px-8 !py-4 text-[10px] tracking-widest font-black uppercase flex items-center gap-2 mt-4 ml-auto">
                      Avançar <ArrowRight size={14} />
                    </button>
                  </div>
                )}

                {currentStep.type === 'textarea' && (
                  <div className="space-y-6">
                    <textarea 
                      rows={5}
                      required
                      value={answers[currentStep.id]}
                      onChange={handleInputChange}
                      placeholder={currentStep.placeholder}
                      className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                    />
                    <button onClick={handleNext} className="btn-primary !px-8 !py-4 text-[10px] tracking-widest font-black uppercase flex items-center gap-2 mt-4 ml-auto">
                      Avançar <ArrowRight size={14} />
                    </button>
                  </div>
                )}

                {currentStep.type === 'select' && (
                  <div className="space-y-4">
                    {currentStep.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(option)}
                        className="w-full p-5 text-left rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-electric/50 hover:bg-white/[0.04] text-slate-300 hover:text-white font-semibold transition-all duration-300 flex justify-between items-center group"
                      >
                        <span>{option}</span>
                        <Check size={16} className="opacity-0 group-hover:opacity-100 text-brand-electric transition-all" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              // Briefing Final Step
              <motion.div
                key="submit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="px-3 py-1 bg-brand-electric/10 rounded-full text-[9px] font-black text-brand-electric uppercase tracking-widest">
                    Envio
                  </span>
                  <button 
                    onClick={handleBack}
                    className="text-xs font-bold text-slate-500 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft size={14} /> Voltar
                  </button>
                </div>

                <h2 className="text-xl md:text-2xl text-white font-black tracking-wide mb-4">
                  Tudo Pronto! Vamos revisar?
                </h2>
                <p className="text-slate-400 text-sm mb-8 font-medium">
                  Clique no botão abaixo para consolidar suas respostas e enviar o briefing estrutural diretamente para o nosso time de desenvolvimento no WhatsApp.
                </p>

                <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl space-y-3 mb-8 max-h-48 overflow-y-auto">
                  <div className="text-xs"><span className="text-slate-500 font-bold uppercase">Cliente:</span> <span className="text-white">{answers.name}</span></div>
                  <div className="text-xs"><span className="text-slate-500 font-bold uppercase">WhatsApp:</span> <span className="text-white">{answers.whatsapp}</span></div>
                  <div className="text-xs"><span className="text-slate-500 font-bold uppercase">Atividade:</span> <span className="text-white">{answers.businessDescription}</span></div>
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full btn-primary !py-5 flex justify-center items-center gap-3 text-xs tracking-widest font-black uppercase shadow-glow-blue"
                >
                  Enviar Briefing pelo WhatsApp <Send size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Briefing;