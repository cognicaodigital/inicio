import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ShieldCheck, Instagram, Mail, Phone, Linkedin } from 'lucide-react';
import content from '../data/content.json';

const especialidades = [
  { title: 'Showrooms Digitais Premium', desc: 'Criação de sites de altíssimo padrão focados em conversão.' },
  { title: 'Dominância no Google (GMN)', desc: 'Ranqueamento local avançado para capturar clientes ativos.' },
  { title: 'Arquitetura de Produtos Digitais', desc: 'Montagem completa das engrenagens de vendas e funis.' },
  { title: 'Consultoria de Posicionamento', desc: 'Reposicionamento de marca como autoridade do nicho.' },
  { title: 'Automação & IA Estratégica', desc: 'Robôs de atendimento e fluxos inteligentes de vendas.' },
];

const Footer = () => (
  <footer style={{background:'#08111D', borderTop:'1px solid rgba(201,168,76,0.15)'}}>
    <div className="container-cd pt-20 pb-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 mb-16">

        {/* Col 1 */}
        <div>
          <Link to="/" className="inline-flex items-center group mb-6" aria-label="Cognição Digital Página Inicial">
            <img 
              src="https://i.ibb.co/dsh5FBqM/logotipocd.webp" 
              alt="logotipocd" 
              className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]"
            />
          </Link>
          <p style={{fontSize:'0.825rem',color:'#CBD5E1',lineHeight:'1.8',letterSpacing:'0.01em',marginBottom:'1.5rem'}}>
            Arquitetura e Estruturação de Ecossistemas Digitais de Alta Performance
          </p>
          <div className="flex gap-2.5">
            {[
              [Instagram,'https://instagram.com/cognicao.digital', 'Instagram'],
              [Mail,`mailto:${content.company.contact.email}`, 'E-mail'],
              [Phone,`tel:${(content.company.contact.whatsapp||'').replace(/\D/g,'')}`, 'WhatsApp'],
              [Linkedin,'https://linkedin.com/in/cognicaodigital', 'LinkedIn'],
            ].map(([Icon, href, label], i) => (
              <a key={i} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{background:'rgba(201,168,76,0.1)',border:'1px solid rgba(201,168,76,0.2)',color:'#CBD5E1'}}
                onMouseEnter={e=>{e.currentTarget.style.color='#C9A84C';e.currentTarget.style.borderColor='rgba(201,168,76,0.5)'}}
                onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.6)';e.currentTarget.style.borderColor='rgba(201,168,76,0.2)'}}>
                <Icon size={14}/>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Nav */}
        <div>
          <h4 style={{fontSize:'0.6rem',fontWeight:800,letterSpacing:'0.25em',textTransform:'uppercase',color:'#F5D061',marginBottom:'1.5rem'}}>NAVEGAÇÃO</h4>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'0.9rem'}}>
            {content.navigation.map(link => (
              <li key={link.path}>
                {link.name==='Mapa de Escala'
                  ? <a href={link.path} style={{fontSize:'0.825rem',fontWeight:500,color:'#CBD5E1',textDecoration:'none',letterSpacing:'0.01em',transition:'color 0.3s'}}
                      onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>{link.name}</a>
                  : <Link to={link.path} style={{fontSize:'0.825rem',fontWeight:500,color:'#CBD5E1',textDecoration:'none',letterSpacing:'0.01em',transition:'color 0.3s'}}
                      onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>{link.name}</Link>
                }
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Especialidades */}
        <div>
          <h4 style={{fontSize:'0.6rem',fontWeight:800,letterSpacing:'0.25em',textTransform:'uppercase',color:'#F5D061',marginBottom:'1.5rem'}}>ESPECIALIDADES</h4>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'0.9rem'}}>
            {especialidades.map((item,i) => (
              <li key={i} className="group relative flex items-start gap-2.5" style={{cursor:'help'}}>
                <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'rgba(201,168,76,0.5)',flexShrink:0,marginTop:'7px',transition:'background 0.3s'}}
                  onMouseEnter={e=>e.currentTarget.style.background='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.background='rgba(201,168,76,0.5)'}/>
                <span style={{fontSize:'0.8rem',fontWeight:500,color:'#CBD5E1',lineHeight:'1.5',letterSpacing:'0.01em',transition:'color 0.3s'}}
                  onMouseEnter={e=>e.currentTarget.style.color='#F5E6C0'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
                  {item.title}
                </span>

                {/* Floating Speech-Bubble Tooltip on Hover */}
                <div className="absolute top-full left-0 mt-2 w-64 p-4 rounded-xl border opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-[100] bg-[#121E36] border-cd-blue/30 shadow-2xl text-left">
                  <p className="text-[11px] text-cd-white/80 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-full left-4 w-2 h-2 bg-[#121E36] border-l border-t border-cd-blue/30 rotate-45 translate-y-[5px]" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Academia */}
        <div>
          <h4 style={{fontSize:'0.6rem',fontWeight:800,letterSpacing:'0.25em',textTransform:'uppercase',color:'#F5D061',marginBottom:'1.5rem'}}>ACADEMIA</h4>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'0.9rem'}}>
            <li>
              <Link to="/academia" style={{fontSize:'0.825rem',fontWeight:500,color:'#CBD5E1',textDecoration:'none',letterSpacing:'0.01em',transition:'color 0.3s'}}
                onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Academia Cognição Digital</Link>
            </li>
            <li>
              <Link to="/academia#cursos" style={{fontSize:'0.825rem',fontWeight:500,color:'#CBD5E1',textDecoration:'none',letterSpacing:'0.01em',transition:'color 0.3s'}}
                onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Cursos</Link>
            </li>
            <li>
              <Link to="/academia#trilhas" style={{fontSize:'0.825rem',fontWeight:500,color:'#CBD5E1',textDecoration:'none',letterSpacing:'0.01em',transition:'color 0.3s'}}
                onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Trilhas</Link>
            </li>
            <li>
              <Link to="/academia#conteudos" style={{fontSize:'0.825rem',fontWeight:500,color:'#CBD5E1',textDecoration:'none',letterSpacing:'0.01em',transition:'color 0.3s'}}
                onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Conteúdos</Link>
            </li>
            <li>
              <Link to="/area-do-aluno" style={{fontSize:'0.825rem',fontWeight:500,color:'#CBD5E1',textDecoration:'none',letterSpacing:'0.01em',transition:'color 0.3s'}}
                onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Área do Aluno</Link>
            </li>
          </ul>
        </div>

        {/* Col 5 — Info */}
        <div>
          <h4 style={{fontSize:'0.6rem',fontWeight:800,letterSpacing:'0.25em',textTransform:'uppercase',color:'#F5D061',marginBottom:'1.5rem'}}>INFORMAÇÕES</h4>
          <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
            <div style={{display:'flex',gap:'0.75rem'}}>
              <Clock size={15} color="#C9A84C" style={{flexShrink:0,marginTop:'2px'}}/>
              <div>
                <div style={{fontSize:'0.6rem',fontWeight:800,letterSpacing:'0.2em',textTransform:'uppercase',color:'#FFFFFF',marginBottom:'0.3rem'}}>Horário</div>
                <div style={{fontSize:'0.8rem',color:'#CBD5E1',lineHeight:'1.7',letterSpacing:'0.01em'}}>Seg a Sex: 10h às 16h<br/>(Sáb, Dom e Fer: Fechado)</div>
              </div>
            </div>
            <div style={{display:'flex',gap:'0.75rem'}}>
              <MapPin size={15} color="#C9A84C" style={{flexShrink:0,marginTop:'2px'}}/>
              <div>
                <div style={{fontSize:'0.6rem',fontWeight:800,letterSpacing:'0.2em',textTransform:'uppercase',color:'#FFFFFF',marginBottom:'0.3rem'}}>Localização</div>
                <div style={{fontSize:'0.8rem',color:'#CBD5E1',lineHeight:'1.7',letterSpacing:'0.01em'}}>Goiânia - GO<br/>(Atendimento Nacional)</div>
              </div>
            </div>
            <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
              {/* DNA ESTRATÉGICO Badge */}
              <div className="group relative cursor-help" style={{display:'inline-flex',alignItems:'center',gap:'0.35rem',fontSize:'0.55rem',fontWeight:800,letterSpacing:'0.15em',textTransform:'uppercase',padding:'0.35rem 0.85rem',borderRadius:'999px',background:'rgba(201,168,76,0.08)',border:'1px solid rgba(201,168,76,0.2)',color:'#F5D061'}}>
                DNA ESTRATÉGICO

                {/* Tooltip */}
                <div className="absolute bottom-full left-0 mb-2.5 w-64 p-4 rounded-xl border opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-[100] bg-[#121E36] border-cd-blue/30 shadow-2xl text-left normal-case tracking-normal">
                  <p className="text-[11px] text-cd-white/80 leading-relaxed font-medium">
                    Nossa metodologia de desenvolvimento exclusiva focada em alinhar design premium de conversão, tecnologia moderna e psicologia do consumo.
                  </p>
                  <div className="absolute top-full left-6 w-2 h-2 bg-[#121E36] border-r border-b border-cd-blue/30 rotate-45 -translate-y-1" />
                </div>
              </div>

              {/* SSL SECURE Badge */}
              <div className="group relative cursor-help" style={{display:'inline-flex',alignItems:'center',gap:'0.35rem',fontSize:'0.55rem',fontWeight:800,letterSpacing:'0.15em',textTransform:'uppercase',padding:'0.35rem 0.85rem',borderRadius:'999px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',color:'#94A3B8'}}>
                SSL SECURE

                {/* Tooltip */}
                <div className="absolute bottom-full left-0 mb-2.5 w-64 p-4 rounded-xl border opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-[100] bg-[#121E36] border-cd-blue/30 shadow-2xl text-left normal-case tracking-normal">
                  <p className="text-[11px] text-cd-white/80 leading-relaxed font-medium">
                    Certificado de segurança que garante a criptografia de todos os dados trafegados no site, assegurando navegação 100% protegida.
                  </p>
                  <div className="absolute top-full left-6 w-2 h-2 bg-[#121E36] border-r border-b border-cd-blue/30 rotate-45 -translate-y-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{paddingTop:'1.5rem',borderTop:'1px solid rgba(255,255,255,0.08)',display:'flex',flexWrap:'wrap',gap:'1rem',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{fontSize:'0.6rem',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:'#94A3B8'}}>
          © {new Date().getFullYear()} COGNIÇÃO DIGITAL. TODOS OS DIREITOS RESERVADOS.
          {' '}|{' '}
          <Link to="/privacidade" style={{color:'#94A3B8',textDecoration:'none',transition:'color 0.3s'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.4)'}>Política de Privacidade</Link>
          {' '}|{' '}
          <Link to="/termos" style={{color:'#94A3B8',textDecoration:'none',transition:'color 0.3s'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.4)'}>Termos de Uso</Link>
        </div>
        <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
          <span style={{fontSize:'0.6rem',fontWeight:800,letterSpacing:'0.2em',textTransform:'uppercase',color:'#F5D061'}}>ATENDIMENTO NACIONAL</span>
          <span style={{fontSize:'0.6rem',fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'#94A3B8'}}>CNPJ: 42.457.834/0001-70</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
