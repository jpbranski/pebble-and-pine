'use client';

import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
  CardActions,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface AffiliateProductCardProps {
  title: string;
  description: string;
  image: string;
  externalLink: string;
  category?: string;
  price?: string;
  isFeatured?: boolean;
  affiliateType?: 'amazon' | 'rewardstyle' | 'none';
}

export default function AffiliateProductCard({
  title,
  description,
  image,
  externalLink,
  category,
  price,
  isFeatured = false,
  affiliateType = 'none',
}: AffiliateProductCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {isFeatured && (
        <Chip
          label="Featured"
          color="secondary"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
          }}
        />
      )}
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        {category && (
          <Chip
            label={category}
            size="small"
            variant="outlined"
            sx={{ mb: 1, fontSize: '0.75rem' }}
          />
        )}
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        {price && (
          <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
            {price}
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          endIcon={<OpenInNewIcon />}
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Product
        </Button>
      </CardActions>
      {affiliateType !== 'none' && (
        <Box sx={{ px: 2, pb: 1 }}>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem' }}>
            Affiliate link - supports this site
          </Typography>
        </Box>
      )}
    </Card>
  );
}
