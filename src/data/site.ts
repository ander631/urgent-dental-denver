/**
 * Single source of truth for NAP + practice facts.
 * Use these constants EVERYWHERE — never retype the address or phone numbers.
 * Must match the Google Business Profile character-for-character (spec §1, §13.12).
 * TODO(owner §13.12): confirm every field below matches GBP exactly before cutover.
 */

export const SITE = {
  name: 'Urgent Dental of Denver',
  legalName: 'Urgent Dental of Denver',

  // Address (verbatim)
  address: {
    street: '2121 S Downing St, Suite B',
    locality: 'Denver',
    region: 'CO',
    postalCode: '80210',
    country: 'US',
  },

  // Phones
  phoneNewPatients: {
    display: '(720) 573-2629',
    href: 'tel:+17205732629',
  },
  phoneExisting: {
    display: '(720) 988-0759',
    href: 'tel:+17209880759',
  },
  // Patients can call OR text the new-patient line.
  textLine: '(720) 573-2629',

  email: 'office@urgentdentalofdenver.com',

  // Hours: every day, 8:00 AM – 8:00 PM, all 7 days.
  hours: { opens: '08:00', closes: '20:00', days: 'Every day' },

  // Reviews — the design shows 214 @ 5.0. Represent honestly; do not inflate.
  // TODO(owner §13.5): confirm the LIVE Google count at launch and update, or
  // wire the live reviews widget so this stays accurate as it grows.
  reviews: { rating: '5.0', count: 214 },

  // Geo — derived from the S Downing address (approximate).
  // TODO(owner §13.11): confirm EXACT lat/long for schema before cutover.
  geo: { lat: '39.6766', lng: '-104.9756' },
} as const;

// Convenience booleans/strings for schema day arrays.
export const OPEN_DAYS = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
] as const;
