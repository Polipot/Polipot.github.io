import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import image from '../assets/assets/logo.svg'; // Assurez-vous que le chemin vers l'image est correct.

function Head() {
  const schemaOrgData = {
    "@context": "http://schema.org",
    "@type": "Portfolio",
    "name": "Jules Rouault",
    "image": "",
    "telephone": "0645668009",
    "description": ""
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Kasa</title>
        <script src="https://kit.fontawesome.com/9716f2641e.js" crossorigin="anonymous"></script>

        <meta name="twitter:card" content={image} />
        <meta name="twitter:site" content="https://polipot.github.io" />
        <meta name="twitter:creator" content="Jules Rouault" />
        <meta name="twitter:description" content="..." />
        <meta name="twitter:title" content="Portfolio Jules Rouault" />

        <meta name="og:title" content="Portfolio Jules Rouault" />
        <meta name="og:description" content="..." />
        <meta name="author" content="Jules Rouault" />
        <meta name="og:image" content={image} />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgData)}
        </script>
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;