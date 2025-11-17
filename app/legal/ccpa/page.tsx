import * as React from 'react';
import { Box, Container, Typography, Paper, Divider, Link as MuiLink, Alert } from '@mui/material';
import type { Metadata } from 'next';
import Link from 'next/link';
import GavelIcon from '@mui/icons-material/Gavel';

export const metadata: Metadata = {
  title: 'CCPA Addendum',
  description:
    'California Consumer Privacy Act (CCPA) information for California residents visiting Pebble & Pine Design.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CCPAPage() {
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
            <GavelIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
              California Privacy Rights
            </Typography>
          </Box>

          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
            CCPA Addendum
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: {lastUpdated}
          </Typography>

          <Alert severity="info" sx={{ mb: 4 }}>
            This page provides additional information for California residents about their privacy
            rights under the California Consumer Privacy Act (CCPA) and the California Privacy
            Rights Act (CPRA).
          </Alert>

          <Divider sx={{ mb: 4 }} />

          {/* Introduction */}
          <section id="ccpa-introduction" aria-labelledby="ccpa-introduction-heading">
            <Typography variant="h5" component="h2" id="ccpa-introduction-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              1. Introduction to CCPA
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The California Consumer Privacy Act (CCPA), as amended by the California Privacy
              Rights Act (CPRA), grants California residents specific rights regarding their
              personal information. This addendum supplements our{' '}
              <MuiLink component={Link} href="/legal/privacy-policy" sx={{ color: 'primary.main' }}>
                Privacy Policy
              </MuiLink>{' '}
              and provides California-specific information.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              At Pebble & Pine Design, we respect your privacy rights and are committed to
              transparency about our data practices. This page explains what information we collect,
              how we use it, and the rights you have as a California resident.
            </Typography>
          </section>

          {/* Information Collection */}
          <section id="information-collected" aria-labelledby="information-collected-heading">
            <Typography variant="h5" component="h2" id="information-collected-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              2. Categories of Information Collected
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              In the past 12 months, we have collected the following categories of personal
              information from California consumers:
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Identifiers
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Name, email address, phone number</li>
              <li>IP address, device identifiers, cookies</li>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ pl: 2, mb: 2 }}>
              <strong>Source:</strong> Directly from you (contact forms, inquiries); automatically
              collected (cookies, web analytics)
              <br />
              <strong>Business Purpose:</strong> Responding to inquiries, providing services,
              website analytics, user experience improvement
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Commercial Information
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Design preferences and project requirements</li>
              <li>Interactions with affiliate product recommendations</li>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ pl: 2, mb: 2 }}>
              <strong>Source:</strong> Directly from you (quizzes, forms); automatically collected
              (affiliate link clicks)
              <br />
              <strong>Business Purpose:</strong> Providing personalized design recommendations,
              affiliate tracking
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Internet or Network Activity
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Browsing history on our website</li>
              <li>Interaction with website features</li>
              <li>Pages visited, time on site, click patterns</li>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ pl: 2, mb: 2 }}>
              <strong>Source:</strong> Automatically collected (Google Analytics with consent)
              <br />
              <strong>Business Purpose:</strong> Website analytics, improving user experience,
              understanding visitor behavior
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Inferences
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Design style preferences based on quiz responses</li>
              <li>Interests derived from browsing behavior</li>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ pl: 2, mb: 2 }}>
              <strong>Source:</strong> Derived from your interactions with our website
              <br />
              <strong>Business Purpose:</strong> Providing personalized design recommendations
            </Typography>

            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mt: 3 }}>
              We do not collect or process sensitive personal information as defined by the CCPA,
              such as Social Security numbers, financial account information, precise geolocation,
              or health data.
            </Typography>
          </section>

          {/* Consumer Rights */}
          <section id="consumer-rights" aria-labelledby="consumer-rights-heading">
            <Typography variant="h5" component="h2" id="consumer-rights-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              3. Your California Consumer Rights
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              As a California resident, you have the following rights:
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Know
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You have the right to request that we disclose:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>The categories of personal information we collected about you</li>
              <li>The categories of sources from which we collected your information</li>
              <li>Our business or commercial purpose for collecting your information</li>
              <li>
                The categories of third parties with whom we share your personal information
              </li>
              <li>The specific pieces of personal information we collected about you</li>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Delete
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You have the right to request deletion of your personal information that we have
              collected, subject to certain exceptions (e.g., completing transactions, detecting
              security incidents, complying with legal obligations).
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Correct
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You have the right to request correction of inaccurate personal information we
              maintain about you.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Opt-Out of Sale/Sharing
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You have the right to opt-out of the "sale" or "sharing" of your personal information
              for cross-context behavioral advertising. <strong>However, we do not sell your
              personal information</strong> as defined by the CCPA. We do not share your personal
              information for cross-context behavioral advertising purposes.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Limit Use of Sensitive Personal Information
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              While we do not collect sensitive personal information as defined by CCPA, you would
              have the right to limit its use if we did.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Non-Discrimination
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You have the right to not be discriminated against for exercising any of your CCPA
              rights. We will not:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Deny you goods or services</li>
              <li>Charge different prices or rates</li>
              <li>Provide a different level or quality of services</li>
              <li>Suggest that you will receive different prices or quality of services</li>
            </Box>
          </section>

          {/* No Sale Statement */}
          <section id="no-sale" aria-labelledby="no-sale-heading">
            <Typography variant="h5" component="h2" id="no-sale-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              4. We Do Not Sell Your Personal Information
            </Typography>
            <Alert severity="success" sx={{ mb: 2 }}>
              Pebble & Pine Design does not sell personal information.
            </Alert>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We want to be absolutely clear: <strong>we do not sell your personal information</strong> to
              third parties for monetary or other valuable consideration. While we use affiliate
              links that may track clicks, this activity does not constitute a "sale" under CCPA as
              we do not receive compensation specifically for your personal information.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We also do not "share" personal information for cross-context behavioral advertising
              as defined by the CCPA. Our use of cookies for analytics is based on consent and does
              not involve sharing data with third parties for advertising purposes.
            </Typography>
          </section>

          {/* Exercising Rights */}
          <section id="exercising-rights" aria-labelledby="exercising-rights-heading">
            <Typography variant="h5" component="h2" id="exercising-rights-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              5. How to Exercise Your Rights
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              California residents can exercise their CCPA rights by contacting us through the
              following methods:
            </Typography>
            <Box sx={{ pl: 2, mb: 3, bgcolor: 'action.hover', p: 2, borderRadius: 1 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                <strong>Email:</strong> privacy@pebbleandpinedesign.com
                <br />
                <strong>Subject Line:</strong> "CCPA Request - [Right You Wish to Exercise]"
                <br />
                <strong>Contact Form:</strong>{' '}
                <MuiLink component={Link} href="/contact" sx={{ color: 'primary.main' }}>
                  Submit a CCPA request
                </MuiLink>
              </Typography>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Verification Process
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              To protect your privacy, we need to verify your identity before fulfilling your
              request. We will ask you to provide:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Your full name and email address</li>
              <li>A description of your relationship with Pebble & Pine Design</li>
              <li>Additional information to match against our records (if needed)</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              For requests to delete, we may require additional verification steps to ensure we are
              deleting the correct person's information.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Authorized Agents
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You may designate an authorized agent to submit a request on your behalf. The agent
              must provide:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Written permission from you to act on your behalf</li>
              <li>Proof of their identity</li>
              <li>Verification of your identity</li>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Response Timeline
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We will acknowledge receipt of your request within 10 business days and respond
              substantively within 45 days. If we need more time (up to 90 days total), we will
              notify you of the extension and the reason.
            </Typography>
          </section>

          {/* Children's Privacy */}
          <section id="childrens-privacy" aria-labelledby="childrens-privacy-heading">
            <Typography variant="h5" component="h2" id="childrens-privacy-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              6. Children's Privacy
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Our website is not directed to individuals under 18 years of age. We do not knowingly
              collect personal information from minors. We do not sell the personal information of
              minors under 16 years of age.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              If you believe we have inadvertently collected information from a minor, please
              contact us immediately so we can delete it.
            </Typography>
          </section>

          {/* Data Retention */}
          <section id="data-retention" aria-labelledby="data-retention-heading">
            <Typography variant="h5" component="h2" id="data-retention-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              7. Data Retention
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We retain personal information only for as long as necessary to fulfill the purposes
              for which it was collected, including:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                <strong>Contact form data:</strong> Up to 3 years for business records and customer
                service
              </li>
              <li>
                <strong>Analytics data:</strong> Retained by Google Analytics according to their
                policies (typically 26 months)
              </li>
              <li>
                <strong>Cookie consent:</strong> Stored locally until you clear your preferences
              </li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              After the retention period, we securely delete or anonymize personal information.
            </Typography>
          </section>

          {/* Contact Information */}
          <section id="contact" aria-labelledby="contact-heading">
            <Typography variant="h5" component="h2" id="contact-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              8. Contact Information
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              For questions about this CCPA addendum or to exercise your rights:
            </Typography>
            <Box sx={{ pl: 2, mb: 2 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                <strong>Pebble & Pine Design</strong>
                <br />
                Email: privacy@pebbleandpinedesign.com
                <br />
                Contact Form:{' '}
                <MuiLink component={Link} href="/contact" sx={{ color: 'primary.main' }}>
                  pebbleandpinedesign.com/contact
                </MuiLink>
              </Typography>
            </Box>
          </section>

          {/* Updates */}
          <section id="updates" aria-labelledby="updates-heading">
            <Typography variant="h5" component="h2" id="updates-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              9. Updates to This Notice
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We may update this CCPA addendum from time to time to reflect changes in our
              practices or legal requirements. When we make material changes, we will update the
              "Last Updated" date and may provide additional notice.
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
              <MuiLink component={Link} href="/legal/terms-of-service">
                Terms of Service
              </MuiLink>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
