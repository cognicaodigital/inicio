import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Lock, 
  Unlock, 
  User, 
  Mail, 
  Phone, 
  Key, 
  LogOut, 
  Sparkles, 
  ArrowLeft, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  GraduationCap
} from 'lucide-react';
import InterestModal from '../components/InterestModal';

const StudentArea = () => {
  const navigate = useNavigate();

  // SEO
  useEffect(() => {
    document.title = 'Área do Aluno | Academia Cognição Digital';
  }, []);

  // States de Login / Cadastro
  const [activeTab, setActiveTab] = useState('login'); // 'login' ou 'cadastro'
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');

  // Máscara de WhatsApp idêntica à do diagnóstico
  const maskWhatsApp = (value) => {
    let v = value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    
    if (v.length > 10) {
      return `(${v.slice(0, 2)}) ${v.slice(2, 3)}.${v.slice(3, 7)}-${v.slice(7)}`;
    } else if (v.length > 6) {
      return `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
    } else if (v.length > 2) {
      return `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      return `(${v}`;
    }
    return v;
  };

  const handlePhoneChange = (e) => {
    setWhatsapp(maskWhatsApp(e.target.value));
  };
  const [consent, setConsent] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  // User logado
  const [currentUser, setCurrentUser] = useState(null);
  
  // Modal de Aviso Geral
  const [interestModalOpen, setInterestModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  // Carrega sessão existente
  useEffect(() => {
    const user = localStorage.getItem('cd_logged_in_user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    setErro('');
    setSucesso('');

    if (!nome.trim() || !email.trim() || !whatsapp.trim() || !password.trim()) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    if (!consent) {
      setErro('Você precisa aceitar os termos de recebimento de comunicações.');
      return;
    }

    const emailRegex = /^[^s@]+@[^s@]+\.[^s@]+$/;
    if (!emailRegex.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      const existingUsers = localStorage.getItem('cd_registered_users');
      const usersList = existingUsers ? JSON.parse(existingUsers) : [];

      // Verifica duplicidade de e-mail
      if (usersList.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        setErro('Este e-mail já está cadastrado.');
        return;
      }

      // Cria perfil
      const newUser = {
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        whatsapp: whatsapp.trim(),
        password: password.trim(), // Armazenamento simples local
        createdAt: new Date().toISOString()
      };

      usersList.push(newUser);
      localStorage.setItem('cd_registered_users', JSON.stringify(usersList));
      
      // Auto Login
      localStorage.setItem('cd_logged_in_user', JSON.stringify(newUser));
      
      // Salva o lead geral da academia automaticamente
      const existingInterests = localStorage.getItem('cd_academia_interesses');
      const interestsList = existingInterests ? JSON.parse(existingInterests) : [];
      interestsList.push({
        nome: newUser.nome,
        email: newUser.email,
        whatsapp: newUser.whatsapp,
        curso: 'Cadastro Geral de Aluno',
        data: newUser.createdAt
      });
      localStorage.setItem('cd_academia_interesses', JSON.stringify(interestsList));

      setCurrentUser(newUser);
      setSucesso('Conta criada com sucesso!');
    } catch (e) {
      setErro('Erro ao registrar sua conta localmente.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErro('');
    setSucesso('');

    if (!email.trim() || !password.trim()) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const existingUsers = localStorage.getItem('cd_registered_users');
      const usersList = existingUsers ? JSON.parse(existingUsers) : [];

      const user = usersList.find(u => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password.trim());

      if (user) {
        localStorage.setItem('cd_logged_in_user', JSON.stringify(user));
        setCurrentUser(user);
      } else {
        setErro('E-mail ou senha incorretos.');
      }
    } catch (e) {
      setErro('Erro ao processar o login.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('cd_logged_in_user');
    setCurrentUser(null);
    setEmail('');
    setPassword('');
  };

  const handleCourseNotify = (title) => {
    setSelectedCourse(title);
    setInterestModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-cd-navy text-cd-white pt-32 md:pt-40 pb-16 relative overflow-hidden">
      {/* Background Orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-cd-gold/5 opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cd-blue/10 opacity-60 pointer-events-none" />

      {/* DASHBOARD DO ALUNO LOGADO */}
      {currentUser ? (
        <div className="container-cd max-w-6xl relative z-10 px-4">
          
          {/* Header Dashboard */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-cd-blue/15">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-cd-gold bg-cd-gold/10 px-3 py-1 rounded-full border border-cd-gold/20">
                AMBIENTE DE APRENDIZADO
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-cd-white tracking-tight mt-2.5">
                Olá, {currentUser.nome}!
              </h1>
              <p className="text-xs text-cd-gold-light opacity-80 mt-1">
                Acompanhe seu progresso e explore os cursos estratégicos.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/academia"
                className="text-[9px] font-black uppercase tracking-widest py-2.5 px-5 rounded-xl border border-cd-blue/30 text-cd-white/70 hover:text-cd-white hover:border-cd-gold/50 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft size={14} />
                Voltar à Academia
              </Link>
              <button
                onClick={handleLogout}
                className="text-[9px] font-black uppercase tracking-widest py-2.5 px-5 rounded-xl bg-red-950/30 border border-red-500/20 text-red-300 hover:text-red-100 hover:bg-red-900/30 transition-all flex items-center gap-1.5"
              >
                <LogOut size={14} />
                Sair da Conta
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Sidebar do Perfil */}
            <div className="space-y-6">
              <div className="bg-[#121E36] border border-cd-blue/15 rounded-3xl p-6 sm:p-8">
                <h3 className="text-sm font-black text-cd-gold uppercase tracking-wider mb-6 pb-2 border-b border-cd-blue/10 flex items-center gap-2">
                  <User size={16} />
                  Meu Perfil
                </h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="block text-[8px] font-bold text-cd-gold-light/60 uppercase tracking-widest">E-mail</span>
                    <span className="font-semibold text-cd-white">{currentUser.email}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold text-cd-gold-light/60 uppercase tracking-widest">WhatsApp</span>
                    <span className="font-semibold text-cd-white">{currentUser.whatsapp}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold text-cd-gold-light/60 uppercase tracking-widest">Membro desde</span>
                    <span className="font-semibold text-cd-white">{new Date(currentUser.createdAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </div>

              {/* Informações Qualitativas */}
              <div className="bg-[#121E36] border border-cd-blue/15 rounded-3xl p-6 sm:p-8">
                <h3 className="text-sm font-black text-cd-gold uppercase tracking-wider mb-4 pb-2 border-b border-cd-blue/10 flex items-center gap-2">
                  <Award size={16} />
                  Meus Certificados
                </h3>
                <p className="text-[11px] text-cd-white/60 leading-relaxed">
                  Nenhum certificado emitido ainda. Complete os próximos cursos de capacitação estratégica para gerar seus documentos oficiais.
                </p>
              </div>
            </div>

            {/* Listagem de Cursos & Progresso */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#121E36] border border-cd-blue/15 rounded-3xl p-6 sm:p-8">
                <h3 className="text-base font-black text-cd-white tracking-tight mb-6 flex items-center gap-2">
                  <GraduationCap size={20} className="text-cd-gold" />
                  Cursos Disponibilizados em Breve
                </h3>

                <div className="space-y-4">
                  {[
                    { title: 'Diagnóstico da Presença Digital em 7 Passos', duration: '1h', status: 'Em produção' },
                    { title: 'Presença Digital Estratégica para Negócios', duration: '6h', status: 'Planejamento' },
                    { title: 'Inteligência Artificial Aplicada ao Marketing', duration: '4h', status: 'Em produção' },
                    { title: 'Como Planejar um Site Institucional Profissional', duration: '3h', status: 'Roteirização' },
                    { title: 'Instagram Estratégico para Empresas', duration: '4h', status: 'Planejamento' },
                    { title: 'Fundamentos do Tráfego Pago', duration: '4h', status: 'Roteirização' }
                  ].map((c, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-2xl bg-cd-navy/50 border border-cd-blue/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-cd-gold/30 transition-colors"
                    >
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-cd-white leading-tight">
                          {c.title}
                        </h4>
                        <div className="flex items-center gap-4 mt-2 text-[10px] text-cd-white/60">
                          <span className="flex items-center gap-1">
                            <Clock size={10} className="text-cd-gold" />
                            {c.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Sparkles size={10} className="text-cd-gold" />
                            {c.status}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCourseNotify(c.title)}
                        className="text-[9px] font-black uppercase tracking-widest py-2 px-4 rounded-lg bg-cd-gold/10 hover:bg-cd-gold border border-cd-gold/20 text-cd-gold hover:text-cd-navy transition-all shrink-0 w-full sm:w-auto text-center"
                      >
                        Quero ser avisado
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* FORMULÁRIO DE LOGIN E CADASTRO */
        <div className="container-cd max-w-lg relative z-10 px-4">
          
          {/* Brand Header */}
          <div className="flex items-center justify-center mb-8 group">
            <img 
              src="https://i.ibb.co/dsh5FBqM/logotipocd.webp" 
              alt="marca cognicao" 
              className="h-20 md:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]"
            />
          </div>

          <div className="bg-[#121E36] border border-cd-blue/20 rounded-[3rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Abas */}
            <div className="flex bg-cd-navy/60 border border-cd-blue/10 rounded-2xl p-1 mb-8">
              <button
                onClick={() => { setActiveTab('login'); setErro(''); }}
                className={"flex-1 text-center py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all " + (
                  activeTab === 'login' ? "bg-cd-gold text-cd-navy shadow-sm" : "text-cd-white/60 hover:text-cd-white"
                )}
              >
                Entrar
              </button>
              <button
                onClick={() => { setActiveTab('cadastro'); setErro(''); }}
                className={"flex-1 text-center py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all " + (
                  activeTab === 'cadastro' ? "bg-cd-gold text-cd-navy shadow-sm" : "text-cd-white/60 hover:text-cd-white"
                )}
              >
                Cadastrar-se
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-10 h-10 bg-cd-gold/10 rounded-xl flex items-center justify-center text-cd-gold mx-auto mb-3">
                {activeTab === 'login' ? <Lock size={18} /> : <Unlock size={18} />}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-cd-white tracking-tight mb-2">
                {activeTab === 'login' ? 'Área do Aluno' : 'Criar Conta de Acesso'}
              </h2>
              <p className="text-[11px] text-cd-gold-light opacity-80 leading-relaxed max-w-xs mx-auto">
                {activeTab === 'login' 
                  ? 'Insira seus dados cadastrados para acessar o showroom de aprendizado.'
                  : 'Preencha os campos abaixo para criar sua credencial de pré-lançamento.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={activeTab === 'login' ? handleLogin : handleRegister} className="space-y-4">
              {erro && (
                <div className="p-3 text-[11px] font-bold text-red-400 bg-red-950/40 border border-red-500/20 rounded-xl text-center flex items-center justify-center gap-2">
                  <AlertCircle size={14} />
                  {erro}
                </div>
              )}
              {sucesso && (
                <div className="p-3 text-[11px] font-bold text-green-400 bg-green-950/40 border border-green-500/20 rounded-xl text-center flex items-center justify-center gap-2">
                  <CheckCircle2 size={14} />
                  {sucesso}
                </div>
              )}

              {activeTab === 'cadastro' && (
                <div>
                  <label htmlFor="auth-name" className="block text-[8px] font-black uppercase tracking-widest text-cd-gold-light mb-1.5">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cd-white/30" size={14} />
                    <input
                      id="auth-name"
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full bg-cd-navy/60 border border-cd-blue/20 focus:border-cd-gold/50 rounded-xl pl-10 pr-4 py-3 text-xs text-cd-white placeholder-cd-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="auth-email" className="block text-[8px] font-black uppercase tracking-widest text-cd-gold-light mb-1.5">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cd-white/30" size={14} />
                  <input
                    id="auth-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full bg-cd-navy/60 border border-cd-blue/20 focus:border-cd-gold/50 rounded-xl pl-10 pr-4 py-3 text-xs text-cd-white placeholder-cd-white/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {activeTab === 'cadastro' && (
                <div>
                  <label htmlFor="auth-phone" className="block text-[8px] font-black uppercase tracking-widest text-cd-gold-light mb-1.5">
                    WhatsApp (com DDD)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cd-white/30" size={14} />
                    <input
                      id="auth-phone"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={handlePhoneChange}
                      placeholder="(00) 90000-0000"
                      className="w-full bg-cd-navy/60 border border-cd-blue/20 focus:border-cd-gold/50 rounded-xl pl-10 pr-4 py-3 text-xs text-cd-white placeholder-cd-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="auth-password" className="block text-[8px] font-black uppercase tracking-widest text-cd-gold-light mb-1.5">
                  Senha
                </label>
                <div className="relative">
                  <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cd-white/30" size={14} />
                  <input
                    id="auth-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Sua senha"
                    className="w-full bg-cd-navy/60 border border-cd-blue/20 focus:border-cd-gold/50 rounded-xl pl-10 pr-4 py-3 text-xs text-cd-white placeholder-cd-white/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {activeTab === 'cadastro' && (
                <div className="flex items-start gap-3 pt-2">
                  <input
                    id="auth-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-cd-blue/30 text-cd-gold bg-cd-navy focus:ring-cd-gold"
                  />
                  <label htmlFor="auth-consent" className="text-[9px] text-cd-white/70 leading-relaxed cursor-pointer select-none">
                    Concordo em receber informações, conteúdos e comunicações da <span className="text-cd-gold font-bold">Cognição Digital</span>.
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="btn-gold w-full justify-center !py-3.5 !text-[10px] font-black uppercase tracking-widest mt-6"
              >
                {activeTab === 'login' ? 'Entrar no Painel' : 'Criar minha Conta'}
              </button>
            </form>

            {/* Back button */}
            <div className="mt-8 pt-6 border-t border-cd-blue/10 flex justify-between items-center">
              <Link
                to="/academia"
                className="text-[9px] font-black uppercase tracking-widest text-cd-white/50 hover:text-cd-gold transition-colors flex items-center gap-1"
              >
                <ArrowLeft size={12} />
                Voltar à Academia
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Reutiliza o InterestModal */}
      <InterestModal
        isOpen={interestModalOpen}
        onClose={() => setInterestModalOpen(false)}
        courseTitle={selectedCourse}
      />
    </div>
  );
};

export default StudentArea;
