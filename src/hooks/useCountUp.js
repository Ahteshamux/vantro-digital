import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Counts from 0 → target once the element scrolls into view.
// Returns the raw interpolated value; callers apply their own suffix/formatting.
export function useCountUp(target, { duration = 1400, decimals = 0 } = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    let start
    const ease = (t) => 1 - Math.pow(1 - t, 3) // easeOutCubic

    const tick = (now) => {
      if (start === undefined) start = now
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const current = target * ease(progress)
      setValue(Number(current.toFixed(decimals)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, decimals])

  return { ref, value }
}
