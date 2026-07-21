import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Logo, ArrowRight, Plus, Cross, Phone, ChevronDown } from './ui/Icons'
import { BRAND, NAV, CONVERSION } from '../content/site'
import { openCalendlyPopup } from '../lib/calendly'
import { useMagnetic } from '../lib/useMagnetic'

// Relative luminance of a CSS rgb/rgba string; <0.5 reads as a dark surface.
function luminance(rgb) {
  const m = rgb && rgb.match(/[\d.]+/g)
  if (!m) return 1
  const [r, g, b, a] = m.map(Number)
  if (a === 0) return 1 // fully transparent → treat as light
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openDrop, setOpenDrop] = useState(null)
  const [openAccordion, setOpenAccordion] = useState(null)
  // `overDark` = the section directly behind the pill is dark, so the pill
  // flips to white (and vice-versa) — always the opposite of what's behind it.
  const [overDark, setOverDark] = useState(true)
  const pillRef = useRef(null)
  const { pathname } = useLocation()

  const hasPhone = Boolean(CONVERSION.phone.display && CONVERSION.phone.dial)

  // Sample the background just below the pill and flip the theme to contrast it.
  useEffect(() => {
    const compute = () => {
      const pill = pillRef.current
      if (!pill) return
      const r = pill.getBoundingClientRect()
      const target = document.elementFromPoint(r.left + r.width / 2, r.bottom + 14)
      if (!target) return
      let node = target
      let bg = null
      while (node && node !== document.documentElement) {
        const c = getComputedStyle(node).backgroundColor
        if (c && luminance(c) !== 1) {
          bg = c
          break
        }
        node = node.parentElement
      }
      setOverDark(bg ? luminance(bg) < 0.5 : false)
    }
    compute()
    const t = setTimeout(compute, 120) // after first paint / route swap
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [pathname])

  useEffect(() => {
    setOpenMenu(false)
    setOpenDrop(null)
    setOpenAccordion(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [openMenu])

  const bookMag = useMagnetic()

  const isBranchActive = (item) =>
    pathname === item.href || item.children?.some((c) => pathname === c.href)

  // Theme tokens. `overDark` → white pill / dark ink; else → black pill / white.
  const t = {
    pill: overDark ? 'bg-white' : 'bg-ink',
    link: overDark ? 'text-warm-grey hover:text-ink' : 'text-white/65 hover:text-white',
    linkActive: overDark ? 'text-ink' : 'text-white',
    book: overDark ? 'bg-ink text-white' : 'bg-lime text-ink',
    menuBtn: overDark ? 'border-card-border text-ink' : 'border-white/25 text-white',
    phone: overDark ? 'border-ink/25 text-ink hover:border-ink/60' : 'border-white/25 text-white hover:border-white/60',
    logo: overDark ? '' : '[filter:brightness(0)_invert(1)]',
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 md:top-4 md:px-4">
      <motion.header
        ref={pillRef}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`pointer-events-auto mx-auto max-w-6xl rounded-full shadow-lift transition-colors duration-300 ${t.pill}`}
      >
        <nav aria-label="Main navigation" className="flex h-14 items-center justify-between gap-4 pl-5 pr-3 md:h-16 md:pl-7 md:pr-3">
          <Link to="/" aria-label={`${BRAND.name} home`}>
            <Logo name={BRAND.name} className={`h-6 w-auto ${t.logo}`} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex" onMouseLeave={() => setOpenDrop(null)}>
            {NAV.map((item) => {
              const active = isBranchActive(item)
              if (!item.children) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className={`rounded-lg px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                      active ? t.linkActive : t.link
                    }`}
                  >
                    {item.label}
                  </NavLink>
                )
              }
              return (
                <div key={item.label} className="relative" onMouseEnter={() => setOpenDrop(item.label)}>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                      active ? t.linkActive : t.link
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDrop === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {openDrop === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-3.5 top-full z-50 pt-3"
                      >
                        <span className="absolute left-6 top-1.5 h-3 w-3 rotate-45 border-l border-t border-card-border bg-white" />
                        <div className="relative w-[264px] overflow-hidden rounded-2xl border border-card-border bg-white p-2 shadow-card">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.href}
                              to={child.href}
                              className={({ isActive }) =>
                                `block rounded-xl px-3.5 py-2.5 text-[14px] transition-colors ${
                                  isActive
                                    ? 'bg-cream font-semibold text-ink'
                                    : 'text-warm-grey hover:bg-cream hover:text-ink'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-3">
            {hasPhone && (
              <motion.a
                href={`tel:${CONVERSION.phone.dial}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-bold transition-colors xl:inline-flex ${t.phone}`}
              >
                <Phone className="h-4 w-4" />
                {CONVERSION.phone.display}
              </motion.a>
            )}

            <motion.a
              ref={bookMag.ref}
              href={CONVERSION.calendlyUrl || '/contact'}
              onClick={(e) => {
                if (CONVERSION.calendlyUrl) {
                  e.preventDefault()
                  openCalendlyPopup(CONVERSION.calendlyUrl)
                }
              }}
              onMouseMove={bookMag.onMouseMove}
              onMouseLeave={bookMag.onMouseLeave}
              style={bookMag.style}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors sm:inline-flex ${t.book}`}
            >
              <span className="hidden sm:inline">{CONVERSION.hardCta}</span>
              <span className="sm:hidden">Book a call</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>

            <button
              onClick={() => setOpenMenu((v) => !v)}
              aria-label={openMenu ? 'Close menu' : 'Open menu'}
              aria-expanded={openMenu}
              className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-colors lg:hidden ${t.menuBtn}`}
            >
              {openMenu ? <Cross className="h-4 w-4" /> : <Plus className="h-4 w-4 rotate-45" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — drops as a panel inside the rounded pill. */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`overflow-hidden lg:hidden ${overDark ? 'border-t border-card-border' : 'border-t border-white/10'}`}
            >
              <div className="max-h-[70vh] overflow-y-auto px-5 py-3">
                {NAV.map((item) => (
                  <div key={item.label} className={overDark ? 'border-b border-card-border/60' : 'border-b border-white/10'}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setOpenAccordion((v) => (v === item.label ? null : item.label))}
                          aria-expanded={openAccordion === item.label}
                          className={`flex w-full items-center justify-between py-3.5 text-left text-[16px] font-medium ${t.linkActive}`}
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${openAccordion === item.label ? 'rotate-180' : ''} ${overDark ? 'text-warm-grey' : 'text-white/50'}`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {openAccordion === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 pl-3">
                                {item.children.map((child) => (
                                  <NavLink
                                    key={child.href}
                                    to={child.href}
                                    className={`block py-2.5 text-[15px] ${overDark ? 'text-warm-grey' : 'text-white/70'}`}
                                  >
                                    {child.label}
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink to={item.href} className={`block py-3.5 text-[16px] font-medium ${t.linkActive}`}>
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
