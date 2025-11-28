import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateLocalBusinessSchema, generateEventVenueSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/seo'

export const metadata: Metadata = {
  title: 'Mehndi Venue Birmingham | Henna Party & Pre-Wedding Celebration Venue | LUXE VENUE',
  description: 'Beautiful mehndi venue in Birmingham B12. Perfect for mehndi nights, henna parties, ladies events. Elegant décor, halal catering, ladies-only option. Book your mehndi celebration at LUXE VENUE.',
  keywords: 'mehndi venue birmingham, mehndi night birmingham, henna party venue, mendhi venue, mehendi night, ladies event venue, pre-wedding celebration, bridal mehndi, mehndi function hall, asian wedding mehndi',
  openGraph: {
    title: 'Mehndi Venue Birmingham | Henna Party Venue | LUXE VENUE',
    description: 'Birmingham\'s premier mehndi venue. Beautiful décor, ladies-only events, halal catering. Perfect for Pakistani & Indian mehndi celebrations.',
    url: 'https://luxevenue.co.uk/mehndi-venue-birmingham',
    siteName: 'LUXE VENUE',
    images: [{ url: '/images/mehndi-venue-birmingham.jpg', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://luxevenue.co.uk/mehndi-venue-birmingham' },
  robots: { index: true, follow: true },
}

const faqs = [
  { question: 'Is LUXE VENUE suitable for mehndi nights in Birmingham?', answer: 'Absolutely! LUXE VENUE is Birmingham\'s most popular mehndi venue, specializing in traditional Pakistani and Indian mehndi celebrations. Our elegant space accommodates up to 70 guests with beautiful décor options, ladies-only privacy, and authentic halal catering. Located in Sparkbrook (B12), we serve families from across Birmingham, Alum Rock, Small Heath, Handsworth, Walsall, and Dudley.' },
  { question: 'Can we have a ladies-only mehndi event?', answer: 'Yes! We offer completely private, ladies-only mehndi nights with full privacy. Our venue has private entrances, changing facilities, and we can arrange female-only service staff. This is perfect for traditional Pakistani mehndi, Indian mendhi functions, and Bangladeshi henna celebrations where ladies prefer a women-only environment.' },
  { question: 'What décor options are available for mehndi celebrations?', answer: 'We offer stunning mehndi décor packages including colorful marigold flowers, Pakistani truck art backdrops, traditional jhoola swings, floor seating with cushions, fairy lights, vibrant draping, henna stations with décor, and custom themed setups. Our décor team specializes in authentic South Asian mehndi aesthetics.' },
  { question: 'Do you provide halal food for mehndi nights?', answer: 'Yes, all our mehndi catering is 100% halal certified. Popular mehndi menu options include chaat items (gol gappay, samosas, pakoras), traditional Pakistani dishes, Indian street food, mithai (Asian sweets), and refreshing drinks. We can customize the menu to match your cultural preferences and dietary requirements.' },
  { question: 'How much does a mehndi night cost at LUXE VENUE?', answer: 'Our mehndi venue packages start from £800 for venue hire including seating, sound system, and basic lighting. Décor packages range from £300-800 depending on complexity. Catering costs £12-25 per person. A complete mehndi celebration for 50 guests typically costs £2,000-3,500 including everything.' },
  { question: 'Can we bring our own mehndi artist?', answer: 'Absolutely! You\'re welcome to bring your own henna artists, mehndi designers, and entertainers. We provide comfortable seating areas, good lighting, and electrical outlets for mehndi stations. We can also recommend trusted Birmingham mehndi artists if needed.' },
  { question: 'What time can we start and finish the mehndi event?', answer: 'Mehndi nights typically run from 5pm-11pm, perfect for evening celebrations. We offer flexible timing for weekday and weekend mehndi functions. Extended hours can be arranged for an additional fee. Most Birmingham families choose evening slots to accommodate working guests.' },
  { question: 'Is there space for mehndi entertainment and dancing?', answer: 'Yes! Our 8m x 9m venue provides ample space for traditional mehndi entertainment including dholki performances, mehndi songs, dancing, and cultural performances. We have a professional sound system perfect for Bollywood music, Punjabi songs, and traditional mehndi geets.' },
  { question: 'Do you host mehndi events for families from Walsall and Dudley?', answer: 'Yes! We serve Pakistani, Indian, and Bangladeshi families from across West Midlands. Walsall is just 20 minutes away, Dudley 25 minutes, Wolverhampton 30 minutes, and West Bromwich 18 minutes from our Sparkbrook location. Many families choose LUXE VENUE for its central Birmingham accessibility.' },
  { question: 'Can we combine mehndi night with other wedding events?', answer: 'Absolutely! Many families book LUXE VENUE for multiple events including mehndi night, nikah ceremony, and walima reception. We offer package discounts for combined bookings and can transform the venue with different décor themes for each celebration.' }
]

export default function MehndiVenueBirminghamPage() {
  const schemas = {
    local: generateLocalBusinessSchema(),
    venue: generateEventVenueSchema(),
    faq: generateFAQSchema(faqs),
    breadcrumb: generateBreadcrumbSchema([{ name: 'Home', url: 'https://luxevenue.co.uk' }, { name: 'Weddings', url: 'https://luxevenue.co.uk/wedding-venue-birmingham' }, { name: 'Mehndi Venue Birmingham', url: 'https://luxevenue.co.uk/mehndi-venue-birmingham' }])
  }

  return (
    <>
      {Object.values(schemas).map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PublicNav />
      <main className="min-h-screen bg-black-primary text-white">
        <section className="pt-24 py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <nav className="flex text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-rose-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/wedding-venue-birmingham" className="hover:text-rose-gold transition-colors">Weddings</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold">Mehndi Venue Birmingham</span>
          </nav>
        </section>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Birmingham's Most Vibrant <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">Mehndi Venue</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Celebrate traditional henna nights with authentic décor, ladies-only privacy & halal catering in Sparkbrook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/venue-hire-birmingham" className="px-8 py-4 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all">
                Book Mehndi Venue
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                Get Décor Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Looking for the perfect <strong>mehndi venue in Birmingham</strong>? LUXE VENUE is the West Midlands' most beloved <strong>henna party venue</strong>, specializing in authentic Pakistani mehndi nights, Indian mendhi celebrations, and Bangladeshi henna functions. Located at <strong>86 Leopold Street, Birmingham B12 0UD</strong> in the vibrant <strong>Sparkbrook neighborhood</strong>, our venue is surrounded by <strong>Asian bridal boutiques, mehndi artists, and traditional sweet shops</strong> along Stratford Road.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As Birmingham's premier <strong>mehndi function hall</strong>, we understand that mehndi night is one of the most joyous pre-wedding celebrations in South Asian culture. Our venue provides the perfect blend of traditional aesthetics, modern amenities, and cultural authenticity that makes your <strong>mehndi celebration in Birmingham</strong> truly unforgettable.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Why Choose LUXE VENUE for Your <span className="text-rose-gold">Mehndi Night</span>?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                When searching for <strong>mehndi venues in Birmingham</strong>, families want more than just a hall—they want a venue that understands the cultural significance and traditional customs of mehndi celebrations. LUXE VENUE has earned the trust of Pakistani, Indian, and Bangladeshi families across <strong>Birmingham, Alum Rock, Small Heath, Bordesley Green, Handsworth, Walsall, Dudley, Wolverhampton, Smethwick,</strong> and <strong>West Bromwich</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our <strong>Sparkbrook location (B12 postcode)</strong> is Birmingham's cultural hub for South Asian weddings. Within a 5-minute walk, you'll find <strong>Stratford Road's famous bridal shops</strong> (Zara's Bridal, Nomi Ansari, Maria B), <strong>professional mehndi artists</strong>, <strong>Asian jewellery stores</strong>, and <strong>mithai shops</strong> like Roshan Sweets and Lal Qila. For families traveling from <strong>Alum Rock</strong> (12 minutes drive), <strong>Small Heath</strong> (8 minutes), or <strong>Handsworth</strong> (15 minutes), our central location is perfectly convenient.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                What makes LUXE VENUE the best <strong>mehndi party venue in Birmingham</strong> is our expertise in traditional South Asian celebrations. We've hosted hundreds of <strong>Pakistani mehndi nights with dholki and truck art décor, Indian sangeet ceremonies with traditional rangoli, Gujarati mehndi functions with garba dancing,</strong> and <strong>Bengali gaye holud celebrations</strong>. Our team understands each cultural variation and ensures your mehndi celebration reflects your heritage perfectly.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Stunning <span className="text-rose-gold">Mehndi Décor Packages</span> in Birmingham
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: '🌼', title: 'Traditional Pakistani Décor', desc: 'Marigold flowers, truck art backdrops, colorful dupattas, traditional jhoola swing, floor seating with cushions.' },
                { icon: '🪔', title: 'Indian Mehndi Setup', desc: 'Rangoli designs, diya lighting, floral garlands, Rajasthani umbrellas, brass urlis with floating flowers.' },
                { icon: '💃', title: 'Sangeet Stage', desc: 'Decorated stage area for performances, professional lighting, sound system for Bollywood music and dholki.' },
                { icon: '🎨', title: 'Henna Stations', desc: 'Beautifully decorated mehndi application areas with comfortable seating, good lighting, and Instagram-worthy backdrops.' },
                { icon: '✨', title: 'Fairy Light Canopy', desc: 'Magical fairy light installations, warm ambient lighting, and elegant draping creating intimate atmosphere.' },
                { icon: '🎭', title: 'Photo Booth Area', desc: 'Custom mehndi-themed photo booth with props, floral walls, and traditional décor elements for memorable pictures.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-black-primary rounded-xl border border-white/10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              <span className="text-rose-gold">Ladies-Only Mehndi Events</span> with Complete Privacy
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Many families prefer <strong>ladies-only mehndi nights</strong> for cultural and religious reasons. LUXE VENUE provides complete privacy for women-only celebrations with private venue access, female service staff options, secure entrance, and curtained windows. Our <strong>ladies event venue in Birmingham</strong> is trusted by Muslim families who value modesty and cultural traditions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For <strong>ladies-only mehndi celebrations</strong>, we ensure no male staff enter the venue during your event, provide private changing facilities for the bride, and can arrange female photographers and videographers through our trusted partners. This makes LUXE VENUE the perfect choice for traditional Pakistani mehndi functions and conservative Muslim families across Birmingham.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Authentic <span className="text-rose-gold">Mehndi Catering</span> & Traditional Food
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                No <strong>mehndi night in Birmingham</strong> is complete without delicious food! Our 100% halal catering includes popular mehndi favorites: <strong>chaat counter</strong> (gol gappay, dahi bhalla, samosa chaat), <strong>live pakora station</strong>, <strong>chicken tikka and seekh kebabs</strong>, <strong>biryani and pilau rice</strong>, <strong>fresh naan and roti</strong>, and a stunning <strong>mithai table</strong> with gulab jamun, jalebi, barfi, and ladoo.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For <strong>Indian mehndi catering</strong>, we offer regional specialties including Gujarati dhokla and fafda, South Indian dosa counter, North Indian chaat, and authentic Indian sweets. Our chefs understand that mehndi food should be finger-friendly, easy to eat while getting henna applied, and absolutely delicious!
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Frequently Asked <span className="text-rose-gold">Questions</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="p-6 bg-surface-dark rounded-xl border border-white/10 hover:border-rose-gold/30 transition-all">
                <summary className="font-bold text-lg cursor-pointer hover:text-rose-gold transition-colors">{faq.question}</summary>
                <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Wedding Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/wedding-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Wedding Venue</h3>
                <p className="text-gray-400">Intimate wedding celebrations & receptions</p>
              </Link>
              <Link href="/nikah-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Nikah Ceremony</h3>
                <p className="text-gray-400">Islamic wedding venue with prayer facilities</p>
              </Link>
              <Link href="/catering" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Halal Catering</h3>
                <p className="text-gray-400">Authentic Pakistani & Indian cuisine</p>
              </Link>
              <Link href="/venue-hire-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Ladies Events</h3>
                <p className="text-gray-400">Private ladies-only celebrations</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Book Your <span className="text-rose-gold">Mehndi Night</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience Birmingham's most beautiful mehndi venue - LUXE VENUE Sparkbrook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/venue-hire-birmingham" className="px-10 py-5 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all text-lg">
              Book Mehndi Venue
            </Link>
            <Link href="tel:+447391222884" className="px-10 py-5 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all text-lg">
              Call: 07391 222884
            </Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
