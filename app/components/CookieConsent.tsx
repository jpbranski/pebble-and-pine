'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  Typography,
  Slide,
  IconButton,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import CookieIcon from '@mui/icons-material/Cookie';
import Link from 'next/link';
import {
  getConsent,
  saveConsent,
  acceptAllConsent,
  rejectNonEssentialConsent,
  hasConsent,
  ConsentPreferences,
} from '../utils/consent';

const SlideTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookieConsent() {
  const [showBanner, setShowBanner] = React.useState(false);
  const [showPreferences, setShowPreferences] = React.useState(false);
  const [preferences, setPreferences] = React.useState<ConsentPreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: Date.now(),
    version: '1.0',
  });

  // Check consent on mount
  React.useEffect(() => {
    const consent = getConsent();
    if (consent) {
      setPreferences(consent);
      setShowBanner(false);
    } else {
      // Small delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllConsent();
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    rejectNonEssentialConsent();
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleOpenPreferences = () => {
    const current = getConsent();
    if (current) {
      setPreferences(current);
    }
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handlePreferenceChange = (category: keyof ConsentPreferences) => {
    if (category === 'essential') return; // Can't disable essential

    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Cookie Consent Banner */}
      <Slide direction="up" in={showBanner} timeout={500}>
        <Paper
          elevation={8}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            borderRadius: '16px 16px 0 0',
            bgcolor: 'background.paper',
            borderTop: '3px solid',
            borderColor: 'primary.main',
          }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
        >
          <Container maxWidth="lg">
            <Box sx={{ py: { xs: 3, md: 3.5 }, px: { xs: 2, md: 3 } }}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={3}
                alignItems={{ xs: 'flex-start', md: 'center' }}
                justifyContent="space-between"
              >
                {/* Content */}
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                    <CookieIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                      We Value Your Privacy
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, maxWidth: 600 }}>
                    We use cookies to enhance your browsing experience, analyze site traffic, and
                    provide personalized content. By clicking "Accept All", you consent to our use
                    of cookies.
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Learn more in our{' '}
                    <Link
                      href="/legal/privacy-policy"
                      style={{ color: 'inherit', textDecoration: 'underline' }}
                    >
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/legal/gdpr"
                      style={{ color: 'inherit', textDecoration: 'underline' }}
                    >
                      GDPR page
                    </Link>
                    .
                  </Typography>
                </Box>

                {/* Actions */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1.5}
                  sx={{ width: { xs: '100%', md: 'auto' } }}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={handleRejectNonEssential}
                    sx={{ minWidth: { xs: '100%', sm: 140 } }}
                  >
                    Reject Non-Essential
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<SettingsIcon />}
                    onClick={handleOpenPreferences}
                    sx={{ minWidth: { xs: '100%', sm: 160 } }}
                  >
                    Manage Preferences
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleAcceptAll}
                    sx={{ minWidth: { xs: '100%', sm: 120 } }}
                  >
                    Accept All
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Container>
        </Paper>
      </Slide>

      {/* Preferences Modal */}
      <Dialog
        open={showPreferences}
        onClose={() => setShowPreferences(false)}
        TransitionComponent={SlideTransition}
        maxWidth="sm"
        fullWidth
        aria-labelledby="cookie-preferences-title"
      >
        <DialogTitle id="cookie-preferences-title">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
              Cookie Preferences
            </Typography>
            <IconButton
              edge="end"
              onClick={() => setShowPreferences(false)}
              aria-label="Close preferences dialog"
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent dividers>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Customize your cookie preferences below. Essential cookies are always enabled as they
            are necessary for the website to function properly.
          </Typography>

          <Stack spacing={3}>
            {/* Essential Cookies */}
            <Box>
              <FormControlLabel
                control={<Switch checked={true} disabled />}
                label={
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Essential Cookies
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Required for basic site functionality. Cannot be disabled.
                    </Typography>
                  </Box>
                }
              />
            </Box>

            {/* Analytics Cookies */}
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                    color="primary"
                  />
                }
                label={
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Analytics Cookies
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Help us understand how visitors interact with our website through Google
                      Analytics.
                    </Typography>
                  </Box>
                }
              />
            </Box>

            {/* Marketing Cookies */}
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.marketing}
                    onChange={() => handlePreferenceChange('marketing')}
                    color="primary"
                  />
                }
                label={
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Marketing Cookies
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Track affiliate link performance and provide personalized recommendations.
                    </Typography>
                  </Box>
                }
              />
            </Box>
          </Stack>

          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 3 }}>
            You can update your preferences at any time. For more information, please review our{' '}
            <Link href="/legal/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            .
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={handleRejectNonEssential} color="inherit">
            Reject Non-Essential
          </Button>
          <Button onClick={handleSavePreferences} variant="contained">
            Save Preferences
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
