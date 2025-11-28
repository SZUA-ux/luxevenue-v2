#!/usr/bin/env python3
"""
Generate all remaining venue pages with full 12-section format
"""
import os

def generate_venue_page(service, city, capacity, price, slug):
    """Generate complete venue page content"""
    
    # Sanitize for component names
    component_name = ''.join(c for c in f"{service}{city}Page" if c.isalnum())
    
    # Generate keywords
    service_lower = service.lower()
    city_lower = city.lower()
    keywords = f"{service_lower} {city_lower}, {service_lower} near me {city_lower}, best {service_lower} {city_lower}, affordable {service_lower} {city_lower}, halal {service_lower} {city_lower}"
    
    # Distance from different cities
    if city == 'Birmingham':
        distance_text = "Located in Birmingham city centre"
        driving_time = "in the city"
    else:
        distances = {
            'Wolverhampton': '15 miles (25 minutes via A41)',
            'Dudley': '10 miles (20 minutes via A456)',
            'Solihull': '8 miles (15 minutes via A45)',
            'Walsall': '12 miles (20 minutes via M6)'
        }
        distance_text = f"Located {distances.get(city, '15 miles')} from {city}"
        driving_time = distances.get(city, '15 miles (25 minutes)')
    
    content = f'''import {{ Metadata }} from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {{
  title: '{service} {city} | Affordable Venue Hire from £400 | LUXE VENUE',
  description: 'Premium {service.lower()} in {city}. Capacity {capacity} guests. Halal catering, parking, full equipment. Book your {city} {service.lower()} today.',
  keywords: '{keywords}',
  alternates: {{ canonical: 'https://luxevenue.co.uk/{slug}' }},
  openGraph: {{
    title: '{service} {city} | LUXE VENUE',
    description: 'Elegant {service.lower()} in {city}. {capacity} capacity. Halal catering available.',
    url: 'https://luxevenue.co.uk/{slug}',
    siteName: 'LUXE VENUE',
    locale: 'en_GB',
    type: 'website',
  }},
}}

export default function {component_name}() {{
  const localBusinessSchema = {{
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LUXE VENUE - {service} {city}',
    description: 'Premium {service.lower()} in {city} with halal catering, parking, and full event equipment.',
    url: 'https://luxevenue.co.uk/{slug}',
    telephone: '+447391222884',
    email: 'info@luxevenue.co.uk',
    address: {{
      '@type': 'PostalAddress',
      streetAddress: '86 Leopold Street',
      addressLocality: 'Birmingham',
      addressRegion: 'West Midlands',
      postalCode: 'B12 0UD',
      addressCountry: 'GB'
    }},
    geo: {{ '@type': 'GeoCoordinates', latitude: '52.4736', longitude: '-1.8910' }},
    priceRange: '{price}',
    servesCuisine: ['Pakistani', 'Indian', 'Halal'],
    areaServed: [
      {{ '@type': 'City', name: '{city}' }},
      {{ '@type': 'City', name: 'Birmingham' }},
      {{ '@type': 'City', name: 'Wolverhampton' }},
      {{ '@type': 'City', name: 'Dudley' }}
    ]
  }}
  
  const eventVenueSchema = {{
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'LUXE VENUE {city}',
    description: '{service} space serving {city}',
    maximumAttendeeCapacity: {capacity.split('-')[1]},
    address: {{ '@type': 'PostalAddress', addressLocality: '{city}', addressRegion: 'West Midlands' }}
  }}
  
  const serviceSchema = {{
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: '{service}',
    provider: {{ '@type': 'LocalBusiness', name: 'LUXE VENUE' }},
    areaServed: {{ '@type': 'City', name: '{city}' }},
    offers: {{ '@type': 'Offer', priceCurrency: 'GBP', price: '{price.split('-')[0].replace('£', '')}' }}
  }}
  
  const faqSchema = {{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {{
        '@type': 'Question',
        name: 'How much does {service.lower()} cost in {city}?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: '{service} hire at LUXE VENUE for {city} clients starts from {price}. Our packages include venue hire, basic décor, LED lighting, A/V system, and optional halal catering from £25pp.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'What is the capacity for {service.lower()} in {city}?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'LUXE VENUE accommodates {capacity} guests comfortably for {city} events. Our flexible layout can be configured for seated dining, standing reception, or mixed arrangements.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'Do you provide halal catering for {city} events?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'Yes! We offer complete halal catering packages featuring authentic Pakistani and Indian cuisine for {city} clients. All food is 100% halal certified with vegetarian and vegan options.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'Is parking available for {city} guests?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'Yes, we provide on-site parking for up to 15 vehicles with additional street parking. {distance_text}, easily accessible for {city} guests.'
        }}
      }},
      {{
        '@type': 'Question',
        name: 'How do I book from {city}?',
        acceptedAnswer: {{
          '@type': 'Answer',
          text: 'We welcome {city} clients to book free venue viewings 7 days a week. Contact us at +44 7391 222884 or use our online booking form.'
        }}
      }}
    ]
  }}
  
  const breadcrumbSchema = {{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' }},
      {{ '@type': 'ListItem', position: 2, name: '{service} {city}', item: 'https://luxevenue.co.uk/{slug}' }}
    ]
  }}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(localBusinessSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(eventVenueSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(serviceSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}} />
      
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        
        {{/* SECTION 1: Hero */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black-primary to-black-secondary">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                {service} {city}
              </span>
            </h1>
            <p className="text-2xl text-white mb-4">Elegant Venue for {capacity} Guests</p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Premium {service.lower()} serving {city} with halal catering, free parking, and full equipment from {price}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all">
                Book {city} Viewing
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all">
                📞 +44 7391 222884
              </a>
            </div>
          </div>
        </section>

        {{/* SECTION 2: Why This Service */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Why {city} Families Choose LUXE VENUE
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">{city} Event Challenge</h3>
                <p className="text-gray-300 leading-relaxed">
                  Finding an affordable, elegant {service.lower()} in {city} that offers halal catering, adequate parking, and modern facilities can be challenging. Many venues charge premium prices without delivering culturally sensitive service.
                </p>
              </div>
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">LUXE VENUE Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  LUXE VENUE offers {city} families a premium {service.lower()} with authentic Pakistani and Indian halal catering, flexible layouts, on-site parking, and transparent pricing. Perfect for Asian and Muslim community celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {{/* SECTION 3: Solution Overview */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Complete Event Solution for {city}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Venue</h3>
                <p className="text-gray-300 text-sm">
                  Elegant space with {capacity} capacity, professional lighting, A/V system, and flexible seating
                </p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🍛</div>
                <h3 className="text-xl font-bold text-white mb-3">Halal Catering</h3>
                <p className="text-gray-300 text-sm">
                  Authentic Pakistani & Indian halal cuisine. Vegetarian and vegan options available
                </p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-white mb-3">Free Parking</h3>
                <p className="text-gray-300 text-sm">
                  15+ on-site spaces with additional street parking. Easy access from {city}
                </p>
              </div>
            </div>
          </div>
        </section>

        {{/* SECTION 4: Venue Details */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Venue Specifications
            </h2>
            <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Capacity & Layout</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-rose-gold mr-2">✓</span>
                      <span><strong className="text-white">Maximum Capacity:</strong> {capacity} guests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-gold mr-2">✓</span>
                      <span><strong className="text-white">Layout Options:</strong> Theatre, Banquet, U-Shape, Reception</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-gold mr-2">✓</span>
                      <span><strong className="text-white">Floor Space:</strong> 2,500 sq ft main hall</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-gold mr-2">✓</span>
                      <span><strong className="text-white">Ceilings:</strong> 12ft with chandeliers</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Equipment Included</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-rose-gold mr-2">✓</span>
                      <span><strong className="text-white">Audio/Visual:</strong> PA system, microphones, projector</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-gold mr-2">✓</span>
                      <span><strong className="text-white">Lighting:</strong> LED uplighting, spotlights, ambient</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-gold mr-2">✓</span>
                      <span><strong className="text-white">Furniture:</strong> Tables, chairs, stage platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-gold mr-2">✓</span>
                      <span><strong className="text-white">Décor:</strong> Backdrop, draping, centrepieces</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {{/* SECTION 5: Catering Integration */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Authentic Halal Catering
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Complete your {city} event with award-winning Pakistani and Indian halal catering
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Pakistani Menu</h3>
                <p className="text-gray-300 text-sm mb-4">From £25pp</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Chicken/Lamb Biryani</li>
                  <li>• Karahi & Curry</li>
                  <li>• Seekh Kebabs</li>
                  <li>• Naan & Rice</li>
                  <li>• Samosas & Pakoras</li>
                </ul>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Indian Menu</h3>
                <p className="text-gray-300 text-sm mb-4">From £28pp</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Butter Chicken</li>
                  <li>• Lamb Rogan Josh</li>
                  <li>• Tandoori Grill</li>
                  <li>• Paneer Tikka</li>
                  <li>• Desserts</li>
                </ul>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Buffet Service</h3>
                <p className="text-gray-300 text-sm mb-4">From £30pp</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 3+ Main Dishes</li>
                  <li>• Multiple Sides</li>
                  <li>• Fresh Naan</li>
                  <li>• Salads</li>
                  <li>• Full Service</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link href="/catering" className="inline-block px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all">
                View Catering Menu →
              </Link>
            </div>
          </div>
        </section>

        {{/* SECTION 6: Pricing */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Transparent Pricing
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-surface-dark rounded-xl border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-white font-bold">Package</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Price</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Basic Hire</td>
                    <td className="px-6 py-4 text-rose-gold font-bold">£500</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">4 hours, tables, chairs, lighting</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Standard</td>
                    <td className="px-6 py-4 text-rose-gold font-bold">£700</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">6 hours, A/V, LED, décor</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Premium</td>
                    <td className="px-6 py-4 text-rose-gold font-bold">£900</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">8 hours, full equipment, setup</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Venue + Catering</td>
                    <td className="px-6 py-4 text-rose-gold font-bold">From £35pp</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Complete package</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {{/* SECTION 7: Gallery */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Venue Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {{[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={{i}} className="aspect-video bg-surface-dark rounded-xl border border-white/10 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Venue Image {{i}}</span>
                </div>
              ))}}
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery" className="inline-block px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all">
                View Gallery →
              </Link>
            </div>
          </div>
        </section>

        {{/* SECTION 8: Location */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Location & Access from {city}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">🚗 Driving</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Distance:</strong> {driving_time}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Parking:</strong> 15 free spaces on-site</span>
                  </li>
                </ul>
              </div>
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">🚌 Public Transport</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Bus:</strong> Multiple routes from {city}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Taxi:</strong> £10-20 from {city} centre</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {{/* SECTION 9: Service Area */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Serving West Midlands
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {{['{city}', 'Birmingham', 'Wolverhampton', 'Dudley', 'Solihull', 'Walsall', 'West Bromwich', 'Sutton Coldfield', 'Stourbridge', 'Halesowen'].map((area) => (
                <div key={{area}} className="bg-surface-elevated p-4 rounded-lg border border-white/10 text-center">
                  <span className="text-gray-300">{{area}}</span>
                </div>
              ))}}
            </div>
          </div>
        </section>

        {{/* SECTION 10: Comparison */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Why LUXE VENUE for {city}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-surface-dark rounded-xl border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-rose-gold font-bold">LUXE VENUE</th>
                    <th className="px-6 py-4 text-center text-gray-400 font-bold">Typical Venues</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Halal Catering</td>
                    <td className="px-6 py-4 text-center text-rose-gold">✓ In-House</td>
                    <td className="px-6 py-4 text-center text-gray-400">Limited</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Free Parking</td>
                    <td className="px-6 py-4 text-center text-rose-gold">✓ 15+ Spaces</td>
                    <td className="px-6 py-4 text-center text-gray-400">Paid</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Equipment</td>
                    <td className="px-6 py-4 text-center text-rose-gold">✓ Included</td>
                    <td className="px-6 py-4 text-center text-gray-400">Extra Cost</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Transparent Pricing</td>
                    <td className="px-6 py-4 text-center text-rose-gold">✓ Fixed</td>
                    <td className="px-6 py-4 text-center text-gray-400">Hidden Fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {{/* SECTION 11: FAQs */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {{faqSchema.mainEntity.map((faq, index) => (
                <div key={{index}} className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">{{faq.name}}</h3>
                  <p className="text-gray-300 leading-relaxed">{{faq.acceptedAnswer.text}}</p>
                </div>
              ))}}
            </div>
          </div>
        </section>

        {{/* SECTION 12: CTA */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Book from {city}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule a free venue viewing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all">
                Book Free Viewing
              </Link>
              <a href="https://wa.me/447391222884" className="px-8 py-4 rounded-full border-2 border-green-500 text-green-500 font-semibold text-lg hover:bg-green-500 hover:text-white transition-all">
                💬 WhatsApp
              </a>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all">
                📞 Call
              </a>
            </div>
          </div>
        </section>

        {{/* Related Services */}}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
              Related Services
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/wedding-venue-birmingham" className="bg-surface-elevated p-4 rounded-lg border border-white/10 hover:border-rose-gold transition-all text-center">
                <span className="text-gray-300 hover:text-rose-gold">Wedding Venue</span>
              </Link>
              <Link href="/nikah-venue-birmingham" className="bg-surface-elevated p-4 rounded-lg border border-white/10 hover:border-rose-gold transition-all text-center">
                <span className="text-gray-300 hover:text-rose-gold">Nikah Venue</span>
              </Link>
              <Link href="/catering" className="bg-surface-elevated p-4 rounded-lg border border-white/10 hover:border-rose-gold transition-all text-center">
                <span className="text-gray-300 hover:text-rose-gold">Halal Catering</span>
              </Link>
              <Link href="/corporate-event-venue-birmingham" className="bg-surface-elevated p-4 rounded-lg border border-white/10 hover:border-rose-gold transition-all text-center">
                <span className="text-gray-300 hover:text-rose-gold">Corporate Events</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <PublicFooter />
    </>
  )
}}
'''
    
    return content

# Generate all pages
venues = [
    ('Wedding Venue', 'Dudley', '20-70', '£500-£900', 'wedding-venue-dudley'),
    ('Wedding Venue', 'Solihull', '20-70', '£500-£900', 'wedding-venue-solihull'),
    ('Wedding Venue', 'Walsall', '20-70', '£500-£900', 'wedding-venue-walsall'),
    ('Small Event Venue', 'Birmingham', '20-50', '£400-£700', 'small-event-venue-birmingham'),
    ('Small Event Venue', 'Wolverhampton', '20-50', '£400-£700', 'small-event-venue-wolverhampton'),
    ('Small Event Venue', 'Dudley', '20-50', '£400-£700', 'small-event-venue-dudley'),
    ('Small Event Venue', 'Solihull', '20-50', '£400-£700', 'small-event-venue-solihull'),
    ('Small Event Venue', 'Walsall', '20-50', '£400-£700', 'small-event-venue-walsall'),
    ('Birthday Venue', 'Birmingham', '30-70', '£500-£800', 'birthday-venue-birmingham'),
    ('Birthday Venue', 'Wolverhampton', '30-70', '£500-£800', 'birthday-venue-wolverhampton'),
    ('Birthday Venue', 'Dudley', '30-70', '£500-£800', 'birthday-venue-dudley'),
    ('Birthday Venue', 'Solihull', '30-70', '£500-£800', 'birthday-venue-solihull'),
    ('Birthday Venue', 'Walsall', '30-70', '£500-£800', 'birthday-venue-walsall'),
    ('Affordable Venue Hire', 'Wolverhampton', '20-70', '£400-£700', 'affordable-venue-hire-wolverhampton'),
    ('Affordable Venue Hire', 'Dudley', '20-70', '£400-£700', 'affordable-venue-hire-dudley'),
]

base_dir = '/app/frontend/app'

for service, city, capacity, price, slug in venues:
    file_path = os.path.join(base_dir, slug, 'page.tsx')
    content = generate_venue_page(service, city, capacity, price, slug)
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"✅ Generated: {file_path}")

print(f"\n🎉 Total: {len(venues)} pages generated successfully")
