import { motion } from 'framer-motion'
import { IconLaunch, IconPen, IconSearch, IconNodes } from './ui/Icons'
import { viewportOnce } from '../lib/motion'
import { SERVICES_GRID } from '../content/site'

const ICONS = { launch: IconLaunch, pen: IconPen, search: IconSearch, nodes: IconNodes }

/**
 * The colour strips that fan out behind a card's top edge on hover.
 *
 * Brand palette only (ink + the three limes) — the reference used yellow/
 * pink/purple/mint, but the site is lime-and-ink, so the fan is built from
 * those. Ordered back-to-front: the palest peeks highest, the dark ink sits
 * nearest the card top. `y` is how far it lifts; `delay` staggers the reveal.
 */
const STRIPS = [
  { color: '#EBEFB0', y: 28, delay: 120 }, // lime-pale (back, peeks most)
  { color: '#E4EC8E', y: 21, delay: 80 }, // lime-soft
  { color: '#D4E84C', y: 14, delay: 40 }, // lime
  { color: '#161616', y: 7, delay: 0 }, // ink (front, nearest the card)
]

function ServiceCard({ name, icon }) {
  const Icon = ICONS[icon] || IconLaunch

  return (
    <div className="group relative isolate cursor-default">
      {/* Colour strips — behind everything, hidden under the card at rest,
          lifting out above the top edge on hover, staggered. */}
      {STRIPS.map((s) => (
        <span
          key={s.color}
          aria-hidden
          className="absolute inset-x-9 top-0 z-0 h-3.5 translate-y-0 rounded-t-[10px] transition-transform duration-300 ease-out group-hover:-translate-y-[var(--peek)]"
          style={{ background: s.color, '--peek': `${s.y}px`, transitionDelay: `${s.delay}ms` }}
        />
      ))}

      {/* Card background — the ONLY thing that skews. Origin at the top edge,
          so a subtle rotateX tips the bottom toward the viewer like a folder
          flap opening. Content sits on its own layer and stays upright. */}
      <span className="absolute inset-0 z-10 origin-top rounded-[22px] border border-card-border bg-white shadow-card transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:perspective(1100px)_rotateX(-7deg)]" />

      {/* Content — never transformed. */}
      <div className="relative z-20 flex min-h-[188px] items-center justify-between gap-4 px-9 py-10 md:px-11">
        <h3 className="text-[26px] font-bold tracking-[-0.01em] text-ink md:text-[32px]">{name}</h3>
        <Icon className="h-14 w-14 flex-none text-ink md:h-16 md:w-16" />
      </div>
    </div>
  )
}

export default function OurServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        {/* Heading + top-right subheading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <h2 className="text-[46px] font-bold leading-[0.98] tracking-[-0.02em] text-ink md:text-[64px]">
            <span className="block">{SERVICES_GRID.headline[0]}</span>
            <span className="block">{SERVICES_GRID.headline[1]}</span>
          </h2>

          <p className="max-w-xs text-[15.5px] leading-relaxed text-warm-grey md:pt-3 md:text-right">
            {SERVICES_GRID.sub}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-7 md:mt-16 md:grid-cols-2"
        >
          {SERVICES_GRID.cards.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <ServiceCard name={c.name} icon={c.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
