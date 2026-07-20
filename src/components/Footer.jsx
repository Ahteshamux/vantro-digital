import { Link } from 'react-router-dom'
import { Logo } from './ui/Icons'
import { BRAND, FOOTER } from '../content/site'

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-cream">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div>
            <Link to="/">
              <Logo name={BRAND.name} />
            </Link>
            <p className="mt-4 max-w-[240px] text-[13.5px] leading-relaxed text-warm-grey">
              {FOOTER.blurb}
            </p>
            <p className="mt-3 max-w-[240px] text-[12.5px] leading-relaxed text-warm-grey-light">
              {FOOTER.toolsLine}
            </p>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-wide text-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="text-[13.5px] text-warm-grey transition-colors duration-200 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-card-border pt-7 sm:flex-row">
          <Logo className="h-5" name={BRAND.name} />
          <p className="text-[13px] text-warm-grey">
            © 2026 {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-5 text-[13px] text-warm-grey">
            <Link to="/contact" className="transition-colors hover:text-ink">
              Contact
            </Link>
            <Link to="/work" className="transition-colors hover:text-ink">
              Work
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
