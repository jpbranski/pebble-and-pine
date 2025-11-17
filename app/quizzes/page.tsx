import { Container, Box, Typography, Grid } from '@mui/material';
import QuizCard from '../components/QuizCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Quizzes',
  description:
    'Take interactive design quizzes to discover your aesthetic style, assess project readiness, and clarify your design vision.',
  openGraph: {
    title: 'Design Quizzes | Pebble & Pine Design',
    description: 'Interactive quizzes to help define your design style and project needs.',
  },
};

export default function QuizzesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
          Design Quizzes
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}>
          Not sure where to start with your design project? These interactive quizzes will help you
          discover your aesthetic preferences, clarify your vision, and assess your project readiness.
        </Typography>
      </Box>

      {/* Quizzes Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <QuizCard
            title="Aesthetic Finder Quiz"
            description="Discover your unique interior design style through visual 'would you rather' questions. Perfect for finding your aesthetic direction."
            href="/quizzes/aesthetic-finder"
            questionCount={10}
            estimatedTime="5 min"
            variant="featured"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <QuizCard
            title="Design Vibe Check"
            description="A quick check-in to understand your design needs and communication preferences. Great for those ready to explore working together."
            href="/quizzes/design-vibe-check"
            questionCount={3}
            estimatedTime="2 min"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <QuizCard
            title="Project Readiness Checklist"
            description="Assess your preparation level and clarify the scope of your design project. Includes a downloadable PDF summary."
            href="/quizzes/project-readiness"
            questionCount={17}
            estimatedTime="10 min"
          />
        </Grid>
      </Grid>

      {/* Why Take a Quiz */}
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Why Take a Quiz?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Clarify Your Vision
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Articulating design preferences can be challenging. Our quizzes help you identify
              and express what you love.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Save Time
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Come to our first meeting with a clearer sense of your style, priorities, and
              project scope.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Get Personalized Insights
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Receive tailored recommendations, project suggestions, and next steps based on
              your unique responses.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
