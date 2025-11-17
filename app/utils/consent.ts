// Consent Management Utilities for GDPR/CCPA Compliance

export interface ConsentPreferences {
  essential: boolean; // Always true - required for site functionality
  analytics: boolean; // Google Analytics
  marketing: boolean; // Affiliate tracking (future use)
  timestamp: number;
  version: string; // Track consent version for future updates
}

const CONSENT_KEY = 'ppd-cookie-consent';
const CONSENT_VERSION = '1.0';

// Default consent state
const defaultConsent: ConsentPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
};

/**
 * Check if we're running in a browser environment
 */
const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
};

/**
 * Get stored consent preferences from localStorage
 */
export const getConsent = (): ConsentPreferences | null => {
  if (!isBrowser()) return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const consent: ConsentPreferences = JSON.parse(stored);

    // Check if consent version matches current version
    if (consent.version !== CONSENT_VERSION) {
      // Version mismatch - return null to trigger new consent
      return null;
    }

    return consent;
  } catch (error) {
    console.error('Error reading consent preferences:', error);
    return null;
  }
};

/**
 * Save consent preferences to localStorage
 */
export const saveConsent = (preferences: Partial<ConsentPreferences>): void => {
  if (!isBrowser()) return;

  try {
    const consent: ConsentPreferences = {
      ...defaultConsent,
      ...preferences,
      essential: true, // Always true
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

    // Dispatch custom event for components to listen to
    window.dispatchEvent(new CustomEvent('consentUpdated', { detail: consent }));
  } catch (error) {
    console.error('Error saving consent preferences:', error);
  }
};

/**
 * Accept all non-essential cookies
 */
export const acceptAllConsent = (): void => {
  saveConsent({
    analytics: true,
    marketing: true,
  });
};

/**
 * Reject all non-essential cookies (essential only)
 */
export const rejectNonEssentialConsent = (): void => {
  saveConsent({
    analytics: false,
    marketing: false,
  });
};

/**
 * Revoke/clear all consent (reset to no consent given)
 */
export const revokeConsent = (): void => {
  if (!isBrowser()) return;

  try {
    localStorage.removeItem(CONSENT_KEY);
    window.dispatchEvent(new CustomEvent('consentRevoked'));
  } catch (error) {
    console.error('Error revoking consent:', error);
  }
};

/**
 * Check if consent has been given
 */
export const hasConsent = (): boolean => {
  return getConsent() !== null;
};

/**
 * Check if analytics consent is granted
 */
export const hasAnalyticsConsent = (): boolean => {
  const consent = getConsent();
  return consent?.analytics === true;
};

/**
 * Check if marketing consent is granted
 */
export const hasMarketingConsent = (): boolean => {
  const consent = getConsent();
  return consent?.marketing === true;
};
