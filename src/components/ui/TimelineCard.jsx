import { motion } from 'framer-motion'
import { Check } from './Icons'
import { EASE } from '../../lib/motion'
import { PROCESS } from '../../content/site'

const DOTS = ['#5B8DEF', '#8FA31E', '#E0B341', '#C98BDB']

/**
 * Compact 30-day timeline for the How We Work hero.
 * Reuses PROCESS.steps so it can never drift from the section further down.
 */
export default function TimelineCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
      className="rounded-3xl border border-card-border bg-white p-6 shadow-card md:p-7"
    >
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-semibold text-ink">Your first 30 days</span>
        <span className="rounded-full bg-lime/30 px-2.5 py-1 text-[11.5px] font-bold text-ink">
          30 days
        </span>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.45 } } }}
        className="relative mt-6"
      >
        {/* Connector thread */}
        <motion.span
          aria-hidden
          variants={{
            hidden: { scaleY: 0 },
            show: { scaleY: 1, transition: { duration: 0.8, ease: EASE } },
          }}
          style={{ transformOrigin: 'top' }}
          className="absolute left-[7px] top-2 h-[calc(100%-28px)] w-px bg-card-border"
        />

        <div className="space-y-5">
          {PROCESS.steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, x: 10 },
                show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
              }}
              className="relative flex gap-4"
            >
              <span
                className="relative z-10 mt-1 h-[15px] w-[15px] flex-none rounded-full border-[3px] border-white"
                style={{ backgroundColor: DOTS[i] }}
              />
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-warm-grey-light">
                  {step.days}
                </div>
                <div className="mt-0.5 text-[15px] font-semibold text-ink">{step.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mt-6 flex items-center gap-2.5 border-t border-card-border pt-5"
      >
        <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-lime text-ink">
          <Check className="h-3 w-3" />
        </span>
        <span className="text-[13.5px] font-medium text-ink">
          Live system, handed over with docs
        </span>
      </motion.div>
    </motion.div>
  )
}
