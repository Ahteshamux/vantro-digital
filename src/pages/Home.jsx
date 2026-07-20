import SEO from '../components/SEO'
import Hero from '../components/Hero'
import StatsBand from '../components/StatsBand'
import ProblemBand from '../components/ProblemBand'
import Comparison from '../components/Comparison'
import { SectionHeading, Bridge, BridgedHeading } from '../components/ui/Primitives'
import StageDesign from '../components/StageDesign'
import StageRank from '../components/StageRank'
import StageGrow from '../components/StageGrow'
import StageRetain from '../components/StageRetain'
import InstantResponse from '../components/InstantResponse'
import Process from '../components/Process'
import Proof from '../components/Proof'
import Reviews from '../components/Reviews'
import IndustryCards from '../components/IndustryCards'
import Packages from '../components/Packages'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import FinalCTA from '../components/FinalCTA'
import { STAGES_INTRO } from '../content/site'

export default function Home() {
  return (
    <>
      <SEO
        title="Website Design, SEO & Marketing for Small Business"
        description="Vantro Digital helps service businesses build, rank, grow and automate. Website design, local SEO, Google ads, and lead automation — all as one connected system."
        path="/"
      />
      <Hero />
      <StatsBand />
      <ProblemBand />
      <Comparison />

      {/* Proof of the comparison claim, not a standalone feature list */}
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

      {/* Spotlight on the most tangible value prop for the ICP — sits between
          the stages and the process timeline. */}
      <InstantResponse />

      <Process />
      <Proof />
      <Reviews />
      <IndustryCards />
      <Packages />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  )
}
