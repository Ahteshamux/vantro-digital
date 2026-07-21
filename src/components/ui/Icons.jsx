// Minimal, consistent stroke-based icon set (1.6 stroke, currentColor).
export const ArrowRight = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Check = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12.5l5 5L20 6" />
  </svg>
)

export const ChevronDown = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

// --- Process step icons (outline, 1.5 stroke) ---
export const IconSearch = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5L21 21" />
  </svg>
)

export const IconPen = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7-5-5-7 7v5h5z" />
    <path d="M14 7l3-3 5 5-3 3" />
    <path d="M3 21h8" />
  </svg>
)

export const IconNodes = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="6" height="5" rx="1.5" />
    <rect x="15" y="15" width="6" height="5" rx="1.5" />
    <path d="M9 6.5h4a2 2 0 0 1 2 2v9" />
    <path d="M6 9v3.5a2 2 0 0 0 2 2h4" />
  </svg>
)

export const IconLaunch = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.5 3.5c3.5 1 6 4.5 6 9l-3.5 3.5-5-5L14.5 7z" />
    <path d="M11 15.5L8.5 13" />
    <path d="M6 14c-1.5 1.5-1.5 4-1.5 5.5 1.5 0 4 0 5.5-1.5" />
  </svg>
)

// Landing Pages & CRO — a target/conversion mark, distinct from the pen.
export const IconTarget = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
)

// Google & Meta Ads — a megaphone (paid reach), distinct from the nodes.
export const IconMegaphone = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Horn: wide mouth on the right, narrow at the pivot on the left */}
    <path d="M18 5.5 8 10H5a1.5 1.5 0 0 0-1.5 1.5v1A1.5 1.5 0 0 0 5 14h3l10 4.5V5.5Z" />
    {/* Handle hanging from the base */}
    <path d="M7.5 14v3a1.5 1.5 0 0 0 3 0v-1.6" />
    {/* Sound waves */}
    <path d="M21 10v4" />
  </svg>
)

// Reviews & Reputation — a star, distinct from the SEO magnifier.
export const IconStarOutline = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3.5l2.6 5.3 5.9.86-4.25 4.14 1 5.85L12 17.9l-5.25 2.76 1-5.85L3.5 9.66l5.9-.86L12 3.5Z" />
  </svg>
)

// Lead Automation — a lightning bolt (instant/automated), distinct from nodes.
export const IconBolt = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10.5H13l0-8.5Z" />
  </svg>
)

export const Phone = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
)

export const Cross = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const Plus = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Dot = ({ className = 'w-1.5 h-1.5' }) => (
  <span className={`inline-block rounded-full bg-current ${className}`} />
)


export const Star = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.35l-5.81 3.05 1.11-6.47-4.7-4.58 6.5-.95L12 2.5z" />
  </svg>
)

export const ArrowDownRight = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7l10 10M17 8v9H8" />
  </svg>
)

/**
 * Brand wordmark — the real "Vantro Digital" lockup (mark + name) supplied
 * as an SVG. Served from /public, so it's referenced by literal URL rather
 * than imported (see src/assets/README.md). `className` controls height only;
 * `w-auto` preserves the ~7.5:1 aspect ratio. `name` becomes the alt text.
 */
export const Logo = ({ className = 'h-6', name = 'Vantro Digital' }) => (
  <img src="/logo/logo_website_navbar.svg" alt={name} className={`w-auto ${className}`} />
)
