import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import GoogleAnalytics from './components/GoogleAnalytics';
import { Box } from '@mui/material';

export const metadata: Metadata = {
  title: {
    default: 'Pebble & Pine Design | Interior Design by Katrina Lohr',
    template: '%s | Pebble & Pine Design',
  },
  description:
    'Elegant, thoughtful interior design services by Katrina Lohr. Specializing in residential design, space planning, and creating beautifully curated spaces that reflect your unique style.',
  keywords: [
    'interior design',
    'residential design',
    'space planning',
    'interior designer',
    'home design',
    'Katrina Lohr',
  ],
  authors: [{ name: 'Katrina Lohr' }],
  creator: 'Katrina Lohr',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pebbleandpinedesign.com',
    siteName: 'Pebble & Pine Design',
    title: 'Pebble & Pine Design | Interior Design by Katrina Lohr',
    description:
      'Elegant, thoughtful interior design services specializing in residential spaces.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pebble & Pine Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pebble & Pine Design | Interior Design by Katrina Lohr',
    description: 'Elegant, thoughtful interior design services.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Playfair Display for brand name */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          {/* Conditional Google Analytics - only loads with consent */}
          <GoogleAnalytics />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>

          {/* Cookie Consent Banner */}
          <CookieConsent />
        </ThemeRegistry>
      </body>
    </html>
  );
}
