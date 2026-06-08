import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import content from '../data/content.json';
import CTA from '../components/CTA';

const CaseDetail = () => {
  const { id } = useParams();
  const project = content.cases.list.find(c => c.id === id);

  if (!project) return <div className="pt-40 text-center">Caso não encontrado.</div>;

  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Back Link */}
      <div className="section-container pt-8">
        <Link 
          to="/cases" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-gold transition-colors"
        >
          <ArrowLeft size={16} /> Voltar para casos
        </Link>
      </div>

      {/* Case Header */}
      <section className="py-16 lg:pt-20 lg:pb-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-black text-brand-gold tracking-[0.2em] uppercase mb-8 block">
                Estudo de Caso • {project.tagline}
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-brand-navy tracking-tighter mb-10 leading-tight">
                {project.title}
              </h1>
              <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border-l-8 border-brand-gold relative mb-10">
                <p className="text-lg lg:text-xl font-medium text-slate-600 leading-relaxed italic">
                  "{project.quote}"
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-16">
                {project.tags.map(tag => (
                  <span key={tag} className="px-5 py-2.5 bg-brand-navy/5 text-brand-navy/60 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-ultra"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 right-8">
                 <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy shadow-lg animate-bounce-slow">
                   <CheckCircle2 size={28} />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-24 bg-slate-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-4xl font-black text-brand-navy tracking-tight">O Desafio Digital</h2>
              <p className="text-base lg:text-lg text-slate-500 leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-4xl font-black text-brand-gold tracking-tight">Arquitetura de Sucesso</h2>
              <p className="text-base lg:text-lg text-slate-500 leading-relaxed font-medium">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default CaseDetail;
