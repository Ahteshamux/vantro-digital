import SEO from '../components/SEO'
import PageHero from '../components/ui/PageHero'
import ContactSection from '../components/ContactSection'
import FAQ from '../components/FAQ'
import { PAGES } from '../content/site'

export default function Contact() {
  return (
    <>
      <SEO
        title="Free SEO & Website Audit for Small Business"
        description="Get a free SEO audit or website design audit from Vantro Digital. No strings — you keep the findings. Book a 20-minute call to talk through them."
        path="/contact"
      />
      {/* No dual CTA in the hero — the form is right below it. */}
      <PageHero page={PAGES.contact} showCta={false} />
      <ContactSection />
      <FAQ />
    </>
  )
}
