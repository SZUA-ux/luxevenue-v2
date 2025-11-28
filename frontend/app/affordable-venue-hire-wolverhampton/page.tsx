import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Affordable Venue Hire Wolverhampton | Affordable Venue Hire from £400 | LUXE VENUE',
  description: 'Premium affordable venue hire in Wolverhampton. Capacity 20-70 guests. Halal catering, parking, full equipment. Book your Wolverhampton affordable venue hire today.',
  keywords: 'affordable venue hire wolverhampton, affordable venue hire near me wolverhampton, best affordable venue hire wolverhampton, affordable affordable venue hire wolverhampton, halal affordable venue hire wolverhampton',
  alternates: { canonical: 'https://luxevenue.co.uk/affordable-venue-hire-wolverhampton' },
  openGraph: {
    title: 'Affordable Venue Hire Wolverhampton | LUXE VENUE',
    description: 'Elegant affordable venue hire in Wolverhampton. 20-70 capacity. Halal catering available.',
    url: 'https://luxevenue.co.uk/affordable-venue-hire-wolverhampton',
    siteName: 'LUXE VENUE',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function AffordableVenueHireWolverhamptonPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LUXE VENUE - Affordable Venue Hire Wolverhampton',
    description: 'Premium affordable venue hire in Wolverhampton with halal catering, parking, and full event equipment.',
    url: 'https://luxevenue.co.uk/affordable-venue-hire-wolverhampton',
    telephone: '+447391222884',
    email: 'info@luxevenue.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '86 Leopold Street',
      addressLocality: 'Birmingham',
      addressRegion: 'West Midlands',
      postalCode: 'B12 0UD',
      addressCountry: 'GB'
    },
    geo: { '@type': 'GeoCoordinates', latitude: '52.4736', longitude: '-1.8910' },
    priceRange: '£400-£700',
    servesCuisine: ['Pakistani', 'Indian', 'Halal'],
    areaServed: [
      { '@type': 'City', name: 'Wolverhampton' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'Wolverhampton' },
      { '@type': 'City', name: 'Dudley' }
    ]
  }
  
  const eventVenueSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'LUXE VENUE Wolverhampton',
    description: 'Affordable Venue Hire space serving Wolverhampton',
    maximumAttendeeCapacity: 70,
    address: { '@type': 'PostalAddress', addressLocality: 'Wolverhampton', addressRegion: 'West Midlands' }
  }
  
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Affordable Venue Hire',
    provider: { '@type': 'LocalBusiness', name: 'LUXE VENUE' },
    areaServed: { '@type': 'City', name: 'Wolverhampton' },
    offers: { '@type': 'Offer', priceCurrency: 'GBP', price: '400' }
  }
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does affordable venue hire cost in Wolverhampton?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Affordable Venue Hire hire at LUXE VENUE for Wolverhampton clients starts from £400-£700. Our packages include venue hire, basic décor, LED lighting, A/V system, and optional halal catering from £25pp.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the capacity for affordable venue hire in Wolverhampton?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LUXE VENUE accommodates 20-70 guests comfortably for Wolverhampton events. Our flexible layout can be configured for seated dining, standing reception, or mixed arrangements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide halal catering for Wolverhampton events?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer complete halal catering packages featuring authentic Pakistani and Indian cuisine for Wolverhampton clients. All food is 100% halal certified with vegetarian and vegan options.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is parking available for Wolverhampton guests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide on-site parking for up to 15 vehicles with additional street parking. Located 15 miles (25 minutes via A41) from Wolverhampton, easily accessible for Wolverhampton guests.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I book from Wolverhampton?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We welcome Wolverhampton clients to book free venue viewings 7 days a week. Contact us at +44 7391 222884 or use our online booking form.'
        }
      }
    ]
  }
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Affordable Venue Hire Wolverhampton', item: 'https://luxevenue.co.uk/affordable-venue-hire-wolverhampton' }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventVenueSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        
        {/* SECTION 1: Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black-primary to-black-secondary">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                Affordable Venue Hire Wolverhampton
              </span>
            </h1>
            <p className="text-2xl text-white mb-4">Elegant Venue for 20-70 Guests</p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Premium affordable venue hire serving Wolverhampton with halal catering, free parking, and full equipment from £400-£700
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all">
                Book Wolverhampton Viewing
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all">
                📞 +44 7391 222884
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: Why This Service */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Why Wolverhampton Families Choose LUXE VENUE
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Wolverhampton Event Challenge</h3>
                <p className="text-gray-300 leading-relaxed">
                  Finding an affordable, elegant affordable venue hire in Wolverhampton that offers halal catering, adequate parking, and modern facilities can be challenging. Many venues charge premium prices without delivering culturally sensitive service.
                </p>
              </div>
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">LUXE VENUE Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  LUXE VENUE offers Wolverhampton families a premium affordable venue hire with authentic Pakistani and Indian halal catering, flexible layouts, on-site parking, and transparent pricing. Perfect for Asian and Muslim community celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Solution Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Complete Event Solution for Wolverhampton
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Venue</h3>
                <p className="text-gray-300 text-sm">
                  Elegant space with 20-70 capacity, professional lighting, A/V system, and flexible seating
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
                  15+ on-site spaces with additional street parking. Easy access from Wolverhampton
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Venue Details */}
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
                      <span><strong className="text-white">Maximum Capacity:</strong> 20-70 guests</span>
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

        {/* SECTION 5: Catering Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Authentic Halal Catering
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Complete your Wolverhampton event with award-winning Pakistani and Indian halal catering
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

        {/* SECTION 6: Pricing */}
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

        {/* SECTION 7: Gallery */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Venue Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-video bg-surface-dark rounded-xl border border-white/10 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Venue Image {i}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery" className="inline-block px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all">
                View Gallery →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: Location */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Location & Access from Wolverhampton
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">🚗 Driving</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Distance:</strong> 15 miles (25 minutes via A41)</span>
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
                    <span><strong className="text-white">Bus:</strong> Multiple routes from Wolverhampton</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Taxi:</strong> £10-20 from Wolverhampton centre</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: Service Area */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Serving West Midlands
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {['Wolverhampton', 'Birmingham', 'Wolverhampton', 'Dudley', 'Solihull', 'Walsall', 'West Bromwich', 'Sutton Coldfield', 'Stourbridge', 'Halesowen'].map((area) => (
                <div key={area} className="bg-surface-elevated p-4 rounded-lg border border-white/10 text-center">
                  <span className="text-gray-300">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: Comparison */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Why LUXE VENUE for Wolverhampton
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

        {/* SECTION 11: FAQs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12: CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Book from Wolverhampton?
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

        {/* Related Services */}
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
}
