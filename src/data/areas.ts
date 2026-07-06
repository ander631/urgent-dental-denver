/**
 * Areas-we-serve pages (spec §4a, §5, §13.7). CAPPED at the 3–5 closest, highest-
 * draw communities to the S Downing / Washington Park (Platt Park) location, and
 * ONLY built because each carries genuinely local content — real neighborhoods,
 * landmarks, routes, and a real reason a nearby resident chooses this office.
 * This is NOT a [service]-[city] doorway matrix (spec §4a forbids that).
 *
 * Local facts researched from public sources (neighborhood guides, Wikipedia,
 * city sites) — see the Phase 3 research notes. Drive times are phrased as
 * approximate/traffic-dependent on purpose; they are real, not invented precise
 * numbers. TODO(owner §13.7): confirm these 3 are the areas you want, and that
 * the local details match how you'd describe them.
 *
 * The office is at 2121 S Downing St, Suite B, Denver 80210 — in the Platt Park
 * neighborhood, Washington Park's "sister" neighborhood just southwest of the
 * park, near Old South Pearl Street and the University of Denver.
 */
import type { Faq } from './services';

export interface Area {
  slug: string;      // 'emergency-dentist-glendale-co' → /emergency-dentist-glendale-co/
  area: string;      // 'Glendale'
  h1: string;
  title: string;
  metaDescription: string;
  keyword: string;
  directAnswer: string;       // genuinely local (spec §5)
  local: string[];            // neighborhoods, landmarks, route — page-specific
  whyChoose: string[];        // why a nearby resident picks us
  faqs: Faq[];                // local specifics
  relatedServices: string[];  // service slugs to link
}

// Services most people arrive for — linked from each area page.
const COMMON: string[] = [
  'toothache-and-dental-pain-denver-co',
  'broken-or-chipped-tooth-denver-co',
  'knocked-out-tooth-denver-co',
  'tooth-extractions-denver-co',
  'root-canal-denver-co',
  'dental-abscess-infection-denver-co',
];

export const AREAS: Area[] = [
  // ── Glendale ─────────────────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-glendale-co',
    area: 'Glendale',
    h1: 'Emergency Dentist in Glendale, CO',
    title: 'Emergency Dentist in Glendale, CO | Urgent Dental',
    metaDescription:
      'Emergency dentist minutes from Glendale, CO. Same-day care, open 8am–8pm every day, walk-ins welcome. In pain? Call (720) 573-2629.',
    keyword: 'emergency dentist Glendale CO',
    directAnswer:
      "If you're in Glendale with a dental emergency, we're one of the closest same-day options — a short drive across Cherry Creek from our Washington Park–area office on S Downing. Because Glendale sits as a compact enclave right against Denver, most patients reach us in only a few minutes. We're open 8am to 8pm every day, walk-ins are welcome, and we treat the full range of emergencies. Call (720) 573-2629 and come straight in.",
    local: [
      "Glendale is a small, densely-built enclave tucked against Denver along Cherry Creek, right beside the Cherry Creek shopping area. From most of Glendale — whether you're near Infinity Park, Four Mile Historic Park, or the apartments along Cherry Creek — our office on S Downing Street is just a short hop across the creek and down toward Washington Park.",
      "That closeness matters in an emergency. When a tooth is knocked out or an abscess flares up, the last thing you want is a long drive across town. For Glendale residents, we're practically around the corner.",
    ],
    whyChoose: [
      'Genuinely close — a few minutes from Glendale via the Cherry Creek corridor.',
      'Emergency-only, so you\'re seen fast instead of waiting behind cleanings.',
      'Open 8am–8pm every day, including weekends — for when Infinity Park games or a night out end with a cracked tooth.',
      'Walk-ins welcome and upfront pricing before we start.',
    ],
    faqs: [
      { q: 'How far is your office from Glendale?', a: "We're only a short drive from Glendale — across Cherry Creek and down toward Washington Park to our office at 2121 S Downing St. For most of Glendale it's just a few minutes. Call (720) 573-2629 and we'll get you in." },
      { q: 'Can I be seen the same day if I live in Glendale?', a: 'Yes. We hold time for emergencies and are open 8am–8pm every day, so Glendale patients can almost always be seen the same day. Walk-ins are welcome.' },
      { q: 'Do you take walk-ins from Glendale after work?', a: "Yes — we're open until 8pm every day, so you can come straight in after work or an evening at Infinity Park. Calling ahead on (720) 573-2629 lets us have everything ready." },
    ],
    relatedServices: COMMON,
  },

  // ── Englewood ────────────────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-englewood-co',
    area: 'Englewood',
    h1: 'Emergency Dentist in Englewood, CO',
    title: 'Emergency Dentist in Englewood, CO | Urgent Dental',
    metaDescription:
      'Same-day emergency dentist near Englewood, CO. Open 8am–8pm every day, walk-ins welcome, upfront pricing. In pain? Call (720) 573-2629.',
    keyword: 'emergency dentist Englewood CO',
    directAnswer:
      "For Englewood residents with a dental emergency, our office is a straight shot north — up Broadway or Downing toward Washington Park, usually around ten minutes depending on traffic. We're a same-day, emergency-only practice open 8am to 8pm every day, with walk-ins welcome. Whether it's a bad toothache, a broken tooth, or swelling that won't wait, call (720) 573-2629 and come straight in.",
    local: [
      "Englewood sits just south of us along the Broadway corridor. From downtown Englewood and its historic South Broadway shops, the Gothic Theatre, or neighborhoods like Arapahoe Acres and South Broadway Heights, our office near Washington Park is a quick drive north — the University of Denver sits about midway between us.",
      "Because we only handle emergencies, an Englewood patient in pain isn't waiting days for an opening or sitting behind a room full of routine cleanings. You call, you come in, we get you out of pain.",
    ],
    whyChoose: [
      'A short drive north up Broadway or Downing — usually around ten minutes.',
      'Same-day emergency care every day, 8am–8pm, weekends included.',
      'No waiting behind checkups — emergencies are all we do.',
      'PPO plans welcome, CareCredit available, and upfront pricing.',
    ],
    faqs: [
      { q: 'How long does it take to get to you from Englewood?', a: "Usually around ten minutes, depending on traffic — a straight drive north up Broadway or Downing to our office at 2121 S Downing St, near Washington Park. Call (720) 573-2629 and we'll be ready for you." },
      { q: 'I have a dental emergency near South Broadway — can you help today?', a: "Yes. We're open 8am–8pm every day and hold time for emergencies, so we can almost always see Englewood patients the same day. Walk-ins are welcome." },
      { q: 'Do you take PPO insurance for Englewood patients?', a: 'Most PPO plans are welcome, and CareCredit financing is available. We give you upfront pricing before any treatment begins, so you\'ll always know the cost first.' },
    ],
    relatedServices: COMMON,
  },

  // ── Cherry Hills Village ─────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-cherry-hills-co',
    area: 'Cherry Hills Village',
    h1: 'Emergency Dentist in Cherry Hills Village, CO',
    title: 'Emergency Dentist in Cherry Hills Village, CO | Urgent Dental',
    metaDescription:
      'Same-day emergency dentist near Cherry Hills Village, CO. Open 8am–8pm every day, walk-ins welcome. In pain? Call (720) 573-2629.',
    keyword: 'emergency dentist Cherry Hills Village CO',
    directAnswer:
      "If you're in Cherry Hills Village with a dental emergency, our office is a short drive north toward Washington Park — typically around ten to fifteen minutes up University Boulevard, depending on traffic. We're an emergency-only practice open 8am to 8pm every day, walk-ins welcome, with upfront pricing before we begin. For a knocked-out tooth, a break, or a painful abscess, call (720) 573-2629 and come straight in.",
    local: [
      "Cherry Hills Village is the quiet, spread-out residential community just south of us, threaded by the High Line Canal and known for the Cherry Hills and Glenmoor country clubs. From neighborhoods like Cherry Hills North, Southmoor, or the areas off University Boulevard, our office near Washington Park is a straightforward drive north.",
      "Cherry Hills is almost entirely residential, so there isn't an emergency dentist inside the Village itself. That makes us one of the closest same-day options when something goes wrong — and because we're emergency-only, you're seen quickly rather than squeezed between routine appointments.",
    ],
    whyChoose: [
      'One of the closest same-day options — Cherry Hills has no emergency dentist within the Village.',
      'A short drive north up University Boulevard, usually ten to fifteen minutes.',
      'Open 8am–8pm every day, walk-ins welcome.',
      'Calm, unhurried, upfront care — the price is set before we begin.',
    ],
    faqs: [
      { q: 'Is there an emergency dentist in Cherry Hills Village?', a: "Cherry Hills Village is almost entirely residential, so there isn't one inside the Village. We're one of the closest same-day options — a short drive north up University Boulevard toward Washington Park. Call (720) 573-2629." },
      { q: 'How long is the drive from Cherry Hills to your office?', a: 'Usually around ten to fifteen minutes, depending on traffic — north up University Boulevard to our office at 2121 S Downing St, near Washington Park.' },
      { q: 'Can you see me the same day from Cherry Hills?', a: "Yes. We're emergency-only and open 8am–8pm every day, so we can almost always see Cherry Hills patients the same day they call. Walk-ins are welcome." },
    ],
    relatedServices: COMMON,
  },

  // ── Washington Park (Wash Park) — Denver neighborhood, adjacent ───────────
  {
    slug: 'emergency-dentist-washington-park-co',
    area: 'Washington Park',
    h1: 'Emergency Dentist in Washington Park (Wash Park), Denver',
    title: 'Emergency Dentist in Washington Park, Denver | Urgent Dental',
    metaDescription:
      'Emergency dentist right in the Wash Park neighborhood — minutes from the park, some blocks walkable. Open 8am–8pm every day, walk-ins welcome. Call (720) 573-2629.',
    keyword: 'emergency dentist Washington Park Denver',
    directAnswer:
      "If you're in Washington Park with a dental emergency, our office is right around the corner. Urgent Dental of Denver sits at 2121 S Downing St, just across the neighborhood's western edge in adjacent Platt Park — only minutes away, and walkable from many parts of Wash Park. We treat dental emergencies only, we're open 8am to 8pm every day, and walk-ins are welcome. Call (720) 573-2629 and come straight over.",
    local: [
      "Washington Park is one of Denver's most beloved neighborhoods, built around its 165-acre namesake park with Smith and Grasmere Lakes, the historic 1913 boathouse, two big flower gardens, and the running-and-cycling loop around its perimeter. The heart of its shopping and dining is Old South Gaylord Street, a historic block of locally-owned restaurants and shops. Downing Street forms the western edge of Wash Park — and our office at 2121 S Downing St sits right on that line in the adjacent Platt Park neighborhood, which makes us essentially your neighborhood dentist. From most of Wash Park we're just a few minutes away; from the western side, close enough to walk.",
      "Being right in the neighborhood matters most when a dental problem can't wait. Wash Park draws active, outdoorsy residents who run and bike the loop and play on the big meadow — and an accidental elbow, a fall, or biting down wrong can crack or knock out a tooth in an instant. A sudden toothache, a lost filling, or a broken tooth over the weekend is stressful enough without a long drive across town. Because we're just past the edge of the neighborhood and open every day 8am–8pm, you get relief close to home.",
    ],
    whyChoose: [
      'Basically your neighborhood dentist — our office on S Downing is right on Wash Park\'s western edge, minutes away and walkable from many blocks.',
      'Emergency-only focus, so same-day urgent problems are exactly what we\'re set up to handle.',
      'Open 8am–8pm every single day, including weekends, with walk-ins welcome.',
      'Upfront pricing, PPO plans welcome, and CareCredit available — no surprises in a stressful moment.',
    ],
    faqs: [
      { q: 'Where is your office relative to Washington Park?', a: "We're at 2121 S Downing St, Suite B, just across Wash Park's western boundary in the adjacent Platt Park neighborhood. Downing Street is the line between the two, so from most of Washington Park we're only minutes away — and from the western side you can walk here. Call (720) 573-2629 when you're on your way." },
      { q: 'Can I walk in the same day from Wash Park?', a: "Yes. Walk-ins are welcome and we're open 8am–8pm every day, including weekends. You don't need to be an existing patient. If you can, call ahead on (720) 573-2629 so we're ready — but you're welcome to come straight in." },
      { q: 'I got hurt on the park loop — do you handle that?', a: "Yes. Chipped, broken, and knocked-out teeth from a fall or a stray elbow are common emergencies for us. For a knocked-out tooth, keep it in milk or saliva and come immediately. If you're unsure how urgent it is, call (720) 573-2629 and we'll help you decide." },
    ],
    relatedServices: COMMON,
  },

  // ── Littleton ────────────────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-littleton-co',
    area: 'Littleton',
    h1: 'Emergency Dentist in Littleton, CO',
    title: 'Emergency Dentist in Littleton, CO | Urgent Dental',
    metaDescription:
      'Same-day emergency dentist a short drive north of Littleton, CO. Open 8am–8pm every day, walk-ins welcome, upfront pricing. In pain? Call (720) 573-2629.',
    keyword: 'emergency dentist Littleton CO',
    directAnswer:
      "If you're in Littleton with a dental emergency, our office at 2121 S Downing St in Denver's Platt Park neighborhood is a straightforward drive north — generally a short trip up Santa Fe Drive (US-85), South Broadway, or South University Boulevard, though the exact time depends on where you start and on traffic. We're an emergency-only office, open 8am to 8pm every day, and walk-ins are welcome. If you're in pain, call (720) 573-2629 and head our way.",
    local: [
      "Littleton sits just south of us in Arapahoe County, and most of our patients from there are only a handful of miles away. Whether you're coming from Historic Downtown Littleton and Main Street, the neighborhoods around Ketring Park and Sterne Park, or somewhere along the High Line Canal or the South Platte, the route is simple: head north toward central Denver on Santa Fe Drive (US-85), South Broadway, or South University Boulevard. We're at 2121 S Downing St, Suite B, in Platt Park near Old South Pearl Street and the University of Denver — close enough that a Littleton resident can usually reach us in well under half an hour outside of heavy rush hour.",
      "When you have a dental emergency — a knocked-out tooth, a cracked filling, sudden swelling, or severe pain — the distance you have to travel matters. A short, familiar drive north from Littleton means less time in discomfort, and because we focus only on emergencies, you're not waiting behind a full schedule of routine cleanings. For families around downtown Littleton, Ketring Park, or Sterne Park, an emergency dentist a quick trip up Broadway or Santa Fe makes a stressful situation far more manageable.",
    ],
    whyChoose: [
      'Close and easy to reach — a direct drive north on Santa Fe Drive (US-85), South Broadway, or South University Boulevard, usually under half an hour depending on traffic.',
      'Emergency-only focus means faster attention when you\'re in pain — no juggling routine appointments.',
      'Open 8am–8pm every day, including weekends, so a toothache that starts Sunday in downtown Littleton doesn\'t have to wait.',
      'Walk-ins welcome, upfront pricing, PPO plans welcome, and CareCredit available.',
    ],
    faqs: [
      { q: 'How far is your office from Littleton?', a: "We're only a few miles north of Littleton at 2121 S Downing St in Denver's Platt Park neighborhood. Most patients drive up Santa Fe Drive (US-85), South Broadway, or South University Boulevard — generally a 15-to-25-minute trip depending on where you start and current traffic. If you're dealing with an emergency, call (720) 573-2629 and we'll help you get seen." },
      { q: 'Can I be seen the same day if I live in Littleton?', a: "Yes. We're emergency-only, so same-day care is exactly what we do. Walk-ins are welcome and we're open 8am–8pm every day, but calling ahead on (720) 573-2629 lets us prepare and get you in as quickly as possible once you make the short drive up." },
      { q: 'Do you take my insurance, and what will it cost?', a: "We accept PPO dental plans and offer CareCredit financing, and we give you upfront pricing before treatment begins. If you're driving in from Littleton and want to confirm coverage first, call (720) 573-2629 and we'll walk you through it." },
    ],
    relatedServices: COMMON,
  },

  // ── Centennial ───────────────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-centennial-co',
    area: 'Centennial',
    h1: 'Emergency Dentist in Centennial, CO',
    title: 'Emergency Dentist in Centennial, CO | Urgent Dental',
    metaDescription:
      'Same-day emergency dentist north of Centennial, CO via I-25 or University Blvd. Open 8am–8pm every day, walk-ins welcome. In pain? Call (720) 573-2629.',
    keyword: 'emergency dentist Centennial CO',
    directAnswer:
      "If you live in Centennial and have a dental emergency, our office at 2121 S Downing St in Denver's Platt Park neighborhood is a straightforward drive north — whether you head up I-25 or take University Boulevard north from the Arapahoe Road corridor. The exact time depends on where in Centennial you start and on traffic. We're emergency-only, open 8am to 8pm every day, and walk-ins are welcome. If you're in pain, call (720) 573-2629 and we'll help you get seen quickly.",
    local: [
      "Centennial sits just south of Denver in Arapahoe County, spanning neighborhoods like Southglenn, Willow Creek, Foxridge, and Piney Creek, with familiar landmarks such as The Streets at SouthGlenn at Arapahoe Road and University Boulevard and Centennial Center Park. The city is anchored by I-25 running north–south and by east–west arterials like Arapahoe Road, Dry Creek Road, and County Line Road. From most of Centennial, the most direct routes to us are I-25 north toward the Evans or University exits, or University Boulevard straight north through the University of Denver area into Platt Park, where we're located at 2121 S Downing St, Suite B.",
      "When a tooth is knocked out, a filling or crown fails, or an abscess flares, the time it takes to be seen matters. Because Centennial connects to our Platt Park location by well-traveled routes like I-25 and University Boulevard, many residents can reach us without driving deep into downtown Denver — less time managing pain in the car, and a faster path to relief. Since we treat emergencies exclusively and hold hours 8am–8pm every day, Centennial patients can often be seen the same day rather than waiting for a routine slot.",
    ],
    whyChoose: [
      'A reasonable drive north via I-25 or University Boulevard — no downtown detour required.',
      'Emergency-only, so our whole day is built around getting people in pain seen promptly.',
      'Open 8am–8pm every day with walk-ins welcome, which fits unpredictable emergencies and work schedules.',
      'PPO plans welcome and CareCredit accepted, with upfront pricing so you know the cost before treatment.',
    ],
    faqs: [
      { q: 'How far is your office from Centennial?', a: "Our office is at 2121 S Downing St, Suite B in Denver's Platt Park neighborhood, north of Centennial. Depending on where you start, most patients reach us by taking I-25 north or heading up University Boulevard, though traffic can change that. If you're in pain, call (720) 573-2629 and we'll help you plan your visit." },
      { q: 'Can I be seen the same day if I live in Centennial?', a: "Yes, in most cases. Because we treat emergencies exclusively and are open 8am–8pm every day, we keep our schedule flexible for urgent visits and welcome walk-ins. Calling ahead on (720) 573-2629 helps us prepare and cut down your wait once you arrive." },
      { q: 'Do you take my insurance and what will an emergency visit cost?', a: "We accept PPO dental insurance and CareCredit financing, and we provide upfront pricing so you understand the cost before any treatment begins. If you're unsure about your coverage, call (720) 573-2629 and our team can walk you through your options before you make the drive." },
    ],
    relatedServices: COMMON,
  },

  // ── Aurora ───────────────────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-aurora-co',
    area: 'Aurora',
    h1: 'Emergency Dentist near Aurora, CO',
    title: 'Emergency Dentist near Aurora, CO | Urgent Dental',
    metaDescription:
      'Same-day emergency dentist for Aurora, CO — open 8am–8pm every day, walk-ins welcome, upfront pricing. In pain? Call (720) 573-2629.',
    keyword: 'emergency dentist Aurora CO',
    directAnswer:
      "If you're in Aurora with a dental emergency, our office at 2121 S Downing St in south-central Denver is a reasonably straight shot west — though how long it takes depends on where in Aurora you start, since the city stretches across more than 165 square miles. From the closer western neighborhoods near I-225 the drive is short; the far eastern and southern areas naturally take longer, and traffic on I-25, I-225, and Colfax always plays a role. We're emergency-only, open 8am to 8pm every day, and walk-ins are welcome. If you're in pain, call (720) 573-2629 and head our way.",
    local: [
      "Aurora is Colorado's third-largest city, spread across more than 165 square miles reaching into Arapahoe, Adams, and Douglas counties. Because it's built from hundreds of neighborhoods, there's no single distance to us: someone near the Anschutz Medical Campus and Fitzsimons, or near Stanley Marketplace, is much closer than a family out by Aurora Reservoir or Southlands in the far southeast. From our office in the Platt Park / Washington Park area, most Aurora patients use the interstate grid — I-225 links Aurora back toward central Denver and I-25 — while surface routes like Colfax Avenue (US-40), Alameda, and Havana Street offer alternatives depending on your corner of the city. Expect roughly twenty to forty-plus minutes depending on your starting point and traffic, so check a live map before you leave.",
      "When a tooth breaks, an abscess flares, or a crown comes off, most general dentists in Aurora are booked days out and reserve emergency slots sparingly. That gap is exactly what an emergency-only office is built to close. Because we don't run a routine cleaning-and-checkup schedule, an Aurora resident in real pain isn't competing with a calendar full of six-month recall visits — and we're open every day, including evenings and weekends when a regular office is closed.",
    ],
    whyChoose: [
      'Emergency-only means same-day urgent care instead of a days-out waitlist.',
      'Open 8am–8pm every day, including evenings and weekends, for Aurora\'s varied schedules.',
      'Walk-ins welcome, so you don\'t have to book ahead to be seen.',
      'Upfront pricing with PPO insurance and CareCredit accepted, so cost is clear before treatment.',
    ],
    faqs: [
      { q: 'How far is your office from Aurora?', a: "It depends which part of Aurora you're coming from, since the city covers more than 165 square miles. From the western neighborhoods near I-225 the drive to 2121 S Downing St is fairly short; the eastern and southern areas near Southlands take noticeably longer. Most people take I-225 to I-25, or use Colfax and Alameda heading west — generally twenty to forty-plus minutes depending on location and traffic. Check a live map, and call (720) 573-2629 if you're in pain." },
      { q: 'Can I be seen the same day if I live in Aurora?', a: "Yes. As an emergency-only office, we keep our schedule open for urgent problems rather than routine checkups, so Aurora residents can typically be seen the same day. Walk-ins are welcome and we're open 8am–8pm every day. Calling ahead on (720) 573-2629 helps us prepare and lets you time the drive around traffic." },
      { q: 'Should I go to an Aurora ER or a dentist for tooth pain?', a: "For most dental emergencies, a dentist is the better choice. Hospital ERs can help with severe swelling, uncontrolled bleeding, trauma, or difficulty breathing or swallowing, but they generally can't treat the tooth itself and will refer you to a dentist afterward. For a broken or knocked-out tooth, a lost filling or crown, or a painful abscess, coming straight to us saves a step. Unsure how serious it is? Call (720) 573-2629." },
    ],
    relatedServices: COMMON,
  },

  // ── Greenwood Village / Denver Tech Center ───────────────────────────────
  {
    slug: 'emergency-dentist-greenwood-village-co',
    area: 'Greenwood Village',
    h1: 'Emergency Dentist near Greenwood Village & the DTC',
    title: 'Emergency Dentist near Greenwood Village, CO | Urgent Dental',
    metaDescription:
      'Same-day emergency dentist a short drive up I-25 from Greenwood Village & the Denver Tech Center. Open 8am–8pm every day, walk-ins welcome. Call (720) 573-2629.',
    keyword: 'emergency dentist Greenwood Village CO',
    directAnswer:
      "If you're in Greenwood Village or working in the Denver Tech Center and have a dental emergency, we're a straightforward drive north up I-25 to our office at 2121 S Downing St in the Platt Park neighborhood, near Old South Pearl Street and the University of Denver. In typical, non-rush-hour traffic the trip usually runs roughly 15 to 20 minutes, though I-25 congestion around the DTC can add time. We're emergency-only, open 8am to 8pm every day, and walk-ins are welcome. Call (720) 573-2629 and we can get you in the same day.",
    local: [
      "Greenwood Village sits south of Denver along the I-25 Southeast Corridor and takes in much of the Denver Tech Center, with landmarks like Fiddler's Green Amphitheatre and Greenwood Plaza, plus the High Line Canal and Cherry Creek trails winding through it. Major arterials include I-25, Arapahoe Road, Belleview Avenue, and Orchard Road, and the RTD light rail serves stops like Belleview, Orchard, and Arapahoe at Village Center. From any of these, the route to us is simple: head north on I-25 and exit toward the Platt Park / Washington Park area, where we're at 2121 S Downing St, Suite B — generally around 15 to 20 minutes depending on I-25 traffic.",
      "The Denver Tech Center is a dense cluster of corporate campuses and office towers, which means thousands of people spend their weekdays here away from their regular dentist. A cracked tooth, lost filling, sudden toothache, or knocked-out crown rarely waits for a convenient time, and it can be hard to leave during standard office hours. Because we're emergency-focused and open 8am to 8pm every single day, a DTC worker can come in before a morning meeting, over a lunch break, or after the workday ends — and residents have the same flexibility on weekends and evenings.",
    ],
    whyChoose: [
      'Easy reach from the DTC — a direct shot north on I-25, usually around 15 to 20 minutes in typical traffic.',
      'Open 8am–8pm every day, so same-day care fits around a Tech Center workday, evening, or weekend.',
      'Emergency-only and walk-ins welcome, so you\'re not competing with routine cleanings for a slot.',
      'Upfront pricing with PPO insurance and CareCredit accepted, so you know your options before treatment.',
    ],
    faqs: [
      { q: 'How far is your office from Greenwood Village?', a: "We're at 2121 S Downing St in Denver's Platt Park neighborhood, a fairly direct drive north up I-25 from Greenwood Village and the Denver Tech Center. In typical conditions the trip usually runs around 15 to 20 minutes, though I-25 traffic near the DTC can add time, so allow a cushion. Call (720) 573-2629 before you head over and we'll be ready." },
      { q: 'I work in the Denver Tech Center — can I be seen the same day?', a: "Yes. We're an emergency-only office open 8am–8pm every day, and walk-ins are welcome, so you can come in before work, on a lunch break, or after you leave the office. Calling ahead on (720) 573-2629 helps us prepare, but same-day emergency care is exactly what we're set up for." },
      { q: 'Can you handle the urgent problem so my own dentist does the follow-up?', a: "Yes. We can treat the urgent problem now and provide documentation so your regular dentist can manage any follow-up care. We accept PPO insurance and CareCredit, with upfront pricing before treatment begins." },
    ],
    relatedServices: COMMON,
  },

  // ── Lakewood ─────────────────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-lakewood-co',
    area: 'Lakewood',
    h1: 'Emergency Dentist near Lakewood, CO',
    title: 'Emergency Dentist near Lakewood, CO | Urgent Dental',
    metaDescription:
      'Same-day emergency dentist a short drive east of Lakewood, CO via 6th Ave or Alameda. Open 8am–8pm every day, walk-ins welcome. In pain? Call (720) 573-2629.',
    keyword: 'emergency dentist Lakewood CO',
    directAnswer:
      "If you live in Lakewood and have a dental emergency, our office at 2121 S Downing St in Denver's Platt Park neighborhood is a short drive east across the county line. Most Lakewood residents reach us by heading east on the 6th Avenue Freeway (US-6) or Alameda toward south-central Denver — the exact time depends on where in Lakewood you start and on traffic. We're emergency-only and open 8am to 8pm every day, with walk-ins welcome. Call (720) 573-2629 and we can get you seen.",
    local: [
      "Lakewood sits immediately west of Denver in Jefferson County, stretching from the Belmar shopping and cultural district near Wadsworth and Alameda out to Green Mountain (William F. Hayden Park) and Bear Creek Lake Park on the western edge. Whether you're coming from Belmar, Green Mountain, the Bear Creek area, or the West Colfax / 40 West Arts corridor, the fastest path is usually eastbound: take the 6th Avenue Freeway (US-6) or West Alameda Avenue into Denver, then work south toward the Washington Park and Platt Park area. Our office at 2121 S Downing St, Suite B is just off South University near Old South Pearl Street — an easy landmark once you're in south-central Denver.",
      "When a tooth cracks, an abscess flares, or a crown comes loose, the last thing you want is to drive all over the metro looking for an open chair. Because we focus only on dental emergencies and hold hours 8am–8pm every single day, Lakewood residents don't have to wait days for a routine opening or gamble on a hospital ER that can't actually treat teeth. A predictable 6th Avenue or Alameda drive east, an office that expects walk-ins, and upfront pricing mean you can act quickly when time and pain both matter.",
    ],
    whyChoose: [
      'A straightforward drive east on 6th Avenue (US-6) or Alameda — no metro-wide search for an open chair.',
      'Emergency-only, so a Lakewood resident in pain isn\'t competing with a booked schedule of routine cleanings.',
      'Open 8am–8pm every day, including weekends, with walk-ins welcome.',
      'PPO insurance accepted and CareCredit available, with upfront pricing before treatment.',
    ],
    faqs: [
      { q: 'How far is your office from Lakewood?', a: "It depends where in Lakewood you start, but for most residents it's roughly a 15-to-25-minute drive in normal traffic. The common route is eastbound on the 6th Avenue Freeway (US-6) or West Alameda Avenue into Denver, then south toward Platt Park to reach us at 2121 S Downing St, Suite B. Traffic can change that, so call ahead on (720) 573-2629 and we'll help you plan." },
      { q: 'Can I be seen the same day if I live in Lakewood?', a: "Yes. We're an emergency dental office and see patients the same day, and we welcome walk-ins from Lakewood and throughout the west metro. Because we're open 8am–8pm every day, you don't need to wait for a routine appointment. Calling (720) 573-2629 before you leave helps us have a chair ready." },
      { q: 'Should I go to a Lakewood ER or your office for a bad toothache?', a: "Most hospital ERs can offer pain medication but aren't equipped to treat the tooth, so the underlying problem remains. For a cracked tooth, severe toothache, abscess, knocked-out tooth, or lost filling or crown, an emergency dental office is usually more direct. If you have swelling that affects your breathing or vision, seek urgent medical care first, then call (720) 573-2629." },
    ],
    relatedServices: COMMON,
  },
];

export const AREA_BY_SLUG: Record<string, Area> = Object.fromEntries(
  AREAS.map((a) => [a.slug, a]),
);
