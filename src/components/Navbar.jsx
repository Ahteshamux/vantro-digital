import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Logo, ArrowRight, Plus, Cross, Phone, ChevronDown } from './ui/Icons'
import { BRAND, NAV, CONVERSION } from '../content/site'
import { openCalendlyPopup } from '../lib/calendly'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openDrop, setOpenDrop] = useState(null) // desktop hover
  const [openAccordion, setOpenAccordion] = useState(null) // mobile
  const { pathname } = useLocation()

  const hasPhone = Boolean(CONVERSION.phone.display && CONVERSION.phone.dial)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on navigation.
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

  // A parent is "active" when any of its children is the current route.
  const isBranchActive = (item) =>
    pathname === item.href || item.children?.some((c) => pathname === c.href)

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`sticky top-0 z-50 bg-cream/85 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-b border-card-border' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <Link to="/" aria-label={`${BRAND.name} home`}>
          <Logo name={BRAND.name} />
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
                    active ? 'text-ink' : 'text-warm-grey hover:text-ink'
                  }`}
                >
                  {item.label}
                </NavLink>
              )
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDrop(item.label)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                    active ? 'text-ink' : 'text-warm-grey hover:text-ink'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openDrop === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </Link>

                {/* Panel is left-aligned to the trigger's px-3.5 padding so its
                    edge lines up with the parent label's text, not its box. */}
                <AnimatePresence>
                  {openDrop === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-3.5 top-full z-50 pt-3"
                    >
                      {/* Caret sits over the parent label, not the panel centre */}
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
              className="hidden items-center gap-2 rounded-full border border-ink/25 px-4 py-2.5 text-[14px] font-bold text-ink transition-colors hover:border-ink/60 xl:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {CONVERSION.phone.display}
            </motion.a>
          )}

          <motion.a
            href={CONVERSION.calendlyUrl || '/contact'}
            onClick={(e) => {
              // Open Calendly as a popup over the page, not a new tab.
              if (CONVERSION.calendlyUrl) {
                e.preventDefault()
                openCalendlyPopup(CONVERSION.calendlyUrl)
              }
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-black"
          >
            <span className="hidden sm:inline">{CONVERSION.hardCta}</span>
            <span className="sm:hidden">Book a call</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>

          <button
            onClick={() => setOpenMenu((v) => !v)}
            aria-label={openMenu ? 'Close menu' : 'Open menu'}
            aria-expanded={openMenu}
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-card-border text-ink lg:hidden"
          >
            {openMenu ? <Cross className="h-4 w-4" /> : <Plus className="h-4 w-4 rotate-45" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — dropdowns become accordions */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-card-border lg:hidden"
          >
            <div className="container-page max-h-[70vh] overflow-y-auto py-3">
              {NAV.map((item) => (
                <div key={item.label} className="border-b border-card-border/60">
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenAccordion((v) => (v === item.label ? null : item.label))
                        }
                        aria-expanded={openAccordion === item.label}
                        className="flex w-full items-center justify-between py-3.5 text-left text-[16px] font-medium text-ink"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 text-warm-grey transition-transform duration-200 ${
                            openAccordion === item.label ? 'rotate-180' : ''
                          }`}
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
                                  className={({ isActive }) =>
                                    `block py-2.5 text-[15px] ${
                                      isActive ? 'font-semibold text-ink' : 'text-warm-grey'
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
                    </>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block py-3.5 text-[16px] font-medium ${
                          isActive ? 'text-ink' : 'text-warm-grey'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}

              {hasPhone && (
                <a
                  href={`tel:${CONVERSION.phone.dial}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/25 px-5 py-3 text-[15px] font-bold text-ink"
                >
                  <Phone className="h-4 w-4" />
                  {CONVERSION.phone.display}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
