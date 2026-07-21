import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import ContactSection from '../components/ContactSection'
import { ArrowRight } from '../components/ui/Icons'
import { EASE, viewportOnce } from '../lib/motion'
import { POSTS, POST_ORDER } from '../content/blog'

const HERO = {
  eyebrow: 'Blog',
  title: ['Plain-English guides', 'for local business owners.'],
  sub: 'Practical SEO, website and reputation advice for owner-run businesses in the US and Australia — no jargon, no fluff, just what actually moves the needle.',
}

/** Article index — mirrors IndexPage.jsx's card-grid pattern. */
export default function BlogIndex() {
  return (
    <>
      <SEO
        title="Blog — SEO, Web Design & Reputation for Local Business"
        description="Practical SEO, website design and Google reviews guides for local businesses in the US and Australia. No jargon — just what gets you found and booked."
        path="/blog"
      />
      <PageHero page={HERO} />

      <section className="py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {POST_ORDER.map((slug) => {
            const post = POSTS[slug]
            return (
              <motion.div
                key={slug}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                }}
              >
                <Link
                  to={`/blog/${slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-card-border bg-white p-7 shadow-card transition-all duration-200 hover:border-lime hover:shadow-card-hover"
                >
                  <span className="mb-4 w-fit rounded-full bg-lime/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink">
                    {post.eyebrow}
                  </span>
                  <h2 className="text-[18px] font-bold leading-snug tracking-[-0.01em] text-ink">
                    {post.title[0]}
                  </h2>
                  <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-warm-grey">
                    {post.sub}
                  </p>
                  <span className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                    <span className="text-[12.5px] text-warm-grey-light">
                      {post.readMinutes} min read
                    </span>
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      <ContactSection />
    </>
  )
}
