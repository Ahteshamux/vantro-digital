import { motion } from 'framer-motion'
import { Check } from './Icons'
import { EASE, viewportOnce } from '../../lib/motion'

export default function Checklist({ items }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
      className="mt-7 space-y-4"
    >
      {items.map((it) => (
        <motion.li
          key={it.title}
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
          }}
          className="flex gap-3.5"
        >
          <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-lime/25 text-ink">
            <Check className="h-3.5 w-3.5" />
          </span>
          <div>
            <span className="text-[15px] font-semibold text-ink">{it.title}</span>
            <span className="text-[15px] text-warm-grey"> — {it.desc}</span>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}
