import { motion } from 'framer-motion'
import { useGoToForm } from '../lib/useGoToForm'
import { SectionHeading } from './ui/Primitives'
import { ArrowRight, Star } from './ui/Icons'
import upworkLogo from '../assets/images/upwork-logo.png'
import { EASE, viewportOnce } from '../lib/motion'
import CaseStudyCard from './CaseStudyCard'
import MagneticButton from './ui/MagneticButton'
import { PROOF, CASE_STUDIES } from '../content/site'

const card = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

function Scarcity() {
  const s = PROOF.scarcity
  const goToForm = useGoToForm()
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={card}
      className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-card-border bg-white px-7 py-6 shadow-card sm:flex-row sm:items-center"
    >
      <div className="flex items-start gap-3.5">
        <span className="relative mt-1.5 flex h-2.5 w-2.5 flex-none items-center justify-center">
          <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-[#8FA31E]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8FA31E]" />
        </span>
        <div>
          <div className="text-[15px] font-bold text-ink">{s.line}</div>
          <p className="mt-1 max-w-xl text-[13.5px] leading-relaxed text-warm-grey">{s.detail}</p>
        </div>
      </div>
      <MagneticButton
        href="/contact"
        onClick={goToForm}
        className="group inline-flex flex-none items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-black"
      >
        {s.cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </MagneticButton>
    </motion.div>
  )
}

export default function Proof() {
  const { rating, reviews, label } = PROOF.upwork
  const hasRating = rating != null && reviews != null

  // A case study needs a client and a real before→after to be worth showing.
  const featured = CASE_STUDIES.items.filter((c) => c.client && c.before && c.after)

  return (
    <section id="proof" className="scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <SectionHeading tag={PROOF.tag} title={PROOF.title} subtitle={PROOF.subtitle} />

        {hasRating && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={card}
            className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full border border-card-border bg-white px-5 py-2.5 shadow-card"
          >
            <img src={upworkLogo} alt="Upwork" width="20" height="20" className="h-5 w-5 flex-none object-contain" />
            <span className="flex gap-0.5 text-[#FFB400]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-[13.5px] text-warm-grey">
              <span className="font-semibold text-ink">{rating}</span> {label} ·{' '}
              <span className="font-semibold text-ink">{reviews}</span> reviews
            </span>
          </motion.div>
        )}

        {/* Tier 1 — featured case studies. Only renders entries with a real
            before→after result; half-filled slots are skipped entirely. */}
        {featured.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{ show: { transition: { staggerChildren: 0.14 } } }}
            className="mt-12 space-y-6"
          >
            {featured.map((item, i) => (
              <CaseStudyCard key={item.client} item={item} reverse={i % 2 === 1} />
            ))}
          </motion.div>
        )}

        {/* Tier-2 "adjacent work" list removed: the one remaining entry had no
            real numbers, so it rendered as a card full of dashes — weaker than
            showing nothing. Featured case studies above carry the proof. */}

        <Scarcity />
      </div>
    </section>
  )
}
