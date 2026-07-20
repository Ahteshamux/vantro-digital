import { motion } from 'framer-motion'
import FeatureLayout from './ui/FeatureLayout'
import { EASE, viewportOnce } from '../lib/motion'
import { FRAMEWORK } from '../content/site'

/**
 * Stage 4 — Automate.
 *
 * Was "Retain". Renamed because the outreach pitch sells four things —
 * build, rank, grow, automate — and retention is one flow inside automation,
 * not a peer of it. The retention story is not lost: the rebooking, review
 * and win-back flows below are the same ones the old Retain stage led with,
 * now sitting alongside instant lead response.
 */
const FLOWS = [
  { title: 'Instant lead reply', trigger: 'SMS + email within seconds of a form submit', color: '#5B8DEF' },
  { title: 'Booking & routing', trigger: 'Assigned by service type and location', color: '#C98BDB' },
  { title: 'Rebooking reminder', trigger: 'Sent at day 75 of a 90-day cycle', color: '#8FA31E' },
  { title: 'Win-back flow', trigger: 'Sent when a customer goes quiet', color: '#E0B341' },
]

/** The automation layer, shown as the flows that run without anyone touching them. */
function AutomateMockup() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-5 shadow-card md:p-6">
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-semibold text-ink">{FRAMEWORK}</span>
        <span className="rounded-full bg-lime/25 px-2.5 py-1 text-[11.5px] font-bold text-ink">
          Always on
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ show: { transition: { staggerChildren: 0.11 } } }}
        className="mt-5 space-y-3"
      >
        {FLOWS.map((f) => (
          <motion.div
            key={f.title}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
            }}
            className="flex items-center gap-3 rounded-xl border border-card-border/70 bg-cream/40 p-3.5"
          >
            <span
              className="h-8 w-1 flex-none rounded-full"
              style={{ backgroundColor: f.color }}
            />
            <div className="min-w-0 flex-1">
              <div className="text-[13.5px] font-semibold text-ink">{f.title}</div>
              <div className="text-[12px] text-warm-grey">{f.trigger}</div>
            </div>
            <span className="flex-none text-[11.5px] font-medium text-[#6E8215]">Running</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-5 rounded-xl bg-[#F4F7E4] p-4">
        <p className="text-[12.5px] leading-snug text-ink/80">
          No lead sits unanswered and no customer quietly drifts —
          <span className="font-bold text-ink"> even at 11pm on a Sunday.</span>
        </p>
      </div>
    </div>
  )
}

export default function StageRetain() {
  return (
    <FeatureLayout
      reverse
      tag="Stage 4 — Automate"
      title="Answer every lead, and bring back the ones you already paid for."
      paragraph="Capture, instant follow-up, routing, rebooking and win-back wired together with n8n, GoHighLevel and Claude-powered workflows — so response time stops depending on who happens to be free."
      checklist={[
        { title: 'Instant follow-up', desc: 'SMS and email that fire in seconds, not hours' },
        { title: 'Booking & routing', desc: 'the right job to the right person, automatically' },
        { title: 'Rebooking & win-back', desc: 'reach them before the gap turns into a lost customer' },
      ]}
      mockup={<AutomateMockup />}
    />
  )
}
