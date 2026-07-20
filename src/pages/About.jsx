import PageHero from '../components/ui/PageHero'
import FounderNote from '../components/FounderNote'
import ProblemBand from '../components/ProblemBand'
import StatsBand from '../components/StatsBand'
import ContactSection from '../components/ContactSection'
import { PAGES } from '../content/site'

export default function About() {
  return (
    <>
      <PageHero page={PAGES.about} />
      <FounderNote />
      {/* Why the agency exists — the gap that prompted it. */}
      <ProblemBand />
      <StatsBand />
      <ContactSection />
    </>
  )
}
