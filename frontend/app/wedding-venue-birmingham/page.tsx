import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import { generateLocalBusinessSchema, generateEventVenueSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/seo'

export const metadata: Metadata = {
  title: 'Wedding Venue Birmingham | Small & Intimate Weddings up to 70 Guests | LUXE VENUE',
  description: 'Premium wedding venue in Birmingham city centre (B12 0UD). Perfect for intimate weddings, nikah ceremonies & receptions. Halal catering, elegant décor, 70 guest capacity. Free parking. Book viewing today.',
  keywords: 'wedding venue birmingham, small wedding venue birmingham, intimate wedding venue birmingham, wedding hall birmingham, affordable wedding venue, nikah venue birmingham, muslim wedding venue, halal wedding venue, asian wedding venue, birmingham city centre wedding, wedding reception venue, budget wedding venue, beautiful wedding venue birmingham, unique wedding venue',
  openGraph: {
    title: 'Wedding Venue Birmingham | Small Weddings & Nikah Ceremonies | LUXE VENUE',
    description: 'Birmingham\'s premier intimate wedding venue. 70 guest capacity, halal catering, elegant décor, professional A/V. Located at 86 Leopold Street B12 0UD. Book your free viewing.',
    url: 'https://luxevenue.co.uk/wedding-venue-birmingham',
    siteName: 'LUXE VENUE',
    images: [{
      url: '/images/wedding-venue-birmingham.jpg',
      width: 1200,
      height: 630,
      alt: 'Elegant wedding venue Birmingham - LUXE VENUE intimate celebration space'
    }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Venue Birmingham | LUXE VENUE',
    description: 'Beautiful intimate wedding venue in Birmingham for up to 70 guests. Halal catering, elegant space.',
    images: ['/images/wedding-venue-birmingham.jpg'],
  },
  alternates: {
    canonical: 'https://luxevenue.co.uk/wedding-venue-birmingham'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const faqs = [
  {
    question: 'What is the capacity for weddings at LUXE VENUE Birmingham?',
    answer: 'Our Birmingham wedding venue comfortably accommodates up to 70 guests, making it the perfect small wedding venue in Birmingham for intimate ceremonies, nikah celebrations, and wedding receptions. The 8m x 9m space creates a warm, personal atmosphere.'
  },
  {
    question: 'Do you provide halal catering for Muslim weddings and nikah ceremonies?',
    answer: 'Yes, we specialize in 100% halal certified catering for Muslim weddings in Birmingham. Our menu includes authentic Pakistani, Indian, Middle Eastern, and fusion cuisine. All meat is halal, and we can accommodate dietary requirements including vegetarian and vegan options.'
  },
  {
    question: 'Is LUXE VENUE suitable for nikah ceremonies in Birmingham?',
    answer: 'Absolutely! LUXE VENUE is one of Birmingham\'s most popular nikah venues. We provide prayer facilities, wudu areas, Quran stands, gender-separated seating arrangements, and a respectful alcohol-free environment. Our team understands Islamic wedding traditions and ensures your nikah ceremony is conducted with dignity and respect.'
  },
  {
    question: 'What makes LUXE VENUE different from other wedding venues in Birmingham?',
    answer: 'Unlike large impersonal venues, LUXE VENUE specializes in intimate weddings in Birmingham. We offer exclusive use of the venue, premium halal catering included, professional sound and lighting systems, elegant décor setup, dedicated event coordinator, and affordable transparent pricing - all in a beautiful Birmingham city centre location with easy access from Solihull, Dudley, Walsall, and Wolverhampton.'
  },
  {
    question: 'How much does it cost to book LUXE VENUE for a wedding?',
    answer: 'Our affordable wedding venue packages in Birmingham start from £1,500 and include venue hire, tables, chairs, sound system, lighting, and event coordination. Catering packages range from £15-35 per person depending on your menu selection. We offer flexible payment plans and transparent pricing with no hidden fees.'
  },
  {
    question: 'How far in advance should I book your Birmingham wedding venue?',
    answer: 'We recommend booking 3-6 months in advance for weekend weddings, especially for popular dates. However, we can accommodate short-notice bookings for weekday weddings subject to availability. Contact us to check availability for your preferred date.'
  },
  {
    question: 'What areas does LUXE VENUE serve in the West Midlands?',
    answer: 'While located at 86 Leopold Street, Birmingham B12 0UD, we serve couples from across the West Midlands including Solihull, Dudley, Walsall, Wolverhampton, West Bromwich, Sutton Coldfield, Coventry, Sandwell, and surrounding areas. Our central Birmingham location is easily accessible from all West Midlands towns.'
  },
  {
    question: 'Can we bring our own decorations to the wedding venue?',
    answer: 'Yes! We welcome personal touches. You can bring your own decorations, or we can arrange professional décor services through our trusted partners. We offer décor packages for Asian weddings, modern minimalist setups, traditional floral arrangements, and custom themed decorations.'
  },
  {
    question: 'Is parking available at LUXE VENUE Birmingham?',
    answer: 'Yes, free on-street parking is available on Leopold Street and surrounding roads in the Sparkbrook area. The venue is also easily accessible via public transport - just 10 minutes from Birmingham New Street Station and well-connected by bus routes.'
  },
  {
    question: 'Do you host Asian and Pakistani weddings in Birmingham?',
    answer: 'Absolutely! LUXE VENUE is a popular choice for Asian weddings in Birmingham, including Pakistani, Indian, Bangladeshi, and Middle Eastern wedding celebrations. We understand cultural traditions, provide authentic halal cuisine, accommodate traditional music and dance, and can arrange mehndi night celebrations.'
  }
]

export default function WeddingVenueBirminghamPage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const venueSchema = generateEventVenueSchema()
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://luxevenue.co.uk' },
    { name: 'Wedding Venue Birmingham', url: 'https://luxevenue.co.uk/wedding-venue-birmingham' }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PublicNav />
      
      <main className="min-h-screen bg-black-primary text-white">
        {/* Breadcrumbs */}
        <section className="pt-24 py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <nav className="flex text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold">Wedding Venue Birmingham</span>
          </nav>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Birmingham's Premier <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">Wedding Venue</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intimate celebrations for up to 70 guests in the heart of Birmingham city centre
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/venue-hire-birmingham"
                className="px-8 py-4 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg hover:shadow-rose-gold/50 transition-all"
              >
                Book Your Viewing
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </section>

        {/* SEO-Rich Introduction Content - 1200+ words */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Looking for the perfect <strong>wedding venue in Birmingham</strong>? LUXE VENUE is Birmingham city centre's most sought-after <strong>intimate wedding venue</strong>, specializing in small weddings, nikah ceremonies, and multicultural celebrations. Located at <strong>86 Leopold Street, Birmingham B12 0UD</strong>, our elegant 8m x 9m venue provides an exclusive, sophisticated space for up to 70 guests.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As a dedicated <strong>small wedding venue in Birmingham</strong>, we understand that intimate celebrations are about quality, not quantity. Whether you're planning a <strong>nikah ceremony</strong>, an <strong>Asian wedding in Birmingham</strong>, a traditional reception, or a modern micro-wedding, LUXE VENUE offers the perfect blend of elegance, cultural sensitivity, and affordability that larger wedding halls simply cannot match.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Why Choose LUXE VENUE as Your <span className="text-rose-gold">Birmingham Wedding Venue</span>?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                When searching for <strong>wedding venues in Birmingham</strong>, couples face an overwhelming choice. Many venues are too large, too expensive, or lack the personal touch that makes your special day truly memorable. LUXE VENUE fills the gap as Birmingham's premier <strong>affordable wedding venue</strong> that doesn't compromise on quality, service, or atmosphere.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our <strong>Birmingham city centre location</strong> in Sparkbrook (B12 0UD) provides excellent accessibility for guests traveling from across the West Midlands, including <strong>Solihull, Dudley, Walsall, Wolverhampton, West Bromwich, Sutton Coldfield, and Coventry</strong>. With free street parking, excellent public transport links (10 minutes from Birmingham New Street Station), and proximity to multiple hotels, your guests will find LUXE VENUE convenient and easy to reach.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                What sets us apart as a <strong>wedding hall in Birmingham</strong> is our commitment to inclusive, culturally sensitive celebrations. As a <strong>halal wedding venue</strong> and popular <strong>Muslim wedding venue in Birmingham</strong>, we specialize in Islamic wedding traditions, nikah ceremonies, and Asian wedding celebrations. Our venue is 100% alcohol-free, provides prayer facilities with wudu areas, and our catering is exclusively halal-certified - making us the natural choice for <strong>Pakistani weddings, Indian weddings, Bangladeshi weddings, and Middle Eastern wedding celebrations in Birmingham</strong>.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Complete <span className="text-rose-gold">Wedding Venue Services</span> in Birmingham
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Unlike typical <strong>Birmingham wedding venues</strong> that charge separately for every service, LUXE VENUE provides a comprehensive, all-inclusive wedding package. Your <strong>wedding venue hire</strong> includes premium sound system with wireless microphones, professional LED mood lighting, elegant tables and seating for 70 guests, climate control (air conditioning and heating), stage area for ceremonies and speeches, private changing rooms for bride and groom, full kitchen facilities, and most importantly - a dedicated event coordinator worth £400, included completely free.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For couples planning an <strong>intimate wedding in Birmingham</strong> with 30-70 guests, our venue size is ideal. Unlike oversized wedding halls where your small gathering can feel lost in empty space, LUXE VENUE creates a warm, cozy atmosphere where every guest feels connected to your celebration. This makes us the perfect <strong>small wedding venue in Birmingham</strong> for couples who prioritize meaningful connections over massive guest lists.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our <strong>halal catering services</strong> are second to none in Birmingham. Working with award-winning halal-certified chefs, we create authentic Pakistani cuisine, traditional Indian dishes, aromatic Middle Eastern flavors, and contemporary fusion menus. All meat is 100% halal, and we accommodate vegetarian, vegan, and specific dietary requirements. From elegant sit-down dinners to traditional buffet spreads, our catering elevates your <strong>wedding reception in Birmingham</strong> to unforgettable culinary experiences.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              <span className="text-rose-gold">Affordable Wedding Venue Pricing</span> in Birmingham
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                One of the biggest challenges when searching for <strong>cheap wedding venues in Birmingham</strong> is finding quality that matches your budget. At LUXE VENUE, we believe every couple deserves a beautiful wedding without financial stress. Our transparent pricing structure has no hidden fees, no surprise charges, and no pressure to spend beyond your means.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our <strong>budget wedding venue packages</strong> start from just £1,500 for venue hire, which includes exclusive use of the space, tables, chairs, professional sound system, LED lighting, stage area, changing rooms, and dedicated event coordination. Compared to larger <strong>Birmingham wedding venues</strong> charging £3,000-5,000 for venue hire alone, LUXE VENUE delivers exceptional value. Our catering packages range from £15-35 per person depending on menu selection, making a complete wedding for 70 guests achievable under £4,000 - a fraction of what traditional wedding venues cost.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For couples planning <strong>small weddings under £2,000</strong>, we offer weekday packages and off-peak discounts. We also provide flexible payment plans, allowing you to spread costs over several months. This makes LUXE VENUE the most <strong>affordable wedding venue in Birmingham</strong> without compromising on quality, service, or atmosphere.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              <span className="text-rose-gold">Birmingham B12 Location</span> - Accessible Across West Midlands
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                LUXE VENUE's prime <strong>Birmingham city centre location at 86 Leopold Street, B12 0UD</strong> in the vibrant Sparkbrook neighborhood provides unmatched accessibility for wedding guests across the West Midlands. Whether your guests are traveling from nearby <strong>Solihull</strong> (just 15 minutes drive), <strong>Dudley</strong> (25 minutes), <strong>Walsall</strong> (20 minutes), or <strong>Wolverhampton</strong> (30 minutes), our central Birmingham location is convenient for everyone.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Sparkbrook area is known for its diverse, multicultural community and excellent amenities. Within walking distance, you'll find numerous <strong>mosques</strong> for prayer (including Birmingham Central Mosque), multiple hotels for out-of-town guests (Holiday Inn, Premier Inn, Ibis), authentic <strong>halal restaurants</strong>, and traditional Asian sweet shops perfect for wedding favors. For couples seeking <strong>Asian wedding venues in Birmingham</strong>, our Sparkbrook location is ideal, surrounded by services that understand and cater to South Asian wedding traditions.
              </p>
            </div>
          </div>
        </section>

        {/* Wedding Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-6">
              Our <span className="text-rose-gold">Wedding Venue</span> Gallery
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              See LUXE VENUE transformed for beautiful weddings and nikah ceremonies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { src: '/images/gallery/luxe-venue-backdrop.png', alt: 'Elegant Wedding Backdrop Setup', title: 'Wedding Backdrop' },
                { src: '/images/gallery/luxe-venue-nikah-setup.png', alt: 'Traditional Nikah Ceremony', title: 'Nikah Ceremony' },
                { src: '/images/gallery/luxe-venue-elegant-decor.png', alt: 'Premium Wedding Decor', title: 'Crystal Chandeliers' },
                { src: '/images/gallery/luxe-venue-white-gold-setup.png', alt: 'White & Gold Theme', title: 'White & Gold Theme' },
                { src: '/images/gallery/luxe-venue-glass-led-walkway.png', alt: 'Glass LED Walkway', title: 'LED Walkway' },
                { src: '/images/gallery/luxe-venue-golden-pillars.png', alt: 'Golden Pillars Decor', title: 'Golden Pillars' },
              ].map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-rose-gold/50 transition-all">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-lg">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link 
                href="/gallery" 
                className="inline-block px-10 py-4 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Frequently Asked <span className="text-rose-gold">Questions</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="p-6 bg-surface-dark rounded-xl border border-white/10 hover:border-rose-gold/30 transition-all">
                <summary className="font-bold text-lg cursor-pointer hover:text-rose-gold transition-colors">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/nikah-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Nikah Venue Birmingham</h3>
                <p className="text-gray-400">Islamic wedding ceremonies with prayer facilities</p>
              </Link>
              <Link href="/catering" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Wedding Catering</h3>
                <p className="text-gray-400">Premium halal catering for your special day</p>
              </Link>
              <Link href="/mehndi-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Mehndi Events</h3>
                <p className="text-gray-400">Traditional mehndi night celebrations</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Book Your <span className="text-rose-gold">Dream Wedding</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Visit LUXE VENUE today and see why we're Birmingham's top choice for intimate weddings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/venue-hire-birmingham"
              className="px-10 py-5 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg hover:shadow-rose-gold/50 transition-all text-lg"
            >
              Book Your Free Viewing
            </Link>
            <Link
              href="tel:+447391222884"
              className="px-10 py-5 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all text-lg"
            >
              Call: 07391 222884
            </Link>
          </div>
        </section>
      </main>

      <PublicFooter />
    </>
  )
}
