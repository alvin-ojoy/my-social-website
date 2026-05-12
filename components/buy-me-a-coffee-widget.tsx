'use client';

import { useEffect } from 'react';

export function BuyMeACoffeeWidget() {
  useEffect(() => {
    const existingScript = document.getElementById('buy-me-a-coffee-widget');
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'buy-me-a-coffee-widget';
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.async = true;
    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-id', 'alvinojoy');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', '');
    script.setAttribute('data-color', '#FF813F');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
