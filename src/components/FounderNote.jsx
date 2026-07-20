import { motion } from 'framer-motion'
import { TagPill } from './ui/Primitives'
import { fromLeft, fromRight, viewportOnce, EASE } from '../lib/motion'
import { FOUNDER, TOOLS, BRAND } from '../content/site'

/** One real operator — never an invented team roster. */
export default function FounderNote() {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <div className="rounded-4xl bg-[#F1EFE9] p-6 md:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fromLeft}>
              <TagPill>{FOUNDER.tag}</TagPill>
              <h2 className="mt-5 text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-ink md:text-[36px]">
                {FOUNDER.title}
              </h2>
              {FOUNDER.body.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-warm-grey"
                >
                  {para}
                </p>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fromRight}>
              <div className="rounded-2xl border border-card-border bg-white p-6 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br from-lime to-[#8FA31E] text-[20px] font-bold text-ink">
                    {FOUNDER.initials}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-ink">{BRAND.name}</div>
                    <div className="text-[13px] text-warm-grey">{FOUNDER.role}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-card-border pt-5">
                  {FOUNDER.markers.map((m) => (
                    <div key={m.label}>
                      <div className="text-[22px] font-bold leading-none tracking-[-0.02em] text-ink">
                        {m.value}
                      </div>
                      <div className="mt-1.5 text-[11.5px] leading-tight text-warm-grey">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-card-border pt-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-grey-light">
                    {FOUNDER.stackLabel}
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
                    className="mt-3.5 flex flex-wrap gap-2"
                  >
                    {TOOLS.map((tool) => (
                      <motion.span
                        key={tool}
                        variants={{
                          hidden: { opacity: 0, y: 6 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
                        }}
                        className="rounded-lg border border-card-border bg-cream/50 px-2.5 py-1.5 text-[12.5px] font-medium text-ink"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
