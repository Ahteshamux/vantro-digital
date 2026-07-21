import { motion } from 'framer-motion'
import CTAPair from './ui/CTAPair'
import CalendlyInline from './CalendlyInline'
import { scaleIn, viewportOnce } from '../lib/motion'
import { FINAL_CTA, CONVERSION } from '../content/site'

export default function FinalCTA() {
  const hasCalendly = Boolean(CONVERSION.calendlyUrl)

  // Inline embed only: hide Calendly's event-details card (the left panel of
  // this section already gives that context) and its cookie banner, so the
  // calendar itself gets the space instead of a redundant header. The popup
  // keeps the full details — it has room.
  const inlineUrl = hasCalendly
    ? `${CONVERSION.calendlyUrl}${CONVERSION.calendlyUrl.includes('?') ? '&' : '?'}hide_event_type_details=1&hide_gdpr_banner=1`
    : null

  return (
    <section id="audit" className="py-16 md:py-24">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          className={`rounded-4xl bg-lime-soft px-6 py-14 md:px-14 md:py-16 ${
            hasCalendly ? 'text-center lg:text-left' : 'text-center'
          }`}
        >
          {hasCalendly ? (
            /* Two columns: pitch on the left, scheduler open on the right.
               Stacks on mobile. Keeps the closing band from running long. */
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
              <div>
                <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[42px]">
                  {FINAL_CTA.title[0]} {FINAL_CTA.title[1]}
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink/60 lg:mx-0 mx-auto">
                  {FINAL_CTA.sub}
                </p>
              </div>
              <CalendlyInline
                url={inlineUrl}
                height={500}
                className="border border-ink/10 shadow-card"
              />
            </div>
          ) : (
            /* Fallback until the Calendly URL is set: the hero's dual CTA. */
            <div className="text-center">
              <h2 className="mx-auto max-w-2xl text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[46px]">
                {FINAL_CTA.title[0]}
                <br className="hidden md:block" /> {FINAL_CTA.title[1]}
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-ink/60">
                {FINAL_CTA.sub}
              </p>
              <CTAPair tone="onLime" size="lg" className="mt-9" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
