import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { ArrowRight } from '../components/ui/Icons'
import ContactSection from '../components/ContactSection'
import { EASE, viewportOnce } from '../lib/motion'
import { SERVICES, INDUSTRY_PAGES } from '../content/subpages'

const CONFIG = {
  services: {
    map: SERVICES,
    base: '/services',
    page: {
      eyebrow: 'Services',
      title: ['Everything I build,', 'in one place.'],
      sub: 'Design, automation and the SEO cleanup that makes them findable — pick the piece you need, or let the audit decide.',
    },
  },
  industries: {
    map: INDUSTRY_PAGES,
    base: '/industries',
    page: {
      eyebrow: 'Industries',
      title: ['Same system,', 're-skinned for your market.'],
      sub: 'The underlying problem — manual operations quietly losing revenue — looks identical across these industries.',
    },
  },
}

/** Hub page listing every child in a cluster (docs 04: one service = a cluster). */
export default function IndexPage({ kind }) {
  const { map, base, page } = CONFIG[kind]
  const entries = Object.entries(map)

  return (
    <>
      <PageHero page={page} />

      <section className="py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {entries.map(([slug, data]) => (
            <motion.div
              key={slug}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              <Link
                to={`${base}/${slug}`}
                className="group flex h-full flex-col rounded-2xl border border-card-border bg-white p-7 shadow-card transition-all duration-200 hover:border-lime hover:shadow-card-hover"
              >
                {data.stage && (
                  <span className="mb-4 w-fit rounded-full bg-lime/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink">
                    {data.stage}
                  </span>
                )}
                <h3 className="text-[18px] font-bold tracking-[-0.01em] text-ink">
                  {data.title[0]}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-warm-grey">
                  {data.sub}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <ContactSection />
    </>
  )
}
