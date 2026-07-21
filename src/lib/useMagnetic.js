import { useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Magnetic hover: while the cursor is over the element it drifts toward the
 * pointer by a fraction of the distance from the element's centre, then
 * springs back to rest on mouse-leave.
 *
 * Returns props to spread onto a framer `motion` element:
 *   const m = useMagnetic()
 *   <motion.a ref={m.ref} style={m.style} onMouseMove={m.onMouseMove}
 *             onMouseLeave={m.onMouseLeave} whileHover={{ scale: 1.04 }} />
 *
 * `style` carries only x/y, so it composes cleanly with a whileHover scale on
 * the same element — framer merges the transforms.
 */
export function useMagnetic(strength = 0.2) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  // Soft, no-overshoot spring so the return glides rather than snaps.
  const spring = { stiffness: 220, damping: 20, mass: 0.4 }
  const sx = useSpring(x, spring)
  const sy = useSpring(y, spring)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, style: { x: sx, y: sy }, onMouseMove, onMouseLeave }
}
