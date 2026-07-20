import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from './ui/Icons'
import { EASE } from '../lib/motion'
import { CASE_STUDIES } from '../content/site'

/**
 * Featured case study — split panel: visual left, result right.
 *
 * The headline IS the result (docs 05). Numbers sit above any narrative,
 * because most visitors skim before they read.
 */
export default function CaseStudyCard({ item, reverse = false }) {
  const stats = item.stats.filter((s) => s.value && s.label)

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      className="overflow-hidden rounded-4xl bg-charcoal"
    >
      <div className={`grid lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {/* Visual */}
        {/**
         * Screenshot panel.
         *
         * object-CONTAIN, not cover: the whole screenshot must be visible,
         * uncropped. Cover filled the panel edge-to-edge but sliced off client
         * logos and page content, which defeats the point — the screenshot is
         * the evidence, so cutting it weakens the proof.
         *
         * Contain letterboxes, so the panel carries its own cream background
         * and padding to make that read as an intentional frame rather than a
         * sizing bug. The image sits on white with a soft border, like a
         * browser window on a desk.
         */}
        <div className="relative flex items-center justify-center bg-[#E9E6DF] p-5 md:p-7 lg:p-8">
          {item.image ? (
            <img
              src={item.image}
              alt={`${item.client} — ${item.industry}`}
              loading="lazy"
              className="max-h-[400px] w-full rounded-xl border border-black/10 bg-white object-contain shadow-[0_8px_28px_rgba(0,0,0,0.13)]"
            />
          ) : (
            <div
              className={`h-full min-h-[220px] w-full rounded-xl bg-gradient-to-br ${item.grad}`}
            >
              <div className="h-full w-full opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
            </div>
          )}
        </div>

        {/* Result panel */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
          <div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white/50">
            {item.client}
            {item.industry && <span className="text-white/30"> · {item.industry}</span>}
          </div>

          {/* The result — the whole pitch in one line */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-[38px] font-bold leading-[1.05] tracking-[-0.03em] text-lime md:text-[52px]">
              {item.before}
            </span>
            <ArrowRight className="h-7 w-7 flex-none text-lime/70 md:h-9 md:w-9" />
            <span className="text-[38px] font-bold leading-[1.05] tracking-[-0.03em] text-lime md:text-[52px]">
              {item.after}
            </span>
          </div>

          {item.timeframe && (
            <div className="mt-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white/55">
              {item.timeframe}
            </div>
          )}

          {stats.length > 0 && (
            <>
              <div className="my-8 h-px bg-white/12" />
              <dl className="flex flex-wrap gap-x-10 gap-y-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-2">
                    <dd className="text-[19px] font-bold text-lime">{s.value}</dd>
                    <dt className="text-[13.5px] text-white/60">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </>
          )}

          {item.href &&
            /**
             * Internal case study routes use Link so navigation stays client
             * side; an external live-site URL still opens in a new tab. A
             * leading "/" is the discriminator.
             */
            (item.href.startsWith('/') ? (
              <Link
                to={item.href}
                className="group mt-9 inline-flex w-fit items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-lime"
              >
                {CASE_STUDIES.readCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ) : (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex w-fit items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-lime"
              >
                {CASE_STUDIES.readCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            ))}
        </div>
      </div>
    </motion.article>
  )
}
