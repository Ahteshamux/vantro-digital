import { motion } from 'framer-motion'
import FeatureLayout from './ui/FeatureLayout'
import { EASE, viewportOnce } from '../lib/motion'

const CHECKS = [
  { label: 'Site structure', state: 'Clean' },
  { label: 'Page speed', state: 'Fast' },
  { label: 'On-page relevance', state: 'Mapped' },
]

/** Search-result card + a speed dial that fills on view. */
function RankMockup() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-5 shadow-card md:p-6">
      <span className="text-[14px] font-semibold text-ink">Findability check</span>

      <div className="mt-5 rounded-xl border border-card-border/70 bg-cream/40 p-4">
        <div className="text-[11px] text-warm-grey-light">yourbusiness.com › services</div>
        <div className="mt-1 text-[14px] font-semibold text-[#3C6690]">
          Emergency HVAC repair — same day service
        </div>
        <div className="mt-1 text-[12px] leading-snug text-warm-grey">
          Book online in under 60 seconds. Licensed technicians, transparent pricing…
        </div>
      </div>

      <div className="mt-5 flex items-center gap-5">
        <div className="relative h-[72px] w-[72px] flex-none">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#EAEAE5" strokeWidth="4" />
            <motion.circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#8FA31E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="97.4"
              initial={{ strokeDashoffset: 97.4 }}
              whileInView={{ strokeDashoffset: 97.4 * 0.08 }}
              viewport={viewportOnce}
              transition={{ duration: 1.1, ease: EASE }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[15px] font-bold text-ink">
            Fast
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          className="flex-1 space-y-2"
        >
          {CHECKS.map((c) => (
            <motion.div
              key={c.label}
              variants={{
                hidden: { opacity: 0, x: 10 },
                show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
              }}
              className="flex items-center justify-between text-[12.5px]"
            >
              <span className="text-warm-grey">{c.label}</span>
              <span className="rounded-full bg-lime/25 px-2 py-0.5 font-semibold text-ink">
                {c.state}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function StageRank() {
  return (
    <FeatureLayout
      reverse
      tag="Stage 2 — Rank"
      title="Make sure the new asset can actually be found."
      paragraph="Three different jobs, on three different clocks. Your Google Business Profile is the fastest way local customers find you, so it's included by default. Ads buy leads immediately. SEO compounds slowly and never stops — which is why it's ongoing work, not a 30-day promise."
      checklist={[
        {
          title: 'Google Business Profile',
          desc: 'included by default — the fastest way local customers find and call you',
        },
        {
          title: 'Google Ads & Local Services Ads',
          desc: 'optional paid add-on when you need lead flow this week, not next quarter',
        },
        {
          title: 'SEO',
          desc: 'optional ongoing add-on — compounds over months, so we never sell it as a 30-day result',
        },
      ]}
      mockup={<RankMockup />}
    />
  )
}
