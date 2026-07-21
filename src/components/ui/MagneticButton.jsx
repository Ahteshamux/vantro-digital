import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useMagnetic } from '../../lib/useMagnetic'

const MotionLink = motion(Link)

/**
 * The hero CTA interaction, packaged: magnetic pull toward the cursor +
 * hover scale + tap press. Polymorphic so every CTA — router Link, anchor,
 * or submit button — gets the identical feel.
 *
 *   as="link"    → react-router <Link to=…>
 *   as="a"       → <a href=…>   (default)
 *   as="button"  → <button>     (e.g. form submit)
 *
 * Extra props (onClick, type, target, disabled…) pass straight through.
 */
export default function MagneticButton({
  as = 'a',
  to,
  href,
  className = '',
  children,
  strength,
  ...rest
}) {
  const m = useMagnetic(strength)
  const shared = {
    ref: m.ref,
    style: m.style,
    onMouseMove: m.onMouseMove,
    onMouseLeave: m.onMouseLeave,
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    className,
    ...rest,
  }

  if (as === 'link') return <MotionLink to={to} {...shared}>{children}</MotionLink>
  if (as === 'button') return <motion.button {...shared}>{children}</motion.button>
  return <motion.a href={href} {...shared}>{children}</motion.a>
}
