const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxevenue.co.uk'

export function getCanonicalUrl(path: string): string {
  // Remove trailing slash except for homepage
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '')
  return `${SITE_URL}${cleanPath}`
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LUXE VENUE',
    description: 'Premier event venue in Birmingham for weddings, corporate events, and celebrations',
    url: SITE_URL,
    telephone: '+447391222884',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '86 Leopold Street',
      addressLocality: 'Birmingham',
      postalCode: 'B12 0UD',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.4662',
      longitude: '-1.8904',
    },
    openingHours: 'Mo-Su 09:00-22:00',
    priceRange: '£££',
    image: `${SITE_URL}/images/venue-hero.jpg`,
  }
}

export function generateEventVenueSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'LUXE VENUE',
    description: '8m x 9m event venue and hall hire in Birmingham. Non-alcoholic, dry hire space for up to 70 guests.',
    url: SITE_URL,
    telephone: '+447391222884',
    maximumAttendeeCapacity: 70,
    isAccessibleForFree: false,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '86 Leopold Street',
      addressLocality: 'Birmingham',
      postalCode: 'B12 0UD',
      addressCountry: 'GB',
    },
  }
}

export function generateFAQSchema(faqs: Array<{question: string; answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
