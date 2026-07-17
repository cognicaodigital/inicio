import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import content from '../data/content.json';
import { usePageSEO } from '../utils/seo';

const CaseDetail = () => {
  const { id } = useParams();
  const caseItem = content.cases.list.find((item) => item.id === id);

  usePageSEO(
    caseItem ? `${caseItem.title} - Estudo de Caso` : 'Caso não encontrado',
    caseItem ? `Confira o estudo de caso detalhado do projeto ${caseItem.title}.` : ''
  );

  if (!caseItem) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-brand-navy flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl text-white mb-6">Estudo de caso não encontrado</h1>
        <Link to="/cases" className="btn-primary">
          Voltar para Cases
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-navy text-slate-300">
      {/* Navigation Breadcrumb */}
      <div className="section-container mb-12">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <Link to="/cases" className="hover:text-brand-electric transition-colors">Cases</Link>
          <ChevronRight size={12} />
          <span className="text-slate-300">{caseItem.title}</span>
        </div>
      </div>

      {/* Case Header Banner */}
      <div className="section-container mb-20">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-premium bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent z-10"></div>
          <img 
            src={caseItem.image} 
            alt={caseItem.title} 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-12 left-12 right-12 z-20">
            <span className="pill-badge mb-4">{caseItem.tagline}</span>
            <h1 className="text-3xl lg:text-6xl text-white font-black tracking-wide leading-none mt-2">
              {caseItem.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-16">
            {/* O Desafio */}
            <div className="bg-white/[0.01] border border-white/[0.04] p-10 lg:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl lg:text-3xl text-white mb-6 tracking-wide font-black flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-electric rounded-full"></span>
                O Desafio
              </h2>
              <p className="text-base lg:text-lg text-slate-400 leading-relaxed font-medium">
                {caseItem.problem}
              </p>
            </div>

            {/* A Solução */}
            <div className="bg-white/[0.01] border border-white/[0.04] p-10 lg:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl lg:text-3xl text-white mb-6 tracking-wide font-black flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-electric rounded-full"></span>
                A Solução e Resultados
              </h2>
              <p className="text-base lg:text-lg text-slate-400 leading-relaxed font-medium mb-8">
                {caseItem.result}
              </p>
              
              <div className="p-8 bg-brand-electric/5 border border-brand-electric/20 rounded-2xl flex gap-4 items-start">
                <CheckCircle2 className="text-brand-electric shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider mb-2">Métrica Alcançada</h3>
                  <p className="text-base text-slate-300 font-medium">{caseItem.quote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-card p-10">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6 border-b border-white/5 pb-4">
                Informações do Caso
              </h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">Cliente</span>
                  <span className="text-sm font-bold text-white">{caseItem.title}</span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">Serviços Executados</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {caseItem.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] text-[9px] font-black text-slate-400 rounded-full tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/5">
                <Link 
                  to="/cases" 
                  className="text-xs font-black tracking-widest uppercase text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para todos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;