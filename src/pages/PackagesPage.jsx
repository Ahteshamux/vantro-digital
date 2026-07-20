import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import Packages from '../components/Packages'
import StatsBand from '../components/StatsBand'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import { PAGES } from '../content/site'

export default function PackagesPage() {
  return (
    <>
      <SEO
        title="Pricing — Website Design & Marketing Packages for Small Business"
        description="Project-based packages for small business owners who need a website, SEO, ads, or full marketing automation. No retainer required."
        path="/packages"
      />
      <PageHero page={PAGES.packages} />
      <Packages />
      {/* Credibility between the price and the objections. */}
      <StatsBand />
      <FAQ />
      <ContactSection />
    </>
  )
}
