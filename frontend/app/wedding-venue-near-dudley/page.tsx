import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Wedding Venue Near Dudley | LUXE VENUE Birmingham',
  description: 'Looking for a wedding venue near Dudley? LUXE VENUE in Birmingham is easily accessible and offers luxury event spaces.',
}

export default function Page() {
  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                Wedding Venue Near Dudley
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Just a short drive from Dudley, LUXE VENUE offers Birmingham's finest wedding space
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-semibold hover:shadow-2xl transition-all"
            >
              Book Your Event
            </Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
