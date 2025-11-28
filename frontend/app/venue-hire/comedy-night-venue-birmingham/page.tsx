import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Comedy Night Venue Birmingham | Stand-Up Comedy Space from £80/hr | LUXE VENUE',
  description: 'Premier comedy night venue in Birmingham. Professional stage, sound, and lighting for stand-up shows, open mic nights, and comedy events. Perfect for comedians and promoters. From £80/hr.',
  keywords: 'comedy nights birmingham, comedy venue hire birmingham, stand-up comedy birmingham, comedy club birmingham, comedy events birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/comedy-night-venue-birmingham' },
}

export default function ComedyVenuePage() {
  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black-primary to-black-secondary">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                Comedy Night Venue Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white mb-4">Stand-Up Comedy & Entertainment Space</p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional comedy venue with stage, lighting, and sound system. Perfect for stand-up shows, open mic nights, and comedy events. From £80/hr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all">
                Book Comedy Venue
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all">
                📞 +44 7391 222884
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">Perfect for Comedy Shows</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🎤</div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Stage</h3>
                <p className="text-gray-300 text-sm">Elevated stage with backdrop perfect for stand-up performances</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-white mb-3">Comedy Lighting</h3>
                <p className="text-gray-300 text-sm">Spotlights and mood lighting for professional comedy atmosphere</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">🎵</div>
                <h3 className="text-xl font-bold text-white mb-3">PA System</h3>
                <p className="text-gray-300 text-sm">Professional sound with wireless microphones</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">Comedy Venue Pricing</h2>
            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-300">Hourly Rate</span>
                  <span className="text-rose-gold font-bold text-xl">£80-120/hr</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-300">Evening Show (3hrs)</span>
                  <span className="text-rose-gold font-bold text-xl">£280</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Open Mic Night</span>
                  <span className="text-rose-gold font-bold text-xl">£200/night</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">Our Comedy Venue</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image src="/comedy-night.jpg" alt="Comedy night venue Birmingham" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden bg-surface-dark border border-white/10 flex items-center justify-center">
                <span className="text-gray-500">Additional Venue Image</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 text-center">Comedy Venue FAQs</h2>
            <div className="space-y-6">
              <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">What's the capacity for comedy shows?</h3>
                <p className="text-gray-300">The venue comfortably seats 70 people cabaret-style, perfect for intimate comedy nights with great sightlines.</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">Can we sell tickets and drinks?</h3>
                <p className="text-gray-300">Yes! We have a designated ticket desk area. The venue is alcohol-free, but soft drinks and snacks can be arranged.</p>
              </div>
              <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">Is there a green room for performers?</h3>
                <p className="text-gray-300">Yes, we provide a private green room area for comedians to prepare before and between sets.</p>
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