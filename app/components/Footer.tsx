'use client';

import * as React from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack, Divider, Grid, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
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
        py: { xs: 5, md: 7 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Logo and Tagline - Centered */}
          <Box
            sx={{
              textAlign: 'center',
              mb: 2
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 1.5
              }}
            >
              <Logo width={56} height={56} />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
                fontWeight: 600,
                mb: 0.75,
                letterSpacing: '0.02em',
                color: 'text.primary'
              }}
            >
              Pebble & Pine Design
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: '1rem',
                fontStyle: 'italic',
                letterSpacing: '0.01em'
              }}
            >
              Elegant, thoughtful interior design
            </Typography>
          </Box>

          {/* Divider */}
          <Divider sx={{ opacity: 0.12 }} />

          {/* Three Column Layout - Centered */}
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            sx={{
              maxWidth: 1000,
              mx: 'auto'
            }}
          >
            {/* Column 1: Navigation */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  mb: 2,
                  textAlign: 'center',
                  color: 'text.primary',
                  fontSize: '0.8rem'
                }}
              >
                Navigate
              </Typography>
              <Stack
                spacing={1.25}
                sx={{
                  alignItems: 'center',
                  '& a': {
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(2px)'
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

            {/* Column 2: Social & Contact */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  mb: 2,
                  textAlign: 'center',
                  color: 'text.primary',
                  fontSize: '0.8rem'
                }}
              >
                Connect
              </Typography>
              <Stack
                spacing={2.5}
                sx={{
                  alignItems: 'center'
                }}
              >
                {/* Social Media Icons */}
                <Stack
                  direction="row"
                  spacing={2.5}
                  sx={{
                    '& a': {
                      color: 'text.secondary',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-2px)'
                      }
                    }
                  }}
                >
                  <MuiLink
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram page"
                  >
                    <InstagramIcon sx={{ fontSize: 28 }} />
                  </MuiLink>
                  <MuiLink
                    href="https://linkedin.com/in/klohr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our LinkedIn profile"
                  >
                    <LinkedInIcon sx={{ fontSize: 28 }} />
                  </MuiLink>
                  <MuiLink
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Pinterest boards"
                  >
                    <PinterestIcon sx={{ fontSize: 28 }} />
                  </MuiLink>
                </Stack>

                {/* Contact CTA */}
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  startIcon={<EmailIcon />}
                  sx={{
                    borderColor: 'divider',
                    color: 'text.secondary',
                    fontSize: '0.9rem',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(74, 93, 84, 0.04)',
                      color: 'primary.main'
                    }
                  }}
                >
                  Email Katrina
                </Button>
              </Stack>
            </Grid>

            {/* Column 3: Legal & Policies */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  mb: 2,
                  textAlign: 'center',
                  color: 'text.primary',
                  fontSize: '0.8rem'
                }}
              >
                Legal
              </Typography>
              <Stack
                spacing={1.25}
                sx={{
                  alignItems: 'center',
                  '& a': {
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(2px)'
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

          {/* Divider before bottom section */}
          <Divider sx={{ opacity: 0.08, mt: 4 }} />

          {/* Affiliate Disclaimer - Bottom Section */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              maxWidth: '65ch',
              mx: 'auto',
              mt: '1.5rem !important',
              mb: '0.5rem !important',
              lineHeight: 1.7,
              opacity: 0.7,
              px: 2,
              fontSize: '0.8rem'
            }}
          >
            <strong style={{ fontWeight: 600 }}>Affiliate Disclaimer:</strong> Some links on this site are affiliate links.
            When you purchase through these links, we may earn a commission at no additional cost to you.
            We only recommend products we genuinely love and believe in.
          </Typography>

          {/* Copyright - Final Line */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              opacity: 0.6,
              pt: 0.5,
              fontSize: '0.75rem',
              letterSpacing: '0.02em'
            }}
          >
            © {currentYear} Pebble & Pine Design. All rights reserved. | Design by Katrina Lohr
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
