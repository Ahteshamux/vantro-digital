import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import FounderNote from '../components/FounderNote'
import ProblemBand from '../components/ProblemBand'
import StatsBand from '../components/StatsBand'
import IndustryCards from '../components/IndustryCards'
import ContactSection from '../components/ContactSection'
import { PAGES } from '../content/site'

export default function About() {
  return (
    <>
      <SEO
        title="About Vantro Digital — Small Business Marketing Agency"
        description="Vantro Digital is a marketing agency built for service-based small businesses generating $300K–$1.5M. One operator, no account managers, no handoff gaps."
        path="/about"
      />
      <PageHero page={PAGES.about} />
      <FounderNote />
      {/* Why the agency exists — the gap that prompted it. */}
      <ProblemBand />
      <StatsBand />
      <IndustryCards />
      <ContactSection />
    </>
  )
}
