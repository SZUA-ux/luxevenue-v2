import { Metadata } from 'next'
import { getCanonicalUrl, generateLocalBusinessSchema, generateEventVenueSchema } from '@/lib/utils/seo'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LUXE VENUE - Premier Event Venue in Birmingham',
  description: 'Luxury event venue for weddings, corporate events, and celebrations in Birmingham. Book your dream event at LUXE VENUE.',
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    title: 'LUXE VENUE - Premier Event Venue in Birmingham',
    description: 'Luxury event venue for weddings, corporate events, and celebrations in Birmingham',
    url: getCanonicalUrl('/'),
    siteName: 'LUXE VENUE',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/venue-hero.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
}

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const eventVenueSchema = generateEventVenueSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventVenueSchema) }}
      />
      <PublicNav />
      <main className="min-h-screen bg-black-primary">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black-primary via-surface-dark to-black-secondary">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-gold/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-24">
            {/* Logo/Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent drop-shadow-2xl">
                LUXE VENUE
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 font-subheading font-light">
              Small Wedding Venue in Birmingham | Intimate Celebrations for 20-70 Guests
            </p>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Birmingham's premier <strong className="text-white">small wedding venue</strong> for intimate gatherings. 
              Specializing in <strong className="text-white">halal catering</strong>, <strong className="text-white">Nikah ceremonies</strong>, <strong className="text-white">Asian weddings</strong>, and multicultural celebrations. 
              <strong className="text-white">Alcohol-free</strong>, family-friendly venue serving Birmingham, Dudley, Wolverhampton & West Midlands. 
              Perfect for <strong className="text-white">micro weddings</strong> and intimate events.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/contact"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-subheading font-bold text-lg shadow-2xl shadow-rose-gold/30 hover:shadow-rose-gold/50 hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
              >
                Book Your Event
              </Link>
              
              <Link
                href="/catering"
                className="px-8 py-4 rounded-full bg-purple-600/20 backdrop-blur-md border-2 border-purple-500 text-purple-300 font-subheading font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 ease-out"
              >
                🍽️ Catering Services
              </Link>
              
              <Link
                href="/venue-hire-birmingham"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border-2 border-purple-400 text-purple-300 font-subheading font-semibold text-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 ease-out"
              >
                🏢 Space Hire
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
              {[
                { number: '300+', label: 'Events Hosted' },
                { number: '70', label: 'Max Capacity' },
                { number: '5★', label: 'Rated Service' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-rose-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400 font-subheading">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-rose-gold rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-rose-gold rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-rose-gold font-subheading font-semibold mb-3 tracking-wider uppercase text-sm">Celebrations We Curate</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Every Occasion <span className="text-rose-gold">Deserves Excellence</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Intimate gatherings for up to 70 guests in our elegant Birmingham venue
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '💍', title: 'Weddings & Unions', desc: 'Intimate wedding celebrations with halal catering and elegant décor. All-faith ceremonies including Christian, Muslim, Hindu, Sikh weddings.', link: '/wedding-venue-birmingham' },
                { icon: '🕌', title: 'Nikah Ceremonies', desc: 'Islamic wedding venue with prayer facilities and 100% halal catering. Respectful cultural accommodations for Muslim families.', link: '/nikah-venue-birmingham' },
                { icon: '💅', title: 'Mehndi Events', desc: 'Vibrant mehndi celebrations with traditional décor and authentic Pakistani refreshments for pre-wedding festivities.', link: '/mehndi-venue-birmingham' },
                { icon: '🎂', title: 'Milestone Birthdays', desc: "Children's parties and milestone adult birthdays with custom themes, halal catering, and beautiful settings.", link: '/birthday-party-venue-birmingham' },
                { icon: '🍼', title: 'Baby Showers', desc: 'Elegant baby shower venue with beautiful décor and accommodation for cultural traditions and dietary needs.', link: '/baby-shower-venue-birmingham' },
                { icon: '🏢', title: 'Corporate Events', desc: 'Professional business events, team building, and client entertainment with premium AV equipment and catering.', link: '/corporate-events-birmingham' },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-rose-gold/50 hover:shadow-2xl hover:shadow-rose-gold/20 hover:-translate-y-2 transition-all duration-500 ease-out"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-heading font-semibold text-white mb-4 group-hover:text-rose-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-rose-gold font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-rose-gold font-subheading font-semibold mb-3 tracking-wider uppercase text-sm">The LUXE VENUE Difference</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Excellence in Every <span className="text-rose-gold">Detail</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Discover what makes us Birmingham's premier choice for multicultural celebrations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '✨', title: 'Uncompromising Quality', desc: 'From furnishings to cuisine, every element reflects our commitment to excellence' },
                { icon: '👥', title: 'Intimate Atmosphere', desc: 'Designed for meaningful connections, accommodating up to 70 cherished guests' },
                { icon: '🎨', title: 'Personalized Experience', desc: 'Every celebration uniquely tailored to reflect your vision and style' },
                { icon: '🍽️', title: 'Premium Catering', desc: 'Award-winning chefs, seasonal menus, halal & dietary accommodations' },
                { icon: '📍', title: 'Prime Location', desc: 'Birmingham city centre (B12 0UD), easily accessible from Dudley, Wolverhampton, Walsall' },
                { icon: '🎵', title: 'Premium A/V', desc: 'Professional-grade sound system and ambient lighting with adjustable settings' },
                { icon: '🚫🍷', title: 'Alcohol-Free', desc: 'Family-friendly, alcohol-free venue welcoming all cultures and traditions' },
                { icon: '🤝', title: 'Event Planner', desc: 'Complimentary dedicated event coordinator (worth £400) with every booking' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-surface-dark border border-white/10 hover:border-rose-gold/30 hover:shadow-lg hover:shadow-rose-gold/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-subheading font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Location Coverage */}
            <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-surface-dark to-surface-elevated border border-rose-gold/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                  Serving the <span className="text-rose-gold">West Midlands</span>
                </h3>
                <p className="text-gray-300 text-lg">
                  Conveniently located in Birmingham city centre, serving couples and families across the region
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {[
                  { name: 'Birmingham City Centre', link: '/wedding-venue-birmingham' },
                  { name: 'Dudley', link: '/wedding-venue-dudley' },
                  { name: 'Wolverhampton', link: '/wedding-venue-wolverhampton' },
                  { name: 'Walsall', link: '/wedding-venue-walsall' },
                  { name: 'West Bromwich', link: '/wedding-venue-birmingham' },
                  { name: 'Sandwell', link: '/wedding-venue-birmingham' },
                  { name: 'Solihull', link: '/wedding-venue-solihull' },
                  { name: 'Black Country', link: '/wedding-venue-dudley' },
                ].map((location, index) => (
                  <Link 
                    key={index} 
                    href={location.link}
                    className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 hover:border-rose-gold hover:bg-rose-gold/10 transition-all duration-300 group"
                  >
                    <p className="text-gray-300 group-hover:text-rose-gold text-sm transition-colors">✓ {location.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-rose-gold font-subheading font-semibold mb-3 tracking-wider uppercase text-sm">Client Stories</p>
              <h2 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-6">
                What Our <span className="text-rose-gold">Clients Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah & James Wilson', event: 'Wedding Reception', quote: 'LUXE VENUE made our wedding day absolutely magical. The attention to detail was impeccable, and the staff went above and beyond. Highly recommended!', rating: 5 },
                { name: 'Tech Solutions Ltd', event: 'Corporate Gala', quote: 'Professional, elegant, and flawlessly executed. Our annual gala at LUXE VENUE was a tremendous success. The team handled everything perfectly.', rating: 5 },
                { name: 'Amina & Faraz Khan', event: 'Nikah Ceremony', quote: 'Beautiful venue with amazing staff who understood our cultural requirements perfectly. The halal catering was exceptional. Thank you!', rating: 5 },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-surface-dark to-surface-elevated border border-rose-gold/20 hover:border-rose-gold/50 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-rose-gold text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.event}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="inline-block px-8 py-4 rounded-lg border border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all"
              >
                Read More Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-rose-gold font-subheading font-semibold mb-3 tracking-wider uppercase text-sm">See Our Venue</p>
              <h2 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-6">
                <span className="text-rose-gold">Gallery</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our stunning spaces and past celebrations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { src: '/images/gallery/luxe-venue-backdrop.png', alt: 'LUXE VENUE Birmingham - Elegant Wedding Backdrop' },
                { src: '/images/gallery/luxe-venue-elegant-decor.png', alt: 'LUXE VENUE Birmingham - Premium Crystal Chandelier Decor' },
                { src: '/images/gallery/luxe-venue-glass-led-walkway.png', alt: 'LUXE VENUE Birmingham - Glass LED Walkway' },
                { src: '/images/gallery/luxe-venue-golden-pillars.png', alt: 'LUXE VENUE Birmingham - Golden Pillars Wedding Setup' },
                { src: '/images/gallery/luxe-venue-white-gold-theme.png', alt: 'LUXE VENUE Birmingham - White & Gold Theme' },
                { src: '/images/gallery/luxe-venue-nikah-setup.png', alt: 'LUXE VENUE Birmingham - Nikah Ceremony Setup' },
                { src: '/images/gallery/qawali-night.jpg', alt: 'LUXE VENUE Birmingham - Qawali Night Event' },
                { src: '/images/gallery/corporate-event.jpg', alt: 'LUXE VENUE Birmingham - Corporate Event Space' },
              ].map((image, index) => (
                <div
                  key={index}
                  data-testid={`home-gallery-preview-${index}`}
                  className="group aspect-square bg-gradient-to-br from-surface-dark to-surface-elevated rounded-xl border border-white/10 overflow-hidden hover:border-rose-gold/50 hover:scale-105 transition-all duration-300 relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity px-2 text-center">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/gallery"
                data-testid="view-full-gallery-btn"
                className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-subheading font-bold text-lg shadow-2xl hover:shadow-rose-gold/50 hover:scale-105 transition-all"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black-secondary via-surface-dark to-black-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-rose-gold/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-6">
              Ready to Plan Your <span className="text-rose-gold">Perfect Event?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your vision and create an unforgettable experience together. Contact us today for a venue tour or consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-subheading font-bold text-lg shadow-2xl hover:shadow-rose-gold/50 hover:scale-110 transition-all"
              >
                Get in Touch
              </Link>
              
              <a
                href="tel:+447391222884"
                className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border-2 border-rose-gold text-rose-gold font-subheading font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all"
              >
                📞 +44 7391 222884
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@luxevenue.co.uk" className="hover:text-rose-gold transition-colors">info@luxevenue.co.uk</a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>86 Leopold Street, Birmingham B12 0UD</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💬</span>
                <a href="https://wa.me/447391222884" className="hover:text-rose-gold transition-colors">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Hidden CRM Login Access */}
      <div className="fixed bottom-4 right-4 opacity-20 hover:opacity-100 transition-opacity duration-300">
        <Link 
          href="/login" 
          className="text-sm text-gray-600 hover:text-rose-gold transition-colors"
          data-testid="hidden-crm-login-btn"
          title="Staff Login"
        >
          ⚙️
        </Link>
      </div>
      
      <PublicFooter />
    </>
  )
}
