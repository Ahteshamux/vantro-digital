import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Vantro Digital'
const BASE_URL = 'https://vantrodigital.com'

/**
 * Drop this into any page to set title, description, canonical URL,
 * and Open Graph tags. All props are optional — sensible defaults apply.
 *
 * Usage:
 *   <SEO
 *     title="Website Design for Small Business"
 *     description="..."
 *     path="/services/website-design"
 *   />
 */
export default function SEO({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Build, rank, grow and automate for small business`
  const canonical = `${BASE_URL}${path}`
  const ogImage = image || `${BASE_URL}/og-default.png`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
