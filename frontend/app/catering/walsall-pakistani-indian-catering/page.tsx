import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringMetadata, generateCateringJSONLD, generateCateringFAQSchema, generateCateringBreadcrumbs } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringMetadata({
  city: 'Walsall',
  slug: 'walsall-pakistani-indian-catering',
  postcodes: ['WS1', 'WS2', 'WS3', 'WS4', 'WS5', 'WS6', 'WS7', 'WS8', 'WS9', 'WS10'],
  neighbourhoods: ['Bloxwich', 'Willenhall', 'Brownhills', 'Pelsall', 'Aldridge', 'Streetly', 'Rushall', 'Bescot', 'Darlaston'],
  landmarks: ['Walsall Arboretum', 'Leather Museum', 'New Art Gallery Walsall', 'Walsall Town Hall']
})

const faqs = [
  {
    question: 'Do you deliver Pakistani catering to Bloxwich and Willenhall in Walsall?',
    answer: 'Yes! We deliver authentic halal Pakistani and Indian catering throughout Walsall including Bloxwich (WS3), Willenhall (WS10), Brownhills (WS8), Pelsall (WS3), Aldridge (WS9), and all Walsall postcodes (WS1-WS10). Free delivery for orders of 100+ guests. Minimum order 20 guests.'
  },
  {
    question: 'Can you cater events at Walsall Arboretum or Walsall Town Hall?',
    answer: 'Absolutely! LUXE VENUE provides professional halal catering for events at all major Walsall venues including Walsall Arboretum, Walsall Town Hall, New Art Gallery Walsall, and private venues across Walsall borough. We handle everything from setup to cleanup with professional staff.'
  },
  {
    question: 'What areas of Walsall do you cover for halal catering?',
    answer: 'We cover all Walsall areas including Walsall town centre (WS1), Bloxwich (WS3), Willenhall (WS10), Brownhills (WS8), Pelsall (WS3-WS4), Aldridge (WS9), Streetly (WS9), Rushall (WS4), Darlaston (WS10), and all surrounding postcodes across Walsall borough.'
  },
  {
    question: 'How much is Pakistani catering per person in Walsall?',
    answer: 'Our Walsall halal catering starts from £15 per person for buffet service. Pakistani menu £18pp, Indian menu £16pp, Fusion menu £20pp. All prices include fresh cooking, professional setup, chafing dishes, and serving utensils. Free delivery for 100+ guests throughout Walsall.'
  }
]

export default function WalsallCateringPage() {
  const jsonLd = generateCateringJSONLD({
    city: 'Walsall',
    slug: 'walsall-pakistani-indian-catering',
    postcodes: ['WS1', 'WS3', 'WS8', 'WS9', 'WS10'],
    neighbourhoods: ['Bloxwich', 'Willenhall', 'Brownhills', 'Pelsall', 'Aldridge']
  })
  
  const faqSchema = generateCateringFAQSchema('Walsall', faqs)
  const breadcrumbs = generateCateringBreadcrumbs('Walsall', 'walsall-pakistani-indian-catering')

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
                Pakistani & Indian Catering Walsall
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Halal Catering for All Occasions in Walsall</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Serving <strong className="text-white">Walsall, Bloxwich, Willenhall, Brownhills, and Aldridge</strong> with authentic Pakistani and Indian halal catering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Get Free Quote
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Walsall's Premier Halal Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Looking for authentic <strong className="text-white">Pakistani catering in Walsall</strong> or <strong className="text-white">Indian catering services</strong>? 
                LUXE VENUE delivers premium halal cuisine throughout Walsall town centre (WS1), Bloxwich (WS3), Willenhall (WS10), Brownhills (WS8), Pelsall (WS3-WS4), 
                Aldridge (WS9), and all surrounding areas across Walsall borough.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Whether you're hosting a wedding at Walsall Town Hall, a corporate event at New Art Gallery Walsall, a family gathering in Bloxwich, or a home party in Willenhall, 
                our professional catering team delivers fresh, authentic Pakistani and Indian cuisine. We proudly serve Walsall's diverse communities from the historic town centre 
                to the bustling streets of Bloxwich, the charming villages of Pelsall and Aldridge, and everywhere in between.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Based just 8 miles away in Birmingham B12, we're perfectly positioned to serve all of Walsall. From intimate family gatherings in Streetly to large celebrations 
                at Walsall Arboretum, LUXE VENUE brings restaurant-quality halal food to your event across WS1-WS10 postcodes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">📍 Areas Covered</h3>
                <p className="text-gray-300 text-sm">All Walsall postcodes: WS1-WS10. Bloxwich, Willenhall, Brownhills, Pelsall, Aldridge, Streetly, Rushall, Darlaston & more.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Pricing</h3>
                <p className="text-gray-300 text-sm">From £15pp buffet service. Pakistani menu £18pp, Indian £16pp, Fusion £20pp. Free delivery 100+ guests. Minimum order 20 guests.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">✅ 100% Halal</h3>
                <p className="text-gray-300 text-sm">All ingredients halal certified. Fresh cooking on-site or at our kitchen. Professional equipment, experienced staff, elegant presentation.</p>
              </div>
            </div>

            <div className="bg-black-secondary p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-surface-dark p-6 rounded-lg border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Walsall Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your next event. Professional service, authentic taste, unbeatable value.</p>
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
