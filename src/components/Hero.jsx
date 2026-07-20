import { motion } from 'framer-motion'
import { Check, Star } from './ui/Icons'
import CTAPair from './ui/CTAPair'
import upworkLogo from '../assets/images/upwork-logo.png'
import { EASE } from '../lib/motion'
import { HERO, STATS, CONVERSION } from '../content/site'

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

/**
 * Trust badge ABOVE the headline (docs 01/15) — trust is established before
 * any claim is made. Self-hides while the rating is unset, so the hero never
 * shows a placeholder where a credential should be.
 */
function TrustBadge() {
  const { rating, count, source } = STATS.trust
  if (rating == null) return null

  const inner = (
    <>
      <img src={upworkLogo} alt="" width="20" height="20" className="h-5 w-5 flex-none object-contain" />
      <span className="flex gap-0.5 text-[#FFB400]">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-3.5 w-3.5" />
        ))}
      </span>
      <span className="text-[13px] text-warm-grey">
        <span className="font-bold text-ink">{rating}</span> on {source}
        {count != null && <> · {count} reviews</>}
      </span>
    </>
  )

  const cls =
    'inline-flex items-center gap-2.5 rounded-full border border-card-border bg-white px-4 py-2 shadow-card'

  return CONVERSION.upworkUrl ? (
    <a href={CONVERSION.upworkUrl} target="_blank" rel="noopener noreferrer" className={`${cls} transition-shadow hover:shadow-card-hover`}>
      {inner}
    </a>
  ) : (
    <span className={cls}>{inner}</span>
  )
}

export default function Hero() {
  const hasBadge = STATS.trust.rating != null

  return (
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-20">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="container-page relative z-10 flex flex-col items-center text-center"
      >
        {/* Trust badge first, then the claim. */}
        {hasBadge && (
          <motion.div variants={item} className="mb-7">
            <TrustBadge />
          </motion.div>
        )}

        <motion.h1
          variants={item}
          className="max-w-4xl text-[38px] font-bold leading-[1.06] tracking-[-0.03em] text-ink md:text-[58px]"
        >
          {HERO.headline[0]}
          <br className="hidden sm:block" />{' '}
          <span className="text-warm-grey-light">{HERO.headline[1]}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-warm-grey md:text-[18px]"
        >
          {HERO.sub}
        </motion.p>

        <motion.div variants={item} className="mt-9 w-full sm:w-auto">
          <CTAPair size="lg" />
        </motion.div>

        {/* Promise bar — de-risks the ask. */}
        <motion.ul
          variants={item}
          className="mt-11 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          {HERO.promises.map((p, i) => (
            <li key={p.label} className="flex items-center gap-3">
              {i > 0 && <span className="hidden h-8 w-px bg-card-border sm:block" />}
              <span className="flex items-center gap-2.5 rounded-2xl border border-card-border bg-white/70 px-4 py-2.5 text-left sm:border-0 sm:bg-transparent sm:px-2 sm:py-0">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-lime/30 text-ink">
                  <Check className="h-3 w-3" />
                </span>
                <span>
                  <span className="block text-[13.5px] font-semibold leading-tight text-ink">
                    {p.label}
                  </span>
                  <span className="block text-[12.5px] leading-tight text-warm-grey">{p.detail}</span>
                </span>
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}
