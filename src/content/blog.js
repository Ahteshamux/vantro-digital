/**
 * Blog / article content.
 *
 * Same data-driven pattern as subpages.js and casestudies.js: every article is
 * a plain object rendered through one shared template (pages/BlogPost.jsx), so
 * publishing is a data edit — not a new component. The index (pages/BlogIndex
 * .jsx) reads POST_ORDER to lay the cards out newest-first.
 *
 * Shape per post:
 *   eyebrow            — PageHero kicker (the cluster the article sits in)
 *   title: [h1, muted] — two-tone headline, matching every other inner page
 *   sub                — the dek / one-sentence value statement
 *   seoTitle           — <title> (<60 chars, primary keyword up front)
 *   seoDescription     — meta description (150–160 chars, keyword + a benefit)
 *   primaryKeyword     — the single term this page is built to rank for; it
 *                        appears in title, H1, the first 100 words and ≥1 H2
 *   author / dates     — feed the BlogPosting JSON-LD in BlogPost.jsx
 *   readMinutes        — shown in the byline; a manual estimate
 *   relatedService     — the ≥1 service link every article must carry
 *   relatedCase        — the ≥1 case study link every article must carry
 *   sections[]         — ordered body. Each section.id is the TOC anchor and
 *                        the <h2 id>. blocks are {type:'p'|'list'|'h3'|'callout'}
 *   faqs[]             — 3–5 Q&As → FAQPage JSON-LD + a rich-snippet chance
 *
 * HONESTY GUARDRAIL (matches the rule enforced across site.js / casestudies.js):
 * the only client numbers used are the real ThePetNest and GetDentalLeads
 * figures already published on the case-study pages. No invented conversion
 * rates, no "grow X% in 90 days" outcome promises — we describe how the system
 * behaves, which is true on day one, not results we haven't measured.
 *
 * Spelling follows the rest of the site: AU/British ("optimise", "programme").
 */

export const POSTS = {
  'marketing-agency-vs-freelancer-vs-diy': {
    eyebrow: 'How to choose',
    title: ['Marketing agency vs freelancer vs DIY:', 'which is right for your business?'],
    sub: 'Every small business owner weighs the same three options for getting their marketing done — and each one fails in a predictable way. Here’s an honest breakdown, from people who’ll tell you when none of them is you.',
    seoTitle: 'Agency vs Freelancer vs DIY: How to Choose (2026)',
    seoDescription:
      'Marketing agency vs freelancer vs DIY — an honest comparison of cost, speed, accountability and what breaks with each, so you pick the right way to grow.',
    primaryKeyword: 'marketing agency vs freelancer vs DIY',
    author: 'Vantro Digital',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    readMinutes: 9,
    relatedService: { label: 'The complete system', to: '/services/complete-system' },
    relatedCase: { label: 'ThePetNest — $10K to $73K a month', to: '/work/thepetnest' },
    sections: [
      {
        id: 'the-decision',
        heading: 'The three ways to get your marketing done',
        blocks: [
          {
            type: 'p',
            text: 'When a local business owner decides the marketing finally needs sorting, the choice almost always comes down to a marketing agency vs a freelancer vs DIY. Each is a legitimate path, each suits a particular situation, and each has a failure mode that shows up months later once the money’s spent. The goal of this page isn’t to tell you one is always right — it’s to help you see which one fits where you actually are.',
          },
          {
            type: 'callout',
            text: 'Full disclosure: we’re Vantro Digital, and we run a fourth model — one operator delivering the whole system. We’ll make that case at the end, but the honest read on the other three comes first, strengths included.',
          },
        ],
      },
      {
        id: 'option-agency',
        heading: 'Option 1: Hire a marketing agency',
        blocks: [
          {
            type: 'p',
            text: 'An agency gives you a whole team — strategists, designers, ad buyers, developers — under one roof. For a business with real budget and complexity, that depth is genuinely valuable: they’ve seen your problem before, they can move on several fronts at once, and there’s a process behind the work.',
          },
          {
            type: 'h3',
            text: 'Where agencies struggle for small businesses',
          },
          {
            type: 'p',
            text: 'The trouble is that the team you’re sold isn’t always the team you get. Small accounts often land with junior staff, decisions move slowly through approval chains, and you deal with an account manager relaying messages rather than the people doing the work. Add retainers, long contracts and high overhead, and a $300K–$1.5M business frequently pays agency prices for cookie-cutter delivery.',
          },
        ],
      },
      {
        id: 'option-freelancer',
        heading: 'Option 2: Hire a freelancer',
        blocks: [
          {
            type: 'p',
            text: 'Freelancers are the flexible, affordable option. You can hire a great designer or a sharp ads specialist directly, pay only for what you need, and often get more care per dollar than a big agency gives a small account. For a single, well-defined task, a freelancer is frequently the smartest choice on this list.',
          },
          {
            type: 'h3',
            text: 'Where freelancers struggle',
          },
          {
            type: 'p',
            text: 'The catch is scope. One freelancer is one skill — a designer who doesn’t do automation, an ads person who doesn’t build sites. You end up hiring, briefing and coordinating three or four of them yourself, and becoming the project manager for your own marketing. They’re also juggling other clients, which is where the classic problems appear: slipped timelines, mid-project disappearance, and no real handover when it ends.',
          },
        ],
      },
      {
        id: 'option-diy',
        heading: 'Option 3: Do it yourself',
        blocks: [
          {
            type: 'p',
            text: 'DIY is the cheapest option and gives you total control. With today’s tools, a determined owner can genuinely build a site, run some ads and set up follow-up. If you’re pre-revenue or testing an idea, doing it yourself first is often the right and responsible call.',
          },
          {
            type: 'h3',
            text: 'Where DIY struggles',
          },
          {
            type: 'p',
            text: 'DIY isn’t free — it’s paid for in your time, and your time is the business. The work competes with the job you’re actually good at, it rarely gets finished, and half-learned tools produce a result that looks amateur and leaks leads you never notice. For most owners past the startup stage, DIY quietly becomes the most expensive option once you price in the hours and the missed jobs.',
          },
        ],
      },
      {
        id: 'comparison-table',
        heading: 'Agency vs freelancer vs DIY, side by side',
        blocks: [
          {
            type: 'table',
            headers: ['What matters', 'Agency', 'Freelancer', 'DIY', 'One operator'],
            highlight: 4,
            rows: [
              ['Upfront cost', 'High', 'Low–medium', 'Lowest', 'Medium'],
              ['Your time required', 'Medium', 'High (you manage them)', 'Highest', 'Low'],
              ['Breadth of skills', 'Full team', 'One skill', 'Whatever you learn', 'Full system, one person'],
              ['Who owns the handoffs', 'Account manager', 'You', 'You', 'One accountable person'],
              ['Speed to decisions', 'Slow (approvals)', 'Fast', 'Fast', 'Fast'],
              ['Lock-in', 'Retainers, contracts', 'Per-project', 'None', 'Project-based, no retainer'],
              ['Consistency', 'Varies by staff', 'Varies by availability', 'Varies by your time', 'One consistent hand'],
            ],
          },
          {
            type: 'p',
            text: 'No column is best at everything — that’s the point. An agency wins on sheer depth, a freelancer on price and flexibility for a single task, DIY on control and cost. The gap they share is ownership: with the first three, nobody is accountable for how the pieces fit together.',
          },
        ],
      },
      {
        id: 'fourth-option',
        heading: 'The fourth option: one operator, one system',
        blocks: [
          {
            type: 'p',
            text: 'The reason marketing so often underdelivers isn’t any single vendor — it’s the seams between them. The web designer blames the ads person, the ads person blames the landing page, and the follow-up nobody was hired to build simply never happens. Our model exists to close those seams: one operator designs and builds the site, gets it found, turns traffic into booked jobs and automates the follow-up, as one connected system.',
          },
          {
            type: 'p',
            text: 'That won’t suit everyone. A large enterprise needs an agency’s scale; a business with one tiny task needs a freelancer, not a system. But for an owner-run business that wants the whole thing handled by one accountable person, without a retainer or an account manager in the middle, it’s a genuinely different shape from the three options above.',
          },
        ],
      },
      {
        id: 'how-to-choose',
        heading: 'How to choose the right one for you',
        blocks: [
          {
            type: 'list',
            items: [
              'Choose an agency if you have real budget and complexity, and value a full team over a single point of contact.',
              'Choose a freelancer if you have one clear, contained task and the time to manage it yourself.',
              'Choose DIY if you’re pre-revenue, testing an idea, or genuinely enjoy the work and have the hours.',
              'Choose one operator if you want the whole system built and connected by one accountable person, without retainers.',
            ],
          },
          {
            type: 'p',
            text: 'Still unsure which fits? A free audit will tell you plainly — including when the honest answer is a freelancer or DIY rather than us. You keep the findings either way.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a marketing agency or a freelancer cheaper?',
        a: 'A freelancer almost always has a lower sticker price for a single task. But if you need several skills — site, ads, automation — hiring and coordinating multiple freelancers can cost more in your time than it saves in fees. Price the whole job, not just the hourly rate.',
      },
      {
        q: 'When does DIY marketing stop making sense?',
        a: 'Usually the moment your time is worth more spent on the business than on learning marketing tools. If the work keeps getting pushed to “next month” or the result looks amateur, DIY has quietly become your most expensive option.',
      },
      {
        q: 'What’s the difference between an agency and a “one operator” model?',
        a: 'An agency gives you a team coordinated by an account manager; a one-operator model gives you a single person accountable for the whole system, with no manager relaying messages. Agencies win on scale; one operator wins on ownership and speed of decisions for a smaller business.',
      },
      {
        q: 'Do I have to sign a long contract?',
        a: 'With many agencies, yes — retainers and minimum terms are common. Freelancers and DIY have none. Our model is project-based with no required retainer; ongoing support is optional, not a condition of keeping your system running.',
      },
    ],
  },

  'wix-vs-custom-website': {
    eyebrow: 'Website & web design',
    title: ['Wix vs a custom website:', 'which is better for a small business?'],
    sub: 'Website builders like Wix are cheap, fast and genuinely good for some businesses. Here’s an honest look at where they win, where a custom build wins, and how to tell which one you actually need.',
    seoTitle: 'Wix vs Custom Website: Which Is Better for Business?',
    seoDescription:
      'Wix vs a custom website for a small business — an honest comparison of cost, speed, SEO, booking funnels and ownership, so you choose the right one.',
    primaryKeyword: 'wix vs custom website',
    author: 'Vantro Digital',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    readMinutes: 8,
    relatedService: { label: 'Website design & build', to: '/services/website-design' },
    relatedCase: { label: 'ThePetNest — a booking funnel that scaled', to: '/work/thepetnest' },
    sections: [
      {
        id: 'the-real-question',
        heading: 'The real question isn’t Wix vs custom — it’s what you need',
        blocks: [
          {
            type: 'p',
            text: 'The Wix vs custom website debate gets treated like a loyalty test, but it isn’t one. A website builder and a purpose-built site are different tools for different jobs, and the right answer depends entirely on what your business needs the site to do. Get that straight first and the choice makes itself.',
          },
          {
            type: 'callout',
            text: 'Full disclosure: we build custom sites at Vantro Digital, so we have a horse in this race. That’s exactly why the next section is about where Wix genuinely wins — if a builder is right for you, we’ll say so.',
          },
        ],
      },
      {
        id: 'where-builders-win',
        heading: 'Where website builders genuinely win',
        blocks: [
          {
            type: 'p',
            text: 'Wix, Squarespace and similar builders are excellent at what they’re for. If you need a simple, good-looking presence online quickly and cheaply, they’re often the smart choice — and paying for a custom build would be overkill.',
          },
          {
            type: 'list',
            items: [
              'Low, predictable cost — a monthly subscription instead of an upfront build.',
              'Fast to launch — you can have something live in a weekend.',
              'No developer needed for small edits — change text or a photo yourself.',
              'Fine for simple needs — a brochure site, a menu, an about page, a contact form.',
            ],
          },
          {
            type: 'p',
            text: 'If that describes your business — you mainly need to exist online and look credible — a builder may be all you ever need. There’s no shame in it, and it beats overspending on capability you won’t use.',
          },
        ],
      },
      {
        id: 'where-custom-wins',
        heading: 'Where a custom website pulls ahead',
        blocks: [
          {
            type: 'p',
            text: 'The limits of a builder show up the moment your site needs to actively generate business rather than just describe it. When the website is a revenue engine — booking jobs, qualifying leads, running campaigns — a purpose-built site tends to win on the things that decide whether the phone rings.',
          },
          {
            type: 'list',
            items: [
              'Booking and enquiry funnels built for how you actually sell — service picker, location, date — instead of a generic contact form.',
              'Mobile speed you control end to end, which matters because most local searches are on a phone.',
              'Deeper SEO control — page structure, titles and technical details a template constrains.',
              'Campaign landing pages that match your ads exactly, so paid traffic converts instead of bouncing.',
              'Room to scale — new services, integrations and automations bolted on without hitting a template’s ceiling.',
            ],
          },
          {
            type: 'p',
            text: 'That’s the difference a custom booking funnel made for one of our clients: a single-screen flow across several services turned a modest month into a much bigger one, because visitors could finish in one sitting instead of fighting a form.',
          },
        ],
      },
      {
        id: 'comparison-table',
        heading: 'Wix vs custom website, side by side',
        blocks: [
          {
            type: 'table',
            headers: ['What matters', 'Website builder (Wix, etc.)', 'Custom website'],
            highlight: 2,
            rows: [
              ['Upfront cost', 'Low', 'Higher'],
              ['Ongoing cost', 'Monthly subscription', 'Hosting + optional support'],
              ['Time to launch', 'Days', 'Weeks'],
              ['Mobile speed control', 'Limited by platform', 'Full control'],
              ['Booking / sales funnels', 'Basic', 'Built for how you sell'],
              ['SEO control', 'Constrained by templates', 'Full technical control'],
              ['Design flexibility', 'Template-bound', 'Unlimited'],
              ['Who owns it', 'The platform (you rent)', 'You'],
              ['Scales with you', 'Hits a ceiling', 'Grows with the business'],
            ],
          },
          {
            type: 'p',
            text: 'Pricing note: builder plans are tiered monthly subscriptions and change often — check the current rates on the provider’s pricing page (as of July 2026). The point isn’t the exact dollar figure; it’s that a builder trades a low, ongoing rent for platform limits, while a custom site trades a higher upfront cost for control and ownership.',
          },
        ],
      },
      {
        id: 'hidden-costs',
        heading: 'The costs that don’t show up on the pricing page',
        blocks: [
          {
            type: 'p',
            text: 'A builder’s monthly price is easy to see; its real costs are quieter. You’re renting, not owning — if you leave the platform, the site usually doesn’t come with you. Templates cap how fast and how far you can optimise, which shows up as lost conversions rather than a line on an invoice. And if the business outgrows the tool, a rebuild later can cost more than building it right once.',
          },
          {
            type: 'p',
            text: 'None of that makes builders a bad deal — it makes them a rental. The question is whether you’re renting a simple shopfront or trying to run a sales engine on one.',
          },
          {
            type: 'p',
            text: 'There’s also a speed dimension that’s easy to miss. Builders load a lot of shared platform code to stay flexible, which can slow the first paint on mobile — and on a phone, over patchy data, a slow load costs you visitors before they ever see your offer. A custom build lets you strip the site to only what it needs, so the important content appears fast. For a brochure that’s a nicety; for a site meant to convert local searchers, it’s often the whole game.',
          },
        ],
      },
      {
        id: 'which-should-you-choose',
        heading: 'Which should you choose?',
        blocks: [
          {
            type: 'list',
            items: [
              'Choose a builder if you need a simple, credible presence, want the lowest upfront cost, and don’t rely on the site to generate bookings.',
              'Choose a custom website if the site is a real part of how you win customers — booking, lead capture, ads and SEO — and you want to own and scale it.',
            ],
          },
          {
            type: 'p',
            text: 'If you’re not sure which camp you’re in, our website design audit will tell you straight — including when a builder is genuinely enough. You keep the findings whether or not we build anything for you.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Wix good for SEO?',
        a: 'Wix has improved and is fine for basic local SEO. The limits appear when you need deep control over page structure, speed and technical details — areas where a custom build gives you more room to compete for harder terms. For a simple site targeting low-competition local searches, Wix can rank perfectly well.',
      },
      {
        q: 'Is a custom website worth the extra cost?',
        a: 'It’s worth it when the site actively generates business — bookings, leads, ad campaigns — because the gains in speed, funnels and SEO control pay back in booked jobs. If the site is just a brochure, the extra cost usually isn’t worth it, and a builder is the smarter buy.',
      },
      {
        q: 'Can I start on Wix and move to a custom site later?',
        a: 'Yes, and plenty of businesses do exactly that — start cheap to validate, then invest in a custom build once the site is clearly driving revenue. Just budget for the fact that content usually has to be rebuilt rather than lifted across.',
      },
      {
        q: 'Do I own my website on Wix?',
        a: 'You own your content and domain, but the site itself lives on Wix’s platform — you’re effectively renting the build. A custom website is yours outright, which matters if you ever want to move hosts or hand it to another developer.',
      },
    ],
  },

  'website-that-generates-leads': {
    eyebrow: 'Website & web design',
    title: ['How to build a small business website', 'that actually generates leads'],
    sub: 'A pretty site that nobody books from is an expensive brochure. Here’s what separates a website that generates leads from one that just sits there looking nice.',
    seoTitle: 'Web Design for Small Business That Generates Leads',
    seoDescription:
      'A practical guide to web design for small business — the five things that turn a good-looking website into one that actually generates leads and booked jobs.',
    primaryKeyword: 'web design for small business',
    author: 'Vantro Digital',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    readMinutes: 8,
    relatedService: { label: 'Website design & build', to: '/services/website-design' },
    relatedCase: { label: 'ThePetNest — $10K to $73K a month', to: '/work/thepetnest' },
    sections: [
      {
        id: 'why-sites-fail',
        heading: 'Why most small business websites never get a call',
        blocks: [
          {
            type: 'p',
            text: 'Good web design for a small business is not about looking impressive — it’s about making the next step obvious. Most local business sites in the US and Australia fail the same way: a visitor lands, the design looks fine, and then they can’t work out how to actually book, quote or call. They came ready to act, hit a wall of friction, and left for a competitor whose site made it easy. The site wasn’t ugly. It just didn’t have a job.',
          },
          {
            type: 'p',
            text: 'A visitor decides whether you look like a real, trustworthy company in roughly five seconds. But credibility is only half the job. The other half is conversion: turning that trust into a booked appointment, a submitted enquiry or a phone call. A website that generates leads does both. Most do the first and quietly fail the second.',
          },
        ],
      },
      {
        id: 'five-second-test',
        heading: 'The five-second credibility test',
        blocks: [
          {
            type: 'p',
            text: 'Open your homepage on your phone and count to five. In that window, can a stranger answer three questions without scrolling or thinking?',
          },
          {
            type: 'list',
            items: [
              'What exactly do you do, and for whom? “Emergency plumbing in Brisbane,” not “Solutions for the modern home.”',
              'Why should I trust you over the other three tabs I have open? Reviews, real photos, a real name, years in business.',
              'What do I do next, and where is the button? One obvious action, above the fold, on mobile.',
            ],
          },
          {
            type: 'p',
            text: 'If any answer is missing or buried, that’s your first fix — and it usually costs more leads than anything else on the page. Clarity beats cleverness every single time.',
          },
        ],
      },
      {
        id: 'pretty-vs-converting',
        heading: 'Pretty is not the same as converting',
        blocks: [
          {
            type: 'p',
            text: 'Designers and template marketplaces optimise for how a site looks in a screenshot. Customers optimise for how fast they can get what they came for. Those two goals pull in different directions more often than people admit. A big, silent hero image looks great in a portfolio and tells a ready-to-buy customer nothing.',
          },
          {
            type: 'callout',
            text: 'The test isn’t “do I like how this looks?” It’s “can a stressed customer, one-handed on a phone, book me in under a minute?” Design in service of that question is design that pays for itself.',
          },
          {
            type: 'p',
            text: 'This is why we design in Figma and pressure-test the layout before a line of it gets built — so the structure earns its keep before anyone falls in love with the visuals.',
          },
        ],
      },
      {
        id: 'one-clear-action',
        heading: 'Give every page one clear action',
        blocks: [
          {
            type: 'p',
            text: 'A page with five equally-weighted buttons has no primary action — it just makes the visitor choose, and choosing is friction. Decide the single most valuable thing a visitor can do (usually book or request a quote) and make that the loudest element on the page. Everything else is secondary by design.',
          },
          {
            type: 'p',
            text: 'For businesses that sell several services across several areas, a single generic contact form is often the whole conversion gap. A short, progressive funnel — pick the service, pick the location, pick a time — asks one small question at a time instead of confronting the visitor with one intimidating form. That’s exactly what turned a single booking screen into real revenue for one of our clients.',
          },
        ],
      },
      {
        id: 'mobile-speed',
        heading: 'Mobile speed is a conversion feature, not a technical detail',
        blocks: [
          {
            type: 'p',
            text: 'Most local searches happen on a phone, often on mobile data, often while the customer is mid-task. If your site takes four seconds to show anything useful, a meaningful share of visitors leave before they ever see your offer. Speed isn’t a box to tick for Google — it’s the difference between a visitor who waits and one who bounces to the next result.',
          },
          {
            type: 'list',
            items: [
              'Compress and correctly size images — an uncompressed hero photo is the usual culprit.',
              'Load the important content first; defer anything below the fold.',
              'Cut third-party widgets you don’t truly need — each one costs load time.',
              'Test on a real phone on mobile data, not a fast office connection.',
            ],
          },
        ],
      },
      {
        id: 'message-match',
        heading: 'Match the page to the promise that brought them',
        blocks: [
          {
            type: 'p',
            text: 'If someone clicks an ad or a search result for “emergency drain repair, today” and lands on a page about your company history, they have to hunt for the thing they were promised — and most won’t. This is message match: the headline a visitor arrived expecting should be the first thing they read. Send campaign traffic to a page built for that campaign, not to a homepage that has to serve everyone at once.',
          },
          {
            type: 'p',
            text: 'When the page opens with the exact promise the visitor came for, conversion stops being a mystery. When it doesn’t, no amount of extra traffic fixes the leak — you just pay to fill a leaking bucket faster.',
          },
        ],
      },
      {
        id: 'what-to-do',
        heading: 'Where to start if your site isn’t pulling its weight',
        blocks: [
          {
            type: 'p',
            text: 'Don’t start with a full redesign — start with a diagnosis. Walk your own click-to-booking path on a phone and note every place you hesitate. That hesitation is where your visitors are dropping off. Fix the five-second clarity problem first, then the single clear action, then speed. A redesign that ignores those is just a prettier version of the same leak.',
          },
          {
            type: 'p',
            text: 'If you want a second set of eyes, our website design audit maps exactly where visitors drop off and which fixes would convert more of the traffic you already pay for — and you keep the findings either way.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does a good small business website cost?',
        a: 'It varies with scope, but the honest answer is that a website which actually generates leads is priced on the booking or enquiry flow it’s built around, not on page count. A simple, conversion-focused build starts lower than most owners expect; a multi-service funnel costs more because it does more. The audit tells you which one you actually need.',
      },
      {
        q: 'Should I use a website builder like Wix or Squarespace?',
        a: 'For a very simple presence they’re fine. The limits show up when you need a real booking funnel, fast mobile performance and message-matched campaign pages — that’s usually where a purpose-built site earns back its cost in booked jobs.',
      },
      {
        q: 'How long does it take to build a website that converts?',
        a: 'We work to a 30-day path from audit to a live, working system. The build itself is quick once the structure is decided — the leverage is in getting the layout and the booking flow right before anything is built.',
      },
      {
        q: 'My site looks great but gets no enquiries. What’s wrong?',
        a: 'Almost always one of three things: it isn’t clear in five seconds what you do and how to act, there’s no single obvious next step, or it’s too slow on mobile. Looking great and converting are different jobs, and most sites are only built for the first.',
      },
    ],
  },

  'get-more-google-reviews': {
    eyebrow: 'Reputation & reviews',
    title: ['How to get more Google reviews', 'for your local business'],
    sub: 'Reviews are the closest thing a local business has to a ranking factor it controls — and most owners simply forget to ask. Here’s how to get more of them without ever feeling pushy.',
    seoTitle: 'How to Get More Google Reviews for Your Business',
    seoDescription:
      'Learn how to get more Google reviews for your local business the right way — the best moment to ask, how to automate the request, and how to handle negatives.',
    primaryKeyword: 'how to get more google reviews',
    author: 'Vantro Digital',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    readMinutes: 7,
    relatedService: { label: 'Reviews & reputation automation', to: '/services/reviews-reputation' },
    relatedCase: { label: 'GetDentalLeads — 0 to 90+ leads in month one', to: '/work/getdentalleads' },
    sections: [
      {
        id: 'why-reviews-matter',
        heading: 'Why reviews are the one ranking signal you control',
        blocks: [
          {
            type: 'p',
            text: 'If you want to know how to get more Google reviews, start with why they matter so much. For a local business, reviews do double duty: they’re the first thing a customer reads before choosing you, and they’re one of the strongest local ranking signals you can directly influence. You can’t make Google rank you higher on demand — but a steady stream of recent, genuine reviews is the closest lever you have, and it’s one most competitors ignore.',
          },
          {
            type: 'p',
            text: 'The businesses winning the map pack in their town are rarely the biggest. They’re usually the ones who ask every happy customer, every time, and make it effortless to leave a review. That’s a habit, not a budget.',
          },
          {
            type: 'p',
            text: 'There’s a second, quieter payoff. Reviews are also where prospective customers do their due diligence before they ever contact you. A tradesperson with forty recent five-star reviews looks like a safe choice next to one with four reviews from two years ago — even if the work is identical. You’re not just collecting reviews for Google; you’re building the evidence a nervous first-time customer needs to pick up the phone.',
          },
        ],
      },
      {
        id: 'the-moment',
        heading: 'Ask at the moment they’re happiest',
        blocks: [
          {
            type: 'p',
            text: 'Timing does more work than wording. A review request sent right after a job is completed — while the relief and goodwill are still fresh — lands completely differently from one sent two weeks later, once the moment has faded and life has moved on. The window is short, and it closes fast.',
          },
          {
            type: 'callout',
            text: 'The best time to ask is the moment the customer is happiest: the job just finished, the problem is solved, and they’re grateful. Miss that window and every later ask is harder.',
          },
          {
            type: 'p',
            text: 'For appointment-based businesses that means asking on completion, not at the end of the month. For a clinic, it’s as they leave reception. For a trades job, it’s when you pack up and the customer can see the result.',
          },
        ],
      },
      {
        id: 'make-it-effortless',
        heading: 'Remove every ounce of friction',
        blocks: [
          {
            type: 'p',
            text: 'Most people are willing to leave a review and simply never get around to it, because the path has too many steps. “Search for us on Google, scroll down, find the reviews, tap write a review, sign in…” is enough friction to lose them. Your job is to collapse that into a single tap.',
          },
          {
            type: 'list',
            items: [
              'Send a direct review link that opens the write-a-review box straight away — no searching, no scrolling.',
              'Send it by SMS as well as email; texts get opened in minutes, emails often don’t.',
              'Keep the message short, warm and human — a genuine thank-you followed by the link.',
              'Ask once, then send a single gentle nudge to people who didn’t respond. One reminder is help; three is nagging.',
            ],
          },
        ],
      },
      {
        id: 'automate-it',
        heading: 'Automate the ask so it never gets forgotten',
        blocks: [
          {
            type: 'p',
            text: 'The real reason businesses don’t have more reviews isn’t reluctance — it’s memory. In a busy week, asking is the first thing to slip. The fix is to take it off your plate entirely: trigger the review request automatically when a job is marked complete or an appointment is finished, so the ask fires at the perfect moment without anyone remembering to send it.',
          },
          {
            type: 'p',
            text: 'That’s exactly what our reviews and reputation automation does — a request goes out on completion, routes to Google (or wherever matters most to you), nudges non-responders once, and quietly stops chasing anyone who’s already left one. Set up once, then it runs on its own.',
          },
        ],
      },
      {
        id: 'handle-negatives',
        heading: 'Catch unhappy customers before they post',
        blocks: [
          {
            type: 'p',
            text: 'Asking everyone for a review sounds risky until you build in a pressure valve. A good flow gives an unhappy customer a private path to tell you first — a “how did we do?” step that routes a poor experience to you directly, before it becomes a public one-star. That isn’t hiding criticism; it’s hearing it in time to fix it and to make the customer feel heard.',
          },
          {
            type: 'p',
            text: 'And when a negative review does land — because some will — respond calmly, publicly and without defensiveness. Future customers read how you handle a complaint far more closely than the complaint itself.',
          },
          {
            type: 'p',
            text: 'A handful of critical reviews scattered among many good ones can actually help you. A perfect, unbroken wall of five stars reads as suspicious to a modern buyer; a genuine profile with the occasional three-star review, answered thoughtfully, reads as real. The goal was never a flawless score — it’s a large, recent, believable body of feedback that a customer trusts.',
          },
        ],
      },
      {
        id: 'respond-to-all',
        heading: 'Respond to every review, good and bad',
        blocks: [
          {
            type: 'p',
            text: 'Replying to reviews signals to both customers and Google that the business is active and attentive. Thank people for the good ones by name. Address the critical ones with a real answer and an offer to make it right. It takes minutes and it compounds: a wall of recent five-star reviews, each with a warm reply underneath, is one of the most persuasive things a prospect can see.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is it against Google’s rules to ask for reviews?',
        a: 'No — asking is explicitly allowed and encouraged. What’s not allowed is buying reviews, offering incentives in exchange for them, or gating so only happy customers can reach the public review page. Asking everyone, and making it easy, is completely within the rules.',
      },
      {
        q: 'How many Google reviews do I actually need?',
        a: 'There’s no magic number, but recency and steadiness matter as much as total count. A business with a consistent trickle of fresh reviews usually outperforms one with a big pile that all stopped a year ago. Aim for a habit, not a milestone.',
      },
      {
        q: 'What should I do about a fake or unfair review?',
        a: 'You can flag reviews that violate Google’s policies for removal, though it isn’t guaranteed. In the meantime, respond publicly and professionally — a measured reply to an unfair review often does more good than removal would.',
      },
      {
        q: 'Can I really automate review requests?',
        a: 'Yes. The request can fire automatically the moment a job or appointment is completed, send by SMS and email, nudge non-responders once, and stop chasing anyone who’s already reviewed — so it happens every time without depending on anyone remembering.',
      },
    ],
  },

  'local-seo-guide': {
    eyebrow: 'Local SEO',
    title: ['Local SEO for small business:', 'showing up when customers search “near me”'],
    sub: 'When someone nearby searches for what you sell, you either show up or you don’t. This is the plain-English guide to local SEO for small business — and the fastest levers that actually move the needle.',
    seoTitle: 'Local SEO for Small Business: The “Near Me” Guide',
    seoDescription:
      'A practical local SEO for small business guide: how the Google map pack works, why your Business Profile matters most, and how to show up for “near me” searches.',
    primaryKeyword: 'local SEO for small business',
    author: 'Vantro Digital',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    readMinutes: 9,
    relatedService: { label: 'SEO cleanup', to: '/services/seo-cleanup' },
    relatedCase: { label: 'GetDentalLeads — search traffic that converts', to: '/work/getdentalleads' },
    sections: [
      {
        id: 'what-is-local-seo',
        heading: 'What local SEO actually means',
        blocks: [
          {
            type: 'p',
            text: 'Local SEO for small business is the work of showing up when someone nearby searches for what you offer — “plumber near me,” “dentist in Geelong,” “roof repair open now.” It’s different from general SEO because Google treats local searches specially: it shows a map with three highlighted businesses (the “map pack”) above the normal results. For a local business, landing in that pack is often worth more than any other position on the page.',
          },
          {
            type: 'p',
            text: 'The good news is that ranking locally depends heavily on a handful of signals you can directly control — and most of your competitors are only doing half of them.',
          },
        ],
      },
      {
        id: 'gbp-first',
        heading: 'Your Google Business Profile matters more than your website',
        blocks: [
          {
            type: 'p',
            text: 'For local searches, your Google Business Profile is the single highest-leverage asset you have — often more so than the website itself. It’s the panel that feeds the map pack, and it’s free. Yet most profiles are half-finished: no categories set properly, no services listed, no photos, no hours, no posts. Every one of those gaps is a ranking and trust signal left on the table.',
          },
          {
            type: 'list',
            items: [
              'Choose the most specific primary category you can, then add relevant secondary ones.',
              'Fill in every field: services, service areas, hours, attributes, and a real description.',
              'Add genuine photos and keep them coming — active profiles outperform stale ones.',
              'Use Google Posts to stay visibly active, and answer the Q&A section yourself.',
            ],
          },
          {
            type: 'callout',
            text: 'If you do only one thing this month, fully complete and optimise your Google Business Profile. It’s the fastest local ranking lever there is, and it costs nothing but an afternoon.',
          },
        ],
      },
      {
        id: 'nap-consistency',
        heading: 'Keep your name, address and phone identical everywhere',
        blocks: [
          {
            type: 'p',
            text: 'Google cross-checks your business details across the web to decide whether you’re legitimate and where you operate. If your name, address and phone number (your “NAP”) are written three different ways across your site, your profile, Facebook and old directory listings, that inconsistency erodes confidence and can hold back your ranking.',
          },
          {
            type: 'p',
            text: 'Pick one exact format and make it identical everywhere — same abbreviations, same phone format, same suite number. It’s tedious, unglamorous work, and it’s one of the most reliable local SEO fixes there is.',
          },
        ],
      },
      {
        id: 'on-page-signals',
        heading: 'Give your website clear local signals',
        blocks: [
          {
            type: 'p',
            text: 'Your website still matters — it just needs to speak local. Page titles and headings should describe what you do and where, in the words customers actually type, rather than vague slogans. A page titled “Emergency Electrician — Newcastle & Lake Macquarie” tells both Google and a customer exactly what they’ll get; “Powering Your Future” tells them nothing.',
          },
          {
            type: 'list',
            items: [
              'Put your service + location in page titles, headings and the first paragraph — naturally, not stuffed.',
              'Create a dedicated page for each core service and each main area you serve.',
              'Add LocalBusiness structured data so search engines can read your details cleanly.',
              'Make sure the site is fast and works one-handed on a phone — most local searches are mobile.',
            ],
          },
        ],
      },
      {
        id: 'reviews-and-local',
        heading: 'Reviews feed local ranking too',
        blocks: [
          {
            type: 'p',
            text: 'Local SEO and reputation aren’t separate projects. A steady flow of recent, genuine Google reviews is both a ranking signal and the deciding factor for a customer choosing between the three businesses in the map pack. If you’re serious about local visibility, an automated review habit belongs in the plan alongside the technical work — the two reinforce each other.',
          },
          {
            type: 'p',
            text: 'It’s worth understanding why Google leans on reviews so heavily for local results. Unlike a national search, a local search has real-world stakes — someone is about to let a stranger into their home or trust them with their health. Recent reviews are the strongest public proof Google has that a business is active, legitimate and worth showing to a nearby searcher. Volume, recency and your replies all feed that judgement, which is why a business that reviews consistently tends to climb while one that went quiet a year ago slides.',
          },
        ],
      },
      {
        id: 'how-long',
        heading: 'How long does local SEO take?',
        blocks: [
          {
            type: 'p',
            text: 'Be wary of anyone promising page-one rankings in 30 days — local SEO compounds over months, not days. That said, the fastest wins are genuinely fast: fully optimising your Business Profile and fixing NAP inconsistencies can show movement within weeks, because they’re signals Google can re-read quickly. The on-page and content work builds more slowly but lasts.',
          },
          {
            type: 'p',
            text: 'The right sequence is: fix the profile, fix the basics, then build. A focused SEO cleanup gets the foundations right — structure, speed, local relevance and profile consistency — so the slower compounding work has something solid to stand on.',
          },
        ],
      },
      {
        id: 'where-to-start',
        heading: 'Where to start this week',
        blocks: [
          {
            type: 'p',
            text: 'You don’t need a huge budget to make progress — you need the right order. Complete your Google Business Profile fully, make your NAP identical everywhere, rewrite your key page titles to say what you do and where, and turn on a simple habit of asking every happy customer for a review. Those four things alone put you ahead of most local competitors.',
          },
          {
            type: 'p',
            text: 'If you’d rather see exactly where you stand first, our SEO audit shows where you rank now, what’s technically blocking you, and whether your Business Profile is quietly costing you local calls — and the findings are yours to keep.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What’s the difference between local SEO and regular SEO?',
        a: 'Regular SEO competes for rankings nationally or globally; local SEO competes for “near me” and city-based searches, where Google shows a map pack of nearby businesses above the normal results. Local SEO leans heavily on your Google Business Profile, reviews and NAP consistency — levers a small business can directly control.',
      },
      {
        q: 'Do I need a website for local SEO, or is a Google Business Profile enough?',
        a: 'A fully optimised Business Profile can get you into the map pack on its own, and it’s the first thing to fix. But a fast, locally-relevant website reinforces those signals and converts the visitors your profile sends — the two work best together.',
      },
      {
        q: 'How much does local SEO cost for a small business?',
        a: 'The highest-impact steps — completing your profile, fixing NAP, rewriting titles, asking for reviews — cost mostly time. Where paid help earns its keep is a proper cleanup of the technical foundations and an ongoing programme. We treat SEO as ongoing rather than a one-time pass, because it compounds.',
      },
      {
        q: 'Why am I not showing up in the map pack?',
        a: 'The usual culprits are an incomplete or wrongly-categorised Business Profile, inconsistent NAP details across the web, thin local relevance on your website, or too few recent reviews. An audit will pinpoint which of these is holding you back.',
      },
    ],
  },
}

/** Newest-first for the index grid. Add new slugs to the FRONT. */
export const POST_ORDER = [
  'marketing-agency-vs-freelancer-vs-diy',
  'wix-vs-custom-website',
  'local-seo-guide',
  'get-more-google-reviews',
  'website-that-generates-leads',
]
