import { motion } from 'framer-motion'
import { SectionHeading } from './ui/Primitives'
import { EASE, viewportOnce } from '../lib/motion'
import { INDUSTRIES } from '../content/site'

/**
 * Deliberately plain: no cards, no icon tiles, no per-item CTA.
 * This is a two-second "is this me?" scan, not a feature grid — and the
 * repeated buttons competed with the real CTA further down the page.
 */
export default function IndustryCards() {
  return (
    <section className="bg-[#F1EFE9] py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          tag={INDUSTRIES.tag}
          title={INDUSTRIES.title}
          subtitle={INDUSTRIES.subtitle}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INDUSTRIES.cards.map((ind) => (
            <motion.div
              key={ind.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              className="border-t border-ink/15 pt-5"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-2 w-2 flex-none rounded-full"
                  style={{ backgroundColor: ind.color }}
                />
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-ink">
                  {ind.name}
                </h3>
              </div>
              <p className="mt-2.5 text-[14px] leading-relaxed text-warm-grey">{ind.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
