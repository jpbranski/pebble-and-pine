'use client';

import * as React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const moodboardImages = [
  {
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    title: 'Minimalist living room',
  },
  {
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
    title: 'Natural textures',
  },
  {
    img: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f',
    title: 'Elegant bedroom',
  },
  {
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    title: 'Neutral palette',
  },
  {
    img: 'https://images.unsplash.com/photo-1615874694520-474822394e73',
    title: 'Modern interior',
  },
  {
    img: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6',
    title: 'Warm lighting',
  },
];

export default function Moodboard() {
  const theme = useTheme();
  const [currentImages, setCurrentImages] = React.useState(moodboardImages);

  React.useEffect(() => {
    // Rotate images every 8 seconds
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const newImages = [...prev];
        const first = newImages.shift();
        if (first) newImages.push(first);
        return newImages;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 300, sm: 400, md: 450 },
        overflow: 'hidden',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(180deg, ${theme.palette.background.default}00 0%, ${theme.palette.background.default}40 100%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <ImageList
        sx={{
          width: '100%',
          height: '100%',
          m: 0,
          // Masonry layout
          columnCount: { xs: 2, sm: 3, md: 3 },
          columnGap: 8,
        }}
        variant="masonry"
        gap={8}
      >
        {currentImages.map((item, index) => (
          <ImageListItem
            key={`${item.img}-${index}`}
            sx={{
              transition: 'opacity 1s ease-in-out',
              opacity: 1,
              '& img': {
                borderRadius: 1,
              },
            }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
