'use client';

import * as React from 'react';
import { Container, Box, Typography, Chip, Stack, Button, Grid, Paper } from '@mui/material';
import { useParams } from 'next/navigation';
import GalleryGrid from '@/app/components/GalleryGrid';
import ImageSlideshow from '@/app/components/ImageSlideshow';
import PdfDownloadButton from '@/app/components/PdfDownloadButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Import all projects
import coastalRetreat from '@/data/projects/modern-coastal-retreat.json';
import urbanLoft from '@/data/projects/urban-loft-transformation.json';
import botanicalBedroom from '@/data/projects/botanical-inspired-bedroom.json';
import scandinavianHome from '@/data/projects/scandinavian-family-home.json';
import tuscanKitchen from '@/data/projects/tuscan-inspired-kitchen.json';
import farmhouseLiving from '@/data/projects/modern-farmhouse-living.json';

const projectsMap: Record<string, any> = {
  'modern-coastal-retreat': coastalRetreat,
  'urban-loft-transformation': urbanLoft,
  'botanical-inspired-bedroom': botanicalBedroom,
  'scandinavian-family-home': scandinavianHome,
  'tuscan-inspired-kitchen': tuscanKitchen,
  'modern-farmhouse-living': farmhouseLiving,
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projectsMap[slug];

  const [slideshowOpen, setSlideshowOpen] = React.useState(false);
  const [slideshowIndex, setSlideshowIndex] = React.useState(0);

  if (!project) {
    return (
      <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h3">Project not found</Typography>
      </Container>
    );
  }

  const handleImageClick = (index: number) => {
    setSlideshowIndex(index);
    setSlideshowOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      {project.hero.useDoubleHero ? (
        <Box
          sx={{
            position: 'relative',
            height: { xs: 400, md: 500 },
            overflow: 'hidden',
          }}
        >
          {/* Background Image - Blurred */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${project.hero.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(8px)',
              opacity: 0.3,
              transform: 'scale(1.1)',
            }}
          />

          {/* Foreground Image - Centered */}
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <Box
              component="img"
              src={project.hero.foreground}
              alt={project.title}
              sx={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: 1,
                boxShadow: 4,
              }}
            />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: { xs: 400, md: 500 },
            backgroundImage: `url(${project.hero.foreground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Project Details */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Metadata */}
        <Box sx={{ mb: 6 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Chip label={project.category} color="primary" />
            {project.tags.slice(0, 3).map((tag: string) => (
              <Chip key={tag} label={tag} variant="outlined" size="small" />
            ))}
          </Stack>

          <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {project.title}
          </Typography>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="overline" color="text.secondary">
                Location
              </Typography>
              <Typography variant="body1">{project.location}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="overline" color="text.secondary">
                Year
              </Typography>
              <Typography variant="body1">{project.year}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="overline" color="text.secondary">
                Category
              </Typography>
              <Typography variant="body1">{project.category}</Typography>
            </Grid>
          </Grid>

          {/* Short Description */}
          <Typography variant="h6" color="text.secondary" paragraph sx={{ fontWeight: 300, mb: 3 }}>
            {project.shortDescription}
          </Typography>

          {/* Long Description */}
          <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            {project.longDescription}
          </Typography>
        </Box>

        {/* Buttons - PDFs and Links */}
        {(project.pdfs.length > 0 || project.links.length > 0) && (
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 6,
              bgcolor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap">
              {project.pdfs.map((pdf: any, index: number) => (
                <PdfDownloadButton key={index} label={pdf.label} path={pdf.path} />
              ))}
              {project.links.map((link: any, index: number) => (
                <Button
                  key={index}
                  variant="outlined"
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  endIcon={link.url.startsWith('http') ? <OpenInNewIcon /> : null}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Paper>
        )}

        {/* Gallery */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Project Gallery
          </Typography>
          <GalleryGrid images={project.gallery} onImageClick={handleImageClick} />
        </Box>
      </Container>

      {/* Slideshow Modal */}
      <ImageSlideshow
        images={project.gallery}
        open={slideshowOpen}
        initialIndex={slideshowIndex}
        onClose={() => setSlideshowOpen(false)}
      />
    </>
  );
}
