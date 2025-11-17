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
      {/* Geometric Pine Tree - Elegant, staggered foliage tiers */}
      <g id="pine-tree">
        {/* Minimal trunk with slight taper */}
        <path
          d="M48 68 L48 82 L52 82 L52 68 Z"
          fill={primaryColor}
          rx="1"
        />

        {/* Top tier - smallest, slightly rounded */}
        <path
          d="M50 15 C49.5 15 49 15.3 48.5 15.8 L38 32 C37.5 32.8 38 34 39 34 L61 34 C62 34 62.5 32.8 62 32 L51.5 15.8 C51 15.3 50.5 15 50 15 Z"
          fill={primaryColor}
          strokeLinejoin="round"
        />

        {/* Second tier - medium, offset for stagger effect */}
        <path
          d="M50 30 C49.3 30 48.6 30.4 48 31 L35 48 C34.3 49 34.8 50.5 36 50.5 L64 50.5 C65.2 50.5 65.7 49 65 48 L52 31 C51.4 30.4 50.7 30 50 30 Z"
          fill={primaryColor}
          strokeLinejoin="round"
        />

        {/* Third tier - larger, staggered */}
        <path
          d="M50 46 C49.2 46 48.4 46.5 47.5 47.3 L33 64 C32 65.2 32.6 67 34 67 L66 67 C67.4 67 68 65.2 67 64 L52.5 47.3 C51.6 46.5 50.8 46 50 46 Z"
          fill={primaryColor}
          strokeLinejoin="round"
        />

        {/* Fourth tier - bottom foliage, widest */}
        <path
          d="M50 62 C49 62 48 62.6 47 63.5 L37 74 C36 75.3 36.7 77 38.5 77 L61.5 77 C63.3 77 64 75.3 63 74 L53 63.5 C52 62.6 51 62 50 62 Z"
          fill={primaryColor}
          opacity="0.9"
          strokeLinejoin="round"
        />
      </g>

      {/* Small circular pebbles at base - zen aesthetic */}
      <g id="pebbles">
        {/* Left pebble */}
        <circle
          cx="30"
          cy="84"
          r="4.5"
          fill={secondaryColor}
          opacity="0.75"
        />

        {/* Center-right pebble */}
        <circle
          cx="56"
          cy="85"
          r="3.5"
          fill={secondaryColor}
          opacity="0.85"
        />

        {/* Right pebble */}
        <circle
          cx="70"
          cy="83"
          r="4"
          fill={secondaryColor}
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
