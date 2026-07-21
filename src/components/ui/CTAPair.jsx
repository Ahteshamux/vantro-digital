import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from './Icons'
import { CONVERSION } from '../../content/site'
import { EASE } from '../../lib/motion'
import { openCalendlyPopup } from '../../lib/calendly'
import { useMagnetic } from '../../lib/useMagnetic'

/**
 * The dual-CTA unit (docs 01/02/11): never a single button.
 *
 *   hard / high-intent    → Book a call → Calendly popup
 *   soft / low-commitment → Get My Free Audit  → the form
 *
 * Two fallbacks keep every CTA live:
 *   - No Calendly URL configured yet → the hard CTA goes to the form too.
 *   - Soft CTA scrolls to the inline form when the current page has one,
 *     otherwise routes to /contact. Never a dead anchor.
 */
export default function CTAPair({
  tone = 'light',
  align = 'center',
  size = 'md',
  softLabel,
  className = '',
}) {
  const navigate = useNavigate()
  const hasCalendly = Boolean(CONVERSION.calendlyUrl)

  const goToForm = (e) => {
    e.preventDefault()
    const inline = document.getElementById('contact')
    if (inline) {
      inline.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/contact')
    }
  }

  // Hard CTA: open the Calendly popup OVER the page (not a new tab / next
  // page). Falls back to the form when no URL is set. preventDefault keeps
  // the href working for right-click / middle-click / no-JS.
  const onHardCta = (e) => {
    if (hasCalendly) {
      e.preventDefault()
      openCalendlyPopup(CONVERSION.calendlyUrl)
    } else {
      goToForm(e)
    }
  }

  const sizes = {
    md: 'px-6 py-3 text-[14.5px]',
    lg: 'px-7 py-3.5 text-[15px]',
  }
  const pad = sizes[size]

  const hardStyles =
    tone === 'onDark' ? 'bg-lime text-ink hover:brightness-105' : 'bg-ink text-white hover:bg-black'

  const softStyles =
    tone === 'onDark'
      ? 'border border-white/25 text-white hover:border-white/60'
      : tone === 'onLime'
        ? 'border border-ink/25 text-ink hover:border-ink/60'
        : 'border border-ink/20 text-ink hover:border-ink/60'

  const alignment =
    align === 'left' ? 'sm:justify-start' : align === 'right' ? 'sm:justify-end' : 'sm:justify-center'

  // Each button gets its own magnetic instance (independent motion values).
  const hardMag = useMagnetic()
  const softMag = useMagnetic()

  return (
    <div className={`flex flex-col items-stretch gap-3 sm:flex-row sm:items-center ${alignment} ${className}`}>
      <motion.a
        ref={hardMag.ref}
        href={hasCalendly ? CONVERSION.calendlyUrl : '/contact'}
        onClick={onHardCta}
        onMouseMove={hardMag.onMouseMove}
        onMouseLeave={hardMag.onMouseLeave}
        style={hardMag.style}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: EASE }}
        className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold ${pad} ${hardStyles}`}
      >
        {CONVERSION.hardCta}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </motion.a>

      <motion.a
        ref={softMag.ref}
        href="/contact"
        onClick={goToForm}
        onMouseMove={softMag.onMouseMove}
        onMouseLeave={softMag.onMouseLeave}
        style={softMag.style}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: EASE }}
        className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold ${pad} ${softStyles}`}
      >
        {softLabel || CONVERSION.softCta}
      </motion.a>
    </div>
  )
}
