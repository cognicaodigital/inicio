import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoData from '../data/seoData.json';

const SEOManager = ({ title, description, noindex = false }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Título e Descrição da aba
    const baseTitle = seoData.company.name;
    const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | ${seoData.company.posicionamento}`;
    const fullDesc = description || seoData.company.slogan;
    
    document.title = fullTitle;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = fullDesc;

    // 2. URL Canônica
    const canonicalUrl = `${seoData.company.domain}${pathname === '/' ? '' : pathname}`;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // 3. Robots (Indexabilidade / Noindex dinâmico)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.content = typeof noindex === 'string' ? noindex : 'noindex, nofollow';
    } else {
      if (metaRobots) {
        metaRobots.remove();
      }
    }

    // 4. Open Graph & Twitter Metadados
    const shareImg = `${seoData.company.domain}/logo-og.png`;

    const setMetaProperty = (property, value, isName = false) => {
      const selector = isName ? `meta[name="${property}"]` : `meta[property="${property}"]`;
      let metaEl = document.querySelector(selector);
      if (!metaEl) {
        metaEl = document.createElement('meta');
        if (isName) {
          metaEl.name = property;
        } else {
          metaEl.property = property;
        }
        document.head.appendChild(metaEl);
      }
      metaEl.content = value;
    };

    setMetaProperty('og:title', fullTitle);
    setMetaProperty('og:description', fullDesc);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:image', shareImg);
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:locale', 'pt_BR');
    setMetaProperty('twitter:card', 'summary_large_image', true);
    setMetaProperty('twitter:title', fullTitle, true);
    setMetaProperty('twitter:description', fullDesc, true);
    setMetaProperty('twitter:image', shareImg, true);

    // 5. Google Analytics Otimizado e Seguro
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const isValidGA = gaId && gaId.startsWith('G-') && !gaId.includes('PLACEHOLDER');

    if (isValidGA) {
      // Carregar gtag.js se não existir
      let gtagScript = document.getElementById('gtag-script');
      if (!gtagScript) {
        gtagScript = document.createElement('script');
        gtagScript.id = 'gtag-script';
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(gtagScript);
      }

      // Inicializar window.dataLayer e window.gtag
      if (!window.dataLayer) {
        window.dataLayer = [];
      }
      if (!window.gtag) {
        window.gtag = function() { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
      }

      // Registrar a visualização de página dinamicamente no SPA
      window.gtag('config', gaId, { page_path: pathname });
    }

    // 6. Dados Estruturados JSON-LD (Apenas Organization e WebSite conectados por @id)
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${seoData.company.domain}/#organization`,
      "name": seoData.company.name,
      "legalName": seoData.company.name,
      "alternateName": "CD Strategy",
      "url": seoData.company.domain,
      "logo": `${seoData.company.domain}/logo-og.png`,
      "description": seoData.company.description,
      "email": seoData.company.email,
      "telephone": seoData.company.phoneFormatted,
      "foundingDate": "2024-01-15",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": seoData.company.phoneFormatted,
        "contactType": "customer service",
        "email": seoData.company.email,
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Trindade–GO" },
        { "@type": "AdministrativeArea", "name": "Goiânia–GO" },
        { "@type": "AdministrativeArea", "name": "Região Metropolitana de Goiânia" },
        { "@type": "AdministrativeArea", "name": "Brasil" }
      ],
      "sameAs": [
        "https://instagram.com/cognicao.digital",
        "https://linkedin.com/in/cognicaodigital"
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${seoData.company.domain}/#website`,
      "name": seoData.company.name,
      "url": seoData.company.domain,
      "publisher": {
        "@id": `${seoData.company.domain}/#organization`
      }
    };

    let scriptJsonLd = document.getElementById('jsonld-seo');
    if (!scriptJsonLd) {
      scriptJsonLd = document.createElement('script');
      scriptJsonLd.id = 'jsonld-seo';
      scriptJsonLd.type = 'application/ld+json';
      document.head.appendChild(scriptJsonLd);
    }
    scriptJsonLd.innerHTML = JSON.stringify([orgSchema, websiteSchema]);

  }, [title, description, noindex, pathname]);

  return null;
};

export default SEOManager;
