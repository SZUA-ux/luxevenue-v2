import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringMetadata, generateCateringJSONLD, generateCateringFAQSchema, generateCateringBreadcrumbs } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringMetadata({
  city: 'Birmingham',
  slug: 'birmingham-pakistani-indian-catering',
  postcodes: ['B1', 'B2', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B18', 'B19', 'B20', 'B21', 'B23', 'B24', 'B25', 'B26', 'B27', 'B28', 'B29', 'B30', 'B31', 'B32', 'B33', 'B34', 'B35', 'B36', 'B37', 'B38', 'B40', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47'],
  neighbourhoods: ['Sparkhill', 'Small Heath', 'Alum Rock', 'Handsworth', 'Edgbaston', 'Moseley', 'Balsall Heath', 'Bordesley Green', 'Saltley', 'Aston', 'Erdington', 'Perry Barr', 'Kings Heath', 'Hall Green', 'Yardley', 'Acocks Green', 'Selly Oak', 'Stirchley', 'Bournville', 'Harborne'],
  landmarks: ['Bullring', 'Grand Central', 'NEC Birmingham', 'ICC', 'Symphony Hall', 'Utilita Arena', 'Edgbaston Stadium']
})

const faqs = [
  {
    question: 'Do you deliver Pakistani catering to Sparkhill and Small Heath in Birmingham?',
    answer: 'Yes! We deliver halal Pakistani and Indian catering throughout Birmingham including Sparkhill, Small Heath, Alum Rock, Handsworth, and all Birmingham postcodes (B1-B47). Free delivery for orders of 100+ guests. Minimum order 20 guests.'
  },
  {
    question: 'Can you cater events at Birmingham venues like Edgbaston Stadium or the ICC?',
    answer: 'Absolutely! LUXE VENUE provides professional halal catering for events at all major Birmingham venues including Edgbaston Stadium, ICC, Utilita Arena, NEC Birmingham, and private venues across the city. We handle everything from setup to cleanup.'
  },
  {
    question: 'What areas of Birmingham do you cover for halal catering?',
    answer: 'We cover all Birmingham areas including city centre (B1-B5), Sparkhill (B11), Small Heath (B10), Alum Rock (B8), Handsworth (B21), Edgbaston (B15), Moseley (B13), Balsall Heath (B12), Hall Green (B28), Kings Heath (B14), Erdington (B23-B24), Perry Barr (B42-B44), Selly Oak (B29), and surrounding postcodes.'
  },
  {
    question: 'How much is Pakistani catering per person in Birmingham?',
    answer: 'Our Birmingham halal catering starts from £15 per person for buffet service. Pakistani menu £18pp, Indian menu £16pp, Fusion menu £20pp. All prices include fresh cooking, professional setup, chafing dishes, and serving utensils. Custom quotes available for larger events.'
  }
]

export default function BirminghamCateringPage() {
  const jsonLd = generateCateringJSONLD({
    city: 'Birmingham',
    slug: 'birmingham-pakistani-indian-catering',
    postcodes: ['B1', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B21', 'B28', 'B29'],
    neighbourhoods: ['Sparkhill', 'Small Heath', 'Alum Rock', 'Handsworth', 'Edgbaston']
  })
  
  const faqSchema = generateCateringFAQSchema('Birmingham', faqs)
  const breadcrumbs = generateCateringBreadcrumbs('Birmingham', 'birmingham-pakistani-indian-catering')

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
                Pakistani & Indian Catering Birmingham City Centre
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Halal Catering for All Occasions in Birmingham</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Based in Birmingham B12, LUXE VENUE is your local <strong className="text-white">Pakistani and Indian halal catering specialist</strong>. 
              Serving all Birmingham areas including Sparkhill, Small Heath, Alum Rock, Handsworth, Edgbaston, Moseley, and city centre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Get Free Quote
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            {/* City-Specific Content */}
            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Birmingham's Premier Halal Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Looking for authentic <strong className="text-white">Pakistani catering in Birmingham</strong> or <strong className="text-white">Indian catering services</strong>? 
                LUXE VENUE delivers premium halal cuisine throughout Birmingham city centre (B1-B5), Sparkhill (B11), Small Heath (B10), Alum Rock (B8), Balsall Heath (B12), 
                Bordesley Green (B9), Handsworth (B21), and all surrounding areas.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Based at 86 Leopold Street, Birmingham B12 0UD, we're perfectly positioned to serve events across the city. Whether you're hosting a wedding at 
                Edgbaston Stadium, a corporate event at the ICC Birmingham, a family gathering in Moseley, or a home party in Kings Heath, our professional catering 
                team delivers fresh, authentic Pakistani and Indian cuisine right to your door.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We proudly serve Birmingham's diverse communities including Sparkhill's vibrant Stratford Road corridor, the bustling streets of Small Heath and Alum Rock, 
                the leafy suburbs of Edgbaston and Moseley, historic Handsworth, family-friendly Hall Green (B28), and everywhere in between. From intimate gatherings 
                in Bournville to large celebrations at the NEC Birmingham, LUXE VENUE brings restaurant-quality halal food to your event.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">📍 Areas Covered</h3>
                <p className="text-gray-300 text-sm">All Birmingham postcodes: B1-B47. Sparkhill, Small Heath, Alum Rock, Handsworth, Edgbaston, Moseley, Hall Green, Erdington, Perry Barr, Selly Oak & more.</p>
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

            {/* FAQs */}
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

            {/* CTA */}
            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Birmingham Catering?</h3>
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
