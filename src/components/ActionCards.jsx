import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import { ArrowRight } from './ui/Icons'
import { useGoToForm } from '../lib/useGoToForm'
import { openCalendlyPopup } from '../lib/calendly'
import { EASE, viewportOnce } from '../lib/motion'
import { ACTION_CARDS, CONVERSION } from '../content/site'

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function ActionCards() {
  const goToForm = useGoToForm()
  const { book, refer, referralUrl } = ACTION_CARDS

  const onBook = (e) => {
    if (CONVERSION.calendlyUrl) {
      e.preventDefault()
      openCalendlyPopup(CONVERSION.calendlyUrl)
    } else {
      goToForm(e)
    }
  }

  const onRefer = (e) => {
    if (!referralUrl) goToForm(e) // no program yet → contact form
  }

  return (
    <section className="py-8 md:py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="container-page grid gap-5 md:grid-cols-2"
      >
        {/* Book a call — lime */}
        <motion.div
          variants={rise}
          className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl bg-lime p-8 md:p-10"
        >
          <span aria-hidden className="pointer-events-none absolute right-6 top-7 select-none text-[64px] leading-none drop-shadow-sm md:text-[76px]">
            {book.emoji}
          </span>
          <div className="relative max-w-[65%]">
            <h3 className="text-[26px] font-bold tracking-[-0.01em] text-ink md:text-[30px]">
              {book.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink/70">{book.desc}</p>
          </div>
          <MagneticButton
            href={CONVERSION.calendlyUrl || '/contact'}
            onClick={onBook}
            className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14.5px] font-semibold text-white"
          >
            {book.cta}
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </motion.div>

        {/* Refer a friend — white */}
        <motion.div
          variants={rise}
          className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-card-border bg-white p-8 shadow-card md:p-10"
        >
          <span aria-hidden className="pointer-events-none absolute right-6 top-7 select-none text-[64px] leading-none drop-shadow-sm md:text-[76px]">
            {refer.emoji}
          </span>
          <div className="relative max-w-[65%]">
            <h3 className="text-[26px] font-bold tracking-[-0.01em] text-ink md:text-[30px]">
              {refer.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-warm-grey">{refer.desc}</p>
          </div>
          <MagneticButton
            as={referralUrl ? 'a' : 'a'}
            href={referralUrl || '/contact'}
            onClick={onRefer}
            className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-[14.5px] font-semibold text-ink hover:border-ink/50"
          >
            {refer.cta}
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
