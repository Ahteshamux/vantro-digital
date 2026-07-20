import PageHero from '../components/ui/PageHero'
import TimelineCard from '../components/ui/TimelineCard'
import { SectionHeading, Bridge, BridgedHeading } from '../components/ui/Primitives'
import StageDesign from '../components/StageDesign'
import StageRank from '../components/StageRank'
import StageGrow from '../components/StageGrow'
import StageRetain from '../components/StageRetain'
import Process from '../components/Process'
import Comparison from '../components/Comparison'
import FinalCTA from '../components/FinalCTA'
import { PAGES, STAGES_INTRO } from '../content/site'

export default function HowWeWork() {
  return (
    <>
      <PageHero page={PAGES.howWeWork} visual={<TimelineCard />} />

      {/* The 30-day mechanics first — this page is about process. */}
      <Process />

      {/* Then the four stages that process delivers. */}
      <section id="system" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-page">
          <Bridge>{STAGES_INTRO.bridge}</Bridge>
          <BridgedHeading>
            <SectionHeading
              tag={STAGES_INTRO.tag}
              title={STAGES_INTRO.title}
              subtitle={STAGES_INTRO.subtitle}
              className="mb-14"
            />
          </BridgedHeading>
          <div className="space-y-6 md:space-y-8">
            <StageDesign />
            <StageRank />
            <StageGrow />
            <StageRetain />
          </div>
        </div>
      </section>

      <Comparison />
      <FinalCTA />
    </>
  )
}
