import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import VenueHireForm from '@/components/forms/VenueHireForm'
import Link from 'next/link'
import Image from 'next/image'
import { generateFAQSchema, generateBreadcrumbSchema, generateEventVenueSchema } from '@/lib/utils/seo'

export const metadata: Metadata = {
  title: 'Venue Hire Birmingham | Dry Hire Event Space 70 Capacity | LUXE VENUE',
  description: 'Premium venue hire in Birmingham B12. 8m × 9m dry hire space perfect for parties, corporate events, classes & productions. 70 capacity. LED lighting, A/V system, free parking. From £350/4hrs.',
  keywords: 'venue hire birmingham, event space hire birmingham, dry hire venue, hall hire birmingham, party venue hire, corporate venue hire, production space birmingham, dance studio hire, class venue birmingham, rehearsal space, affordable venue hire',
  openGraph: {
    title: 'Venue Hire Birmingham | Dry Hire Event Space | LUXE VENUE',
    description: 'Flexible dry hire venue in Birmingham city centre. Perfect for events, classes, productions & celebrations. LED lighting, professional A/V, 70 capacity. Book your viewing today.',
    url: 'https://luxevenue.co.uk/venue-hire-birmingham',
    siteName: 'LUXE VENUE',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function VenueHirePage() {
  const faqs = [
    {question:'Is alcohol allowed?',answer:'No – Luxe Venue operates as a non-alcoholic / dry hire space. We specialise in family-friendly and community events.'},
    {question:'Can I book the space weekly for classes?',answer:'Yes, we welcome regular class bookings (yoga, fitness, rehearsals). Tell us your ideal days and times and we\'ll confirm a recurring slot if available.'},
    {question:"What's included in the hire?",answer:'Hall space for your booked hours plus standard cleaning before and after. Extras (catering, décor, photography) are booked separately.'},
    {question:'What are your hire hours?',answer:'We accommodate flexible timings for mornings, afternoons, and evenings. Specific hours depend on availability – enquire for your preferred slot.'},
    {question:'How do I secure my date?',answer:'A deposit confirms your booking, with the balance due before the event. Our team will outline everything in your booking email.'},
    {question:'Can I use it for photo/video shoots?',answer:'Absolutely! Our 8m × 9m space works great as a photo studio hire in Birmingham. Bring your own lighting and equipment.'},
  ]

  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://luxevenue.co.uk' },
    { name: 'Venue Hire Birmingham', url: 'https://luxevenue.co.uk/venue-hire-birmingham' },
  ])
  const eventVenueSchema = generateEventVenueSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventVenueSchema) }}
      />
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black-primary to-blue-900/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-4">
                <span className="text-purple-300 font-semibold text-sm">8m × 9m • Dry Hire • Non-Alcoholic</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Small Hall & Studio Hire
                </span><br/>
                <span className="text-white text-2xl sm:text-3xl lg:text-4xl">Birmingham City Centre (B12)</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
                An intimate 8m × 9m blank-canvas hall – perfect for classes, rehearsals, small shows, community events & creative shoots
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a href="#hire-form" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                  Check Availability & Prices
                </a>
                <a href="tel:+447391222884" className="px-6 py-3 rounded-full border-2 border-purple-400 text-purple-300 font-semibold hover:bg-purple-500 hover:text-white transition-all">
                  Book a Viewing
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                <div>✓ Up to 70 guests</div>
                <div>✓ Non-alcoholic</div>
                <div>✓ Your own suppliers</div>
              </div>
            </div>

            {/* Visual Gallery Grid - 8 Clickable Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Link href="/venue-hire/theatre-rehearsal-space-birmingham" className="relative h-48 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/30 transition-all group">
                <Image 
                  src="/rehearsal.jpg" 
                  alt="Theatre rehearsal space hire Birmingham - small hall for drama groups and performance rehearsals near city centre" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Theatre Rehearsals →</span>
                </div>
              </Link>
              
              <Link href="/venue-hire/comedy-night-venue-birmingham" className="relative h-48 rounded-xl overflow-hidden border border-pink-500/30 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/30 transition-all group">
                <Image 
                  src="/comedy-night.jpg" 
                  alt="Comedy venue Birmingham - small intimate hall hire for stand-up comedy shows and open mic nights" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Comedy Nights →</span>
                </div>
              </Link>
              
              <Link href="/venue-hire/ladies-event-venue-birmingham" className="relative h-48 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/30 transition-all group">
                <Image 
                  src="/ladies-night.jpg" 
                  alt="Ladies night venue Birmingham - halal non-alcoholic event space for sisters gatherings and Muslim women events" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Ladies' Events →</span>
                </div>
              </Link>
              
              <Link href="/venue-hire/photo-video-studio-hire-birmingham" className="relative h-48 rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30 transition-all group">
                <Image 
                  src="/production-setup.jpg" 
                  alt="Photo studio hire Birmingham - professional photography and video production space with equipment setup" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Photo/Video Shoots →</span>
                </div>
              </Link>
              
              <Link href="/venue-hire/corporate-event-space-birmingham" className="relative h-48 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/30 transition-all group">
                <Image 
                  src="/corporate-event.jpg" 
                  alt="Corporate event space Birmingham - small hall hire for business workshops training sessions and team meetings" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Corporate Events →</span>
                </div>
              </Link>
              
              <Link href="/venue-hire/gender-reveal-venue-birmingham" className="relative h-48 rounded-xl overflow-hidden border border-rose-500/30 hover:border-rose-400 hover:shadow-xl hover:shadow-rose-500/30 transition-all group">
                <Image 
                  src="/gender-reveal.jpg" 
                  alt="Gender reveal party venue Birmingham - small hall hire for baby shower and gender announcement celebrations" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Gender Reveals →</span>
                </div>
              </Link>
              
              <Link href="/venue-hire/martial-arts-yoga-studio-birmingham" className="relative h-48 rounded-xl overflow-hidden border border-orange-500/30 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/30 transition-all group">
                <Image 
                  src="/karate-classes.jpg" 
                  alt="Martial arts class space Birmingham - karate dojo and self defence training hall hire for fitness classes" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Martial Arts/Yoga →</span>
                </div>
              </Link>
              
              <Link href="/venue-hire/qawali-night-venue-birmingham" className="relative h-48 rounded-xl overflow-hidden border border-green-500/30 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/30 transition-all group">
                <Image 
                  src="/qawali-night.jpg" 
                  alt="Qawali night venue Birmingham - Islamic music event space nasheed performance hall hire for Muslim community gatherings" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Qawali Nights →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* About the Space - Compact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-950/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6 text-center">
              A <span className="text-purple-400">blank-canvas hall</span> that works like a studio
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Luxe Venue is a flexible <strong className="text-white">small event space for hire in Birmingham</strong> (B12). 
              With <strong className="text-white">8m × 9m (~72m²)</strong> of open floor space, it's perfect for 
              <strong className="text-white"> yoga classes</strong>, <strong className="text-white">theatre rehearsals</strong>, 
              <strong className="text-white">comedy nights</strong>, workshops, and <strong className="text-white">photo/video shoots</strong>. 
              <strong className="text-purple-400">Dry-hire, non-alcoholic venue</strong> – bring your own suppliers or use our trusted partners.
            </p>
          </div>
        </section>

        {/* What Can You Use It For - Interactive Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                What our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">8m × 9m space</span> is perfect for
              </h2>
              <p className="text-gray-400">Click each category to learn more (dedicated pages coming soon)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Classes & Wellbeing */}
              <div className="group p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧘</div>
                <h3 className="text-xl font-bold text-purple-300 mb-4">Classes & Wellbeing</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <Link href="#" className="hover:text-purple-400 transition-colors">Yoga classes Birmingham</Link></li>
                  <li>• <Link href="#" className="hover:text-purple-400 transition-colors">Pilates & barre classes</Link></li>
                  <li>• Meditation circles</li>
                  <li>• Martial arts / self-defence</li>
                  <li>• Dance rehearsals</li>
                </ul>
              </div>

              {/* Shows & Performances */}
              <div className="group p-6 bg-gradient-to-br from-pink-900/30 to-pink-800/10 rounded-xl border border-pink-500/30 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
                <h3 className="text-xl font-bold text-pink-300 mb-4">Shows & Performances</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <Link href="#" className="hover:text-pink-400 transition-colors">Theatre rehearsals Birmingham</Link></li>
                  <li>• <Link href="#" className="hover:text-pink-400 transition-colors">Comedy shows & open-mic</Link></li>
                  <li>• Poetry & spoken word</li>
                  <li>• Nasheed nights</li>
                  <li>• Community talks & charity events</li>
                </ul>
              </div>

              {/* Social & Family */}
              <div className="group p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl border border-blue-500/30 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold text-blue-300 mb-4">Social & Family</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <Link href="#" className="hover:text-blue-400 transition-colors">Ladies' nights / sisters' gatherings</Link></li>
                  <li>• Baby showers & gender reveals</li>
                  <li>• Mehndi / dholki (dry)</li>
                  <li>• <Link href="#" className="hover:text-blue-400 transition-colors">Nikah ceremonies (non-alcoholic)</Link></li>
                  <li>• Birthday & anniversary parties</li>
                </ul>
              </div>

              {/* Creative Studio */}
              <div className="group p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 rounded-xl border border-cyan-500/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Creative Studio Hire</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <Link href="#" className="hover:text-cyan-400 transition-colors">Photo studio hire Birmingham</Link></li>
                  <li>• Video / content shoots</li>
                  <li>• Product shoots & lookbooks</li>
                  <li>• Brand content creation</li>
                  <li>• Influencer shoots</li>
                </ul>
              </div>

              {/* Corporate & Education */}
              <div className="group p-6 bg-gradient-to-br from-indigo-900/30 to-indigo-800/10 rounded-xl border border-indigo-500/30 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💼</div>
                <h3 className="text-xl font-bold text-indigo-300 mb-4">Corporate & Education</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <Link href="#" className="hover:text-indigo-400 transition-colors">Workshops & training Birmingham</Link></li>
                  <li>• Team away days</li>
                  <li>• Networking evenings</li>
                  <li>• Study groups</li>
                  <li>• Brainstorming sessions</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-gray-500 text-xs mt-8 italic max-w-4xl mx-auto leading-relaxed">
              <strong className="text-gray-400">Popular searches:</strong> small party venue Birmingham • hall hire near me Birmingham • small event space Birmingham • dry hire venue Birmingham • yoga studio hire Birmingham • theatre rehearsal space Birmingham • photo studio hire Birmingham • comedy venue Birmingham • workshop space Birmingham
            </p>
          </div>
        </section>

        {/* Space & Capacity - Side by Side */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-12">
              Space & <span className="text-purple-400">Capacity</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-surface-dark rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">Dimensions</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg">8m</div>
                    <div className="text-gray-300"><strong className="text-white">Width:</strong> 8 metres (26 feet)</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">9m</div>
                    <div className="text-gray-300"><strong className="text-white">Length:</strong> 9 metres (30 feet)</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">72m²</div>
                    <div className="text-gray-300"><strong className="text-white">Total:</strong> ~72 square metres</div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-surface-dark rounded-2xl border border-blue-500/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">Layout Options</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <strong className="text-white">Theatre style:</strong> <span className="text-gray-300">Up to 60 seated (shows, talks, workshops)</span>
                  </div>
                  <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
                    <strong className="text-white">Cabaret / Round tables:</strong> <span className="text-gray-300">40-45 guests</span>
                  </div>
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <strong className="text-white">Studio / Class layout:</strong> <span className="text-gray-300">12-20 yoga mats or open-floor</span>
                  </div>
                  <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <strong className="text-white">Standing / Mixed:</strong> <span className="text-gray-300">60-70 for social events</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">
                  Exact capacity depends on layout and equipment. We'll help you plan during viewing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dry Hire Policy - Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-6">
              Dry hire, <span className="text-purple-400">your suppliers</span>, your rules
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Luxe Venue operates as a <strong className="text-purple-400">dry-hire, non-alcoholic space</strong> – perfect for family-friendly, faith-friendly and community events.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-purple-900/20 rounded-xl border border-purple-500/30">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-bold text-white mb-2">Dry Hire Hall Birmingham</h3>
                <p className="text-sm text-gray-300">Pay only for space and agreed time</p>
              </div>
              <div className="p-6 bg-pink-900/20 rounded-xl border border-pink-500/30">
                <div className="text-4xl mb-3">🚫🍷</div>
                <h3 className="text-lg font-bold text-white mb-2">Non-Alcoholic Venue</h3>
                <p className="text-sm text-gray-300">Ideal for community & faith-based events</p>
              </div>
              <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-500/30">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-lg font-bold text-white mb-2">Bring Your Own</h3>
                <p className="text-sm text-gray-300">Caterers, décor, AV, entertainment</p>
              </div>
              <div className="p-6 bg-cyan-900/20 rounded-xl border border-cyan-500/30">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-lg font-bold text-white mb-2">Trusted Partners</h3>
                <p className="text-sm text-gray-300">Halal caterers available</p>
              </div>
              <div className="p-6 bg-indigo-900/20 rounded-xl border border-indigo-500/30">
                <div className="text-4xl mb-3">📸</div>
                <h3 className="text-lg font-bold text-white mb-2">Photography & Video</h3>
                <p className="text-sm text-gray-300">Event coverage available</p>
              </div>
              <div className="p-6 bg-purple-900/20 rounded-xl border border-purple-500/30">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-lg font-bold text-white mb-2">Décor & Styling</h3>
                <p className="text-sm text-gray-300">Styling partners on request</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Compact Carousel Style */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-primary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-12">
              Events our guests <span className="text-purple-400">keep coming back for</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {quote:"Perfect little space for our weekly yoga classes – clean, calm and easy to book.",name:"Sarah M.",event:"Yoga Instructor"},
                {quote:"We used Luxe Venue for a comedy night – intimate vibe, great sound and our crowd loved it.",name:"Comedy Collective",event:"Monthly Shows"},
                {quote:"Ideal size for our ladies' mehndi – enough room to party but still felt warm and personal.",name:"Amina K.",event:"Pre-Wedding Event"},
              ].map((t,i)=>(
                <div key={i} className="p-6 bg-surface-dark rounded-xl border border-purple-500/20 hover:border-purple-400 transition-all">
                  <div className="text-purple-400 text-2xl mb-3">★★★★★</div>
                  <p className="text-gray-300 italic text-sm mb-4">"{t.quote}"</p>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Hire Form */}
        <VenueHireForm />

        {/* FAQ - Accordion Style */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-950/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
              FAQs about <span className="text-purple-400">hiring Luxe Venue</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((f,i)=>(
                <div key={i} className="p-6 bg-surface-dark rounded-xl border border-purple-500/20 hover:border-purple-400 transition-all">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.question}</h3>
                  <p className="text-gray-300 text-sm">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
              Birmingham location <span className="text-blue-400">that's easy to reach</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Based in <strong className="text-white">Birmingham (B12)</strong>, near city centre. Easy access from Digbeth, Sparkhill, Small Heath, and across West Midlands.
            </p>
            <p className="text-xs text-gray-500 italic">
              Ideal if searching: "small hall hire near Birmingham city centre", "Digbeth event space", "small party venue near me Birmingham"
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
              Ready to hire your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">perfect space</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10">Book a free viewing or check availability today</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#hire-form" className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all">
                Get Quote Now
              </a>
              <a href="tel:+447391222884" className="px-10 py-5 rounded-full border-2 border-purple-400 text-purple-300 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all">
                📞 Call: 07391 222884
              </a>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
