'use client';

import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  CardActionArea,
} from '@mui/material';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  shortDescription: string;
  slug: string;
  image: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  category,
  shortDescription,
  slug,
  image,
  tags = [],
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardActionArea component={Link} href={`/projects/${slug}`} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mb: 1 }}>
            <Chip
              label={category}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          </Box>
          <Typography variant="h5" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {shortDescription}
          </Typography>
          {tags.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {tags.slice(0, 3).map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="filled"
                  sx={{
                    bgcolor: 'action.hover',
                    fontSize: '0.7rem',
                    height: 20,
                  }}
                />
              ))}
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
