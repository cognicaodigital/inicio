import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoData from '../data/seoData.json';

const SEOManager = ({ title, description, noindex = false }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Título e Descrição
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
    const cleanPath = location.pathname;
    const canonicalUrl = `${seoData.company.domain}${cleanPath === '/' ? '' : cleanPath}`;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // 3. Robots (Indexabilidade / Noindex)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.content = 'noindex, nofollow';
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

    // 5. Dados Estruturados JSON-LD
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": seoData.company.name,
      "url": seoData.company.domain,
      "logo": `${seoData.company.domain}/logo-og.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": seoData.company.phoneFormatted,
        "contactType": "customer service",
        "email": seoData.company.email,
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://instagram.com/cognicao.digital",
        "https://linkedin.com/in/cognicaodigital"
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": seoData.company.name,
      "url": seoData.company.domain
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": seoData.company.name,
      "image": `${seoData.company.domain}/logo-og.png`,
      "telephone": seoData.company.phoneFormatted,
      "email": seoData.company.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": seoData.company.address.city,
        "addressRegion": seoData.company.address.state,
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": seoData.company.geo.latitude,
        "longitude": seoData.company.geo.longitude
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Trindade"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Goiânia"
        }
      ],
      "url": seoData.company.domain
    };

    let scriptJsonLd = document.getElementById('jsonld-seo');
    if (!scriptJsonLd) {
      scriptJsonLd = document.createElement('script');
      scriptJsonLd.id = 'jsonld-seo';
      scriptJsonLd.type = 'application/ld+json';
      document.head.appendChild(scriptJsonLd);
    }
    scriptJsonLd.innerHTML = JSON.stringify([orgSchema, websiteSchema, localBusinessSchema]);

    return () => {
      // Limpeza opcional se necessário ao desmontar, mas bom manter para crawlers
    };
  }, [title, description, noindex, location]);

  return null;
};

export default SEOManager;
