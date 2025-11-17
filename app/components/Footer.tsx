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
        <Stack spacing={3}>
          {/* Logo and Tagline */}
          <Box sx={{ textAlign: 'center', mb: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
              <Logo width={48} height={48} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
              Pebble & Pine Design
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              Elegant, thoughtful interior design
            </Typography>
          </Box>

          {/* Social Links */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{
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

          <Divider sx={{ my: 1 }} />

          {/* Footer Navigation - Two Column Layout */}
          <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 700, mx: 'auto' }}>
            {/* Main Navigation */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  mb: 1.5,
                  textAlign: { xs: 'center', sm: 'left' },
                  color: 'text.primary'
                }}
              >
                Navigate
              </Typography>
              <Stack
                spacing={1}
                sx={{
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  '& a': {
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' }
                  }
                }}
              >
                <Link href="/services">Services</Link>
                <Link href="/projects">Portfolio</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </Stack>
            </Grid>

            {/* Legal Links */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  mb: 1.5,
                  textAlign: { xs: 'center', sm: 'left' },
                  color: 'text.primary'
                }}
              >
                Legal
              </Typography>
              <Stack
                spacing={1}
                sx={{
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  '& a': {
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' }
                  }
                }}
              >
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
                <Link href="/legal/terms-of-service">Terms of Service</Link>
                <Link href="/legal/accessibility">Accessibility</Link>
                <Link href="/legal/gdpr">GDPR</Link>
                <Link href="/legal/ccpa">CCPA</Link>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 1 }} />

          {/* Affiliate Disclaimer */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              maxWidth: 650,
              mx: 'auto',
              lineHeight: 1.5,
              fontSize: '0.8rem',
              px: 2
            }}
          >
            <strong>Affiliate Disclaimer:</strong> Some links on this site are affiliate links.
            When you purchase through these links, we may earn a commission at no additional cost to you.
            We only recommend products we genuinely love and believe in.
          </Typography>

          {/* Copyright */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              fontSize: '0.85rem',
              pt: 1
            }}
          >
            © {currentYear} Pebble & Pine Design. All rights reserved. | Design by Katrina Lohr
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
