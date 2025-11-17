'use client';

import * as React from 'react';
import { ImageList, ImageListItem, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface GalleryGridProps {
  images: string[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <Box sx={{ width: '100%', overflowY: 'auto' }}>
      <ImageList variant="masonry" cols={cols} gap={16}>
        {images.map((img, index) => (
          <ImageListItem
            key={index}
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
                opacity: 0.9,
              },
              '& img': {
                borderRadius: 1,
              },
            }}
            onClick={() => onImageClick(index)}
          >
            <img
              src={`${img}?w=248&fit=crop&auto=format`}
              srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
