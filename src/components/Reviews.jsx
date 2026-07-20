import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './ui/Primitives'
import { EASE, viewportOnce } from '../lib/motion'
import { REVIEWS } from '../content/site'

/**
 * Upwork review screenshots, shown as-is.
 *
 * Any image that fails to load removes its own card, and if none load the
 * section returns null — so this stays invisible until the PNGs are saved
 * rather than rendering broken-image icons.
 *
 * The quote rides in alt text only: a screenshot of text is invisible to
 * screen readers and search engines, and alt costs nothing visually.
 */
export default function Reviews() {
  const [failed, setFailed] = useState([])
  const onFail = (src) => setFailed((f) => (f.includes(src) ? f : [...f, src]))

  const visible = REVIEWS.items.filter((i) => !failed.includes(i.src))
  if (visible.length === 0) return null

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <SectionHeading tag={REVIEWS.tag} title={REVIEWS.title} subtitle={REVIEWS.subtitle} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          className="mt-12 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((item) => (
            <motion.img
              key={item.src}
              src={item.src}
              onError={() => onFail(item.src)}
              loading="lazy"
              decoding="async"
              alt={`Upwork review, ${item.rating} stars, for ${item.project}: “${item.quote}”`}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              className="w-full rounded-2xl"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
