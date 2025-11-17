'use client';

import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Chip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Link from 'next/link';
import quizData from '@/data/quizzes/design-vibe-check.json';
import jsPDF from 'jspdf';

export default function DesignVibeCheckPage() {
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [completed, setCompleted] = React.useState(false);

  const handleChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setCompleted(false);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text('Design Vibe Check Results', 20, 20);

    // Subtitle
    doc.setFontSize(12);
    doc.text('Pebble & Pine Design', 20, 30);

    // Answers
    doc.setFontSize(12);
    doc.text('Your Responses:', 20, 50);

    let yPosition = 60;
    quizData.questions.forEach((q) => {
      doc.setFontSize(10);
      doc.text(`${q.question}`, 20, yPosition);
      doc.text(`Answer: ${answers[q.id] || 'N/A'}`, 25, yPosition + 7);
      yPosition += 20;
    });

    // Next steps
    doc.setFontSize(12);
    doc.text('Next Steps:', 20, yPosition + 10);
    doc.setFontSize(10);
    doc.text('• Explore the Project Readiness Checklist', 25, yPosition + 20);
    doc.text('• Contact us to schedule a consultation', 25, yPosition + 27);

    // Footer
    doc.setFontSize(8);
    doc.text('Visit pebbleandpinedesign.com to learn more', 20, 280);

    doc.save('design-vibe-check-results.pdf');
  };

  if (completed) {
    return (
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip label="Thank You!" color="primary" sx={{ mb: 2 }} />
            <Typography variant="h3" component="h1" gutterBottom>
              {quizData.thankYouMessage}
            </Typography>
          </Box>

          <Paper elevation={0} sx={{ p: 3, bgcolor: 'action.hover', mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Your Responses:
            </Typography>
            {quizData.questions.map((q) => (
              <Box key={q.id} sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {q.question}
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {answers[q.id]}
                </Typography>
              </Box>
            ))}
          </Paper>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={downloadPDF}
              fullWidth
            >
              Download Summary (PDF)
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

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              What's Next?
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              {quizData.nextSteps.map((step, index) => (
                <Button
                  key={index}
                  component={Link}
                  href={step.href}
                  variant="contained"
                  fullWidth
                >
                  {step.label}
                </Button>
              ))}
            </Stack>
          </Box>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {quizData.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {quizData.description}
        </Typography>
      </Box>

      {/* Form */}
      <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'divider' }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {quizData.questions.map((q) => {
              if (q.type === 'dropdown') {
                return (
                  <TextField
                    key={q.id}
                    select
                    required={q.required}
                    fullWidth
                    label={q.question}
                    value={answers[q.id] || ''}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  >
                    {q.options?.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                );
              }

              if (q.type === 'radio') {
                return (
                  <FormControl key={q.id} required={q.required}>
                    <FormLabel>{q.question}</FormLabel>
                    <RadioGroup
                      value={answers[q.id] || ''}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                    >
                      {q.options?.map((option) => (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                );
              }

              if (q.type === 'email') {
                return (
                  <TextField
                    key={q.id}
                    required={q.required}
                    fullWidth
                    type="email"
                    label={q.question}
                    placeholder={q.placeholder}
                    value={answers[q.id] || ''}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  />
                );
              }

              return null;
            })}

            <Button type="submit" variant="contained" size="large" endIcon={<SendIcon />} fullWidth>
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
