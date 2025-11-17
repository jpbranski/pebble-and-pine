'use client';

import * as React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface PdfDownloadButtonProps {
  label: string;
  path: string;
  variant?: 'text' | 'outlined' | 'contained';
}

export default function PdfDownloadButton({
  label,
  path,
  variant = 'outlined',
}: PdfDownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = path;
    link.download = path.split('/').pop() || 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant={variant}
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
    >
      {label}
    </Button>
  );
}
