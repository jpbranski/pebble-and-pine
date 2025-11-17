'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface QuizCardProps {
  title: string;
  description: string;
  href: string;
  questionCount?: number;
  estimatedTime?: string;
  variant?: 'default' | 'featured';
}

export default function QuizCard({
  title,
  description,
  href,
  questionCount,
  estimatedTime,
  variant = 'default',
}: QuizCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: variant === 'featured' ? 2 : 1,
        borderColor: variant === 'featured' ? 'primary.main' : 'divider',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {variant === 'featured' && (
        <Chip
          label="Popular"
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: -12,
            right: 16,
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, pt: variant === 'featured' ? 3 : 2 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          {questionCount && (
            <Chip
              label={`${questionCount} questions`}
              size="small"
              variant="outlined"
            />
          )}
          {estimatedTime && (
            <Chip
              label={estimatedTime}
              size="small"
              variant="outlined"
            />
          )}
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          component={Link}
          href={href}
          variant={variant === 'featured' ? 'contained' : 'outlined'}
          endIcon={<ArrowForwardIcon />}
          fullWidth
        >
          Start Quiz
        </Button>
      </CardActions>
    </Card>
  );
}
