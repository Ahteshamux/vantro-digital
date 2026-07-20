# Site Structure — Vantro Digital

Current routes are defined in `src/App.jsx`; content in `src/content/site.js`, `subpages.js`, `casestudies.js`.

## Current URL hierarchy

```
/                               Home
/how-we-work                    Process
/work                           Portfolio hub
  /work/thepetnest              Case study — Build
  /work/getdentalleads          Case study — Rank
  /work/safety-supplies-usa     Case study — Grow
/about                          Founder / about
/contact                        Contact + audit form
/services                       Services hub
  /services/complete-system            All four stages
  /services/website-design             Build
  /services/custom-funnel              Build
  /services/seo-cleanup                Rank
  /services/google-meta-ads            Rank
  /services/campaign-landing-pages     Rank
  /services/landing-page-cro           Grow
  /services/lead-capture-automation    Automate
  /services/reviews-reputation         Automate
  /services/rebooking-winback          Automate
/industries                     Industries hub
  /industries/home-services
  /industries/healthcare
  /industries/trucking-logistics
  /industries/real-estate
/packages                       Pricing (tier deep-links resolve here)
  /packages/:slug
*                               404
```

**Total indexable: 22 URLs** (excluding 404 and the three `/packages/:slug` aliases, which resolve to the same page).

## Added by this plan

```
/blog                           Article index          ← NEW
  /blog/:slug                   Article                ← NEW (3 live, more queued)
```

**New total: 26 URLs** at Phase 2 completion.

## Assessment against the agency template

| Template section | Status | Note |
|---|---|---|
| Home | ✅ | |
| /services + children | ✅ | 10 pages, exceeds the template's ask |
| /industries + children | ✅ | 4 pages |
| /work + case studies | ✅ | 3 studies — template asks 3–5 |
| /about | ⚠️ Partial | Exists, but `FounderNote` is not rendered on it; no `/about/team` (correct — solo) |
| /insights or /blog | ❌ → ✅ | Added by this plan |
| /contact | ✅ | |
| /process | ✅ | `/how-we-work` |
| /faq | ⚠️ | FAQs exist as blocks on contact + home, no standalone page. Correct per doc 08 — objections belong at the point of hesitation, not on a page nobody visits |

**Verdict: architecture is not the problem.** It already matches the template better than most live agency sites. Every issue in `SEO-STRATEGY.md` is about crawlability and metadata, not structure.

## Duplicate / thin content risks

| Risk | Detail | Action |
|---|---|---|
| `/packages/:slug` → same page | Three URLs render identical content | Canonical all three → `/packages`, or drop the child routes from the sitemap. **Currently they are not in the sitemap** — correct |
| Service page depth | 10 pages driven by one template; thin pages look templated | Enforce 800-word minimum per the template |
| Industry page overlap | Four pages arguing the same "manual ops lose revenue" thesis | Each needs vertical-specific proof, not re-skinned copy |
| Site-wide canonical → `/` | `index.html` canonical points every route at home | **Fixed in Phase 1** by per-route canonical |

## Internal linking plan

Hub-and-spoke, with the case studies as the connective tissue:

```
Home ──► /services ──► service page ──► related case study ──► /contact
  │                         ▲                    │
  └──► /industries ─────────┘                    │
              │                                  ▼
              └──────► /blog/article ──────► service page
```

Rules:
1. Every **article** links to ≥1 service page and ≥1 case study (blog traffic is worthless if it dead-ends).
2. Every **service page** links to the case study proving that stage.
3. Every **case study** links to its stage's service page — already implemented via the `stage` field.
4. Every **industry page** links to the service pages relevant to that vertical.
5. Case studies cross-link each other — already implemented ("Also worth seeing").

## Sitemap policy

- Include: all 22 current + blog index + published articles
- Exclude: `/packages/:slug` aliases, 404
- Priority: home 1.0 · services/work hubs 0.9 · service + case study pages 0.8 · industries 0.7 · articles 0.6
- Regenerate on every content add — see `scripts/` if automated later
