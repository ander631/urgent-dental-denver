/**
 * Emergency service pages (spec §4a, §5, §6, §8). One strong page per service;
 * the old duplicates 301 into these (see src/data/redirects.ts + `consolidates`).
 *
 * CONTENT RULES honored here (spec §6 — YMYL / E-E-A-T):
 *   • Each page is genuinely page-specific — NO boilerplate paragraph with one
 *     word swapped. The only intentionally-consistent text is the honest cost
 *     answer (it MUST read the same everywhere).
 *   • Conditions/treatments described plainly and accurately. No invented
 *     prices, stats, success rates, or outcomes. "Often" / "in many cases" /
 *     "Dr. Boyd will evaluate and recommend" are the honest framings.
 *   • "What to do right now" guidance is safe + standard (e.g. store a
 *     knocked-out tooth in milk/saliva). When in doubt the advice is "call us
 *     and come in" — and true medical-emergency escalations point to the ER/911.
 *   • Every page carries a Dr. Boyd author/reviewer line (spec §6/§8) and links
 *     to /meet-the-doctor/ (built Phase 3).
 *
 * The honest cost line is shared so it stays consistent (spec §6 guardrail).
 */
export const COST_ANSWER =
  "We give you upfront pricing before we begin — no surprises. Most PPO plans are welcome and CareCredit financing is available if you need it. The exact cost depends on what Dr. Boyd finds when he evaluates you, so the honest answer is to call and we'll walk you through it before any treatment starts.";

export interface Faq { q: string; a: string; }
export interface Step { title: string; detail: string; }

export interface Service {
  /** Full URL slug segment, e.g. 'root-canal-denver-co' → /root-canal-denver-co/ */
  slug: string;
  /** Short label for chips, related links, hub cards. */
  name: string;
  h1: string;
  /** <title> — [Keyword] in Denver, CO | Urgent Dental (≤ ~60 chars, spec §7). */
  title: string;
  metaDescription: string;
  keyword: string;
  /** One-line summary used on the hub card. */
  hubBlurb: string;
  /** 60–100 word plain-language direct answer (spec §6). */
  directAnswer: string;
  whatItIs: string[];
  whenEmergency: string[];
  whatToDoNow: Step[];
  /** How treatment works at THIS office, in plain terms (spec §5). */
  treatment: string[];
  /** FAQ info woven into the page body as prose (spec §6). Distilled from `faqs`
   *  so the useful info stays on-page after FAQs were consolidated to /faq/. */
  goodToKnow?: string[];
  faqs: Faq[];
  /** Related service slugs (2–3) for internal linking (spec §5). */
  related: string[];
  /** Old URLs consolidated into this page (documentation; see redirects.ts). */
  consolidates?: string[];
}

export const SERVICES: Service[] = [
  // ── Root canal ──────────────────────────────────────────────────────────
  {
    slug: 'root-canal-denver-co',
    name: 'Root Canal',
    h1: 'Emergency Root Canal in Denver, CO',
    title: 'Emergency Root Canal in Denver, CO | Urgent Dental',
    metaDescription:
      'Severe tooth pain? Get a same-day emergency root canal in Denver. Open 8am–8pm every day, upfront pricing, PPO & CareCredit. Call (720) 573-2629.',
    keyword: 'emergency root canal Denver',
    hubBlurb: 'Deep, throbbing pain or an infected nerve — treated the same day.',
    directAnswer:
      "A root canal treats infection or inflammation inside a tooth — the deep, throbbing pain that keeps you up at night. It's usually an emergency when the ache is constant, wakes you, or comes with swelling. In many cases we can start treatment the same day you call to get you out of pain. Until you're seen, manage discomfort with an over-the-counter pain reliever and avoid chewing on that tooth. Call (720) 573-2629 and we'll get you in.",
    whatItIs: [
      "Inside every tooth is a soft core of nerve and blood vessels called the pulp. When decay, a crack, or trauma lets bacteria reach the pulp, it becomes inflamed or infected — and that produces the deep, lingering ache people describe as the worst tooth pain they've had.",
      "A root canal removes the infected pulp, cleans and disinfects the inside of the tooth, and seals it. It relieves the pain and lets you keep your natural tooth instead of losing it.",
    ],
    whenEmergency: [
      'Pain is constant, throbbing, or wakes you at night.',
      'Sensitivity to hot or cold lingers long after the source is gone.',
      'There is swelling around the tooth or gum, or a pimple-like bump on the gum.',
      'The tooth hurts to bite or feels loose.',
    ],
    whatToDoNow: [
      { title: 'Manage the pain', detail: 'Take an over-the-counter pain reliever as directed on the label. A cold compress on the cheek can help.' },
      { title: 'Protect the tooth', detail: "Avoid chewing on that side and skip very hot or very cold foods, which can spike the pain." },
      { title: 'Watch for swelling', detail: 'Growing facial swelling, fever, or trouble swallowing means you need to be seen urgently — call right away.' },
      { title: 'Call us', detail: "Phone (720) 573-2629. We're open 8am–8pm every day and can often start treatment the same day." },
    ],
    treatment: [
      "Dr. Boyd starts by numbing the area thoroughly, so the procedure itself is far more comfortable than the toothache that brought you in. He removes the infected pulp, cleans the canals, and seals the tooth.",
      "Depending on the tooth, a crown is often recommended afterward to protect it long-term. Dr. Boyd will evaluate your tooth and explain exactly what it needs — and what it costs — before anything begins.",
    ],
    goodToKnow: [
      "Because we're emergency-only and open 8am–8pm every day, we can often start a root canal the same day you call — phone (720) 573-2629 to find out what today looks like. The treatment is done under local anesthetic, so you're numb throughout; most people find it far more comfortable than the toothache that brought them in, with only mild tenderness for a day or two afterward.",
      "On back teeth especially, a crown is often recommended afterward to protect the tooth from cracking. Dr. Boyd will tell you whether yours needs one, and you'll have upfront pricing before anything begins.",
    ],
    faqs: [
      { q: 'Can I get a root canal the same day I call?', a: "Often, yes. Because we're an emergency-only practice open 8am–8pm every day, we hold time for people in pain and can frequently start a root canal the same day you call. Call (720) 573-2629 and we'll tell you what today looks like." },
      { q: 'Does a root canal hurt?', a: "The procedure is done under local anesthetic, so you're numb throughout. Most people find the root canal itself far more comfortable than the toothache that sent them in. Some tenderness for a day or two afterward is normal." },
      { q: 'Do I need a crown after a root canal?', a: 'In many cases, yes — especially on back teeth that take heavy chewing force. A crown protects the treated tooth from cracking. Dr. Boyd will tell you whether your tooth needs one and why.' },
      { q: 'How much does an emergency root canal cost?', a: COST_ANSWER },
    ],
    related: ['toothache-and-dental-pain-denver-co', 'dental-abscess-infection-denver-co', 'broken-or-chipped-tooth-denver-co'],
    consolidates: [
      '/root-canal/', '/root-canal-therapy-in-denver-co/', '/root-canal-services-denver-co/',
      '/dental-root-canal-procedure-denver-co/', '/urgent-root-canal-treatment-denver-co/',
      '/root-canal-treatment-for-tooth-decay-denver-co/', '/do-you-need-a-crown-after-a-root-canal-denver-co/',
      '/process-of-root-canal-and-crown-denver-co/',
    ],
  },

  // ── Tooth extractions ───────────────────────────────────────────────────
  {
    slug: 'tooth-extractions-denver-co',
    name: 'Tooth Extractions',
    h1: 'Emergency Tooth Extractions in Denver, CO',
    title: 'Emergency Tooth Extraction in Denver, CO | Urgent Dental',
    metaDescription:
      'Need a tooth out today? Gentle same-day emergency extractions in Denver. Open 8am–8pm daily, upfront pricing, PPO & CareCredit. Call (720) 573-2629.',
    keyword: 'emergency tooth extraction Denver',
    hubBlurb: 'A tooth beyond saving, removed gently — often the same day.',
    directAnswer:
      "Sometimes a tooth is too damaged, decayed, or infected to save, and removing it is the fastest way out of pain. We do gentle, same-day emergency extractions in Denver, open 8am–8pm every day. Dr. Boyd numbs the area completely first, and you'll know the price before we begin. Until you're seen, manage pain with an over-the-counter reliever and avoid chewing on that side. Call (720) 573-2629.",
    whatItIs: [
      "An extraction removes a tooth that can't be saved — whether from deep decay, a fracture below the gumline, advanced gum disease, or a severe infection. It sounds worse than it feels: with modern anesthetic, the goal is a calm, comfortable visit that ends your pain.",
      "Not every painful tooth needs to come out. Where a tooth can be saved with a root canal or a filling, Dr. Boyd will tell you honestly. Extraction is recommended when it's genuinely the best option.",
    ],
    whenEmergency: [
      'A tooth is broken to the gumline or cracked and painful.',
      'There is a severe infection or abscess around the tooth.',
      'Pain is constant and the tooth is loose or non-restorable.',
      'A wisdom tooth is impacted and causing pain or swelling.',
    ],
    whatToDoNow: [
      { title: 'Control the pain', detail: 'An over-the-counter pain reliever, taken as directed, plus a cold compress on the cheek helps until you can be seen.' },
      { title: 'Keep the area clean', detail: 'Gently rinse with warm salt water. Avoid chewing on that side.' },
      { title: "Don't delay an infection", detail: 'If there is spreading swelling, fever, or trouble swallowing, you need urgent care — call right away.' },
      { title: 'Call us', detail: "Phone (720) 573-2629. We're open 8am–8pm every day and can often remove the tooth the same day." },
    ],
    treatment: [
      "Dr. Boyd numbs the tooth and surrounding tissue thoroughly, then removes the tooth as gently as possible. Most simple extractions take only a few minutes once you're numb.",
      "You'll leave with clear aftercare instructions to protect the site and heal comfortably. If you'll eventually want to replace the tooth, Dr. Boyd can talk through your options — but the priority today is getting you out of pain.",
    ],
    goodToKnow: [
      "You're fully numb during an extraction, so you feel pressure but not pain, and some soreness for a day or two afterward is normal and manageable. Because we're emergency-only and open 8am–8pm every day, we can frequently remove a tooth the same day you call.",
      "Not every painful tooth has to come out — where a root canal, crown, or filling can save it, Dr. Boyd will tell you honestly, and we only recommend extraction when it's genuinely the best option. You'll know the price before we begin.",
    ],
    faqs: [
      { q: 'Will the extraction hurt?', a: "You're fully numb during the procedure, so you feel pressure but not pain. Some soreness for a day or two afterward is normal and manageable with over-the-counter pain relief and the aftercare we give you." },
      { q: 'Can you take the tooth out the same day?', a: "Often, yes. We're emergency-only and open 8am–8pm every day, so we can frequently do a same-day extraction. Call (720) 573-2629 and we'll tell you what today looks like." },
      { q: 'Can the tooth be saved instead?', a: 'Sometimes. Where a root canal, crown, or filling can save the tooth, Dr. Boyd will tell you honestly. We only recommend extraction when it is truly the best option for you.' },
      { q: 'How much does an emergency extraction cost?', a: COST_ANSWER },
    ],
    related: ['wisdom-teeth-denver-co', 'dental-abscess-infection-denver-co', 'dental-trauma-denver-co'],
    consolidates: [
      '/extractions/', '/dentist-for-extractions-denver-co/', '/denver-tooth-extractions/',
      '/immediate-tooth-extraction-denver-co/', '/dental-tooth-removal-denver-co/',
    ],
  },

  // ── Toothache / dental pain ─────────────────────────────────────────────
  {
    slug: 'toothache-and-dental-pain-denver-co',
    name: 'Toothache & Dental Pain',
    h1: 'Emergency Toothache Relief in Denver, CO',
    title: 'Emergency Toothache Relief in Denver, CO | Urgent Dental',
    metaDescription:
      "Bad toothache in Denver? Same-day relief, open 8am–8pm every day. We find the cause and stop the pain. PPO & CareCredit. Call (720) 573-2629.",
    keyword: 'emergency toothache dentist Denver',
    hubBlurb: 'Throbbing, aching, or sensitive — we find the cause and stop it today.',
    directAnswer:
      "A toothache is your body flagging a problem — decay, an infection, a crack, or an exposed nerve — and it rarely gets better on its own. We're a same-day emergency dentist in Denver, open 8am–8pm every day, and our job is to find the cause and stop the pain. Until you're seen, rinse with warm salt water, take an over-the-counter pain reliever as directed, and use a cold compress. Call (720) 573-2629.",
    whatItIs: [
      "Tooth pain has many causes: a cavity reaching the nerve, an infected or abscessed tooth, a cracked or chipped tooth, a lost filling, gum problems, or food wedged tightly between teeth. The type of pain — sharp, throbbing, or triggered by hot and cold — helps point to the cause.",
      "What they have in common is that they don't resolve by waiting. The sooner the cause is treated, the simpler and more comfortable the fix usually is.",
    ],
    whenEmergency: [
      'Pain is severe, constant, or wakes you at night.',
      'There is swelling in the face, gum, or jaw.',
      'You have a fever alongside the tooth pain.',
      'Pain follows a knock or injury to the tooth.',
    ],
    whatToDoNow: [
      { title: 'Rinse and clear', detail: 'Rinse with warm salt water and gently floss around the tooth to remove any trapped food.' },
      { title: 'Ease the pain', detail: 'Take an over-the-counter pain reliever as directed. A cold compress on the cheek helps swelling. Do not place aspirin directly on the gum — it can burn the tissue.' },
      { title: 'Note the triggers', detail: 'Notice what makes it worse — hot, cold, biting. That helps Dr. Boyd diagnose it faster.' },
      { title: 'Call us', detail: "Phone (720) 573-2629. We're open 8am–8pm every day and can usually see you the same day." },
    ],
    treatment: [
      "First, Dr. Boyd finds the cause — often with a quick exam and an X-ray. The pain is a symptom; treating the source is what makes it stop for good.",
      "Depending on what he finds, the fix might be a filling, a root canal, treating an infection, or another targeted step. He'll explain what your tooth needs and what it costs before starting.",
    ],
    goodToKnow: [
      "If your toothache has faded, don't assume it's gone — pain that stops can mean the nerve has died while the infection quietly continues, so it's still worth being seen. For relief in the meantime, over-the-counter pain relievers taken as directed, a cold compress, and a warm salt-water rinse are the usual first steps; avoid placing aspirin directly on the gum.",
      "We're open 8am–8pm every day, including weekends, and can usually see you the same day — call (720) 573-2629. If the pain is severe or comes with swelling or fever, come in promptly.",
    ],
    faqs: [
      { q: 'My toothache stopped — do I still need to come in?', a: "Yes. Pain that fades can mean the nerve has died, and the underlying infection is still there and can worsen. It's worth being seen so a small problem doesn't become a bigger one." },
      { q: 'What can I take for the pain right now?', a: 'Over-the-counter pain relievers taken as directed on the label are the usual first step, along with a cold compress and a warm salt-water rinse. Avoid putting aspirin directly on the gum. If pain is severe or you have swelling or fever, call us and come in.' },
      { q: 'Can you see me today?', a: "Usually, yes. We're emergency-only and open 8am–8pm every day, including weekends. Call (720) 573-2629 and we'll get you in." },
      { q: 'How much will it cost to fix my toothache?', a: COST_ANSWER },
    ],
    related: ['root-canal-denver-co', 'dental-abscess-infection-denver-co', 'lost-filling-or-crown-denver-co'],
    consolidates: ['/dentist-for-tooth-pain-denver-co/', '/toothache-relief-for-adults-denver-co/'],
  },

  // ── Dental trauma ───────────────────────────────────────────────────────
  {
    slug: 'dental-trauma-denver-co',
    name: 'Dental Trauma',
    h1: 'Emergency Dental Trauma Care in Denver, CO',
    title: 'Emergency Dental Trauma Care in Denver, CO | Urgent Dental',
    metaDescription:
      'Mouth injury, loose or displaced tooth in Denver? Same-day dental trauma care, open 8am–8pm every day. Call (720) 573-2629 — come straight in.',
    keyword: 'dental trauma dentist Denver',
    hubBlurb: 'Injured, loose, or displaced teeth from a fall, sports, or accident.',
    directAnswer:
      "Dental trauma is any injury to the teeth, gums, or jaw — from a fall, sports, or an accident. Teeth can be loosened, pushed out of position, cracked, or knocked out entirely. With trauma, time matters: the sooner you're seen, the better the odds of saving the tooth. We're open 8am–8pm every day for same-day trauma care. If there's a head injury, loss of consciousness, or heavy bleeding that won't stop, call 911 first. Otherwise, call (720) 573-2629 and come straight in.",
    whatItIs: [
      "Dental trauma covers a range of injuries: a tooth knocked loose, pushed inward or sideways (displaced), fractured, or fully knocked out. The gums and the bone that hold the teeth can be injured too.",
      "Even a tooth that looks fine after a knock can have hidden damage to the nerve or root. A prompt exam catches problems early, while they're still fixable.",
    ],
    whenEmergency: [
      'A tooth is loose, moved out of position, or pushed into the gum.',
      'A tooth is fractured or knocked out.',
      'There is bleeding from the mouth or a cut to the lip or gum.',
      'Any injury to the jaw, or pain when opening and closing.',
    ],
    whatToDoNow: [
      { title: 'Rule out a bigger emergency', detail: 'If there is a head injury, loss of consciousness, or heavy bleeding that won’t stop, call 911 or go to the ER first — the tooth can wait behind your safety.' },
      { title: 'Control bleeding', detail: 'For a cut or socket, press gently with clean gauze or a clean cloth. A cold compress on the outside reduces swelling.' },
      { title: 'Save any pieces', detail: 'Keep any broken fragments or a knocked-out tooth — bring them with you (see our knocked-out tooth steps for how to store one).' },
      { title: 'Come straight in', detail: "Call (720) 573-2629. We're open 8am–8pm every day and the sooner we see you, the more we can often do." },
    ],
    treatment: [
      "Dr. Boyd checks the teeth, gums, and bite, usually with an X-ray to see damage below the surface. A loosened or displaced tooth can often be repositioned and stabilized so it can heal.",
      "Fractures are smoothed or restored, and any nerve damage is addressed. He'll explain what he sees and what your tooth needs before starting — and get you comfortable fast.",
    ],
    goodToKnow: [
      "A tooth that's been knocked loose or out of position is an emergency — it can often be repositioned and stabilized to heal, but the window to do that well is short, so call and come in. Even when a tooth looks fine after a hit, a knock can injure the nerve or root, and early problems are the easiest to treat, so a quick exam is worth it.",
      "For a head injury, loss of consciousness, a possible broken jaw, or bleeding that won't stop, go to the ER or call 911 first. For the teeth themselves, we can see you the same day.",
    ],
    faqs: [
      { q: 'My tooth got knocked loose but is still there — is that an emergency?', a: 'Yes, see us promptly. A loosened or displaced tooth can often be repositioned and stabilized so it heals, but the window to do that well is short. Call (720) 573-2629 and come in.' },
      { q: 'The tooth looks okay after a hit — should I still get checked?', a: 'It’s worth it. A knock can injure the nerve or root even when the tooth looks normal, and early problems are the easiest to treat. A quick exam gives you peace of mind.' },
      { q: 'When should I go to the ER instead?', a: 'For a head injury, loss of consciousness, a possible broken jaw, or bleeding that won’t stop, go to the ER or call 911 first. For the teeth themselves, we can see you same-day.' },
      { q: 'How much does trauma care cost?', a: COST_ANSWER },
    ],
    related: ['knocked-out-tooth-denver-co', 'broken-or-chipped-tooth-denver-co', 'tooth-extractions-denver-co'],
    consolidates: ['/dental-trauma/'],
  },

  // ── Knocked-out tooth ───────────────────────────────────────────────────
  {
    slug: 'knocked-out-tooth-denver-co',
    name: 'Knocked-Out Tooth',
    h1: 'Knocked-Out Tooth Emergency in Denver, CO',
    title: 'Knocked-Out Tooth Dentist in Denver, CO | Urgent Dental',
    metaDescription:
      'Knocked-out tooth in Denver? Act fast — store it in milk and call (720) 573-2629. Same-day emergency dentist, open 8am–8pm every day.',
    keyword: 'knocked out tooth dentist Denver',
    hubBlurb: 'A tooth knocked out — the first 30 minutes matter most. Act fast.',
    directAnswer:
      "A knocked-out (avulsed) tooth is one of the few true dental emergencies where minutes matter. Handled quickly, a knocked-out adult tooth can sometimes be saved. Pick it up by the crown — never the root — gently rinse it if dirty, and try to place it back in the socket. If you can't, store it in milk or in your own saliva (hold it in your cheek) and get to us within 30 to 60 minutes. Call (720) 573-2629 and come straight in.",
    whatItIs: [
      "When an adult tooth is completely knocked out, the ligament fibers on the root are still alive for a short time. If the tooth is kept moist and reimplanted quickly, there's a real chance it can reattach — which is why the first 30 to 60 minutes are so important.",
      "Baby teeth are handled differently and are usually not reimplanted, but a child's mouth injury should still be seen. When in doubt, call and come in.",
    ],
    whenEmergency: [
      'An adult tooth has been completely knocked out — this is always urgent.',
      'The socket is bleeding or the gum and lip are cut.',
      'A child has knocked out a tooth (bring them in even if it was a baby tooth).',
    ],
    whatToDoNow: [
      { title: 'Pick it up by the crown', detail: 'Handle only the white chewing part. Never touch or scrub the root — those fibers are what let it reattach.' },
      { title: 'Rinse gently if dirty', detail: 'A quick rinse with milk or clean water. Do not scrub, scrape, or dry it, and don’t wrap it in tissue.' },
      { title: 'Reinsert or store it', detail: 'If you can, slip it back into the socket and bite gently on gauze. If not, store it in milk, or tuck it inside your cheek so your saliva keeps it moist.' },
      { title: 'Get to us fast', detail: 'Call (720) 573-2629 and come straight in — ideally within 30 to 60 minutes. We’re open 8am–8pm every day.' },
    ],
    treatment: [
      "If the tooth is viable, Dr. Boyd cleans and reimplants it, then splints it to the neighboring teeth so it can stabilize and heal. A follow-up plan protects it while the ligament reattaches.",
      "If the tooth can't be saved, he'll talk you through replacement options — but the first priority is always to try to save your natural tooth when the timing allows.",
    ],
    goodToKnow: [
      "Speed is everything: for an adult tooth, pick it up by the crown (not the root), rinse it gently, and try to place it back in the socket — if you can't, store it in milk or tuck it inside your cheek so saliva keeps it moist, and get to us within 30 to 60 minutes. Never let it dry out or wrap it in a tissue.",
      "Kept moist and reimplanted quickly, a knocked-out adult tooth can often be saved. We can't promise every tooth is savable, but fast action gives it the best chance — call (720) 573-2629 on your way in.",
    ],
    faqs: [
      { q: 'What do I do in the first 30 minutes after a tooth is knocked out?', a: 'Pick the tooth up by the crown (not the root), rinse it gently with milk or water if it’s dirty, and try to place it back in the socket. If you can’t, store it in milk or hold it in your cheek so saliva keeps it moist — and get to us within 30 to 60 minutes. Call (720) 573-2629.' },
      { q: 'What’s the best thing to store a knocked-out tooth in?', a: 'Milk is ideal. Your own saliva (tuck the tooth inside your cheek) also works. Plain water is a last resort, and never let the tooth dry out or wrap it in a tissue.' },
      { q: 'Can a knocked-out tooth really be put back in?', a: 'Often, yes — if it’s an adult tooth, kept moist, and reimplanted quickly. That’s why speed matters so much. We can’t promise every tooth is savable, but fast action gives it the best chance.' },
      { q: 'How much does it cost to treat a knocked-out tooth?', a: COST_ANSWER },
    ],
    related: ['dental-trauma-denver-co', 'broken-or-chipped-tooth-denver-co', 'tooth-extractions-denver-co'],
    consolidates: ['/displaced-tooth/'],
  },

  // ── Broken or chipped tooth ─────────────────────────────────────────────
  {
    slug: 'broken-or-chipped-tooth-denver-co',
    name: 'Broken or Chipped Tooth',
    h1: 'Broken or Chipped Tooth Repair in Denver, CO',
    title: 'Broken or Chipped Tooth Dentist Denver, CO | Urgent Dental',
    metaDescription:
      'Broke or chipped a tooth in Denver? Same-day repair, walk-ins welcome, open 8am–8pm every day. Upfront pricing. Call (720) 573-2629.',
    keyword: 'broken chipped tooth dentist Denver',
    hubBlurb: 'Cracked, chipped, or broken — repaired the same day, walk-ins welcome.',
    directAnswer:
      "A broken or chipped tooth ranges from a small cosmetic chip to a painful break that exposes the nerve. Even small chips can leave a sharp edge or let bacteria in, so it's worth getting checked. We repair broken teeth the same day in Denver, open 8am–8pm, walk-ins welcome. Save any pieces in milk or water, rinse your mouth, and use a cold compress for swelling. Call (720) 573-2629.",
    whatItIs: [
      "Teeth break for lots of reasons — biting something hard, a fall or knock, grinding, or an old filling giving way. A minor chip may only affect the enamel, while a deeper break can reach the sensitive dentin or the nerve, which is when it really hurts.",
      "The right repair depends on how much tooth is lost and whether the nerve is involved. Dr. Boyd matches the fix to the break — from a simple bonding to a crown.",
    ],
    whenEmergency: [
      'The break is painful or the tooth is sensitive to air, hot, or cold.',
      'There is a sharp edge cutting your tongue or cheek.',
      'A large piece has broken off, or you can see the inside of the tooth.',
      'The tooth broke from a fall or blow (see also dental trauma).',
    ],
    whatToDoNow: [
      { title: 'Save the pieces', detail: 'Keep any broken fragments in a small container of milk or clean water and bring them — sometimes they can be reattached.' },
      { title: 'Rinse and soothe', detail: 'Rinse your mouth with warm water. A cold compress on the cheek eases swelling; an over-the-counter pain reliever helps if it hurts.' },
      { title: 'Cover a sharp edge', detail: 'A piece of sugarless gum or dental wax over a jagged edge protects your tongue and cheek until you’re seen.' },
      { title: 'Call us', detail: 'Phone (720) 573-2629 or walk in. We’re open 8am–8pm every day and can usually repair it the same day.' },
    ],
    treatment: [
      "For a small chip, Dr. Boyd often smooths the edge or bonds tooth-colored material to rebuild it in a single visit. Larger breaks may need a crown to protect what's left.",
      "If the break has reached the nerve, a root canal may be needed before the tooth is restored. He'll show you what happened and explain your options and the cost before starting.",
    ],
    goodToKnow: [
      "We're open 8am–8pm every day, including weekends, and walk-ins are welcome — call ahead on (720) 573-2629 so we're ready, or come straight in. Even a small chip that doesn't hurt is worth a look, since a sharp edge or weak spot can crack further or let bacteria in, and small fixes now are simpler than bigger ones later.",
      "For a broken front tooth, tooth-colored bonding or a crown can often restore its shape and color. Dr. Boyd will talk through what's realistic for your specific break, with the price set before treatment starts.",
    ],
    faqs: [
      { q: 'Do you take walk-ins for a broken tooth after hours?', a: "We're open 8am–8pm every day, including weekends, and walk-ins are welcome. Calling ahead on (720) 573-2629 lets us have everything ready when you arrive, but you're welcome to come straight in." },
      { q: 'A small chip doesn’t hurt — do I still need to fix it?', a: 'It’s worth a look. Even a painless chip can leave a sharp edge or a weak spot where the tooth can crack further or let bacteria in. Small fixes now are simpler than bigger ones later.' },
      { q: 'Can a broken front tooth be made to look normal again?', a: 'In many cases, yes. Tooth-colored bonding or a crown can restore the shape and color of a front tooth. Dr. Boyd will talk through what’s realistic for your specific break.' },
      { q: 'How much does it cost to fix a broken tooth?', a: COST_ANSWER },
    ],
    related: ['dental-trauma-denver-co', 'toothache-and-dental-pain-denver-co', 'lost-filling-or-crown-denver-co'],
    consolidates: ['/broken-teeth-treatment-denver-co/', '/chipped-teeth/'],
  },

  // ── Wisdom teeth ────────────────────────────────────────────────────────
  {
    slug: 'wisdom-teeth-denver-co',
    name: 'Wisdom Teeth',
    h1: 'Emergency Wisdom Tooth Removal in Denver, CO',
    title: 'Emergency Wisdom Tooth Removal Denver, CO | Urgent Dental',
    metaDescription:
      'Wisdom tooth pain, swelling, or infection in Denver? Same-day relief and removal, open 8am–8pm every day. PPO & CareCredit. Call (720) 573-2629.',
    keyword: 'emergency wisdom tooth removal Denver',
    hubBlurb: 'Pain, swelling, or infection at the back of the jaw — relieved fast.',
    directAnswer:
      "Wisdom teeth often cause trouble when there isn't room for them — pain, swelling, and infection at the very back of the jaw. When one flares up, you need relief fast. We treat wisdom-tooth emergencies in Denver the same day, open 8am–8pm. Until you're seen, rinse with warm salt water, use a cold compress, and take an over-the-counter pain reliever as directed. If swelling is spreading or you have a fever, call right away — (720) 573-2629.",
    whatItIs: [
      "Wisdom teeth are the last molars to come in, usually in the late teens or twenties. When the jaw doesn't have space, they can come in at an angle or stay partly trapped under the gum (impacted), where they're hard to clean and prone to infection.",
      "A partly-erupted wisdom tooth can trap food and bacteria, leading to painful swelling of the gum flap over it (pericoronitis) or a deeper infection. That's when it becomes an emergency.",
    ],
    whenEmergency: [
      'Throbbing pain or pressure at the back of the jaw.',
      'Swelling of the gum, cheek, or jaw around a back molar.',
      'A bad taste, pus, or difficulty opening your mouth.',
      'Fever alongside back-of-mouth pain.',
    ],
    whatToDoNow: [
      { title: 'Rinse to clean the area', detail: 'Warm salt-water rinses several times a day help flush the flap of gum around a wisdom tooth and calm the tissue.' },
      { title: 'Ease pain and swelling', detail: 'A cold compress on the cheek and an over-the-counter pain reliever, taken as directed, help until you’re seen.' },
      { title: 'Watch for spreading infection', detail: 'Spreading swelling, fever, or trouble swallowing or breathing needs urgent care — call us right away, or the ER if severe.' },
      { title: 'Call us', detail: "Phone (720) 573-2629. We're open 8am–8pm every day and can get you out of pain quickly." },
    ],
    treatment: [
      "First, Dr. Boyd gets you comfortable — settling an active infection and relieving the pain. He'll take an X-ray to see how the wisdom tooth is positioned.",
      "Depending on what he finds, treatment may be cleaning and treating the infection, or removing the tooth. He'll explain whether it needs to come out, how, and what it costs before anything begins.",
    ],
    goodToKnow: [
      "Once any active infection is under control, we can often relieve the pain and remove a problem wisdom tooth the same day — we're open 8am–8pm every day. A swollen, sore flap of gum over a partly-erupted wisdom tooth (pericoronitis) is common; salt-water rinses help short-term, but it tends to return until the tooth is treated.",
      "Not every wisdom tooth needs to come out — ones that come in straight, healthy, and cleanable can be left alone. Dr. Boyd will give you a straight answer for yours, with upfront pricing.",
    ],
    faqs: [
      { q: 'Can you take out a painful wisdom tooth the same day?', a: 'Often, yes — especially once any active infection is under control. We’re open 8am–8pm every day and can frequently relieve the pain and remove the tooth same-day. Call (720) 573-2629.' },
      { q: 'My wisdom tooth gum is swollen and sore — what is that?', a: 'A partly-erupted wisdom tooth often traps food and bacteria under a flap of gum, which gets inflamed and painful (called pericoronitis). Warm salt-water rinses help short-term, but it tends to come back until the tooth is treated. Come in and we’ll sort it out.' },
      { q: 'Do all wisdom teeth need to come out?', a: 'No. Wisdom teeth that come in straight, healthy, and cleanable can be left alone. Removal is for the ones causing pain, infection, or crowding. Dr. Boyd will give you a straight answer for yours.' },
      { q: 'How much does wisdom tooth removal cost?', a: COST_ANSWER },
    ],
    related: ['tooth-extractions-denver-co', 'dental-abscess-infection-denver-co', 'toothache-and-dental-pain-denver-co'],
    consolidates: ['/wisdom-teeth/'],
  },

  // ── Dental abscess & infection (net-new; no old redirect in) ────────────
  {
    slug: 'dental-abscess-infection-denver-co',
    name: 'Dental Abscess & Infection',
    h1: 'Dental Abscess & Infection Treatment in Denver, CO',
    title: 'Dental Abscess Dentist in Denver, CO | Urgent Dental',
    metaDescription:
      'Painful swelling or a dental abscess in Denver? Get seen today — open 8am–8pm every day. Infections need prompt care. Call (720) 573-2629.',
    keyword: 'dental abscess dentist Denver',
    hubBlurb: 'Swelling, a gum bump, or a spreading infection — treated urgently.',
    directAnswer:
      "A dental abscess is a pocket of infection caused by bacteria — often from a deep cavity, a cracked tooth, or gum disease. It can cause severe pain, swelling, and a bad taste, and it won't clear up on its own. Dental infections need prompt care because they can spread. We see abscesses the same day, open 8am–8pm. If swelling reaches your eye or neck, or you have trouble breathing or swallowing, go to the ER now. Otherwise call (720) 573-2629 and come in today.",
    whatItIs: [
      "An abscess forms when bacteria reach the pulp inside a tooth or the tissue around it and the body walls off the infection with pus. You might notice throbbing pain, a pimple-like bump on the gum, a bad taste, swelling, or tenderness when biting.",
      "Because it's an active infection, an abscess needs treatment — not just pain relief. Draining the infection and treating its source is what actually resolves it.",
    ],
    whenEmergency: [
      'Facial or gum swelling, especially if it’s growing.',
      'Severe, throbbing pain and a bad taste in the mouth.',
      'Fever along with tooth pain.',
      'A pimple-like bump on the gum that may drain and refill.',
    ],
    whatToDoNow: [
      { title: 'Take it seriously', detail: 'A dental infection is not something to wait out. Book same-day care — it can worsen quickly.' },
      { title: 'Rinse and relieve', detail: 'Warm salt-water rinses can soothe the area, and an over-the-counter pain reliever helps. Do not try to pop or squeeze the swelling yourself.' },
      { title: 'Know the red flags', detail: 'Swelling spreading to your eye or neck, or any trouble breathing or swallowing, is a medical emergency — go to the ER or call 911 immediately.' },
      { title: 'Call us', detail: "Phone (720) 573-2629. We're open 8am–8pm every day and treat abscesses the same day." },
    ],
    treatment: [
      "Dr. Boyd first relieves the pressure and pain by draining the infection, and determines its source with an exam and X-ray. Antibiotics are sometimes part of care, but on their own they don't fix the underlying problem.",
      "Resolving the source usually means a root canal to save the tooth or, if it can't be saved, removing it. He'll explain which path fits your situation and what it costs before treatment.",
    ],
    goodToKnow: [
      "An abscess needs the source treated, not just masked — antibiotics alone usually calm it only temporarily, and a gum bump that drains and eases often means the infection is still active and can flare or spread. Come in so we can treat the cause; we're open 8am–8pm every day.",
      "Go to the ER first for spreading swelling near the eye or neck, or any trouble breathing or swallowing — those are medical emergencies. The ER can control a dangerous infection with pain relief and antibiotics, but it usually can't fix the tooth, so plan to see a dentist either way.",
    ],
    faqs: [
      { q: 'Will the ER treat a tooth abscess, or do I need a dentist?', a: 'The ER can help with severe swelling, pain control, and antibiotics if the infection is dangerous — and you should go there for spreading swelling near the eye or neck, or trouble breathing or swallowing. But the ER usually can’t fix the tooth itself. A dentist has to treat the source, so plan to see us either way. We’re open 8am–8pm every day.' },
      { q: 'Can antibiotics alone cure a dental abscess?', a: 'Usually not on their own. Antibiotics can calm an infection temporarily, but the abscess comes back until the source — the infected tooth or gum — is treated. That’s why prompt dental care matters.' },
      { q: 'The gum bump drained and the pain eased — am I fine now?', a: 'No. A draining abscess often feels better for a while but the infection is still active and can flare again or spread. Come in so we can treat the cause.' },
      { q: 'How much does abscess treatment cost?', a: COST_ANSWER },
    ],
    related: ['toothache-and-dental-pain-denver-co', 'root-canal-denver-co', 'tooth-extractions-denver-co'],
  },

  // ── Lost filling or crown (net-new; no old redirect in) ─────────────────
  {
    slug: 'lost-filling-or-crown-denver-co',
    name: 'Lost Filling or Crown',
    h1: 'Lost Filling or Crown Repair in Denver, CO',
    title: 'Lost Filling or Crown Dentist Denver, CO | Urgent Dental',
    metaDescription:
      'Lost a filling or crown in Denver? Same-day repair, open 8am–8pm every day. Keep the crown and call (720) 573-2629. PPO & CareCredit.',
    keyword: 'lost filling or crown dentist Denver',
    hubBlurb: 'A filling or crown came out — protected and replaced the same day.',
    directAnswer:
      "When a filling or crown falls out, it leaves the tooth underneath exposed and vulnerable — often sensitive and easy to damage further. It's worth getting seen soon, even if it doesn't hurt yet. We handle lost fillings and crowns the same day in Denver, open 8am–8pm. Keep the crown if you have it and bring it in — it can often be re-cemented. Avoid chewing on that side, and call (720) 573-2629.",
    whatItIs: [
      "Fillings and crowns can come loose from normal wear, decay forming underneath, biting something hard, or simply age. Once one is gone, the exposed tooth can be sensitive to hot, cold, and air, and the remaining structure is easier to chip.",
      "A crown that pops off cleanly can often be re-cemented if the tooth beneath is healthy. If decay caused it to fail, that has to be treated first.",
    ],
    whenEmergency: [
      'The exposed tooth is painful or very sensitive.',
      'There is a sharp edge or a large hole where the filling was.',
      'A crown came off and you want to protect the tooth underneath.',
      'You’re in pain when biting or eating on that side.',
    ],
    whatToDoNow: [
      { title: 'Keep the crown', detail: 'If a crown came off in one piece, keep it and bring it — it can often be cleaned and re-cemented. Never use household superglue to reattach it.' },
      { title: 'Protect the tooth', detail: 'Avoid chewing on that side and steer clear of very hot, cold, or sugary foods that trigger sensitivity.' },
      { title: 'Cover it temporarily', detail: 'A pharmacy temporary dental cement, or even a piece of sugarless gum pressed over the hole, can shield the tooth until you’re seen.' },
      { title: 'Call us', detail: "Phone (720) 573-2629. We're open 8am–8pm every day and can usually re-cement or replace it the same day." },
    ],
    treatment: [
      "Dr. Boyd checks the tooth and the restoration. If a crown came off cleanly and the tooth is healthy, he can often clean and re-cement it in one visit.",
      "If decay or damage caused the failure, he treats that first, then places a new filling or crown. He'll explain what your tooth needs and what it costs before beginning.",
    ],
    goodToKnow: [
      "A lost crown or filling isn't always painful, but the exposed tooth is vulnerable to sensitivity, decay, and chipping — and it can shift enough that the old crown no longer fits — so it's best to be seen soon. Keep the crown: if it came off in one piece and the tooth underneath is healthy, we can often clean and re-cement it, so bring it with you.",
      "Please don't use household glue — it's toxic and can damage the tooth and crown. A pharmacy temporary dental cement is an acceptable short-term fix, but come in so it's secured properly. Call (720) 573-2629.",
    ],
    faqs: [
      { q: 'My crown fell off but nothing hurts — is it urgent?', a: 'It’s not always painful, but the exposed tooth is vulnerable to sensitivity, decay, and chipping, and it can shift if left too long — which can stop the old crown from fitting. It’s best to be seen soon. Keep the crown and call (720) 573-2629.' },
      { q: 'Can my old crown be put back on?', a: 'Often, yes — if it came off in one piece and the tooth underneath is healthy, we can usually clean and re-cement it. Bring the crown with you so Dr. Boyd can check the fit.' },
      { q: 'Can I glue my crown back on myself?', a: 'Please don’t use household glue — it’s toxic and can damage the tooth and crown. A pharmacy temporary dental cement is fine as a short-term fix, but come in so it’s secured properly.' },
      { q: 'How much does it cost to replace a filling or crown?', a: COST_ANSWER },
    ],
    related: ['broken-or-chipped-tooth-denver-co', 'toothache-and-dental-pain-denver-co', 'root-canal-denver-co'],
  },
];

/** Lookup helper for related-service links + templates. */
export const SERVICE_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);
