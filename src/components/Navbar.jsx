import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import content from '../data/content.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-5'
      }`}
      style={{ background: scrolled ? 'rgba(13,27,42,0.96)' : 'rgba(13,27,42,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}
    >
      <div className="container-cd flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="https://i.ibb.co/Xrr9wsCZ/marca-cognicao.webp" 
            alt="marca cognicao" 
            className="h-11 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-7 relative">
          {content.navigation.slice(0, 7).map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-1 text-[10px] font-black tracking-widest transition-colors duration-200 ${
                location.pathname === link.path ? 'text-cd-gold' : 'text-cd-white/70 hover:text-cd-white'
              }`}
              style={{letterSpacing:'0.18em'}}
            >
              {link.name.toUpperCase()}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{background:'#C9A84C'}} />
              )}
            </Link>
          ))}

          {/* Dropdown MAIS */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`relative py-1 text-[10px] font-black tracking-widest transition-colors duration-200 flex items-center gap-1 focus:outline-none ${
                location.pathname === '/apresentacao' || location.pathname === '/briefing' || location.pathname === '/area-do-aluno' 
                  ? 'text-cd-gold' 
                  : 'text-cd-white/70 hover:text-cd-white'
              }`}
              style={{letterSpacing:'0.18em'}}
            >
              MAIS
              <svg className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
            </button>
            
            {dropdownOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl border py-2 shadow-2xl backdrop-blur-md z-50 bg-[#0D1B2A]/95 border-cd-gold/25"
              >
                {content.navigation.slice(7, 10).map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 text-[9px] font-black tracking-widest transition-colors hover:text-cd-gold ${
                      location.pathname === link.path ? 'text-cd-gold' : 'text-cd-white/70'
                    }`}
                    style={{letterSpacing:'0.15em'}}
                  >
                    {link.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="/fluxograma"
            className="btn-gold !py-2.5 !px-5 !text-[9px]"
          >
            Mapa de Escala
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-cd-white/80 p-2 hover:text-cd-white transition-colors">
          {isOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 border-t" style={{background:'rgba(13,27,42,0.99)',borderColor:'rgba(201,168,76,0.2)'}}>
          <div className="container-cd py-6 flex flex-col gap-5">
            {content.navigation.map(link => (
              link.name === 'Mapa de Escala'
                ? <a key={link.path} href={link.path} onClick={() => setIsOpen(false)} className="btn-gold w-full justify-center">{link.name}</a>
                : <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}
                    className={`text-[10px] font-black tracking-widest transition-colors ${
                      location.pathname === link.path ? 'text-cd-gold' : 'text-cd-white/70 hover:text-cd-gold'
                    }`}
                    style={{letterSpacing:'0.18em'}}>
                    {link.name.toUpperCase()}
                  </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
