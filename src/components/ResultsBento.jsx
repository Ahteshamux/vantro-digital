import { motion } from 'framer-motion'
import { viewportOnce, EASE } from '../lib/motion'
import { RESULTS } from '../content/site'

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/**
 * Decorative lime area chart — a smooth directional curve with a gradient
 * fill. It shows the DIRECTION of a real trend (revenue up, leads up); it is
 * not plotted from labelled data, so it's illustrative, not a precise claim.
 */
function AreaChart({ dir = 'up' }) {
  const line =
    dir === 'up'
      ? 'M0,64 C36,60 64,50 104,44 C150,37 188,26 240,8'
      : 'M0,14 C40,20 70,30 108,30 C150,30 190,52 240,78'
  const area = `${line} L240,90 L0,90 Z`
  const id = `g-${dir}`
  return (
    <svg viewBox="0 0 240 90" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4E84C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4E84C" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill={`url(#${id})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: EASE }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="#B7D62B"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1, ease: EASE }}
      />
    </svg>
  )
}

function Card({ card }) {
  return (
    <motion.div
      variants={rise}
      className="overflow-hidden rounded-3xl border border-card-border bg-white shadow-card"
    >
      {card.kind === 'chart' ? (
        <div className="flex h-full flex-col">
          <p className="p-6 text-[14.5px] leading-relaxed text-warm-grey md:p-7">{card.label}</p>
          <div className="mt-auto h-28 w-full md:h-32">
            <AreaChart dir={card.dir} />
          </div>
        </div>
      ) : (
        <div className="p-6 md:p-7">
          <div className="text-[44px] font-bold leading-none tracking-[-0.03em] text-ink md:text-[54px]">
            {card.value}
            {card.suffix && <span className="text-[26px] font-bold md:text-[30px]">{card.suffix}</span>}
          </div>
          <p className="mt-4 text-[14.5px] leading-relaxed text-warm-grey">{card.label}</p>
        </div>
      )}
    </motion.div>
  )
}

export default function ResultsBento() {
  // Split into two masonry columns; the right column is offset down.
  const left = RESULTS.cards.filter((_, i) => i % 2 === 0)
  const right = RESULTS.cards.filter((_, i) => i % 2 === 1)

  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        {/* Heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[40px] font-bold leading-[1.02] tracking-[-0.02em] text-ink md:text-[56px]">
            <span className="block">{RESULTS.headline[0]}</span>
            <span className="block">{RESULTS.headline[1]}</span>
            <span className="relative inline-block text-warm-grey">
              {RESULTS.headline[2]}
              <svg
                className="pointer-events-none absolute -left-6 -right-6 -top-3 -bottom-4"
                viewBox="0 0 260 96"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M178 14 C70 3 16 26 13 50 C10 80 92 92 164 90 C232 88 256 62 238 38 C224 20 176 12 140 13"
                  stroke="#D4E84C"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-5">
            {left.map((c) => (
              <Card key={c.label} card={c} />
            ))}
          </div>
          <div className="flex flex-col gap-5 sm:mt-12">
            {right.map((c) => (
              <Card key={c.label} card={c} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
