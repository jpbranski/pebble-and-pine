import * as React from 'react';
import { Box, Container, Typography, Paper, Divider, Link as MuiLink } from '@mui/material';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review the terms and conditions for using the Pebble & Pine Design website and services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
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
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
            Terms of Service
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: {lastUpdated}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {/* Acceptance */}
          <section id="acceptance" aria-labelledby="acceptance-heading">
            <Typography variant="h5" component="h2" id="acceptance-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Welcome to Pebble & Pine Design. By accessing or using our website, you agree to be
              bound by these Terms of Service and all applicable laws and regulations. If you do
              not agree with any part of these terms, please do not use our website.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              These Terms of Service apply to all visitors, users, and others who access or use our
              website and services. We reserve the right to update these terms at any time, and
              your continued use of the website constitutes acceptance of any changes.
            </Typography>
          </section>

          {/* Site Purpose */}
          <section id="site-purpose" aria-labelledby="site-purpose-heading">
            <Typography variant="h5" component="h2" id="site-purpose-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              2. Purpose of This Website
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Pebble & Pine Design provides interior design services, inspiration, and resources
              through this website. Our services include:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Showcasing our design portfolio and completed projects</li>
              <li>Offering design consultations and professional services</li>
              <li>Providing design quizzes and interactive tools for inspiration</li>
              <li>Sharing curated product recommendations and affiliate links</li>
              <li>Publishing design tips, trends, and educational content</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The content on this website is for informational and inspirational purposes. Any
              design services require a separate service agreement.
            </Typography>
          </section>

          {/* Intellectual Property */}
          <section id="intellectual-property" aria-labelledby="intellectual-property-heading">
            <Typography variant="h5" component="h2" id="intellectual-property-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              3. Intellectual Property Rights
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              All content on this website, including but not limited to text, images, graphics,
              logos, photographs, design concepts, and software, is the property of Pebble & Pine
              Design or its content suppliers and is protected by copyright, trademark, and other
              intellectual property laws.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You may view and print pages from this website for your personal, non-commercial use,
              subject to the following restrictions:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>You must not modify or alter any content</li>
              <li>You must not remove any copyright or proprietary notices</li>
              <li>You must not use any content for commercial purposes without written permission</li>
              <li>You must not reproduce, distribute, or create derivative works</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Unauthorized use of any content may violate copyright, trademark, and other laws and
              could result in legal action.
            </Typography>
          </section>

          {/* User Responsibilities */}
          <section id="user-responsibilities" aria-labelledby="user-responsibilities-heading">
            <Typography variant="h5" component="h2" id="user-responsibilities-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              4. User Responsibilities
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              When using our website, you agree to:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Provide accurate and complete information when submitting forms</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use the website only for lawful purposes</li>
              <li>Respect the intellectual property rights of Pebble & Pine Design and others</li>
              <li>Not attempt to gain unauthorized access to any part of the website</li>
              <li>Not transmit any harmful code, viruses, or malicious software</li>
            </Box>
          </section>

          {/* Prohibited Actions */}
          <section id="prohibited-actions" aria-labelledby="prohibited-actions-heading">
            <Typography variant="h5" component="h2" id="prohibited-actions-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              5. Prohibited Uses
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You agree not to use this website in any way that:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Violates any applicable laws or regulations</li>
              <li>Infringes upon the rights of others</li>
              <li>Harasses, abuses, or harms another person</li>
              <li>Impersonates or misrepresents your affiliation with any person or entity</li>
              <li>Interferes with or disrupts the website or servers</li>
              <li>Attempts to scrape, spider, or harvest data from the website</li>
              <li>Engages in any form of automated data collection</li>
            </Box>
          </section>

          {/* Affiliate Disclosure */}
          <section id="affiliate-disclosure" aria-labelledby="affiliate-disclosure-heading">
            <Typography variant="h5" component="h2" id="affiliate-disclosure-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              6. Affiliate Disclosure
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              This website contains affiliate links to products and services. When you make a
              purchase through these links, we may receive a commission at no additional cost to
              you. These commissions help support our work and allow us to continue providing
              valuable content.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We only recommend products and services that we genuinely believe in and that align
              with our design philosophy. Our recommendations are based on our professional opinion
              and experience. However, individual results may vary, and we encourage you to conduct
              your own research before making any purchase.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The presence of an affiliate link does not influence our editorial content or
              professional design recommendations.
            </Typography>
          </section>

          {/* No Warranties */}
          <section id="no-warranties" aria-labelledby="no-warranties-heading">
            <Typography variant="h5" component="h2" id="no-warranties-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              7. Disclaimer of Warranties
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              This website and all content, services, and products are provided "as is" and "as
              available" without any warranties of any kind, either express or implied, including
              but not limited to:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties of non-infringement</li>
              <li>Warranties that the website will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the accuracy or reliability of information</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              While we strive to provide accurate and up-to-date information, we make no
              representations or warranties about the completeness, accuracy, or reliability of any
              content on this website.
            </Typography>
          </section>

          {/* Limitation of Liability */}
          <section id="limitation-liability" aria-labelledby="limitation-liability-heading">
            <Typography variant="h5" component="h2" id="limitation-liability-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              8. Limitation of Liability
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              To the fullest extent permitted by applicable law, Pebble & Pine Design, its owner,
              employees, and affiliates shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, goodwill, or other
              intangible losses resulting from:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Your access to or use of (or inability to access or use) the website</li>
              <li>Any conduct or content of any third party on the website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              In no event shall our total liability exceed the amount you paid us, if any, for
              accessing or using the website in the twelve months preceding the claim.
            </Typography>
          </section>

          {/* Changes to Terms */}
          <section id="changes-terms" aria-labelledby="changes-terms-heading">
            <Typography variant="h5" component="h2" id="changes-terms-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              9. Changes to These Terms
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We reserve the right to modify or replace these Terms of Service at any time at our
              sole discretion. When we make changes, we will update the "Last Updated" date at the
              top of this page. Material changes will be communicated through a notice on our
              website.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Your continued use of the website after any changes constitutes acceptance of the new
              Terms of Service. We encourage you to review these terms periodically.
            </Typography>
          </section>

          {/* Governing Law */}
          <section id="governing-law" aria-labelledby="governing-law-heading">
            <Typography variant="h5" component="h2" id="governing-law-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              10. Governing Law and Dispute Resolution
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the jurisdiction in which Pebble & Pine Design operates, without regard to its
              conflict of law provisions.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Any disputes arising out of or relating to these terms or your use of the website
              shall be resolved through good faith negotiation. If a resolution cannot be reached,
              disputes will be resolved through binding arbitration or in the courts of the
              applicable jurisdiction.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              If you have any questions or concerns about these Terms of Service, please{' '}
              <MuiLink component={Link} href="/contact" sx={{ color: 'primary.main' }}>
                contact us
              </MuiLink>
              .
            </Typography>
          </section>

          <Divider sx={{ my: 4 }} />

          {/* Related Links */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Related Legal Documents
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <MuiLink component={Link} href="/legal/privacy-policy">
                Privacy Policy
              </MuiLink>
              <MuiLink component={Link} href="/legal/gdpr">
                GDPR Compliance
              </MuiLink>
              <MuiLink component={Link} href="/legal/ccpa">
                CCPA Addendum
              </MuiLink>
              <MuiLink component={Link} href="/legal/accessibility">
                Accessibility Statement
              </MuiLink>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
