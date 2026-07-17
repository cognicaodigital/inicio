import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InstagramBrowserNotice from './components/InstagramBrowserNotice';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Cases = lazy(() => import('./pages/Cases'));
const CaseDetail = lazy(() => import('./pages/CaseDetail'));
const Diagnostic = lazy(() => import('./pages/Diagnostic'));
const Budget = lazy(() => import('./pages/Budget'));
const Presentation = lazy(() => import('./pages/Presentation'));
const Upgrade = lazy(() => import('./pages/Upgrade'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const Briefing = lazy(() => import('./pages/Briefing'));

const Placeholder = ({ name }) => (
  <div className="min-h-screen pt-32 section-container flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl text-white font-black tracking-wide mb-4">{name}</h1>
    <p className="mt-4 text-slate-400 font-medium">Página em desenvolvimento para o novo layout Premium Dark.</p>
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

function App() {
  return (
    <Router>
      <InstagramBrowserNotice />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-navy overflow-x-hidden text-slate-300">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="h-screen flex flex-col items-center justify-center bg-brand-navy text-brand-electric font-black text-xl tracking-widest animate-pulse">
              CARREGANDO...
            </div>
          }>
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/cases/:id" element={<CaseDetail />} />
                <Route path="/diagnostico" element={<Diagnostic />} />
                <Route path="/orcamento" element={<Budget />} />
                <Route path="/apresentacao" element={<Presentation />} />
                <Route path="/upgrade" element={<Upgrade />} />
                <Route path="/proposta" element={<Placeholder name="Proposta Comercial" />} />
                <Route path="/privacidade" element={<LegalPage type="privacy" />} />
                <Route path="/termos" element={<LegalPage type="terms" />} />
                <Route path="/briefing" element={<Briefing />} />
              </Routes>
            </PageWrapper>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;