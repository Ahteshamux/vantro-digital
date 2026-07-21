import { motion } from 'framer-motion'
import { useGoToForm } from '../lib/useGoToForm'
import { SectionHeading, Bridge, BridgedHeading } from './ui/Primitives'
import { Check, ArrowRight } from './ui/Icons'
import MagneticButton from './ui/MagneticButton'
import { EASE, viewportOnce } from '../lib/motion'
import { PACKAGES, CONVERSION } from '../content/site'

function Tier({ tier }) {
  const featured = tier.featured
  const goToForm = useGoToForm()
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
      // Lift on hover: the card rises a few px (framer y translate, GPU-
      // accelerated) and its shadow deepens on the same 200ms ease-out, then
      // eases back down on mouse-leave. `h-full` + the stretched grid keep all
      // three cards the same height regardless of feature-list length.
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`group relative flex h-full flex-col rounded-3xl p-7 transition-shadow duration-200 ease-out hover:z-10 hover:shadow-card-hover md:p-8 ${
        featured
          ? 'bg-charcoal text-white shadow-lift'
          : 'border border-card-border bg-white shadow-card'
      }`}
    >
      {featured && (
        <span className="absolute right-7 top-7 rounded-full bg-lime px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-ink">
          Most common
        </span>
      )}

      <h3 className={`text-[22px] font-bold tracking-[-0.01em] ${featured ? 'text-white' : 'text-ink'}`}>
        {tier.name}
      </h3>
      <p className={`mt-1 text-[13px] font-medium ${featured ? 'text-lime' : 'text-[#6E8215]'}`}>
        {tier.summary}
      </p>

      <div className="mt-6">
        <span className={`text-[13px] ${featured ? 'text-white/50' : 'text-warm-grey-light'}`}>From</span>
        <div className={`text-[38px] font-bold leading-none tracking-[-0.02em] ${featured ? 'text-white' : 'text-ink'}`}>
          {tier.from}
        </div>
        {tier.note && (
          <div className={`mt-2 text-[12.5px] ${featured ? 'text-white/45' : 'text-warm-grey-light'}`}>
            {tier.note}
          </div>
        )}
      </div>

      <p className={`mt-5 text-[13.5px] leading-relaxed ${featured ? 'text-white/60' : 'text-warm-grey'}`}>
        {tier.forWho}
      </p>

      <div className={`my-6 h-px ${featured ? 'bg-white/12' : 'bg-card-border'}`} />

      {tier.inherits && (
        <p className={`mb-4 text-[13px] font-semibold ${featured ? 'text-white' : 'text-ink'}`}>
          Everything in {tier.inherits}, plus:
        </p>
      )}

      <ul className="flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                featured ? 'bg-lime/20 text-lime' : 'bg-lime/25 text-ink'
              }`}
            >
              <Check className="h-3 w-3" />
            </span>
            <span className={`text-[14px] leading-snug ${featured ? 'text-white/80' : 'text-warm-grey'}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* Magnetic hero-style interaction: pulls toward the cursor + scales. */}
      <MagneticButton
        href="/contact"
        onClick={goToForm}
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14.5px] font-semibold ${
          featured ? 'bg-lime text-ink' : 'bg-ink text-white'
        }`}
      >
        {tier.cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-[3px]" />
      </MagneticButton>
    </motion.div>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="py-16 md:py-24">
      <div className="container-page">
        <Bridge>{PACKAGES.bridge}</Bridge>
        <BridgedHeading>
          <SectionHeading tag={PACKAGES.tag} title={PACKAGES.title} subtitle={PACKAGES.subtitle} />
        </BridgedHeading>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid items-stretch gap-5 lg:grid-cols-3"
        >
          {PACKAGES.tiers.map((tier) => (
            <Tier key={tier.name} tier={tier} />
          ))}
        </motion.div>

        <p className="mx-auto mt-10 max-w-xl text-center text-[13.5px] leading-relaxed text-warm-grey">
          {PACKAGES.footnote}
        </p>

        {/* No-lock-in trust signal, promoted out of the FAQ (docs 12). */}
        <p className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-card-border bg-white px-4 py-2 text-[13px] font-medium text-ink">
          <Check className="h-3.5 w-3.5 text-[#6E8215]" />
          {CONVERSION.noLockIn}
        </p>
      </div>
    </section>
  )
}
