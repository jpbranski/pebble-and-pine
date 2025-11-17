'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/material';

interface LogoProps {
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
}

export default function Logo({ width = 60, height = 60, sx }: LogoProps) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={sx as React.CSSProperties}
      aria-label="Pebble & Pine Design Logo"
    >
      {/* Geometric Pine Tree - Refined proportions with natural taper */}
      <g id="pine-tree">
        {/* Shortened trunk with subtle taper */}
        <path
          d="M48.5 70 L48 78 L52 78 L51.5 70 Z"
          fill={primaryColor}
        />

        {/* Top tier - narrow, pointed apex with subtle curve */}
        <path
          d="M50 15 Q49.3 15 48.8 15.5 Q48 16 47 17.5 L40.5 30 Q39.8 31.2 40.2 32.5 Q40.5 33.5 41.5 33.5 L58.5 33.5 Q59.5 33.5 59.8 32.5 Q60.2 31.2 59.5 30 L53 17.5 Q52 16 51.2 15.5 Q50.7 15 50 15 Z"
          fill={primaryColor}
          strokeLinejoin="round"
        />

        {/* Second tier - gradual widening with curved edges */}
        <path
          d="M50 29.5 Q49.1 29.5 48.2 30.2 Q47 31 45.5 33 L36 47 Q35 48.5 35.4 49.8 Q35.8 51 37 51 L63 51 Q64.2 51 64.6 49.8 Q65 48.5 64 47 L54.5 33 Q53 31 51.8 30.2 Q50.9 29.5 50 29.5 Z"
          fill={primaryColor}
          strokeLinejoin="round"
        />

        {/* Third tier - wider base with natural curves */}
        <path
          d="M50 46.5 Q48.8 46.5 47.6 47.4 Q46 48.5 44 51 L32.5 65.5 Q31.2 67.3 31.8 68.8 Q32.2 70 33.5 70 L66.5 70 Q67.8 70 68.2 68.8 Q68.8 67.3 67.5 65.5 L56 51 Q54 48.5 52.4 47.4 Q51.2 46.5 50 46.5 Z"
          fill={primaryColor}
          strokeLinejoin="round"
        />

        {/* Fourth tier - widest bottom foliage with pronounced spread */}
        <path
          d="M50 65 Q48.5 65 46.8 66.2 Q45 67.5 42.5 70 L35 78.5 Q33.5 80.5 34.3 82 Q34.8 83 36.5 83 L63.5 83 Q65.2 83 65.7 82 Q66.5 80.5 65 78.5 L57.5 70 Q55 67.5 53.2 66.2 Q51.5 65 50 65 Z"
          fill={primaryColor}
          opacity="0.9"
          strokeLinejoin="round"
        />
      </g>

      {/* Small circular pebbles at base - zen aesthetic */}
      <g id="pebbles">
        {/* Left pebble */}
        <circle
          cx="28"
          cy="88"
          r="3.8"
          fill={secondaryColor}
          opacity="0.75"
        />

        {/* Center-right pebble */}
        <circle
          cx="54"
          cy="89"
          r="3.2"
          fill={secondaryColor}
          opacity="0.85"
        />

        {/* Right pebble */}
        <circle
          cx="70"
          cy="87.5"
          r="3.5"
          fill={secondaryColor}
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
