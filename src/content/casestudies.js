/**
 * Full case study pages — tier 1 of the two-tier portfolio (docs 05 + 09).
 *
 * One entry per route (/work/:slug), driven through a single shared template
 * so adding a study is a data edit, not a new component.
 *
 * Structure follows the teardown's case study arc exactly:
 *   H1 IS the result → 3 stat callouts ABOVE any narrative → Partnership →
 *   Solution → Results → Takeaway → CTA naming the client
 *
 * The Solution section names the actual tools used, which makes the page
 * double as a services page for anyone reading it as proof (docs 05 §7).
 *
 * ────────────────────────────────────────────────────────────────────────
 * HONESTY RULES FOR THIS FILE — read before adding a study.
 *
 * Every number here is CLIENT-REPORTED, not measured by us. Keep whatever
 * backs each one (analytics export, dashboard screenshot, the client's own
 * sign-off) somewhere you can produce on request — a prospect who asks and
 * gets nothing discredits the whole portfolio, not one page.
 *
 * A `null` stat renders a muted dash. That is the correct state for a number
 * you don't have. Do not fill one with an estimate: these pages name real,
 * identifiable companies, so an invented figure is a performance claim about
 * a third party you'd have to defend.
 * ────────────────────────────────────────────────────────────────────────
 */

import petNestShot from '../assets/images/casestudies/thepetnest case studies.png'
import dentalShot from '../assets/images/casestudies/getdentalleads case studies.png'
import safetySuppliesShot from '../assets/images/casestudies/cro for safety supplies.png'

export const CASE_STUDY_PAGES = {
  thepetnest: {
    eyebrow: 'Case study',
    client: 'ThePetNest',
    industry: 'At-home pet care marketplace',
    stage: 'Build',
    image: petNestShot,

    // H1 IS the result (docs 05 §2) — never a vague "client success story".
    title: ['ThePetNest: $10K to $73K a month', 'Six services, one booking funnel.'],
    sub: 'A pet care marketplace whose booking flow asked visitors to work through three screens before they could book anything.',

    // Numbers before narrative. A skimmer gets the whole pitch in three.
    stats: [
      { value: '$73K/mo', label: 'Monthly recurring revenue' },
      { value: '7.3×', label: 'Revenue growth' },
      { value: '6', label: 'Services in one funnel' },
    ],

    partnership:
      'ThePetNest sells six different at-home services — grooming, boarding, dog walking, training, vet-on-call and adoption — to customers who mostly arrive knowing exactly which one they want. The site treated all six as equals and asked every visitor to browse, then pick a city, then pick a date, across separate screens. Revenue sat around $10K a month, and the drop-off was happening before anyone reached a booking form.',

    solution: [
      {
        title: 'One-screen booking',
        desc: 'Service, city and date capture pulled onto the landing page itself, so a visitor who knows what they want books in one screen instead of three.',
      },
      {
        title: 'Service-first layout',
        desc: 'All six services surfaced as the primary choice above the fold, rather than buried behind a generic "browse services" path.',
      },
      {
        title: 'Trust signals at the decision point',
        desc: 'Background-check and review proof moved next to the booking action — this is someone letting a stranger into their home with their pet.',
      },
      {
        title: 'Mobile-first build',
        desc: 'Rebuilt around phone traffic, where the multi-screen flow was costing the most.',
      },
    ],

    results: [
      'Monthly recurring revenue grew from roughly $10K to $73K',
      'All six services bookable from a single entry point',
      'Booking reduced from three screens to one',
      'City and date captured before the visitor leaves the landing page',
    ],

    takeaway:
      'Nothing here was a growth hack. The service was already good — 98.7% of their reviews were five star before we touched anything. The revenue was being lost in the gap between wanting to book and being able to. That is the same diagnosis we start every engagement with, and it is why the audit comes before any redesign talk.',

    // TODO: confirm this is the correct public URL before launch.
    liveUrl: 'https://thepetnest.com',
    tags: ['Design', 'Booking funnel', 'Mobile'],
  },

  getdentalleads: {
    eyebrow: 'Case study',
    client: 'GetDentalLeads',
    industry: 'Dental patient acquisition',
    stage: 'Rank',
    image: dentalShot,

    title: ['GetDentalLeads: 0 to 90+ leads', 'In the first month live.'],
    sub: 'A dental patient-acquisition business with no inbound pipeline — every enquiry came from manual outreach.',

    stats: [
      { value: '90+', label: 'Leads in month one' },
      { value: '0', label: 'Inbound leads before' },
      { value: '3', label: 'Treatment verticals targeted' },
    ],

    partnership:
      'GetDentalLeads sells patient acquisition to dental clinics across the US, UK, Canada, Australia and Europe. The offer worked, but the front end did not exist as a lead source — there was no site converting search traffic, so every enquiry had to be chased manually. Implants, emergency and general dentistry are three genuinely different buyers with different urgency, and one generic page was being asked to speak to all of them.',

    solution: [
      {
        title: 'Conversion-first site build',
        desc: 'A front end built around one action — book a call — with the offer, the proof and the objection handling stacked in the order a skeptical clinic owner reads them.',
      },
      {
        title: 'Landing pages per treatment type',
        desc: 'Implants, emergency and general dentistry each got their own page, so search traffic lands on a page matched to what it searched for instead of a generic homepage.',
      },
      {
        title: 'Google Ads structure',
        desc: 'Campaigns built per treatment vertical, pointed at the matching landing page rather than the homepage — the single most common wasted-spend mistake in paid search.',
      },
      {
        title: 'Direct-call path alongside the form',
        desc: 'A phone CTA next to every form, because an emergency-dentistry buyer is not filling in a contact form.',
      },
    ],

    results: [
      'Over 90 leads in the first month live, from a standing start of zero inbound',
      'Three treatment verticals each with a dedicated landing page and campaign',
      'Ad traffic landing on message-matched pages rather than a generic homepage',
      'Two conversion paths — form and direct call — covering both buyer urgencies',
    ],

    takeaway:
      'Going from zero is not the same problem as improving a number. With no inbound at all, the constraint was never optimisation — it was that no asset existed for search traffic to land on. Build and Rank had to ship together: the pages without the campaigns would have sat invisible, and the campaigns without the pages would have burned budget on a homepage that converted nobody.',

    // TODO: confirm the correct public URL before launch — do not guess the domain.
    liveUrl: null,
    tags: ['Design', 'Google Ads', 'SEO landing pages'],
  },

  'safety-supplies-usa': {
    eyebrow: 'Case study',
    client: 'Safety Supplies USA',
    industry: 'Industrial safety e-commerce',
    stage: 'Grow',
    image: safetySuppliesShot,

    /**
     * The one study without a headline number, because none was supplied.
     *
     * TODO — this is the highest-value gap in the portfolio. CRO is the only
     * stage with no measured proof anywhere on the site, and this page is
     * where it would live. Pull the product-page conversion rate from the
     * client's Shopify or GA4 (same metric, before window vs. after window),
     * put it in `stats[0]`, and rewrite `title` so the H1 leads with it —
     * "Safety Supplies USA: 1.9% to 4.3%" or whatever it truly is.
     */
    title: ['Safety Supplies USA', 'Ad spend that stopped burning on the product page.'],
    sub: 'An industrial safety retailer paying for Google Ads traffic that landed on a product page built for browsers, not bulk buyers.',

    stats: [
      { value: null, label: 'Conversion rate change' }, // TODO: the real before → after
      { value: '4', label: 'Pack tiers with per-unit pricing' },
      { value: null, label: 'Change in cost per acquisition' }, // TODO
    ],

    partnership:
      'Safety Supplies USA sells traffic cones, barricades and safety gear to contractors — a buyer who orders 25 or 100 units for a job site, not one. Google Ads was bringing qualified traffic to product pages built around a single quantity field and a standard add-to-cart, which is a consumer shopping pattern. The spend was working; the page it pointed at was not.',

    solution: [
      {
        title: 'Pack-size tiers with per-unit pricing',
        desc: 'Four buying options — 10, 25, 50 and 100 — each showing the per-unit price and the saving, so a contractor sizing a job can see the volume break instead of calculating it.',
      },
      {
        title: 'Objections answered above the fold',
        desc: 'MUTCD and DOT compliance, same-day shipping cutoff, warranty and return policy stated on the page, because those are the questions that otherwise become a phone call or a bounce.',
      },
      {
        title: 'A bulk-quote path beside the cart',
        desc: 'Orders too large for a checkout got their own route — quote request and a direct number — rather than being forced through a cart that does not fit them.',
      },
      {
        title: 'Social proof at the decision point',
        desc: 'Review count and rating surfaced next to the product title, where the buyer is deciding, not buried at the bottom of the page.',
      },
    ],

    results: [
      'Product page rebuilt around bulk buying rather than single-unit checkout',
      'Four pack tiers with per-unit pricing and savings shown on each',
      'Compliance, shipping and warranty answered before the add-to-cart decision',
      'Separate quote path for orders larger than the cart is designed for',
    ],

    takeaway:
      'The ads were never the problem, and neither was the budget. Traffic was arriving ready to buy and hitting a page that asked a contractor to shop like a consumer. This is the most common thing we find in a CRO audit: the spend gets blamed because it is the visible line item, while the page quietly loses the people it already paid for.',

    // TODO: confirm the correct public URL before launch — do not guess.
    liveUrl: null,
    tags: ['CRO', 'E-commerce', 'Google Ads'],
  },
}

/** Render order on /work and in the "also worth seeing" strip. */
export const CASE_STUDY_ORDER = ['thepetnest', 'getdentalleads', 'safety-supplies-usa']
