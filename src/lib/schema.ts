/**
 * JSON-LD builders (spec §8). All schema must match visible page text exactly
 * and validate in the Rich Results Test before a page ships. Service pages get:
 * MedicalWebPage + Service (referencing the business @id as provider) +
 * BreadcrumbList + FAQPage. The FAQ Q/A strings are the SAME objects rendered
 * visibly on the page, so markup and text can't drift.
 */
import type { Faq } from '../data/services';

/** Stable @id of the practice (defined fully on the homepage Dentist block). */
export const businessId = (site: string) => `${site.replace(/\/$/, '')}/#business`;

/** Dr. Boyd as author/reviewer — the E-E-A-T anchor, linked to his bio. */
export const drBoyd = (site: string) => ({
  '@type': 'Dentist',
  name: 'Dr. Gilmer "Drew" Boyd',
  url: `${site.replace(/\/$/, '')}/meet-the-doctor/`,
});

export function breadcrumbList(
  site: string,
  crumbs: { name: string; path: string }[],
) {
  const base = site.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${base}${c.path}`,
    })),
  };
}

export function faqPage(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** MedicalWebPage + Service for an areas-we-serve page (spec §5/§8). */
export function areaPageSchema(opts: {
  site: string; canonical: string; area: string; h1: string; description: string;
}) {
  const { site, canonical, area, h1, description } = opts;
  const id = businessId(site);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: h1,
      description,
      url: canonical,
      inLanguage: 'en-US',
      isPartOf: { '@id': id },
      reviewedBy: drBoyd(site),
      provider: { '@id': id },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Emergency Dental Care in ${area}`,
      serviceType: 'Emergency dentistry',
      description,
      url: canonical,
      provider: { '@id': id },
      areaServed: { '@type': 'City', name: `${area}, CO` },
    },
  ];
}

/** Plain MedicalWebPage for a utility page (contact, request, new patients). */
export function medicalWebPage(opts: {
  site: string; canonical: string; name: string; description: string;
}) {
  const { site, canonical, name, description } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name,
    description,
    url: canonical,
    inLanguage: 'en-US',
    isPartOf: { '@id': businessId(site) },
  };
}

/** BlogPosting for an authored/migrated post (spec §5/§8). Author = Dr. Boyd,
 *  linked to his bio for E-E-A-T; publisher = the practice @id. */
export function blogPosting(opts: {
  site: string; canonical: string; headline: string; description: string;
  datePublished: string; dateModified: string; image?: string;
}) {
  const { site, canonical, headline, description, datePublished, dateModified, image } = opts;
  const base = site.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url: canonical,
    mainEntityOfPage: canonical,
    inLanguage: 'en-US',
    datePublished,
    dateModified,
    ...(image ? { image } : {}),
    author: {
      '@type': 'Person',
      name: 'Dr. Gilmer "Drew" Boyd',
      url: `${base}/meet-the-doctor/`,
    },
    reviewedBy: drBoyd(site),
    publisher: { '@id': businessId(site) },
  };
}

/** MedicalWebPage + Service for a service page. */
export function servicePageSchema(opts: {
  site: string;
  canonical: string;
  name: string;      // service name, e.g. 'Emergency Root Canal'
  h1: string;
  description: string;
}) {
  const { site, canonical, name, h1, description } = opts;
  const id = businessId(site);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: h1,
      description,
      url: canonical,
      inLanguage: 'en-US',
      isPartOf: { '@id': id },
      about: { '@type': 'MedicalProcedure', name },
      reviewedBy: drBoyd(site),
      author: drBoyd(site),
      provider: { '@id': id },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      serviceType: name,
      description,
      url: canonical,
      provider: { '@id': id },
      areaServed: { '@type': 'City', name: 'Denver, CO' },
    },
  ];
}
