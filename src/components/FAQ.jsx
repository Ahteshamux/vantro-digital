import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading, ButtonOutline } from './ui/Primitives'
import { ChevronDown, ArrowRight } from './ui/Icons'
import { EASE, viewportOnce } from '../lib/motion'
import { FAQS } from '../content/site'

function Row({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-card-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] font-semibold text-ink md:text-[17px]">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-none text-warm-grey transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-[15px] leading-relaxed text-warm-grey">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          tag="FAQ"
          title="Questions"
          subtitle="The things founders actually ask before booking the audit."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className="mx-auto mt-11 max-w-3xl"
        >
          {FAQS.map((item) => (
            <Row key={item.q} item={item} />
          ))}

          <div className="mt-9 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-[14.5px] text-warm-grey">Don’t see your question?</span>
            <ButtonOutline className="py-2.5 text-[14px]">
              Ask it directly
              <ArrowRight className="h-4 w-4" />
            </ButtonOutline>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
