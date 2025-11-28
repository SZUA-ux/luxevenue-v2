import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringMetadata, generateCateringJSONLD, generateCateringFAQSchema, generateCateringBreadcrumbs } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringMetadata({
  city: 'Solihull',
  slug: 'solihull-pakistani-indian-catering',
  postcodes: ['B90', 'B91', 'B92', 'B93', 'B94', 'B95'],
  neighbourhoods: ['Shirley', 'Olton', 'Acocks Green', 'Marston Green', 'Dorridge', 'Knowle', 'Castle Bromwich', 'Chelmsley Wood'],
  landmarks: ['NEC Birmingham', 'Birmingham Airport', 'Touchwood Shopping Centre', 'Resorts World', 'Solihull Station']
})

const faqs = [
  {
    question: 'Do you deliver Pakistani catering to Shirley and Olton in Solihull?',
    answer: 'Yes! We deliver authentic halal Pakistani and Indian catering throughout Solihull including Shirley (B90), Olton (B92), Acocks Green (B27), Marston Green (B37), Dorridge (B93), Knowle (B93), and all Solihull postcodes (B90-B95). Free delivery for orders of 100+ guests. Minimum order 20 guests.'
  },
  {
    question: 'Can you cater events at the NEC Birmingham or Resorts World?',
    answer: 'Absolutely! LUXE VENUE provides professional halal catering for events at all major Solihull venues including the NEC Birmingham, Resorts World, Birmingham Airport venues, Touchwood Shopping Centre, and private venues across Solihull. We handle everything from setup to cleanup with experienced staff.'
  },
  {
    question: 'What areas of Solihull do you cover for halal catering?',
    answer: 'We cover all Solihull areas including Solihull town centre (B91), Shirley (B90), Olton (B92), Acocks Green (B27), Marston Green (B37), Dorridge (B93), Knowle (B93), Castle Bromwich (B36), Chelmsley Wood (B37), and all surrounding postcodes across Solihull borough.'
  },
  {
    question: 'How much is Pakistani catering per person in Solihull?',
    answer: 'Our Solihull halal catering starts from £15 per person for buffet service. Pakistani menu £18pp, Indian menu £16pp, Fusion menu £20pp. All prices include fresh cooking, professional setup, chafing dishes, and serving utensils. Free delivery for 100+ guests throughout Solihull.'
  }
]

export default function SolihullCateringPage() {
  const jsonLd = generateCateringJSONLD({
    city: 'Solihull',
    slug: 'solihull-pakistani-indian-catering',
    postcodes: ['B90', 'B91', 'B92', 'B93'],
    neighbourhoods: ['Shirley', 'Olton', 'Acocks Green', 'Marston Green', 'Dorridge']
  })
  
  const faqSchema = generateCateringFAQSchema('Solihull', faqs)
  const breadcrumbs = generateCateringBreadcrumbs('Solihull', 'solihull-pakistani-indian-catering')

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
                Pakistani & Indian Catering Solihull
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Halal Catering for All Occasions in Solihull</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Serving <strong className="text-white">Solihull, Shirley, Olton, Acocks Green, and Marston Green</strong> with authentic Pakistani and Indian halal catering.
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
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Solihull's Premier Halal Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Looking for authentic <strong className="text-white">Pakistani catering in Solihull</strong> or <strong className="text-white">Indian catering services</strong>? 
                LUXE VENUE delivers premium halal cuisine throughout Solihull town centre (B91), Shirley (B90), Olton (B92), Acocks Green (B27), Marston Green (B37), 
                Dorridge (B93), Knowle (B93), and all surrounding areas across Solihull borough.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Whether you're hosting a wedding at the NEC Birmingham, a corporate event at Resorts World, a family gathering in Shirley, or a celebration near Birmingham Airport, 
                our professional catering team delivers fresh, authentic Pakistani and Indian cuisine. We proudly serve Solihull's affluent communities from the upmarket town centre 
                and Touchwood Shopping Centre to the leafy suburbs of Dorridge and Knowle, the bustling areas of Acocks Green and Marston Green, and everywhere in between.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Based in nearby Birmingham B12, we're perfectly positioned to serve all of Solihull. From intimate family gatherings in Olton to large celebrations 
                at Castle Bromwich or Chelmsley Wood, LUXE VENUE brings restaurant-quality halal food to your event across B90-B95 postcodes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">📍 Areas Covered</h3>
                <p className="text-gray-300 text-sm">All Solihull postcodes: B90-B95. Shirley, Olton, Acocks Green, Marston Green, Dorridge, Knowle, Castle Bromwich & more.</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Solihull Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your next event. Professional service, authentic taste.</p>
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
