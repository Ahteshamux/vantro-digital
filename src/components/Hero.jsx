import { motion } from 'framer-motion'
import CTAPair from './ui/CTAPair'
import { EASE } from '../lib/motion'

/**
 * Big-statement hero: full lime ground, giant black promise sized to fit the
 * viewport. The three lines float on a slow, staggered, infinite loop — pure
 * ambient motion, no hover or scroll needed. (The floating navbar samples this
 * lime and auto-flips to a black pill.)
 */
const LINES = ['Get found.', 'Get booked.', 'Stay booked.']

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-lime pb-10 pt-28 md:pb-14 md:pt-28">
      <div className="container-page">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold uppercase leading-[0.86] tracking-[-0.035em] text-ink text-[clamp(2.6rem,8.6vw,8.5rem)]"
        >
          {LINES.map((l, i) => (
            <motion.span
              key={l}
              className="block will-change-transform"
              // Continuous, hands-off float — each line on its own phase.
              animate={{ y: ['0%', '-9%', '0%'] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            >
              {l}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { delayChildren: 0.4, staggerChildren: 0.1 } } }}
          className="mt-8 flex flex-col gap-5 md:mt-10 md:flex-row md:items-center md:justify-between"
        >
          <motion.p variants={fade} className="max-w-md text-[15.5px] font-medium leading-relaxed text-ink/70 md:text-[17px]">
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
