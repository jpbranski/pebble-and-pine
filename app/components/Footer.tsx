'use client';

import * as React from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack, Divider } from '@mui/material';
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
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Logo and Tagline */}
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Logo width={50} height={50} />
            </Box>
            <Typography variant="h6" gutterBottom>
              Pebble & Pine Design
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Elegant, thoughtful interior design
            </Typography>
          </Box>

          {/* Social Links */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ '& a': { color: 'text.secondary', '&:hover': { color: 'primary.main' } } }}
          >
            <MuiLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </MuiLink>
            <MuiLink
              href="https://linkedin.com/in/klohr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </MuiLink>
            <MuiLink
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <PinterestIcon />
            </MuiLink>
          </Stack>

          <Divider />

          {/* Footer Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            justifyContent="center"
            alignItems="center"
            sx={{ '& a': { color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } } }}
          >
            <Link href="/services">Services</Link>
            <Link href="/projects">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Stack>

          {/* Affiliate Disclaimer */}
          <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            Affiliate Disclaimer: Some links on this site are affiliate links. When you purchase through these links,
            we may earn a commission at no additional cost to you. We only recommend products we genuinely love and believe in.
          </Typography>

          {/* Copyright */}
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            © {currentYear} Pebble & Pine Design. All rights reserved. | Design by Katrina Lohr
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
