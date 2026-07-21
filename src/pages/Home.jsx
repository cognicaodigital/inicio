import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';

const Atuacao = lazy(() => import('../components/Atuacao'));
const Services = lazy(() => import('../components/Services'));
const Method = lazy(() => import('../components/Method'));
const Structure = lazy(() => import('../components/Structure'));
const CTA = lazy(() => import('../components/CTA'));

const Home = () => {
  return (
    <div className="bg-cd-navy min-h-screen">
      <Hero />
      <Suspense fallback={null}>
        <Atuacao />
        <Services />
        <Method />
        <Structure />
        <CTA />
      </Suspense>
    </div>
  );
};

export default Home;
