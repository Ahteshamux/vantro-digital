/**
 * Single source of truth for all homepage copy.
 *
 * Values marked TODO are still open decisions from agency-master-brief.md §9.
 * Fill these in here — they are referenced nowhere else in the codebase.
 */

// Case study screenshots. Imported (not /public) so Vite hashes and optimizes
// them — see src/assets/README.md for why that's the default for photos.
import petNestShot from '../assets/images/casestudies/thepetnest case studies.png'
import dentalShot from '../assets/images/casestudies/getdentalleads case studies.png'
import safetySuppliesShot from '../assets/images/casestudies/cro for safety supplies.png'

// Brand name is locked: Vantro Digital.
export const BRAND = {
  name: 'Vantro Digital',
  tagline: 'Build, rank, grow and automate for small business operations',
}

// TODO: name the proprietary framework (brief §9) — used as the pricing trust anchor.
export const FRAMEWORK = 'The Retain System™'

/**
 * Conversion config. Everything the CTAs and form depend on.
 *
 * TODO — REQUIRED BEFORE LAUNCH:
 *   calendlyUrl   — every "Book a 20-Min Call" button points here.
 *                   While null, those buttons fall back to the form instead of
 *                   dead-linking, so no CTA is ever a no-op.
 *   formspreeId   — the form cannot send without it. While null, submitting
 *                   throws a visible console error rather than faking success.
 *   (upworkUrl is optional — the review screenshots carry the proof.)
 */
export const CONVERSION = {
  calendlyUrl: null, // TODO: e.g. 'https://calendly.com/vantrodigital/20min'
  formspreeId: null, // TODO: e.g. 'xyzabcde' from formspree.io
  upworkUrl: null, // optional — not required; screenshots carry the proof

  /**
   * Phone CTA in the navbar — the highest-intent path in the teardown (docs
   * 01/11), where a phone number is paired with a softer button on every page.
   *
   * The button renders ONLY when both values are set. No placeholder number
   * is ever shown: a fake tel: link dials a real stranger, and a number that
   * rings out unanswered is worse for trust than no number at all.
   *
   * TODO: only fill these in if you'll actually answer during stated hours.
   *   display — what the visitor reads, e.g. '(813) 669-5315'
   *   dial    — E.164 for the tel: link, e.g. '+18136695315'
   */
  phone: {
    display: null, // TODO
    dial: null, // TODO
  },

  // Outcome-specific CTA copy. Never "Submit" / "Learn More" / "Click Here".
  hardCta: 'Book a 20-Min Call',
  softCta: 'Get My Free Audit',
  workCta: 'See the Build',

  // Trust signal the docs call out as free and objection-killing.
  noLockIn: 'Project-based. No retainer required unless you want ongoing support.',
}

/** Lead form. One definition, reused everywhere — never rebuilt per section. */
export const FORM = {
  eyebrow: 'Two free audits',
  title: 'Pick the audit you need.',
  sub: 'Two free audits, no strings. Take one or both — you keep the findings either way, whether or not we end up working together.',

  /**
   * The two lead magnets. Naming them separately beats one vague "free audit":
   * it lets a visitor self-select, and it makes the offer concrete enough to
   * be worth an email address.
   */
  audits: [
    {
      name: 'Free SEO audit',
      desc: 'Where you rank now, what’s blocking you, and whether your Google Business Profile is costing you local calls.',
      points: ['Google Business Profile check', 'Technical & on-page issues', 'Local ranking gaps'],
    },
    {
      name: 'Free website design audit',
      desc: 'Where visitors drop off, what’s unclear, and which fixes would convert more of the traffic you already have.',
      points: ['Conversion path review', 'Mobile experience check', 'Form & booking friction'],
    },
  ],

  fields: {
    // Offer-selection first: the choice IS the value proposition.
    auditType: {
      label: 'Which audit do you want?',
      options: [
        { value: 'seo', label: 'SEO audit' },
        { value: 'design', label: 'Website design audit' },
        { value: 'both', label: 'Both' },
      ],
      default: 'both',
    },
    name: { label: 'Name', placeholder: 'Your name' },
    email: { label: 'Email', placeholder: 'you@company.com' },
    // Optional on purpose: the audit needs a URL, but a founder with no site
    // yet is a perfect Launch-tier lead — requiring it would turn them away.
    website: { label: 'Website', placeholder: 'yourbusiness.com', optional: true },
    message: {
      label: 'What do you need help with?',
      placeholder: 'A sentence or two is plenty — what’s not working right now?',
    },
  },
  submit: 'Send My Free Audit',
  submitting: 'Sending…',
  successTitle: 'Got it — check your inbox.',
  successBody: 'We’ll reply within 24 hours with your audit findings and a time to talk them through.',
  errorBody: 'Something went wrong sending that. Email us directly and we’ll pick it up.',

  // The docs' 4-beat. Removes the biggest source of form abandonment.
  whatNext: {
    title: 'What happens next',
    steps: [
      'We’ll reply within 24 hours',
      'We hop on a quick call to scope it',
      'You get a proposal with timeline and price',
      'No pressure, no lock-in',
    ],
  },

  // Objection handling at the point of highest hesitation.
  faqs: [
    {
      q: 'What if I only need one piece — just design, not automation?',
      a: 'That’s the Launch tier. Plenty of founders fix the front door first and add automation later.',
    },
    {
      q: 'Do you require a retainer, or is project-based fine?',
      a: 'Project-based. Ongoing automation management is optional and never required to keep your system running.',
    },
    {
      q: 'Do you work outside the industries listed?',
      a: 'Often, yes. The underlying problem — manual operations losing revenue — is the same almost everywhere. If it’s not a fit, we’ll tell you on the call.',
    },
  ],
}

/**
 * Navbar. Items with `children` render a dropdown.
 *
 * Scoped deliberately: the reference site this is modelled on carries 27
 * sub-pages, but it has hundreds of clients to fill them. Every page here maps
 * to a capability we can actually write a real page about — a stub behind a
 * nav link costs more trust than the link earns.
 */
export const NAV = [
  {
    label: 'Services',
    href: '/services',
    // Small-business services only, grouped by stage: Build → Rank → Grow →
    // Automate. "Complete system" leads, mirroring the reference's
    // "Complete Solutions" — the whole-thing option sits above the parts.
    children: [
      { label: 'Complete system', href: '/services/complete-system' },
      { label: 'Website design & build', href: '/services/website-design' },
      { label: 'Custom funnel build', href: '/services/custom-funnel' },
      { label: 'SEO cleanup', href: '/services/seo-cleanup' },
      { label: 'Google & Meta ads', href: '/services/google-meta-ads' },
      { label: 'Campaign landing pages', href: '/services/campaign-landing-pages' },
      { label: 'Landing page CRO', href: '/services/landing-page-cro' },
      { label: 'Lead capture & follow-up', href: '/services/lead-capture-automation' },
      { label: 'Reviews & reputation', href: '/services/reviews-reputation' },
      { label: 'Rebooking & win-back', href: '/services/rebooking-winback' },
    ],
  },
  {
    label: 'Packages',
    href: '/packages',
    children: [
      { label: 'Launch — design only', href: '/packages/launch' },
      { label: 'Grow — design + automate', href: '/packages/grow' },
      { label: 'Full system', href: '/packages/full-system' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Home services', href: '/industries/home-services' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Trucking & logistics', href: '/industries/trucking-logistics' },
      { label: 'Real estate', href: '/industries/real-estate' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Vantro Digital', href: '/about' },
      { label: 'How we work', href: '/how-we-work' },
      { label: 'Our work', href: '/work' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

/**
 * Per-page hero copy. Every page opens with the same block — eyebrow,
 * two-tone headline, one-sentence value statement — then a dual CTA,
 * matching the service-page template in the teardown (docs 04).
 */
export const PAGES = {
  howWeWork: {
    eyebrow: 'How we work',
    title: ['Diagnostic first.', 'Then design, build, automate.'],
    sub: 'Every engagement starts by finding where the money is actually leaking — not by assuming you need a redesign.',
  },
  packages: {
    eyebrow: 'Packages',
    title: ['Start where', 'the leak is.'],
    sub: 'Three tiers, each including everything in the one below it. Final scope comes out of the audit.',
  },
  work: {
    eyebrow: 'Work',
    title: ['The work,', 'in numbers.'],
    sub: 'Real builds with real outcomes — plus the adjacent work that shows the same approach in other verticals.',
  },
  about: {
    eyebrow: 'About',
    title: ['One operator.', 'One point of accountability.'],
    sub: 'Five years designing SaaS dashboards, mobile apps and landing pages — then building the automation layer most agencies skip.',
  },
  contact: {
    eyebrow: 'Contact',
    title: ['Let’s find what’s', 'leaking in your business.'],
    sub: 'A free audit of your site, funnel and follow-up. You keep the findings either way — no obligation, no retainer pitch.',
  },
}

export const HERO = {
  tag: 'Design + Automation Studio',

  /**
   * Names all four stages the page then proves out below (StageDesign,
   * StageRank, StageGrow, StageRetain). The previous headline said only
   * "design & automation", which under-sold two of the four — a visitor
   * scrolling into the Rank and Grow stages met services the hero never
   * promised.
   *
   * Keeps the revenue bracket on line two (docs 01/13/15): a deliberate
   * filter, so a $50K business self-selects out and a $800K founder feels
   * it was written for them. Bracket matches ICP in the brief (§3).
   *
   * No pronoun on purpose — the hero sub and the section copy disagree on
   * "I" vs "we", and a headline verb dodges that until the voice is settled.
   */
  headline: ['Build. Rank. Grow. Automate.', 'The whole system behind a $300K–$1.5M business.'],

  // Role-division formula (docs 10, formula 2), now walking the four stages
  // in order so the hero and the page body tell the same story.
  sub: 'You run the business. We design and build the site, get it found on Google and Meta, turn that traffic into booked jobs, and automate the follow-up — so nothing falls through the cracks.',
  ctaPrimary: 'Get a free audit',
  ctaSecondary: 'See our work',
  caption: 'Full system delivered in 30 days. One point of accountability.',

  /**
   * Promise bar. These are deliberately things WE control — delivery speed,
   * the audit, accountability — not outcome claims like "grow 40% in 90 days".
   * We have no measured results in these verticals yet, so an outcome promise
   * would be unbackable if a client held us to it.
   *
   * TODO (once a founding client produces real numbers): swap one of these for
   * a measured outcome promise, e.g. "X% more booked jobs in 90 days".
   * TODO (business decision): if you want to commit to the stronger guarantee,
   * change the first detail to "or we keep working at no extra cost until it is".
   */
  promises: [
    { label: 'Live in 30 days', detail: 'Audit to launched system' },
    { label: 'Two free audits', detail: 'SEO and design — findings are yours' },
    { label: 'One point of contact', detail: 'No account managers' },
  ],
}

// Honest: these are the tools we actually build on. Not client logos.
export const TOOLS = [
  'Figma',
  'n8n',
  'GoHighLevel',
  'Claude',
  'Zapier',
  'Twilio',
]

/**
 * Section 2 — solid full-bleed offer statement.
 *
 * This states WHAT WE DO, plainly (brief §4 core offer). It deliberately does
 * NOT frame the problem — ProblemBand directly below owns that beat, and
 * running both reads as saying the same thing twice.
 *
 * The ticker shows breadth: every concrete deliverable across the four
 * stages, which is what makes the "360° coverage" claim tangible.
 */
export const STATEMENT = {
  headline: ['We build, rank, grow and automate', 'the systems that run your business.'],
  sub: 'So you get found, the traffic converts, every lead gets answered, and customers come back. One operator, one connected system, delivered in 30 days.',
  // Ordered by stage — Build, Rank, Grow, Automate — so the ticker reads as
  // the same four-stage story the sections below tell, not a random list.
  marquee: [
    'Website & app design',
    'Design to live build',
    'Booking flows',
    'SEO cleanup',
    'Google Ads',
    'Meta Ads',
    'Landing page CRO',
    'Offer & message match',
    'Lead capture',
    'Instant SMS + email follow-up',
    'Booking & routing',
    'Rebooking reminders',
    'Review requests',
    'Win-back flows',
  ],
  cue: 'See how the system works',
}

/**
 * Us-vs-them comparison.
 *
 * The left column is framed as "the typical agency" — a description of a
 * common industry pattern, not an accusation against any named competitor.
 * Every right-column row is a structural fact about how we operate (from
 * brief §2 and §4), not a claim about results we haven't produced.
 */
export const COMPARISON = {
  tag: 'Comparison',
  headline: ['But why would you', 'work with us?'],
  sub: 'Most founders have already bought a redesign that didn’t change the business. Here’s what’s structurally different here.',
  them: {
    title: 'The typical agency',
    items: [
      'Hands you a pretty site, then walks away',
      'Design and automation sold as separate projects',
      'Account managers between you and the work',
      'Opens with a redesign pitch, not a diagnosis',
      'Retainer required to keep anything running',
    ],
  },
  us: {
    title: 'Vantro Digital',
    items: [
      'Design and automation shipped as one system',
      'One operator accountable, start to finish',
      'You talk to the person doing the work',
      'Audit first — we name the leak before we quote',
      'No retainer required, ever',
    ],
  },
  footLine: 'Not sure which side your current setup sits on?',
  footCta: 'Get a free audit',
}

export const PROBLEM = {
  tag: 'The real problem',
  headline: 'A new website didn’t fix the business.',
  /**
   * The promise. Note what these are and are not:
   * they describe how the SYSTEM behaves — which is true by construction and
   * verifiable on day one — not past results we don't have yet.
   *
   * Do NOT change these to past-performance claims ("we grew a client 40% in
   * 90 days") until a real client produces those numbers. That's the one thing
   * on this page a prospect could catch us out on.
   */
  promiseLead: 'Here’s what changes in 30 days.',
  body: 'Most founders buy a redesign and expect the business to change with it. It doesn’t. The site looks better, but leads still sit unanswered for hours, past customers still drift away after one visit, and the follow-up still depends on someone remembering to do it.',
  emphasis: 'The revenue isn’t lost loudly. It leaks quietly — one unanswered lead, one customer who never rebooked, at a time.',

  without: [
    'Leads wait hours for a reply',
    'Customers drift after one visit',
    'Follow-up depends on memory',
    'You are the bottleneck',
  ],
  withSystem: [
    { label: 'Every lead answered in under 60 seconds', detail: 'Automatically, day or night' },
    { label: 'Every customer nudged before they drift', detail: 'Rebooking runs on its own' },
    { label: 'Nothing depends on remembering', detail: 'The system does it, every time' },
    { label: 'Live in 30 days', detail: 'Audit to launched, one operator' },
  ],
}

/**
 * REAL Upwork reviews, shown as platform screenshots.
 *
 * Screenshots beat re-typed quotes here: anyone can type a testimonial, but a
 * visibly-from-Upwork screenshot is checkable. These are genuine reviews of
 * real completed contracts.
 *
 * Files live in /public/reviews/ (NOT src/assets) deliberately — public files
 * are referenced by URL, so a missing file degrades to a hidden card instead
 * of failing the build. Any image that 404s removes itself; if none load, the
 * whole section disappears.
 *
 * `quote` is not decoration: a screenshot is invisible to screen readers and
 * to search engines, so the text is carried in alt text and in the caption.
 *
 * TODO: save the three PNGs at the exact `src` paths below.
 * BEFORE SAVING — crop out the rate/earnings rows (see the note in REVIEWS
 * .cropWarning). Publishing an hourly rate under a $2,500+ package page
 * anchors the buyer to the wrong number.
 */
export const REVIEWS = {
  tag: 'Client reviews',
  title: 'Verified on Upwork.',
  subtitle:
    'Real reviews from completed contracts — screenshots straight from the platform, not re-typed.',
  cropWarning:
    'Crop out hourly-rate and total-earned rows before saving. See notes in site.js.',
  items: [
    {
      src: '/reviews/review-professional.png',
      project: 'Figma Design — Sport Clubs',
      rating: '5.0',
      quote:
        'Ahtesham is very quick and professional. His communication is great and he always makes time for a meeting to go through the plan. He comes up with good points for improvements. Will recommend him to everyone! And we will definitely hire him for longterm.',
    },
    {
      src: '/reviews/review-collaboration.png',
      project: 'UI/UX design',
      rating: '5.0',
      quote:
        'He has amazing collaboration skills! He made dope UI/UX and it converted well! Highly recommends if you look for effective and swift work!',
    },
    {
      src: '/reviews/review-gifted-designer.png',
      project: 'UI/UX Designer for Cash Back Job Searching Site',
      rating: '5.0',
      quote:
        'Ahtesham is a gifted designer, and he worked with me extensively over the past year. He was able to consistently see simple, beautiful UI/UX patterns to make our job searching site better.',
    },
  ],
}

/**
 * Instant Response System — standalone spotlight after the four stages.
 *
 * Broken out of the Grow stage because for the ICP (home services, clinics)
 * a missed call IS the revenue leak — it's the most tangible thing on the
 * page, and it was previously buried in a bullet.
 *
 * Note the framing: no conversion-rate claims, because we have none measured.
 * Every line describes what the system DOES, which is true on day one.
 */
export const INSTANT_RESPONSE = {
  tag: 'Instant Response System',
  headline: 'Never miss another lead — even at 9pm.',
  body: 'For appointment-based businesses, the biggest revenue leak isn’t marketing spend — it’s the calls that ring out and the enquiries that sit until morning. Someone who can’t reach you doesn’t wait. They call the next name on the list, and you never find out they tried.',
  emphasis: 'Every call answered. Every message replied to. Every booking taken — whether you’re on a job, asleep, or it’s a Sunday.',
  checklist: [
    {
      label: 'AI call assistant answers every call',
      detail: 'Picks up when you can’t, qualifies the caller, never sends anyone to voicemail',
    },
    {
      label: 'AI chatbot handles site and social',
      detail: 'Answers FAQs and qualifies leads on your website, Instagram and Facebook DMs',
    },
    {
      label: 'Both book straight into your calendar',
      detail: 'No callback needed — the slot is confirmed while they’re still interested',
    },
    {
      label: 'Instant SMS and email confirmation',
      detail: 'They get proof it’s booked, you get the details, nothing depends on memory',
    },
  ],
}

export const STAGES_INTRO = {
  // Bridging line — reads as a spoken transition out of the comparison above,
  // turning four feature blocks into proof of the claim we just made.
  bridge: 'Here’s what that actually looks like in practice.',
  tag: 'The system',
  title: 'Build. Rank. Grow. Automate.',
  subtitle:
    'Four stages, one connected system. Design, traffic, conversion and follow-up aren’t separate purchases here — each stage builds on the one before it, so there’s no point where the work gets handed off and the thread drops.',
}

/**
 * Bento stats grid.
 *
 * Deliberately does NOT repeat HERO.promises ("30 days", "one point of
 * contact") — this sits directly beneath them, so duplicate numbers read as
 * padding. Every figure here is backed by an answer in FAQS or the founder
 * story — none are claims about client results we haven't produced yet.
 */
export const STATS = {
  tag: 'About us',
  headline:
    'We build, rank, grow and automate the systems that run your business — so you get found, the traffic converts, and no lead or customer slips away.',
  // Was "About us" → #about, but the founder section has been removed.
  // Repointed at the work section so the button still lands somewhere real.
  cta: 'See the work',
  ctaHref: '#proof',

  /**
   * Proof strip on the solo-operator metric set the docs prescribe (02/12):
   * projects delivered · years active · tools mastered · avg turnaround.
   * These are all available on day one without client volume.
   */
  projectsDelivered: 50,

  cards: [
    { target: 50, suffix: '+', label: 'Projects delivered end to end' },
    { target: 5, suffix: '+', label: 'Years of hands-on UI/UX experience', badge: 'Since 2021' },
    { target: 30, suffix: '', label: 'Days from audit to live system' },
  ],

  /**
   * Trust widget.
   *
   * TODO — REQUIRED BEFORE LAUNCH: set `rating` and `count` from your real
   * Upwork profile. While they're null the widget shows a muted prompt instead
   * of a number, so it can't ship with an invented score.
   *
   * Note there is deliberately no "trusted by N brands" claim here — the
   * reference had one, but we have no client count to stand behind. The rating
   * line is the only social proof we can actually evidence today.
   */
  trust: {
    rating: null, // TODO: e.g. 5.0
    outOf: '5.0',
    count: null, // TODO: e.g. 12
    source: 'Upwork',
    fallback: 'Add your Upwork rating',
  },
}

export const PROCESS = {
  bridge: 'That system runs through one clear process.',
  tag: 'How we work',
  // Two-tone headline: first line ink, second line muted.
  title: ['Diagnostic first.', 'Always.'],
  subtitle:
    'We don’t open with “let’s redesign your site.” We start by finding where the money is actually leaking, then fix that specific thing.',
  steps: [
    {
      icon: 'search',
      tone: 'bg-[#E7EDFA]',
      days: 'Days 1–3',
      title: 'Audit',
      desc: 'Map your current site, funnel and manual processes. Identify where leads and customers are actually being lost — measured, not assumed.',
      chips: ['Days 1–3', 'Funnel map', 'Leak report'],
    },
    {
      icon: 'pen',
      tone: 'bg-[#EEF3D6]',
      days: 'Days 4–14',
      title: 'Design',
      desc: 'Build the front-end fix based on what the audit found, not a generic template. Figma-based and conversion-focused.',
      chips: ['Days 4–14', 'Figma', 'Responsive build'],
    },
    {
      icon: 'nodes',
      tone: 'bg-[#FAF0DA]',
      days: 'Days 15–25',
      title: 'Build & automate',
      desc: 'Wire up the Grow and Retain layers — capture, instant follow-up, routing, rebooking and win-back flows.',
      chips: ['Days 15–25', 'Automations', 'Tested live'],
    },
    {
      icon: 'launch',
      tone: 'bg-[#F3E9F7]',
      days: 'Days 25–30',
      title: 'Launch & support',
      desc: 'Go live, test end to end, hand off with documentation, and monitor early performance together.',
      chips: ['Days 25–30', 'Handover docs', '30-day support'],
    },
  ],
}

/**
 * FEATURED CASE STUDIES — tier 1 of the two-tier portfolio (docs 05 + 09).
 *
 * Format, per the teardown:
 *   client name → BIG before→after result → timeframe → 2 supporting stats
 *   → link to the full study. Numbers before narrative, always.
 *
 * The reference's numbers ($1.8M→$3.8M, 22X ROI, $91K spend) are that
 * agency's real client results — ours must be our own. Operational metrics
 * are perfectly valid here and are what you'll actually have:
 *   before/after : "3 missed calls a day" → "0"
 *   timeframe    : "In 30 days"
 *   stats        : "12 days to live", "40% fewer manual hours"
 *
 * RENDERING RULE: an entry only renders once `client` AND both `before` and
 * `after` are set. Half-filled entries are skipped entirely rather than
 * showing a card full of dashes. Add slots below as you complete them.
 *
 * Two studies live: ThePetNest (revenue) and GetDentalLeads (lead volume).
 * Both numbers are client-reported — keep whatever evidence backs them
 * (dashboard export, screenshot, the client's own sign-off) somewhere you can
 * produce on request. A prospect who asks and gets nothing loses the whole
 * page's credibility, not just the one card.
 *
 * TODO: add slots 3 and 4 as they complete.
 */
export const CASE_STUDIES = {
  tag: 'Case studies',
  title: 'The work, in numbers.',
  subtitle: 'Each of these started with an audit that named one specific leak — then fixed it.',
  readCta: 'Read case study',
  items: [
    {
      client: 'ThePetNest',
      industry: 'At-home pet care marketplace',
      before: '$10K/mo',
      after: '$73K/mo',
      timeframe: 'Monthly recurring revenue',
      summary:
        'A multi-service booking funnel — grooming, boarding, dog walking, training, vet-on-call — with city and date capture on the landing page, so a visitor books in one screen instead of three.',
      stats: [
        { value: '7.3×', label: 'Revenue growth' },
        { value: '6', label: 'Services in one funnel' },
      ],
      image: petNestShot,
      // Internal full case study. The live client URL lives on that page.
      href: '/work/thepetnest',
      grad: 'from-[#F0A868] to-[#D2691E]',
    },
    {
      client: 'GetDentalLeads',
      industry: 'Dental patient acquisition',
      before: '0 leads',
      after: '90+ leads',
      timeframe: 'In the first month',
      summary:
        'A conversion-first front door for a dental lead-gen system — Google Ads and SEO landing pages built per treatment type, so search traffic lands on a page matched to what it searched for instead of a generic homepage.',
      stats: [
        { value: '3', label: 'Treatment verticals targeted' },
        { value: null, label: 'Cost per lead' }, // TODO: fill if you have it
      ],
      image: dentalShot,
      href: '/work/getdentalleads',
      grad: 'from-[#8FD98F] to-[#2E7D32]',
    },
    {
      /**
       * Safety Supplies USA — the CRO study.
       *
       * `before`/`after` are QUALITATIVE on purpose, and they are the client's
       * own account of the problem ("burning ad spend, page didn't convert"),
       * not a measurement. No conversion percentage is stated anywhere here
       * because none was supplied — and a conversion rate attributed to a
       * named, identifiable company is a performance claim you'd have to
       * evidence the first time a prospect asks on a call.
       *
       * TODO — the upgrade that makes this card as strong as the two above:
       * pull the real product-page conversion rate from the client's Shopify
       * or GA4 (same metric, before window vs. after window), put those two
       * figures in `before`/`after`, and move this qualitative pair into the
       * summary. Keep the analytics export somewhere you can produce.
       */
      client: 'Safety Supplies USA',
      industry: 'Industrial safety e-commerce',
      before: 'Burning ad spend', // TODO: replace with real pre-rebuild conversion rate
      after: 'A page that sells', // TODO: replace with real post-rebuild rate, same metric
      timeframe: 'Google Ads traffic → product page rebuild',
      summary:
        'Google Ads spend was landing on a product page that made buyers stop and think. We rebuilt it around how this customer actually buys — pack sizes priced per unit, same-day shipping and MUTCD compliance stated up front, and a bulk-quote path for orders too big for a cart.',
      stats: [
        { value: '4', label: 'Pack tiers with per-unit pricing' },
        { value: null, label: 'Conversion rate change' }, // TODO: the real number
      ],
      image: safetySuppliesShot,
      href: '/work/safety-supplies-usa',
      grad: 'from-[#F5A623] to-[#C4741A]',
    },
    // TODO: slot 4
  ],
}

export const PROOF = {
  tag: 'Proof',
  title: 'Where the work stands today.',
  subtitle:
    'Two builds with real numbers are above. Here’s the rest of the work, labeled honestly, and an offer for the first client in a vertical we haven’t shipped in yet.',
  /**
   * Work entries, per docs 05 + 09:
   *   - numbered (01, 02) — signals a curated list, not a filler grid
   *   - `title` IS the result, never a vague label
   *   - 3 stats ABOVE the narrative (numbers before narrative, docs 10 §3)
   *   - service tags reinforce full range across a thin portfolio
   *   - every entry carries a checkable external link
   *
   * TODO — fill each stat `value`. While a value is null the stat renders a
   * muted dash, so the layout is intact but nothing is invented. Operational
   * metrics are fine and expected here — "Live in 12 days", "40% fewer manual
   * hours", "Zero missed leads" — revenue figures are not required.
   *
   * TODO — add `href` for each entry. The docs call the checkable external
   * link the single strongest signal on this section; while null the card
   * renders without a link rather than pointing at "#".
   */
  items: [
    {
      kind: 'Adjacent work',
      client: 'Early-stage startups',
      location: 'Upwork client work',
      title: 'Landing pages and mobile app UI shipped on fixed timelines',
      desc: 'Landing page and mobile app design for early-stage founders, delivered to a fixed deadline with direct founder collaboration.',
      stats: [
        { value: null, label: 'Projects delivered' }, // TODO
        { value: null, label: 'Avg turnaround' }, // TODO
        { value: null, label: 'Upwork rating' }, // TODO
      ],
      tags: ['Design', 'UI/UX', 'Mobile'],
      href: null, // TODO
      grad: 'from-[#A7C08F] to-[#5E7A48]',
    },
  ],
  upwork: {
    // TODO: confirm exact rating and review count before publishing.
    rating: null,
    reviews: null,
    label: 'Upwork rating',
    fallback: 'Rating & review count — to confirm',
  },
  /**
   * Direct scarcity statement instead of a filler third card.
   * Capacity is genuinely constrained — one operator, 30-day builds.
   *
   * TODO: set `slots` to the number you'll actually honour this month.
   * Don't leave a number here you wouldn't turn work away to protect.
   */
  scarcity: {
    slots: 2,
    line: 'Currently taking 2 new clients this month.',
    detail: 'One operator, 30-day builds — capacity is the constraint, not demand. Founding clients get a reduced rate in exchange for case study rights.',
    cta: 'Check availability',
  },
}

export const INDUSTRIES = {
  tag: 'Who we serve',
  title: 'Built for founders who still run the business.',
  subtitle:
    'The underlying problem — manual operations quietly losing revenue — looks identical across these industries. Same system, re-skinned for how your business actually works.',
  cards: [
    {
      name: 'Home services',
      desc: 'HVAC, plumbing, landscaping, roofing. Speed-to-lead is everything when the customer is calling three companies.',
      color: '#8FA31E',
      glyph: '◆',
    },
    {
      name: 'Healthcare',
      desc: 'Dental, medspa, wellness clinics. Patients drift after 90 days without an automated rebooking nudge.',
      color: '#5B8DEF',
      glyph: '●',
    },
    {
      name: 'Trucking & logistics',
      desc: 'Quote requests, dispatch and driver comms that currently live in someone’s inbox and phone.',
      color: '#E0B341',
      glyph: '▲',
    },
    {
      name: 'Real estate',
      desc: 'Inquiry routing, instant response and long-cycle nurture for leads that won’t buy for months.',
      color: '#C98BDB',
      glyph: '■',
    },
  ],
}

export const PACKAGES = {
  bridge: 'Every tier runs the same 4-stage system — just at a different depth.',
  tag: 'Packages',
  title: 'Start where the leak is.',
  subtitle:
    'Each tier includes everything in the one before it. Final scope and price come out of the audit — these are starting points, not a checkout page.',
  tiers: [
    {
      name: 'Launch',
      summary: 'Build only',
      forWho: 'For founders who need the front door fixed first.',
      // TODO: validate pricing against 2–3 real conversations (brief §5) before hardening.
      from: '$2,500',
      features: [
        'Website or booking flow designed and built (Figma → live)',
        'Conversion-focused layout & copy structure',
        'Mobile-responsive build',
        'Google Business Profile setup & optimisation — included',
      ],
      inherits: null,
      cta: 'Get a free audit',
      featured: false,
    },
    {
      name: 'Grow',
      summary: 'Design + automate',
      forWho: 'For founders losing leads before anyone replies.',
      from: '$5,500',
      features: [
        'AI chatbot on your website and social DMs',
        'Lead capture with instant SMS + email follow-up',
        'Booking and routing automation',
        'Google Ads / Local Services Ads — optional add-on',
      ],
      inherits: 'Launch',
      cta: 'Get a free audit',
      featured: true,
      note: 'Optional $300–$500/mo maintenance',
    },
    {
      name: 'Full system',
      summary: 'Build + rank + grow + automate',
      forWho: 'For founders who want the whole thing running itself.',
      from: '$9,000',
      features: [
        'AI call assistant — every missed call answered, qualified and booked',
        `Full retention automation: rebooking, reviews, win-back (${FRAMEWORK})`,
        'SEO as an ongoing programme, not a one-time pass',
        'Landing page CRO pass',
        '30-day launch support',
      ],
      inherits: 'Grow',
      cta: 'Get a free audit',
      featured: false,
      note: 'Optional $500–$1,500/mo automation management',
    },
  ],
  footnote:
    'Every tier is built on ' + FRAMEWORK + ' — our retention layer, and the stage most agencies skip entirely.',
}

export const FOUNDER = {
  tag: 'About',
  title: 'One operator. One point of accountability.',
  body: [
    'I spent five years designing SaaS dashboards, mobile apps and landing pages, and kept running into the same thing: a client would get a beautiful new site, and nothing else about the business changed. Leads still went unanswered for hours. Past customers still fell off after one visit. The design looked better. The business didn’t run better.',
    'Vantro Digital exists to close that gap. Design and automation aren’t sold separately here, because separately is exactly why they don’t work. You get one person accountable for how it looks, how it works, and how it keeps working after launch — not an account manager relaying messages to a team you never meet.',
  ],
  role: 'Founder & lead designer',
  // TODO: swap in a real photo — this is the closing trust argument before the
  // ask, and an initials circle is measurably weaker than a face here.
  initials: 'A',
  stackLabel: 'The stack behind the work',
  // Concrete credibility markers, not vague founder language.
  markers: [
    { value: '5+', label: 'Years designing' },
    { value: '3', label: 'Disciplines: UI, UX, automation' },
    { value: '1', label: 'Person you deal with' },
  ],
}

export const FAQS = [
  {
    q: 'What do I actually get in the free audits?',
    a: 'Two, and you can take either or both. The SEO audit covers where you rank now, what’s technically blocking you, and whether your Google Business Profile is costing you local calls. The website design audit covers where visitors drop off, what’s unclear, and which fixes would convert more of the traffic you already pay for. Both are written up and sent within 24 hours, and you keep the findings whether or not we work together — there’s no version where you fill in the form and get a sales call instead of an audit.',
  },
  {
    q: 'What actually happens after I book the audit?',
    a: 'We map your site, funnel and manual processes over 1–3 days, then walk you through exactly where leads and customers are being lost — with the specific leak named. If we’re a fit, that audit becomes the scope. If we’re not, you keep the findings.',
  },
  {
    q: 'Can I just get the design and skip the automation?',
    a: 'Yes — that’s the Launch tier. Plenty of founders start there, fix the front door first, and add the automation layers once they can see what’s converting.',
  },
  {
    q: 'Do you handle Google Ads and SEO, or just design and automation?',
    a: 'All of it, but they’re priced differently on purpose. Your Google Business Profile is set up and optimised as standard on every tier — it’s the fastest way local customers find you and it costs nothing to include. Google Ads and Local Services Ads are an optional add-on when you need lead flow immediately. SEO is also optional, and we treat it as an ongoing programme rather than a one-time pass, because it compounds over months and anyone promising rankings in 30 days is selling you something. The audit tells us which of the three you actually need — plenty of businesses need the profile fixed and nothing else.',
  },
  {
    q: 'Do you work with my industry?',
    a: 'We work across home services, healthcare, trucking and logistics, and real estate. The underlying problem is the same everywhere — manual operations losing revenue quietly — so the system stays the same and gets re-skinned for how your business runs.',
  },
  {
    q: 'How does pricing work?',
    a: 'Three tiers, each including everything in the one below it, starting at $2,500 / $5,500 / $9,000. Final scope and price come out of the audit, because quoting before we know where the leak is would just be guessing.',
  },
  {
    q: 'Is 30 days realistic?',
    a: 'It is for the scope we take on: audit in days 1–3, design through day 14, automation build through day 25, launch and support by day 30. It works because scope is set by the audit up front and there’s no approval chain on our side.',
  },
  {
    q: 'What do you need from me?',
    a: 'Access to your current site and tools, about two hours total across the 30 days for review calls, and fast answers when we ask a question. That’s genuinely it — we handle build, copy structure, and wiring.',
  },
  {
    q: 'I already use GoHighLevel / Zapier / a CRM. Does this replace it?',
    a: 'No. We build on the tools you already pay for wherever possible, and only add something new when there’s a gap. Migrating you off a working system for no reason isn’t a service.',
  },
  {
    q: 'What happens after launch?',
    a: 'You get 30 days of launch support included on the Full System tier, plus documentation of how everything is wired. After that, ongoing automation management is an optional retainer — not a requirement to keep your system running.',
  },
]

export const FINAL_CTA = {
  title: ['Let’s find what’s quietly', 'leaking in your business.'],
  sub: 'A free audit of your site, funnel and follow-up. You get the findings either way — no obligation, no retainer pitch.',
  cta: 'Get a free audit',
}

export const FOOTER = {
  blurb: 'Design and automation for founders who want the business to run itself.',
  // Tool stack demoted from a full section to a single footer mention.
  toolsLine: 'Built with Figma, n8n, GoHighLevel, Zapier, Twilio and Claude.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Design', to: '/how-we-work' },
        { label: 'Rank', to: '/how-we-work' },
        { label: 'Grow', to: '/how-we-work' },
        { label: 'Retain', to: '/how-we-work' },
      ],
    },
    {
      title: 'How we work',
      links: [
        { label: 'The 4 stages', to: '/how-we-work' },
        { label: '30-day timeline', to: '/how-we-work' },
        { label: 'Packages', to: '/packages' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Work', to: '/work' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Get started',
      links: [
        { label: 'Free audit', to: '/contact' },
        { label: 'Book a call', to: '/contact' },
      ],
    },
  ],
}
