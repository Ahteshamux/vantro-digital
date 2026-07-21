import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import MagneticButton from '../components/ui/MagneticButton'
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
import Reviews from '../components/Reviews'
import ContactSection from '../components/ContactSection'
import FinalCTA from '../components/FinalCTA'
import { STAGES_INTRO } from '../content/site'
import { scaleIn, viewportOnce } from '../lib/motion'

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

      {/* Packages teaser — full pricing lives at /packages */}
      <section className="py-12 md:py-16">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleIn}
            className="flex flex-col items-center gap-5 rounded-4xl border border-card-border bg-white px-6 py-10 text-center md:flex-row md:justify-between md:px-12 md:py-8 md:text-left"
          >
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-grey-light">Transparent pricing</p>
              <h2 className="mt-1 text-[22px] font-bold text-ink md:text-[26px]">Simple, project-based packages — no retainer required.</h2>
            </div>
            <MagneticButton
              as="link"
              to="/packages"
              className="inline-flex flex-none items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-white hover:bg-black"
            >
              View packages
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <FinalCTA />
    </>
  )
}
