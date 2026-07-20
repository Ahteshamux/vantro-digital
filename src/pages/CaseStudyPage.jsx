import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import ContactSection from '../components/ContactSection'
import { Check, ArrowRight } from '../components/ui/Icons'
import { EASE, viewportOnce } from '../lib/motion'
import { CASE_STUDY_PAGES, CASE_STUDY_ORDER } from '../content/casestudies'

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

function Section({ tag, title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={rise}
      className="border-t border-card-border/60 py-14 md:py-18"
    >
      <div className="container-page grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-16">
        <div>
          <div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-warm-grey-light">
            {tag}
          </div>
          {title && (
            <h2 className="mt-3 text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-ink md:text-[26px]">
              {title}
            </h2>
          )}
        </div>
        <div>{children}</div>
      </div>
    </motion.section>
  )
}

/**
 * One template for every case study page (docs 05).
 *
 * Order is deliberate and matches the teardown's arc: the result is the H1,
 * three stat callouts sit ABOVE any narrative because most visitors skim
 * before they read, then Partnership → Solution → Results → Takeaway tells
 * it as a before/during/after/lesson story rather than a spec sheet.
 */
export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = CASE_STUDY_PAGES[slug]

  if (!data) return <Navigate to="/404" replace />

  // A stat with no value renders a muted dash — see the honesty note in
  // content/casestudies.js. Never collapse these; the gap is the honest state.
  const others = CASE_STUDY_ORDER.filter((s) => s !== slug)

  return (
    <>
      <PageHero page={data} showCta={false} />

      {/* Stat callouts — numbers before narrative */}
      <section className="border-b border-card-border/60 bg-[#F1EFE9] py-10 md:py-12">
        <div className="container-page grid gap-8 sm:grid-cols-3">
          {data.stats.map((s) => (
            <div key={s.label}>
              <div className="text-[32px] font-bold leading-none tracking-[-0.03em] text-ink md:text-[40px]">
                {s.value ?? <span className="text-warm-grey-light">—</span>}
              </div>
              <div className="mt-2.5 text-[13.5px] text-warm-grey">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The work itself */}
      <section className="py-12 md:py-16">
        <div className="container-page">
          {/* Full screenshot, uncropped — see the note in CaseStudyCard. */}
          <div className="rounded-3xl bg-[#E9E6DF] p-4 md:p-8">
            <img
              src={data.image}
              alt={`${data.client} — ${data.industry}`}
              className="mx-auto h-auto w-full rounded-xl border border-black/10 bg-white object-contain shadow-[0_10px_34px_rgba(0,0,0,0.14)]"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {data.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-card-border bg-white px-3 py-1 text-[12.5px] font-medium text-warm-grey"
              >
                {t}
              </span>
            ))}
            <span className="rounded-full bg-lime/25 px-3 py-1 text-[12.5px] font-bold text-ink">
              Stage: {data.stage}
            </span>
          </div>
        </div>
      </section>

      <Section tag="The partnership" title="Where they started">
        <p className="max-w-2xl text-[16px] leading-relaxed text-warm-grey">{data.partnership}</p>
      </Section>

      <Section tag="The solution" title="What we built">
        <div className="grid gap-5 sm:grid-cols-2">
          {data.solution.map((s) => (
            <div key={s.title} className="rounded-2xl bg-[#F1EFE9] p-6">
              <div className="text-[15px] font-bold text-ink">{s.title}</div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-warm-grey">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tag="The results" title="What changed">
        <ul className="max-w-2xl space-y-3.5">
          {data.results.map((r) => (
            <li key={r} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-lime text-ink">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-[15.5px] leading-relaxed text-ink">{r}</span>
            </li>
          ))}
        </ul>

        {data.liveUrl && (
          <a
            href={data.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-ink"
          >
            Visit the live site
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        )}
      </Section>

      <Section tag="The takeaway">
        <p className="max-w-2xl text-[17px] leading-relaxed text-ink">{data.takeaway}</p>
      </Section>

      {/* Other studies — invites the reader to keep reading proof */}
      <section className="border-t border-card-border/60 py-14 md:py-18">
        <div className="container-page">
          <div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-warm-grey-light">
            Also worth seeing
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {others.map((s) => {
              const o = CASE_STUDY_PAGES[s]
              return (
                <Link
                  key={s}
                  to={`/work/${s}`}
                  className="group rounded-2xl border border-card-border bg-white p-6 transition-shadow hover:shadow-card-hover"
                >
                  <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-warm-grey-light">
                    {o.client} · {o.industry}
                  </div>
                  <div className="mt-3 text-[17px] font-bold leading-snug text-ink">
                    {o.title[0]}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-ink">
                    Read
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
