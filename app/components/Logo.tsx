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
      {/* Pine Tree */}
      <g id="pine-tree">
        {/* Tree trunk */}
        <rect x="47" y="65" width="6" height="15" fill={primaryColor} />

        {/* Tree triangles - geometric pine shape */}
        <path
          d="M50 20 L35 45 L65 45 Z"
          fill={primaryColor}
        />
        <path
          d="M50 35 L38 55 L62 55 Z"
          fill={primaryColor}
        />
        <path
          d="M50 48 L40 65 L60 65 Z"
          fill={primaryColor}
        />
      </g>

      {/* Pebbles */}
      <g id="pebbles">
        {/* Left pebble */}
        <ellipse
          cx="32"
          cy="75"
          rx="7"
          ry="5"
          fill={secondaryColor}
          opacity="0.8"
        />

        {/* Center pebble */}
        <ellipse
          cx="50"
          cy="78"
          rx="5"
          ry="4"
          fill={secondaryColor}
          opacity="0.9"
        />

        {/* Right pebble */}
        <ellipse
          cx="68"
          cy="74"
          rx="6"
          ry="4.5"
          fill={secondaryColor}
          opacity="0.85"
        />
      </g>
    </svg>
  );
}
