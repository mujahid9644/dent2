import { brandConfig } from '../config/brandConfig'

export function buildCanonical(path = '/') {
  return `${brandConfig.seo.siteUrl}${path}`
}

export function dentistSchema(settings) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: settings.clinicName,
    image: `${brandConfig.seo.siteUrl}/og-dental.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: settings.address,
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    telephone: settings.phone,
    email: settings.email,
    openingHours: settings.openingHours,
    priceRange: '$$',
    url: brandConfig.seo.siteUrl,
  }
}

export function faqSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: buildCanonical(item.path),
    })),
  }
}

export function serviceSchema(service, settings) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description || service.short_description,
    areaServed: 'Dhaka',
    provider: {
      '@type': 'Dentist',
      name: settings.clinicName,
    },
  }
}
