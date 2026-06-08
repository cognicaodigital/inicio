import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  X, 
  ChevronDown, 
  CheckCircle2, 
  MessageSquare,
  TrendingUp,
  Target,
  Users,
  Zap,
  ShieldCheck,
  Rocket,
  Award
} from 'lucide-react';
import content from '../data/content.json';

const Budget = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    mensagem: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `🚀 *PEDIDO DE CONSULTORIA GRATUITA*%0A%0A` +
      `*NOME:* ${formData.nome}%0A` +
      `*E-MAIL:* ${formData.email}%0A` +
      `*WHATSAPP:* ${formData.whatsapp}%0A%0A` +
      `*MENSAGEM:*%0A${formData.mensagem}`;
    window.open(`https://wa.me/${content.company.contact.whatsapp}?text=${text}`, '_blank');
    setIsSent(true);
  };

  const pillars = [
    { icon: Award, title: 'Experiência comprovada', desc: 'Com nossa equipe, você tem a garantia de trabalhar com profissionais que têm um histórico comprovado de sucesso em diversos nichos de mercado.' },
    { icon: TrendingUp, title: 'Retorno sobre o Investimento (ROI) alto', desc: 'Com nossa equipe, você pode esperar um ROI impressionante para seus investimentos em publicidade.' },
    { icon: Target, title: 'Segmentação precisa', desc: 'Aproveite nossa habilidade em encontrar e alcançar seu público-alvo de forma precisa.' },
    { icon: Users, title: 'Suporte personalizado', desc: 'Aqui, você não é apenas mais um cliente. Oferecemos suporte personalizado e atendimento excepcional.' },
    { icon: Zap, title: 'Estratégias inovadoras', desc: 'Estamos sempre à frente das últimas tendências para desenvolver estratégias de publicidade que se dão bem.' },
    { icon: Rocket, title: 'Acompanhamento e otimização contínua', desc: 'Não nos contentamos com resultados medianos. Nossa equipe monitora suas campanhas constantemente.' }
  ];

  const comparisons = [
    {
      title: 'Estratégias personalizadas',
      nossa: 'Desenvolvemos estratégias de posicionamento sob medida para atender as necessidades exclusivas do seu negócio.',
      outras: 'Oferecem estratégias de publicidade genéricas, sem considerar as necessidades específicas de cada cliente.'
    },
    {
      title: 'Otimização Inteligente',
      nossa: 'Utilizamos tecnologias avançadas e análise de dados para otimizar continuamente suas campanhas.',
      outras: 'Fornecem atendimento padrão e não personalizado, deixando os clientes sem apoio adequado.'
    },
    {
      title: 'Análise Profunda',
      nossa: 'Nossa equipe oferece insights detalhados por meio de análises preditivas e análises de dados avançadas.',
      outras: 'Falham em utilizar tecnologias avançadas e análise de dados, resultando em campanhas menos eficazes.'
    }
  ];

  const faqs = [
    { q: 'Por que devo escolher a Cognição Digital em vez de outras agências de marketing?', a: 'Porque não somos apenas uma agência de marketing, somos arquitetos de negócios. Nosso foco é estratégia e lucro real, não apenas métricas de vaidade.' },
    { q: 'Como posso saber se as estratégias da Cognição Digital são eficazes para o meu negócio?', a: 'Nossa análise inicial (Consultoria Gratuita) serve justamente para isso. Identificamos as furos e oportunidades reais antes mesmo de começarmos.' },
    { q: 'Quanto tempo leva para ver resultados com a Cognição Digital?', a: 'Embora o tráfego pago traga resultados rápidos, nossa estratégia de estruturação costuma apresentar melhoras significativas logo no primeiro mês.' },
    { q: 'Quais são as vantagens de agir agora e começar a trabalhar com a Cognição Digital?', a: 'O mercado digital castiga quem espera. Cada dia parado é um dia perdendo market share e dados valiosos para seus concorrentes.' }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 bg-brand-navy relative">
        <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none"></div>
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
              <h1 className="text-4xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                Aumente suas vendas e lucro com <span className="text-brand-gold">estratégia na internet</span>
              </h1>
              <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
                Cadastre-se e receba uma consultoria gratuita! Descubra como podemos elevar o seu negócio.
              </p>
              <button 
                onClick={() => document.getElementById('budget-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-gold text-brand-navy px-10 py-5 rounded-xl font-black flex items-center gap-3 hover:scale-105 transition-all"
              >
                <MessageSquare size={20} fill="currentColor" /> RECEBER CONSULTORIA GRÁTIS
              </button>
            </div>

            <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-300" id="budget-form">
              <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-2xl">
                <h3 className="text-xl font-black text-brand-navy mb-8 text-center uppercase">
                  Cadastre-se abaixo e receba uma consultoria gratuita
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="nome" placeholder="Nome:" required onChange={handleInputChange} className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-gold outline-none" />
                  <input type="email" name="email" placeholder="E-mail:" required onChange={handleInputChange} className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-gold outline-none" />
                  <input type="text" name="whatsapp" placeholder="DDD + Telefone:" required onChange={handleInputChange} className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-gold outline-none" />
                  <textarea name="mensagem" placeholder="Como podemos ajudar?" rows="3" required onChange={handleInputChange} className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-gold outline-none resize-none"></textarea>
                  <button type="submit" className="w-full py-5 rounded-xl bg-brand-gold text-brand-navy font-black hover:brightness-110 shadow-lg transition-all">
                    {isSent ? 'SOLICITADO!' : 'RECEBER CONSULTORIA GRATUITA'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-container"
        >
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">Especialistas em vendas pela internet</span>
            <h2 className="text-4xl lg:text-6xl font-black text-brand-navy mt-4 tracking-tighter">Por que trabalhar com a gente?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {pillars.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                  <p.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-brand-navy mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-slate-500 font-medium text-sm lg:text-base leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-slate-50 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-container"
        >
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-brand-navy tracking-tighter">O que você ganha quando nos escolhe</h2>
          </div>
          <div className="space-y-6">
            {comparisons.map((c, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="grid lg:grid-cols-3 gap-6"
              >
                <div className="bg-brand-gold p-8 rounded-3xl flex items-center justify-center text-center text-brand-navy font-black text-xl">
                  {c.title}
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-4">
                  <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center text-green-500 shrink-0 mt-1"><Check size={14} /></div>
                  <div>
                    <h4 className="font-black text-green-600 mb-2 uppercase text-xs tracking-widest">Nossa agência</h4>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{c.nossa}</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-4 opacity-60">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-red-500 shrink-0 mt-1"><X size={14} /></div>
                  <div>
                    <h4 className="font-black text-red-600 mb-2 uppercase text-xs tracking-widest">Outras agências</h4>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{c.outras}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-brand-navy text-white relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="section-container"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video bg-white/10 rounded-3xl border-4 border-brand-gold overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Time"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Quem somos</h2>
              <p className="text-lg lg:text-xl text-slate-300 font-medium leading-relaxed">
                A Cognição Digital atua na vanguarda da arquitetura de negócios, transformando presenças online em ativos de alto valor. Nossa abordagem integra engenharia de dados, psicologia de vendas e design estratégico para construir ecossistemas que dominam o mercado e garantem uma autoridade inquestionável para nossos clientes.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-white relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="section-container max-w-4xl"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-center text-brand-navy mb-16 tracking-tighter">Perguntas Frequentes (F.A.Q)</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-slate-100 pb-4">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className={`text-lg font-black ${activeFaq === i ? 'text-brand-gold' : 'text-brand-navy'}`}>➔ {f.q}</span>
                  <ChevronDown className={`transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="py-4 text-slate-500 font-medium pl-8">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-brand-navy relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="section-container"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-6">
              <p className="text-lg text-slate-300 italic">Registre-se enquanto essa oferta exclusiva está disponível!</p>
            </div>
            <div className="bg-white rounded-[2rem] p-10 text-center shadow-inner">
               <div className="flex justify-center mb-6 text-brand-gold"><MessageSquare size={48} /></div>
               <button className="w-full py-5 rounded-xl bg-brand-gold text-brand-navy font-black shadow-lg">RECEBER CONSULTORIA GRATUITA</button>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Budget;
