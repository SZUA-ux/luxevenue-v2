import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringServiceMetadata, generateCateringFAQSchema } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringServiceMetadata('special-occasion')

const faqs = [
  {
    question: 'What special occasions do you cater for in Birmingham?',
    answer: 'We cater for all special occasions in Birmingham including Aqiqah ceremonies, Eid celebrations, graduation parties, engagement announcements, anniversary dinners, religious gatherings (Milad, Muharram), baby showers, family reunions, Ramadan iftars, and milestone birthdays. Flexible menus for 20-200 guests.'
  },
  {
    question: 'How much does special occasion catering cost?',
    answer: 'Special occasion catering starts from £15 per person for buffet service. Our halal Pakistani and Indian menu includes starters, mains, rice, naan, and desserts. Pricing depends on menu choice, guest numbers, and service level. Custom quotes for unique celebrations. Free delivery for 50+ guests across Birmingham.'
  },
  {
    question: 'Do you provide halal catering for religious celebrations?',
    answer: 'Yes! All our food is 100% halal certified. We specialize in religious occasions including Aqiqah, Eid-ul-Fitr, Eid-ul-Adha, Milad-un-Nabi gatherings, Muharram commemorations, Ramadan iftars, and Islamic celebrations. We understand cultural and religious requirements. Respectful, professional service suitable for masjid and community hall events.'
  },
  {
    question: 'Can you customize menus for different types of celebrations?',
    answer: 'Absolutely! We create custom menus for every special occasion. Choose from our Pakistani dishes, Indian specialties, or fusion combinations. Adjust spice levels for mixed age groups. Add specific items your guests love. Accommodate vegetarians, vegans, and dietary restrictions. We work with your budget and preferences to design the perfect celebration menu.'
  }
]

export default function SpecialOccasionCateringPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'Caterer'],
    name: 'LUXE VENUE Special Occasion Catering',
    description: 'Halal catering for all special occasions in Birmingham. Pakistani and Indian cuisine for Aqiqah, Eid, graduations, anniversaries, and family celebrations.',
    url: 'https://luxevenue.co.uk/catering/special-occasion-catering-birmingham',
    telephone: '+447391222884',
    email: 'info@luxevenue.co.uk',
    priceRange: '£15-£20 per person',
    servesCuisine: ['Pakistani', 'Indian', 'Halal', 'Celebration Catering'],
    hasMenu: {
      '@type': 'Menu',
      name: 'Special Occasion Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Standard Celebration Menu',
          description: 'Pakistani dishes for special occasions',
          offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'GBP' }
        },
        {
          '@type': 'MenuSection',
          name: 'Premium Occasion Menu',
          description: 'Extended menu for milestone celebrations',
          offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'GBP' }
        }
      ]
    }
  }
  
  const faqSchema = generateCateringFAQSchema('Special Occasion Catering Birmingham', faqs)
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://luxevenue.co.uk/catering' },
      { '@type': 'ListItem', position: 3, name: 'Special Occasion Catering', item: 'https://luxevenue.co.uk/catering/special-occasion-catering-birmingham' }
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
                Special Occasion Catering Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Halal Catering for Every Celebration & Religious Gathering</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Authentic <strong className="text-white">halal catering</strong> for all special occasions. Pakistani & Indian cuisine from £15pp across Birmingham.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Get Special Occasion Quote
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Birmingham's Trusted Catering for All Special Occasions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Celebrating a special moment? Whether it's an <strong className="text-white">Aqiqah ceremony</strong> for your newborn, <strong className="text-white">Eid celebration</strong> with extended family, 
                <strong className="text-white"> graduation party</strong> marking academic achievement, <strong className="text-white">engagement announcement</strong> joining two families, or any other significant life milestone, 
                LUXE VENUE provides authentic halal catering that makes your celebration memorable. We understand that special occasions deserve special food, and we deliver Pakistani and 
                Indian cuisine with the care and quality your celebration deserves.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our special occasion catering menu offers versatility for every type of celebration. Choose from: aromatic chicken and lamb biryani with tender meat and fragrant basmati rice, 
                rich karahi with authentic Pakistani spices and fresh tomatoes, flavorful curry options including chicken tikka masala and lamb curry, vegetable curry for vegetarian guests, 
                crispy samosas and pakoras as appetizers, succulent seekh kebabs and chapli kebabs, fresh tandoori naan and paratha, golden pilau rice with cumin, mixed salad with raita, 
                and traditional mithai desserts including gulab jamun and barfi. Every dish is prepared fresh using 100% halal certified ingredients and authentic family recipes.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We cater across Birmingham and the West Midlands for all types of special occasions. Popular celebrations include: <strong className="text-white">Aqiqah ceremonies</strong> at home or community halls, 
                <strong className="text-white"> Eid-ul-Fitr and Eid-ul-Adha</strong> family gatherings, <strong className="text-white">Ramadan iftar</strong> dinners for breaking fast, <strong className="text-white">Milad-un-Nabi</strong> 
                gatherings celebrating the Prophet's birthday, <strong className="text-white">Muharram</strong> commemorations, <strong className="text-white">graduation parties</strong> for students completing degrees, 
                <strong className="text-white"> engagement announcements</strong> and small intimate pre-wedding celebrations, <strong className="text-white">anniversary dinners</strong> for couples celebrating milestones, 
                <strong className="text-white"> baby showers</strong> before the arrival of a new family member, <strong className="text-white">family reunions</strong> bringing relatives together, and <strong className="text-white">milestone 
                birthdays</strong> for 18th, 21st, 40th, 50th celebrations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We provide flexible catering service to match your occasion. Options include: full buffet service with professional chafing dishes and uniformed staff managing food throughout 
                your event; drop-off catering where hot food arrives in foil trays ready for you to serve; individually boxed meals for organized seating arrangements; venue setup at community 
                halls, masjids, hotels, or private venues; or home delivery for intimate family celebrations. Minimum 20 guests. Free delivery across Birmingham for 50+ guests. We work with 
                your schedule - morning, afternoon, evening, or late-night service available. Book 72 hours in advance for best menu selection and availability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">🎉 All Occasions</h3>
                <p className="text-gray-300 text-sm">Aqiqah, Eid, graduations, engagements, anniversaries, religious gatherings. 20-200 guests. Custom menus available.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Flexible Pricing</h3>
                <p className="text-gray-300 text-sm">From £15pp standard menu. Custom quotes for unique celebrations. Volume pricing for larger gatherings. Free delivery 50+ guests.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">✅ 100% Halal</h3>
                <p className="text-gray-300 text-sm">All ingredients halal certified. Cultural understanding. Respectful service for religious occasions. Vegetarian options available.</p>
              </div>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Expert Catering for Religious & Cultural Celebrations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                LUXE VENUE has extensive experience catering for Islamic religious occasions and cultural celebrations within Birmingham's diverse Muslim community. We understand the significance 
                of religious gatherings and provide service that respects the spiritual nature of these events. For <strong className="text-white">Aqiqah ceremonies</strong>, we offer family-friendly 
                menus with mild spice options suitable for all ages. For <strong className="text-white">Eid celebrations</strong>, we provide generous buffet spreads that accommodate extended families 
                gathering together. For <strong className="text-white">Ramadan iftars</strong>, we deliver food timed perfectly for Maghrib prayer with dates, samosas, and hot dishes ready to break the fast.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We regularly cater for <strong className="text-white">Milad-un-Nabi</strong> gatherings at masjids and community centers, understanding the need for large quantities of quality food served 
                efficiently to many guests. Our team has catered <strong className="text-white">Muharram</strong> commemorations where simple, respectful presentation is appropriate. We work with masjid 
                committees, Islamic centers, and Muslim community organizations across Birmingham. Our staff understand Islamic etiquette, maintain gender-appropriate service arrangements when requested, 
                and ensure all food handling meets Islamic standards.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For <strong className="text-white">graduation celebrations</strong>, we provide menus that appeal to younger guests while honoring family traditions - combining traditional Pakistani dishes 
                with modern presentation. <strong className="text-white">Engagement announcements</strong> get special attention with elegant buffet displays suitable for the joining of two families. 
                <strong className="text-white"> Anniversary dinners</strong> can be intimate or large, with menus adjusted to match the formality of your celebration. <strong className="text-white">Baby showers</strong> 
                feature lighter, fresh dishes alongside traditional options.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whatever your special occasion, LUXE VENUE provides catering that honors the significance of your celebration. Our food brings people together - the authentic taste of Pakistani and 
                Indian cuisine that guests remember and talk about afterward. We handle the food so you can focus on celebrating with your loved ones. Book early for popular dates, especially during 
                Ramadan, Eid weekends, and graduation season. References available from previous religious and community events. Full food safety certification and public liability insurance.
              </p>
            </div>

            <div className="bg-black-secondary p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Special Occasion Catering FAQs</h2>
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
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Need a Venue for Your Special Occasion?</h3>
              <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Celebrating with 30-70 guests? LUXE VENUE also offers a beautiful event space in Birmingham B12 perfect for Aqiqah ceremonies, engagement parties, and family celebrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/venue-hire-birmingham" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all text-center">
                  View Event Venue
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Special Occasion Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your celebration. Authentic halal Pakistani & Indian cuisine perfect for any special occasion across Birmingham.</p>
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
