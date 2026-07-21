import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ResultsBento from '../components/ResultsBento'
import ProblemBand from '../components/ProblemBand'
import TiredOfIssues from '../components/TiredOfIssues'
import OurServices from '../components/OurServices'
import { SectionHeading, Bridge, BridgedHeading } from '../components/ui/Primitives'
import StageDesign from '../components/StageDesign'
import StageRank from '../components/StageRank'
import StageGrow from '../components/StageGrow'
import StageRetain from '../components/StageRetain'
import InstantResponse from '../components/InstantResponse'
import Proof from '../components/Proof'
import Packages from '../components/Packages'
import ActionCards from '../components/ActionCards'
import Reviews from '../components/Reviews'
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
      <ProblemBand />
      <TiredOfIssues />
      <OurServices />

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

      <InstantResponse />
      <Proof />
      <ResultsBento />
      <Reviews />

      {/* Real pricing cards — same component as /packages, one source of truth */}
      <Packages />

      {/* Book a call + referral, directly under pricing */}
      <ActionCards />

      <ContactSection />
      <FinalCTA />
    </>
  )
}
