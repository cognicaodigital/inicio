import React from 'react';
import Hero from '../components/Hero';
import Method from '../components/Method';
import Services from '../components/Services';
import Atuacao from '../components/Atuacao';
import Structure from '../components/Structure';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="bg-cd-navy min-h-screen">
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
