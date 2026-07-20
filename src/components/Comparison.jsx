import { motion } from 'framer-motion'
import { useGoToForm } from '../lib/useGoToForm'
import { Check, Cross, ArrowRight } from './ui/Icons'
import { viewportOnce, EASE } from '../lib/motion'
import { COMPARISON } from '../content/site'

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

function Column({ title, items, isUs }) {
  return (
    <motion.div
      variants={rise}
      className={`rounded-[26px] p-8 md:p-10 ${
        isUs ? 'bg-gradient-to-b from-[#F5F9DE] to-[#E8F0B8]' : 'bg-white'
      }`}
    >
      <h3
        className={`text-[26px] font-bold tracking-[-0.015em] md:text-[30px] ${
          isUs ? 'text-[#5E7014]' : 'text-[#B9B9B0]'
        }`}
      >
        {title}
      </h3>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
        className="mt-8 space-y-[18px]"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={{
              hidden: { opacity: 0, x: -8 },
              show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
            }}
            className="flex items-start gap-3.5"
          >
            <span
              className={`mt-[3px] flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full ${
                isUs ? 'bg-lime/70 text-[#3F4A0D]' : 'bg-[#FBE4E0] text-[#D0655A]'
              }`}
            >
              {isUs ? <Check className="h-[11px] w-[11px]" /> : <Cross className="h-[10px] w-[10px]" />}
            </span>
            <span
              className={`text-[15px] leading-[1.5] ${isUs ? 'text-ink/85' : 'text-warm-grey'}`}
            >
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default function Comparison() {
  const goToForm = useGoToForm()
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-28">
      {/* Soft radial lift behind the heading so the flat charcoal has depth. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(212,232,76,0.10) 0%, rgba(212,232,76,0) 70%)',
        }}
      />

      <div className="container-page relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto max-w-xl text-center"
        >
          <motion.span
            variants={rise}
            className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-[12.5px] font-medium text-white/65"
          >
            {COMPARISON.tag}
          </motion.span>

          <motion.h2
            variants={rise}
            className="mt-8 text-[36px] font-bold leading-[1.06] tracking-[-0.025em] text-white md:text-[52px]"
          >
            {COMPARISON.headline[0]}
            <br />
            {COMPARISON.headline[1]}
          </motion.h2>

          <motion.p
            variants={rise}
            className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-white/45"
          >
            {COMPARISON.sub}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-2 md:gap-6"
        >
          <Column title={COMPARISON.them.title} items={COMPARISON.them.items} isUs={false} />
          <Column title={COMPARISON.us.title} items={COMPARISON.us.items} isUs />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={rise}
          className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
        >
          <span className="text-[15px] text-white/50">{COMPARISON.footLine}</span>
          <motion.a
            href="/contact"
            onClick={goToForm}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-[14.5px] font-semibold text-ink"
          >
            {COMPARISON.footCta}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
