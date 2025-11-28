import { Metadata } from 'next'

interface CateringPageSEO {
  city: string
  slug: string
  postcodes?: string[]
  landmarks?: string[]
  neighbourhoods?: string[]
}

export function generateCateringMetadata(config: CateringPageSEO): Metadata {
  const { city, slug } = config
  
  const baseTitle = `${city} Pakistani & Indian Halal Catering | LUXE VENUE`
  const baseDesc = `Authentic Pakistani & Indian halal catering in ${city}. Weddings, corporate events, home parties. Fresh cooking, 100% halal certified. From £15pp. Free delivery 100+ guests.`
  
  return {
    title: baseTitle,
    description: baseDesc,
    keywords: `pakistani catering ${city.toLowerCase()}, indian catering ${city.toLowerCase()}, halal catering ${city.toLowerCase()}, asian catering ${city.toLowerCase()}, wedding catering ${city.toLowerCase()}, buffet catering ${city.toLowerCase()}, home party catering ${city.toLowerCase()}`,
    alternates: {
      canonical: `https://luxevenue.co.uk/catering/${slug}`,
    },
    openGraph: {
      title: baseTitle,
      description: baseDesc,
      url: `https://luxevenue.co.uk/catering/${slug}`,
      siteName: 'LUXE VENUE',
      locale: 'en_GB',
      type: 'website',
      images: [{
        url: 'https://luxevenue.co.uk/images/gallery/luxe-venue-halal-buffet-catering.png',
        width: 1200,
        height: 630,
        alt: `${city} Halal Catering by LUXE VENUE`
      }]
    },
  }
}

export function generateCateringServiceMetadata(service: string): Metadata {
  const titles: Record<string, string> = {
    wedding: 'Wedding Catering Birmingham | Pakistani & Indian Halal Wedding Food | LUXE VENUE',
    birthday: 'Birthday Party Catering Birmingham | Halal Kids & Adult Birthday Food | LUXE VENUE',
    corporate: 'Corporate Catering Birmingham | Halal Business Event Catering | LUXE VENUE',
    'home-party': 'Home Party Catering Birmingham | Pakistani & Indian Halal Food Delivery | LUXE VENUE',
    marquee: 'Marquee Catering Birmingham | Outdoor Event Halal Catering | LUXE VENUE',
    'special-occasion': 'Special Occasion Catering Birmingham | Halal Event Catering | LUXE VENUE',
  }
  
  const descriptions: Record<string, string> = {
    wedding: 'Exquisite halal wedding catering in Birmingham. Pakistani & Indian cuisine for nikah, walima & receptions. Buffet & plated service. From £18pp. Professional service, custom menus.',
    birthday: 'Halal birthday party catering across Birmingham. Pakistani & Indian food for kids and adults. From £15pp. Samosas, biryani, grilled items & desserts. Free delivery 100+ guests.',
    corporate: 'Professional halal corporate catering in Birmingham. Pakistani & Indian cuisine for meetings, conferences, training days. From £15pp. Punctual delivery, elegant presentation.',
    'home-party': 'Halal home party catering in Birmingham. Fresh Pakistani & Indian food delivered to your door. Perfect for intimate gatherings, Eid parties, family celebrations. From £15pp.',
    marquee: 'Marquee and outdoor event catering in Birmingham. Full halal Pakistani & Indian buffet setup. Weddings, garden parties, festivals. Professional equipment & staff included.',
    'special-occasion': 'Halal catering for all special occasions in Birmingham. Aqiqah, Eid parties, graduations, anniversaries. Pakistani & Indian cuisine. Flexible menus from £15pp.',
  }
  
  return {
    title: titles[service] || `${service} Catering Birmingham | LUXE VENUE`,
    description: descriptions[service] || `Halal ${service} catering in Birmingham`,
    keywords: `${service} catering birmingham, halal ${service} catering, pakistani ${service} food, indian ${service} catering, birmingham ${service} caterers`,
    alternates: {
      canonical: `https://luxevenue.co.uk/catering/${service}-catering-birmingham`,
    },
    openGraph: {
      title: titles[service],
      description: descriptions[service],
      url: `https://luxevenue.co.uk/catering/${service}-catering-birmingham`,
      siteName: 'LUXE VENUE',
      locale: 'en_GB',
      type: 'website',
    },
  }
}

export function generateCateringJSONLD(config: CateringPageSEO) {
  const { city, postcodes = [], neighbourhoods = [] } = config
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['FoodEstablishment', 'Caterer', 'LocalBusiness'],
        '@id': `https://luxevenue.co.uk/catering/#caterer`,
        name: 'LUXE VENUE Catering',
        alternateName: `${city} Pakistani & Indian Halal Catering`,
        description: `Authentic Pakistani and Indian halal catering service serving ${city} and surrounding areas. Specializing in weddings, corporate events, and private celebrations.`,
        url: 'https://luxevenue.co.uk/catering',
        telephone: '+447391222884',
        email: 'info@luxevenue.co.uk',
        priceRange: '£15-£25 per person',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '86 Leopold Street',
          addressLocality: 'Birmingham',
          addressRegion: 'West Midlands',
          postalCode: 'B12 0UD',
          addressCountry: 'GB'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '52.4736',
          longitude: '-1.8910'
        },
        areaServed: [
          {
            '@type': 'City',
            name: city,
            ...(postcodes.length > 0 && {
              containsPlace: postcodes.map(pc => ({
                '@type': 'PostalCodeArea',
                postalCode: pc
              }))
            })
          }
        ],
        servesCuisine: ['Pakistani', 'Indian', 'Halal', 'Asian'],
        paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
        image: 'https://luxevenue.co.uk/images/gallery/luxe-venue-halal-buffet-catering.png',
        sameAs: [
          'https://www.facebook.com/luxevenuebirmingham',
          'https://www.instagram.com/luxevenuebirmingham'
        ],
        hasMenu: {
          '@type': 'Menu',
          name: 'Catering Menu',
          description: 'Authentic Pakistani and Indian halal catering options',
          hasMenuSection: [
            {
              '@type': 'MenuSection',
              name: 'Pakistani Menu',
              offers: {
                '@type': 'Offer',
                price: '18.00',
                priceCurrency: 'GBP',
                availability: 'https://schema.org/InStock'
              }
            },
            {
              '@type': 'MenuSection',
              name: 'Indian Menu',
              offers: {
                '@type': 'Offer',
                price: '16.00',
                priceCurrency: 'GBP',
                availability: 'https://schema.org/InStock'
              }
            }
          ]
        }
      }
    ]
  }
}

export function generateCateringFAQSchema(city: string, faqs: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateCateringBreadcrumbs(city: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://luxevenue.co.uk'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Catering',
        item: 'https://luxevenue.co.uk/catering'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${city} Catering`,
        item: `https://luxevenue.co.uk/catering/${slug}`
      }
    ]
  }
}
