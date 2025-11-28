import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import { getCanonicalUrl } from '@/lib/utils/seo'

export const metadata: Metadata = {
  title: 'Testimonials - LUXE VENUE | Customer Reviews',
  description: 'Read what our clients say about their experience at LUXE VENUE Birmingham. Real reviews from real celebrations.',
  alternates: { canonical: getCanonicalUrl('/testimonials') },
}

export default function TestimonialsPage() {
  const testimonials = [
    { name: 'Sarah & James', event: 'Wedding', quote: 'LUXE VENUE made our wedding day absolutely perfect. The team was incredible and the venue stunning!' },
    { name: 'Tech Corp Ltd', event: 'Corporate Event', quote: 'Professional, elegant, and flawlessly executed. Our annual gala was a huge success!' },
    { name: 'Amina Khan', event: 'Nikah Ceremony', quote: 'Beautiful venue with amazing staff who understood our cultural requirements perfectly.' },
  ]

  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                What our clients say about us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-surface-dark rounded-xl border border-white/10"
                >
                  <div className="text-rose-gold text-4xl mb-4">★★★★★</div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
