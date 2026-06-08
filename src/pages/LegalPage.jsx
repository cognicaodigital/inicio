import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyContent = () => (
  <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
    <p>A <strong className="text-brand-navy">Cognição Digittal</strong> valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você interage com nosso ecossistema.</p>
    
    <h3 className="text-xl font-bold text-brand-navy">1. Coleta de Dados</h3>
    <p>Podemos coletar informações básicas para a execução de nossos serviços de Consultoria e Planejamento, incluindo, mas não se limitando a: nome completo, endereço de e-mail, número de telefone (WhatsApp) e o nome/setor da sua empresa fornecidos de forma voluntária.</p>

    <h3 className="text-xl font-bold text-brand-navy">2. Uso das Informações</h3>
    <p>Os dados coletados são utilizados única e exclusivamente para: (a) Prestarmos nosso serviço de estruturação digital e comunicação estratégica; (b) Entrarmos em contato para fechamentos de diagnóstico ou propostas; (c) Melhorarmos continuamente sua experiência de navegação através de cookies anônimos e acompanhamento de métricas.</p>

    <h3 className="text-xl font-bold text-brand-navy">3. Compartilhamento e Exclusão</h3>
    <p>Sob nenhuma circunstância comercializamos seus dados com terceiros. A qualquer momento, você pode nos contatar no e-mail <strong>contato@cognicaodigittal.com</strong> para solicitar a exclusão definitiva ou um relatório das suas informações arquivadas de nossa base de sistemas internos.</p>

    <h3 className="text-xl font-bold text-brand-navy">4. Segurança e Blindagem</h3>
    <p>Nossos sistemas contam com criptografia end-to-end e chancelas de autenticação (SSL Secure protocol). Adotamos as mais rigorosas práticas de segurança do mercado de tecnologia para que seu fluxo de dados corporativos nunca seja interceptado, estando em compatibilidade com as bases da LGPD.</p>
  </div>
);

const TermsContent = () => (
  <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
    <p>Estes Termos de Uso regem o acesso e a utilização dos domínios oficiais e propriedades operadas pela <strong className="text-brand-navy">Cognição Digittal</strong>. Ao acessar nossa plataforma, você concorda legalmente em aderir rigorosamente a estes termos estabelecidos.</p>
    
    <h3 className="text-xl font-bold text-brand-navy">1. Direitos de Propriedade Intelectual</h3>
    <p>Todo o conteúdo contido nesta aplicação (textos informativos, identidade visual, logotipo, arquitetura, design thinking e metodologias - como o Método DNA) constitui patrimônio intelectual exclusivo da Cognição Digittal, sob a total e intransferível proteção das Leis de Direitos Autorais e Propriedade Intelectual brasileiras vinculadas.</p>

    <h3 className="text-xl font-bold text-brand-navy">2. Uso Inadequado</h3>
    <p>É veementemente proibida: a reprodução parcial ou inteiriça, cópia criativa, espelhamento tático, mineração de dados contínua (data scraping) e qualquer forma de engenharia reversa do método de consultoria apresentado neste portal para uso comercial que não tenha autorização documentada expressa por escrito dos desenvolvedores.</p>

    <h3 className="text-xl font-bold text-brand-navy">3. Desempenho e Contratos</h3>
    <p>Os resultados em estruturação, engajamento e tráfego propostos são inteiramente baseados no esforço sinérgico e do mercado da empresa atuante e contratante. Prometemos a melhor arquitetura sistêmica cabível mediante nossos processos robustos, mas lucros em si dependem de múltiplos fatores não operacionais não passíveis de garantias absolutas além do que for oficialmente delimitado aos contratantes em seus anexos redigidos formalmente.</p>

    <h3 className="text-xl font-bold text-brand-navy">4. Foro Responsável</h3>
    <p>Elege-se formalmente o Foro da Comarca de Goiânia (Goiás - Brasil Central), com a expressa e antecipada renúncia de qualquer outro, independentemente de sua privilegiada localização para atuar na resolução irrevogável de quaisquer processos ou imbróglios provenientes da discordância do presente termo de responsabilidade de condutas.</p>
  </div>
);

const LegalPage = ({ type }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Política de Privacidade' : 'Termos de Uso';

  return (
    <div className="pt-32 pb-24 bg-white min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Voltar Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 inline-flex items-center text-xs font-black tracking-widest text-slate-400 hover:text-brand-gold uppercase transition-colors group"
        >
          <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-brand-gold flex items-center justify-center mr-4 transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" /> 
          </div>
          Voltar para a página anterior
        </button>

        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-1 bg-brand-gold rounded-full mb-8"></div>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-navy mb-4 tracking-tight" dangerouslySetInnerHTML={{__html: title}}>
          </h1>
          <p className="text-slate-400 font-black tracking-widest uppercase text-[10px]">
            Última atualização: {new Date().toLocaleDateString('pt-BR')} — Documento Legal e Oficial
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {isPrivacy ? <PrivacyContent /> : <TermsContent />}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
