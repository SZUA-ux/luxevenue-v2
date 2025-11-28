import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateLocalBusinessSchema, generateEventVenueSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/seo'

export const metadata: Metadata = {
  title: 'Baby Shower Venue Birmingham | Gender Reveal & Maternity Celebration | LUXE VENUE',
  description: 'Beautiful baby shower venue in Birmingham B12. Perfect for baby showers, gender reveals, maternity parties. Elegant décor, halal catering, intimate space. Book your baby celebration at LUXE VENUE.',
  keywords: 'baby shower venue birmingham, gender reveal venue, baby party venue birmingham, maternity celebration venue, baby shower hall, gender reveal party birmingham, baby celebration venue, pregnancy party venue',
  openGraph: {
    title: 'Baby Shower Venue Birmingham | Gender Reveal Parties | LUXE VENUE',
    description: 'Birmingham\'s premier baby shower venue. Beautiful décor themes, halal catering, gender reveal setups. Perfect for intimate celebrations.',
    url: 'https://luxevenue.co.uk/baby-shower-venue-birmingham',
    siteName: 'LUXE VENUE',
    images: [{ url: '/images/baby-shower-venue-birmingham.jpg', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://luxevenue.co.uk/baby-shower-venue-birmingham' },
  robots: { index: true, follow: true },
}

const faqs = [
  { question: 'Is LUXE VENUE suitable for baby showers in Birmingham?', answer: 'Absolutely! LUXE VENUE is one of Birmingham\'s most popular baby shower venues, perfect for intimate maternity celebrations. Our elegant 70-guest capacity space provides the ideal setting for baby showers, gender reveal parties, and pregnancy celebrations. Located in Sparkbrook B12, we serve expectant families from across Birmingham, Solihull, Hall Green, Moseley, Kings Heath, and Acocks Green.' },
  { question: 'Do you host gender reveal parties?', answer: 'Yes! We specialize in exciting gender reveal parties with customizable setups including balloon pop boxes, confetti cannons, smoke bombs (outdoor area), cake cutting reveals, and scratch card reveals. Our team can help coordinate the surprise element, ensuring only designated people know the gender before the big reveal moment.' },
  { question: 'What baby shower décor themes are available?', answer: 'We offer stunning baby shower décor packages including popular themes: neutral boho (pampas grass, earth tones), pink princess (floral, butterfly, unicorn), blue prince (teddy bears, stars, clouds), jungle safari, woodland animals, rainbow baby, twinkle twinkle little star, and elegant gold/silver setups. All décor is customizable to match your vision.' },
  { question: 'Is the baby shower catering halal?', answer: 'Yes, all our baby shower catering is 100% halal certified. Popular menu options include elegant finger sandwiches, fresh fruit platters, vegetable crudités with dips, samosas and spring rolls, cupcakes and pastries, mocktails and refreshing drinks, and stunning dessert tables. We can create custom menus matching your cultural preferences.' },
  { question: 'How much does a baby shower cost at LUXE VENUE?', answer: 'Baby shower packages start from £500 for venue hire including 3-hour booking, tables, chairs, and basic setup. Décor packages range from £200-600 depending on theme complexity. Catering costs £10-20 per person. A complete baby shower for 40 guests typically costs £1,200-2,000 including venue, décor, and catering.' },
  { question: 'Can we have ladies-only baby showers?', answer: 'Absolutely! Many Muslim and South Asian families prefer ladies-only baby showers. We provide complete privacy with private entrance, female-only service staff options, curtained windows, and secure venue access. This makes LUXE VENUE perfect for traditional Pakistani, Indian, and Bangladeshi baby showers where ladies prefer women-only celebrations.' },
  { question: 'What time slots are available for baby showers?', answer: 'Popular baby shower time slots include afternoon tea parties (2pm-5pm), evening celebrations (6pm-9pm), and weekend brunches (11am-2pm). We offer flexible timing for weekdays and weekends. Most Birmingham families choose afternoon slots perfect for daytime celebrations with natural lighting for photos.' },
  { question: 'Can we bring our own baby shower games and activities?', answer: 'Yes! You\'re welcome to organize baby shower games like baby bingo, guess the baby food, diaper raffle, advice cards, baby predictions, and photo booth props. We provide tables for game stations, display areas for gifts, and comfortable seating arrangements. Our sound system can play background music during activities.' },
  { question: 'Do you accommodate cultural baby shower traditions?', answer: 'Absolutely! We understand and respect various cultural baby celebration traditions including Pakistani Godh Bharai ceremonies, Indian Baby Shower rituals (Seemantham, Valaikaapu), Bangladeshi maternity blessings, Arab baby celebrations, and African naming ceremonies. We can incorporate cultural customs, traditional foods, and religious blessings into your celebration.' },
  { question: 'Is parking available for baby shower guests?', answer: 'Yes, free on-street parking is available on Leopold Street and surrounding roads in Sparkbrook. The venue is also accessible via public transport - well-connected by buses from Birmingham city centre, Hall Green, Acocks Green, and Solihull. Many expectant mothers appreciate the easy accessibility with no stairs or difficult access.' }
]

export default function BabyShowerVenueBirminghamPage() {
  const schemas = {
    local: generateLocalBusinessSchema(),
    venue: generateEventVenueSchema(),
    faq: generateFAQSchema(faqs),
    breadcrumb: generateBreadcrumbSchema([{ name: 'Home', url: 'https://luxevenue.co.uk' }, { name: 'Baby Shower Venue Birmingham', url: 'https://luxevenue.co.uk/baby-shower-venue-birmingham' }])
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
            <span className="text-white font-semibold">Baby Shower Venue Birmingham</span>
          </nav>
        </section>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Birmingham's Most Beautiful <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">Baby Shower Venue</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Celebrate your bundle of joy with elegant décor, gender reveals & halal catering in Sparkbrook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/venue-hire-birmingham" className="px-8 py-4 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all">
                Book Baby Shower
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
                Searching for the perfect <strong>baby shower venue in Birmingham</strong>? LUXE VENUE is the West Midlands' most beloved <strong>maternity celebration venue</strong>, specializing in beautiful baby showers, exciting gender reveal parties, and intimate pregnancy celebrations. Located at <strong>86 Leopold Street, Birmingham B12 0UD</strong> in the family-oriented <strong>Sparkbrook neighborhood</strong>, our venue is close to <strong>Birmingham Women's Hospital, Heartlands Hospital maternity units,</strong> and family-friendly areas like <strong>Hall Green, Moseley, Kings Heath,</strong> and <strong>Acocks Green</strong>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As Birmingham's premier <strong>baby celebration venue</strong>, we understand that welcoming a new baby is one of life's most precious moments. Whether you're planning a traditional <strong>baby shower in Birmingham</strong>, an exciting <strong>gender reveal party</strong>, a cultural godh bharai ceremony, or a blessing celebration, LUXE VENUE provides the elegant space, beautiful décor, and thoughtful amenities that make your maternity celebration truly memorable.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Why Expectant Families Choose LUXE VENUE for <span className="text-rose-gold">Baby Showers</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                When searching for <strong>baby shower venues in Birmingham</strong>, expectant mothers need a venue that's comfortable, accessible, and beautiful. LUXE VENUE has earned the trust of families across <strong>Birmingham, Hall Green, Moseley, Kings Heath, Acocks Green, Balsall Heath, Sparkhill, Tyseley, Small Heath, Solihull,</strong> and <strong>surrounding areas</strong>. Our ground-floor venue with easy access is particularly appreciated by pregnant mothers who want to avoid stairs and difficult entry.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our <strong>Sparkbrook location (B12 postcode)</strong> is perfectly positioned for family celebrations. The area is close to <strong>Birmingham Women's Hospital</strong> (10 minutes), <strong>Heartlands Hospital maternity department</strong> (12 minutes), and numerous <strong>family health centers</strong>. Your guests traveling from <strong>Hall Green</strong> (8 minutes drive), <strong>Moseley</strong> (10 minutes), <strong>Kings Heath</strong> (12 minutes), or <strong>Solihull</strong> (15 minutes) will find our venue conveniently accessible with ample free parking.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                What makes LUXE VENUE the best <strong>gender reveal venue in Birmingham</strong> is our expertise in creating memorable reveal moments. We've hosted hundreds of <strong>Pakistani baby showers with traditional Godh Bharai customs, Indian maternity celebrations with Seemantham rituals, Bangladeshi baby blessings,</strong> and <strong>modern gender reveal parties</strong> with creative surprise elements that delight guests and create viral-worthy moments.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Stunning <span className="text-rose-gold">Baby Shower Décor Themes</span> & Setups
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: '👶', title: 'Neutral Boho Baby', desc: 'Trendy neutral tones with pampas grass, macramé, earth colors, wooden accents perfect for gender-neutral celebrations.' },
                { icon: '🎀', title: 'Pink Princess Theme', desc: 'Elegant pink décor with floral arrangements, butterfly accents, rose gold balloons, perfect for baby girl showers.' },
                { icon: '💙', title: 'Blue Prince Theme', desc: 'Charming blue setup with teddy bears, star decorations, clouds, perfect for baby boy celebrations.' },
                { icon: '🌈', title: 'Rainbow Baby Shower', desc: 'Colorful rainbow theme celebrating rainbow babies with hope, joy, and vibrant decorations.' },
                { icon: '✨', title: 'Twinkle Little Star', desc: 'Magical star and moon theme with fairy lights, celestial decorations, gold accents, dreamy atmosphere.' },
                { icon: '🎁', title: 'Gender Reveal Setup', desc: 'Custom gender reveal décor with surprise boxes, pink/blue balloons, confetti stations, reveal props.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-black-primary rounded-xl border border-white/10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Exciting <span className="text-rose-gold">Gender Reveal Ideas</span> at LUXE VENUE
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Planning a <strong>gender reveal party in Birmingham</strong>? LUXE VENUE offers creative reveal options including: <strong>Balloon pop box</strong> filled with pink or blue balloons that burst out when opened, <strong>confetti cannons</strong> releasing colored confetti for dramatic reveals, <strong>smoke bombs</strong> in our outdoor area creating Instagram-worthy photos, <strong>gender reveal cakes</strong> with colored filling inside, <strong>piñata reveals</strong> filled with colored candies, and <strong>scratch card reveals</strong> for intimate group sharing.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our team can coordinate with your hospital or midwife to keep the gender secret, prepare the reveal setup, and ensure the surprise moment is perfectly timed and captured. Many Birmingham families love our <strong>gender reveal party packages</strong> that include venue hire, themed décor, reveal props, and professional photo opportunities.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Delicious <span className="text-rose-gold">Baby Shower Catering</span> & Refreshments
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Every beautiful <strong>baby shower in Birmingham</strong> deserves delicious food! Our 100% halal catering includes pregnancy-safe, expectant mother-friendly menus. Popular <strong>baby shower food options</strong> include elegant finger sandwiches (cucumber, egg mayo, chicken), fresh seasonal fruit platters, vegetable crudités with hummus, cheese and crackers, samosas and vegetable spring rolls, mini quiches and pastries, cupcakes and dessert bars, mocktails and refreshing drinks (no caffeine options), and stunning dessert tables with themed treats.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For <strong>cultural baby showers</strong>, we offer traditional foods for Pakistani Godh Bharai (mithai, fruit chaat, samosas), Indian baby showers (ladoo, coconut sweets, savory snacks), and Bangladeshi celebrations (pitha, mishti). All food is freshly prepared, beautifully presented, and accommodates dietary restrictions including vegetarian, vegan, and allergy-friendly options.
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
            <h2 className="text-3xl font-bold text-center mb-12">Related Family Celebration Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/birthday-party-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Birthday Parties</h3>
                <p className="text-gray-400">Kids & adult birthday celebrations</p>
              </Link>
              <Link href="/wedding-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Weddings</h3>
                <p className="text-gray-400">Intimate wedding venue & celebrations</p>
              </Link>
              <Link href="/catering" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Halal Catering</h3>
                <p className="text-gray-400">Pregnancy-safe halal food options</p>
              </Link>
              <Link href="/venue-hire-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Family Events</h3>
                <p className="text-gray-400">Private family gatherings & parties</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Book Your <span className="text-rose-gold">Baby Shower</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Create beautiful baby memories at Birmingham's favorite maternity celebration venue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/venue-hire-birmingham" className="px-10 py-5 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all text-lg">
              Book Baby Shower
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
