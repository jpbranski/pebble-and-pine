import { Container, Box, Typography, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Metadata } from 'next';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const metadata: Metadata = {
  title: 'Design Services',
  description:
    'Explore the comprehensive interior design services offered by Pebble & Pine Design, from full-service residential design to virtual consultations.',
  openGraph: {
    title: 'Design Services | Pebble & Pine Design',
    description: 'Comprehensive interior design services tailored to your needs.',
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Full-Service Interior Design',
      description:
        'Comprehensive design services from concept through installation. I handle every detail—space planning, material selection, furniture sourcing, custom millwork, and project coordination—so you can enjoy a seamless, stress-free experience.',
      features: [
        'Initial consultation & needs assessment',
        'Detailed space planning & layout',
        'Custom mood boards & design concepts',
        'Material, finish & fixture selection',
        'Furniture sourcing & procurement',
        'Project management & contractor coordination',
        'Installation & styling',
      ],
    },
    {
      title: 'Material & Finish Sourcing',
      description:
        'Not sure which materials, finishes, or fixtures are right for your space? I offer expert guidance on selecting flooring, tile, countertops, hardware, lighting, and more—ensuring cohesive aesthetics, quality, and value.',
      features: [
        'Flooring selection (hardwood, tile, carpet)',
        'Countertop & backsplash materials',
        'Paint color consultation',
        'Hardware & fixture selection',
        'Tile & stone sourcing',
        'Vendor coordination',
      ],
    },
    {
      title: 'Space Planning & Layout',
      description:
        'Maximize functionality and flow with strategic space planning. Whether reconfiguring an existing layout or planning a renovation, I create solutions that enhance how you live and move through your space.',
      features: [
        'Furniture layout & traffic flow analysis',
        'Room function optimization',
        'Built-in & storage solutions',
        'Scale & proportion guidance',
        'CAD floor plans & elevations',
      ],
    },
    {
      title: 'Renovation Concepting',
      description:
        'Planning a renovation but not sure where to start? I help you conceptualize the vision, plan the scope, and coordinate with architects and contractors to bring your dream space to life.',
      features: [
        'Vision development & concept design',
        'Scope definition & budgeting guidance',
        'Collaboration with architects & builders',
        'Material & fixture specifications',
        'Design documentation',
      ],
    },
    {
      title: 'Virtual Design Consultations',
      description:
        'Get expert design guidance from anywhere. Virtual consultations are perfect for those seeking direction on a specific room, color selections, or styling advice without a full-service commitment.',
      features: [
        'Video consultation sessions',
        'Room layout & furniture placement advice',
        'Color & material recommendations',
        'Shopping lists & sourcing guidance',
        'Follow-up support',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
          Design Services
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}>
          From full-service interior design to targeted consultations, I offer personalized services
          tailored to your project, timeline, and budget.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={6}>
        {services.map((service, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid',
                borderColor: 'divider',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: 3,
                },
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom color="primary">
                {service.title}
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 3 }}>
                {service.description}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
                What's Included:
              </Typography>
              <List dense>
                {service.features.map((feature, idx) => (
                  <ListItem key={idx} disableGutters>
                    <CheckCircleOutlineIcon
                      sx={{ mr: 1.5, color: 'primary.main', fontSize: '1.2rem' }}
                    />
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Process Overview */}
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
          How We Work Together
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                1. Discovery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We start with a conversation about your vision, lifestyle, and goals.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                2. Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I develop concepts, mood boards, and detailed plans tailored to you.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                3. Execution
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Together, we source materials, coordinate vendors, and manage the project.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                4. Reveal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your beautifully transformed space is styled, installed, and ready to enjoy.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
