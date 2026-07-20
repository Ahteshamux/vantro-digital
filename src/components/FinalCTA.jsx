import { motion } from 'framer-motion'
import CTAPair from './ui/CTAPair'
import CalendlyInline from './CalendlyInline'
import { scaleIn, viewportOnce } from '../lib/motion'
import { FINAL_CTA, CONVERSION } from '../content/site'

export default function FinalCTA() {
  const hasCalendly = Boolean(CONVERSION.calendlyUrl)

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

          {hasCalendly ? (
            /* Scheduler embedded open, right in the closing band — a visitor
               who's ready can pick a time without another click or page. */
            <CalendlyInline
              url={CONVERSION.calendlyUrl}
              className="mx-auto mt-10 max-w-3xl border border-ink/10 shadow-card"
            />
          ) : (
            /* Fallback until the Calendly URL is set: the hero's dual CTA. */
            <CTAPair tone="onLime" size="lg" className="mt-9" />
          )}
        </motion.div>
      </div>
    </section>
  )
}
