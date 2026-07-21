import { motion } from 'framer-motion'
import CTAPair from './ui/CTAPair'
import { Check } from './ui/Icons'
import { EASE } from '../lib/motion'
import { HERO } from '../content/site'

const container = { show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } } }
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/**
 * Dark, interactive hero.
 *
 * The four-pillar headline (Build. Rank. Grow. Automate.) is split into
 * individually hoverable words — each springs up and brightens on hover, so
 * the promise the whole business is built on literally reacts to the visitor.
 * Ink background + lime headline are the site's own tokens; a slow lime glow
 * behind the type keeps the section alive even before anyone interacts.
 */
export default function Hero() {
  const words = HERO.headline[0].split(' ') // "Build." "Rank." "Grow." "Automate."

  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-16 md:pb-28 md:pt-20">
      {/* Ambient lime glow — breathes slowly so the hero is never fully static. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-lime/20 blur-[130px]"
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Faint dot grid for texture. */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="container-page relative z-10 flex flex-col items-center text-center"
      >
        {/* Eyebrow — names the exact buyer. */}
        <motion.span
          variants={item}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-lime"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          For $300K–$1.5M service businesses
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-[16ch] text-[42px] font-bold leading-[1.0] tracking-[-0.03em] md:text-[68px]"
        >
          <span className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {words.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                className="inline-block cursor-default text-lime"
                whileHover={{ y: -9, scale: 1.06, rotate: i % 2 ? 2.5 : -2.5, color: '#E4EC8E' }}
                transition={{ type: 'spring', stiffness: 320, damping: 13 }}
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="mt-2 block text-[30px] font-bold leading-[1.06] text-white/35 md:text-[46px]">
            {HERO.headline[1]}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-white/60 md:text-[18px]"
        >
          {HERO.sub}
        </motion.p>

        <motion.div variants={item} className="mt-10 w-full sm:w-auto">
          <CTAPair size="lg" tone="onDark" />
        </motion.div>

        {/* Promise bar — de-risks the ask, restyled for the dark ground. */}
        <motion.ul
          variants={item}
          className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          {HERO.promises.map((p, i) => (
            <li key={p.label} className="flex items-center gap-3">
              {i > 0 && <span className="hidden h-8 w-px bg-white/12 sm:block" />}
              <span className="flex w-full items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-left sm:w-auto sm:border-0 sm:bg-transparent sm:px-2 sm:py-0">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-lime/20 text-lime">
                  <Check className="h-3 w-3" />
                </span>
                <span>
                  <span className="block text-[13.5px] font-semibold leading-tight text-white">
                    {p.label}
                  </span>
                  <span className="block text-[12.5px] leading-tight text-white/50">{p.detail}</span>
                </span>
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}
