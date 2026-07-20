import { motion } from 'framer-motion'
import { TagPill } from './Primitives'
import Checklist from './Checklist'
import { fromLeft, fromRight, scaleIn, viewportOnce } from '../../lib/motion'

// Two-column feature block. `reverse` puts the mockup on the left.
export default function FeatureLayout({ tag, title, paragraph, checklist, mockup, reverse = false }) {
  const textVariant = reverse ? fromRight : fromLeft
  return (
    <div className="rounded-4xl bg-[#F1EFE9] p-6 md:p-10 lg:p-14">
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={textVariant}
        >
          <TagPill>{tag}</TagPill>
          <h3 className="mt-5 text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-ink md:text-[34px]">
            {title}
          </h3>
          <p className="mt-4 hidden max-w-md text-[16px] leading-relaxed text-warm-grey md:block">{paragraph}</p>
          <Checklist items={checklist} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          transition={{ delay: 0.12 }}
        >
          {mockup}
        </motion.div>
      </div>
    </div>
  )
}
