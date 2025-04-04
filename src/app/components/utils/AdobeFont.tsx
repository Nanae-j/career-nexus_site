'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Typekit: {
      load: (config: {
        kitId: string;
        scriptTimeout: number;
        async: boolean;
      }) => void;
    };
  }
}

const AdobeFont = () => {
  useEffect(() => {
    ((d: Document) => {
      const config = {
        kitId: `${process.env.NEXT_PUBLIC_KIT_ID}`,
        scriptTimeout: 3000,
        async: true,
      };
      const h = d.documentElement;
      const t = setTimeout(() => {
        h.className = `${h.className.replace(
          /\bwf-loading\b/g,
          '',
        )} wf-inactive`;
      }, config.scriptTimeout);
      const tk = d.createElement('script');

      h.className += 'wf-loading';
      tk.src = `https://use.typekit.net/${config.kitId}.js`;
      tk.async = true;
      tk.onload = () => {
        clearTimeout(t);
        try {
          (window as Window).Typekit.load(config);
        } catch (e: unknown) {
          if (e instanceof Error) {
            console.error('Error loading Typekit:', e.message);
          } else {
            console.error('An unknown error occurred:', e);
          }
        }
      };
      tk.onerror = () => {
        clearTimeout(t);
      };

      const s = d.getElementsByTagName('script')[0];

      if (s.parentNode) {
        s.parentNode.insertBefore(tk, s);
      }
    })(document);
  }, []);

  return null;
};

export default AdobeFont;
