import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { 
  ChevronLeft, 
  Sparkles, 
  X, 
  Layers, 
  ChevronRight,
  Scale, 
  Sprout, 
  Grid, 
  Hammer, 
  Lightbulb, 
  Armchair, 
  Globe, 
  Briefcase,
  Brain,
  ExternalLink
} from 'lucide-react';
import CTA from '../components/CTA';

// Lista de Categorias com seus respectivos modelos agrupados e ícones associados
const demoCategories = [
  {
    id: 'grama-sintetica',
    title: 'Grama Sintética',
    icon: Sprout,
    sites: [
      {
        name: 'Quanta Grama Sintética',
        url: 'https://quantagramasintetica.com/',
        desc: 'Modelo focado em venda direta de revestimentos e gramas decorativas.'
      }
    ]
  },
  {
    id: 'advocacia',
    title: 'Advocacia',
    icon: Scale,
    sites: [
      {
        name: 'Rodrigo Parente Advogados (Geral)',
        url: 'https://rodrigoparenteadvogados.com/',
        desc: 'Modelo tradicional com tom corporativo clássico.'
      },
      {
        name: 'Haline Cardoso (Feminino/Individual)',
        url: 'https://halinecardoso.github.io/',
        desc: 'Design moderno focado no posicionamento individual.'
      },
      {
        name: 'Borges Almeida Advogados',
        url: 'https://baadvs.com.br/',
        desc: 'Modelo moderno com estética premium focado em advocacia empresarial.'
      }
    ]
  },
  {
    id: 'vidracaria',
    title: 'Vidraçaria',
    icon: Grid,
    sites: [
      {
        name: 'Vidraçaria JF',
        url: 'https://vidracariajf.com/',
        desc: 'Modelo de showroom comercial com conversão rápida no WhatsApp.'
      }
    ]
  },
  {
    id: 'locacoes',
    title: 'Locações',
    icon: Hammer,
    sites: [
      {
        name: 'Ricco Locações',
        url: 'https://riccolocacoes.github.io/',
        desc: 'Modelo estruturado com listagem de catálogo de produtos de locação.'
      }
    ]
  },
  {
    id: 'iluminacao',
    title: 'Iluminação',
    icon: Lightbulb,
    sites: [
      {
        name: 'Geometria da Luz',
        url: 'https://geometriadaluz.github.io/',
        desc: 'Modelo voltado a arquitetura e automação de iluminação.'
      },
      {
        name: 'La Luz Iluminação',
        url: 'https://laluziluminacao.github.io/',
        desc: 'Showroom de luminárias e pendentes decorativos.'
      },
      {
        name: 'Luz de Led',
        url: 'https://luzdeled.github.io/',
        desc: 'Modelo institucional e comercial para soluções em LED.'
      }
    ]
  },
  {
    id: 'eletromoveis',
    title: 'Eletromóveis',
    icon: Armchair,
    sites: [
      {
        name: 'Bela Casa Móveis Usados',
        url: 'https://belacasamoveisusados.com/',
        desc: 'Modelo comercial de apresentação de ambientes e planejados.'
      }
    ]
  },
  {
    id: 'agencia',
    title: 'Agência',
    icon: Globe,
    sites: [
      {
        name: 'Digital GDS',
        url: 'https://digitalgds.com/',
        desc: 'Design focado em agências digitais e serviços de escala.'
      }
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoria',
    icon: Briefcase,
    sites: [
      {
        name: 'Zeitz Corp',
        url: 'https://zeitzcorp.github.io/',
        desc: 'Modelo corporativo minimalista de alta autoridade.'
      }
    ]
  },
  {
    id: 'psicologia',
    title: 'Psicologia',
    icon: Brain,
    sites: [
      {
        name: 'Psicólogo Weliton Dias',
        url: 'https://welitondiaspsi.com.br/',
        desc: 'Showroom clínico completo com agendamento direto e triagem integrada.'
      },
      {
        name: 'Dra. Mylena Kerolen (Bio & Links)',
        url: 'https://dramylenakerolen.github.io/inicio/links',
        desc: 'Página de Bio e Links de alta conversão para Instagram e agendamento rápido.'
      }
    ]
  }
];

const TemplatesCatalog = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Verifica se o formulário de acesso está preenchido
  useEffect(() => {
    const isUnlocked = localStorage.getItem('cd_portfolio_lead');
    if (!isUnlocked) {
      navigate('/cases');
      return;
    }

    const catId = searchParams.get('category');
    if (catId) {
      const found = demoCategories.find(c => c.id === catId);
      if (found && found.sites.length > 1) {
        setSelectedCategory(found);
      }
    }
  }, [navigate, searchParams]);

  const handleCategoryClick = (category) => {
    if (category.sites.length === 1) {
      const site = category.sites[0];
      handleSiteOpen(site, category.id);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSiteOpen = (site, categoryId) => {
    setSelectedCategory(null);
    navigate(`/cases/preview?url=${encodeURIComponent(site.url)}&title=${encodeURIComponent(site.name)}&category=${categoryId}`);
  };

  return (
    <div className="min-h-screen pt-24 bg-cd-navy text-cd-white">
      {/* Catalog Hero */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-cd-navy">
        <div className="section-container relative z-10">
          
          {/* Voltar link */}
          <Link to="/cases" className="inline-flex items-center gap-2 text-xs font-bold text-cd-gold-light hover:text-cd-gold transition-colors mb-6">
            <ChevronLeft size={16} />
            Voltar aos Casos de Sucesso
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="pill-badge mb-4 flex items-center gap-2 justify-center w-fit mx-auto">
              <Sparkles size={12} className="text-cd-gold" />
              Biblioteca de Modelos por Nicho
            </span>
            <h1 className="text-3xl lg:text-5xl mb-6 max-w-5xl mx-auto text-cd-white tracking-tighter">
              Escolha uma Categoria
            </h1>
            <p className="text-sm lg:text-base text-cd-gold-light max-w-3xl mx-auto mb-8 font-medium leading-relaxed opacity-80">
              Selecione o setor de sua preferência abaixo para interagir com os modelos de sites correspondentes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Niches Grid */}
      <section className="py-8 pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {demoCategories.map((cat, index) => {
              const IconComponent = cat.icon;

              return (
                <motion.div 
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="w-full flex"
                >
                  <div
                    onClick={() => handleCategoryClick(cat)}
                    className="w-full group bg-[#121E36]/90 border border-cd-blue/15 hover:border-cd-gold/50 rounded-2xl p-4 sm:p-5 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-cd-gold/10 hover:to-cd-blue/40 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(201,168,76,0.12)]"
                  >
                    {/* Ícone Representativo */}
                    <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-cd-blue/10 flex items-center justify-center text-cd-gold group-hover:text-[#0D1B2A] group-hover:bg-cd-gold transition-all duration-300 shrink-0">
                      <IconComponent size={22} />
                    </div>

                    {/* Conteúdo Textual */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-cd-white group-hover:text-cd-gold transition-colors tracking-tight truncate">
                        {cat.title}
                      </h3>
                      <div className="mt-1.5">
                        {cat.sites.length > 1 ? (
                          <span className="inline-flex items-center gap-1 bg-cd-gold/10 text-cd-gold border border-cd-gold/20 px-2.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider">
                            <Layers size={9} className="text-cd-gold" />
                            {cat.sites.length} layouts
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-cd-gold/10 text-cd-gold border border-cd-gold/20 px-2.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider">
                            1 layout
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Seta indicativa */}
                    <div className="text-cd-white/20 group-hover:text-cd-gold group-hover:translate-x-1.5 transition-all shrink-0">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL DE VARIAÇÕES */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cd-navy/85 backdrop-blur-sm"
            onClick={() => { setSelectedCategory(null); navigate('/cases/templates'); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-[#121E36] border border-cd-blue/40 rounded-[2.5rem] w-full max-w-lg p-6 lg:p-8 relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => { setSelectedCategory(null); navigate('/cases/templates'); }}
                className="absolute top-6 right-6 p-2 rounded-full text-cd-white/60 hover:text-cd-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <div className="w-10 h-10 bg-cd-gold/10 rounded-xl flex items-center justify-center text-cd-gold mx-auto mb-3">
                  <Layers size={20} />
                </div>
                <h3 className="text-xl font-black text-cd-white tracking-tight mb-1">
                  Variações: {selectedCategory.title}
                </h3>
                <p className="text-xs text-cd-gold-light opacity-80 leading-relaxed">
                  Selecione o modelo desejado para abrir o showroom.
                </p>
              </div>

              <div className="space-y-3">
                {selectedCategory.sites.map((site) => (
                  <div
                    key={site.url}
                    onClick={() => handleSiteOpen(site, selectedCategory.id)}
                    className="p-4 rounded-2xl bg-[#0D1B2A] border border-cd-blue/20 hover:border-cd-gold/50 cursor-pointer flex justify-between items-center group transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-black text-cd-white group-hover:text-cd-gold transition-colors">
                        {site.name}
                      </h4>
                      <p className="text-[11px] text-cd-white/60 mt-1">{site.desc}</p>
                    </div>
                    <div className="w-8 h-8 bg-cd-gold/10 group-hover:bg-cd-gold rounded-full flex items-center justify-center text-cd-gold group-hover:text-cd-navy transition-all">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </div>
  );
};

export default TemplatesCatalog;
