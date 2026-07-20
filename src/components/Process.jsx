import { motion } from 'framer-motion'
import { Bridge, TagPill } from './ui/Primitives'
import { IconSearch, IconPen, IconNodes, IconLaunch } from './ui/Icons'
import { EASE, viewportOnce } from '../lib/motion'
import { PROCESS } from '../content/site'

const ICONS = {
  search: IconSearch,
  pen: IconPen,
  nodes: IconNodes,
  launch: IconLaunch,
}

function StepCard({ step }) {
  const Icon = ICONS[step.icon]
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
      className={`flex min-h-[380px] flex-col justify-between rounded-3xl p-7 md:p-8 ${step.tone}`}
    >
      <Icon className="h-7 w-7 text-ink" />

      <div>
        <h3 className="text-[21px] font-bold tracking-[-0.015em] text-ink md:text-[23px]">
          {step.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink/60">{step.desc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {step.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-lg bg-white px-3 py-1.5 text-[12.5px] font-medium text-ink"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Process() {
  return (
    <section id="process" className="bg-[#F1EFE9] py-16 md:py-24">
      <div className="container-page">
        <Bridge align="left">{PROCESS.bridge}</Bridge>

        {/* Asymmetric header: heading left, supporting copy right. */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          className="grid items-start gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
            }}
          >
            <TagPill>{PROCESS.tag}</TagPill>
            <h2 className="mt-5 text-[38px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[52px]">
              <span className="block text-ink">{PROCESS.title[0]}</span>
              <span className="block text-warm-grey-light">{PROCESS.title[1]}</span>
            </h2>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
            }}
            className="max-w-sm text-[15px] leading-relaxed text-warm-grey lg:mt-3 lg:justify-self-end"
          >
            {PROCESS.subtitle}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROCESS.steps.map((step) => (
            <StepCard key={step.title} step={step} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
