import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringServiceMetadata, generateCateringJSONLD, generateCateringFAQSchema, generateCateringBreadcrumbs } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringServiceMetadata('wedding')

const faqs = [
  {
    question: 'How much does Pakistani wedding catering cost in Birmingham?',
    answer: 'Pakistani wedding catering in Birmingham starts from £18 per person for buffet service. Our authentic Pakistani menu includes biryani, karahi, seekh kebabs, samosas, naan, and traditional desserts. Prices include fresh cooking, professional setup, chafing dishes, serving utensils, and uniformed staff. Free delivery for 100+ guests.'
  },
  {
    question: 'Do you provide halal wedding catering for nikah and walima ceremonies?',
    answer: 'Yes! All our wedding catering is 100% halal certified. We specialize in nikah ceremonies, walima receptions, mehndi nights, and all Asian wedding events. We understand cultural requirements and provide authentic Pakistani and Indian cuisine with professional presentation suitable for weddings.'
  },
  {
    question: 'Can you cater for large Asian weddings with 300-500 guests?',
    answer: 'Absolutely! We regularly cater Pakistani and Indian weddings from 50 to 500+ guests across Birmingham. Our team handles large-scale events with multiple food stations, live cooking demonstrations, and complete buffet management. We provide extra staff, backup equipment, and seamless service for big weddings.'
  },
  {
    question: 'What wedding catering packages do you offer in Birmingham?',
    answer: 'We offer three main packages: Pakistani Wedding Menu (£18pp) with biryani, karahi, and traditional dishes; Indian Wedding Menu (£16pp) with curry, tandoori, and vegetarian options; Fusion Wedding Menu (£20pp) combining both cuisines. All packages include starters, mains, rice, naan, salads, and desserts. Custom menus available.'
  }
]

export default function WeddingCateringPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'Caterer'],
    name: 'LUXE VENUE Wedding Catering',
    description: 'Pakistani and Indian halal wedding catering specialist in Birmingham. Authentic cuisine for nikah, walima, and Asian wedding receptions.',
    url: 'https://luxevenue.co.uk/catering/wedding-catering-birmingham',
    telephone: '+447391222884',
    email: 'info@luxevenue.co.uk',
    priceRange: '£16-£20 per person',
    servesCuisine: ['Pakistani', 'Indian', 'Halal', 'Asian Wedding Food'],
    hasMenu: {
      '@type': 'Menu',
      name: 'Wedding Catering Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Pakistani Wedding Menu',
          description: 'Authentic Pakistani dishes for nikah and walima',
          offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'GBP' }
        },
        {
          '@type': 'MenuSection',
          name: 'Indian Wedding Menu',
          description: 'Traditional Indian wedding feast',
          offers: { '@type': 'Offer', price: '16.00', priceCurrency: 'GBP' }
        }
      ]
    }
  }
  
  const faqSchema = generateCateringFAQSchema('Wedding Catering Birmingham', faqs)
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://luxevenue.co.uk/catering' },
      { '@type': 'ListItem', position: 3, name: 'Wedding Catering', item: 'https://luxevenue.co.uk/catering/wedding-catering-birmingham' }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-heading font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                Pakistani & Indian Wedding Catering Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Halal Wedding Food for Nikah, Walima & Asian Weddings</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Authentic <strong className="text-white">Pakistani wedding catering</strong> and <strong className="text-white">Indian wedding food</strong> across Birmingham. From £18pp for buffet service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Get Wedding Catering Quote
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Birmingham's Premier Halal Wedding Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Planning a <strong className="text-white">Pakistani wedding</strong>, <strong className="text-white">nikah ceremony</strong>, or <strong className="text-white">walima reception</strong> in Birmingham? 
                LUXE VENUE delivers authentic halal wedding catering with traditional Pakistani and Indian cuisine that honors your cultural heritage. We understand the importance of 
                perfect food at Asian weddings and provide professional catering service that impresses your guests.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our wedding catering menu features classic dishes: aromatic chicken biryani, tender lamb karahi, succulent seekh kebabs, crispy samosas, fresh tandoori naan, 
                flavorful pilau rice, and traditional mithai desserts. Every dish is prepared fresh on the day, using authentic spices and 100% halal certified ingredients. 
                We cater for intimate nikah ceremonies with 50 guests to grand walima receptions with 500+ guests across Birmingham and the West Midlands.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether your wedding is at a banquet hall, hotel, community centre, or private venue, our experienced team handles complete setup with elegant buffet presentation, 
                professional chafing dishes, uniformed staff, and seamless service throughout your event. We work with your wedding timeline for mehndi nights, nikah ceremonies, 
                and walima receptions, ensuring your guests enjoy hot, delicious Pakistani and Indian food at the perfect time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💍 Wedding Specialties</h3>
                <p className="text-gray-300 text-sm">Nikah, Walima, Mehndi catering. Pakistani & Indian menus. 50-500 guests. Live cooking stations available.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Wedding Pricing</h3>
                <p className="text-gray-300 text-sm">From £18pp Pakistani menu, £16pp Indian menu. Includes starters, mains, rice, naan, desserts. Free tasting for 100+ guests.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">✅ 100% Halal</h3>
                <p className="text-gray-300 text-sm">All ingredients halal certified. Cultural understanding. Professional presentation. Experienced wedding catering team.</p>
              </div>
            </div>

            <div className="bg-black-secondary p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Wedding Catering FAQs</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-surface-dark p-6 rounded-lg border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-link to Venue (Strategic, not keyword cannibalization) */}
            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Need a Wedding Venue Too?</h3>
              <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Planning the full wedding? LUXE VENUE also offers a beautiful event space in Birmingham B12 for nikah ceremonies and intimate celebrations up to 70 guests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/wedding-venue-birmingham" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all text-center">
                  View Wedding Venue
                </Link>
                <Link href="/nikah-venue-birmingham" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all text-center">
                  View Nikah Venue
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Wedding Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your Pakistani or Indian wedding catering. Professional service, authentic taste, perfect for your special day.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-rose-gold text-black font-bold hover:bg-rose-gold-light transition-all">
                  Get Free Quote
                </Link>
                <Link href="/catering" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all">
                  View All Catering Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
