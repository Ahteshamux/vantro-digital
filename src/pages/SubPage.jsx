import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { Check, ArrowRight } from '../components/ui/Icons'
import ContactSection from '../components/ContactSection'
import CTAPair from '../components/ui/CTAPair'
import { EASE, viewportOnce } from '../lib/motion'
import { SERVICES, INDUSTRY_PAGES } from '../content/subpages'

const MAPS = { services: SERVICES, industries: INDUSTRY_PAGES }

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/**
 * One template for every service and industry page (docs 04).
 *
 * Order matters: the "why this matters" education block comes BEFORE the
 * pitch. The teardown flags that as the highest-leverage pattern on the
 * reference site — it earns the right to sell by being useful first.
 */
export default function SubPage({ kind }) {
  const { slug } = useParams()
  const data = MAPS[kind]?.[slug]

  if (!data) return <Navigate to="/404" replace />

  return (
    <>
      <PageHero page={data} />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Education before pitch */}
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={rise}>
            <h2 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink md:text-[30px]">
              Why this matters
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-warm-grey">{data.why}</p>

            {data.stage && (
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-card-border bg-white px-4 py-2 text-[13px] font-medium text-ink">
                Part of stage
                <span className="font-bold">{data.stage}</span>
              </div>
            )}
          </motion.div>

          {/* What's included */}
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={rise}>
            <div className="rounded-3xl bg-[#F1EFE9] p-7 md:p-9">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-warm-grey-light">
                What’s included
              </h3>
              <ul className="mt-5 space-y-3.5">
                {data.included.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-lime text-ink">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-[14.5px] leading-snug text-ink/85">{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-ink/10 pt-6">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-warm-grey-light">
                  You get
                </h3>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {data.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-lg border border-card-border bg-white px-3 py-1.5 text-[12.5px] font-medium text-ink"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mid-page CTA, per the service-page template */}
      <section className="pb-4">
        <div className="container-page">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-charcoal px-7 py-10 text-center md:px-12">
            <p className="max-w-lg text-[19px] font-semibold leading-snug text-white md:text-[22px]">
              Not sure this is the piece you need? The audit will tell you.
            </p>
            <CTAPair tone="onDark" />
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="pb-16 md:pb-24">
        <div className="container-page">
          <Link
            to={kind === 'services' ? '/services' : '/industries'}
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-warm-grey transition-colors hover:text-ink"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
            All {kind}
          </Link>
        </div>
      </section>
    </>
  )
}
