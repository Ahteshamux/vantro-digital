import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { Star } from './ui/Icons'
import upworkLogo from '../assets/images/upwork-logo.png'
import { EASE, viewportOnce } from '../lib/motion'
import { STATS } from '../content/site'

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

function StatCard({ stat }) {
  // A null target is an unfilled TODO — count from 0 but render a dash.
  const hasValue = stat.target != null
  const { ref, value } = useCountUp(hasValue ? stat.target : 0, { duration: 1400 })
  const rounded = Math.round(value)
  const shown = hasValue ? (stat.target >= 1 ? Math.max(1, rounded) : rounded) : '—'

  return (
    <motion.div
      ref={ref}
      variants={rise}
      className="relative flex min-h-[210px] flex-col justify-between rounded-2xl bg-[#F1EFE9] p-7 md:min-h-[230px] md:p-8"
    >
      {stat.badge && (
        <span className="absolute right-6 top-6 rounded-md bg-lime/40 px-2.5 py-1 text-[11.5px] font-semibold text-ink">
          {stat.badge}
        </span>
      )}

      <div className={`flex items-baseline gap-0.5 ${hasValue ? 'text-ink' : 'text-warm-grey-light'}`}>
        <span className="text-[52px] font-bold leading-[0.9] tracking-[-0.04em] tabular-nums md:text-[62px]">
          {shown}
        </span>
        {hasValue && stat.suffix && (
          <span className="text-[32px] font-bold leading-none tracking-[-0.03em] md:text-[38px]">
            {stat.suffix}
          </span>
        )}
      </div>

      <p className="mt-8 text-[14px] leading-snug text-warm-grey">{stat.label}</p>
    </motion.div>
  )
}

/** Rating + reviewer stack. Shows a muted prompt until real values exist. */
function TrustWidget() {
  const { rating, outOf, count, source, fallback } = STATS.trust
  const hasRating = rating != null

  return (
    <motion.div
      variants={rise}
      className="mt-6 flex flex-col items-start gap-5 rounded-2xl border border-card-border bg-white px-7 py-5 sm:flex-row sm:items-center sm:gap-7"
    >
      <div className="flex items-center gap-4">
        <img
          src={upworkLogo}
          alt="Upwork"
          width="36"
          height="36"
          loading="lazy"
          decoding="async"
          className="h-9 w-9 flex-none object-contain"
        />
        <div>
          <span className="flex gap-0.5 text-[#FFB400]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4" />
            ))}
          </span>
          {hasRating ? (
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-[30px] font-bold leading-none tracking-[-0.03em] text-ink">
                {rating}
              </span>
              <span className="text-[13px] text-warm-grey-light">/ {outOf}</span>
            </div>
          ) : (
            <div className="mt-1.5 text-[13.5px] italic text-warm-grey-light">{fallback}</div>
          )}
        </div>
      </div>

      <span className="hidden h-11 w-px bg-card-border sm:block" />

      <div className="flex items-center gap-3.5">
        <span className="flex -space-x-2.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-cream text-[11px] font-bold text-warm-grey-light"
            >
              —
            </span>
          ))}
        </span>
        <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-warm-grey">
          {count != null ? (
            <>
              Based on <span className="text-ink">{count}</span> reviews on {source}
            </>
          ) : (
            <>Client reviews on {source}</>
          )}
        </span>
      </div>
    </motion.div>
  )
}

export default function StatsBand() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header: heading left, CTA right */}
          <div className="grid items-end gap-6 lg:grid-cols-[1.55fr_auto] lg:gap-14">
            <motion.div variants={rise}>
              <span className="inline-flex items-center rounded-md bg-lime/30 px-2.5 py-1 text-[12.5px] font-medium text-ink">
                {STATS.tag}
              </span>
              <h2 className="mt-5 max-w-2xl text-[30px] font-bold leading-[1.14] tracking-[-0.025em] text-ink md:text-[38px]">
                {STATS.headline}
              </h2>
            </motion.div>

            <motion.a
              variants={rise}
              href={STATS.ctaHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-[15px] font-semibold text-white lg:justify-self-end"
            >
              {STATS.cta}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </motion.a>
          </div>

          {/* Stat cards — middle one wider, per the reference */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr]">
            {STATS.cards.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>

          <TrustWidget />
        </motion.div>
      </div>
    </section>
  )
}
