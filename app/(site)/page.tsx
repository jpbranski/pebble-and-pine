import { Container, Box, Typography, Grid, Button, Stack } from '@mui/material';
import Link from 'next/link';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import QuizCard from '../components/QuizCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Metadata } from 'next';

// Import project data
import coastalRetreat from '@/data/projects/modern-coastal-retreat.json';
import urbanLoft from '@/data/projects/urban-loft-transformation.json';
import botanicalBedroom from '@/data/projects/botanical-inspired-bedroom.json';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to Pebble & Pine Design. Discover elegant, thoughtful interior design that transforms your space into a reflection of your unique style.',
  openGraph: {
    title: 'Pebble & Pine Design | Interior Design by Katrina Lohr',
    description: 'Elegant, thoughtful interior design services.',
  },
};

export default function HomePage() {
  const featuredProjects = [
    { ...coastalRetreat, slug: 'modern-coastal-retreat', image: coastalRetreat.hero.foreground },
    { ...urbanLoft, slug: 'urban-loft-transformation', image: urbanLoft.hero.foreground },
    { ...botanicalBedroom, slug: 'botanical-inspired-bedroom', image: botanicalBedroom.hero.foreground },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Introduction to Katrina Lohr */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            Meet Katrina
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            With a passion for creating spaces that blend beauty and function, Katrina Lohr brings a refined eye
            and thoughtful approach to every project. Her background in strategic planning and client relations
            informs a design philosophy centered on listening, understanding, and translating your vision into reality.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Based in the Pacific Northwest, Katrina draws inspiration from the natural world—organic textures,
            earthy palettes, and the interplay of light and shadow. Whether designing a serene coastal retreat
            or a vibrant urban loft, she believes your home should be a sanctuary that nurtures your daily life
            and reflects your authentic self.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
            From full-service interior design to virtual consultations, Katrina offers personalized services
            tailored to your needs, timeline, and budget. Every project begins with collaboration and ends with
            a space you'll love for years to come.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              href="/about"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
            >
              Learn More About Katrina
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Aesthetic Finder Quiz Preview */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Discover Your Style
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Not sure where to start? Take our Aesthetic Finder quiz to uncover your unique design style
              and get personalized recommendations.
            </Typography>
          </Box>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <QuizCard
                title="Aesthetic Finder Quiz"
                description="Discover your unique interior design style through a series of visual 'would you rather' questions. Get personalized results and project recommendations."
                href="/quizzes/aesthetic-finder"
                questionCount={10}
                estimatedTime="5 min"
                variant="featured"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Portfolio Preview */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Recent Projects
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Explore a curated selection of residential design projects, each tailored to reflect
              the unique personality and lifestyle of the homeowner.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {featuredProjects.map((project) => (
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
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              href="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Design Vibe Check Preview */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Take a quick vibe check to help us understand your design needs and preferences.
            </Typography>
          </Box>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <QuizCard
                title="Design Vibe Check"
                description="A quick 3-question quiz to help us understand your space, communication preferences, and design goals. Perfect for those ready to explore working together."
                href="/quizzes/design-vibe-check"
                questionCount={3}
                estimatedTime="2 min"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
