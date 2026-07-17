import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Clock, 
  Award, 
  ChevronDown, 
  Sparkles, 
  Compass, 
  Cpu, 
  Layout, 
  Share2, 
  TrendingUp, 
  Target, 
  Zap, 
  MapPin, 
  Layers, 
  HelpCircle,
  FileText,
  FileCheck,
  Table,
  ClipboardList,
  Video,
  Database,
  ArrowRight,
  BookMarked,
  GraduationCap
} from 'lucide-react';
import InterestModal from '../components/InterestModal';

// Dados das Áreas de Conhecimento
const knowledgeAreas = [
  {
    id: 'estrategia',
    title: 'Estratégia e Presença Digital',
    icon: Compass,
    desc: 'Planejamento, diagnóstico, posicionamento e organização da presença de empresas no ambiente digital.'
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    icon: Target,
    desc: 'Fundamentos, campanhas, canais digitais e estratégias para atrair, comunicar e converter.'
  },
  {
    id: 'ia',
    title: 'Inteligência Artificial para Negócios',
    icon: Cpu,
    desc: 'Aplicações práticas de inteligência artificial na comunicação, produtividade, atendimento e desenvolvimento empresarial.'
  },
  {
    id: 'sites',
    title: 'Criação de Sites e Landing Pages',
    icon: Layout,
    desc: 'Estrutura de páginas, SEO, UI, UX, conteúdo, autoridade, desempenho e conversão.'
  },
  {
    id: 'redes-sociais',
    title: 'Redes Sociais e Conteúdo',
    icon: Share2,
    desc: 'Planejamento editorial, Instagram, autoridade, identidade visual e produção de conteúdo estratégico.'
  },
  {
    id: 'trafego',
    title: 'Tráfego Pago',
    icon: TrendingUp,
    desc: 'Fundamentos de anúncios, públicos, campanhas, criativos, investimentos e análise de resultados.'
  },
  {
    id: 'branding',
    title: 'Branding e Posicionamento',
    icon: Award,
    desc: 'Identidade de marca, diferenciação, proposta de valor e comunicação profissional.'
  },
  {
    id: 'vendas',
    title: 'Vendas e Conversão',
    icon: Zap,
    desc: 'Ofertas, propostas comerciais, atendimento, WhatsApp, negociação e fechamento.'
  },
  {
    id: 'google',
    title: 'Google e SEO Local',
    icon: MapPin,
    desc: 'Perfil da Empresa no Google, avaliações, buscas locais e posicionamento regional.'
  },
  {
    id: 'produtividade',
    title: 'Produtividade e Ferramentas Digitais',
    icon: Layers,
    desc: 'Organização, automações, inteligência artificial, Canva e ferramentas para otimizar processos.'
  }
];

// Dados dos Cursos
const academyCourses = [
  {
    id: 1,
    title: 'Diagnóstico da Presença Digital em 7 Passos',
    category: 'Estratégia e Presença Digital',
    categoryId: 'estrategia',
    desc: 'Aprenda a analisar o posicionamento, os canais digitais, a comunicação e as principais oportunidades de melhoria de um negócio.',
    duration: '1 hora',
    level: 'Iniciante',
    format: 'Curso introdutório'
  },
  {
    id: 2,
    title: 'Presença Digital Estratégica para Negócios',
    category: 'Estratégia e Presença Digital',
    categoryId: 'estrategia',
    desc: 'Organize o posicionamento, a comunicação, os canais e a estrutura digital da sua empresa com mais clareza e profissionalismo.',
    duration: '6 horas',
    level: 'Iniciante e intermediário',
    format: 'Formação estratégica'
  },
  {
    id: 3,
    title: 'Inteligência Artificial Aplicada ao Marketing',
    category: 'Inteligência Artificial para Negócios',
    categoryId: 'ia',
    desc: 'Utilize ferramentas de inteligência artificial para pesquisar, planejar, criar conteúdos e aumentar a produtividade.',
    duration: '4 horas',
    level: 'Iniciante',
    format: 'Curso prático'
  },
  {
    id: 4,
    title: 'Como Planejar um Site Institucional Profissional',
    category: 'Criação de Sites e Landing Pages',
    categoryId: 'sites',
    desc: 'Entenda como organizar páginas, conteúdos, hierarquia SEO, experiência do usuário, autoridade e conversão.',
    duration: '3 horas',
    level: 'Iniciante',
    format: 'Curso prático'
  },
  {
    id: 5,
    title: 'Instagram Estratégico para Empresas',
    category: 'Redes Sociais e Conteúdo',
    categoryId: 'redes-sociais',
    desc: 'Organize o perfil, os pilares de conteúdo, a comunicação e o posicionamento da sua empresa no Instagram.',
    duration: '4 horas',
    level: 'Iniciante',
    format: 'Curso prático'
  },
  {
    id: 6,
    title: 'Fundamentos do Tráfego Pago',
    category: 'Tráfego Pago',
    categoryId: 'trafego',
    desc: 'Compreenda campanhas, públicos, criativos, orçamento e análise de resultados antes de começar a anunciar.',
    duration: '4 horas',
    level: 'Iniciante',
    format: 'Curso introdutório'
  }
];

// Dados das Trilhas de Aprendizagem
const learningPaths = [
  {
    id: 'trilha-presenca',
    title: 'Presença Digital Profissional',
    desc: 'Construa a estrutura básica e os pilares de autoridade necessários para sua empresa se posicionar no ambiente online.',
    coursesCount: 3,
    level: 'Iniciante',
    topics: ['Diagnóstico de Canais', 'Estruturação de Site', 'Branding Inicial', 'Planejamento de Funil']
  },
  {
    id: 'trilha-empreendedor',
    title: 'Empreendedor Digital',
    desc: 'Domine a gestão de ativos, funis de atração e processos de automação comercial para escalar vendas.',
    coursesCount: 4,
    level: 'Intermediário',
    topics: ['Modelagem de Ofertas', 'WhatsApp Business Pro', 'Ferramentas de Conversão', 'Gestão de Clientes']
  },
  {
    id: 'trilha-ia',
    title: 'Inteligência Artificial para Negócios',
    desc: 'Implemente IA na geração de copys, análises de mercado, automação de leads e atendimento automatizado.',
    coursesCount: 3,
    level: 'Iniciante e Avançado',
    topics: ['Engenharia de Prompts', 'ChatGPT e Claude para Copys', 'Automações Inteligentes', 'IA de Produtividade']
  },
  {
    id: 'trilha-marketing',
    title: 'Marketing e Conversão',
    desc: 'Alinhe a atração por tráfego pago com a retenção de conteúdo estratégico e canais de vendas diretas.',
    coursesCount: 4,
    level: 'Intermediário',
    topics: ['Fundamentos de Tráfego', 'Criativos de Conversão', 'Estratégia de Instagram B2B', 'Gatilhos Mentais']
  },
  {
    id: 'trilha-sites',
    title: 'Criação de Sites',
    desc: 'Aprenda a planejar arquiteturas de informação eficientes com foco absoluto em UI/UX e SEO Técnico.',
    coursesCount: 3,
    level: 'Iniciante e Intermediário',
    topics: ['Planejamento Wireframe', 'SEO on-page', 'Métricas de Conversão', 'Otimização Mobile']
  },
  {
    id: 'trilha-branding',
    title: 'Posicionamento de Marca',
    desc: 'Diferencie seu negócio no mercado, transformando sua identidade visual e copy em um ímã de clientes premium.',
    coursesCount: 3,
    level: 'Avançado',
    topics: ['Branding Corporativo', 'Tom de Voz da Marca', 'Proposta de Valor Claras', 'Diferenciação Competitiva']
  }
];

// Dados de Conteúdos Gratuitos
const freeResources = [
  { title: 'E-books', icon: BookOpen, desc: 'Guias aprofundados sobre estratégias de SEO Local e funis de atração.' },
  { title: 'Checklists', icon: FileCheck, desc: 'Roteiros práticos de auditoria de landing pages e campanhas de anúncios.' },
  { title: 'Planilhas', icon: Table, desc: 'Modelos prontos para precificação, calculadora de ROI e planejamento de mídia.' },
  { title: 'Modelos de briefing', icon: ClipboardList, desc: 'Roteiros de briefing estruturados para alinhar projetos de desenvolvimento de sites.' },
  { title: 'Guias estratégicos', icon: Target, desc: 'Apostilas passo a passo sobre posicionamento de marcas corporativas.' },
  { title: 'Aulas abertas', icon: Video, desc: 'Gravações especiais de análise técnica e mentorias coletivas.' },
  { title: 'Estudos de caso', icon: Database, desc: 'Análise detalhada de funis que faturaram múltiplos dígitos no mercado B2B.' }
];

// Perguntas Frequentes (FAQ)
const academyFaqs = [
  {
    q: 'Os cursos já estão disponíveis?',
    a: 'Os primeiros cursos da Academia Cognição Digital estão em fase de planejamento e produção. Você poderá entrar na lista de interesse para receber as novidades.'
  },
  {
    q: 'Os cursos serão gratuitos?',
    a: 'A Academia poderá disponibilizar conteúdos gratuitos e formações premium. As condições serão apresentadas individualmente em cada curso.'
  },
  {
    q: 'Preciso ser cliente da Cognição Digital?',
    a: 'Não. A Academia será aberta a profissionais, empresas, empreendedores e pessoas interessadas em desenvolver competências digitais.'
  },
  {
    q: 'Os cursos terão certificado?',
    a: 'A possibilidade de certificação será informada na apresentação de cada formação quando os cursos forem lançados.'
  },
  {
    q: 'Poderei assistir pelo celular?',
    a: 'A estrutura da Academia está sendo preparada para funcionar em computadores, tablets e celulares.'
  },
  {
    q: 'Como funcionará a Área do Aluno?',
    a: 'A Área do Aluno será o ambiente reservado para acessar cursos, aulas, materiais e acompanhar o progresso nas formações.'
  },
  {
    q: 'Empresas poderão contratar treinamentos?',
    a: 'Sim. A Cognição Digital poderá desenvolver treinamentos e programas personalizados de acordo com as necessidades de empresas e equipes.'
  },
  {
    q: 'Como receberei as novidades?',
    a: 'Ao entrar na lista de interesse, você poderá receber informações sobre lançamentos, conteúdos e novas formações da Academia.'
  }
];

const Academy = () => {
  // Função para rolagem suave compatível com HashRouter
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // Offset para compensar headers fixos
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  // SEO
  useEffect(() => {
    document.title = 'Academia Cognição Digital | Marketing, IA e Negócios';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Conheça os futuros cursos e conteúdos da Academia Cognição Digital sobre estratégia, marketing digital, inteligência artificial, tecnologia e negócios.');
    }
  }, []);

  // State de busca e filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // State dos Modais
  const [interestModalOpen, setInterestModalOpen] = useState(false);
  const [activeCourseTitle, setActiveCourseTitle] = useState('');
  const [selectedPath, setSelectedPath] = useState(null);

  // Filtragem inteligente de cursos
  const filteredCourses = academyCourses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesArea = !selectedArea || course.categoryId === selectedArea;
    
    return matchesSearch && matchesArea;
  });

  const handleInterestClick = (title) => {
    setActiveCourseTitle(title);
    setInterestModalOpen(true);
  };

  const toggleArea = (id) => {
    if (selectedArea === id) {
      setSelectedArea(null); // Desmarca se clicar de novo
    } else {
      setSelectedArea(id);
    }
  };

  return (
    <div className="min-h-screen bg-cd-navy text-cd-white pt-20">
      
      {/* 4. NAVEGAÇÃO SECUNDÁRIA INTERNA DA ACADEMIA */}
      <div className="sticky top-16 z-40 bg-[#0D1B2A]/90 backdrop-blur-md border-b border-cd-blue/15 hidden md:block">
        <div className="container-cd flex justify-between items-center py-3">
          <nav className="flex items-center gap-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[9px] font-bold uppercase tracking-widest text-cd-white/70 hover:text-cd-gold transition-colors">Início</button>
            <button onClick={() => scrollToSection('areas')} className="text-[9px] font-bold uppercase tracking-widest text-cd-white/70 hover:text-cd-gold transition-colors">Áreas</button>
            <button onClick={() => scrollToSection('cursos')} className="text-[9px] font-bold uppercase tracking-widest text-cd-white/70 hover:text-cd-gold transition-colors">Cursos</button>
            <button onClick={() => scrollToSection('beneficios')} className="text-[9px] font-bold uppercase tracking-widest text-cd-white/70 hover:text-cd-gold transition-colors">Benefícios</button>
            <button onClick={() => scrollToSection('trilhas')} className="text-[9px] font-bold uppercase tracking-widest text-cd-white/70 hover:text-cd-gold transition-colors">Trilhas</button>
            <button onClick={() => scrollToSection('conteudos')} className="text-[9px] font-bold uppercase tracking-widest text-cd-white/70 hover:text-cd-gold transition-colors">Conteúdos</button>
            <button onClick={() => scrollToSection('faq')} className="text-[9px] font-bold uppercase tracking-widest text-cd-white/70 hover:text-cd-gold transition-colors">Dúvidas</button>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/area-do-aluno" className="text-[9px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-lg border border-cd-blue/30 text-cd-white/70 hover:text-cd-white hover:border-cd-gold/40 transition-colors">
              Área do Aluno
            </Link>
            <button onClick={() => scrollToSection('cursos')} className="btn-gold !py-1.5 !px-4 !text-[9px] font-bold uppercase tracking-widest">
              Explorar Cursos
            </button>
          </div>
        </div>
      </div>

      {/* 5. HERO DA ACADEMIA */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-cd-navy border-b border-cd-blue/10">
        {/* Elementos Gráficos e Glow Orbits */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-cd-gold/5 opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-cd-blue/10 opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cd-gold/5 blur-3xl pointer-events-none" />
        
        <div className="container-cd relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="pill-badge mb-6 flex items-center gap-2 justify-center w-fit mx-auto">
              <Sparkles size={12} className="text-cd-gold animate-pulse" />
              ACADEMIA COGNIÇÃO DIGITAL
            </span>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 max-w-4xl mx-auto text-cd-white tracking-tighter leading-tight">
              Conhecimento estratégico para transformar ideias em negócios digitais.
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-cd-gold-light max-w-3xl mx-auto mb-10 font-medium leading-relaxed opacity-90">
              Aprenda sobre estratégia digital, marketing, inteligência artificial, posicionamento, tecnologia, comunicação e desenvolvimento de negócios por meio de conteúdos práticos e aplicáveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-12">
              <button onClick={() => scrollToSection('cursos')} className="btn-gold w-full sm:w-auto text-center !py-3.5 !px-8 !text-[10px] font-bold uppercase tracking-widest justify-center flex items-center gap-2">
                Explorar cursos
              </button>
              <Link to="/area-do-aluno" className="w-full sm:w-auto text-[10px] font-black uppercase tracking-widest py-3.5 px-8 rounded-xl border border-cd-blue/30 text-cd-white/70 hover:text-cd-white hover:border-cd-gold/50 transition-colors flex items-center justify-center gap-2">
                Área do Aluno
              </Link>
            </div>

            {/* AcademySearch */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cd-gold/60" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="O que você deseja aprender?"
                className="w-full bg-[#121E36] border border-cd-blue/20 focus:border-cd-gold/50 rounded-2xl pl-12 pr-4 py-4 text-xs text-cd-white placeholder-cd-white/30 focus:outline-none transition-colors shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. ÁREAS DE CONHECIMENTO */}
      <section id="areas" className="py-20 bg-cd-navy border-b border-cd-blue/10">
        <div className="container-cd">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-cd-white tracking-tight mb-4">
              Explore nossas áreas de conhecimento
            </h2>
            <p className="text-xs sm:text-sm text-cd-gold-light max-w-2xl mx-auto font-medium leading-relaxed opacity-85">
              Conteúdos desenvolvidos para ajudar profissionais, empresas e empreendedores a compreenderem melhor o ambiente digital e tomarem decisões mais estratégicas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {knowledgeAreas.map((area) => {
              const IconComp = area.icon;
              const isSelected = selectedArea === area.id;

              return (
                <div
                  key={area.id}
                  onClick={() => toggleArea(area.id)}
                  className={"group p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between " + (
                    isSelected 
                      ? "bg-[#1B3358]/40 border-cd-gold shadow-[0_0_20px_rgba(201,168,76,0.15)] -translate-y-0.5" 
                      : "bg-[#121E36] border-cd-blue/15 hover:border-cd-gold/40 hover:bg-[#1B3358]/20"
                  )}
                >
                  <div>
                    <div className={"w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors " + (
                      isSelected ? "bg-cd-gold text-cd-navy" : "bg-cd-navy text-cd-gold group-hover:bg-cd-gold/15"
                    )}>
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-xs sm:text-sm font-black text-cd-white tracking-tight mb-2 group-hover:text-cd-gold transition-colors leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-[10px] text-cd-white/60 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <span className="text-[8px] font-black uppercase tracking-wider text-cd-gold-light/60 mt-4 block">
                    Conteúdos em preparação
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 & 9. CURSOS COGNIÇÃO DIGITAL */}
      <section id="cursos" className="py-20 bg-[#121E36]/30 border-b border-cd-blue/10">
        <div className="container-cd">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-cd-white tracking-tight mb-4">
              Cursos para desenvolver competências digitais
            </h2>
            <p className="text-xs sm:text-sm text-cd-gold-light max-w-2xl mx-auto font-medium leading-relaxed opacity-85">
              Formações práticas pensadas para transformar conhecimento em decisões mais claras, profissionais e estratégicas.
            </p>
            {selectedArea && (
              <button 
                onClick={() => setSelectedArea(null)}
                className="mt-4 text-[10px] font-black uppercase tracking-widest text-cd-gold hover:text-cd-white transition-colors"
              >
                Limpar Filtro de Área ×
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <motion.div
                    layout
                    key={course.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-[#121E36] border border-cd-blue/15 hover:border-cd-gold/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div>
                      {/* Badge e Selo */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[8px] font-black uppercase tracking-wider text-cd-gold bg-cd-gold/10 px-2.5 py-1 rounded-full border border-cd-gold/20">
                          {course.category}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-widest text-[#070E1A] bg-cd-gold px-2.5 py-1 rounded-md font-semibold select-none">
                          EM BREVE
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-cd-white mb-3 group-hover:text-cd-gold transition-colors tracking-tight leading-tight">
                        {course.title}
                      </h3>
                      
                      <p className="text-xs text-cd-white/70 leading-relaxed mb-6">
                        {course.desc}
                      </p>
                    </div>

                    <div>
                      {/* Metadados do Curso */}
                      <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-cd-blue/10 mb-6 text-center text-cd-white/60">
                        <div>
                          <span className="block text-[8px] font-bold uppercase tracking-wider text-cd-gold-light/60 mb-0.5">Duração</span>
                          <span className="text-[10px] font-bold text-cd-white">{course.duration}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-bold uppercase tracking-wider text-cd-gold-light/60 mb-0.5">Nível</span>
                          <span className="text-[10px] font-bold text-cd-white truncate block">{course.level}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-bold uppercase tracking-wider text-cd-gold-light/60 mb-0.5">Formato</span>
                          <span className="text-[10px] font-bold text-cd-white truncate block">{course.format}</span>
                        </div>
                      </div>

                      {/* Certificação */}
                      <div className="flex items-center gap-2 mb-6 text-cd-white/70 text-[10px]">
                        <Award size={14} className="text-cd-gold" />
                        <span>Certificado em preparação</span>
                      </div>

                      <button
                        onClick={() => handleInterestClick(course.title)}
                        className="btn-gold w-full justify-center !py-3 !text-[10px] font-black uppercase tracking-widest"
                      >
                        Quero ser avisado
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center text-cd-white/50 text-xs">
                  Nenhum curso em preparação encontrado para os filtros selecionados.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 11. BENEFÍCIOS DA ACADEMIA */}
      <section id="beneficios" className="py-20 bg-cd-navy border-b border-cd-blue/10">
        <div className="container-cd">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-cd-white tracking-tight mb-4">
              Conhecimento para aplicar na prática
            </h2>
            <p className="text-xs sm:text-sm text-cd-gold-light max-w-xl mx-auto font-medium opacity-85">
              Nossa abordagem une teoria essencial e execução direta para apoiar o crescimento de seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Aprenda com estratégia',
                desc: 'Entenda primeiro o cenário, os objetivos e as decisões antes de escolher ferramentas ou iniciar a execução.'
              },
              {
                title: 'Aplique no seu negócio',
                desc: 'Conteúdos pensados para situações reais de empresas, profissionais e empreendedores.'
              },
              {
                title: 'Evolua profissionalmente',
                desc: 'Desenvolva competências relevantes para atuar com mais confiança no ambiente digital.'
              },
              {
                title: 'Aprenda no seu ritmo',
                desc: 'Conteúdos organizados para facilitar a compreensão e a aplicação progressiva do conhecimento.'
              }
            ].map((p, i) => (
              <div key={i} className="bg-[#121E36] border border-cd-blue/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-cd-gold/10 text-cd-gold flex items-center justify-center mb-6">
                    <BookMarked size={18} />
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-cd-white tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs text-cd-white/60 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TRILHAS DE APRENDIZAGEM */}
      <section id="trilhas" className="py-20 bg-[#121E36]/30 border-b border-cd-blue/10">
        <div className="container-cd">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-cd-white tracking-tight mb-4">
              Trilhas para orientar sua evolução
            </h2>
            <p className="text-xs sm:text-sm text-cd-gold-light max-w-2xl mx-auto font-medium opacity-85">
              Sequências de conteúdos organizadas para ajudar o aluno a desenvolver conhecimentos de forma progressiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="group bg-[#121E36] border border-cd-blue/15 hover:border-cd-gold/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[8px] font-black uppercase tracking-wider text-cd-gold bg-cd-gold/10 px-2.5 py-1 rounded-full border border-cd-gold/20">
                      {path.level}
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#070E1A] bg-cd-gold px-2.5 py-1 rounded-md font-semibold select-none">
                      EM PREPARAÇÃO
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-cd-white mb-3 group-hover:text-cd-gold transition-colors tracking-tight leading-tight">
                    {path.title}
                  </h3>
                  
                  <p className="text-xs text-cd-white/70 leading-relaxed mb-6">
                    {path.desc}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] text-cd-white/60 mb-6 flex justify-between border-t border-cd-blue/10 pt-4">
                    <span>Grade prevista:</span>
                    <span className="font-bold text-cd-white">{path.coursesCount} cursos</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedPath(path)}
                    className="w-full text-center text-[10px] font-black uppercase tracking-widest py-3 rounded-xl border border-cd-blue/30 text-cd-white/70 hover:text-cd-white hover:border-cd-gold/50 transition-colors"
                  >
                    Conhecer trilha
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETALHADO DA TRILHA */}
      <AnimatePresence>
        {selectedPath && (
          <div 
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-cd-navy/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-lg bg-[#121E36] border border-cd-blue/30 rounded-[2.5rem] p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              <button 
                onClick={() => setSelectedPath(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-cd-white/60 hover:text-cd-white transition-all focus:outline-none"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <div className="w-10 h-10 bg-cd-gold/10 rounded-xl flex items-center justify-center text-cd-gold mx-auto mb-3">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-cd-white tracking-tight mb-2">
                  Trilha: {selectedPath.title}
                </h3>
                <p className="text-xs text-cd-gold-light opacity-80 max-w-sm mx-auto leading-relaxed">
                  Confira a ementa de conteúdos previstos em preparação para esta formação.
                </p>
              </div>

              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
                {selectedPath.topics.map((topic, i) => (
                  <div key={i} className="p-3 bg-cd-navy/60 rounded-xl border border-cd-blue/15 flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-cd-gold/10 text-cd-gold text-[10px] font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-xs text-cd-white font-medium">{topic}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const title = selectedPath.title;
                  setSelectedPath(null);
                  handleInterestClick("Trilha: " + title);
                }}
                className="btn-gold w-full justify-center !py-3.5 !text-[10px] font-black uppercase tracking-widest"
              >
                Quero ser avisado quando lançar
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* 13. CONTEÚDOS GRATUITOS */}
      <section id="conteudos" className="py-20 bg-cd-navy border-b border-cd-blue/10">
        <div className="container-cd">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-cd-white tracking-tight mb-4">
              Conteúdos para começar agora
            </h2>
            <p className="text-xs sm:text-sm text-cd-gold-light max-w-xl mx-auto font-medium opacity-85">
              Acesse ferramentas gratuitas e materiais de apoio rápido produzidos pela nossa equipe estratégica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {freeResources.map((res, i) => {
              const IconComponent = res.icon;

              return (
                <div
                  key={i}
                  className="bg-[#121E36] border border-cd-blue/15 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-cd-navy text-cd-gold flex items-center justify-center mb-4 border border-cd-blue/10">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="text-xs sm:text-sm font-black text-cd-white tracking-tight mb-2">
                      {res.title}
                    </h3>
                    <p className="text-[10px] text-cd-white/60 leading-relaxed mb-4">
                      {res.desc}
                    </p>
                  </div>

                  <div>
                    <span className="text-[8px] font-black tracking-wider text-cd-gold-light/60 uppercase mb-3 block">
                      Conteúdos em preparação
                    </span>
                    <button
                      onClick={() => handleInterestClick("Material Gratuito: " + res.title)}
                      className="w-full text-center text-[9px] font-black uppercase tracking-wider py-2 rounded-lg border border-cd-gold/20 hover:border-cd-gold/50 text-cd-gold hover:text-cd-white transition-colors"
                    >
                      Quero ser avisado
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. PROVA DE VALOR SEM NÚMEROS FALSOS */}
      <section className="py-16 bg-[#121E36]/30 border-b border-cd-blue/10">
        <div className="container-cd">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Conteúdos práticos', desc: 'Direto ao ponto para aplicação.' },
              { label: 'Aprendizado estratégico', desc: 'Compreensão de objetivos de negócio.' },
              { label: 'Acesso responsivo', desc: 'Aprenda do celular, tablet ou desktop.' },
              { label: 'Formação contínua', desc: 'Constante atualização sobre mercado e IA.' }
            ].map((metric, i) => (
              <div key={i} className="p-4 bg-cd-navy/40 border border-cd-blue/10 rounded-2xl">
                <span className="block text-sm sm:text-base font-black text-cd-white tracking-tight mb-1">{metric.label}</span>
                <span className="block text-[10px] text-cd-gold-light/85 font-medium leading-relaxed">{metric.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. PERGUNTAS FREQUENTES */}
      <section id="faq" className="py-20 bg-cd-navy border-b border-cd-blue/10">
        <div className="container-cd max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-cd-white tracking-tight mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-xs sm:text-sm text-cd-gold-light max-w-xl mx-auto font-medium opacity-85">
              Esclareça suas dúvidas gerais sobre a operação e as futuras formações da nossa Academia.
            </p>
          </div>

          <div className="space-y-4">
            {academyFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div 
                  key={index} 
                  className="bg-[#121E36] border border-cd-blue/15 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 text-xs sm:text-sm font-black text-cd-white hover:text-cd-gold transition-colors focus:ring-2 focus:ring-cd-gold focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={"text-cd-gold shrink-0 transition-transform duration-300 " + (isOpen ? "rotate-180" : "")} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-xs sm:text-sm text-cd-white/70 leading-relaxed border-t border-cd-blue/10 bg-cd-navy/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. CTA FINAL */}
      <section className="py-20 bg-[#121E36]/30">
        <div className="container-cd max-w-3xl text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-cd-white tracking-tight mb-4">
            Comece sua jornada de desenvolvimento digital.
          </h2>
          <p className="text-xs sm:text-sm text-cd-gold-light opacity-80 max-w-lg mx-auto mb-10 leading-relaxed font-medium">
            Conhecimento, estratégia e tecnologia para quem deseja crescer com mais clareza, confiança e profissionalismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleInterestClick('Interesse Geral na Academia')}
              className="btn-gold w-full sm:w-auto justify-center !py-3.5 !px-8 !text-[10px] font-black uppercase tracking-widest"
            >
              Entrar na lista de interesse
            </button>
            <Link
              to="/"
              className="w-full sm:w-auto text-[10px] font-black uppercase tracking-widest py-3.5 px-8 rounded-xl border border-cd-blue/30 text-cd-white/70 hover:text-cd-white hover:border-cd-gold/50 transition-colors flex items-center justify-center gap-2"
            >
              Conhecer a Cognição Digital
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <InterestModal
        isOpen={interestModalOpen}
        onClose={() => setInterestModalOpen(false)}
        courseTitle={activeCourseTitle}
      />
    </div>
  );
};

export default Academy;
