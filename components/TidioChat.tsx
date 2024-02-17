"use client"

import React, { useEffect } from 'react';

const TidioChat: React.FC = () => {
  useEffect(() => {
    // Load Tidio JavaScript SDK
    const script = document.createElement('script');
    script.src = 'https://code.tidio.co/opp8uj7g7tacwbzmyilha6yc9krag117.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="tidio-chat-placeholder"></div>;
};

export default TidioChat;