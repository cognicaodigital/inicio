import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import content from '../data/content.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://i.ibb.co/Xrr9wsCZ/marca-cognicao.webp" 
              alt="Marca Cognição Digital" 
              className="h-8 md:h-10 w-auto object-contain scale-[1.7] origin-left" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-8">
            {content.navigation.map((link) => (
              link.name === 'Mapa de Escala' ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="bg-brand-gold text-brand-navy px-6 py-2.5 rounded-full text-xs font-black tracking-[0.1em] hover:scale-105 transition-transform shadow-lg shadow-brand-gold/20"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link relative group py-2 ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy'}`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button - SEO/Accessibility Optimized */}
          <div className="xl:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-brand-navy p-2"
              aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-50 absolute w-full left-0 shadow-2xl">
          <div className="px-4 py-8 flex flex-col gap-6">
            {content.navigation.map((link) => (
              link.name === 'Mapa de Escala' ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-black tracking-widest transition-colors bg-brand-gold text-brand-navy px-4 py-3 rounded-full text-center"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-black tracking-widest transition-colors ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
