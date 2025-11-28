import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import { generateLocalBusinessSchema, generateEventVenueSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/seo'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Affordable Wedding Venue Birmingham from £2,500 | 20-70 Guests | LUXE VENUE',
  description: 'Budget-friendly wedding venue in Birmingham from £2,500. Intimate weddings 20-70 guests, halal Pakistani & Indian catering included, city centre location. All-inclusive packages, décor, LED backdrop, free parking. ★★★★★ Rated.',
  keywords: 'affordable wedding venues birmingham, cheap wedding venue birmingham, budget wedding venue, small wedding venue birmingham, wedding venue under 3000, intimate wedding venue, all inclusive wedding packages birmingham, halal wedding catering, pakistani wedding birmingham, indian wedding venue, muslim wedding venue, nikah venue affordable, wedding venue city centre, luxury wedding affordable',
  openGraph: {
    title: 'Affordable Wedding Venue Birmingham | From £2,500 | 20-70 Guests',
    description: 'Beautiful budget-friendly wedding venue in Birmingham. All-inclusive packages from £2,500 with halal catering, décor & professional AV. Perfect for intimate Pakistani & Indian weddings.',
    url: 'https://luxevenue.co.uk/affordable-wedding-venue-birmingham',
    siteName: 'LUXE VENUE',
    images: [{
      url: '/images/affordable-wedding-venue-birmingham.jpg',
      width: 1200,
      height: 630,
      alt: 'Affordable wedding venue Birmingham - elegant intimate space from £2,500'
    }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Wedding Venue Birmingham | From £2,500',
    description: 'Budget-friendly intimate wedding venue with halal catering. Perfect for 20-70 guests.',
    images: ['/images/affordable-wedding-venue-birmingham.jpg'],
  },
  alternates: {
    canonical: 'https://luxevenue.co.uk/affordable-wedding-venue-birmingham'
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
    question: 'How much does an affordable wedding venue in Birmingham actually cost?',
    answer: 'At LUXE VENUE, our affordable wedding packages start from just £2,500 for intimate celebrations. This includes venue hire, basic décor, tables, chairs, professional sound system, LED backdrop, and event coordination. When you add our halal Pakistani or Indian catering (from £18 per person), a complete wedding for 50 guests costs around £3,400 - making it one of the most budget-friendly wedding venues in Birmingham city centre.'
  },
  {
    question: 'What\'s included in the £2,500 affordable wedding package at LUXE VENUE?',
    answer: 'Our all-inclusive £2,500 package includes: exclusive venue hire (8m x 9m space), elegant décor setup, round tables with white covers, Chiavari chairs with sashes, professional PA sound system, LED backdrop with lighting, stage for nikah ceremony or cake cutting, event coordinator, free on-street parking, and 6-hour venue access. You can add halal catering, photography, or enhanced décor as optional extras.'
  },
  {
    question: 'Can I find an affordable wedding venue in Birmingham with great reviews?',
    answer: 'Yes! LUXE VENUE is rated ★★★★★ by couples who have celebrated their special day with us. Our reviews highlight the intimate atmosphere, authentic halal Pakistani and Indian catering, attentive female-only service team option, and exceptional value for money. We serve Birmingham, Solihull, Dudley, Wolverhampton, and Walsall areas with transparent, affordable pricing and no hidden fees.'
  },
  {
    question: 'What\'s the best budget-friendly wedding venue near Birmingham city centre?',
    answer: 'LUXE VENUE is located just 5 minutes from Birmingham city centre and 10 minutes from the Bullring shopping centre at 86 Leopold Street, B12 0UD. This prime Sparkbrook location offers excellent transport links, free street parking, and easy access from New Street Station - perfect for guests travelling from across the West Midlands. Our affordable packages and central location make us the top choice for budget-conscious couples.'
  },
  {
    question: 'How can I book an affordable wedding venue in Birmingham for 20-50 guests?',
    answer: 'Small weddings of 20-50 guests are our specialty at LUXE VENUE! Our intimate 72m² space creates a warm, personal atmosphere without the high costs of larger venues. Simply contact us via phone (+44 7391 222884) or email (info@luxevenue.co.uk) to arrange a free venue viewing. We offer flexible booking dates, including weekday discounts, and require just a 25% deposit to secure your date.'
  },
  {
    question: 'Do affordable wedding venues in Birmingham offer halal catering?',
    answer: 'Absolutely! LUXE VENUE specializes in 100% halal certified Pakistani and Indian wedding catering. Our authentic menu includes biryani, karahi, seekh kebabs, samosas, pakoras, and traditional desserts like gulab jamun and ras malai. Prices start from £18 per person for a full buffet. We also accommodate vegetarian, vegan, and specific dietary requirements - perfect for Muslim nikah ceremonies and Asian wedding receptions.'
  },
  {
    question: 'Are there affordable wedding venues in Birmingham with all-inclusive packages?',
    answer: 'Yes! Our all-inclusive wedding packages combine venue hire, décor, catering, and coordination services. For example: a complete wedding for 60 guests including venue, décor, halal 3-course meal, and professional AV costs approximately £3,800 - that\'s just £63 per guest. This transparent pricing with no surprise fees makes LUXE VENUE the best value all-inclusive wedding venue in Birmingham.'
  },
  {
    question: 'Can I find affordable wedding venues in Birmingham with accommodation for guests?',
    answer: 'While LUXE VENUE doesn\'t offer on-site accommodation, our Birmingham city centre location (B12 0UD) is within walking distance of dozens of hotels ranging from budget Premier Inn to luxury Hyatt Regency. We can recommend nearby accommodations for your out-of-town guests, many offering group booking discounts. The central location also means excellent public transport access for local guests.'
  },
  {
    question: 'Where can I book cheap wedding venue hire in Birmingham with catering included?',
    answer: 'LUXE VENUE offers the best combination of affordable venue hire and premium halal catering in Birmingham. Our bundled packages (venue + food) start from £3,400 for 50 guests. Unlike other venues charging separate fees for venue, catering, décor, and equipment, our transparent all-inclusive pricing helps couples stay within budget. We also offer payment plans to spread the cost over 3-6 months.'
  },
  {
    question: 'What makes LUXE VENUE the most affordable wedding venue in Birmingham for small weddings?',
    answer: 'We specialise exclusively in intimate weddings of 20-70 guests, which keeps our overheads low and savings passed to you. Our competitive advantages include: no minimum spend requirements, transparent pricing with itemized quotes, flexible weekday/weekend rates, included décor and equipment (no rental fees), authentic in-house halal catering (no external caterer markup), free parking, and experienced event team. Plus our Birmingham city centre location eliminates expensive countryside venue travel costs for your guests.'
  }
]

export default function AffordableWeddingVenueBirminghamPage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const venueSchema = generateEventVenueSchema()
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://luxevenue.co.uk' },
    { name: 'Affordable Wedding Venue Birmingham', url: 'https://luxevenue.co.uk/affordable-wedding-venue-birmingham' }
  ])

  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Affordable Wedding Venue Package',
    description: 'All-inclusive intimate wedding venue package in Birmingham for 20-70 guests',
    price: '2500',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    url: 'https://luxevenue.co.uk/affordable-wedding-venue-birmingham',
    seller: {
      '@type': 'Organization',
      name: 'LUXE VENUE LTD'
    }
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Affordable Wedding Venue',
    provider: {
      '@type': 'Organization',
      name: 'LUXE VENUE LTD',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '86 Leopold Street',
        addressLocality: 'Birmingham',
        postalCode: 'B12 0UD',
        addressCountry: 'GB'
      }
    },
    areaServed: ['Birmingham', 'Solihull', 'Dudley', 'Wolverhampton', 'Walsall'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Wedding Venue Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Venue Only Package',
            description: 'Affordable venue hire with décor and equipment'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Venue + Catering Package',
            description: 'All-inclusive wedding with halal Pakistani and Indian catering'
          }
        }
      ]
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <PublicNav />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-amber-500/20 to-pink-500/20 rounded-full border border-amber-500/30">
                <span className="text-amber-300 font-semibold text-sm">★★★★★ Rated by Couples | From £2,500</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-200 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Affordable Wedding Venue
                </span>
                <br />
                <span className="text-white">Birmingham</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Beautiful intimate weddings for <strong className="text-white">20-70 guests</strong> from just <strong className="text-amber-300">£2,500</strong>. All-inclusive packages with halal Pakistani & Indian catering, elegant décor, and professional AV. Located 5 minutes from Birmingham city centre.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a href="tel:+447391222884" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all">
                  Call Now: +44 7391 222884
                </a>
                <a href="mailto:info@luxevenue.co.uk" className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Affordable Section */}
        <section className="py-20 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">
                Why LUXE VENUE is Birmingham's Best Value Wedding Choice
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'From £2,500 All-Inclusive',
                  desc: 'Our affordable wedding packages include venue hire, elegant décor, tables, chairs, professional sound & lighting, LED backdrop, stage, and dedicated event coordinator. No hidden fees - transparent pricing from day one.',
                  icon: '💰'
                },
                {
                  title: '20-70 Guest Capacity',
                  desc: 'Perfect for intimate weddings, nikah ceremonies, mehndi nights, and small receptions. Our boutique 72m² space creates a warm, romantic atmosphere without the wasted cost of oversized venues.',
                  icon: '👥'
                },
                {
                  title: 'Halal Pakistani & Indian Catering',
                  desc: '100% halal certified authentic cuisine from £18 per person. Biryani, karahi, seekh kebabs, samosas, and traditional desserts. Vegetarian, vegan, and dietary options available for all budgets.',
                  icon: '🍛'
                },
                {
                  title: 'Birmingham City Centre Location',
                  desc: 'Just 5 minutes from city centre, 10 minutes from Bullring. Free on-street parking, excellent public transport links. Easy access from Solihull, Dudley, Wolverhampton, and Walsall.',
                  icon: '📍'
                },
                {
                  title: 'Professional AV & LED Backdrop',
                  desc: 'Included in every package: professional PA sound system, wireless microphones, LED backdrop with colour-changing lights, stage for nikah or cake cutting, and ambient lighting throughout.',
                  icon: '🎤'
                },
                {
                  title: 'Female-Only Service Team',
                  desc: 'We offer an experienced female-only event team for Muslim weddings and nikah ceremonies. Gender-separated seating arrangements, prayer facilities, and respectful alcohol-free environment.',
                  icon: '👰'
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl border border-purple-500/30 hover:border-pink-500/50 transition-all">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-12 text-lg">
              Looking for affordable wedding options in nearby areas? Check out our{' '}
              <Link href="/affordable-venue-hire-dudley" className="text-pink-400 hover:text-pink-300 underline">
                Dudley affordable venue
              </Link>
              ,{' '}
              <Link href="/affordable-venue-hire-wolverhampton" className="text-pink-400 hover:text-pink-300 underline">
                Wolverhampton budget venue
              </Link>
              , or explore our{' '}
              <Link href="/wedding-venue-birmingham" className="text-pink-400 hover:text-pink-300 underline">
                main Birmingham wedding venue
              </Link>
              {' '}page for more options.
            </p>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="text-white">Affordable Wedding Packages</span>
            </h2>
            <p className="text-center text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
              Transparent, all-inclusive pricing designed for budget-conscious couples. No surprise fees, no minimum spend, no compromise on quality. Choose the package that fits your vision and budget.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Package 1 */}
              <div className="p-8 bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-2xl border-2 border-purple-500/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-black px-4 py-1 text-sm font-bold rounded-bl-lg">
                  POPULAR
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Venue Only</h3>
                <div className="text-5xl font-bold text-amber-300 mb-4">
                  £2,500
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Exclusive venue hire (6 hours)',
                    'Elegant décor setup',
                    'Tables & Chiavari chairs',
                    'Professional PA sound system',
                    'LED backdrop with lighting',
                    'Stage for ceremony',
                    'Event coordinator',
                    'Free parking'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <span className="text-green-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:info@luxevenue.co.uk" className="block text-center px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                  Book This Package
                </a>
              </div>

              {/* Package 2 */}
              <div className="p-8 bg-gradient-to-br from-amber-900/60 to-pink-900/60 rounded-2xl border-2 border-amber-500/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  BEST VALUE
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Venue + Catering</h3>
                <div className="text-5xl font-bold text-amber-300 mb-4">
                  From £3,400
                </div>
                <p className="text-gray-300 mb-4 text-sm">For 50 guests (£18/person food)</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything in Venue Only package',
                    'Plus: Halal Pakistani/Indian buffet',
                    '3-course authentic menu',
                    'Biryani, karahi, seekh kebabs',
                    'Samosas, pakoras, salads',
                    'Traditional desserts',
                    'Professional serving team',
                    'Disposable tableware included'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <span className="text-green-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:+447391222884" className="block text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full font-bold hover:shadow-xl transition-all">
                  Call for Custom Quote
                </a>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-8 text-lg">
              Need catering for a larger event? Explore our{' '}
              <Link href="/catering/pakistani-catering-birmingham" className="text-pink-400 hover:text-pink-300 underline">
                Pakistani catering services
              </Link>
              {' '}or{' '}
              <Link href="/catering/indian-catering-birmingham" className="text-pink-400 hover:text-pink-300 underline">
                Indian wedding catering
              </Link>
              {' '}options.
            </p>
          </div>
        </section>

        {/* Perfect For Small Weddings */}
        <section className="py-20 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">
                Perfect for Intimate Celebrations
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Why Small Weddings Save Money & Create Better Memories</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Planning an affordable wedding doesn't mean sacrificing quality or elegance. At LUXE VENUE, we believe intimate weddings of 20-70 guests create the most meaningful celebrations. Here's why budget-conscious couples are choosing smaller venues in Birmingham:
                </p>
                <ul className="space-y-4">
                  {[
                    { title: 'Lower Per-Guest Costs', desc: 'Smaller guest lists mean more budget per person for quality food, décor, and entertainment. A 50-guest wedding at £3,400 costs just £68 per guest for venue + full catering.' },
                    { title: 'More Personal Attention', desc: 'In our intimate 72m² space, you actually get to talk with every guest. No massive halls where half your guests never meet you.' },
                    { title: 'Better Quality Food', desc: 'Authentic halal Pakistani cuisine with freshly cooked karahi, aromatic biryani, and homemade desserts - not mass-produced banquet hall food.' },
                    { title: 'Flexible Scheduling', desc: 'Weekday weddings offer 20-30% savings. Our affordable rates make mid-week celebrations realistic for budget-focused couples.' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-pink-400 font-bold text-xl mr-3">→</span>
                      <div>
                        <strong className="text-white">{item.title}:</strong>
                        <span className="text-gray-300"> {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">Real Wedding Example</h4>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>Guests:</span>
                      <span className="font-bold">60 people</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>Venue Package:</span>
                      <span className="font-bold">£2,500</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>Halal Catering:</span>
                      <span className="font-bold">£1,080</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-2">
                      <span>Photography:</span>
                      <span className="font-bold">£400</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold pt-4">
                      <span>Total Wedding:</span>
                      <span className="text-amber-300">£3,980</span>
                    </div>
                    <p className="text-sm text-white/80 italic mt-4">
                      That's £66 per guest for a complete wedding with venue, authentic food, décor, and professional photography in Birmingham city centre!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-12 text-lg">
              Also hosting{' '}
              <Link href="/nikah-venue-birmingham" className="text-pink-400 hover:text-pink-300 underline">
                nikah ceremonies
              </Link>
              ,{' '}
              <Link href="/mehndi-venue-birmingham" className="text-pink-400 hover:text-pink-300 underline">
                mehndi nights
              </Link>
              , or{' '}
              <Link href="/baby-shower-venue-birmingham" className="text-pink-400 hover:text-pink-300 underline">
                baby showers
              </Link>
              ? Our affordable packages work for all celebrations!
            </p>
          </div>
        </section>

        {/* Location & Access */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="text-white">Prime Birmingham City Centre Location</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">86 Leopold Street, Birmingham B12 0UD</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  LUXE VENUE's affordable wedding venue is strategically located in Sparkbrook, one of Birmingham's most accessible neighbourhoods. Our city centre position means your guests save on travel time and costs, making your budget wedding even more economical for everyone.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: '🚗', title: 'Free Street Parking', desc: 'Abundant free on-street parking on Leopold Street and surrounding roads. No expensive car parks needed.' },
                    { icon: '🚂', title: '10 Mins from New Street Station', desc: 'Direct bus routes from Birmingham New Street. National Express and local trains easily accessible.' },
                    { icon: '🏙️', title: '5 Minutes to City Centre', desc: 'Walking distance to Bullring, Grand Central, and all major Birmingham attractions.' },
                    { icon: '🛣️', title: 'West Midlands Accessible', desc: 'Easy drive from Solihull (15 mins), Dudley (25 mins), Wolverhampton (30 mins), and Walsall (20 mins).' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start p-4 bg-purple-900/30 rounded-lg border border-purple-500/20">
                      <span className="text-3xl mr-4">{item.icon}</span>
                      <div>
                        <strong className="text-white text-lg">{item.title}</strong>
                        <p className="text-gray-300 mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-2xl p-8 border border-purple-500/30">
                  <h4 className="text-2xl font-bold text-white mb-4">Business Hours</h4>
                  <div className="space-y-2 text-lg">
                    <div className="flex justify-between text-gray-300">
                      <span>Monday - Friday:</span>
                      <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Saturday:</span>
                      <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Sunday:</span>
                      <span className="text-white font-semibold">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4 italic">
                    Weekend event bookings available. Contact us to schedule a free venue viewing at your convenience.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-900/60 to-pink-900/60 rounded-2xl p-8 border border-amber-500/30">
                  <h4 className="text-2xl font-bold text-white mb-4">Contact Information</h4>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-center text-gray-300">
                      <span className="text-2xl mr-3">📞</span>
                      <div>
                        <div className="text-sm text-gray-400">Phone</div>
                        <a href="tel:+447391222884" className="text-white font-semibold hover:text-amber-300 transition-colors">
                          +44 7391 222884
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-2xl mr-3">✉️</span>
                      <div>
                        <div className="text-sm text-gray-400">Email</div>
                        <a href="mailto:info@luxevenue.co.uk" className="text-white font-semibold hover:text-amber-300 transition-colors break-all">
                          info@luxevenue.co.uk
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-2xl mr-3">💬</span>
                      <div>
                        <div className="text-sm text-gray-400">Support</div>
                        <a href="mailto:luxevenue01@gmail.com" className="text-white font-semibold hover:text-amber-300 transition-colors break-all">
                          luxevenue01@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-6 bg-black/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">
                Affordable Wedding FAQs
              </span>
            </h2>
            <p className="text-center text-gray-400 text-lg mb-12">
              Common questions about booking an affordable wedding venue in Birmingham with LUXE VENUE
            </p>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30 overflow-hidden">
                  <summary className="p-6 cursor-pointer list-none flex justify-between items-center hover:bg-purple-900/30 transition-all">
                    <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                    <span className="text-pink-400 text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed text-lg border-t border-purple-500/20 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Book Your Affordable Dream Wedding?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of couples who have celebrated their special day at Birmingham's most affordable wedding venue. Transparent pricing, authentic halal catering, and unforgettable intimate celebrations from just £2,500.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+447391222884" className="px-10 py-5 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all">
                Call +44 7391 222884
              </a>
              <a href="mailto:info@luxevenue.co.uk" className="px-10 py-5 bg-white/10 backdrop-blur border-2 border-white/30 text-white rounded-full font-bold text-xl hover:bg-white/20 transition-all">
                Email for Quote
              </a>
            </div>
            <p className="text-gray-400 mt-8 text-sm">
              ★★★★★ Rated | Serving Birmingham, Solihull, Dudley, Wolverhampton & Walsall
            </p>
          </div>
        </section>

        <PublicFooter />
      </div>
    </>
  )
}
