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
 *
 * For a blog article, pass `type="article"` (emits og:type=article plus the
 * published/modified timestamps) and `schema` — a JS object rendered as JSON-LD.
 * `schema` may be a single object or an array of objects (e.g. BlogPosting +
 * BreadcrumbList + FAQPage). This is the only place structured data is emitted.
 */
export default function SEO({
  title,
  description,
  path = '',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  schema,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Build, rank, grow and automate for small business`
  const canonical = `${BASE_URL}${path}`
  const ogImage = image || `${BASE_URL}/og-default.png`
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Article timestamps — only meaningful when type="article" */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schemaList.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  )
}
