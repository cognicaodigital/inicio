import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ShieldCheck, Instagram, Mail, Phone, Linkedin } from 'lucide-react';
import Logo from './Logo';
import content from '../data/content.json';

const Footer = () => {
  const especialidades = [
    {
      title: "Showrooms Digitais Premium",
      desc: "Criação de sites de altíssimo padrão focados em conversão, desenvolvidos para refletir seu verdadeiro valor de mercado."
    },
    {
      title: "Dominância no Google (GMN)",
      desc: "Ranqueamento local avançado para sua empresa capturar automaticamente clientes que estão pesquisando para comprar hoje."
    },
    {
      title: "Arquitetura de Produtos Digitais",
      desc: "Montagem completa das engrenagens de vendas, conectando e-books, serviços e funis de alta lucratividade."
    },
    {
      title: "Consultoria de Posicionamento",
      desc: "Diretrizes estratégicas e análise profunda para reposicionar sua marca como a autoridade inquestionável do seu nicho."
    },
    {
      title: "Automação & IA Estratégica",
      desc: "Implementação de robôs de atendimento e fluxos inteligentes para nutrir clientes e vender no piloto automático."
    }
  ];

  return (
    <footer className="bg-brand-navy-card text-slate-300 pt-24 pb-10 border-t border-white/[0.05]">
      <div className="section-container">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Logo & Info */}
          <div className="xl:pr-8">
            <Link to="/" className="inline-block mb-6 group">
              <Logo className="h-10 md:h-12" />
            </Link>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">
              Arquitetura e Estruturação de Ecossistemas Digitais de Alta Performance.
            </p>
            <div className="flex items-center gap-4">
              <a href={`https://instagram.com/${content.company.social?.instagram || ''}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-electric hover:text-brand-navy hover:scale-105 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href={`mailto:${content.company.contact.email}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-electric hover:text-brand-navy hover:scale-105 transition-all duration-300">
                <Mail size={18} />
              </a>
              <a href={`tel:${(content.company.contact.whatsapp || '').replace(/\D/g,'')}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-electric hover:text-brand-navy hover:scale-105 transition-all duration-300">
                <Phone size={18} />
              </a>
              <a href={`https://linkedin.com/${content.company.social?.linkedin || ''}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-electric hover:text-brand-navy hover:scale-105 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10">NAVEGAÇÃO</h4>
            <ul className="flex flex-col gap-4">
              {content.navigation.map((link) => (
                <li key={link.path}>
                  {link.name === 'Mapa de Escala' ? (
                    <a href={link.path} className="text-sm font-bold text-slate-400 hover:text-brand-electric transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-sm font-bold text-slate-400 hover:text-brand-electric transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10">ESPECIALIDADES</h4>
            <ul className="flex flex-col gap-4">
              {especialidades.map((item, i) => (
                <li key={i} className="group relative flex items-center gap-3 text-sm font-bold text-slate-400 w-max cursor-help">
                  <div className="w-1.5 h-1.5 bg-brand-electric/70 rounded-full shrink-0 group-hover:bg-brand-electric transition-colors duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">{item.title}</span>
                  
                  {/* Tooltip Flutuante */}
                  <div className="absolute bottom-full left-0 mb-3 w-64 p-4 rounded-xl bg-brand-navy border border-white/10 shadow-2xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none translate-y-2 group-hover:translate-y-0">
                    <div className="absolute left-6 -bottom-1.5 w-3 h-3 bg-brand-navy border-r border-b border-white/10 rotate-45" />
                    <p className="relative z-10 text-xs text-slate-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10">INFORMAÇÕES</h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Clock className="text-brand-electric shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Horário de Atendimento</h5>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Segunda a Sexta: 10h às 16h<br/>(Sáb, Dom e Feriado: Fechado)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-brand-electric shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Localização</h5>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Goiânia - GO<br/>(Atendimento Online Nacional)</p>
                </div>
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-brand-electric" size={16} /> AUTORIDADE CERTIFICADA
                </h5>
                <div className="flex gap-3">
                  <div className="px-4 py-2 bg-brand-electric/5 border border-brand-electric/25 rounded-full text-[9px] font-black tracking-widest text-brand-electric flex items-center gap-2 hover:bg-brand-electric/10 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse"></div>
                    DNA ESTRATÉGICO
                  </div>
                  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black tracking-widest text-slate-400 flex items-center gap-2 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all cursor-default">
                    <svg className="w-2.5 h-2.5 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    SSL SECURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Base */}
        <div className="pt-12 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] text-center md:text-left">
              © {new Date().getFullYear()} COGNIÇÃO DIGITAL. TODOS OS DIREITOS RESERVADOS.
            </div>
            <div className="hidden md:block w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-4">
              <Link to="/privacidade" className="text-[9px] font-black text-slate-500 hover:text-slate-300 uppercase tracking-[0.2em] transition-colors">
                Política de Privacidade
              </Link>
              <div className="w-[1px] h-2 bg-white/10" />
              <Link to="/termos" className="text-[9px] font-black text-slate-500 hover:text-slate-300 uppercase tracking-[0.2em] transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 justify-center">
             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-electric">ATENDIMENTO NACIONAL</span>
             <div className="w-[1px] h-3 bg-white/10" />
             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 truncate">CNPJ: 42.457.834/0001-70</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;