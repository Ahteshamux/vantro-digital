import { motion } from 'framer-motion'
import { TagPill } from './ui/Primitives'
import { Check, ArrowRight } from './ui/Icons'
import { scaleIn, viewportOnce, EASE } from '../lib/motion'
import { PROBLEM } from '../content/site'

const row = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

export default function ProblemBand() {
  return (
    <section id="leak" className="scroll-mt-24 py-14 md:py-20">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          className="overflow-hidden rounded-4xl bg-charcoal px-7 py-12 md:px-14 md:py-16"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            {/* Left: the problem, then the promise */}
            <div className="flex flex-col justify-center">
              <TagPill tone="onDark">{PROBLEM.tag}</TagPill>

              <h2 className="mt-7 text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[40px]">
                {PROBLEM.headline}
                <span className="mt-2 block text-lime">{PROBLEM.promiseLead}</span>
              </h2>

              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-white/55">
                {PROBLEM.body}
              </p>
              <p className="mt-5 max-w-lg border-l-2 border-lime/60 pl-4 text-[15.5px] font-medium leading-relaxed text-white/85">
                {PROBLEM.emphasis}
              </p>
            </div>

            {/* Right: simple before → after. No chart. */}
            <div className="flex flex-col justify-center gap-4">
              {/* Before */}
              <div className="rounded-2xl border border-white/10 p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  Today
                </div>
                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  variants={{ show: { transition: { staggerChildren: 0.07 } } }}
                  className="mt-4 space-y-2.5"
                >
                  {PROBLEM.without.map((item) => (
                    <motion.li key={item} variants={row} className="flex items-center gap-3">
                      <span className="h-px w-3 flex-none bg-white/25" />
                      <span className="text-[14.5px] text-white/45 line-through decoration-white/20">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="h-5 w-5 rotate-90 text-lime/60" />
              </div>

              {/* After */}
              <div className="rounded-2xl border border-lime/25 bg-lime/[0.07] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lime">
                  With the system
                </div>
                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
                  className="mt-4 space-y-4"
                >
                  {PROBLEM.withSystem.map((item) => (
                    <motion.li key={item.label} variants={row} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-lime text-ink">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>
                        <span className="block text-[14.5px] font-semibold leading-snug text-white">
                          {item.label}
                        </span>
                        <span className="block text-[13px] leading-snug text-white/45">
                          {item.detail}
                        </span>
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
