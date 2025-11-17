'use client';

import * as React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '70vh', sm: '75vh', md: '85vh' },
        minHeight: { xs: 500, sm: 600, md: 650 },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Hero Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 100%)',
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=85&auto=format&fit=crop"
          alt="Elegant interior design showcasing Pebble & Pine Design aesthetic"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>

      {/* Hero Content Overlay */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 3, sm: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          {/* Brand Name */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              fontWeight: 600,
              color: '#FFFFFF',
              mb: 2.5,
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
              letterSpacing: '0.02em',
            }}
          >
            Pebble & Pine Design
          </Typography>

          {/* Tagline */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              fontWeight: 300,
              color: '#FFFFFF',
              mb: 4,
              lineHeight: 1.6,
              textShadow: '0 1px 8px rgba(0, 0, 0, 0.4)',
              maxWidth: 750,
              mx: 'auto',
            }}
          >
            Elegant, thoughtful interior design that transforms your space into a reflection of your unique style.
          </Typography>

          {/* Call to Action Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2.5}
            justifyContent="center"
            sx={{
              mt: 5,
            }}
          >
            <Button
              component={Link}
              href="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                fontWeight: 500,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              View Portfolio
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderWidth: 2,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  borderColor: '#FFFFFF',
                  borderWidth: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              Get In Touch
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
