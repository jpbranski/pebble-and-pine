import * as React from 'react';
import { Box, Container, Typography, Paper, Divider, Link as MuiLink, Alert } from '@mui/material';
import type { Metadata } from 'next';
import Link from 'next/link';
import SecurityIcon from '@mui/icons-material/Security';

export const metadata: Metadata = {
  title: 'GDPR Compliance',
  description:
    'Information about how Pebble & Pine Design complies with the General Data Protection Regulation (GDPR) for EU visitors.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function GDPRPage() {
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
            <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
              GDPR Compliance
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: {lastUpdated}
          </Typography>

          <Alert severity="success" sx={{ mb: 4 }}>
            Pebble & Pine Design is committed to protecting the privacy and personal data of all
            visitors, including those from the European Union. This page outlines how we comply with
            the General Data Protection Regulation (GDPR).
          </Alert>

          <Divider sx={{ mb: 4 }} />

          {/* Introduction */}
          <section id="introduction" aria-labelledby="introduction-heading">
            <Typography variant="h5" component="h2" id="introduction-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              1. Introduction to GDPR
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The General Data Protection Regulation (GDPR) is a comprehensive data protection law
              that came into effect on May 25, 2018. It applies to all organizations that process
              the personal data of individuals located in the European Union, regardless of where
              the organization is based.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              At Pebble & Pine Design, we take our GDPR obligations seriously. We are committed to
              processing your personal data lawfully, fairly, and transparently. This page explains
              how we comply with GDPR principles and your rights under this regulation.
            </Typography>
          </section>

          {/* Personal Data */}
          <section id="personal-data" aria-labelledby="personal-data-heading">
            <Typography variant="h5" component="h2" id="personal-data-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              2. What Qualifies as Personal Data
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Under GDPR, "personal data" means any information relating to an identified or
              identifiable natural person. On our website, this includes:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number
              </li>
              <li>
                <strong>Communication Data:</strong> Messages sent through our contact form,
                project inquiries, design preferences
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, device information,
                cookie identifiers
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on site, referral sources
                (collected via Google Analytics with consent)
              </li>
              <li>
                <strong>Quiz Responses:</strong> Your answers to design quizzes (processed locally,
                not stored unless you opt to share results)
              </li>
            </Box>
          </section>

          {/* Lawful Basis */}
          <section id="lawful-basis" aria-labelledby="lawful-basis-heading">
            <Typography variant="h5" component="h2" id="lawful-basis-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              3. Lawful Bases for Processing
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              GDPR requires that we have a lawful basis for processing your personal data. We rely
              on the following legal grounds:
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Consent
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We process certain data based on your explicit consent, including:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Analytics cookies and Google Analytics tracking</li>
              <li>Marketing cookies for affiliate tracking</li>
              <li>Optional marketing communications</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You provide consent through our cookie banner, and you may withdraw it at any time
              without affecting the lawfulness of processing before withdrawal.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Legitimate Interests
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We process some data based on our legitimate business interests, such as:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Responding to your inquiries and providing design services</li>
              <li>Improving our website and services</li>
              <li>Preventing fraud and ensuring website security</li>
              <li>Analyzing basic website usage (essential analytics only)</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We ensure that our legitimate interests do not override your rights and freedoms.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Contractual Necessity
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              When you engage us for design services, we process your data as necessary to fulfill
              our contractual obligations, including project planning, communication, and service
              delivery.
            </Typography>
          </section>

          {/* Your Rights */}
          <section id="your-rights" aria-labelledby="your-rights-heading">
            <Typography variant="h5" component="h2" id="your-rights-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              4. Your Rights Under GDPR
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The GDPR grants you comprehensive rights over your personal data. As an EU resident,
              you have the right to:
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Access (Article 15)
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You have the right to request a copy of the personal data we hold about you, including
              information about how it's being processed.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Rectification (Article 16)
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You can request that we correct any inaccurate personal data or complete any
              incomplete data.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Erasure / "Right to be Forgotten" (Article 17)
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You can request deletion of your personal data when:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>It's no longer necessary for the purposes it was collected</li>
              <li>You withdraw consent and there's no other legal basis for processing</li>
              <li>You object to processing and there are no overriding legitimate grounds</li>
              <li>The data has been unlawfully processed</li>
            </Box>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Restriction of Processing (Article 18)
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You can request that we limit how we use your personal data in certain circumstances,
              such as when you contest the accuracy of the data or object to processing.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Data Portability (Article 20)
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You can request to receive your personal data in a structured, commonly used, and
              machine-readable format, or have it transferred directly to another controller where
              technically feasible.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Right to Object (Article 21)
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You can object to processing based on legitimate interests or for direct marketing
              purposes at any time.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Rights Related to Automated Decision-Making (Article 22)
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              You have the right not to be subject to decisions based solely on automated
              processing. Note: We do not engage in automated decision-making or profiling.
            </Typography>
          </section>

          {/* Cookies and Consent */}
          <section id="cookies-consent" aria-labelledby="cookies-consent-heading">
            <Typography variant="h5" component="h2" id="cookies-consent-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              5. Cookies and Consent Management
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              In compliance with GDPR and the ePrivacy Directive, we implement a cookie consent
              mechanism that:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                Displays a clear cookie banner on your first visit explaining our use of cookies
              </li>
              <li>Requires your explicit consent before placing non-essential cookies</li>
              <li>Allows you to accept all, reject non-essential, or customize preferences</li>
              <li>Lets you update or withdraw consent at any time</li>
              <li>Stores your preferences locally in your browser</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Essential cookies necessary for website functionality do not require consent. All
              analytics and marketing cookies are only activated after you provide explicit consent.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              For more details, please review our{' '}
              <MuiLink component={Link} href="/legal/privacy-policy" sx={{ color: 'primary.main' }}>
                Privacy Policy
              </MuiLink>
              .
            </Typography>
          </section>

          {/* Data Transfers */}
          <section id="data-transfers" aria-labelledby="data-transfers-heading">
            <Typography variant="h5" component="h2" id="data-transfers-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              6. International Data Transfers
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Some of our service providers may process data outside the European Economic Area
              (EEA), including:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                <strong>Google Analytics:</strong> Operates under Google's EU-US Data Privacy
                Framework certification and standard contractual clauses
              </li>
              <li>
                <strong>Website Hosting:</strong> May use servers in the United States with
                appropriate safeguards
              </li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              When transferring personal data outside the EEA, we ensure appropriate safeguards are
              in place through:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Standard contractual clauses approved by the European Commission</li>
              <li>Adequacy decisions confirming appropriate data protection levels</li>
              <li>Vendor compliance with recognized certification mechanisms</li>
            </Box>
          </section>

          {/* Data Security */}
          <section id="data-security" aria-labelledby="data-security-heading">
            <Typography variant="h5" component="h2" id="data-security-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              7. Data Security Measures
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We implement appropriate technical and organizational measures to ensure a level of
              security appropriate to the risk, including:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>HTTPS encryption for all data transmission</li>
              <li>Secure hosting infrastructure with regular security updates</li>
              <li>Access controls limiting who can access personal data</li>
              <li>Regular backups with encrypted storage</li>
              <li>Incident response procedures for data breaches</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              In the unlikely event of a data breach that poses a risk to your rights and freedoms,
              we will notify you and the relevant supervisory authority within 72 hours as required
              by GDPR.
            </Typography>
          </section>

          {/* Exercising Rights */}
          <section id="exercising-rights" aria-labelledby="exercising-rights-heading">
            <Typography variant="h5" component="h2" id="exercising-rights-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              8. How to Exercise Your Rights
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              To exercise any of your GDPR rights, please contact us:
            </Typography>
            <Box sx={{ pl: 2, mb: 3, bgcolor: 'action.hover', p: 2, borderRadius: 1 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                <strong>Email:</strong> privacy@pebbleandpinedesign.com
                <br />
                <strong>Subject Line:</strong> "GDPR Request - [Your Right]"
                <br />
                <strong>Contact Form:</strong>{' '}
                <MuiLink component={Link} href="/contact" sx={{ color: 'primary.main' }}>
                  Submit a privacy request
                </MuiLink>
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              When submitting a request, please include:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>Your full name and email address</li>
              <li>A description of the specific right you wish to exercise</li>
              <li>Any relevant details to help us locate your data</li>
              <li>Verification information to confirm your identity</li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              We will respond to your request within one month. If your request is complex, we may
              extend this period by two additional months and will inform you of the extension and
              reasons.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              There is no fee for exercising your rights unless your request is manifestly
              unfounded, excessive, or repetitive.
            </Typography>
          </section>

          {/* Supervisory Authority */}
          <section id="supervisory-authority" aria-labelledby="supervisory-authority-heading">
            <Typography variant="h5" component="h2" id="supervisory-authority-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              9. Right to Lodge a Complaint
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              If you believe we have not handled your personal data in accordance with GDPR, you
              have the right to lodge a complaint with a supervisory authority. You can contact:
            </Typography>
            <Box component="ul" sx={{ pl: 4, mb: 2 }}>
              <li>
                Your local data protection authority in your EU member state, or
              </li>
              <li>
                The Information Commissioner's Office (ICO) if you're in the UK:{' '}
                <MuiLink
                  href="https://ico.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'primary.main' }}
                >
                  ico.org.uk
                </MuiLink>
              </li>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              However, we encourage you to contact us first so we can try to resolve any concerns
              directly.
            </Typography>
          </section>

          {/* Contact */}
          <section id="contact" aria-labelledby="contact-heading">
            <Typography variant="h5" component="h2" id="contact-heading" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              10. Contact Information
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              For any questions about our GDPR compliance or data protection practices:
            </Typography>
            <Box sx={{ pl: 2, mb: 2 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                <strong>Data Controller:</strong> Pebble & Pine Design
                <br />
                <strong>Email:</strong> privacy@pebbleandpinedesign.com
                <br />
                <strong>Contact Form:</strong>{' '}
                <MuiLink component={Link} href="/contact" sx={{ color: 'primary.main' }}>
                  pebbleandpinedesign.com/contact
                </MuiLink>
              </Typography>
            </Box>
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
              <MuiLink component={Link} href="/legal/ccpa">
                CCPA Addendum
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
