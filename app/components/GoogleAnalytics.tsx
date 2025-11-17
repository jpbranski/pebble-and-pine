'use client';

import * as React from 'react';
import Script from 'next/script';
import { hasAnalyticsConsent } from '../utils/consent';

export default function GoogleAnalytics() {
  const [loadGA, setLoadGA] = React.useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  React.useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      setLoadGA(hasAnalyticsConsent());
    };

    checkConsent();

    // Listen for consent updates
    const handleConsentUpdate = () => {
      checkConsent();
    };

    window.addEventListener('consentUpdated', handleConsentUpdate);
    window.addEventListener('consentRevoked', () => setLoadGA(false));

    return () => {
      window.removeEventListener('consentUpdated', handleConsentUpdate);
      window.removeEventListener('consentRevoked', () => setLoadGA(false));
    };
  }, []);

  // Don't render if no GA ID or no consent
  if (!gaId || !loadGA) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
