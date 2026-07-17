import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import content from '../data/content.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-navy/80 backdrop-blur-md border-b border-white/[0.05] py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Logo className="h-8 md:h-10" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-8">
            {content.navigation.map((link) => (
              link.name === 'Mapa de Escala' ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="btn-primary !px-5 !py-2.5 text-[10px] font-black tracking-[0.1em]"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link relative group py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-brand-electric' : 'text-slate-300 hover:text-white'}`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-electric transform transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white p-2 transition-colors duration-300"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="xl:hidden bg-brand-navy-card/95 backdrop-blur-xl border-t border-white/[0.05] absolute w-full left-0 shadow-2xl transition-all duration-300">
          <div className="px-4 py-8 flex flex-col gap-6">
            {content.navigation.map((link) => (
              link.name === 'Mapa de Escala' ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="btn-primary !py-4 text-center text-[10px] font-black tracking-widest"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-black tracking-widest uppercase text-center py-2 transition-colors ${location.pathname === link.path ? 'text-brand-electric' : 'text-slate-300 hover:text-white'}`}
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