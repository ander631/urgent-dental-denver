/**
 * Practice-level FAQs (spec §5/§8). Per owner request, ALL Q&A lives on one page
 * (/faq/) rather than repeated blocks across the site. These general questions
 * plus every service's `faqs` are aggregated there, and FAQPage schema is
 * emitted only on /faq/. Individual pages weave the same info into their prose.
 */
import type { Faq } from './services';

export const PRACTICE_FAQS: Faq[] = [
  { q: 'What counts as a dental emergency?', a: 'Any dental problem that needs prompt care to relieve severe pain, stop bleeding, treat an infection, or save a tooth — a bad toothache, a knocked-out or broken tooth, swelling or an abscess, a lost filling or crown, or wisdom-tooth pain. If you’re unsure, call us at (720) 573-2629 and we’ll help you decide.' },
  { q: 'Are you open on weekends and holidays?', a: 'Yes. We’re open 8am to 8pm every single day, including weekends and holidays. Emergencies don’t wait for business hours, and neither do we.' },
  { q: 'Do you take walk-ins?', a: 'Yes, walk-ins are welcome. Calling ahead on (720) 573-2629 lets us prepare for your arrival and tell you the fastest way to be seen, but you’re welcome to come straight in.' },
  { q: 'Do you take my insurance, and what will it cost?', a: 'Most PPO plans are welcome and CareCredit financing is available. We give you upfront pricing before any treatment begins, so you’ll always know the cost first. Call and we’ll walk you through it for your specific situation.' },
  { q: 'Where are you located, and who do I call?', a: 'We’re at 2121 S Downing St, Suite B, Denver, CO 80210, in the Platt Park neighborhood near Washington Park. New patients call (720) 573-2629; existing patients call (720) 988-0759. We’re open 8am–8pm every day.' },
];
