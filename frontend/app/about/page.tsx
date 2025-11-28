import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import { getCanonicalUrl, generateLocalBusinessSchema } from '@/lib/utils/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - LUXE VENUE | Premier Event Venue in Birmingham',
  description: 'Learn about LUXE VENUE - Birmingham\'s premier luxury event space for weddings, corporate events, and celebrations.',
  alternates: { canonical: getCanonicalUrl('/about') },
}

export default function AboutPage() {
  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                About LUXE VENUE
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Birmingham's most prestigious event venue, dedicated to creating unforgettable experiences for your special occasions.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white mb-8">Our Story</h2>
            <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                LUXE VENUE opened its doors with a vision to redefine luxury event spaces in Birmingham. Located in the heart of the city at 86 Leopold Street (B12 0UD), we have become the premier destination for those seeking elegance, sophistication, and impeccable service.
              </p>
              <p>
                Our state-of-the-art facility combines contemporary design with timeless elegance, creating the perfect backdrop for weddings, Nikah ceremonies, corporate events, and celebrations of all kinds. With a capacity of up to 70 guests, we specialize in intimate, personalized events where every detail matters.
              </p>
              <p>
                As an <strong className="text-rose-gold">alcohol-free, family-friendly venue</strong>, we provide a welcoming environment that honors all cultures and traditions. Our commitment to 100% halal catering, cultural sensitivity, and inclusive service makes us the perfect choice for diverse celebrations across Birmingham, Dudley, Wolverhampton, Walsall, and the wider West Midlands.
              </p>
              <p>
                Whether you're planning a traditional wedding, Nikah ceremony, Mehndi event, milestone birthday, anniversary, baby shower, or corporate gathering, our dedicated team of experienced professionals takes pride in delivering exceptional experiences that exceed expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white mb-12 text-center">The LUXE VENUE Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Uncompromising Quality', 
                  desc: 'From premium furnishings and fine cutlery to award-winning cuisine, every element reflects our commitment to excellence. We source the finest materials and work with the best vendors to ensure your event is flawless.',
                  icon: '✨'
                },
                { 
                  title: 'Intimate Atmosphere', 
                  desc: 'Designed for meaningful connections with up to 70 cherished guests. Our venue creates the perfect setting for personal celebrations where every guest feels valued and every moment is special.',
                  icon: '👥'
                },
                { 
                  title: 'Personalized Experience', 
                  desc: 'Every celebration is uniquely tailored to reflect your vision and style. From custom color schemes to dietary accommodations, we adapt to your needs with cultural sensitivity and care.',
                  icon: '💎'
                },
              ].map((value, index) => (
                <div key={index} className="p-8 bg-surface-dark rounded-xl border border-white/10 hover:border-rose-gold/30 transition-all">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-heading font-semibold text-rose-gold mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Specialize In */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white mb-12 text-center">
              What We <span className="text-rose-gold">Specialize In</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Multicultural Wedding Celebrations',
                  desc: 'Nikah, Mehndi, Walima, church ceremonies, civil weddings with customized catering including halal, kosher, vegan & dietary-specific options'
                },
                {
                  title: 'Religious & Cultural Ceremonies',
                  desc: 'All faith celebrations including Christian, Muslim, Hindu, Sikh, Jewish, Buddhist ceremonies with respectful cultural accommodations'
                },
                {
                  title: 'Intimate & Grand Celebrations',
                  desc: 'Micro weddings, family gatherings, milestone celebrations for 20-70 guests with personalized styling and full-service coordination'
                },
                {
                  title: "Life's Special Moments",
                  desc: 'Birthdays, anniversaries, baby showers, engagements, Bar/Bat Mitzvahs, Sweet 16s, quinceañeras, graduation parties'
                },
                {
                  title: 'Corporate & Professional Events',
                  desc: 'Team meetings, training seminars, networking events, product launches, awards ceremonies with premium AV equipment'
                },
                {
                  title: 'Community Gatherings',
                  desc: 'Charity fundraisers, cultural festivals, reunion parties, social club events, faith group meetings in our inclusive space'
                },
              ].map((specialty, index) => (
                <div key={index} className="p-6 bg-surface-dark rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-rose-gold mb-3">{specialty.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{specialty.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">Ready to Plan Your Event?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you create an unforgettable experience
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-semibold hover:shadow-2xl transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
