import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import Proof from '../components/Proof'
import Reviews from '../components/Reviews'
import IndustryCards from '../components/IndustryCards'
import FinalCTA from '../components/FinalCTA'
import { PAGES } from '../content/site'

export default function Work() {
  return (
    <>
      <SEO
        title="Our Work — Case Studies for Small Business Clients"
        description="Real results for home services, dental, and contractor clients. See how Vantro Digital built websites, ran ads, and automated follow-up to grow small businesses."
        path="/work"
      />
      <PageHero page={PAGES.work} />
      <Proof />
      <Reviews />
      <IndustryCards />
      <FinalCTA />
    </>
  )
}
