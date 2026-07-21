import { motion } from 'framer-motion'
import LeadForm from './LeadForm'
import { fromLeft, fromRight, viewportOnce, EASE } from '../lib/motion'
import { FORM, CONVERSION } from '../content/site'

/**
 * Form + "What Happens Next" + objection FAQs.
 *
 * The 4-beat explainer sits directly beside the form because the docs (08)
 * identify "what happens after I submit this?" as the silent hesitation that
 * drives most form abandonment.
 */
export default function ContactSection() {
  const hasCalendly = Boolean(CONVERSION.calendlyUrl)

  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <div className="rounded-4xl bg-[#F1EFE9] p-6 md:p-12 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Left: pitch, what-next, FAQs */}
            <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fromLeft}>
              <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[38px]">
                {FORM.title}
              </h2>
              <p className="mt-4 hidden max-w-md text-[16px] leading-relaxed text-warm-grey md:block">{FORM.sub}</p>

              {/* The two audit cards were removed by request. */}

              {/* What happens next */}
              <div className="mt-9 hidden md:block">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-grey-light">
                  {FORM.whatNext.title}
                </h3>
                <motion.ol
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
                  className="mt-4 space-y-3"
                >
                  {FORM.whatNext.steps.map((step, i) => (
                    <motion.li
                      key={step}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
                      }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink text-[11px] font-bold text-lime">
                        {i + 1}
                      </span>
                      <span className="text-[14.5px] text-ink/80">{step}</span>
                    </motion.li>
                  ))}
                </motion.ol>
              </div>
              {/* FAQs removed from here to keep this section short and solid —
                  FORM.faqs is still available if we want a dedicated FAQ block. */}
            </motion.div>

            {/* Right: the form */}
            <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fromRight}>
              <div className="rounded-2xl border border-card-border bg-white p-6 shadow-card md:p-8">
                <LeadForm />
              </div>

              {hasCalendly && (
                <p className="mt-5 text-center text-[13.5px] text-warm-grey">
                  Prefer to talk first?{' '}
                  <a
                    href={CONVERSION.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline underline-offset-4 hover:text-black"
                  >
                    {CONVERSION.hardCta}
                  </a>
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
