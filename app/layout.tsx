import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <ThemeRegistry>
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
        </ThemeRegistry>
      </body>
    </html>
  );
}
