import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringMetadata, generateCateringJSONLD, generateCateringFAQSchema, generateCateringBreadcrumbs } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringMetadata({
  city: 'Wolverhampton',
  slug: 'wolverhampton-pakistani-indian-catering',
  postcodes: ['WV1', 'WV2', 'WV3', 'WV4', 'WV5', 'WV6', 'WV7', 'WV8', 'WV9', 'WV10', 'WV11', 'WV12', 'WV13', 'WV14'],
  neighbourhoods: ['Wednesfield', 'Bilston', 'Tettenhall', 'Penn', 'Whitmore Reans', 'Parkfields', 'Fordhouses', 'Bushbury', 'Oxley'],
  landmarks: ['Molineux Stadium', 'Grand Theatre', 'Wolverhampton Art Gallery', 'West Park', 'Wolverhampton Civic Hall']
})

const faqs = [
  {
    question: 'Do you deliver Pakistani catering to Wednesfield and Bilston in Wolverhampton?',
    answer: 'Yes! We deliver authentic halal Pakistani and Indian catering throughout Wolverhampton including Wednesfield (WV11), Bilston (WV14), Tettenhall (WV6), Penn (WV4), Whitmore Reans (WV1), and all Wolverhampton postcodes (WV1-WV14). Free delivery for orders of 100+ guests. Minimum order 20 guests.'
  },
  {
    question: 'Can you cater events at Molineux Stadium or Wolverhampton Civic Hall?',
    answer: 'Absolutely! LUXE VENUE provides professional halal catering for events at all major Wolverhampton venues including Molineux Stadium, Wolverhampton Civic Hall, Grand Theatre, West Park, and private venues across Wolverhampton. We handle everything from setup to cleanup with experienced staff.'
  },
  {
    question: 'What areas of Wolverhampton do you cover for halal catering?',
    answer: 'We cover all Wolverhampton areas including city centre (WV1), Wednesfield (WV11), Bilston (WV14), Tettenhall (WV6), Penn (WV4), Whitmore Reans (WV1), Parkfields (WV4), Fordhouses (WV10), Bushbury (WV10), Oxley (WV10), and all surrounding postcodes across Wolverhampton.'
  },
  {
    question: 'How much is Pakistani catering per person in Wolverhampton?',
    answer: 'Our Wolverhampton halal catering starts from £15 per person for buffet service. Pakistani menu £18pp, Indian menu £16pp, Fusion menu £20pp. All prices include fresh cooking, professional setup, chafing dishes, and serving utensils. Free delivery for 100+ guests throughout Wolverhampton.'
  }
]

export default function WolverhamptonCateringPage() {
  const jsonLd = generateCateringJSONLD({
    city: 'Wolverhampton',
    slug: 'wolverhampton-pakistani-indian-catering',
    postcodes: ['WV1', 'WV4', 'WV6', 'WV10', 'WV11', 'WV14'],
    neighbourhoods: ['Wednesfield', 'Bilston', 'Tettenhall', 'Penn', 'Whitmore Reans']
  })
  
  const faqSchema = generateCateringFAQSchema('Wolverhampton', faqs)
  const breadcrumbs = generateCateringBreadcrumbs('Wolverhampton', 'wolverhampton-pakistani-indian-catering')

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
                Pakistani & Indian Catering Wolverhampton
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Halal Catering for All Occasions in Wolverhampton</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Serving <strong className="text-white">Wolverhampton, Wednesfield, Bilston, Tettenhall, and Penn</strong> with authentic Pakistani and Indian halal catering.
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
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Wolverhampton's Premier Halal Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Looking for authentic <strong className="text-white">Pakistani catering in Wolverhampton</strong> or <strong className="text-white">Indian catering services</strong>? 
                LUXE VENUE delivers premium halal cuisine throughout Wolverhampton city centre (WV1), Wednesfield (WV11), Bilston (WV14), Tettenhall (WV6), Penn (WV4), 
                Whitmore Reans (WV1), and all surrounding areas across Wolverhampton.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Whether you're hosting a wedding near Molineux Stadium, a corporate event at Wolverhampton Civic Hall, a family gathering in Tettenhall, or a home party in Wednesfield, 
                our professional catering team delivers fresh, authentic Pakistani and Indian cuisine. We proudly serve Wolverhampton's diverse communities from the vibrant city centre 
                to the historic streets of Bilston, the leafy suburbs of Penn and Tettenhall, and everywhere in between.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Based in nearby Birmingham B12, we're perfectly positioned to serve all of Wolverhampton. From intimate family gatherings in Fordhouses to large celebrations 
                at West Park, LUXE VENUE brings restaurant-quality halal food to your event across WV1-WV14 postcodes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">📍 Areas Covered</h3>
                <p className="text-gray-300 text-sm">All Wolverhampton postcodes: WV1-WV14. Wednesfield, Bilston, Tettenhall, Penn, Whitmore Reans, Bushbury, Fordhouses & more.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Wolverhampton Catering?</h3>
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
