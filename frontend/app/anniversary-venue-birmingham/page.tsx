import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Anniversary Venue Birmingham | 1st, 10th, 25th, 50th Anniversary Party Venue | LUXE VENUE',
  description: 'Celebrate your anniversary at Birmingham\'s premier venue. Perfect for milestone anniversaries - 1st, 10th, 25th, 50th. Intimate space for 20-70 guests. Halal catering available. Book your anniversary celebration today.',
  keywords: 'anniversary venue birmingham, wedding anniversary venue, 25th anniversary party venue, 50th anniversary venue, silver anniversary venue birmingham, golden anniversary venue, milestone anniversary celebration, anniversary party hall birmingham',
  alternates: {
    canonical: 'https://luxevenue.co.uk/anniversary-venue-birmingham',
  },
  openGraph: {
    title: 'Anniversary Venue Birmingham | Milestone Celebrations | LUXE VENUE',
    description: 'Elegant anniversary venue in Birmingham for 1st to 50th milestone celebrations. Intimate setting, halal catering, professional service. Celebrate your love story beautifully.',
    url: 'https://luxevenue.co.uk/anniversary-venue-birmingham',
    siteName: 'LUXE VENUE',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function AnniversaryVenuePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'LUXE VENUE - Anniversary Venue Birmingham',
    description: 'Premier anniversary celebration venue in Birmingham. Perfect for milestone anniversaries from 1st to 50th year celebrations.',
    url: 'https://luxevenue.co.uk/anniversary-venue-birmingham',
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
        name: 'What anniversary milestones can we celebrate at LUXE VENUE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LUXE VENUE is perfect for all anniversary milestones including 1st (Paper), 5th (Wood), 10th (Tin), 15th (Crystal), 20th (China), 25th (Silver), 30th (Pearl), 40th (Ruby), 50th (Golden), and 60th (Diamond) anniversaries. We accommodate intimate celebrations for 20-70 guests with personalized décor and catering to match your milestone theme.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to book an anniversary venue in Birmingham?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anniversary venue hire at LUXE VENUE starts from £800 for 4 hours including venue access, basic décor, LED lighting, and A/V system. Full packages with halal catering start from £35 per person. We offer customizable packages for silver (25th), ruby (40th), and golden (50th) anniversary celebrations. Contact us for a personalized quote based on guest numbers and preferences.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide anniversary party catering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer complete anniversary catering packages with authentic Pakistani and Indian halal cuisine. Choose from elegant sit-down dinners, buffet service, or canapé receptions. Menus range from £25-£40 per person including starters, mains, desserts, and beverages. We can customize menus to reflect your cultural heritage or dietary preferences. Complimentary anniversary cake service available.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you help with anniversary decorations in Birmingham?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! LUXE VENUE provides anniversary décor packages tailored to your milestone. Silver (25th) packages include silver and white theming. Golden (50th) packages feature gold accents and elegant table settings. We offer backdrop installations, flower arrangements, table centrepieces, ambient lighting, and personalized anniversary banners. Our event coordinator helps design the perfect ambiance for your celebration.'
        }
      }
    ]
  }
  
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Anniversary Venue', item: 'https://luxevenue.co.uk/anniversary-venue-birmingham' }
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
                Anniversary Venue Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Celebrate Your Milestone Anniversary in Style</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Birmingham's elegant <strong className="text-white">anniversary venue</strong> for 1st to 50th milestone celebrations. Intimate setting for 20-70 guests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Book Anniversary Venue
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Birmingham's Premier Anniversary Celebration Venue</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Celebrating your <strong className="text-white">wedding anniversary</strong> is a special moment that deserves an equally special venue. Whether you are marking your <strong className="text-white">1st anniversary</strong> as newlyweds, 
                your <strong className="text-white">10th anniversary</strong> milestone, your <strong className="text-white">25th silver anniversary</strong>, or your remarkable <strong className="text-white">50th golden anniversary</strong>, 
                LUXE VENUE provides the perfect intimate setting in Birmingham to celebrate your enduring love story with family and close friends.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our elegant Birmingham venue specializes in <strong className="text-white">anniversary parties</strong> that honor the journey you have shared together. Located at 86 Leopold Street in Birmingham B12, 
                our beautifully appointed space accommodates 20 to 70 guests, creating an intimate atmosphere perfect for meaningful anniversary celebrations. Unlike large, impersonal banquet halls, 
                LUXE VENUE offers the warmth and exclusivity that milestone anniversaries deserve, allowing you to celebrate surrounded by the people who have been part of your journey.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We understand that different anniversary milestones call for different celebration styles. Your <strong className="text-white">1st paper anniversary</strong> might be a romantic dinner with close friends. 
                Your <strong className="text-white">10th tin anniversary</strong> could be a lively family gathering. Your <strong className="text-white">25th silver anniversary</strong> deserves an elegant celebration 
                with silver-themed décor and sophisticated catering. Your <strong className="text-white">40th ruby anniversary</strong> calls for rich, warm tones and a refined atmosphere. And your 
                <strong className="text-white"> 50th golden anniversary</strong> - a truly remarkable achievement - merits the grandest celebration with gold accents, exceptional cuisine, and heartfelt tributes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                LUXE VENUE provides complete anniversary celebration packages tailored to your milestone and vision. Our team works closely with you to design décor that reflects your anniversary year, 
                whether that means romantic pastels for early anniversaries, elegant silver and crystal for 25-year milestones, or luxurious gold accents for golden anniversaries. We handle all details 
                including venue setup, catering, lighting, music, and coordination, allowing you to simply enjoy celebrating this special day with your loved ones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">🎉 All Milestones</h3>
                <p className="text-gray-300 text-sm">1st to 60th anniversaries. Silver (25th), Ruby (40th), Golden (50th), Diamond (60th). Intimate 20-70 guests.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Anniversary Packages</h3>
                <p className="text-gray-300 text-sm">From £800 venue hire. Complete packages with catering from £35pp. Customizable to your milestone theme.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">✨ Full Service</h3>
                <p className="text-gray-300 text-sm">Décor, catering, lighting, A/V. Halal options. Anniversary cake service. Dedicated event coordinator.</p>
              </div>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Anniversary Catering & Dining Options</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Food is central to any anniversary celebration, and LUXE VENUE offers exceptional catering that honors both your milestone and your cultural heritage. For Birmingham's diverse communities, 
                we specialize in authentic <strong className="text-white">halal catering</strong> featuring Pakistani and Indian cuisine, alongside international menu options to suit all preferences. 
                Whether you envision an elegant sit-down dinner, a social buffet reception, or sophisticated canapé service, our experienced catering team creates memorable dining experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our <strong className="text-white">anniversary dinner menus</strong> feature refined dishes perfect for milestone celebrations: succulent lamb karahi with authentic spices, aromatic chicken biryani 
                with saffron-infused rice, tandoori mixed grill with fresh naan, elegant vegetarian options including paneer specialties, fresh salads and chutneys, and exquisite desserts. For 
                <strong className="text-white"> silver and golden anniversary</strong> celebrations, we offer premium menu upgrades with specialty dishes and enhanced presentation that reflects the significance of your milestone.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We understand that anniversary celebrations often bring together multiple generations and dietary preferences. Our catering team accommodates all requirements: vegetarian and vegan options, 
                mild spice levels for elderly guests or children, gluten-free alternatives, and nut-free preparations. We also provide complimentary <strong className="text-white">anniversary cake service</strong>, 
                whether you bring your own special cake or commission one from our recommended bakers. Our attentive serving staff ensure seamless dining service throughout your celebration, allowing you 
                to focus on creating memories with your guests.
              </p>
            </div>

            <div className="bg-black-secondary p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Anniversary Venue FAQs</h2>
              <div className="space-y-6">
                <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">What anniversary milestones can we celebrate at LUXE VENUE?</h3>
                  <p className="text-gray-300 leading-relaxed">LUXE VENUE is perfect for all anniversary milestones including 1st (Paper), 5th (Wood), 10th (Tin), 15th (Crystal), 20th (China), 25th (Silver), 30th (Pearl), 40th (Ruby), 50th (Golden), and 60th (Diamond) anniversaries. We accommodate intimate celebrations for 20-70 guests with personalized décor and catering to match your milestone theme.</p>
                </div>
                <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">How much does it cost to book an anniversary venue in Birmingham?</h3>
                  <p className="text-gray-300 leading-relaxed">Anniversary venue hire at LUXE VENUE starts from £800 for 4 hours including venue access, basic décor, LED lighting, and A/V system. Full packages with halal catering start from £35 per person. We offer customizable packages for silver (25th), ruby (40th), and golden (50th) anniversary celebrations. Contact us for a personalized quote based on guest numbers and preferences.</p>
                </div>
                <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">Do you provide anniversary party catering?</h3>
                  <p className="text-gray-300 leading-relaxed">Yes! We offer complete anniversary catering packages with authentic Pakistani and Indian halal cuisine. Choose from elegant sit-down dinners, buffet service, or canapé receptions. Menus range from £25-£40 per person including starters, mains, desserts, and beverages. We can customize menus to reflect your cultural heritage or dietary preferences. Complimentary anniversary cake service available.</p>
                </div>
                <div className="bg-surface-dark p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">Can you help with anniversary decorations in Birmingham?</h3>
                  <p className="text-gray-300 leading-relaxed">Absolutely! LUXE VENUE provides anniversary décor packages tailored to your milestone. Silver (25th) packages include silver and white theming. Golden (50th) packages feature gold accents and elegant table settings. We offer backdrop installations, flower arrangements, table centrepieces, ambient lighting, and personalized anniversary banners. Our event coordinator helps design the perfect ambiance for your celebration.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Need Anniversary Catering Only?</h3>
              <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Celebrating at home or another venue? We also offer anniversary catering delivery across Birmingham with our authentic halal cuisine and professional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/catering" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all text-center">
                  View Catering Services
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Anniversary Celebration?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your milestone anniversary party. Intimate venue, elegant décor, exceptional catering. Celebrate your love story beautifully in Birmingham.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-rose-gold text-black font-bold hover:bg-rose-gold-light transition-all">
                  Get Free Quote
                </Link>
                <Link href="/wedding-venue-birmingham" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all">
                  View Wedding Venue
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
