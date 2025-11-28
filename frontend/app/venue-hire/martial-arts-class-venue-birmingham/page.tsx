import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Martial Arts & Yoga Studio Birmingham | Fitness Class Space - Luxe Venue',
  description: '8m x 9m martial arts and yoga studio Birmingham. Perfect for karate, taekwondo, yoga, Pilates classes. Up to 20 mats. Weekly bookings available.',
}

export default function VenueHirePage() {
  return (<><PublicNav /><main className="min-h-screen bg-black-primary pt-20"><section className="py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-6xl mx-auto"><nav className="text-sm text-gray-400 mb-6"><Link href="/" className="hover:text-purple-400">Home</Link> / <Link href="/venue-hire-birmingham" className="hover:text-purple-400">Venue Hire</Link> / Martial Arts & Fitness</nav><h1 className="text-5xl font-heading font-bold mb-6"><span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Martial Arts & Yoga Studio Birmingham</span></h1><p className="text-2xl text-gray-200 mb-8">Fitness Class Space & Martial Arts Hall Hire</p><div className="prose prose-invert max-w-none mb-12"><p className="text-gray-300 text-lg">Perfect <strong className="text-white">yoga studio Birmingham</strong> for martial arts, yoga, Pilates. 8m x 9m open floor, up to 20 mats. Weekly bookings welcome.</p></div><div className="bg-surface-dark p-8 rounded-xl border border-orange-500/30 mb-12"><h2 className="text-3xl font-heading font-bold text-white mb-6">Ideal for Classes</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300"><div>✓ Open floor space</div><div>✓ 12-20 mats</div><div>✓ Yoga, Pilates, Karate</div><div>✓ Weekly bookings</div><div>✓ Clean facilities</div><div>✓ Birmingham B12</div></div></div><div className="text-center py-12 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl"><h2 className="text-4xl font-heading font-bold text-white mb-6">Book Class Space</h2><Link href="/contact" className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg hover:shadow-2xl transition-all">Check Availability</Link><p className="text-sm text-gray-400 mt-6"><Link href="/venue-hire-birmingham" className="text-orange-400 hover:underline">← All Venue Hire Options</Link></p></div></div></section></main><PublicFooter /></>)
}
