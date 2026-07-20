import PageHero from '../components/ui/PageHero'
import Packages from '../components/Packages'
import StatsBand from '../components/StatsBand'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import { PAGES } from '../content/site'

export default function PackagesPage() {
  return (
    <>
      <PageHero page={PAGES.packages} />
      <Packages />
      {/* Credibility between the price and the objections. */}
      <StatsBand />
      <FAQ />
      <ContactSection />
    </>
  )
}
