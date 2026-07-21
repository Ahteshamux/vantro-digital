import { motion } from 'framer-motion'

// Eyebrow tag pills (green dot + label) were removed site-wide by request.
// Kept as a no-op so every call site still compiles; delete the calls later
// if you want to tidy up. Restore the pill markup here to bring them back.
export function TagPill() {
  return null
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
      {/* Eyebrow tag pill removed site-wide. */}
      <h2 className={`text-[34px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[42px] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && <p className={`mx-auto mt-4 max-w-xl text-[16px] leading-relaxed ${subColor}`}>{subtitle}</p>}
    </div>
  )
}
