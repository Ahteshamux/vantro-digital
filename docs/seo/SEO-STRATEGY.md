# SEO Strategy — Vantro Digital

**Domain:** vantrodigital.com (purchased, not yet live)
**Prepared:** 2026-07-20
**Template applied:** `agency.md` (agency/consultancy)
**Mode:** New-site planning. No live URL, so no crawl data, no baseline rankings, no competitive gap analysis from real SERP data.

---

## 0. Read this first — the finding that reorders everything

The site is a **client-side-rendered React SPA with no prerendering**. That single fact outranks every other recommendation in this document, because it caps the ceiling on all of them.

What I verified in the repo:

| Check | Status | Evidence |
|---|---|---|
| Server-rendered / prerendered HTML | ❌ None | No SSR or prerender dependency in `package.json`; `vite build` emits one `index.html` |
| Unique `<title>` per route | ❌ No | `grep` for `document.title` / Helmet returns nothing — all 20+ routes share one title |
| Unique meta description per route | ❌ No | Same — one static tag in `index.html` |
| `robots.txt` | ❌ Missing | Not in `public/` |
| `sitemap.xml` | ❌ Missing | Not in `public/` |
| Structured data (JSON-LD) | ❌ None | No schema anywhere in `src/` |
| Canonical tags | ⚠️ One | Site-wide canonical → `/`, which is wrong for every non-home route |
| SPA routing fallback | ✅ Present | `public/.htaccess` rewrites to `index.html` |
| Asset caching / compression | ✅ Good | `.htaccess` sets immutable caching + DEFLATE |

**Why this matters more than usual for you specifically:** you sell SEO audits as one of two lead magnets. The first thing a technically-literate prospect does is view-source on your site. Right now every page returns an empty `<div id="root">` and an identical title tag. That is the exact finding you would put in *their* audit report.

Google does render JavaScript, so the site will eventually index — but with one title and one description across every URL, Google has no distinct signal per page, and near-duplicate title/description across a whole domain is a well-known ranking suppressant. Bing and most AI crawlers (Perplexity, ChatGPT's fetcher) render JS far less reliably than Google.

**Consequence for the blog:** publishing articles on this stack without fixing per-route metadata means every article competes as the same page. Fix metadata *before* or *with* the blog launch, not after. This is sequenced into Phase 1.

---

## 1. Business & discovery

| Field | Value |
|---|---|
| Business type | Agency / consultancy (design + marketing + automation) |
| Model | Project-based, no required retainer |
| Offer | Four stages: Build → Rank → Grow → Automate |
| ICP | Small business owners, **$300K–$1.5M annual revenue** |
| Verticals | Home services, healthcare, trucking & logistics, real estate |
| Geography | Not stated — see risk R3 |
| Lead magnets | Free SEO audit, free website design audit |
| Pricing | $2,500 / $5,500 / $9,000 tiers |
| Differentiator | One operator accountable end-to-end; design and automation sold as one system |
| Proof today | 3 case studies (2 with client-reported numbers, 1 qualitative) |

### KPIs to instrument (none exist yet)
1. Organic sessions → service pages
2. Audit-form submissions attributed to organic
3. Case-study page views (the strongest mid-funnel asset)
4. Blog → service page click-through
5. Branded vs non-branded query split

---

## 2. Competitive analysis

⚠️ **Method disclosure.** No DataForSEO, Ahrefs, or Moz MCP tools are connected to this session, and the site is not live. I did **not** fetch live SERP data, real competitor traffic, or actual domain authority scores. Everything below is a *structural* analysis based on the agency template and the teardown docs already in the repo (`06`–`15`), not measured competitive intelligence.

**Do not present these as researched numbers to anyone.** Before acting on this section, run `/seo-dataforseo` or connect Ahrefs to replace assumption with data.

### Competitor set you actually face

You compete in three different arenas, and they need different responses:

| Arena | Who | Their advantage | Your wedge |
|---|---|---|---|
| **A. Local generalist web shops** | "[City] web design" firms | Local pack presence, GBP reviews, proximity | You sell the operations layer they don't build |
| **B. Vertical specialists** | GetDentalLeads-type niche agencies | Deep vertical authority, exact-match relevance | You cross verticals with one system |
| **C. Freelancers / marketplaces** | Upwork, Fiverr, solo designers | Price, low commitment | You're accountable for outcomes, not deliverables |

### The strategic tension you must resolve first

Doc 13 in your repo already flags this and it is unresolved: **Lawnline's entire advantage came from serving one vertical exclusively.** You serve four. Four verticals with one operator means:

- Four sets of industry keywords, none of which you can dominate
- Case studies that don't reinforce each other (a dentist reading a trucking case study discounts it)
- 4× the content burden for a solo operator

**Recommendation: lead with home services, treat the other three as supported-but-not-promoted.** Rationale: highest search volume for "speed to lead" pain, most acute pain (customers call three companies), lowest content sophistication among competitors, and it's the vertical where your Grow + Automate stages differentiate hardest. Keep the other three as pages that exist and convert referral traffic — just don't fund content against them until home services ranks.

If you disagree, that's a legitimate business call — but pick one deliberately rather than defaulting to four.

### E-E-A-T gap vs. a typical established agency

| Signal | Established agency | You today | Fix |
|---|---|---|---|
| Named author with credentials | ✅ | ❌ No author entity anywhere | Phase 1 — founder bio + Person schema |
| Case studies with metrics | ✅ | ⚠️ 2 of 3 | Phase 1 — get the CRO number |
| Third-party reviews linked | ✅ | ❌ `upworkUrl` is null | Phase 1 — one string, free |
| Physical address / LocalBusiness | ✅ | ❌ None | See R3 |
| Years in business | ✅ | ✅ 5+ stated | — |
| Original research | ✅ | ❌ | Phase 4 |

---

## 3. Site architecture

Current routes already map closely to the agency template. See `SITE-STRUCTURE.md` for the full URL table and the gaps.

Headline: architecture is **good**. The problem is not structure, it's that none of it is crawlable as distinct pages.

---

## 4. Content strategy

Full article list, keywords, and intent mapping in `CONTENT-CALENDAR.md`.

**Governing principle, taken from your own repo** (`site.js`, NAV comment): *"a stub behind a nav link costs more trust than the link earns."* Applied to the blog: ship 3 complete articles, not 12 thin ones. The calendar queues the rest.

### The four content angles that fit your ICP
Per doc 06, these repeat because they work:

1. **Checklist / how-to** — "7 signs your workflow needs automation." Low effort for you, functions as a cold-outreach link instead of a pitch.
2. **Objection handling** — "Why one operator beats hiring a designer and an ads agency separately." Doubles as sales collateral.
3. **Category education** — "SEO or Google Ads first?" Earns the right to sell by being useful first.
4. **Operational / retention** — aimed at existing clients, supports referrals.

### E-E-A-T build plan
- Founder bio page with real photo (currently an initials circle — flagged TODO in `site.js`)
- `Person` schema with `sameAs` → LinkedIn, Upwork
- Author byline on every article
- Link out to Upwork reviews (verification a skeptic can check — a screenshot is not equivalent, see §6)

---

## 5. Technical foundation

### Priority 0 — blocking (Phase 1, week 1)
1. **Per-route `<title>`, meta description, canonical.** Cheapest high-impact fix available.
2. **`robots.txt`** — shipped with this plan.
3. **`sitemap.xml`** — shipped with this plan.
4. **Prerendering.** Recommend `vite-react-ssg` or `react-snap` to emit static HTML per route at build time. This is the fix that makes the site legible to non-Google crawlers and AI search.

### Priority 1 — schema (Phase 1–2)
| Page type | Schema |
|---|---|
| Home | `Organization` + `ProfessionalService` |
| Service pages | `Service` |
| Case studies | `Article` + `Organization` (client) |
| Blog articles | `BlogPosting` + `Person` author |
| FAQ blocks | `FAQPage` |
| About | `Person` with `sameAs` |

### Core Web Vitals
Current bundle: **419 KB JS (130 KB gzip)**, plus ~1 MB of case study PNGs. Targets:

| Metric | Target | Current risk |
|---|---|---|
| LCP | < 2.5s | ⚠️ Framer Motion + 3 large PNGs above fold on `/work` |
| INP | < 200ms | ✅ Likely fine |
| CLS | < 0.1 | ⚠️ Images lack explicit width/height |

Actions: convert the three case study PNGs to WebP (likely 70%+ smaller), add explicit `width`/`height` to prevent layout shift, keep `loading="lazy"` below the fold.

### AI search / GEO readiness
Prerendering is the prerequisite — AI crawlers are worse at JS than Google. Then: quotable one-sentence expertise statements, `FAQPage` schema, consistent entity info across LinkedIn/Upwork/GBP.

---

## 6. Risks

| ID | Risk | Severity | Mitigation |
|---|---|---|---|
| **R1** | CSR SPA caps all SEO outcomes | 🔴 High | Prerender in Phase 1 |
| **R2** | Four verticals, one operator — content spread too thin to rank anywhere | 🔴 High | Pick home services as lead vertical |
| **R3** | No physical address → no local pack eligibility, no `LocalBusiness` schema | 🟠 Med | Decide: national positioning, or get a real address and register GBP. You sell GBP optimization; not having one is an obvious credibility gap |
| **R4** | Review screenshots used instead of a link to Upwork | 🟠 Med | Screenshots are not independently verifiable and skeptics discount them. Add `upworkUrl` — it's free and already exists |
| **R5** | New domain, zero authority | 🟠 Med | Expect 6–9 months before non-branded rankings. Do not promise clients faster than you can deliver yourself |
| **R6** | Case study numbers are client-reported, unverified | 🟠 Med | Keep evidence retrievable; already noted in `casestudies.js` |
| **R7** | Solo capacity — content cadence slips first when client work lands | 🟡 Low | 2 articles/month is the realistic ceiling. Plan for it rather than missing 4 |

---

## 7. KPI targets

⚠️ **These are modelled projections for a brand-new domain with zero authority, not forecasts from data.** Baseline is zero on every row because the site is not live. Treat as planning hypotheses to revise once Search Console has 30 days of real data.

| Metric | Baseline | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| Organic sessions / mo | 0 | 40–90 | 200–450 | 700–1,600 |
| Ranking keywords (top 100) | 0 | 25–60 | 120–250 | 350–700 |
| Top-10 keywords | 0 | 0–3 | 8–20 | 40–90 |
| Indexed pages | 0 | 22 | 32 | 45 |
| Referring domains | 0 | 3–8 | 12–25 | 30–60 |
| Organic audit requests / mo | 0 | 0–2 | 3–8 | 10–25 |
| LCP | — | < 2.5s | < 2.0s | < 2.0s |

**The honest version:** months 1–4 will look like almost nothing is happening. That is normal for a new domain and is the single most common reason self-funded SEO gets abandoned right before it starts working. Your revenue in that window comes from outreach — SEO is the compounding asset underneath it, not the lead source yet.

---

## 8. Success criteria

**Phase 1 (wk 1–4):** every route has a unique title/description/canonical; robots + sitemap live; GSC + GA4 verified; prerendering shipped; Organization + Service schema live.
**Phase 2 (wk 5–12):** 3 articles published; all 10 service pages ≥ 800 words; blog → service internal linking; GBP decision made.
**Phase 3 (wk 13–24):** 10+ articles; first non-branded top-20 ranking; 10+ referring domains; CWV green.
**Phase 4 (mo 7–12):** original research published; AI citation appearing for brand terms; organic producing qualified audit requests monthly.
