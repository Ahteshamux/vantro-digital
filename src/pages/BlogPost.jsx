import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import ContactSection from '../components/ContactSection'
import { ArrowRight, ChevronDown } from '../components/ui/Icons'
import { EASE, viewportOnce } from '../lib/motion'
import { POSTS, POST_ORDER } from '../content/blog'

const BASE_URL = 'https://vantrodigital.com'

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** One prose block. Block types are kept minimal and render-agnostic. */
function Block({ block }) {
  if (block.type === 'p') {
    return <p className="mt-5 text-[16.5px] leading-relaxed text-warm-grey">{block.text}</p>
  }
  if (block.type === 'h3') {
    return (
      <h3 className="mt-8 text-[19px] font-bold tracking-[-0.01em] text-ink">{block.text}</h3>
    )
  }
  if (block.type === 'list') {
    return (
      <ul className="mt-5 space-y-3">
        {block.items.map((it) => (
          <li key={it} className="flex gap-3 text-[16px] leading-relaxed text-ink/85">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-lime" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (block.type === 'callout') {
    return (
      <div className="mt-7 rounded-2xl bg-lime/25 p-6">
        <p className="text-[16.5px] font-medium leading-relaxed text-ink">{block.text}</p>
      </div>
    )
  }
  if (block.type === 'table') {
    // Wide matrices scroll inside their own container so the page body never
    // scrolls horizontally. The first column is the row label (left-aligned).
    return (
      <div className="mt-7 overflow-x-auto rounded-2xl border border-card-border">
        <table className="w-full min-w-[560px] border-collapse text-left text-[14.5px]">
          <thead>
            <tr className="bg-[#F1EFE9]">
              {block.headers.map((h, i) => (
                <th
                  key={h}
                  className={`px-4 py-3 font-bold text-ink ${
                    i === 0 ? '' : 'text-center'
                  } ${block.highlight === i ? 'bg-lime/30' : ''}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-t border-card-border">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-4 py-3 align-top ${
                      i === 0
                        ? 'font-semibold text-ink'
                        : 'text-center text-warm-grey'
                    } ${block.highlight === i ? 'bg-lime/10 text-ink' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

/** Objection-style accordion row, mirroring components/FAQ.jsx. */
function FaqRow({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-card-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] font-semibold text-ink md:text-[17px]">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-none text-warm-grey transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-[15px] leading-relaxed text-warm-grey">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * One template for every article (mirrors CaseStudyPage.jsx / SubPage.jsx).
 *
 * Layout: hero + byline → two-column body (prose left, sticky TOC right) →
 * internal-link card (the required service + case study link) → FAQ →
 * ContactSection so blog traffic never dead-ends.
 *
 * SEO: this is the only page type that emits JSON-LD. It builds BlogPosting +
 * BreadcrumbList (+ FAQPage) from the post data and hands them to <SEO>.
 */
export default function BlogPost() {
  const { slug } = useParams()
  const data = POSTS[slug]

  if (!data) return <Navigate to="/404" replace />

  const url = `${BASE_URL}/blog/${slug}`
  const headline = `${data.title[0]} ${data.title[1]}`

  // JSON-LD per SEO-STRATEGY.md §6 (Article + BreadcrumbList + FAQPage).
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline,
      description: data.seoDescription,
      author: { '@type': 'Organization', name: data.author },
      publisher: {
        '@type': 'Organization',
        name: 'Vantro Digital',
        logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo/logo_website_navbar.svg` },
      },
      datePublished: data.datePublished,
      dateModified: data.dateModified,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: data.title[0], item: url },
      ],
    },
  ]

  if (data.faqs?.length) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  const shareText = encodeURIComponent(headline)
  const shareUrl = encodeURIComponent(url)
  const shares = [
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
    { label: 'Email', href: `mailto:?subject=${shareText}&body=${shareUrl}` },
  ]

  const prettyDate = new Date(data.datePublished).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        path={`/blog/${slug}`}
        type="article"
        publishedTime={data.datePublished}
        modifiedTime={data.dateModified}
        schema={schema}
      />

      <PageHero page={data} showCta={false} />

      {/* Byline: author · date · reading time */}
      <div className="border-b border-card-border/60">
        <div className="container-page flex flex-wrap items-center gap-x-3 gap-y-1 py-5 text-[13.5px] text-warm-grey">
          <span className="font-semibold text-ink">{data.author}</span>
          <span aria-hidden>·</span>
          <span>{prettyDate}</span>
          <span aria-hidden>·</span>
          <span>{data.readMinutes} min read</span>
        </div>
      </div>

      {/* Body + sticky Table of Contents */}
      <section className="py-12 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">
          {/* Prose */}
          <div>
            {data.sections.map((s) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={rise}
                className="scroll-mt-28 pt-8 first:pt-0"
              >
                <h2 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink md:text-[28px]">
                  {s.heading}
                </h2>
                {s.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </motion.div>
            ))}

            {/* Required internal links: a service page + a case study */}
            <div className="mt-14 rounded-3xl bg-[#F1EFE9] p-7 md:p-9">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-warm-grey-light">
                Keep going
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[data.relatedService, data.relatedCase].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-card-border bg-white p-5 transition-shadow hover:shadow-card-hover"
                  >
                    <span className="text-[15px] font-bold leading-snug text-ink">{link.label}</span>
                    <ArrowRight className="h-4 w-4 flex-none text-ink transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-grey-light">
                Share
              </span>
              {shares.map((sh) => (
                <a
                  key={sh.label}
                  href={sh.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-card-border bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-ink/40"
                >
                  {sh.label}
                </a>
              ))}
            </div>
          </div>

          {/* Sticky TOC (collapses above the body below lg) */}
          <aside className="order-first lg:order-none">
            <nav className="lg:sticky lg:top-28">
              <div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-warm-grey-light">
                On this page
              </div>
              <ul className="mt-4 space-y-2.5 border-l border-card-border pl-4">
                {data.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-start gap-2 text-[14px] leading-snug text-warm-grey transition-colors hover:text-ink"
                    >
                      <ArrowRight className="mt-1 h-3.5 w-3.5 flex-none text-lime opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      <span className="-ml-[22px] transition-all duration-200 group-hover:ml-0">
                        {s.heading}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs?.length > 0 && (
        <section className="border-t border-card-border/60 py-14 md:py-18">
          <div className="container-page mx-auto max-w-3xl">
            <h2 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink md:text-[28px]">
              Frequently asked questions
            </h2>
            <div className="mt-8">
              {data.faqs.map((f) => (
                <FaqRow key={f.q} item={f} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More reading */}
      <section className="border-t border-card-border/60 py-14 md:py-18">
        <div className="container-page">
          <div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-warm-grey-light">
            More from the blog
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {POST_ORDER.filter((s) => s !== slug).map((s) => {
              const o = POSTS[s]
              return (
                <Link
                  key={s}
                  to={`/blog/${s}`}
                  className="group rounded-2xl border border-card-border bg-white p-6 transition-shadow hover:shadow-card-hover"
                >
                  <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-warm-grey-light">
                    {o.eyebrow}
                  </div>
                  <div className="mt-3 text-[17px] font-bold leading-snug text-ink">{o.title[0]}</div>
                  <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-ink">
                    Read
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
