import { motion } from 'framer-motion'
import { TagPill } from './ui/Primitives'
import { Check, Phone } from './ui/Icons'
import { scaleIn, viewportOnce, EASE } from '../lib/motion'
import { INSTANT_RESPONSE } from '../content/site'

const row = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

/**
 * Call / chat mockup — illustrative of how the flow behaves, not a client
 * transcript. Timestamps show elapsed seconds, which is the actual claim
 * (instant response), rather than any outcome we haven't measured.
 */
const THREAD = [
  { kind: 'call', who: 'Missed call — 9:04pm', text: 'AI assistant picked up', t: '0:00' },
  { kind: 'bot', who: 'Assistant', text: '“Hi — we’re closed, but I can book you in. What do you need?”', t: '0:02' },
  { kind: 'user', who: 'Caller', text: '“Boiler’s leaking, anyone tomorrow morning?”', t: '0:11' },
  { kind: 'bot', who: 'Assistant', text: '“Booked — 8:30am tomorrow. Confirmation sent by text.”', t: '0:24' },
]

function ResponseMockup() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
          <Phone className="h-3.5 w-3.5" />
          After hours
        </span>
        <span className="flex items-center gap-1.5 text-[12px] text-white/45">
          <span className="h-2 w-2 rounded-full bg-[#8FA31E]" />
          Always on
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
        className="mt-6 space-y-3"
      >
        {THREAD.map((m, i) => (
          <motion.div
            key={i}
            variants={row}
            className={`flex ${m.kind === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[86%] rounded-2xl px-4 py-3 ${
                m.kind === 'call'
                  ? 'w-full border border-white/10 bg-transparent'
                  : m.kind === 'user'
                    ? 'bg-white/10'
                    : 'bg-lime/90'
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${
                    m.kind === 'bot' ? 'text-ink/50' : 'text-white/40'
                  }`}
                >
                  {m.who}
                </span>
                <span
                  className={`flex-none text-[11px] tabular-nums ${
                    m.kind === 'bot' ? 'text-ink/40' : 'text-white/30'
                  }`}
                >
                  +{m.t}
                </span>
              </div>
              <p
                className={`mt-1 text-[13.5px] leading-snug ${
                  m.kind === 'bot' ? 'font-medium text-ink' : 'text-white/80'
                }`}
              >
                {m.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 rounded-xl bg-lime/15 p-3.5">
        <p className="text-[12.5px] leading-snug text-white/80">
          Booked in 24 seconds —{' '}
          <span className="font-bold text-white">while you were asleep.</span>
        </p>
      </div>
    </div>
  )
}

export default function InstantResponse() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          className="overflow-hidden rounded-4xl bg-charcoal px-7 py-12 md:px-14 md:py-16"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="flex flex-col justify-center">
              <TagPill tone="onDark">{INSTANT_RESPONSE.tag}</TagPill>

              <h2 className="mt-7 text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[40px]">
                {INSTANT_RESPONSE.headline}
              </h2>

              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-white/55">
                {INSTANT_RESPONSE.body}
              </p>
              <p className="mt-5 max-w-lg border-l-2 border-lime/60 pl-4 text-[15.5px] font-medium leading-relaxed text-white/85">
                {INSTANT_RESPONSE.emphasis}
              </p>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
                className="mt-8 space-y-4"
              >
                {INSTANT_RESPONSE.checklist.map((item) => (
                  <motion.li key={item.label} variants={row} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-lime text-ink">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold leading-snug text-white">
                        {item.label}
                      </span>
                      <span className="block text-[13px] leading-snug text-white/45">
                        {item.detail}
                      </span>
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="flex flex-col justify-center">
              <ResponseMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
