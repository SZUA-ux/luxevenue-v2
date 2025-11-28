import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringServiceMetadata, generateCateringFAQSchema } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringServiceMetadata('marquee')

const faqs = [
  {
    question: 'How much does marquee catering cost in Birmingham?',
    answer: 'Marquee and outdoor event catering in Birmingham starts from £18 per person for buffet service. Our halal marquee catering includes complete buffet setup with chafing dishes, gas burners to keep food hot outdoors, professional serving staff, marquee-grade equipment, and full service. Suitable for weddings, garden parties, and festivals up to 500 guests.'
  },
  {
    question: 'Do you provide equipment for outdoor marquee catering?',
    answer: 'Yes! We provide all professional equipment for marquee catering including heavy-duty chafing dishes, gas burners (no electricity needed), buffet tables, tablecloths, serving utensils, and food covers. Our equipment is specifically designed for outdoor use. We handle complete setup and breakdown. Staff available to serve throughout your event.'
  },
  {
    question: 'Can you cater for garden weddings and outdoor celebrations in Birmingham?',
    answer: 'Absolutely! We specialize in outdoor marquee catering for garden weddings, outdoor nikah ceremonies, Eid celebrations, community festivals, and private garden parties across Birmingham and Warwickshire. We have catered outdoor events from 50 to 500 guests. Our team manages food temperature, hygiene, and presentation despite outdoor conditions.'
  },
  {
    question: 'What halal food options do you offer for marquee events?',
    answer: 'Our marquee catering menu features Pakistani and Indian cuisine: biryani, karahi, curry, BBQ seekh kebabs, tandoori chicken, grilled items, samosas, pakoras, naan, rice, and desserts. All food is 100% halal certified. Buffet or food station setup. Live cooking demonstrations available. Custom menus for themed outdoor events. Vegetarian and vegan options included.'
  }
]

export default function MarqueeCateringPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'Caterer'],
    name: 'LUXE VENUE Marquee Catering',
    description: 'Professional marquee and outdoor event catering specialist in Birmingham. Pakistani and Indian halal cuisine for garden weddings, festivals, and outdoor celebrations.',
    url: 'https://luxevenue.co.uk/catering/marquee-catering-birmingham',
    telephone: '+447391222884',
    email: 'info@luxevenue.co.uk',
    priceRange: '£18-£25 per person',
    servesCuisine: ['Pakistani', 'Indian', 'Halal', 'Outdoor Catering', 'BBQ'],
    hasMenu: {
      '@type': 'Menu',
      name: 'Marquee Catering Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Outdoor Buffet Menu',
          description: 'Complete marquee catering with setup',
          offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'GBP' }
        },
        {
          '@type': 'MenuSection',
          name: 'Premium BBQ Package',
          description: 'Live cooking and grilled specialties',
          offers: { '@type': 'Offer', price: '22.00', priceCurrency: 'GBP' }
        }
      ]
    }
  }
  
  const faqSchema = generateCateringFAQSchema('Marquee Catering Birmingham', faqs)
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://luxevenue.co.uk/catering' },
      { '@type': 'ListItem', position: 3, name: 'Marquee Catering', item: 'https://luxevenue.co.uk/catering/marquee-catering-birmingham' }
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
                Marquee & Outdoor Event Catering Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Professional Halal Catering for Garden Weddings & Festivals</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Expert <strong className="text-white">marquee catering</strong> and <strong className="text-white">outdoor event catering</strong> across Birmingham. Pakistani & Indian cuisine from £18pp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Get Marquee Catering Quote
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Birmingham's Premier Marquee & Outdoor Catering Specialist</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Planning a <strong className="text-white">garden wedding</strong>, <strong className="text-white">outdoor nikah ceremony</strong>, <strong className="text-white">marquee celebration</strong>, or <strong className="text-white">community festival</strong> in Birmingham? 
                LUXE VENUE delivers professional marquee catering with authentic Pakistani and Indian halal cuisine specifically designed for outdoor events. We understand the unique 
                challenges of outdoor catering - maintaining food temperature, managing hygiene in open environments, and creating impressive buffet displays that withstand the British weather.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our marquee catering menu features dishes perfect for outdoor celebrations: fragrant chicken and lamb biryani cooked with aromatic basmati rice, rich karahi with tender 
                meat and fresh tomatoes, flavorful curry options with authentic masala spices, BBQ seekh kebabs and tikka pieces grilled fresh, crispy samosas and pakoras for starters, 
                fresh tandoori naan bread, pilau rice, mixed salad, raita, and traditional desserts. Every dish is prepared fresh on your event day using 100% halal certified ingredients 
                and authentic Pakistani spices. Our experience ensures food stays hot and delicious throughout outdoor events, even in marquees without electricity.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We provide complete marquee catering service across Birmingham, Solihull, Walsall, Sutton Coldfield, Wolverhampton, and throughout the West Midlands and Warwickshire. 
                Our team brings professional marquee-grade equipment including heavy-duty chafing dishes with gas burners (independent of electricity), insulated food containers, 
                commercial buffet tables with elegant tablecloths, professional serving utensils, food covers for hygiene, and portable handwashing stations. Everything needed for 
                safe, attractive outdoor food service. We handle complete setup before your event and full breakdown afterward.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Popular for garden weddings in private homes, outdoor walima receptions at farms and estates, community Eid celebrations in parks, charity fundraising events, 
                school fetes, corporate summer parties, festival food stalls, and large family gatherings. We have catered outdoor events from intimate garden parties with 50 guests 
                to major community festivals with 500+ attendees. Our uniformed serving staff can manage buffet service throughout your event, replenishing dishes, maintaining presentation, 
                and ensuring food safety standards. Live cooking stations available for BBQ and tandoori demonstrations that add excitement to outdoor celebrations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">🎪 Outdoor Events</h3>
                <p className="text-gray-300 text-sm">Marquee weddings, garden parties, festivals, outdoor celebrations. 50-500 guests. Professional setup and staffing.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Marquee Pricing</h3>
                <p className="text-gray-300 text-sm">From £18pp outdoor buffet, £22pp BBQ package. Includes equipment, gas burners, setup, staff. Custom packages available.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">⚡ Professional Equipment</h3>
                <p className="text-gray-300 text-sm">Gas-powered chafing dishes. Heavy-duty marquee equipment. Food stays hot outdoors. Hygiene-compliant setup.</p>
              </div>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Why Choose LUXE VENUE for Outdoor & Marquee Catering?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Outdoor catering requires specialist expertise that not all caterers possess. LUXE VENUE has years of experience managing the complexities of marquee and garden events. 
                Our team understands how to maintain food at safe serving temperatures in outdoor conditions, how to protect food from insects and environmental contamination, and how 
                to create beautiful buffet displays that remain impressive throughout outdoor events. We use commercial-grade equipment specifically designed for outdoor catering, not 
                standard indoor chafing dishes that struggle without electricity.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Pakistani and Indian cuisine is particularly suited to outdoor marquee events. The bold, authentic flavors shine in outdoor settings where guests appreciate hearty, 
                satisfying food. Biryani maintains its texture and taste in outdoor serving conditions. Curries stay flavorful when kept warm in professional equipment. BBQ items like 
                seekh kebabs and tikka pieces can be grilled fresh at your venue for maximum impact and aroma. We can set up live cooking stations where our chefs prepare food on-site, 
                creating an interactive experience that guests love at garden weddings and festivals.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Planning an outdoor event in Birmingham? Contact our marquee catering team for a detailed quote. We visit your venue beforehand to assess setup requirements, discuss 
                menu options suited to outdoor service, and plan logistics. We work with marquee hire companies, wedding planners, and event coordinators to ensure seamless service. 
                Full public liability insurance and food hygiene certification. Backup plans for weather contingencies. References available from previous garden weddings and outdoor 
                events. Free menu tasting for marquee bookings over 100 guests.
              </p>
            </div>

            <div className="bg-black-secondary p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Marquee Catering FAQs</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-surface-dark p-6 rounded-lg border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Need an Indoor Venue Option?</h3>
              <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Weather concerns for your outdoor event? LUXE VENUE also offers a beautiful indoor event space in Birmingham B12 as a backup option or for the full celebration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/venue-hire-birmingham" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all text-center">
                  View Indoor Venue
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Marquee Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your outdoor event catering. Professional marquee service, authentic halal cuisine, perfect for garden weddings and celebrations.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-rose-gold text-black font-bold hover:bg-rose-gold-light transition-all">
                  Get Free Quote
                </Link>
                <Link href="/catering" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all">
                  View All Catering Services
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
