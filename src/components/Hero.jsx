import { motion } from 'framer-motion'
import CTAPair from './ui/CTAPair'
import { EASE } from '../lib/motion'

/**
 * Big-statement hero: full lime ground, giant black promise filling the view.
 * Simple and confident — the headline is the whole pitch. (The floating navbar
 * samples this lime and auto-flips to a black pill, so it contrasts cleanly.)
 */
const LINES = ['Get found.', 'Get booked.', 'Stay booked.']

const container = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }
const line = {
  hidden: { opacity: 0, y: '40%' },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}
const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-lime pb-14 pt-28 md:pt-32">
      <div className="container-page">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={container}
          className="font-extrabold uppercase leading-[0.84] tracking-[-0.035em] text-ink text-[clamp(3.4rem,12.5vw,12rem)]"
        >
          {LINES.map((l) => (
            <span key={l} className="block overflow-hidden">
              <motion.span variants={line} className="block">
                {l}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { delayChildren: 0.5, staggerChildren: 0.1 } } }}
          className="mt-9 flex flex-col gap-6 md:mt-12 md:flex-row md:items-center md:justify-between"
        >
          <motion.p variants={fade} className="max-w-md text-[16px] font-medium leading-relaxed text-ink/70 md:text-[18px]">
            One system that gets you found on Google, books the job, and keeps
            customers coming back — without you chasing any of it.
          </motion.p>

          <motion.div variants={fade} className="flex-none">
            <CTAPair size="lg" align="left" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
