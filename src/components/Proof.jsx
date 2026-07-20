import { motion } from 'framer-motion'
import { useGoToForm } from '../lib/useGoToForm'
import { SectionHeading } from './ui/Primitives'
import { ArrowRight, Star } from './ui/Icons'
import upworkLogo from '../assets/images/upwork-logo.png'
import { EASE, viewportOnce } from '../lib/motion'
import CaseStudyCard from './CaseStudyCard'
import { PROOF, CONVERSION, CASE_STUDIES } from '../content/site'

const card = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/**
 * Work entry, per docs 05 + 09:
 *   numbered · result-as-title · 3 stats ABOVE the narrative ·
 *   service tags · checkable external link.
 *
 * Stats with a null value render a muted dash — the layout holds, but no
 * number is invented.
 */
function WorkEntry({ item, index }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      variants={card}
      className="grid gap-6 border-t border-card-border pt-8 md:grid-cols-[auto_1fr_auto] md:gap-10"
    >
      {/* Number */}
      <div className="text-[13px] font-bold tabular-nums text-warm-grey-light md:w-12">{num}</div>

      {/* Body */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full bg-lime/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink">
            {item.kind}
          </span>
          <span className="text-[13px] text-warm-grey">
            {item.client} · {item.location}
          </span>
        </div>

        {/* The title IS the result */}
        <h3 className="mt-4 max-w-xl text-[21px] font-bold leading-[1.2] tracking-[-0.015em] text-ink md:text-[25px]">
          {item.title}
        </h3>

        {/* Numbers before narrative */}
        <dl className="mt-6 grid max-w-lg grid-cols-3 gap-4">
          {item.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd
                className={`text-[22px] font-bold leading-none tracking-[-0.02em] md:text-[26px] ${
                  s.value ? 'text-ink' : 'text-warm-grey-light'
                }`}
              >
                {s.value ?? '—'}
              </dd>
              <p className="mt-1.5 text-[12px] leading-tight text-warm-grey">{s.label}</p>
            </div>
          ))}
        </dl>

        <p className="mt-6 max-w-xl text-[14.5px] leading-relaxed text-warm-grey">{item.desc}</p>

        {/* Service tags reinforce full range across a thin portfolio */}
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-card-border bg-white px-2.5 py-1 text-[12px] font-medium text-ink"
            >
              {tag}
            </span>
          ))}
        </div>

        {item.href && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink"
          >
            {CONVERSION.workCta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        )}
      </div>

      {/* Visual */}
      <div className="hidden w-[200px] overflow-hidden rounded-2xl md:block lg:w-[260px]">
        <div className={`h-full min-h-[160px] bg-gradient-to-br ${item.grad}`}>
          <div className="h-full w-full opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_50%)]" />
        </div>
      </div>
    </motion.article>
  )
}

function Scarcity() {
  const s = PROOF.scarcity
  const goToForm = useGoToForm()
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={card}
      className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-card-border bg-white px-7 py-6 shadow-card sm:flex-row sm:items-center"
    >
      <div className="flex items-start gap-3.5">
        <span className="relative mt-1.5 flex h-2.5 w-2.5 flex-none items-center justify-center">
          <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-[#8FA31E]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8FA31E]" />
        </span>
        <div>
          <div className="text-[15px] font-bold text-ink">{s.line}</div>
          <p className="mt-1 max-w-xl text-[13.5px] leading-relaxed text-warm-grey">{s.detail}</p>
        </div>
      </div>
      <a
        href="/contact"
        onClick={goToForm}
        className="group inline-flex flex-none items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-black"
      >
        {s.cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </motion.div>
  )
}

export default function Proof() {
  const { rating, reviews, label } = PROOF.upwork
  const hasRating = rating != null && reviews != null

  // A case study needs a client and a real before→after to be worth showing.
  const featured = CASE_STUDIES.items.filter((c) => c.client && c.before && c.after)

  return (
    <section id="proof" className="scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <SectionHeading tag={PROOF.tag} title={PROOF.title} subtitle={PROOF.subtitle} />

        {hasRating && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={card}
            className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full border border-card-border bg-white px-5 py-2.5 shadow-card"
          >
            <img src={upworkLogo} alt="Upwork" width="20" height="20" className="h-5 w-5 flex-none object-contain" />
            <span className="flex gap-0.5 text-[#FFB400]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-[13.5px] text-warm-grey">
              <span className="font-semibold text-ink">{rating}</span> {label} ·{' '}
              <span className="font-semibold text-ink">{reviews}</span> reviews
            </span>
          </motion.div>
        )}

        {/* Tier 1 — featured case studies. Only renders entries with a real
            before→after result; half-filled slots are skipped entirely. */}
        {featured.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{ show: { transition: { staggerChildren: 0.14 } } }}
            className="mt-12 space-y-6"
          >
            {featured.map((item, i) => (
              <CaseStudyCard key={item.client} item={item} reverse={i % 2 === 1} />
            ))}
          </motion.div>
        )}

        {/* Tier 2 — lighter adjacent-work entries. */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 space-y-10"
        >
          {featured.length > 0 && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-grey-light">
              Also worth seeing
            </p>
          )}
          {PROOF.items.map((item, i) => (
            <WorkEntry key={item.title} item={item} index={i} />
          ))}
        </motion.div>

        <Scarcity />
      </div>
    </section>
  )
}
