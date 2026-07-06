/**
 * Blog posts (spec §5, §11 Phase 4, §13.8).
 *
 * BLOG MIGRATION POLICY (important): the old WordPress site's real post bodies
 * and full URL list are NOT available in this session — they come from the
 * Screaming Frog crawl + GSC export (§13.1 launch blocker, §13.8 blog decision).
 * So this file ships the blog SYSTEM (index + template + BlogPosting schema +
 * Key Takeaways) and ONE post whose content we can write accurately from
 * scratch as original, YMYL-safe educational material authored/reviewed by
 * Dr. Boyd. We do NOT invent the bodies of the other migrated posts — each is
 * listed in `PENDING_MIGRATION` below so the owner can drop in real source
 * content, and its old URL already 301s here via the redirect map.
 *
 * The one post below is the target of the /emergency-dentistry-in-denver-co-
 * when-to-seek-urgent-dental-care/ → /blog/emergency-dentistry-when-to-seek-
 * urgent-care/ 301 (redirects.ts). Its content is genuinely informational and
 * safe — it does not diagnose, promise outcomes, or state prices.
 */

export interface PostSection {
  heading: string;
  paras?: string[];
  bullets?: string[];
}

export interface Post {
  slug: string;             // → /blog/<slug>/
  title: string;            // <title>
  h1: string;
  description: string;      // meta description
  excerpt: string;          // blog-index card text
  datePublished: string;    // ISO — original publish date (see TODO)
  dateModified: string;     // ISO
  keyTakeaways: string[];   // rendered in the "Key Takeaways" block up top
  intro: string[];
  sections: PostSection[];
  relatedServices: string[]; // service slugs
}

// TODO(owner §13.8): when migrating, set datePublished to each post's REAL
// original publish date from the old site (preserves article history/freshness
// signals). The date below is a placeholder for the rebuilt post.
const PLACEHOLDER_PUBLISHED = '2025-01-15';
const REBUILT_ON = '2026-07-06';

export const POSTS: Post[] = [
  {
    slug: 'emergency-dentistry-when-to-seek-urgent-care',
    title: 'Emergency Dentistry in Denver: When to Seek Urgent Dental Care',
    h1: 'When Should You Seek Emergency Dental Care?',
    description:
      'How to tell a real dental emergency from something that can wait, what to do while you get seen, and when to go to the ER instead. From Urgent Dental of Denver — open 8am–8pm every day.',
    excerpt:
      'A sharp toothache at midnight, a tooth knocked out at a game, swelling that won\'t go down — here\'s how to tell what\'s a true dental emergency, what to do right now, and when to head to the ER.',
    datePublished: PLACEHOLDER_PUBLISHED,
    dateModified: REBUILT_ON,
    keyTakeaways: [
      'Severe or worsening pain, swelling, a knocked-out tooth, uncontrolled bleeding, or trauma to the mouth all count as dental emergencies — see a dentist the same day.',
      'A knocked-out adult tooth is the most time-sensitive: keep it in milk or saliva and get seen within about an hour for the best chance of saving it.',
      'Go to the ER or call 911 for a facial injury with heavy bleeding, difficulty breathing or swallowing, or swelling spreading toward the eye or throat — those are beyond what a dental office treats.',
      'A minor chip, a dull ache, or a lost filling with no pain usually isn\'t an emergency, but it should still be looked at soon before it gets worse.',
    ],
    intro: [
      "It's hard to think clearly when your mouth hurts. A tooth cracks on a popcorn kernel, a filling falls out at dinner, or a dull ache turns into throbbing pain at 2am — and the first question is always the same: is this an emergency, or can it wait until morning?",
      "As an emergency-only dental practice, that's the call we help people make every day. Here's a straightforward guide to telling the difference, what to do while you get seen, and the few situations where the emergency room — not a dentist — is the right place to go.",
    ],
    sections: [
      {
        heading: 'Signs you should be seen the same day',
        paras: [
          'Some dental problems genuinely can\'t wait. If any of these describe your situation, call a dentist right away rather than waiting it out:',
        ],
        bullets: [
          'Severe tooth pain, or pain that keeps getting worse or wakes you at night.',
          'A knocked-out (avulsed) permanent tooth — this is the most time-sensitive of all.',
          'A tooth that\'s been pushed loose, out of position, or partly out of its socket.',
          'Swelling in the gums, face, or jaw — especially with a fever or a bad taste, which can signal an infection.',
          'Bleeding that won\'t stop after applying gentle pressure.',
          'A broken or badly cracked tooth that\'s sharp or painful.',
          'A lost crown or filling that leaves a tooth painful or sensitive.',
        ],
      },
      {
        heading: 'What to do while you get seen',
        paras: [
          'A few simple steps can ease pain and protect the tooth on your way in. General first-aid you can do at home:',
        ],
        bullets: [
          'For a knocked-out tooth: pick it up by the crown (not the root), rinse gently if dirty, and place it back in the socket if you can. If not, keep it in a cup of milk or your own saliva — not water — and get to a dentist within about an hour.',
          'For pain: a cold compress on the outside of the cheek and over-the-counter pain relief used as directed can help until you\'re seen.',
          'For swelling: rinse with warm salt water and keep your head elevated.',
          'For a broken tooth: save any pieces, rinse your mouth with warm water, and cover a sharp edge with dental wax or sugar-free gum to protect your tongue and cheek.',
          'For a lost filling or crown: keep the crown if it came out — sometimes it can be re-cemented. Keep the area clean and avoid chewing on that side.',
        ],
      },
      {
        heading: 'When to go to the ER instead of a dentist',
        paras: [
          'Most dental problems are best handled by a dentist — emergency rooms usually can\'t treat teeth directly and will often just manage pain and refer you back to a dentist anyway. But some situations are medical emergencies. Go to the nearest emergency room or call 911 if you have:',
        ],
        bullets: [
          'A jaw or facial injury with heavy bleeding, or a suspected broken jaw.',
          'Swelling that is spreading toward your eye or down your throat, or that makes it hard to breathe or swallow.',
          'A high fever with facial swelling that is getting rapidly worse.',
        ],
      },
      {
        heading: 'What usually isn\'t an emergency (but still needs attention)',
        paras: [
          'Not every dental problem is urgent. A small chip with no pain, mild sensitivity to hot or cold, a dull ache that comes and goes, or a lost filling that doesn\'t hurt can typically wait a short while for an appointment. That said, "not an emergency" doesn\'t mean "ignore it" — small problems tend to become bigger, more expensive ones. It\'s worth getting them looked at soon.',
          'If you\'re ever unsure which category you\'re in, call. Describing your symptoms over the phone is the fastest way to find out whether you need to come in now or can wait.',
        ],
      },
      {
        heading: 'How same-day emergency dentistry works',
        paras: [
          'An emergency-only practice is built differently from a regular dental office. There are no cleanings or checkups filling the schedule, so people in pain aren\'t waiting days for an opening or sitting behind routine appointments. At Urgent Dental of Denver we\'re open 8am to 8pm every day, walk-ins are welcome, and you get an upfront price before any treatment starts. The goal on an emergency visit is simple: find the real source of the problem and get you out of pain the same day.',
        ],
      },
    ],
    relatedServices: [
      'toothache-and-dental-pain-denver-co',
      'knocked-out-tooth-denver-co',
      'broken-or-chipped-tooth-denver-co',
      'dental-abscess-infection-denver-co',
    ],
  },
];

export const POST_BY_SLUG: Record<string, Post> = Object.fromEntries(
  POSTS.map((p) => [p.slug, p]),
);

/**
 * Posts that existed on the old site and need their REAL source content dropped
 * in during migration (from the crawl, §13.1/§13.8). Their old URLs already 301
 * to targets in redirects.ts. Listed here so nothing is silently orphaned — the
 * owner decides per post: keep the old URL live with migrated content, or let
 * the existing 301 stand. Do NOT invent these bodies.
 *
 * TODO(owner §13.8): supply the crawl's full post list + content, then add each
 * post to POSTS above (or confirm its 301 target is correct).
 */
export const PENDING_MIGRATION: { oldUrl: string; note: string }[] = [
  { oldUrl: '/do-you-need-a-crown-after-a-root-canal-denver-co/', note: 'Distinct "crown after root canal" intent — good blog candidate. Currently 301s into the root-canal service page.' },
  { oldUrl: '/process-of-root-canal-and-crown-denver-co/', note: 'Informational; currently folds into root-canal service page. Reroute to a blog post if data supports.' },
  { oldUrl: '/root-canal-treatment-for-tooth-decay-denver-co/', note: 'Near-duplicate; folds into root-canal service page unless GSC shows distinct informational traffic.' },
];
