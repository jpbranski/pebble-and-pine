import { ThemeOptions } from '@mui/material/styles';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#7FA094', // Lighter forest green for dark mode
      light: '#A3BFB3',
      dark: '#5A7A6F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D4C3A8', // Lighter brass for dark mode
      light: '#E5D9C8',
      dark: '#B8A07E',
      contrastText: '#1A1A1A',
    },
    background: {
      default: '#1A1D1C', // Deep charcoal
      paper: '#242726',
    },
    text: {
      primary: '#E8E6E3', // Warm off-white
      secondary: '#B8B5B0',
    },
    divider: 'rgba(232, 230, 227, 0.12)',
    error: {
      main: '#D48B82',
    },
    success: {
      main: '#8FB5A5',
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
            boxShadow: '0 2px 8px rgba(127, 160, 148, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(232, 230, 227, 0.12)',
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

export default darkThemeOptions;
