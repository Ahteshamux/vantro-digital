import { motion } from 'framer-motion'
import { Dot } from './Icons'

// Small uppercase tracked pill tag: dot + label.
export function TagPill({ children, className = '', tone = 'light' }) {
  const tones = {
    light: 'bg-white/70 border-card-border text-warm-grey',
    onDark: 'bg-white/10 border-white/15 text-white/70',
    plain: 'bg-transparent border-transparent text-warm-grey',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      <Dot className="h-1.5 w-1.5 text-lime" />
      {children}
    </span>
  )
}

// Solid black pill CTA.
export function ButtonPrimary({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-black ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Outlined pill.
export function ButtonOutline({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center gap-2 rounded-full border border-ink/20 bg-transparent px-6 py-3 text-[15px] font-semibold text-ink hover:border-ink/60 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

/**
 * Bridging micro-copy: a one-line spoken transition that leads a section.
 * Fades in first; pair it with <BridgedHeading> so the heading follows on a
 * 0.15s delay and the two read as speech, not as a stacked label.
 */
export function Bridge({ children, align = 'center' }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-6 max-w-xl text-[14.5px] leading-relaxed text-warm-grey ${
        align === 'left' ? 'text-left' : 'mx-auto text-center'
      }`}
    >
      {children}
    </motion.p>
  )
}

/** Wraps a SectionHeading so it trails the Bridge line above it. */
export function BridgedHeading({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

// Section heading block (centered), with tag + title + optional subtitle.
export function SectionHeading({ tag, title, subtitle, tone = 'light', className = '' }) {
  const titleColor = tone === 'onDark' ? 'text-white' : 'text-ink'
  const subColor = tone === 'onDark' ? 'text-white/60' : 'text-warm-grey'
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {tag && (
        <div className="mb-5 flex justify-center">
          <TagPill tone={tone === 'onDark' ? 'onDark' : 'light'}>{tag}</TagPill>
        </div>
      )}
      <h2 className={`text-[34px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[42px] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && <p className={`mx-auto mt-4 max-w-xl text-[16px] leading-relaxed ${subColor}`}>{subtitle}</p>}
    </div>
  )
}
