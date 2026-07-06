/**
 * 301 REDIRECT MAP — spec §4b. This is the single biggest on-page win: the old
 * WordPress site cannibalizes itself (≈30 service/article URLs competing for
 * ≈9–11 queries). We consolidate to one strong page per service and 301 the
 * rest.
 *
 * RULES (spec §4b, §7, §12 — non-negotiable):
 *   • Every redirect is a 301 (permanent).
 *   • One hop only. old URL → FINAL URL directly. No chains.
 *   • Redirect to the closest relevant page — NEVER to the homepage.
 *   • Internal links always point to the surviving canonical slug.
 *
 * SCOPE / STATUS:
 *   • This is the SEARCH-ENUMERATED seed map from spec §4b. It is NOT a
 *     byte-complete crawl. Before cutover (spec §13.1, LAUNCH BLOCKER): run one
 *     Screaming Frog crawl + a Search Console "Pages" export and reconcile
 *     against this table so nothing 404s (orphans, category/tag archives,
 *     paginated blog, remaining /web-stories/, attachment URLs).
 *   • Pick the SURVIVING canonical in each cluster BY DATA (GSC + Ahrefs organic
 *     traffic + referring domains), not by which slug reads best (spec §4b).
 *     The slugs below are clean defaults; if an ugly old slug is the traffic/
 *     link winner, keeping it may be right. TODO(owner §13.1).
 *
 * Some targets below are built in later phases (service pages = Phase 2,
 * blog = Phase 4). On staging they may 404 until those ship; that is expected.
 * Phase 5 verifies every entry post-cutover (spec §12).
 */

export interface Redirect {
  from: string;
  to: string;
  /** Why / caveat. Surfaces the by-data + phase notes at the point of decision. */
  note?: string;
}

export const REDIRECTS: Redirect[] = [
  // ── Root canal · 8 → 1 ──────────────────────────────────────────────────
  { from: '/root-canal/', to: '/root-canal-denver-co/' },
  { from: '/root-canal-therapy-in-denver-co/', to: '/root-canal-denver-co/' },
  { from: '/root-canal-services-denver-co/', to: '/root-canal-denver-co/' },
  { from: '/dental-root-canal-procedure-denver-co/', to: '/root-canal-denver-co/' },
  { from: '/urgent-root-canal-treatment-denver-co/', to: '/root-canal-denver-co/' },
  { from: '/root-canal-treatment-for-tooth-decay-denver-co/', to: '/root-canal-denver-co/', note: 'Near-dup of service page — fold in. If GSC shows distinct informational traffic, instead move to /blog/ and 301 there (spec §4b). TODO(owner §13.1/§13.8).' },
  { from: '/do-you-need-a-crown-after-a-root-canal-denver-co/', to: '/root-canal-denver-co/', note: 'Candidate to KEEP as a /blog/ post (distinct "crown after root canal" intent). Default folds into service page; reroute to /blog/ if data supports. TODO(owner §13.1/§13.8).' },
  { from: '/process-of-root-canal-and-crown-denver-co/', to: '/root-canal-denver-co/', note: 'Candidate /blog/ post; default folds in. TODO(owner §13.1/§13.8).' },

  // ── Extractions · 5 → 1 ─────────────────────────────────────────────────
  { from: '/extractions/', to: '/tooth-extractions-denver-co/', note: 'If the ugly /extractions/ slug is the traffic+link winner, consider keeping it as canonical instead. Decide by data (spec §4b). TODO(owner §13.1).' },
  { from: '/dentist-for-extractions-denver-co/', to: '/tooth-extractions-denver-co/' },
  { from: '/denver-tooth-extractions/', to: '/tooth-extractions-denver-co/' },
  { from: '/immediate-tooth-extraction-denver-co/', to: '/tooth-extractions-denver-co/' },
  { from: '/dental-tooth-removal-denver-co/', to: '/tooth-extractions-denver-co/' },

  // ── Dental implants · 3 → 1 ─────────────────────────────────────────────
  // Restorative follow-on page; build only if owner wants it (spec §4a). Until
  // then these 301s point at the intended slug. TODO(owner): confirm implants page.
  { from: '/implants/', to: '/dental-implants-denver-co/' },
  { from: '/dental-implants-for-upper-teeth-denver-co/', to: '/dental-implants-denver-co/' },
  { from: '/things-to-know-about-dental-implants-denver-co/', to: '/dental-implants-denver-co/' },

  // ── Bone grafting · 2 → 1 ───────────────────────────────────────────────
  { from: '/dental-bone-graft-after-tooth-extraction-denver-co/', to: '/bone-grafting-denver-co/' },
  { from: '/oral-bone-graft-denver-co/', to: '/bone-grafting-denver-co/' },

  // ── Toothache / dental pain · 2 → 1 ─────────────────────────────────────
  { from: '/dentist-for-tooth-pain-denver-co/', to: '/toothache-and-dental-pain-denver-co/' },
  { from: '/toothache-relief-for-adults-denver-co/', to: '/toothache-and-dental-pain-denver-co/' },

  // ── Dental trauma / knocked-out · 2 → 2 ─────────────────────────────────
  // Spec §4a lists BOTH "dental-trauma" and "knocked-out-tooth" in the core 9,
  // so we built both pages (the 2→2 branch of spec §4b). /dental-trauma/ →
  // trauma page; /displaced-tooth/ → the knocked-out page (displaced/avulsed
  // teeth are the closest match). The two pages cross-link. If GSC/Ahrefs later
  // shows one query doesn't earn its own page, collapse 2→1. TODO(owner §13.1).
  { from: '/dental-trauma/', to: '/dental-trauma-denver-co/' },
  { from: '/displaced-tooth/', to: '/knocked-out-tooth-denver-co/' },

  // ── Broken / chipped tooth · 2 → 1 ──────────────────────────────────────
  { from: '/broken-teeth-treatment-denver-co/', to: '/broken-or-chipped-tooth-denver-co/' },
  { from: '/chipped-teeth/', to: '/broken-or-chipped-tooth-denver-co/' },

  // ── Wisdom teeth · 1 → 1 ────────────────────────────────────────────────
  { from: '/wisdom-teeth/', to: '/wisdom-teeth-denver-co/' },

  // ── Services hub ────────────────────────────────────────────────────────
  { from: '/emergency-dental-services-denver-co/', to: '/emergency-dentist-denver-co/', note: 'Or keep the old slug as canonical if it out-ranks the new hub slug. Decide by data (spec §4b). TODO(owner §13.1).' },

  // ── Web stories (AMP) ───────────────────────────────────────────────────
  { from: '/web-stories/dental-trauma/', to: '/dental-trauma-denver-co/', note: 'Or KEEP the AMP web-story if it is still earning traffic (spec §4b). Crawl for other /web-stories/ URLs. TODO(owner §13.1).' },

  // ── Standalone informational article → blog (Phase 4) ───────────────────
  { from: '/emergency-dentistry-in-denver-co-when-to-seek-urgent-dental-care/', to: '/blog/emergency-dentistry-when-to-seek-urgent-care/', note: 'Genuinely informational (not a near-dup). Move to /blog/ and carry the 301 (spec §4b, §5 blog). Target ships Phase 4. Confirm blog handling: keep existing URLs vs migrate. TODO(owner §13.8).' },

  // ── /patient-info/ — decide by data (spec §4b) ──────────────────────────
  { from: '/patient-info/', to: '/new-patients/', note: 'Merge into /new-patients/ (301) OR keep, based on its traffic. Default merges. TODO(owner §13.1).' },

  // ── WordPress category/tag archives (spec §4b) ──────────────────────────
  // These are indexable THIN pages competing with the service pages. Either
  // noindex them (if kept) or 301 each to its matching service page. We 301.
  // EXACT archive paths need the crawl — WP slugs vary (/category/<slug>/,
  // /tag/<slug>/, custom bases). The entries below are the LIKELY default WP
  // pattern; RECONCILE against Screaming Frog before cutover. TODO(owner §13.1).
  { from: '/category/bone-grafting/', to: '/bone-grafting-denver-co/', note: 'Archive path assumed /category/<slug>/ — verify in crawl. TODO(owner §13.1).' },
  { from: '/category/chipped-teeth/', to: '/broken-or-chipped-tooth-denver-co/', note: 'Verify archive path in crawl. TODO(owner §13.1).' },
  { from: '/category/dental-trauma/', to: '/dental-trauma-denver-co/', note: 'Verify archive path in crawl. TODO(owner §13.1).' },
  { from: '/category/extractions/', to: '/tooth-extractions-denver-co/', note: 'Verify archive path in crawl. TODO(owner §13.1).' },
  { from: '/category/implants/', to: '/dental-implants-denver-co/', note: 'Verify archive path in crawl. TODO(owner §13.1).' },
  { from: '/category/root-canal/', to: '/root-canal-denver-co/', note: 'Verify archive path in crawl. TODO(owner §13.1).' },
  { from: '/category/toothache-dental-pain/', to: '/toothache-and-dental-pain-denver-co/', note: 'Verify archive path/slug in crawl. TODO(owner §13.1).' },
  { from: '/category/wisdom-teeth/', to: '/wisdom-teeth-denver-co/', note: 'Verify archive path in crawl. TODO(owner §13.1).' },
  { from: '/category/featured-article/', to: '/blog/', note: 'Mixed archive → blog index, not a service page and not the homepage. Target ships Phase 4. Verify path in crawl. TODO(owner §13.1).' },
];

/** Render the Netlify `_redirects` file body. `301!` forces the 301 even if a
 *  file exists at the source path. One hop, permanent. */
export function toNetlifyRedirects(list: Redirect[] = REDIRECTS): string {
  const header = [
    '# 301 redirect map — generated from src/data/redirects.ts (spec §4b).',
    '# Do not hand-edit; edit the data file and rebuild.',
    '# Format: <from>  <to>  301!  (permanent, forced, one hop).',
    '',
  ].join('\n');
  const lines = list.map((r) => `${r.from}  ${r.to}  301!`);
  return `${header}${lines.join('\n')}\n`;
}
