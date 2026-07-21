import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import SEOManager from './components/SEOManager';
import Footer from './components/Footer';
import InstagramBrowserNotice from './components/InstagramBrowserNotice';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Cases = lazy(() => import('./pages/Cases'));
const CaseDetail = lazy(() => import('./pages/CaseDetail'));
const CasePreview = lazy(() => import('./pages/CasePreview'));
const TemplatesCatalog = lazy(() => import('./pages/TemplatesCatalog'));
const Diagnostic = lazy(() => import('./pages/Diagnostic'));
const Budget = lazy(() => import('./pages/Budget'));
const Presentation = lazy(() => import('./pages/Presentation'));
const Upgrade = lazy(() => import('./pages/Upgrade'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const Briefing = lazy(() => import('./pages/Briefing'));
const Academy = lazy(() => import('./pages/Academy'));
const StudentArea = lazy(() => import('./pages/StudentArea'));

const Placeholder = ({ name }) => (
  <div className="min-h-screen pt-32 container-cd bg-cd-navy">
    <h1 className="text-4xl text-cd-gold font-black">{name}</h1>
    <p className="mt-4 text-cd-gold-light opacity-80 font-medium">Página em desenvolvimento para o novo layout "Midnight Executive".</p>
  </div>
);

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function AppContent() {
  const location = useLocation();
  const isPreview = location.pathname === '/cases/preview';
  const isPresentation = location.pathname === '/apresentacao';

  return (
    <div className="flex flex-col min-h-screen bg-cd-navy overflow-x-hidden">
      {!isPreview && <Navbar />}
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-cd-navy text-cd-gold font-black">Carregando...</div>}>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<><SEOManager /><Home /></>} />
              <Route path="/sobre" element={<><SEOManager title="Quem Somos" description="Conheça a Cognição Digital, consultoria de marketing digital focada em estratégia antes da execução." /><About /></>} />
              <Route path="/servicos" element={<><SEOManager title="Nossos Serviços" description="Criação de sites institucionais, landing pages premium, SEO local e automação inteligente." /><Services /></>} />
              <Route path="/cases" element={<><SEOManager title="Casos de Sucesso" description="Veja os resultados reais alcançados pelos nossos clientes através de ecossistemas digitais." /><Cases /></>} />
              <Route path="/cases/:id" element={<><SEOManager title="Detalhes do Caso" description="Análise profunda e resultados obtidos neste caso de sucesso." /><CaseDetail /></>} />
              <Route path="/cases/preview" element={<><SEOManager title="Visualização de Layout" description="Visualizador interativo de modelo de site em tamanho real." noindex="noindex, nofollow" /><CasePreview /></>} />
              <Route path="/cases/templates" element={<><SEOManager title="Biblioteca de Modelos" description="Explore nossa biblioteca interativa com layouts profissionais construídos sob medida." /><TemplatesCatalog /></>} />
              <Route path="/diagnostico" element={<><SEOManager title="Diagnóstico de Presença Digital" description="Faça uma análise gratuita do posicionamento digital da sua empresa em poucos minutos." /><Diagnostic /></>} />
              <Route path="/orcamento" element={<><SEOManager title="Solicitar Orçamento" description="Peça uma proposta personalizada para estruturação do seu projeto digital premium." /><Budget /></>} />
              <Route path="/apresentacao" element={<><SEOManager title="Apresentação Comercial" description="Apresentação institucional da consultoria estratégica Cognição Digital." noindex="noindex, nofollow" /><Presentation /></>} />
              <Route path="/upgrade" element={<><SEOManager title="Upgrade Digital" description="Acelere o crescimento de sua empresa migrando para a máquina de vendas premium." noindex="noindex, nofollow" /><Upgrade /></>} />
              <Route path="/proposta" element={<><SEOManager title="Proposta" noindex="noindex, nofollow" /><Placeholder name="Proposta" /></>} />
              <Route path="/privacidade" element={<><SEOManager title="Política de Privacidade" description="Termos de privacidade e proteção de dados da Cognição Digital." noindex="noindex, follow" /><LegalPage type="privacy" /></>} />
              <Route path="/termos" element={<><SEOManager title="Termos de Uso" description="Termos de uso do ecossistema digital da Cognição Digital." noindex="noindex, follow" /><LegalPage type="terms" /></>} />
              <Route path="/briefing" element={<><SEOManager title="Briefing Online" description="Envie as especificações técnicas e objetivos comerciais do seu novo projeto." /><Briefing /></>} />
              <Route path="/academia" element={<><SEOManager title="Academia Cognição" description="Conhecimento estratégico para negócios digitais. Cursos, trilhas e materiais sobre marketing e tecnologia." /><Academy /></>} />
              <Route path="/area-do-aluno" element={<><SEOManager title="Área do Aluno" description="Acesse seu painel de aprendizado da Academia Cognição Digital." noindex="noindex, nofollow" /><StudentArea /></>} />
            </Routes>
          </PageWrapper>
        </Suspense>
      </main>
      {!isPreview && !isPresentation && <Footer />}
      {!isPreview && <CookieBanner />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <InstagramBrowserNotice />
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
