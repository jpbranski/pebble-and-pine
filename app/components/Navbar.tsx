'use client';

import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { useThemeContext } from '../theme/ThemeRegistry';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Quizzes', href: '/quizzes' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleTheme } = useThemeContext();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2 }}>
        <Logo width={50} height={50} />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={pathname === item.href}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                mr: 4,
              }}
            >
              <Logo width={40} height={40} />
              <Box
                sx={{
                  ml: 1.5,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontFamily: theme.typography.h6.fontFamily,
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: theme.palette.text.primary,
                    letterSpacing: '0.02em',
                  }}
                >
                  Pebble & Pine Design
                </Box>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                justifyContent: 'center',
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: pathname === item.href ? 'primary.main' : 'text.primary',
                    fontWeight: pathname === item.href ? 600 : 400,
                    position: 'relative',
                    '&::after': pathname === item.href ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: 2,
                      bgcolor: 'primary.main',
                    } : {},
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              aria-label="toggle theme"
              sx={{ ml: 'auto' }}
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {/* Settings Icon (DEV CMS) - Only visible in development */}
            {process.env.NEXT_PUBLIC_ENABLE_DEV_CMS === 'true' && (
              <IconButton
                component={Link}
                href="/dev-cms"
                color="inherit"
                aria-label="developer settings"
                sx={{ ml: 1, display: { xs: 'none', md: 'inline-flex' } }}
              >
                <SettingsIcon />
              </IconButton>
            )}

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
