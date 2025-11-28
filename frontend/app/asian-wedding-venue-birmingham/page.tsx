import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Asian Wedding Venue Birmingham | Pakistani, Indian & Multicultural Weddings | LUXE VENUE',
  description: 'Premier Asian wedding venue in Birmingham for Pakistani, Indian, Bangladeshi, and multicultural celebrations. Halal catering, Nikah ceremonies, Mehndi events. Capacity 70 guests.',
  keywords: 'Asian wedding venue Birmingham, Pakistani wedding Birmingham, Indian wedding venue, multicultural wedding Birmingham, halal wedding venue, Nikah ceremony Birmingham',
}

export default function AsianWeddingVenuePage() {
  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-rose-gold font-semibold mb-4 uppercase text-sm tracking-wider">Birmingham's Premier Multicultural Wedding Venue</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                  Asian Wedding Venue Birmingham
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Elegant Venue for Pakistani, Indian, Bangladeshi & Multicultural Weddings | 100% Halal Catering | Alcohol-Free | Nikah & Mehndi Ceremonies | Up to 70 Guests
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
                Located in Birmingham city centre (B12 0UD), LUXE VENUE specializes in intimate Asian weddings with complete cultural sensitivity. Perfect for Pakistani Nikah ceremonies, Indian Sangeet celebrations, Bangladeshi weddings, and mixed-heritage unions. Serving Birmingham, Walsall, Dudley, Solihull, Wolverhampton & West Midlands.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg shadow-2xl hover:scale-110 transition-all">
                  Book Venue Tour
                </Link>
                <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all">
                  📞 +44 7391 222884
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                  <span className="text-rose-gold">Pakistani Weddings</span> at LUXE VENUE
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Our Birmingham venue understands the traditions and requirements of Pakistani Muslim weddings. From Nikah ceremonies to Mehndi celebrations and Walima receptions, we provide a respectful, halal-compliant environment for your special day.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">100% Halal Catering:</strong> <span className="text-gray-300">Authentic Pakistani cuisine - Biryani, Karahi, Nihari, traditional sweets</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Nikah Ceremony Setup:</strong> <span className="text-gray-300">Prayer facilities, separate seating options, modest environment</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Mehndi Event Space:</strong> <span className="text-gray-300">Vibrant décor, traditional music setup, henna artist accommodation</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Alcohol-Free Venue:</strong> <span className="text-gray-300">Strict no-alcohol policy for Islamic compliance</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Cultural Understanding:</strong> <span className="text-gray-300">Staff experienced with Pakistani, Punjabi, Mirpuri, Pashtun traditions</span></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                  <span className="text-rose-gold">Indian Weddings</span> at LUXE VENUE
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Celebrate your Indian wedding with traditional ceremonies and modern elegance. Whether Hindu, Sikh, Christian, or interfaith, our Birmingham venue accommodates all South Asian wedding traditions with respect and professionalism.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Multi-Faith Ceremonies:</strong> <span className="text-gray-300">Hindu Mandap setup, Sikh Anand Karaj, Christian ceremonies</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Regional Indian Cuisine:</strong> <span className="text-gray-300">North Indian, South Indian, Gujarati, Bengali menus - all halal-certified</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Sangeet & Mehndi:</strong> <span className="text-gray-300">Pre-wedding celebration setup with DJ, dance floor, colorful décor</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Vegetarian Options:</strong> <span className="text-gray-300">Complete vegetarian menus for Jain, Hindu, and Sikh families</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-gold text-xl">✓</span>
                    <div><strong className="text-white">Pandit/Priest Coordination:</strong> <span className="text-gray-300">Space for religious rituals, havan, and traditional ceremonies</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-dark p-8 sm:p-12 rounded-2xl border border-rose-gold/30 mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-8">
                Why Asian Families Choose <span className="text-rose-gold">LUXE VENUE</span> Birmingham
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {t:'Cultural Sensitivity', d:'Staff trained in Pakistani, Indian, Bangladeshi, Afghan wedding customs and traditions'},
                  {t:'100% Halal Certified', d:'All meat and ingredients halal-certified from trusted Birmingham suppliers'},
                  {t:'Intimate Capacity (70)', d:'Perfect for close family gatherings - not a large impersonal banquet hall'},
                  {t:'Flexible Timings', d:'Accommodate traditional ceremony timings and religious requirements'},
                  {t:'Affordable Packages', d:'From £3,000 for complete wedding - significantly lower than large venues'},
                  {t:'Central Location', d:'Birmingham B12 - easy access from Sparkhill, Small Heath, Alum Rock, Handsworth'},
                  {t:'Customizable Décor', d:'Pakistani wedding colors, Indian mandap setup, stage backdrops, floral arrangements'},
                  {t:'Prayer Facilities', d:'Wudu area available, prayer mats provided, Qibla direction marked'},
                  {t:'Alcohol-Free', d:'Strict no-alcohol policy - safe, family-friendly, religiously compliant environment'},
                ].map((f,i)=>(
                  <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="text-lg font-bold text-rose-gold mb-2">{f.t}</h3>
                    <p className="text-sm text-gray-300">{f.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-16">
              <h2 className="text-3xl font-heading font-bold text-white mb-8">Asian Wedding Services in Birmingham & West Midlands</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
                <div>
                  <h3 className="text-2xl font-heading text-rose-gold mb-4">Pakistani Muslim Weddings</h3>
                  <p className="mb-4">
                    LUXE VENUE Birmingham is the ideal <strong className="text-white">Pakistani Muslim wedding venue</strong> for families seeking an intimate, halal-compliant celebration. We've hosted over 100 Nikah ceremonies for Pakistani families from Birmingham, Walsall, Dudley, and across the West Midlands.
                  </p>
                  <p className="mb-4">
                    Our <strong className="text-white">Pakistani wedding packages</strong> include complete Nikah ceremony setup, traditional Pakistani catering (Chicken Biryani, Lamb Karahi, Seekh Kebab), and cultural décor. Perfect for Mirpuri, Punjabi, Pashtun, and Kashmiri communities.
                  </p>
                  <p className="text-sm">
                    <strong className="text-white">Serving:</strong> Sparkhill • Small Heath • Alum Rock • Bordesley Green • Handsworth • Aston • Lozells • Newtown • Washwood Heath • Ward End
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading text-rose-gold mb-4">Indian Hindu & Sikh Weddings</h3>
                  <p className="mb-4">
                    Our <strong className="text-white">Indian wedding venue in Birmingham</strong> welcomes Hindu Mandap ceremonies, Sikh Anand Karaj, and interfaith celebrations. We understand Gujarati, Punjabi, South Indian, and Bengali wedding traditions.
                  </p>
                  <p className="mb-4">
                    Complete vegetarian menus available for Jain families. Halal meat options for those who require. Pandit/Granthi coordination. Traditional Indian sweets and desserts. Customizable mandap decorations in your chosen colors.
                  </p>
                  <p className="text-sm">
                    <strong className="text-white">Perfect for:</strong> Gujarati weddings • Punjabi weddings • South Indian weddings • Bengali weddings • Sikh marriages • Mixed Hindu-Muslim unions
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-16 bg-gradient-to-br from-surface-dark to-surface-elevated rounded-2xl border border-rose-gold/20">
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Book Your <span className="text-rose-gold">Asian Wedding Venue</span> Tour
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Visit LUXE VENUE Birmingham and see why Asian families choose us for intimate, culturally-sensitive celebrations
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all">
                  Schedule Free Viewing
                </Link>
                <Link href="/catering" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all">
                  View Halal Catering Menus
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
