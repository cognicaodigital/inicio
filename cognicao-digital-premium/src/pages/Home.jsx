import React from 'react';
import Hero from '../components/Hero';
import Atuacao from '../components/Atuacao';
import Services from '../components/Services';
import Method from '../components/Method';
import Structure from '../components/Structure';
import CTA from '../components/CTA';
import { usePageSEO } from '../utils/seo';

const Home = () => {
  usePageSEO('Início', 'Transforme sua operação em uma máquina de vendas digital com a Cognição Digital. Arquitetura de negócios de alta performance.');

  return (
    <div className="bg-brand-navy min-h-screen">
      <Hero />
      <Atuacao />
      <Services />
      <Method />
      <Structure />
      <CTA />
    </div>
  );
};

export default Home;