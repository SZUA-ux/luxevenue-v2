import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateLocalBusinessSchema, generateEventVenueSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/seo'

export const metadata: Metadata = {
  title: 'Nikah Venue Birmingham | Islamic Wedding Venue with Prayer Facilities | LUXE VENUE',
  description: 'Premium nikah venue in Birmingham B12. 100% halal certified, prayer facilities, wudu area, alcohol-free. Perfect for Muslim weddings, Islamic ceremonies. Book your nikah at LUXE VENUE today.',
  keywords: 'nikah venue birmingham, islamic wedding venue birmingham, muslim wedding venue, halal venue birmingham, nikah ceremony birmingham, muslim wedding hall, islamic event space, halal wedding venue, mosque wedding venue, nikkah venue, muslim celebration venue',
  openGraph: {
    title: 'Nikah Venue Birmingham | Islamic Wedding Venue | LUXE VENUE',
    description: 'Birmingham\'s premier nikah venue. Prayer facilities, halal catering, Islamic traditions respected. 70 guest capacity in Sparkbrook.',
    url: 'https://luxevenue.co.uk/nikah-venue-birmingham',
    siteName: 'LUXE VENUE',
    images: [{ url: '/images/nikah-venue-birmingham.jpg', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://luxevenue.co.uk/nikah-venue-birmingham' },
  robots: { index: true, follow: true },
}

const faqs = [
  { question: 'Is LUXE VENUE suitable for nikah ceremonies in Birmingham?', answer: 'Yes! LUXE VENUE is Birmingham\'s leading nikah venue with dedicated prayer space, wudu facilities, Quran stands, and gender-separated seating. Our 100% alcohol-free, halal environment respects all Islamic wedding traditions. Located in Sparkbrook near Birmingham Central Mosque, we\'re trusted by Muslim families across Birmingham, Walsall, Dudley, and Wolverhampton.' },
  { question: 'Do you provide prayer facilities for nikah ceremonies?', answer: 'Absolutely. Our nikah venue includes a dedicated prayer area with Qibla direction clearly marked, wudu (ablution) facilities, prayer mats, and Quran stands. We ensure your nikah ceremony is conducted with full Islamic compliance and dignity.' },
  { question: 'Is all catering 100% halal certified for Muslim weddings?', answer: 'Yes, every dish served at LUXE VENUE is 100% halal certified. Our chefs specialize in authentic Pakistani, Indian, Middle Eastern, and fusion halal cuisine. All meat is sourced from halal-certified suppliers, and we maintain strict separation from non-halal ingredients.' },
  { question: 'Can we have gender-separated seating for our nikah?', answer: 'Yes, we accommodate gender-separated seating arrangements for nikah ceremonies. Our venue layout is flexible, allowing for partition screens or separate seating areas while maintaining the intimate atmosphere of your Islamic wedding.' },
  { question: 'How much does a nikah ceremony cost at LUXE VENUE Birmingham?', answer: 'Our nikah ceremony packages start from £1,200 including venue hire, seating, prayer facilities, sound system, and event coordination. Halal catering packages range from £15-35 per person. We offer affordable Muslim wedding packages with transparent pricing and no hidden fees.' },
  { question: 'Is LUXE VENUE close to mosques in Birmingham?', answer: 'Yes! Located at 86 Leopold Street in Sparkbrook (B12 0UD), we\'re walking distance from Birmingham Central Mosque, Sparkhill Mosque, and Green Lane Masjid. This makes it convenient for families to perform prayers before or after the nikah ceremony.' },
  { question: 'Do you allow outside Imams for nikah ceremonies?', answer: 'Absolutely. You\'re welcome to bring your preferred Imam or Islamic scholar to conduct the nikah ceremony at LUXE VENUE. We provide all necessary facilities including microphone, seating for the Imam, and a designated area for the nikah contract signing.' },
  { question: 'Can we decorate the venue for our Muslim wedding?', answer: 'Yes! While we maintain an alcohol-free, modest environment, we welcome Islamic decorations. Popular choices include Arabic calligraphy, floral arrangements, fairy lights, and elegant draping that complements Islamic wedding aesthetics.' },
  { question: 'What areas of Birmingham do you serve for nikah ceremonies?', answer: 'While located in Sparkbrook (B12), we serve Muslim families across Birmingham, Alum Rock, Small Heath, Bordesley Green, Handsworth, Aston, Saltley, and across West Midlands including Walsall, Dudley, Smethwick, West Bromwich, Wolverhampton, and Coventry.' },
  { question: 'Can we host mehndi night and walima at LUXE VENUE?', answer: 'Absolutely! Many Muslim families choose LUXE VENUE for their complete wedding celebrations including mehndi nights, nikah ceremony, and walima reception. We offer package discounts for multiple events and can customize each celebration according to your cultural traditions.' }
]

export default function NikahVenueBirminghamPage() {
  const schemas = {
    local: generateLocalBusinessSchema(),
    venue: generateEventVenueSchema(),
    faq: generateFAQSchema(faqs),
    breadcrumb: generateBreadcrumbSchema([{ name: 'Home', url: 'https://luxevenue.co.uk' }, { name: 'Nikah Venue Birmingham', url: 'https://luxevenue.co.uk/nikah-venue-birmingham' }])
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
            <span className="text-white font-semibold">Nikah Venue Birmingham</span>
          </nav>
        </section>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Birmingham's Premier <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">Nikah Venue</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Islamic wedding venue with prayer facilities & 100% halal environment in Sparkbrook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/venue-hire-birmingham" className="px-8 py-4 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all">
                Book Nikah Viewing
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                Get Halal Menu
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Searching for an authentic <strong>nikah venue in Birmingham</strong>? LUXE VENUE is the West Midlands' most trusted <strong>Islamic wedding venue</strong>, specializing in nikah ceremonies that honor Islamic traditions with dignity and respect. Located at <strong>86 Leopold Street, Birmingham B12 0UD</strong> in the heart of <strong>Sparkbrook's Muslim community</strong>, our venue is walking distance from <strong>Birmingham Central Mosque, Green Lane Masjid, and Ghamkol Sharif Masjid</strong>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As a dedicated <strong>Muslim wedding venue in Birmingham</strong>, we understand that a nikah ceremony is more than just an event—it's a sacred Islamic contract and spiritual celebration. Our <strong>halal venue</strong> is 100% alcohol-free, provides dedicated prayer facilities with wudu areas, and accommodates all Islamic wedding customs including gender-separated seating, Quran recitation, and traditional nikah rituals.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Why Choose LUXE VENUE for Your <span className="text-rose-gold">Nikah Ceremony</span>?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                When searching for <strong>nikah venues in Birmingham</strong>, Muslim families need more than just a beautiful space—they need a venue that understands and respects Islamic values. LUXE VENUE has earned the trust of Muslim communities across <strong>Birmingham, Walsall, Dudley, Wolverhampton, Smethwick, West Bromwich, Alum Rock, Small Heath, Handsworth,</strong> and <strong>Bordesley Green</strong> by providing authentic Islamic wedding experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our <strong>Sparkbrook location (B12 postcode)</strong> is ideal for Muslim weddings. The area is home to Birmingham's largest Muslim population, with numerous halal restaurants, Islamic bookshops, and bridal boutiques nearby. Your guests traveling from <strong>Alum Rock</strong> (15 minutes), <strong>Small Heath</strong> (10 minutes), or <strong>Saltley</strong> (12 minutes) will find our venue easily accessible, with free street parking and excellent public transport links.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                What distinguishes LUXE VENUE as the premier <strong>Islamic wedding venue in Birmingham</strong> is our comprehensive understanding of Muslim wedding traditions. We accommodate <strong>Pakistani nikah ceremonies, Indian Muslim weddings, Bangladeshi Islamic unions, Arab Muslim marriages,</strong> and <strong>African Muslim celebrations</strong>—each with their unique cultural customs while maintaining core Islamic principles.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Complete <span className="text-rose-gold">Islamic Wedding Facilities</span> in Birmingham
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: '🕌', title: 'Prayer Facilities', desc: 'Dedicated prayer space with Qibla direction, wudu area, prayer mats, and Quran stands for pre-ceremony prayers.' },
                { icon: '🍽️', title: '100% Halal Catering', desc: 'Certified halal Pakistani, Indian, Middle Eastern, and fusion cuisine. All meat halal-certified.' },
                { icon: '🚫🍷', title: 'Alcohol-Free Venue', desc: 'Completely alcohol-free environment respecting Islamic prohibition of intoxicants.' },
                { icon: '👰', title: 'Gender Separation', desc: 'Flexible seating for gender-separated arrangements with partition screens available.' },
                { icon: '🎤', title: 'Sound System', desc: 'Professional audio for Quran recitation, nasheed, Islamic lectures, and nikah announcements.' },
                { icon: '📿', title: 'Islamic Décor', desc: 'Modest, elegant decorations with Arabic calligraphy, Islamic art, and culturally appropriate styling.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-black-primary rounded-xl border border-white/10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              <span className="text-rose-gold">Affordable Nikah Packages</span> - Birmingham B12
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Finding an <strong>affordable nikah venue in Birmingham</strong> that doesn't compromise on Islamic values is challenging. At LUXE VENUE, we offer budget-friendly packages starting from £1,200 including venue hire, prayer facilities, seating, sound system, and event coordination. Our <strong>halal catering packages</strong> range from £15-35 per person, making a complete nikah ceremony for 70 guests achievable under £3,500.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We serve Muslim families from across the <strong>West Midlands</strong> including <strong>Walsall's Muslim community (20 minutes), Dudley's Islamic population (25 minutes), Wolverhampton mosques area (30 minutes), Smethwick (15 minutes), West Bromwich (18 minutes),</strong> and <strong>Coventry Muslim district (35 minutes)</strong>. Our central Birmingham location makes us the most accessible nikah venue for families traveling from different areas.
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
            <h2 className="text-3xl font-bold text-center mb-12">Related Islamic Event Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/wedding-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Muslim Weddings</h3>
                <p className="text-gray-400">Complete Islamic wedding venue services</p>
              </Link>
              <Link href="/mehndi-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Mehndi Night</h3>
                <p className="text-gray-400">Traditional pre-wedding celebrations</p>
              </Link>
              <Link href="/catering" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Halal Catering</h3>
                <p className="text-gray-400">100% halal certified Pakistani & Indian cuisine</p>
              </Link>
              <Link href="/venue-hire-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Islamic Events</h3>
                <p className="text-gray-400">Eid celebrations, fundraisers, lectures</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Book Your <span className="text-rose-gold">Nikah Ceremony</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Visit Birmingham's most trusted Islamic wedding venue - LUXE VENUE Sparkbrook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/venue-hire-birmingham" className="px-10 py-5 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all text-lg">
              Book Nikah Viewing
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
