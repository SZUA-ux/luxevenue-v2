import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Engagement Party Venue Birmingham | Intimate Engagement Celebration Venue | LUXE VENUE',
  description: 'Perfect engagement party venue in Birmingham for 20-70 guests. Elegant setting for Asian, Muslim, and multicultural engagement celebrations. Halal catering available. Book your engagement venue today.',
  keywords: 'engagement party venue birmingham, engagement venue, asian engagement venue, muslim engagement party, engagement celebration venue, ring ceremony venue birmingham, small engagement venue, intimate engagement party',
  alternates: {
    canonical: 'https://luxevenue.co.uk/engagement-party-venue-birmingham',
  },
  openGraph: {
    title: 'Engagement Party Venue Birmingham | Celebrate Your Engagement | LUXE VENUE',
    description: 'Beautiful engagement venue in Birmingham for intimate celebrations. Perfect for Asian, Muslim, and multicultural engagements. Halal catering, elegant décor, professional service.',
    url: 'https://luxevenue.co.uk/engagement-party-venue-birmingham',
    siteName: 'LUXE VENUE',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function EngagementPartyVenuePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'LUXE VENUE - Engagement Party Venue Birmingham',
    description: 'Premier engagement celebration venue in Birmingham. Perfect for Asian, Muslim, and multicultural engagement parties with halal catering and elegant décor.',
    url: 'https://luxevenue.co.uk/engagement-party-venue-birmingham',
    telephone: '+447391222884',
    email: 'info@luxevenue.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '86 Leopold Street',
      addressLocality: 'Birmingham',
      addressRegion: 'West Midlands',
      postalCode: 'B12 0UD',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.4736',
      longitude: '-1.8910'
    },
    maximumAttendeeCapacity: 70,
    isAccessibleForFree: false,
    publicAccess: true,
  }
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does an engagement party venue cost in Birmingham?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Engagement party venue hire at LUXE VENUE starts from £600 for 4 hours including venue access, basic décor, LED lighting, and professional A/V system. Complete engagement packages with halal catering start from £30 per person. We offer customizable packages for Asian engagement ceremonies, ring ceremonies, and multicultural celebrations. Contact us for a detailed quote based on your guest count and requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you cater for Asian and Muslim engagement parties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! LUXE VENUE specializes in Asian and Muslim engagement celebrations. We provide 100% halal catering with authentic Pakistani and Indian cuisine, understand cultural requirements for gender-separated seating if needed, offer alcohol-free celebrations, and can accommodate traditional engagement customs like ring exchange ceremonies, mangni ceremonies, and family introductions. Our team has extensive experience with South Asian and Middle Eastern engagement traditions.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is included in an engagement party package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our engagement packages include exclusive venue hire for 4-6 hours, elegant décor with backdrop and table settings, professional LED lighting with customizable colors, premium A/V system for music and speeches, dedicated event coordinator, setup and breakdown service, and optional halal catering from £30pp. Additional services include photography packages, floral arrangements, engagement cake, and custom signage with your names.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many guests can you accommodate for an engagement party?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LUXE VENUE comfortably accommodates 20 to 70 guests for engagement parties. This intimate capacity is perfect for close family and friends, creating a warm atmosphere for this special milestone. Our flexible layout allows for seated dining, standing reception, or mixed arrangements. For traditional Asian engagements with family-focused celebrations, this size is ideal for meaningful interactions between both families.'
        }
      }
    ]
  }
  
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Engagement Party Venue', item: 'https://luxevenue.co.uk/engagement-party-venue-birmingham' }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-heading font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                Engagement Party Venue Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Celebrate Your Engagement in Elegant Surroundings</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Birmingham's intimate <strong className="text-white">engagement party venue</strong> for 20-70 guests. Perfect for Asian, Muslim, and multicultural engagement celebrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Book Engagement Venue
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Birmingham's Perfect Engagement Celebration Venue</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your <strong className="text-white">engagement</strong> marks the beautiful beginning of your journey together, and this special milestone deserves a venue that reflects the joy and excitement 
                of this moment. LUXE VENUE provides Birmingham's most elegant and intimate setting for <strong className="text-white">engagement parties</strong>, <strong className="text-white">ring ceremonies</strong>, 
                <strong className="text-white"> mangni celebrations</strong>, and engagement announcements that bring together both families in a warm, sophisticated atmosphere.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Located in the heart of Birmingham at 86 Leopold Street (B12 0UD), our venue specializes in <strong className="text-white">Asian engagement parties</strong> and <strong className="text-white">Muslim engagement celebrations</strong>, 
                understanding the cultural significance and traditions that make these events so meaningful. Whether you are planning a traditional <strong className="text-white">Pakistani engagement</strong> with formal 
                ring exchange, an <strong className="text-white">Indian engagement ceremony</strong> with family blessings, a <strong className="text-white">Middle Eastern</strong> celebration, or a modern multicultural 
                engagement party, our experienced team ensures every cultural requirement is respected and beautifully executed.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                LUXE VENUE accommodates 20 to 70 guests, creating the perfect intimate scale for engagement celebrations where both families can genuinely connect and celebrate together. Unlike large, 
                impersonal banquet halls, our boutique venue provides the warmth and exclusivity that engagement parties deserve. The space is elegant yet versatile, allowing us to transform it to match 
                your vision - whether you prefer romantic pastels and florals, traditional gold and red Asian themes, sophisticated modern minimalism, or vibrant cultural décor that reflects your heritage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As an <strong className="text-white">alcohol-free venue</strong>, LUXE VENUE is ideal for families seeking a halal, family-friendly environment for their engagement celebration. We provide 
                complete engagement packages including venue hire, elegant décor with professional backdrop for photos, customizable LED lighting to create the perfect ambiance, premium sound system for 
                music and speeches, and optional authentic <strong className="text-white">halal catering</strong> featuring Pakistani and Indian cuisine that impresses guests from both families. Our dedicated 
                event coordinator works closely with you from initial planning through to your celebration day, ensuring every detail reflects your love story and cultural traditions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💍 Perfect Setting</h3>
                <p className="text-gray-300 text-sm">Intimate venue for 20-70 guests. Elegant décor, professional lighting, backdrop for ring ceremony photos.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Engagement Packages</h3>
                <p className="text-gray-300 text-sm">From £600 venue hire. Complete packages with halal catering from £30pp. Customizable to your cultural traditions.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">✅ Cultural Expertise</h3>
                <p className="text-gray-300 text-sm">Asian & Muslim engagement specialists. Halal catering. Alcohol-free. Understanding of cultural customs.</p>
              </div>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Asian & Muslim Engagement Party Expertise</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                LUXE VENUE has extensive experience hosting <strong className="text-white">Pakistani engagement parties</strong>, <strong className="text-white">Indian engagement ceremonies</strong>, 
                <strong className="text-white"> Bangladeshi engagements</strong>, and <strong className="text-white">Arab engagement celebrations</strong> across Birmingham's diverse Muslim and Asian communities. 
                We understand that engagement celebrations vary significantly between cultures and families, and our team adapts to honor your specific traditions and requirements.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For traditional <strong className="text-white">Pakistani mangni ceremonies</strong>, we accommodate formal ring exchange rituals, family introduction customs, gift presentation traditions, and 
                can arrange seating that respects family hierarchies and cultural preferences. For <strong className="text-white">Indian engagement ceremonies</strong>, we support customs like roka, sagai, and 
                ring ceremonies with appropriate décor featuring marigold accents, traditional draping, and cultural elements. We can facilitate gender-separated seating arrangements when requested, provide 
                separate family areas for pre-ceremony preparations, and ensure timing accommodates prayer times if needed.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our <strong className="text-white">halal catering</strong> for engagement parties features authentic Pakistani and Indian cuisine that both families will genuinely enjoy: elegant samosas and 
                pakoras for reception, aromatic biryani and karahi as mains, tandoori platters, vegetarian options, fresh naan and rice, traditional mithai desserts, and beverages. All food is prepared fresh, 
                100% halal certified, and presented beautifully. We understand engagement parties often involve gift exchanges, family speeches, and photo sessions, so our service timing is flexible to 
                accommodate these important moments throughout your celebration.
              </p>
            </div>

            <div className="bg-black-secondary p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Engagement Venue FAQs</h2>
              <div className="space-y-6">
                <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">How much does an engagement party venue cost in Birmingham?</h3>
                  <p className="text-gray-300 leading-relaxed">Engagement party venue hire at LUXE VENUE starts from £600 for 4 hours including venue access, basic décor, LED lighting, and professional A/V system. Complete engagement packages with halal catering start from £30 per person. We offer customizable packages for Asian engagement ceremonies, ring ceremonies, and multicultural celebrations. Contact us for a detailed quote based on your guest count and requirements.</p>
                </div>
                <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">Do you cater for Asian and Muslim engagement parties?</h3>
                  <p className="text-gray-300 leading-relaxed">Yes! LUXE VENUE specializes in Asian and Muslim engagement celebrations. We provide 100% halal catering with authentic Pakistani and Indian cuisine, understand cultural requirements for gender-separated seating if needed, offer alcohol-free celebrations, and can accommodate traditional engagement customs like ring exchange ceremonies, mangni ceremonies, and family introductions. Our team has extensive experience with South Asian and Middle Eastern engagement traditions.</p>
                </div>
                <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">What is included in an engagement party package?</h3>
                  <p className="text-gray-300 leading-relaxed">Our engagement packages include exclusive venue hire for 4-6 hours, elegant décor with backdrop and table settings, professional LED lighting with customizable colors, premium A/V system for music and speeches, dedicated event coordinator, setup and breakdown service, and optional halal catering from £30pp. Additional services include photography packages, floral arrangements, engagement cake, and custom signage with your names.</p>
                </div>
                <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">How many guests can you accommodate for an engagement party?</h3>
                  <p className="text-gray-300 leading-relaxed">LUXE VENUE comfortably accommodates 20 to 70 guests for engagement parties. This intimate capacity is perfect for close family and friends, creating a warm atmosphere for this special milestone. Our flexible layout allows for seated dining, standing reception, or mixed arrangements. For traditional Asian engagements with family-focused celebrations, this size is ideal for meaningful interactions between both families.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Planning Your Wedding Too?</h3>
              <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Loved our venue for your engagement? LUXE VENUE is also perfect for intimate nikah ceremonies and small weddings up to 70 guests with complete wedding packages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/wedding-venue-birmingham" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all text-center">
                  View Wedding Venue
                </Link>
                <Link href="/nikah-venue-birmingham" className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all text-center">
                  View Nikah Venue
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Engagement Venue?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your engagement celebration. Intimate venue, elegant décor, halal catering. Perfect for Asian and Muslim engagements in Birmingham.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-rose-gold text-black font-bold hover:bg-rose-gold-light transition-all">
                  Get Free Quote
                </Link>
                <Link href="/catering" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all">
                  View Catering Options
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
