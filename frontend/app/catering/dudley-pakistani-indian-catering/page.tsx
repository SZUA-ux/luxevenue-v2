import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringMetadata, generateCateringJSONLD, generateCateringFAQSchema, generateCateringBreadcrumbs } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringMetadata({
  city: 'Dudley',
  slug: 'dudley-pakistani-indian-catering',
  postcodes: ['DY1', 'DY2', 'DY3', 'DY4', 'DY5', 'DY6', 'DY8', 'DY9'],
  neighbourhoods: ['Brierley Hill', 'Kingswinford', 'Stourbridge', 'Halesowen', 'Netherton', 'Sedgley', 'Coseley', 'Gornalwood'],
  landmarks: ['Dudley Zoo', 'Dudley Castle', 'Black Country Living Museum', 'Merry Hill Shopping Centre', 'Dudley Canal']
})

const faqs = [
  {
    question: 'Do you deliver Pakistani catering to Brierley Hill and Stourbridge in Dudley?',
    answer: 'Yes! We deliver authentic halal Pakistani and Indian catering throughout Dudley borough including Brierley Hill (DY5), Stourbridge (DY8), Kingswinford (DY6), Halesowen (B63), Netherton (DY2), and all Dudley postcodes (DY1-DY9). Free delivery for orders of 100+ guests. Minimum order 20 guests.'
  },
  {
    question: 'Can you cater events at Black Country Living Museum or Merry Hill?',
    answer: 'Absolutely! LUXE VENUE provides professional halal catering for events at all major Dudley venues including Black Country Living Museum, Merry Hill Shopping Centre, Dudley Zoo, Dudley Castle, and private venues across Dudley borough. We handle everything from setup to cleanup.'
  },
  {
    question: 'What areas of Dudley do you cover for halal catering?',
    answer: 'We cover all Dudley borough including Dudley town centre (DY1-DY2), Brierley Hill (DY5), Stourbridge (DY8-DY9), Kingswinford (DY6), Halesowen (B63), Netherton (DY2), Sedgley (DY3), Coseley (WV14), and all surrounding postcodes across the Black Country.'
  },
  {
    question: 'How much is Pakistani catering per person in Dudley?',
    answer: 'Our Dudley halal catering starts from £15 per person for buffet service. Pakistani menu £18pp, Indian menu £16pp, Fusion menu £20pp. All prices include fresh cooking, professional setup, chafing dishes, and serving utensils. Free delivery for 100+ guests throughout Dudley borough.'
  }
]

export default function DudleyCateringPage() {
  const jsonLd = generateCateringJSONLD({
    city: 'Dudley',
    slug: 'dudley-pakistani-indian-catering',
    postcodes: ['DY1', 'DY2', 'DY5', 'DY6', 'DY8'],
    neighbourhoods: ['Brierley Hill', 'Kingswinford', 'Stourbridge', 'Halesowen', 'Netherton']
  })
  
  const faqSchema = generateCateringFAQSchema('Dudley', faqs)
  const breadcrumbs = generateCateringBreadcrumbs('Dudley', 'dudley-pakistani-indian-catering')

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
                Pakistani & Indian Catering Dudley
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Halal Catering for All Occasions in Dudley</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Serving <strong className="text-white">Dudley, Brierley Hill, Stourbridge, Halesowen, and the Black Country</strong> with authentic Pakistani and Indian halal catering.
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
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Dudley's Premier Halal Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Looking for authentic <strong className="text-white">Pakistani catering in Dudley</strong> or <strong className="text-white">Indian catering services</strong>? 
                LUXE VENUE delivers premium halal cuisine throughout Dudley town centre (DY1-DY2), Brierley Hill (DY5), Stourbridge (DY8-DY9), Kingswinford (DY6), 
                Halesowen (B63), Netherton (DY2), and all surrounding areas across Dudley borough and the Black Country.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Whether you're hosting a wedding near Dudley Castle, a corporate event at Merry Hill Shopping Centre, a family gathering in Stourbridge, or a celebration at the 
                Black Country Living Museum, our professional catering team delivers fresh, authentic Pakistani and Indian cuisine. We proudly serve the historic Black Country, 
                from Dudley's famous zoo and castle to the vibrant shopping streets of Brierley Hill and the charming market town of Stourbridge.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Based in Birmingham B12, we're perfectly positioned to serve all of Dudley borough. From intimate family gatherings in Sedgley to large celebrations 
                at Halesowen, LUXE VENUE brings restaurant-quality halal food to your event across DY1-DY9 postcodes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">📍 Areas Covered</h3>
                <p className="text-gray-300 text-sm">All Dudley postcodes: DY1-DY9. Brierley Hill, Stourbridge, Kingswinford, Halesowen, Netherton, Sedgley & more.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Dudley Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your next event in Dudley and the Black Country.</p>
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
