'use client';

import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  LinearProgress,
  Card,
  CardMedia,
  CardActionArea,
  Chip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Link from 'next/link';
import quizData from '@/data/quizzes/aesthetic-finder.json';
import jsPDF from 'jspdf';

type Scores = Record<string, number>;

export default function AestheticFinderQuizPage() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [scores, setScores] = React.useState<Scores>({});
  const [completed, setCompleted] = React.useState(false);
  const [topArchetype, setTopArchetype] = React.useState<string | null>(null);

  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  const handleAnswer = (choice: 'A' | 'B') => {
    const question = quizData.questions[currentQuestion];
    const scoreToAdd = choice === 'A' ? question.scoreA : question.scoreB;

    const newScores = { ...scores };
    Object.entries(scoreToAdd).forEach(([archetype, points]) => {
      newScores[archetype] = (newScores[archetype] || 0) + points;
    });

    setScores(newScores);

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed - calculate top archetype
      const topType = Object.entries(newScores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      setTopArchetype(topType);
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScores({});
    setCompleted(false);
    setTopArchetype(null);
  };

  const downloadPDF = () => {
    if (!topArchetype) return;

    const archetype = (quizData.archetypes as any)[topArchetype];
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text('Your Aesthetic Style Results', 20, 20);

    // Subtitle
    doc.setFontSize(12);
    doc.text('Pebble & Pine Design', 20, 30);

    // Main Result
    doc.setFontSize(16);
    doc.text(`Your Style: ${archetype.name}`, 20, 50);

    // Description
    doc.setFontSize(10);
    const descriptionLines = doc.splitTextToSize(archetype.description, 170);
    doc.text(descriptionLines, 20, 60);

    // Characteristics
    doc.setFontSize(12);
    doc.text('Key Characteristics:', 20, 90);
    doc.setFontSize(10);
    archetype.characteristics.forEach((char: string, index: number) => {
      doc.text(`• ${char}`, 25, 100 + index * 7);
    });

    // Related Project
    doc.setFontSize(10);
    doc.text(
      `Explore the "${archetype.relatedProject}" project on our portfolio for inspiration!`,
      20,
      130
    );

    // Footer
    doc.setFontSize(8);
    doc.text('Visit pebbleandpinedesign.com to learn more', 20, 280);

    doc.save('aesthetic-finder-results.pdf');
  };

  if (completed && topArchetype) {
    const archetype = (quizData.archetypes as any)[topArchetype];

    return (
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip label="Results" color="primary" sx={{ mb: 2 }} />
            <Typography variant="h3" component="h1" gutterBottom>
              Your Aesthetic Style
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              {archetype.name}
            </Typography>
          </Box>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
            {archetype.description}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Key Characteristics:
            </Typography>
            <List dense>
              {archetype.characteristics.map((char: string, index: number) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${char}`} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Paper elevation={0} sx={{ p: 3, bgcolor: 'action.hover', mb: 4 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Explore your style:</strong> Check out the{' '}
              <Link
                href={`/projects/${archetype.relatedProject}`}
                style={{ textDecoration: 'underline' }}
              >
                {archetype.relatedProject.split('-').join(' ')}
              </Link>{' '}
              project in our portfolio for inspiration that matches your aesthetic!
            </Typography>
          </Paper>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={downloadPDF}
              fullWidth
            >
              Download Results (PDF)
            </Button>
            <Button
              variant="outlined"
              startIcon={<RestartAltIcon />}
              onClick={handleRestart}
              fullWidth
            >
              Retake Quiz
            </Button>
          </Stack>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Ready to bring your style to life?
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              <Button component={Link} href="/quizzes/project-readiness" variant="outlined">
                Take Project Readiness Quiz
              </Button>
              <Button component={Link} href="/contact" variant="outlined">
                Contact Me
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    );
  }

  const question = quizData.questions[currentQuestion];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {quizData.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {quizData.description}
        </Typography>
      </Box>

      {/* Progress */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Question {currentQuestion + 1} of {quizData.questions.length}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Math.round(progress)}% Complete
          </Typography>
        </Stack>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      {/* Question */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          {question.prompt}
        </Typography>
      </Box>

      {/* Options */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 4 }}>
        <Card
          sx={{
            flex: 1,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: 4,
            },
          }}
        >
          <CardActionArea onClick={() => handleAnswer('A')}>
            <CardMedia component="img" height="300" image={question.imageA} alt={question.labelA} />
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">{question.labelA}</Typography>
            </Box>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            flex: 1,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: 4,
            },
          }}
        >
          <CardActionArea onClick={() => handleAnswer('B')}>
            <CardMedia component="img" height="300" image={question.imageB} alt={question.labelB} />
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">{question.labelB}</Typography>
            </Box>
          </CardActionArea>
        </Card>
      </Box>

      {/* Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <Button component={Link} href="/quizzes" variant="text">
          Exit Quiz
        </Button>
      </Box>
    </Container>
  );
}
