import { useEffect, useRef } from 'react'
import { loadCalendly } from '../lib/calendly'

/**
 * Inline Calendly scheduler — the full "Select a Date & Time" widget embedded
 * directly in the page, open and ready (no click required).
 *
 * Renders nothing if no URL is passed, so a page that includes it degrades
 * cleanly while CONVERSION.calendlyUrl is still null.
 */
export default function CalendlyInline({ url, className = '', height = 660 }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!url || !ref.current) return
    const el = ref.current
    let cancelled = false

    loadCalendly()
      .then((Calendly) => {
        if (cancelled || !Calendly || !el) return
        el.innerHTML = '' // guard against a double-init in React strict mode
        Calendly.initInlineWidget({ url, parentElement: el })
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [url])

  if (!url) return null

  return (
    <div
      ref={ref}
      // Calendly needs an explicit height to render. It scrolls internally
      // when constrained, so a smaller height just shows less at once.
      style={{ minWidth: '280px', height: `${height}px` }}
      className={`overflow-hidden rounded-2xl bg-white ${className}`}
    />
  )
}
