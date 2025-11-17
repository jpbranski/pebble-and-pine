import * as React from 'react';
import { Box, Container, Typography, Paper, Divider, Link as MuiLink, Stack } from '@mui/material';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Pebble & Pine Design collects, uses, and protects your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: {lastUpdated}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {/* Introduction */}
          <section id="introduction" aria-labelledby="introduction-heading">
            <Typography variant="h5" component="h2" id="introduction-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              1. Introduction
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Welcome to Pebble & Pine Design. We are committed to protecting your privacy and
              ensuring transparency about how we collect, use, and safeguard your personal
              information. This Privacy Policy explains our practices regarding data collection and
              your rights as a user of our website.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              By using our website, you agree to the collection and use of information in accordance
              with this policy. We respect your privacy and are dedicated to maintaining the
              confidentiality and security of your personal data.
            </Typography>
          </section>

          {/* Data We Collect */}
          <section id="data-collection" aria-labelledby="data-collection-heading">
            <Typography variant="h5" component="h2" id="data-collection-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We collect several types of information to provide and improve our services:
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Contact Form Information
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              When you submit our contact form or reach out for design services, we collect:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Project details and preferences</li>
              <li>Any additional information you choose to share</li>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Quiz and Survey Data
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              When you participate in our design quizzes (such as the Aesthetic Finder or Design
              Vibe Check), we collect your responses to provide personalized recommendations. This
              data is processed locally and is not stored on our servers unless you choose to share
              your results via email.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Cookies and Tracking Technologies
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We use cookies and similar tracking technologies to enhance your experience. These
              include:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                <strong>Essential Cookies:</strong> Required for basic website functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                (Google Analytics)
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Track affiliate link performance
              </li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You can manage your cookie preferences through our{' '}
              <MuiLink component={Link} href="/" sx={{ color: 'primary.main' }}>
                cookie consent banner
              </MuiLink>
              .
            </Typography>
          </section>

          {/* Google Analytics */}
          <section id="google-analytics" aria-labelledby="google-analytics-heading">
            <Typography variant="h5" component="h2" id="google-analytics-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              3. Google Analytics
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              With your consent, we use Google Analytics to understand how visitors interact with
              our website. Google Analytics collects information such as:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Pages visited and time spent on each page</li>
              <li>Browser type and device information</li>
              <li>Geographic location (city/country level)</li>
              <li>Traffic sources and referral information</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Google Analytics only loads after you provide explicit consent through our cookie
              banner. You can learn more about how Google uses data at{' '}
              <MuiLink
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's Privacy Policy
              </MuiLink>
              .
            </Typography>
          </section>

          {/* Affiliate Links */}
          <section id="affiliate-links" aria-labelledby="affiliate-links-heading">
            <Typography variant="h5" component="h2" id="affiliate-links-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              4. Affiliate Links
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Our website contains affiliate links to products and services we recommend. When you
              click on these links and make a purchase, we may earn a commission at no additional
              cost to you. We only recommend products we genuinely believe in and that align with
              our design philosophy.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Affiliate partners may use cookies to track conversions. Please review their privacy
              policies for more information about their data practices.
            </Typography>
          </section>

          {/* How We Use Information */}
          <section id="data-usage" aria-labelledby="data-usage-heading">
            <Typography variant="h5" component="h2" id="data-usage-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              5. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We use the collected information for the following purposes:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>To respond to your inquiries and provide design services</li>
              <li>To deliver personalized quiz results and recommendations</li>
              <li>To improve our website content and user experience</li>
              <li>To analyze website traffic and visitor behavior</li>
              <li>To send occasional updates about our services (with your consent)</li>
              <li>To comply with legal obligations</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We will never sell your personal information to third parties.
            </Typography>
          </section>

          {/* Data Retention */}
          <section id="data-retention" aria-labelledby="data-retention-heading">
            <Typography variant="h5" component="h2" id="data-retention-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              6. Data Retention
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We retain your personal information only for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy. Contact form submissions and project
              inquiries are retained for up to 3 years to maintain our business records and provide
              ongoing support.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You may request deletion of your data at any time by contacting us using the
              information provided below.
            </Typography>
          </section>

          {/* User Rights */}
          <section id="user-rights" aria-labelledby="user-rights-heading">
            <Typography variant="h5" component="h2" id="user-rights-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              7. Your Rights
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You have the following rights regarding your personal data:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                <strong>Right to Access:</strong> Request a copy of the personal data we hold about
                you
              </li>
              <li>
                <strong>Right to Rectification:</strong> Request correction of inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your personal data
              </li>
              <li>
                <strong>Right to Restriction:</strong> Request limitation of how we process your
                data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Receive your data in a
                machine-readable format
              </li>
              <li>
                <strong>Right to Object:</strong> Object to certain types of data processing
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at
                any time
              </li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              To exercise these rights, please contact us at the email address provided below. We
              will respond to your request within 30 days.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              If you are located in the European Union, please see our{' '}
              <MuiLink component={Link} href="/legal/gdpr" sx={{ color: 'primary.main' }}>
                GDPR Compliance page
              </MuiLink>
              . California residents should review our{' '}
              <MuiLink component={Link} href="/legal/ccpa" sx={{ color: 'primary.main' }}>
                CCPA Addendum
              </MuiLink>
              .
            </Typography>
          </section>

          {/* Children's Privacy */}
          <section id="childrens-privacy" aria-labelledby="childrens-privacy-heading">
            <Typography variant="h5" component="h2" id="childrens-privacy-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              8. Children's Privacy
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have inadvertently
              collected information from a child, please contact us immediately so we can delete the
              information.
            </Typography>
          </section>

          {/* Changes to Policy */}
          <section id="policy-changes" aria-labelledby="policy-changes-heading">
            <Typography variant="h5" component="h2" id="policy-changes-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              9. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or for legal, operational, or regulatory reasons. When we make significant
              changes, we will update the "Last Updated" date at the top of this page and may notify
              you through our website or via email.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We encourage you to review this Privacy Policy periodically to stay informed about how
              we protect your information.
            </Typography>
          </section>

          {/* Contact */}
          <section id="contact" aria-labelledby="contact-heading">
            <Typography variant="h5" component="h2" id="contact-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              10. Contact Us
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us:
            </Typography>
            <Box sx={{ pl: 2, mb: 2 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                <strong>Pebble & Pine Design</strong>
                <br />
                Email: privacy@pebbleandpinedesign.com
                <br />
                Or use our{' '}
                <MuiLink component={Link} href="/contact" sx={{ color: 'primary.main' }}>
                  contact form
                </MuiLink>
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We value your privacy and will respond to your inquiry as quickly as possible,
              typically within 48 hours.
            </Typography>
          </section>

          <Divider sx={{ my: 4 }} />

          {/* Related Links */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Related Legal Documents
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <MuiLink component={Link} href="/legal/terms-of-service">
                Terms of Service
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
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
