import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Home Catering Service Birmingham | Halal Pakistani & Indian Food from £15pp | LUXE VENUE',
  description: 'Authentic home catering service in Birmingham. 100% halal certified. Pakistani & Indian cuisine. From £15-30pp. Delivery across Birmingham and West Midlands.',
  keywords: 'home catering service birmingham, halal home catering service birmingham, pakistani home catering service birmingham, indian home catering service birmingham, affordable home catering service birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/catering/home-catering-service-birmingham' },
  openGraph: {
    title: 'Home Catering Service Birmingham | LUXE VENUE',
    description: 'Authentic halal home catering service in Birmingham. Pakistani & Indian cuisine from £15-30pp.',
    url: 'https://luxevenue.co.uk/catering/home-catering-service-birmingham',
    siteName: 'LUXE VENUE',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function HomeCateringServiceBirminghamPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'Caterer'],
    name: 'LUXE VENUE - Home Catering Service Birmingham',
    description: 'Authentic home catering service in Birmingham with 100% halal certified Pakistani and Indian cuisine.',
    url: 'https://luxevenue.co.uk/catering/home-catering-service-birmingham',
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
    priceRange: '£15-30pp',
    servesCuisine: ['Pakistani', 'Indian', 'Halal', 'Biryani', 'Curry', 'Tandoori'],
    areaServed: [
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'West Midlands' }
    ]
  }
  
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Catering Service',
    provider: { '@type': 'FoodEstablishment', name: 'LUXE VENUE' },
    areaServed: { '@type': 'City', name: 'Birmingham' },
    offers: { '@type': 'Offer', priceCurrency: 'GBP', price: '15' }
  }
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does home catering service cost in Birmingham?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Home Catering Service in Birmingham starts from £15-30pp. Our halal menu includes biryani, karahi, curry, naan, rice, and desserts. Free delivery for orders over 30 guests.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is your home catering service 100% halal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All our food is 100% halal certified. We use only halal meat from certified suppliers and prepare everything fresh daily in our halal-certified kitchen.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas do you deliver home catering service to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deliver home catering service across Birmingham, Birmingham, Wolverhampton, Dudley, Solihull, Walsall, and all West Midlands areas. Free delivery for 30+ guests.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum order for Birmingham catering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Minimum order is 15 people for home catering service in Birmingham. We cater for events from 15 to 500+ guests with professional service.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide vegetarian options?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer extensive vegetarian and vegan options including paneer dishes, vegetable curries, dal, and rice dishes. All prepared separately.'
        }
      }
    ]
  }
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://luxevenue.co.uk/catering' },
      { '@type': 'ListItem', position: 3, name: 'Home Catering Service Birmingham', item: 'https://luxevenue.co.uk/catering/home-catering-service-birmingham' }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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
                Home Catering Service Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white mb-4">Authentic Halal Pakistani & Indian Cuisine</p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              100% halal certified home catering service serving Birmingham. Fresh biryani, karahi, tandoori from £15-30pp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all">
                Get Birmingham Catering Quote
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
              Why Birmingham Families Choose Our Halal Catering
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Birmingham Catering Challenge</h3>
                <p className="text-gray-300 leading-relaxed">
                  Finding authentic halal home catering service in Birmingham with fresh Pakistani and Indian food can be difficult. Many caterers use frozen food, lack proper halal certification, or charge premium prices for poor quality.
                </p>
              </div>
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">LUXE VENUE Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  LUXE VENUE offers Birmingham families authentic halal home catering service prepared fresh daily with 100% certified ingredients. Traditional recipes, generous portions, transparent pricing, and reliable delivery across Birmingham.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Solution Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Complete Catering Solution for Birmingham
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🍛</div>
                <h3 className="text-xl font-bold text-white mb-3">Authentic Taste</h3>
                <p className="text-gray-300 text-sm">
                  Traditional Pakistani & Indian recipes. Fresh spices. Cooked daily by experienced chefs.
                </p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-3">100% Halal</h3>
                <p className="text-gray-300 text-sm">
                  Certified halal meat. No alcohol. Vegetarian & vegan options available.
                </p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-white mb-3">Delivery Service</h3>
                <p className="text-gray-300 text-sm">
                  Hot food delivered across Birmingham. Professional setup. Free delivery 30+ guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Menu Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Our Halal Menu
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Pakistani Specialties</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Chicken & Lamb Biryani</li>
                  <li>✓ Karahi (Chicken/Mutton)</li>
                  <li>✓ Nihari</li>
                  <li>✓ Haleem</li>
                  <li>✓ Seekh Kebabs</li>
                  <li>✓ Chapli Kebabs</li>
                  <li>✓ Fresh Naan & Roti</li>
                </ul>
              </div>
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Indian Favorites</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Butter Chicken</li>
                  <li>✓ Chicken Tikka Masala</li>
                  <li>✓ Lamb Rogan Josh</li>
                  <li>✓ Tandoori Mixed Grill</li>
                  <li>✓ Paneer Tikka</li>
                  <li>✓ Dal Makhani</li>
                  <li>✓ Naan & Paratha</li>
                </ul>
              </div>
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Sides & Extras</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Samosas & Pakoras</li>
                  <li>✓ Pilau Rice</li>
                  <li>✓ Salad & Raita</li>
                  <li>✓ Chutneys</li>
                  <li>✓ Gulab Jamun</li>
                  <li>✓ Kheer</li>
                  <li>✓ Fresh Fruit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Event Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Perfect for Birmingham Events
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl mb-3">💒</div>
                <h3 className="text-lg font-bold text-white mb-2">Weddings</h3>
                <p className="text-gray-300 text-sm">Walima, nikah, mehndi catering</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl mb-3">🎂</div>
                <h3 className="text-lg font-bold text-white mb-2">Birthdays</h3>
                <p className="text-gray-300 text-sm">Family parties & celebrations</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-lg font-bold text-white mb-2">Corporate</h3>
                <p className="text-gray-300 text-sm">Business meetings & events</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 text-center">
                <div className="text-3xl mb-3">🕌</div>
                <h3 className="text-lg font-bold text-white mb-2">Religious</h3>
                <p className="text-gray-300 text-sm">Eid, iftar, milad gatherings</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/wedding-venue-birmingham" className="inline-block px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all">
                View Event Venues →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Transparent Pricing for Birmingham
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
                    <td className="px-6 py-4 text-gray-300">Standard Menu</td>
                    <td className="px-6 py-4 text-rose-gold font-bold">£15pp</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">1 main, rice, naan, salad, dessert</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Premium Menu</td>
                    <td className="px-6 py-4 text-rose-gold font-bold">£20pp</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">2 mains, starters, rice, naan, dessert</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Deluxe Buffet</td>
                    <td className="px-6 py-4 text-rose-gold font-bold">£25pp</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">3 mains, starters, multiple sides, desserts</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Full Service</td>
                    <td className="px-6 py-4 text-rose-gold font-bold">£30pp</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">Complete package with setup & staff</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm text-center mt-6">
              *Minimum 15 guests. Free delivery for 30+ guests in Birmingham
            </p>
          </div>
        </section>

        {/* SECTION 7: Gallery Placeholder */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Our Food Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-video bg-surface-dark rounded-xl border border-white/10 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Food Image {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: Delivery Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">
              Delivery Across Birmingham & West Midlands
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">🚗 Delivery Service</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Hot Food:</strong> Arrives fresh in chafing dishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Free Delivery:</strong> Orders over 30 guests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Setup Included:</strong> We arrange everything</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Equipment:</strong> Serving dishes & utensils provided</span>
                  </li>
                </ul>
              </div>
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">📍 Coverage</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Birmingham:</strong> All areas covered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Birmingham:</strong> City centre & suburbs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">West Midlands:</strong> Wolverhampton, Dudley, Walsall, Solihull</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-gold mr-2">✓</span>
                    <span><strong className="text-white">Collection:</strong> Available from our kitchen</span>
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
              Areas We Serve
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {['Birmingham', 'Birmingham', 'Wolverhampton', 'Dudley', 'Solihull', 'Walsall', 'West Bromwich', 'Sutton Coldfield', 'Stourbridge', 'Halesowen'].map((area) => (
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
              Why LUXE VENUE for Birmingham Catering
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-surface-dark rounded-xl border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-rose-gold font-bold">LUXE VENUE</th>
                    <th className="px-6 py-4 text-center text-gray-400 font-bold">Typical Caterers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Halal Certified</td>
                    <td className="px-6 py-4 text-center text-rose-gold">✓ 100%</td>
                    <td className="px-6 py-4 text-center text-gray-400">Not Always</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Fresh Daily</td>
                    <td className="px-6 py-4 text-center text-rose-gold">✓ Yes</td>
                    <td className="px-6 py-4 text-center text-gray-400">Often Frozen</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300">Delivery Included</td>
                    <td className="px-6 py-4 text-center text-rose-gold">✓ 30+ guests</td>
                    <td className="px-6 py-4 text-center text-gray-400">Extra Cost</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Pricing</td>
                    <td className="px-6 py-4 text-center text-rose-gold">✓ Transparent</td>
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
              Ready to Order from Birmingham?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote for your event. Authentic halal food delivered hot to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all">
                Get Free Quote
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
              <Link href="/catering" className="bg-surface-elevated p-4 rounded-lg border border-white/10 hover:border-rose-gold transition-all text-center">
                <span className="text-gray-300 hover:text-rose-gold">All Catering</span>
              </Link>
              <Link href="/birthday-venue-birmingham" className="bg-surface-elevated p-4 rounded-lg border border-white/10 hover:border-rose-gold transition-all text-center">
                <span className="text-gray-300 hover:text-rose-gold">Birthday Venue</span>
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
