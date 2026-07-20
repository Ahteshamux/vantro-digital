import { motion } from 'framer-motion'
import CTAPair from './ui/CTAPair'
import { scaleIn, viewportOnce } from '../lib/motion'
import { FINAL_CTA } from '../content/site'

export default function FinalCTA() {
  return (
    <section id="audit" className="py-16 md:py-24">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          className="rounded-4xl bg-lime-soft px-6 py-16 text-center md:px-14 md:py-20"
        >
          <h2 className="mx-auto max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[46px]">
            {FINAL_CTA.title[0]}
            <br className="hidden md:block" /> {FINAL_CTA.title[1]}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-ink/60">
            {FINAL_CTA.sub}
          </p>
          {/* Mirrors the hero's dual CTA — docs 02: the closing band repeats
              the hero's structure so both visitor types can act. */}
          <CTAPair tone="onLime" size="lg" className="mt-9" />
        </motion.div>
      </div>
    </section>
  )
}
