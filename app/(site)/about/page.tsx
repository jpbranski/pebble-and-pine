import { Container, Box, Typography, Grid, Paper, Stack, Divider } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Katrina Lohr',
  description:
    'Learn about Katrina Lohr, the creative force behind Pebble & Pine Design. Discover her design philosophy, experience, and approach to creating beautiful, functional spaces.',
  openGraph: {
    title: 'About Katrina Lohr | Pebble & Pine Design',
    description: 'Learn about the designer behind Pebble & Pine Design.',
  },
};

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
          About Katrina Lohr
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', fontWeight: 300 }}>
          Creating thoughtful, beautiful spaces that enhance daily life
        </Typography>
      </Box>

      {/* Portrait Placeholder */}
      <Box
        sx={{
          maxWidth: 400,
          mx: 'auto',
          mb: 8,
          aspectRatio: '3/4',
          bgcolor: 'action.hover',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Professional Portrait
        </Typography>
      </Box>

      {/* Biography */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
          My Story
        </Typography>
        <Stack spacing={3}>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            My journey into interior design began with a simple belief: the spaces we inhabit profoundly shape
            our daily experiences, our moods, and our well-being. After years working in strategic planning and
            client relations, I discovered that my true passion lay in translating people's dreams and lifestyles
            into beautifully designed environments.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            I founded Pebble & Pine Design to create a practice rooted in collaboration, authenticity, and attention
            to detail. The name itself reflects my design philosophy—the 'pebbles' represent the foundational elements
            and natural textures that ground a space, while the 'pine' evokes organic growth, fresh perspectives, and
            the timeless beauty of nature. Together, they symbolize the balance I seek in every project: classic
            elegance meets contemporary functionality.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Based in the Pacific Northwest, I draw endless inspiration from the region's natural beauty—misty forests,
            rugged coastlines, and the interplay of light through towering evergreens. These elements inform my approach
            to color, texture, and materiality, resulting in spaces that feel both grounded and uplifting.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Beyond aesthetics, I believe design should serve life, not the other way around. Whether we're reimagining
            a single room or transforming an entire home, my process begins with listening. I want to understand how you
            live, what brings you joy, and what challenges you face in your current space. From there, we collaborate to
            create environments that are not only beautiful but also deeply personal and utterly livable.
          </Typography>
        </Stack>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* Design Philosophy */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
          Design Philosophy
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, height: '100%', bgcolor: 'background.default' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Listen First
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every project begins with understanding your unique story, lifestyle, and vision. Great design
                emerges from genuine collaboration and attentive listening.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, height: '100%', bgcolor: 'background.default' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Timeless Beauty
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I prioritize quality over trends, creating spaces that feel current yet enduring. Classic foundations
                allow for evolving personal touches over time.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, height: '100%', bgcolor: 'background.default' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Function Meets Form
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Beautiful spaces must work for real life. I design with both aesthetics and everyday functionality
                in mind, ensuring your home supports your daily rituals.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* Experience & Background */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
          Background & Experience
        </Typography>
        <Stack spacing={4}>
          {/* Education */}
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Education
            </Typography>
            <Typography variant="body1">
              Bachelor of Arts, Interior Design & Spatial Planning
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Continuing education in sustainable design practices and material sourcing
            </Typography>
          </Box>

          {/* Professional Experience */}
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Professional Experience
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body1" fontWeight={600}>
                  Founder & Principal Designer, Pebble & Pine Design
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  2021 – Present
                </Typography>
                <Typography variant="body2">
                  Full-service residential interior design, specializing in thoughtful, nature-inspired spaces
                  that balance elegance and livability. Services include space planning, material selection,
                  custom millwork design, and project management.
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" fontWeight={600}>
                  Strategic Planning & Client Relations
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Prior to founding Pebble & Pine Design
                </Typography>
                <Typography variant="body2">
                  Developed expertise in project management, client communication, and translating complex
                  needs into actionable solutions—skills that inform every design project today.
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Skills & Specializations */}
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Skills & Specializations
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2">• Residential Interior Design</Typography>
                <Typography variant="body2">• Space Planning & Layout</Typography>
                <Typography variant="body2">• Material & Finish Selection</Typography>
                <Typography variant="body2">• Custom Millwork Design</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2">• Furniture Sourcing & Procurement</Typography>
                <Typography variant="body2">• Color Consultation</Typography>
                <Typography variant="body2">• Renovation Coordination</Typography>
                <Typography variant="body2">• Virtual Design Services</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Approach */}
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Approach to Design
            </Typography>
            <Typography variant="body2">
              My process is collaborative, transparent, and tailored to each client. I believe in clear communication,
              realistic timelines, and budgets that respect your investment. From initial consultation through final
              installation, I'm with you every step of the way, ensuring the journey is as rewarding as the destination.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
