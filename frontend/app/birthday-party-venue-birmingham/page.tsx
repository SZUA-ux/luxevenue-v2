import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateLocalBusinessSchema, generateEventVenueSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils/seo'

export const metadata: Metadata = {
  title: 'Birthday Party Venue Birmingham | Kids & Adult Party Venue B12 | LUXE VENUE',
  description: 'Perfect birthday party venue in Birmingham. Kids parties, milestone birthdays, adult celebrations. Capacity 70 guests, halal catering, custom themes. Book your birthday venue at LUXE VENUE Sparkbrook.',
  keywords: 'birthday party venue birmingham, party venue birmingham, kids party venue, adult birthday venue, milestone birthday, birthday hall birmingham, children party venue, birthday celebration venue, party space birmingham, birthday event venue',
  openGraph: {
    title: 'Birthday Party Venue Birmingham | LUXE VENUE',
    description: 'Birmingham\'s favorite birthday party venue. Kids parties, adult celebrations, milestone birthdays. Custom themes, halal catering, entertainment.',
    url: 'https://luxevenue.co.uk/birthday-party-venue-birmingham',
    siteName: 'LUXE VENUE',
    images: [{ url: '/images/birthday-venue-birmingham.jpg', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: 'https://luxevenue.co.uk/birthday-party-venue-birmingham' },
  robots: { index: true, follow: true },
}

const faqs = [
  { question: 'Is LUXE VENUE suitable for children\'s birthday parties in Birmingham?', answer: 'Absolutely! LUXE VENUE is one of Birmingham\'s most popular kids party venues. We host children\'s birthdays for ages 1-16, providing safe, supervised spaces with entertainment options, halal party food, customizable themes (princess, superhero, unicorn, football), and dedicated party coordinators. Located in Sparkbrook B12, we serve families from across Birmingham, Solihull, Small Heath, Bordesley Green, and Tyseley.' },
  { question: 'Do you host adult birthday parties and milestone celebrations?', answer: 'Yes! We specialize in milestone birthday celebrations including 18th, 21st, 30th, 40th, 50th, and 60th birthdays. Our adult party venue accommodates up to 70 guests with elegant setups, professional sound system for music and speeches, halal catering with sophisticated menus, and full bar-free environment. Perfect for families seeking classy birthday celebrations in Birmingham.' },
  { question: 'What entertainment options are available for birthday parties?', answer: 'We can arrange various entertainment including bouncy castles (weather permitting), face painters, balloon artists, magicians, clowns, DJ services, karaoke setup, photo booths, games coordinators, and themed character appearances. Our sound system is perfect for party music, and we have space for dancing and games.' },
  { question: 'Is the birthday party food halal certified?', answer: 'Yes, all our birthday catering is 100% halal certified. Popular kids party menus include chicken nuggets, mini pizzas, samosas, sandwiches, fruit platters, and halal jelly. Adult party menus feature Pakistani karahi, biryani, seekh kebabs, samosas, and international fusion dishes. We accommodate all dietary requirements including vegetarian, vegan, and allergy-friendly options.' },
  { question: 'How much does a birthday party cost at LUXE VENUE Birmingham?', answer: 'Kids birthday party packages start from £600 including 3-hour venue hire, tables, chairs, and basic décor. Catering costs £8-15 per child. Adult birthday packages start from £800 for venue hire with catering from £15-30 per person. A complete kids party for 30 children typically costs £1,000-1,500 including everything.' },
  { question: 'Can we bring our own birthday cake and decorations?', answer: 'Absolutely! You\'re welcome to bring your own birthday cake, decorations, balloons, party favors, and entertainment. We provide tables for cake display, refrigeration if needed, and help with setup. Many Birmingham families bring custom cakes from local Asian bakeries like Kashmiri Bakers or Sweet Centre.' },
  { question: 'What areas of Birmingham do you serve for birthday parties?', answer: 'Located in Sparkbrook (B12), we\'re easily accessible from Small Heath (8 mins), Tyseley (10 mins), Bordesley Green (12 mins), Acocks Green (15 mins), Hall Green (12 mins), Moseley (10 mins), Balsall Heath (8 mins), Sparkhill (5 mins), and across Birmingham, Solihull, and surrounding areas.' },
  { question: 'How long can we book the venue for birthday parties?', answer: 'Standard birthday party bookings are 3-4 hours. Kids parties typically run 2pm-5pm or 4pm-7pm on weekends. Adult birthday celebrations often book 6pm-11pm slots. Extended hours available for an additional fee. We offer flexible timing for weekday parties and off-peak discounts.' },
  { question: 'Is there parking available for birthday party guests?', answer: 'Yes, free on-street parking is available on Leopold Street and surrounding roads in Sparkbrook. The venue is also accessible via public transport - 10 minutes from Birmingham city centre, well-connected by buses (4, 5, 6, 50 routes), making it convenient for families traveling from different Birmingham areas.' },
  { question: 'Do you offer birthday party packages with everything included?', answer: 'Yes! Our all-inclusive birthday packages include venue hire, themed decorations, tables and chairs, halal party food, birthday cake service, entertainment coordination, party host, setup and cleanup, and party bags. Packages range from £1,200-2,500 depending on guest count and entertainment choices.' }
]

export default function BirthdayPartyVenueBirminghamPage() {
  const schemas = {
    local: generateLocalBusinessSchema(),
    venue: generateEventVenueSchema(),
    faq: generateFAQSchema(faqs),
    breadcrumb: generateBreadcrumbSchema([{ name: 'Home', url: 'https://luxevenue.co.uk' }, { name: 'Birthday Party Venue Birmingham', url: 'https://luxevenue.co.uk/birthday-party-venue-birmingham' }])
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
            <span className="text-white font-semibold">Birthday Party Venue Birmingham</span>
          </nav>
        </section>

        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Birmingham's Favorite <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">Birthday Party Venue</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unforgettable kids & adult birthday celebrations with halal catering in Sparkbrook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/venue-hire-birmingham" className="px-8 py-4 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all">
                Book Birthday Party
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                Get Party Package
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Searching for the perfect <strong>birthday party venue in Birmingham</strong>? LUXE VENUE is the West Midlands' most beloved <strong>party venue</strong>, specializing in unforgettable children's birthday parties, milestone adult celebrations, and family gatherings. Located at <strong>86 Leopold Street, Birmingham B12 0UD</strong> in the family-friendly <strong>Sparkbrook neighborhood</strong>, our venue is surrounded by <strong>parks, schools, and family entertainment centers</strong> including Sparkbrook Park and Small Heath Park.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As Birmingham's premier <strong>birthday celebration venue</strong>, we understand that birthday parties are precious milestones in family life. Whether you're planning a <strong>kids birthday party in Birmingham</strong> for your little one, an elegant <strong>18th birthday celebration</strong>, or a memorable <strong>50th birthday milestone</strong>, LUXE VENUE provides the perfect space, halal catering, and professional coordination that makes your birthday truly special.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Why Families Choose LUXE VENUE for <span className="text-rose-gold">Birthday Parties</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                When searching for <strong>birthday party venues in Birmingham</strong>, families need more than just a hall—they need a venue that understands family values, provides safe spaces for children, and offers quality halal food. LUXE VENUE has earned the trust of families across <strong>Birmingham, Small Heath, Bordesley Green, Tyseley, Acocks Green, Hall Green, Moseley, Balsall Heath, Sparkhill, Solihull,</strong> and <strong>surrounding areas</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our <strong>Sparkbrook location (B12 postcode)</strong> is ideal for family celebrations. The area is home to several <strong>popular Birmingham schools</strong> including Sparkbrook Primary School, Golden Hillock School, and International School, making it familiar territory for many families. Your guests traveling from <strong>Small Heath</strong> (8 minutes drive), <strong>Tyseley</strong> (10 minutes), <strong>Bordesley Green</strong> (12 minutes), or <strong>Acocks Green</strong> (15 minutes) will find our venue conveniently accessible with ample free parking.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                What makes LUXE VENUE the best <strong>kids party venue in Birmingham</strong> is our child-friendly approach combined with cultural sensitivity. We've hosted hundreds of <strong>Pakistani children's birthdays with traditional games and halal food, Indian kids parties with Bollywood themes, multicultural celebrations blending cultures,</strong> and <strong>Muslim family gatherings</strong> with prayer facilities and modest entertainment options.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Amazing <span className="text-rose-gold">Kids Birthday Party Themes</span> in Birmingham
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: '🦄', title: 'Princess & Unicorn', desc: 'Magical princess castle setup, unicorn décor, dress-up costumes, glitter face painting, and enchanted photo areas.' },
                { icon: '🦸', title: 'Superhero Party', desc: 'Action-packed superhero theme with capes, masks, obstacle courses, hero training games, and comic book décor.' },
                { icon: '⚽', title: 'Sports & Football', desc: 'Football-themed decorations, mini goals, sports games, team activities, and champion medals for all guests.' },
                { icon: '🌈', title: 'Rainbow & Unicorn', desc: 'Colorful rainbow décor, balloon arches, arts and crafts stations, face painting, and vibrant party atmosphere.' },
                { icon: '🐵', title: 'Jungle Safari', desc: 'Wild animal theme with jungle décor, animal masks, safari games, treasure hunts, and adventure activities.' },
                { icon: '🎂', title: 'Custom Themes', desc: 'Frozen, Peppa Pig, Paw Patrol, Minecraft, Fortnite, Disney, Bollywood - any theme your child loves!' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-black-primary rounded-xl border border-white/10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              <span className="text-rose-gold">Adult Birthday Celebrations</span> & Milestone Parties
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Planning a <strong>milestone birthday in Birmingham</strong>? LUXE VENUE specializes in elegant adult birthday celebrations including <strong>18th birthday parties, 21st celebrations, 30th birthdays, 40th milestone events, 50th golden birthdays, 60th diamond celebrations,</strong> and beyond. Our sophisticated space transforms into the perfect setting for memorable adult parties.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For <strong>adult birthday parties in Birmingham</strong>, we offer upscale amenities including professional DJ setup, elegant table decorations, sophisticated lighting, premium halal catering with international cuisine, full projection system for photo slideshows and videos, and private bar-free environment respecting Muslim values. Whether you want a formal sit-down dinner or a lively celebration with dancing, LUXE VENUE adapts to your vision.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Delicious <span className="text-rose-gold">Halal Party Food</span> Everyone Loves
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Every great <strong>birthday party in Birmingham</strong> needs delicious food! Our 100% halal catering includes crowd-pleasing options for all ages. <strong>Kids party menus</strong> feature chicken nuggets, mini pizzas, halal hot dogs, sandwiches, vegetable sticks with dip, fresh fruit platters, cupcakes, and birthday cake service. <strong>Adult party menus</strong> offer Pakistani karahi and biryani, Indian curry selection, seekh kebabs and chicken tikka, international fusion dishes, elegant appetizers, and stunning dessert displays.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For families seeking <strong>party catering in Birmingham</strong> that's both delicious and halal-certified, LUXE VENUE delivers exceptional quality. We source from Birmingham's best halal suppliers and work with experienced chefs who understand that party food should be fun, flavorful, and worry-free for Muslim families.
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
            <h2 className="text-3xl font-bold text-center mb-12">Related Celebration Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/baby-shower-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Baby Showers</h3>
                <p className="text-gray-400">Beautiful baby shower & gender reveal parties</p>
              </Link>
              <Link href="/wedding-venue-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Weddings</h3>
                <p className="text-gray-400">Intimate wedding celebrations & receptions</p>
              </Link>
              <Link href="/catering" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Halal Catering</h3>
                <p className="text-gray-400">Certified halal party food & catering</p>
              </Link>
              <Link href="/venue-hire-birmingham" className="p-6 bg-black-primary rounded-xl border border-white/10 hover:border-rose-gold transition-all">
                <h3 className="text-xl font-bold mb-2">Private Events</h3>
                <p className="text-gray-400">Family gatherings & celebrations</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Book Your <span className="text-rose-gold">Birthday Party</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Create unforgettable birthday memories at Birmingham's favorite party venue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/venue-hire-birmingham" className="px-10 py-5 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg transition-all text-lg">
              Book Party Venue
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
