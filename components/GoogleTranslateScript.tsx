// components/GoogleTranslateScript.tsx
"use client"

import React, { useEffect } from 'react';

const GoogleTranslateScript: React.FC = () => {
  useEffect(() => {
    // Check if the script has already been added
    if (document.getElementById('google-translate-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.type = 'text/javascript';
    script.innerHTML = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      }
    `;

    const translateScript = document.createElement('script');
    translateScript.type = 'text/javascript';
    translateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    translateScript.async = true;

    document.head.appendChild(script);
    document.head.appendChild(translateScript);

    return () => {
        // Cleanup when the component is unmounted
        // document.head.removeChild(script);
        // document.head.removeChild(translateScript);
        };
    },[]);

  return null; // The component doesn't render anything
};

export default GoogleTranslateScript;
