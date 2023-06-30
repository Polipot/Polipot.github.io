import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
            <title>Jules Rouault - Portfolio</title>
            <script src="https://kit.fontawesome.com/9716f2641e.js" crossorigin="anonymous"></script>

            {/* <meta name="twitter:card" content={image} /> */}
            <meta name="twitter:site" content="https://polipot.github.io" />
            <meta name="twitter:creator" content="Jules Rouault" />
            <meta name="twitter:description" content="..." />
            <meta name="twitter:title" content="Portfolio Jules Rouault" />

            <meta name="og:title" content="Portfolio Jules Rouault" />
            <meta name="og:description" content="..." />
            <meta name="author" content="Jules Rouault" />
            {/* <meta name="og:image" content={image} /> */}

            <script type="application/ld+json">
               {JSON.stringify(schemaOrgData)}
            </script>

            <script src="https://kit.fontawesome.com/9716f2641e.js" crossorigin="anonymous"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
         </Helmet>
      </HelmetProvider>
   );
}

export default Head;