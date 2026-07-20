import PageHero from '../components/ui/PageHero'
import Proof from '../components/Proof'
import Reviews from '../components/Reviews'
import IndustryCards from '../components/IndustryCards'
import FinalCTA from '../components/FinalCTA'
import { PAGES } from '../content/site'

export default function Work() {
  return (
    <>
      <PageHero page={PAGES.work} />
      <Proof />
      <Reviews />
      <IndustryCards />
      <FinalCTA />
    </>
  )
}
