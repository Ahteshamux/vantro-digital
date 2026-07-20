import { motion } from 'framer-motion'
import { TagPill } from './Primitives'
import CTAPair from './CTAPair'
import { EASE } from '../../lib/motion'

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/**
 * Shared inner-page hero. Two-tone headline (ink line, muted line) matching
 * the treatment used on the Process section, plus the standard dual CTA.
 */
export default function PageHero({ page, showCta = true, visual = null }) {
  return (
    <section className="border-b border-card-border/60 py-16 md:py-20">
      <div
        className={`container-page ${
          visual ? 'grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16' : ''
        }`}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.div variants={item}>
            <TagPill>{page.eyebrow}</TagPill>
          </motion.div>

          <motion.h1
            variants={item}
            className={`mt-5 text-[36px] font-bold leading-[1.06] tracking-[-0.03em] md:text-[52px] ${
              visual ? '' : 'max-w-3xl'
            }`}
          >
            <span className="block text-ink">{page.title[0]}</span>
            <span className="block text-warm-grey-light">{page.title[1]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-warm-grey"
          >
            {page.sub}
          </motion.p>

          {showCta && (
            <motion.div variants={item} className="mt-9">
              <CTAPair align="left" />
            </motion.div>
          )}
        </motion.div>

        {visual}
      </div>
    </section>
  )
}
