import { motion } from 'framer-motion'
import FeatureLayout from './ui/FeatureLayout'
import { EASE, viewportOnce } from '../lib/motion'

/** Figma-style canvas: layout blocks assembling into a page. */
function DesignMockup() {
  const blocks = [
    { w: 'w-1/2', h: 'h-3' },
    { w: 'w-3/4', h: 'h-3' },
    { w: 'w-1/3', h: 'h-8', accent: true },
  ]
  return (
    <div className="rounded-2xl border border-card-border bg-white p-5 shadow-card md:p-6">
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-semibold text-ink">Homepage — v3</span>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EF8B6B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E0B341]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8FA31E]" />
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-5 rounded-xl border border-dashed border-card-border bg-cream/40 p-5"
      >
        <div className="space-y-2.5">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scaleX: 0.7 },
                show: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: EASE } },
              }}
              style={{ transformOrigin: 'left' }}
              className={`${b.w} ${b.h} rounded-md ${b.accent ? 'bg-lime' : 'bg-ink/10'}`}
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
              }}
              className="h-16 rounded-lg border border-card-border bg-white"
            />
          ))}
        </div>
      </motion.div>

      <div className="mt-5 flex items-center justify-between text-[12px]">
        <span className="text-warm-grey">Conversion-focused layout</span>
        <span className="rounded-full bg-lime/25 px-2.5 py-1 font-semibold text-ink">Mobile-ready</span>
      </div>
    </div>
  )
}

export default function StageDesign() {
  return (
    <FeatureLayout
      tag="Stage 1 — Build"
      title="Rebuild the front door people actually judge you on."
      paragraph="Website, booking flow or app UI — designed in Figma around what your audit found, then built and shipped live. Not a template, and not a mockup you have to find someone else to code."
      checklist={[
        { title: 'Designed in Figma', desc: 'real layouts you review before anything gets built' },
        { title: 'Built and shipped', desc: 'same operator designs it and puts it live — no handoff gap' },
        { title: 'Mobile-responsive', desc: 'because most of your traffic is already on a phone' },
      ]}
      mockup={<DesignMockup />}
    />
  )
}
