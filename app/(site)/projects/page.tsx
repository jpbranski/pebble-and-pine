import { Container, Box, Typography, Grid } from '@mui/material';
import ProjectCard from '@/app/components/ProjectCard';
import { Metadata } from 'next';

// Import all projects
import coastalRetreat from '@/data/projects/modern-coastal-retreat.json';
import urbanLoft from '@/data/projects/urban-loft-transformation.json';
import botanicalBedroom from '@/data/projects/botanical-inspired-bedroom.json';
import scandinavianHome from '@/data/projects/scandinavian-family-home.json';
import tuscanKitchen from '@/data/projects/tuscan-inspired-kitchen.json';
import farmhouseLiving from '@/data/projects/modern-farmhouse-living.json';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore the portfolio of Pebble & Pine Design. Browse residential interior design projects showcasing elegant, thoughtful spaces tailored to each client.',
  openGraph: {
    title: 'Portfolio | Pebble & Pine Design',
    description: 'Browse residential interior design projects.',
  },
};

export default function ProjectsPage() {
  const projects = [
    { ...coastalRetreat, slug: 'modern-coastal-retreat', image: coastalRetreat.hero.foreground },
    { ...urbanLoft, slug: 'urban-loft-transformation', image: urbanLoft.hero.foreground },
    { ...botanicalBedroom, slug: 'botanical-inspired-bedroom', image: botanicalBedroom.hero.foreground },
    { ...scandinavianHome, slug: 'scandinavian-family-home', image: scandinavianHome.hero.foreground },
    { ...tuscanKitchen, slug: 'tuscan-inspired-kitchen', image: tuscanKitchen.hero.foreground },
    { ...farmhouseLiving, slug: 'modern-farmhouse-living', image: farmhouseLiving.hero.foreground },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
          Portfolio
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}>
          A curated collection of residential design projects, each reflecting the unique personality,
          lifestyle, and vision of the homeowner.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.slug}>
            <ProjectCard
              title={project.title}
              category={project.category}
              shortDescription={project.shortDescription}
              slug={project.slug}
              image={project.image}
              tags={project.tags}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
