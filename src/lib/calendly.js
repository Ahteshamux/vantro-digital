/**
 * Calendly integration — lazy-loaded.
 *
 * Calendly's widget needs an external script + stylesheet from
 * assets.calendly.com. We do NOT put those in index.html, because that would
 * block every page load for a third-party request most visitors never trigger.
 * Instead we inject them on first use (first popup open, or when an inline
 * embed mounts) and cache the load promise so it only happens once.
 */

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css'

let loadPromise = null

/** Load the Calendly widget assets once; resolves when window.Calendly exists. */
export function loadCalendly() {
  if (typeof window === 'undefined') return Promise.resolve(null)
  if (window.Calendly) return Promise.resolve(window.Calendly)
  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve, reject) => {
    // Stylesheet (safe to add unconditionally; browser dedupes by href).
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CSS_HREF
      document.head.appendChild(link)
    }

    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(window.Calendly))
      existing.addEventListener('error', reject)
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => resolve(window.Calendly)
    script.onerror = reject
    document.head.appendChild(script)
  })

  return loadPromise
}

/**
 * Open the Calendly scheduling popup over the current page.
 * No-op (returns false) if no URL is configured, so callers can fall back.
 */
export function openCalendlyPopup(url) {
  if (!url) return false
  loadCalendly()
    .then((Calendly) => Calendly && Calendly.initPopupWidget({ url }))
    .catch(() => {
      // Network/adblock failure — send them to the real page rather than
      // leaving the click dead.
      window.open(url, '_blank', 'noopener,noreferrer')
    })
  return true
}
