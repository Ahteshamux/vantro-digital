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

const COLORS = {
  ink: 'bg-[#1E1E1C] text-white',
  orange: 'bg-[#F0682F] text-white',
  lime: 'bg-[#D3EB4F] text-ink',
  sky: 'bg-[#E3ECF7] text-ink',
  purple: 'bg-[#C9A8F0] text-ink',
}

// Container drives the stagger; each pill springs in from above its slot.
const clusterV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.03 } },
}

function pillV(rot) {
  return {
    // Start above the resting spot and rotated further from its final angle.
    hidden: { opacity: 0, y: -55, rotate: rot + (rot > 90 ? 20 : 15) },
    // Drop and settle — spring gives the overshoot-and-settle bounce.
    show: {
      opacity: 1,
      y: 0,
      rotate: rot,
      transition: { type: 'spring', stiffness: 220, damping: 13, mass: 0.7 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }
}

function Pill({ label, slot, className = '', style }) {
  return (
    <motion.div
      variants={pillV(slot.rot)}
      whileHover={{ y: -4, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } }}
      style={{ ...style, transformOrigin: 'center' }}
      className={`w-max max-w-[240px] cursor-default select-none rounded-full px-5 py-2.5 text-[14px] font-semibold leading-tight shadow-[0_6px_18px_rgba(0,0,0,0.10)] ${COLORS[slot.color]} ${className}`}
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
              className="pointer-events-none absolute -left-3 -right-3 -top-2 -bottom-2 h-[calc(100%+16px)] w-[calc(100%+24px)]"
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
              className="relative mx-auto hidden h-[300px] w-full max-w-[900px] lg:block"
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
