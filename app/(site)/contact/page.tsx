'use client';

import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Stack,
  Grid,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          I'd love to hear about your project. Whether you have a specific vision in mind or are just
          beginning to explore possibilities, let's start a conversation.
        </Typography>
      </Box>

      {/* Contact Form */}
      <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
        {submitted ? (
          <Alert severity="success" sx={{ mb: 3 }}>
            Thank you for reaching out! I'll get back to you within 1-2 business days.
          </Alert>
        ) : null}

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              required
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />

            <TextField
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />

            <TextField
              required
              fullWidth
              label="Tell me about your project"
              name="message"
              multiline
              rows={6}
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              placeholder="What spaces are you looking to design? What's your timeline? Any specific challenges or goals?"
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              fullWidth
            >
              Send Message
            </Button>
          </Stack>
        </form>
      </Paper>

      {/* Additional CTAs */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Not ready to reach out yet?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Take one of our quizzes to help clarify your design vision and project needs.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm="auto">
            <Button
              component={Link}
              href="/quizzes/aesthetic-finder"
              variant="outlined"
              fullWidth
            >
              Discover Your Style
            </Button>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button
              component={Link}
              href="/quizzes/project-readiness"
              variant="outlined"
              fullWidth
            >
              Project Readiness Checklist
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
