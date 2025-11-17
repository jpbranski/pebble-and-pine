import * as React from 'react';
import { Box, Container, Typography, Paper, Divider, Link as MuiLink, Alert } from '@mui/material';
import type { Metadata } from 'next';
import Link from 'next/link';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Learn about our commitment to web accessibility and WCAG 2.1 AA compliance at Pebble & Pine Design.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  const lastUpdated = 'November 17, 2025';

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <AccessibilityNewIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
              Accessibility Statement
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: {lastUpdated}
          </Typography>

          <Alert severity="info" sx={{ mb: 4 }}>
            Pebble & Pine Design is committed to ensuring digital accessibility for all visitors,
            including people with disabilities. We are continually improving the user experience and
            applying relevant accessibility standards.
          </Alert>

          <Divider sx={{ mb: 4 }} />

          {/* Commitment */}
          <section id="commitment" aria-labelledby="commitment-heading">
            <Typography variant="h5" component="h2" id="commitment-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              1. Our Commitment to Accessibility
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              At Pebble & Pine Design, we believe that everyone deserves access to beautiful,
              functional design—both in physical spaces and in digital experiences. Accessibility is
              not just a legal requirement; it's a core value that reflects our design philosophy of
              creating inclusive, thoughtful spaces for all.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We are dedicated to providing a website that is accessible to the widest possible
              audience, regardless of technology or ability. This commitment extends to all aspects
              of our digital presence, from the content we create to the tools and features we
              implement.
            </Typography>
          </section>

          {/* WCAG Conformance */}
          <section id="wcag-conformance" aria-labelledby="wcag-conformance-heading">
            <Typography variant="h5" component="h2" id="wcag-conformance-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              2. Conformance Standards
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Our website strives to conform to the{' '}
              <MuiLink
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'primary.main' }}
              >
                Web Content Accessibility Guidelines (WCAG) 2.1
              </MuiLink>{' '}
              at Level AA. These guidelines explain how to make web content more accessible for
              people with disabilities and more user-friendly for everyone.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              WCAG 2.1 Level AA conformance means our website meets established criteria across four
              key principles:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                <strong>Perceivable:</strong> Information and user interface components must be
                presentable to users in ways they can perceive
              </li>
              <li>
                <strong>Operable:</strong> User interface components and navigation must be operable
                by all users
              </li>
              <li>
                <strong>Understandable:</strong> Information and user interface operation must be
                understandable
              </li>
              <li>
                <strong>Robust:</strong> Content must be robust enough to be interpreted reliably by
                a wide variety of user agents, including assistive technologies
              </li>
            </Box>
          </section>

          {/* Measures Taken */}
          <section id="measures" aria-labelledby="measures-heading">
            <Typography variant="h5" component="h2" id="measures-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              3. Accessibility Measures
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We have implemented numerous features and practices to ensure our website is
              accessible:
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Visual Design & Contrast
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>High contrast color schemes meeting WCAG AA standards (minimum 4.5:1 ratio)</li>
              <li>Thoughtful use of color with additional visual indicators (not relying on color alone)</li>
              <li>Readable font sizes and scalable text</li>
              <li>Responsive design that adapts to different screen sizes and zoom levels</li>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Keyboard Navigation
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Full keyboard navigation support for all interactive elements</li>
              <li>Visible focus indicators showing which element has keyboard focus</li>
              <li>Logical tab order that follows the visual flow of the page</li>
              <li>No keyboard traps that prevent users from navigating away</li>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Screen Reader Compatibility
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Semantic HTML markup with proper heading hierarchy</li>
              <li>ARIA labels and landmarks for enhanced navigation</li>
              <li>Alternative text for all meaningful images</li>
              <li>Clear, descriptive link text and button labels</li>
              <li>Properly labeled form inputs and error messages</li>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Content Structure
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Clear page titles and descriptive headings</li>
              <li>Consistent navigation across all pages</li>
              <li>Skip navigation links for quick access to main content</li>
              <li>Plain language and clear instructions</li>
              <li>Organized content with logical reading order</li>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Interactive Features
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Accessible forms with clear labels and error handling</li>
              <li>Modal dialogs that trap focus appropriately and can be closed with the keyboard</li>
              <li>Time limits with options to extend or disable when appropriate</li>
              <li>No auto-playing audio or video that cannot be paused</li>
            </Box>
          </section>

          {/* Known Limitations */}
          <section id="limitations" aria-labelledby="limitations-heading">
            <Typography variant="h5" component="h2" id="limitations-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              4. Known Limitations
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Despite our best efforts to ensure accessibility, there may be some limitations. We
              are aware of the following areas that may present challenges:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                <strong>Third-party content:</strong> Some embedded content from third-party
                providers (such as social media feeds or affiliate widgets) may not be fully
                accessible. We carefully vet our partners and choose the most accessible options
                available.
              </li>
              <li>
                <strong>Project images:</strong> While we provide alternative text for portfolio
                images, the visual nature of interior design means some nuances may be difficult to
                convey in text alone. We are exploring ways to enhance image descriptions.
              </li>
              <li>
                <strong>PDF downloads:</strong> Some downloadable PDF resources may have
                accessibility limitations. We are working to ensure all PDFs are tagged and
                accessible.
              </li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We are actively working to address these limitations and improve accessibility across
              all aspects of our website.
            </Typography>
          </section>

          {/* Feedback */}
          <section id="feedback" aria-labelledby="feedback-heading">
            <Typography variant="h5" component="h2" id="feedback-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              5. Contact Us About Accessibility
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We welcome your feedback on the accessibility of our website. If you encounter any
              accessibility barriers or have suggestions for improvement, please let us know:
            </Typography>
            <Box sx={{ pl: 2, mb: 3, bgcolor: 'action.hover', p: 2, borderRadius: 1 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                <strong>Email:</strong> accessibility@pebbleandpinedesign.com
                <br />
                <strong>Contact Form:</strong>{' '}
                <MuiLink component={Link} href="/contact" sx={{ color: 'primary.main' }}>
                  Submit an accessibility inquiry
                </MuiLink>
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              When reporting an accessibility issue, please include:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>The web page or feature you were trying to access</li>
              <li>A description of the problem you encountered</li>
              <li>The assistive technology you were using (if applicable)</li>
              <li>Your browser and operating system</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We aim to respond to accessibility feedback within 2 business days and will work with
              you to provide the information or functionality you need through an alternative
              accessible method while we address the issue.
            </Typography>
          </section>

          {/* Ongoing Improvements */}
          <section id="improvements" aria-labelledby="improvements-heading">
            <Typography variant="h5" component="h2" id="improvements-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              6. Ongoing Improvements
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Accessibility is an ongoing effort, not a one-time achievement. We are committed to
              continuous improvement and regularly:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Conduct accessibility audits of new features before launch</li>
              <li>Test our website with various assistive technologies</li>
              <li>Stay informed about evolving accessibility standards and best practices</li>
              <li>Provide accessibility training for our team</li>
              <li>Incorporate user feedback to identify and address issues</li>
              <li>Review and update our accessibility practices quarterly</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We view accessibility as a journey of continuous learning and improvement. Your
              feedback helps us create a better experience for everyone.
            </Typography>
          </section>

          {/* Technical Specifications */}
          <section id="technical" aria-labelledby="technical-heading">
            <Typography variant="h5" component="h2" id="technical-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              7. Technical Specifications
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              This website is built with accessibility in mind using modern web technologies:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>HTML5 with semantic elements</li>
              <li>WAI-ARIA attributes for enhanced accessibility</li>
              <li>CSS for visual styling (not for structural layout)</li>
              <li>JavaScript that degrades gracefully</li>
              <li>Responsive design compatible with mobile devices and tablets</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The website is tested for compatibility with recent versions of popular browsers
              (Chrome, Firefox, Safari, Edge) and major screen readers (JAWS, NVDA, VoiceOver).
            </Typography>
          </section>

          <Divider sx={{ my: 4 }} />

          {/* Related Links */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Related Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <MuiLink component={Link} href="/legal/privacy-policy">
                Privacy Policy
              </MuiLink>
              <MuiLink component={Link} href="/legal/terms-of-service">
                Terms of Service
              </MuiLink>
              <MuiLink component={Link} href="/contact">
                Contact Us
              </MuiLink>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
