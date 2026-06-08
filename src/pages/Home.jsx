import React from 'react';
import Hero from '../components/Hero';
import Method from '../components/Method';
import Services from '../components/Services';
import Atuacao from '../components/Atuacao';
import Structure from '../components/Structure';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Imagem 1: Hero */}
      <Hero />

      {/* Nossa Atuação e Serviços */}
      <Atuacao />
      <Services />

      {/* Método de Inteligência Digital */}
      <Method />

      {/* Seção Negócios que Estruturamos (Fundo Navy) */}
      <Structure />

      {/* Imagens 6 & 7: CTA Final */}
      <CTA />
    </div>
  );
};

export default Home;
