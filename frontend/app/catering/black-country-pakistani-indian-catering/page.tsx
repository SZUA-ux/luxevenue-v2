import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringMetadata, generateCateringJSONLD, generateCateringFAQSchema, generateCateringBreadcrumbs } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringMetadata({
  city: 'Black Country',
  slug: 'black-country-pakistani-indian-catering',
  postcodes: ['DY1', 'DY2', 'DY3', 'DY4', 'DY5', 'WV1', 'WV4', 'WV14', 'B64', 'B65', 'B66', 'B67', 'B68', 'B69', 'B70', 'B71'],
  neighbourhoods: ['Dudley', 'Wolverhampton', 'Walsall', 'West Bromwich', 'Sandwell', 'Oldbury', 'Smethwick', 'Tipton', 'Rowley Regis', 'Wednesbury'],
  landmarks: ['Black Country Living Museum', 'Dudley Zoo', 'Merry Hill', 'Molineux Stadium', 'The Hawthorns']
})

const faqs = [
  {
    question: 'Do you deliver Pakistani catering across the Black Country region?',
    answer: 'Yes! We deliver authentic halal Pakistani and Indian catering throughout the Black Country including Dudley (DY1-DY5), Wolverhampton (WV1-WV14), Walsall (WS1-WS10), West Bromwich (B70-B71), Sandwell (B66-B69), Oldbury, Smethwick, and all Black Country postcodes. Free delivery for orders of 100+ guests.'
  },
  {
    question: 'Can you cater events at Black Country Living Museum or The Hawthorns?',
    answer: 'Absolutely! LUXE VENUE provides professional halal catering for events at all major Black Country venues including Black Country Living Museum, The Hawthorns (West Brom), Molineux Stadium (Wolves), Dudley Zoo, Merry Hill, and private venues across the region.'
  },
  {
    question: 'What Black Country areas do you cover for halal catering?',
    answer: 'We cover the entire Black Country region including Dudley, Wolverhampton, Walsall, West Bromwich, Sandwell, Oldbury, Smethwick, Tipton, Rowley Regis, Wednesbury, Bilston, Sedgley, Coseley, Willenhall, and all surrounding postcodes (DY, WV, WS, B64-B71).'
  },
  {
    question: 'How much is Pakistani catering per person in the Black Country?',
    answer: 'Our Black Country halal catering starts from £15 per person for buffet service. Pakistani menu £18pp, Indian menu £16pp, Fusion menu £20pp. All prices include fresh cooking, professional setup, chafing dishes, and serving utensils. Free delivery for 100+ guests throughout the Black Country.'
  }
]

export default function BlackCountryCateringPage() {
  const jsonLd = generateCateringJSONLD({
    city: 'Black Country',
    slug: 'black-country-pakistani-indian-catering',
    postcodes: ['DY1', 'DY2', 'DY5', 'WV1', 'WV14', 'B70', 'B71'],
    neighbourhoods: ['Dudley', 'Wolverhampton', 'West Bromwich', 'Sandwell', 'Oldbury']
  })
  
  const faqSchema = generateCateringFAQSchema('Black Country', faqs)
  const breadcrumbs = generateCateringBreadcrumbs('Black Country', 'black-country-pakistani-indian-catering')

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
                Pakistani & Indian Catering Black Country
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Halal Catering Across the Black Country Region</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Serving <strong className="text-white">Dudley, Wolverhampton, Walsall, West Bromwich, Sandwell & the entire Black Country</strong> with authentic Pakistani and Indian halal catering.
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
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Black Country's Premier Halal Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Looking for authentic <strong className="text-white">Pakistani catering in the Black Country</strong> or <strong className="text-white">Indian catering services</strong>? 
                LUXE VENUE delivers premium halal cuisine throughout the historic Black Country region including Dudley (DY1-DY5), Wolverhampton (WV1-WV14), Walsall (WS1-WS10), 
                West Bromwich (B70-B71), Sandwell (B66-B69), Oldbury, Smethwick, Tipton, and all surrounding areas.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Whether you're hosting a wedding at Black Country Living Museum, a corporate event at The Hawthorns (West Brom), a family gathering in Oldbury, or a celebration at 
                Molineux Stadium (Wolves), our professional catering team delivers fresh, authentic Pakistani and Indian cuisine. We proudly serve the Black Country's rich industrial 
                heritage areas from Dudley's famous castle and zoo to the bustling markets of West Bromwich, the canal-side venues of Tipton and Wednesbury, and everywhere in between.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Based in nearby Birmingham B12, we're perfectly positioned to serve the entire Black Country region. From intimate family gatherings in Rowley Regis to large celebrations 
                at Merry Hill Shopping Centre, LUXE VENUE brings restaurant-quality halal food to your event across all DY, WV, WS, and B64-B71 postcodes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">📍 Areas Covered</h3>
                <p className="text-gray-300 text-sm">Entire Black Country: Dudley, Wolverhampton, Walsall, West Bromwich, Sandwell, Oldbury, Smethwick, Tipton, Wednesbury & more.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Pricing</h3>
                <p className="text-gray-300 text-sm">From £15pp buffet service. Pakistani menu £18pp, Indian £16pp, Fusion £20pp. Free delivery 100+ guests. Minimum order 20 guests.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">✅ 100% Halal</h3>
                <p className="text-gray-300 text-sm">All ingredients halal certified. Fresh cooking on-site or at our kitchen. Professional equipment, experienced staff.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Black Country Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your next event across the Black Country region.</p>
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
