/**
 * Sub-page content.
 *
 * Every entry drives one route through a single shared template, so adding a
 * page is a data edit — not a new component. Shape follows the service-page
 * template in the teardown (docs 04):
 *
 *   eyebrow → H1 (name + outcome) → one-sentence value statement
 *   → "why this matters" (education BEFORE the pitch) → what's included
 *   → deliverables → CTA
 *
 * The `why` field is the highest-leverage block in the template: it explains
 * the CATEGORY before selling the service, which the docs flag as the single
 * best copy pattern on the reference site.
 *
 * SCOPE: small-business services only. SaaS dashboard and mobile app design
 * were removed — our clients are home services, clinics, trucking and real
 * estate operators, not product teams. Every service below maps to one of the
 * four stages: Build → Rank → Grow → Automate.
 */

export const SERVICES = {
  'complete-system': {
    eyebrow: 'Service',
    title: ['The complete system', 'All four stages, one operator.'],
    sub: 'Build, rank, grow and automate — the whole path from first click to repeat customer, delivered as one connected system.',
    why: 'Most businesses buy these four things from four different vendors, then discover nobody owns the handoffs. The web designer blames the ads guy, the ads guy blames the landing page, and the follow-up nobody was hired to build simply never happens. Buying it as one system means the seams are somebody’s job.',
    included: [
      'Website or booking flow designed and shipped live',
      'SEO cleanup plus Google and Meta ads where they make sense',
      'Landing page CRO so the traffic actually converts',
      'Lead capture, instant follow-up, rebooking and win-back automation',
    ],
    deliverables: ['Live site', 'Running campaigns', 'Live automations', 'Handover docs'],
    stage: 'All four',
  },

  'website-design': {
    eyebrow: 'Service',
    title: ['Website design & build', 'The front door people judge you on.'],
    sub: 'Designed in Figma, built responsive, shipped live — by the same person, so nothing gets lost in a handoff.',
    why: 'A small business site has about five seconds to look like a real company. But looking credible is only half the job — the site also has to make the next step obvious. Most sites fail not because they’re ugly, but because a visitor who wants to book can’t find how.',
    included: [
      'Figma design you review before anything gets built',
      'Copy structure — headline, proof, objection handling, one clear action',
      'Responsive build tested on real phones',
      'Booking or enquiry flow wired to where you’ll actually see it',
    ],
    deliverables: ['Figma file', 'Live responsive site', 'Connected enquiry form'],
    stage: 'Build',
  },

  'custom-funnel': {
    eyebrow: 'Service',
    title: ['Custom funnel build', 'A path built for how people actually buy.'],
    sub: 'Multi-step booking and enquiry funnels — service picker, location, date, payment — designed so a visitor finishes in one sitting.',
    why: 'A generic contact form treats every visitor identically, which forces them to work out what to ask for. A funnel does the opposite: it asks one small question at a time, and each answer narrows what comes next. For businesses selling several services across several areas, that difference is usually the whole conversion gap.',
    included: [
      'Mapped decision path — what to ask, in what order, and what to defer',
      'Service, location and date capture built into the flow, not bolted after',
      'Progressive steps so nobody faces one intimidating form',
      'Drop-off tracking at every step, so you can see where people quit',
    ],
    deliverables: ['Live funnel', 'Step-by-step drop-off tracking', 'Handover docs'],
    stage: 'Build',
  },

  'campaign-landing-pages': {
    eyebrow: 'Service',
    title: ['Campaign landing pages', 'One page per offer, not one page for everything.'],
    sub: 'A dedicated page for each campaign, season or promotion — so the ad’s promise is the first thing the visitor reads.',
    why: 'Sending every campaign to your homepage is the most common way to waste ad spend. Someone who clicked “emergency drain repair, today” lands on a page about your company history and has to hunt for the thing they were promised. A page per campaign removes that gap entirely — and lets you compare offers honestly, because each one has its own numbers.',
    included: [
      'A page per campaign, offer or season — built from a shared template',
      'Message match: the ad’s headline is the page’s headline',
      'Independent tracking, so each offer is judged on its own performance',
      'Fast to spin up — new campaigns don’t need a new project',
    ],
    deliverables: ['Reusable page template', 'Live campaign pages', 'Per-campaign tracking'],
    stage: 'Grow',
  },

  'seo-cleanup': {
    eyebrow: 'Service',
    title: ['SEO cleanup', 'So the work can actually be found.'],
    sub: 'A focused technical and on-page pass — structure, speed, local relevance. Not a monthly retainer.',
    why: 'Most small business sites aren’t held back by content volume. They’re held back by basics: pages search engines can’t parse, slow mobile loads, missing local signals, and titles that describe the business instead of what people actually type into Google.',
    included: [
      'Site structure and internal linking review',
      'Page speed pass, mobile first',
      'Titles, meta and headings mapped to real local search terms',
      'Google Business Profile and local listing consistency',
    ],
    deliverables: ['Fix list', 'Implemented changes', 'Before/after report'],
    stage: 'Rank',
  },

  'google-meta-ads': {
    eyebrow: 'Service',
    title: ['Google & Meta ads', 'Leads this week, not next quarter.'],
    sub: 'Search campaigns for people already looking, and social campaigns to create demand where they spend their time.',
    why: 'SEO compounds but takes months. Ads work on day one but stop the moment you stop paying. Most small businesses need both — weighted toward paid early, shifting toward organic as it starts to carry. Running only one is usually why growth stalls.',
    included: [
      'Google Search campaigns targeting active intent',
      'Meta campaigns for demand generation and retargeting',
      'Conversion tracking so spend is judged on booked jobs, not clicks',
      'Ongoing negative keyword and audience cleanup',
    ],
    deliverables: ['Live campaigns', 'Tracking setup', 'Monthly performance view'],
    stage: 'Rank',
  },

  'landing-page-cro': {
    eyebrow: 'Service',
    title: ['Landing page CRO', 'Stop paying for clicks that go nowhere.'],
    sub: 'Already have pages and traffic? This is the optimisation pass — auditing and rebuilding what exists so more of the spend converts.',
    why: 'When ads run but nobody books, the instinct is to raise the budget. That usually just buys more of the same leak. If half your spend never reaches the offer, doubling traffic doubles the waste — fixing the page is almost always the cheaper move.',
    included: [
      'Full audit of the click-to-booking path',
      'Message match — what the ad promised is what the page opens with',
      'Form and checkout friction removed or deferred',
      'A/B testing on the changes that matter',
    ],
    deliverables: ['Rebuilt landing page', 'Funnel audit', 'Test results'],
    stage: 'Grow',
  },

  'lead-capture-automation': {
    eyebrow: 'Service',
    title: ['Lead capture & instant follow-up', 'Reply in seconds, not hours.'],
    sub: 'Forms that feed straight into your pipeline, with SMS and email that fire before the visitor has closed the tab.',
    why: 'Speed to first reply is the strongest predictor of whether a lead converts, and it decays fast. Someone who submits a form at 8pm and hears nothing until morning has usually already called two competitors. Automation removes the dependency on somebody being free to notice.',
    included: [
      'Forms wired to your CRM or pipeline, not an inbox',
      'SMS and email that fire within seconds of a submission',
      'Routing by service type, location or job value',
      'Stop rules so nobody gets chased after they book',
    ],
    deliverables: ['Live capture forms', 'Follow-up sequences', 'Routing rules'],
    stage: 'Automate',
  },

  'reviews-reputation': {
    eyebrow: 'Service',
    title: ['Reviews & reputation', 'Ask at the moment they’re happiest.'],
    sub: 'Automated review requests timed to fire right after a completed job, when goodwill is highest.',
    why: 'Reviews are the closest thing a local business has to a ranking factor it controls, and most owners simply forget to ask. The window matters enormously — a request sent two days after a job lands very differently from one sent two weeks later.',
    included: [
      'Review requests triggered on job completion',
      'Routing to Google, Facebook or wherever matters most for you',
      'Follow-up nudge for people who don’t respond first time',
      'Private feedback path for unhappy customers before they post',
    ],
    deliverables: ['Live review automation', 'Request templates', 'Reporting view'],
    stage: 'Automate',
  },

  'rebooking-winback': {
    eyebrow: 'Service',
    title: ['Rebooking & win-back', 'The customers you already paid to win.'],
    sub: 'Automated reminders and re-engagement for people who bought once and quietly drifted away.',
    why: 'Keeping a customer costs a fraction of finding a new one, yet it’s the stage almost every agency skips — it isn’t as easy to sell as ads. For appointment-based businesses especially, the revenue sitting in your existing customer list usually outweighs anything a new campaign will produce this quarter.',
    included: [
      'Rebooking reminders timed to your service cycle',
      'Win-back sequences when a customer goes quiet',
      'Segmentation by service, spend or visit frequency',
      'Seasonal and maintenance-cycle campaigns',
    ],
    deliverables: ['Live rebooking flows', 'Win-back sequences', 'Customer segments'],
    stage: 'Automate',
  },
}

export const INDUSTRY_PAGES = {
  'home-services': {
    eyebrow: 'Industry',
    title: ['Home services', 'Win the job before the third callback.'],
    sub: 'HVAC, plumbing, landscaping, roofing — where the customer is calling three companies and the first useful reply usually wins.',
    why: 'In home services the buying window is short and often urgent. Someone with a leak isn’t comparing brand values — they’re calling down a list until somebody picks up or replies. Speed of response beats almost every other marketing investment.',
    included: [
      'Instant reply to every enquiry, including out of hours',
      'Job routing by service type and service area',
      'Booking flow that works one-handed on a phone',
      'Review requests timed to fire after job completion',
    ],
    deliverables: ['Live site', 'Instant-response automation', 'Review engine'],
  },
  healthcare: {
    eyebrow: 'Industry',
    title: ['Healthcare', 'Stop losing patients to the 90-day gap.'],
    sub: 'Dental, medspa and wellness clinics — where the money is in the second visit, not the first.',
    why: 'Acquisition gets the attention, but for appointment-based clinics the economics live in rebooking. A patient who drifts past 90 days without a nudge usually doesn’t come back at all — and replacing them costs several times what reminding them would have.',
    included: [
      'Trust-first design suited to a healthcare decision',
      'Online booking that reduces phone load',
      'Automated rebooking reminders timed to the treatment cycle',
      'Win-back flows for patients who have gone quiet',
    ],
    deliverables: ['Live site', 'Booking system', 'Rebooking automation'],
  },
  'trucking-logistics': {
    eyebrow: 'Industry',
    title: ['Trucking & logistics', 'Quotes that don’t live in someone’s inbox.'],
    sub: 'Freight, dispatch and fleet operations — where quote requests and driver comms are still manual.',
    why: 'Logistics runs on response time and coordination, but the tooling is often a phone and an inbox. Quote requests get missed, status updates get chased, and the same information gets re-typed across three systems.',
    included: [
      'Quote request capture and routing',
      'Automated status updates to customers',
      'Driver and dispatch notification flows',
      'Integration with the systems already in use',
    ],
    deliverables: ['Quote system', 'Notification automation', 'Process map'],
  },
  'real-estate': {
    eyebrow: 'Industry',
    title: ['Real estate', 'Nurture the leads who won’t buy for months.'],
    sub: 'Agents and brokerages — where the sales cycle is long and most leads go cold from silence, not disinterest.',
    why: 'A property lead often isn’t ready for six months. Most agents follow up twice and move on, which means the pipeline quietly leaks people who would have bought — just not yet. Long-cycle nurture is almost entirely automatable.',
    included: [
      'Instant response to every enquiry',
      'Long-cycle nurture sequences that stay warm for months',
      'Routing by area, budget and property type',
      'Re-engagement when a lead re-visits the site',
    ],
    deliverables: ['Live site', 'Nurture sequences', 'Lead routing'],
  },
}
