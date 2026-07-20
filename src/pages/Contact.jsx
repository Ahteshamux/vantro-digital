import PageHero from '../components/ui/PageHero'
import ContactSection from '../components/ContactSection'
import FAQ from '../components/FAQ'
import { PAGES } from '../content/site'

export default function Contact() {
  return (
    <>
      {/* No dual CTA in the hero — the form is right below it. */}
      <PageHero page={PAGES.contact} showCta={false} />
      <ContactSection />
      <FAQ />
    </>
  )
}
