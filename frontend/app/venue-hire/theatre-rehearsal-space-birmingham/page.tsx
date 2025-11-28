import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Theatre Rehearsal Space Birmingham | Drama Studio Hire from £60/hr | LUXE VENUE',
  description: 'Professional theatre rehearsal space in Birmingham. Fully equipped drama studio with staging area, sound system, and flexible layout. Ideal for theatre companies, drama groups, and performers. From £60/hr.',
  keywords: 'theatre rehearsal space birmingham, rehearsal room hire birmingham, theatre rehearsal birmingham, rehearsal studios birmingham, drama rehearsal birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/theatre-rehearsal-space-birmingham' },
}

export default function TheatreRehearsalPage() {
  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black-primary to-black-secondary">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                Theatre Rehearsal Space Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white mb-4">Professional Drama & Performance Studio</p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Fully equipped theatre rehearsal space perfect for drama groups, theatre companies, and performing arts. Professional staging area and sound system from £60/hr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all">
                Book This Space
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all">
                📞 +44 7391 222884
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">Perfect for Rehearsals</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🎭</div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Stage</h3>
                <p className="text-gray-300 text-sm">Open floor plan with staging area, perfect for blocking and choreography</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🎵</div>
                <h3 className="text-xl font-bold text-white mb-3">Sound System</h3>
                <p className="text-gray-300 text-sm">Professional PA with microphones and mixing controls</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-white mb-3">Theatre Lighting</h3>
                <p className="text-gray-300 text-sm">Adjustable stage lighting for full rehearsal atmosphere</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">Transparent Pricing</h2>
            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-300">Hourly Rate</span>
                  <span className="text-rose-gold font-bold text-xl">£60-80/hr</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-300">Half Day (4hrs)</span>
                  <span className="text-rose-gold font-bold text-xl">£200</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-300">Full Day (8hrs)</span>
                  <span className="text-rose-gold font-bold text-xl">£350</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Weekly Package</span>
                  <span className="text-rose-gold font-bold text-xl">From £180/week</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center mt-6">All prices include equipment, WiFi, and parking</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">Our Rehearsal Space</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image src="/rehearsal.png" alt="Theatre rehearsal space Birmingham" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden bg-surface-dark border border-white/10 flex items-center justify-center">
                <span className="text-gray-500">Additional Venue Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">What size is the rehearsal space?</h3>
                <p className="text-gray-300">Our theatre rehearsal space is 8m x 9m with high ceilings, providing ample room for blocking, choreography, and stage movement with up to 70 people.</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">Is there a sound system included?</h3>
                <p className="text-gray-300">Yes! Professional PA system with wireless microphones, speakers, and mixing controls are included in the rental at no extra cost.</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">Can we use the space for performances?</h3>
                <p className="text-gray-300">Yes, the space works perfectly for small performances, showcases, and audience viewings. We can arrange seating configurations based on your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <VenueHireForm />

      </main>
      <PublicFooter />
    </>
  )
}