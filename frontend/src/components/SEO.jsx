import { Helmet } from 'react-helmet-async'

import { brandConfig } from '../config/brandConfig'

function SEO({ title, description, path = '/', image, schema }) {
  const metaTitle = title || brandConfig.seo.defaultTitle
  const metaDescription = description || brandConfig.seo.defaultDescription
  const canonical = `${brandConfig.seo.siteUrl}${path}`
  const ogImage = image || `${brandConfig.seo.siteUrl}${brandConfig.seo.defaultImage}`

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {schema ? <script type="application/ld+json">{JSON.stringify(schema)}</script> : null}
    </Helmet>
  )
}

export default SEO
