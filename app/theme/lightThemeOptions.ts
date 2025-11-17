import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4A5D54', // Deep forest green
      light: '#6B8078',
      dark: '#2F3D37',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#B8A07E', // Brushed gold/brass
      light: '#D4C3A8',
      dark: '#9A8363',
      contrastText: '#2C2C2C',
    },
    background: {
      default: '#FAF8F5', // Warm cream
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C', // Deep charcoal
      secondary: '#5A5A5A',
    },
    divider: 'rgba(74, 93, 84, 0.12)',
    error: {
      main: '#B85C50',
    },
    success: {
      main: '#6B8E7F',
    },
  },
  typography: {
    fontFamily: '"Century Gothic", "Futura", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Century Gothic", "Futura", sans-serif',
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Century Gothic", "Futura", sans-serif',
      fontWeight: 400,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: '"Century Gothic", "Futura", sans-serif',
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Century Gothic", "Futura", sans-serif',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Century Gothic", "Futura", sans-serif',
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Century Gothic", "Futura", sans-serif',
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '10px 24px',
          fontSize: '1rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(74, 93, 84, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(74, 93, 84, 0.12)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        },
      },
    },
  },
};

export default lightThemeOptions;
