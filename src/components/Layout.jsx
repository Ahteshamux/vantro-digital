import { useEffect } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

/** Jump to top on route change — otherwise the new page opens mid-scroll. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return // let in-page anchors do their thing
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

/**
 * Shared shell. The beige page background with the inset cream panel is the
 * site's signature — every page sits inside it, so the frame is continuous
 * as you navigate.
 */
export default function Layout() {
  return (
    <div id="top" className="min-h-screen bg-cream">
      <ScrollToTop />

      {/* Floating, contrast-adaptive navbar — fixed, so it overlaps the first
          section. First sections carry enough top padding to clear it. */}
      <Navbar />

      <main id="main-content" className="bg-cream">
        <Outlet />
      </main>

      <Footer />

      <Link
        to="/contact"
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-[13.5px] font-semibold text-white shadow-lift transition-transform duration-200 hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-5.4A8.5 8.5 0 1 1 21 11.5Z" />
        </svg>
        Let’s talk
      </Link>
    </div>
  )
}
