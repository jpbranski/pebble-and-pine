'use client';

import * as React from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack, Divider, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: { xs: 4, md: 5 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2.5}>
          {/* Logo and Tagline - reduced bottom margin */}
          <Box sx={{ textAlign: 'center', mb: 0.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.25 }}>
              <Logo width={48} height={48} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
              Pebble & Pine Design
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              Elegant, thoughtful interior design
            </Typography>
          </Box>

          {/* Social Links - tighter spacing */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{
              mb: 0.5,
              '& a': {
                color: 'text.secondary',
                transition: 'color 0.2s',
                '&:hover': { color: 'primary.main' }
              }
            }}
          >
            <MuiLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <InstagramIcon />
            </MuiLink>
            <MuiLink
              href="https://linkedin.com/in/klohr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn profile"
            >
              <LinkedInIcon />
            </MuiLink>
            <MuiLink
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Pinterest boards"
            >
              <PinterestIcon />
            </MuiLink>
          </Stack>

          {/* Divider positioned directly above navigation */}
          <Divider
            sx={{
              opacity: 0.1,
              mt: '2rem !important',
              mb: '1.5rem !important'
            }}
          />

          {/* Footer Navigation - Tighter Grid Layout */}
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5 }}
            justifyContent="center"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              columnGap: { sm: 1 }
            }}
          >
            {/* Main Navigation */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  mb: 1.25,
                  textAlign: { xs: 'center', sm: 'left' },
                  color: 'text.secondary',
                  opacity: 0.7
                }}
              >
                Navigate
              </Typography>
              <Stack
                spacing={0.5}
                sx={{
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  '& a': {
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px'
                    }
                  }
                }}
              >
                <Link href="/services">
                  <Typography variant="body2">Services</Typography>
                </Link>
                <Link href="/projects">
                  <Typography variant="body2">Portfolio</Typography>
                </Link>
                <Link href="/about">
                  <Typography variant="body2">About</Typography>
                </Link>
                <Link href="/contact">
                  <Typography variant="body2">Contact</Typography>
                </Link>
              </Stack>
            </Grid>

            {/* Legal Links */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  mb: 1.25,
                  textAlign: { xs: 'center', sm: 'left' },
                  color: 'text.secondary',
                  opacity: 0.7
                }}
              >
                Legal
              </Typography>
              <Stack
                spacing={0.5}
                sx={{
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  '& a': {
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px'
                    }
                  }
                }}
              >
                <Link href="/legal/privacy-policy">
                  <Typography variant="body2">Privacy Policy</Typography>
                </Link>
                <Link href="/legal/terms-of-service">
                  <Typography variant="body2">Terms of Service</Typography>
                </Link>
                <Link href="/legal/accessibility">
                  <Typography variant="body2">Accessibility</Typography>
                </Link>
                <Link href="/legal/gdpr">
                  <Typography variant="body2">GDPR</Typography>
                </Link>
                <Link href="/legal/ccpa">
                  <Typography variant="body2">CCPA</Typography>
                </Link>
              </Stack>
            </Grid>
          </Grid>

          {/* Affiliate Disclaimer - refined placement and typography */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              maxWidth: '60ch',
              mx: 'auto',
              mt: '2rem !important',
              mb: '1rem !important',
              lineHeight: 1.6,
              opacity: 0.8,
              px: 2
            }}
          >
            <strong>Affiliate Disclaimer:</strong> Some links on this site are affiliate links.
            When you purchase through these links, we may earn a commission at no additional cost to you.
            We only recommend products we genuinely love and believe in.
          </Typography>

          {/* Copyright - minimalist final line */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              opacity: 0.65,
              pt: 1.25,
              fontSize: '0.75rem'
            }}
          >
            © {currentYear} Pebble & Pine Design. All rights reserved. | Design by Katrina Lohr
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
