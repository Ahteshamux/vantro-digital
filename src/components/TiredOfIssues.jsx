import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import CTAPair from './ui/CTAPair'
import { ISSUES } from '../content/site'

/**
 * "Tired of these issues" — animated pain-point cluster (replaces Comparison).
 *
 * Tabs = the three alternatives to us (Agencies / Freelancers / DIY). Each tab
 * drops a scattered cluster of pain pills that "fall and settle" into place,
 * then straighten on hover. Switching tabs fades the current set out and drops
 * the next one in with the same motion. Layout is shared across tabs via
 * ISSUES.slots, so only the words change.
 */

// Brand palette only — ink, the two limes, and white. No orange or purple:
// the cluster reads as ours, not the reference's, while the ink/lime contrast
// still gives the scattered pills enough variety.
const COLORS = {
  ink: 'bg-ink text-white',
  lime: 'bg-lime text-ink',
  limeSoft: 'bg-lime-soft text-ink',
  white: 'bg-white text-ink border border-card-border',
}

// Container drives the stagger between pills.
const clusterV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
  exit: { transition: { staggerChildren: 0.03 } },
}

function pillV(rot) {
  return {
    // Start a little above the resting spot, rotated slightly further.
    hidden: { opacity: 0, y: -38, rotate: rot + (rot > 90 ? 12 : 9) },
    // Smooth ~0.5s settle — a soft ease-out curve, not a bouncy spring.
    show: {
      opacity: 1,
      y: 0,
      rotate: rot,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }
}

function Pill({ label, slot, className = '', style }) {
  return (
    <motion.div
      variants={pillV(slot.rot)}
      whileHover={{ y: -5, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } }}
      style={{ ...style, transformOrigin: 'center' }}
      className={`w-max cursor-default select-none whitespace-nowrap rounded-full px-6 py-3.5 text-[15px] font-semibold leading-tight shadow-[0_8px_22px_rgba(0,0,0,0.12)] md:text-[16.5px] ${COLORS[slot.color]} ${className}`}
    >
      {label}
    </motion.div>
  )
}

export default function TiredOfIssues() {
  const [tab, setTab] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const seg = ISSUES.segments[tab]

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        {/* Heading with the hand-drawn circle on the last word */}
        <h2 className="text-center text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-ink md:text-[62px]">
          {ISSUES.headline[0]}{' '}
          <span className="relative inline-block">
            {ISSUES.headline[1]}
            <svg
              className="pointer-events-none absolute -left-7 -right-7 -top-4 -bottom-5"
              viewBox="0 0 220 90"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              {/* Loose, open, hand-drawn oval — starts and ends slightly apart. */}
              <path
                d="M150 12 C60 2 12 22 10 46 C8 74 78 86 140 84 C196 82 220 60 206 38 C196 22 150 12 120 12"
                stroke="#D3EB4F"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="Alternatives to Vantro Digital"
          className="mx-auto mt-10 flex max-w-[560px] items-center justify-between gap-1 rounded-full bg-[#F1EFE9] p-1.5"
        >
          {ISSUES.tabs.map((label, i) => (
            <button
              key={label}
              role="tab"
              aria-selected={i === tab}
              onClick={() => setTab(i)}
              className={`flex-1 rounded-full px-4 py-2.5 text-[14.5px] font-semibold transition-colors duration-200 ${
                i === tab ? 'bg-[#C9A8F0] text-ink shadow-sm' : 'text-warm-grey hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cluster */}
        <div ref={ref} className="mt-12 md:mt-14">
          <AnimatePresence mode="wait">
            {/* Desktop: scattered absolute cascade */}
            <motion.div
              key={`d-${tab}`}
              variants={clusterV}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              exit="exit"
              className="relative mx-auto hidden h-[450px] w-full max-w-[960px] lg:block"
            >
              {seg.items.map((label, i) => (
                <Pill
                  key={label}
                  label={label}
                  slot={ISSUES.slots[i]}
                  className="absolute"
                  style={{ left: ISSUES.slots[i].left, top: ISSUES.slots[i].top }}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {/* Mobile / tablet: centered wrap, rotations kept, same drop-in */}
            <motion.div
              key={`m-${tab}`}
              variants={clusterV}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              exit="exit"
              className="flex flex-wrap items-center justify-center gap-3 lg:hidden"
            >
              {seg.items.map((label, i) => (
                <Pill key={label} label={label} slot={ISSUES.slots[i]} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Resolution + CTA */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-[17px] font-medium leading-relaxed text-ink md:text-[19px]">
            {ISSUES.resolveLine}
          </p>
          <CTAPair align="center" className="mt-7" />
        </div>
      </div>
    </section>
  )
}
