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
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import quizData from '@/data/quizzes/project-readiness.json';
import jsPDF from 'jspdf';

export default function ProjectReadinessPage() {
  const [currentSection, setCurrentSection] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<number, any>>({});
  const [completed, setCompleted] = React.useState(false);

  const handleChange = (questionId: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleCheckboxChange = (questionId: number, checked: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: checked,
    }));
  };

  const handleMultiCheckboxChange = (questionId: number, option: string, checked: boolean) => {
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      if (checked) {
        return { ...prev, [questionId]: [...current, option] };
      } else {
        return { ...prev, [questionId]: current.filter((item: string) => item !== option) };
      }
    });
  };

  const handleNext = () => {
    if (currentSection < quizData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setCompleted(false);
    setCurrentSection(0);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text('Project Readiness Checklist', 20, 20);

    // Subtitle
    doc.setFontSize(12);
    doc.text('Pebble & Pine Design', 20, 30);

    let yPosition = 50;

    quizData.sections.forEach((section) => {
      // Section title
      doc.setFontSize(14);
      doc.text(section.title, 20, yPosition);
      yPosition += 10;

      section.questions.forEach((q) => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }

        doc.setFontSize(9);
        const questionLines = doc.splitTextToSize(q.question, 170);
        doc.text(questionLines, 20, yPosition);
        yPosition += questionLines.length * 5 + 2;

        const answer = answers[q.id];
        doc.setFontSize(8);
        if (typeof answer === 'boolean') {
          doc.text(`☑ ${answer ? 'Yes' : 'No'}`, 25, yPosition);
        } else if (Array.isArray(answer)) {
          doc.text(`☑ ${answer.join(', ')}`, 25, yPosition);
        } else {
          const answerText = answer || 'Not answered';
          const answerLines = doc.splitTextToSize(`☑ ${answerText}`, 165);
          doc.text(answerLines, 25, yPosition);
          yPosition += (answerLines.length - 1) * 4;
        }
        yPosition += 8;
      });

      yPosition += 5;
    });

    // Footer on last page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setFontSize(10);
    doc.text(quizData.summaryMessage, 20, yPosition, { maxWidth: 170 });

    doc.setFontSize(8);
    doc.text('Visit pebbleandpinedesign.com', 20, 280);

    doc.save('project-readiness-checklist.pdf');
  };

  if (completed) {
    const preparationAnswers = quizData.sections[0].questions.filter((q) => answers[q.id] === true).length;
    const totalPreparation = quizData.sections[0].questions.length;
    const readinessScore = Math.round((preparationAnswers / totalPreparation) * 100);

    return (
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip label="Completed!" color="primary" sx={{ mb: 2 }} />
            <Typography variant="h3" component="h1" gutterBottom>
              Your Project Readiness Summary
            </Typography>
            <Typography variant="h5" color="primary">
              Readiness Score: {readinessScore}%
            </Typography>
          </Box>

          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            {quizData.summaryMessage}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Summary by section */}
          {quizData.sections.map((section, idx) => (
            <Box key={idx} sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              {section.questions.map((q) => {
                const answer = answers[q.id];
                return (
                  <Box key={q.id} sx={{ mb: 2, pl: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {q.question}
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {typeof answer === 'boolean'
                        ? answer
                          ? '✓ Yes'
                          : '✗ No'
                        : Array.isArray(answer)
                        ? answer.join(', ')
                        : answer || 'Not answered'}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          ))}

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={downloadPDF}
              fullWidth
            >
              Download Checklist (PDF)
            </Button>
            <Button
              variant="outlined"
              startIcon={<RestartAltIcon />}
              onClick={handleRestart}
              fullWidth
            >
              Retake Checklist
            </Button>
          </Stack>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Ready to Move Forward?
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              {quizData.nextSteps.map((step, index) => (
                <Button
                  key={index}
                  component={Link}
                  href={step.href}
                  variant={step.primary ? 'contained' : 'outlined'}
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

  const section = quizData.sections[currentSection];

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

      {/* Stepper */}
      <Stepper activeStep={currentSection} sx={{ mb: 4 }}>
        {quizData.sections.map((sec, index) => (
          <Step key={index}>
            <StepLabel>{sec.title}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Form */}
      <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom>
          {section.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {section.description}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <form onSubmit={currentSection === quizData.sections.length - 1 ? handleSubmit : undefined}>
          <Stack spacing={3}>
            {section.questions.map((q) => {
              if (q.type === 'checkbox') {
                return (
                  <FormControlLabel
                    key={q.id}
                    control={
                      <Checkbox
                        checked={answers[q.id] || false}
                        onChange={(e) => handleCheckboxChange(q.id, e.target.checked)}
                      />
                    }
                    label={q.question}
                  />
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

              if (q.type === 'checkbox-multiple') {
                return (
                  <FormControl key={q.id}>
                    <FormLabel>{q.question}</FormLabel>
                    <FormGroup>
                      {q.options?.map((option) => (
                        <FormControlLabel
                          key={option}
                          control={
                            <Checkbox
                              checked={(answers[q.id] || []).includes(option)}
                              onChange={(e) =>
                                handleMultiCheckboxChange(q.id, option, e.target.checked)
                              }
                            />
                          }
                          label={option}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                );
              }

              if (q.type === 'text' || q.type === 'email' || q.type === 'tel') {
                return (
                  <TextField
                    key={q.id}
                    required={q.required}
                    fullWidth
                    type={q.type}
                    label={q.question}
                    placeholder={q.placeholder}
                    value={answers[q.id] || ''}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  />
                );
              }

              if (q.type === 'textarea') {
                return (
                  <TextField
                    key={q.id}
                    fullWidth
                    multiline
                    rows={4}
                    label={q.question}
                    placeholder={q.placeholder}
                    value={answers[q.id] || ''}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  />
                );
              }

              return null;
            })}
          </Stack>

          {/* Navigation */}
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              disabled={currentSection === 0}
            >
              Back
            </Button>

            {currentSection === quizData.sections.length - 1 ? (
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Complete Checklist
              </Button>
            ) : (
              <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleNext}>
                Next
              </Button>
            )}
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
