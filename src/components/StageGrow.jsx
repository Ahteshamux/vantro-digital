import { motion } from 'framer-motion'
import FeatureLayout from './ui/FeatureLayout'
import { EASE, viewportOnce } from '../lib/motion'

/**
 * Illustrative funnel, not a client result.
 *
 * The widths are a generic drop-off shape used to explain what a CRO audit
 * looks at — deliberately expressed as relative percentages of the previous
 * step, with no revenue figure and no named client attached. Do NOT swap
 * these for real-looking numbers until a real engagement produces them;
 * a mockup that reads as a case study is a claim we'd have to defend.
 */
const FUNNEL = [
  { label: 'Ad click', pct: 100, tone: '#5B8DEF' },
  { label: 'Landing page view', pct: 82, tone: '#5B8DEF' },
  { label: 'Reached the offer', pct: 41, tone: '#E0B341', leak: true },
  { label: 'Started the form', pct: 18, tone: '#E0B341' },
  { label: 'Submitted', pct: 6, tone: '#8FA31E' },
]

/** Funnel drop-off — the CRO story told as where the spend evaporates. */
function ConversionMockup() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-5 shadow-card md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[14px] font-semibold text-ink">Funnel drop-off</span>
        <span className="rounded-full bg-lime/25 px-2.5 py-1 text-[11.5px] font-bold text-ink">
          Example audit
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-2.5"
      >
        {FUNNEL.map((step) => (
          <motion.div
            key={step.label}
            variants={{
              hidden: { opacity: 0, x: 10 },
              show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
            }}
          >
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="text-[12.5px] text-warm-grey">{step.label}</span>
              <span className="flex-none text-[12px] font-semibold text-ink">{step.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-cream">
              <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  show: { scaleX: 1, transition: { duration: 0.7, ease: EASE } },
                }}
                style={{ width: `${step.pct}%`, backgroundColor: step.tone, transformOrigin: 'left' }}
                className="h-full rounded-full"
              />
            </div>
            {step.leak && (
              <div className="mt-1.5 text-[11.5px] font-medium text-[#B4881B]">
                ← half the spend lost before anyone sees the offer
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-5 rounded-xl bg-lime/15 p-3.5">
        <p className="text-[12.5px] leading-snug text-ink/80">
          More traffic won’t fix this —{' '}
          <span className="font-bold text-ink">you’d just pay more for the same leak.</span>
        </p>
      </div>
    </div>
  )
}

export default function StageGrow() {
  return (
    <FeatureLayout
      tag="Stage 3 — Grow"
      title="Turn the traffic you’re already paying for into booked jobs."
      paragraph="If the ads run but nobody books, the problem is usually the page, the offer, or nobody answering fast enough — not the budget. We fix the path from click to booking, then put AI on the front line so every enquiry gets a reply in seconds."
      checklist={[
        {
          title: 'AI chatbot',
          desc: 'on your site and social DMs — answers FAQs, qualifies the lead, books straight into your calendar',
        },
        {
          title: 'AI call assistant',
          desc: 'answers every missed call, qualifies the caller, books or texts a confirmation — nothing goes to voicemail',
        },
        {
          title: 'Instant lead routing',
          desc: 'every enquiry sent to the right person immediately, so nothing sits unanswered overnight',
        },
      ]}
      mockup={<ConversionMockup />}
    />
  )
}
