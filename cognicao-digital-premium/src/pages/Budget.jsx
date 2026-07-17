import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Send, Check } from 'lucide-react';
import { usePageSEO } from '../utils/seo';
import content from '../data/content.json';

const Budget = () => {
  usePageSEO('Orçamento', 'Solicite uma proposta comercial personalizada para a arquitetura de seu ecossistema digital.');
  const { about } = content.home;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    investment: 'R$ 2.000 a R$ 5.000',
    details: '',
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);

  const servicesList = [
    'Showrooms Digitais / Landing Pages',
    'Dominância no Google (GMN)',
    'Estratégia de Vendas / Tráfego',
    'Posicionamento / Branding',
    'Automações e IA',
    'Ativos Inteligentes (eBooks)'
  ];

  const handleServiceToggle = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*SOLICITAÇÃO DE ORÇAMENTO - COGNIÇÃO DIGITAL*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n\n` +
      `*Serviços Desejados:*\n${selectedServices.map(s => `- ${s}`).join('\n') || 'Nenhum selecionado'}\n\n` +
      `*Faixa de Investimento:* ${formData.investment}\n` +
      `*Mais Detalhes:* ${formData.details}`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${content.company.contact.whatsapp}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-navy text-slate-300">
      <div className="section-container">
        {/* H1 para SEO */}
        <div className="text-center mb-20">
          <h1 className="text-3xl lg:text-5xl font-black text-white tracking-wide mb-4">
            Solicitação de <span className="text-brand-electric">Orçamento</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto">
            Defina o escopo preliminar do seu projeto e entraremos em contato com uma proposta comercial estruturada.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Formulário de Escopo */}
          <div className="lg:col-span-8">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <h2 className="text-xl md:text-2xl text-white font-black tracking-wide mb-8">
                Escopo de Projeto
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Seu Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Carlos Mota" 
                      className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Nome da Empresa</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company" 
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Ex: Mota & Associados" 
                      className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">E-mail de Contato</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ex: carlos@empresa.com" 
                      className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Celular/WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex: 62999998888" 
                      className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Serviços de Interesse */}
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Serviços Solicitados</span>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {servicesList.map((service, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => handleServiceToggle(service)}
                        className={`p-4 rounded-xl text-left border text-xs font-bold transition-all duration-300 flex justify-between items-center ${
                          selectedServices.includes(service) 
                            ? 'bg-brand-electric/15 border-brand-electric text-white shadow-[0_0_15px_rgba(0,210,255,0.15)]' 
                            : 'bg-white/[0.01] border-white/[0.08] text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <span>{service}</span>
                        {selectedServices.includes(service) && <Check size={14} className="text-brand-electric" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Faixa de Investimento */}
                <div>
                  <label htmlFor="investment" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Previsão de Investimento</label>
                  <select 
                    id="investment"
                    name="investment"
                    value={formData.investment}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl bg-brand-navy border border-white/[0.08] focus:border-brand-electric text-white focus:outline-none transition-colors"
                  >
                    <option value="R$ 2.000 a R$ 5.000">R$ 2.000 a R$ 5.000</option>
                    <option value="R$ 5.000 a R$ 10.000">R$ 5.000 a R$ 10.000</option>
                    <option value="R$ 10.000 a R$ 20.000">R$ 10.000 a R$ 20.000</option>
                    <option value="Acima de R$ 20.000">Acima de R$ 20.000</option>
                  </select>
                </div>

                {/* Detalhes Extras */}
                <div>
                  <label htmlFor="details" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Descreva suas necessidades</label>
                  <textarea 
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Descreva brevemente seus objetivos de negócio, referências ou detalhes técnicos..." 
                    className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-brand-electric text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-primary !py-5 flex justify-center items-center gap-3 text-xs tracking-widest font-black uppercase shadow-glow-blue mt-8"
                >
                  Enviar Solicitação via WhatsApp <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Lateral */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-brand-navy-card border border-white/[0.05] p-10 rounded-[2.5rem]">
              <h2 className="text-lg font-black text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
                FAQ de Projetos
              </h2>

              <div className="space-y-4">
                {about.faq.map((item, index) => (
                  <div key={index} className="border-b border-white/5 pb-4 last:border-0">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full py-2 flex items-center justify-between text-left text-sm font-bold text-white hover:text-brand-electric transition-colors"
                    >
                      <span>{item.question}</span>
                      {activeFaq === index ? <Minus size={14} className="text-brand-electric shrink-0" /> : <Plus size={14} className="text-brand-electric shrink-0" />}
                    </button>
                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-2 text-xs text-slate-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;