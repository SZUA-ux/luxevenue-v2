import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringServiceMetadata, generateCateringFAQSchema } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringServiceMetadata('home-party')

const faqs = [
  {
    question: 'How much does home party catering cost in Birmingham?',
    answer: 'Home party catering in Birmingham starts from £15 per person for buffet delivery. Our authentic Pakistani and Indian menu includes biryani, karahi, curry, samosas, naan, rice, and desserts. Prices include fresh cooking, all serving dishes, utensils, and free delivery for orders over 30 guests. Minimum order 15 people.'
  },
  {
    question: 'Do you deliver halal food to homes in Birmingham for parties?',
    answer: 'Yes! We specialize in home delivery catering across Birmingham and surrounding areas. All our food is 100% halal certified and freshly prepared on the day of your party. We deliver hot, ready-to-serve buffet food in professional chafing dishes or foil trays. Perfect for Eid celebrations, family gatherings, and intimate home parties.'
  },
  {
    question: 'What areas in Birmingham do you deliver home party catering to?',
    answer: 'We deliver home party catering throughout Birmingham including city centre, Edgbaston, Sparkhill, Small Heath, Alum Rock, Handsworth, Erdington, Selly Oak, Balsall Heath, and all surrounding West Midlands areas. Free delivery for 30+ guests. Small delivery charge applies for smaller orders. Evening and weekend delivery available.'
  },
  {
    question: 'Can you cater for small intimate gatherings at home?',
    answer: 'Absolutely! We cater for intimate home gatherings from 15 guests upwards. Perfect for family dinners, birthday celebrations, Eid parties, religious gatherings, and social events at home. Choose from our menu or customize dishes. We provide serving equipment, or you can use your own. Collection option also available from our kitchen.'
  }
]

export default function HomePartyCateringPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'Caterer'],
    name: 'LUXE VENUE Home Party Catering',
    description: 'Pakistani and Indian halal home party catering in Birmingham. Fresh food delivered to your door for family gatherings and celebrations.',
    url: 'https://luxevenue.co.uk/catering/home-party-catering-birmingham',
    telephone: '+447391222884',
    email: 'info@luxevenue.co.uk',
    priceRange: '£15-£18 per person',
    servesCuisine: ['Pakistani', 'Indian', 'Halal', 'Home Delivery Catering'],
    hasMenu: {
      '@type': 'Menu',
      name: 'Home Party Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Pakistani Home Party Menu',
          description: 'Authentic dishes delivered to your home',
          offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'GBP' }
        },
        {
          '@type': 'MenuSection',
          name: 'Premium Home Buffet',
          description: 'Extended menu with special items',
          offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'GBP' }
        }
      ]
    }
  }
  
  const faqSchema = generateCateringFAQSchema('Home Party Catering Birmingham', faqs)
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://luxevenue.co.uk/catering' },
      { '@type': 'ListItem', position: 3, name: 'Home Party Catering', item: 'https://luxevenue.co.uk/catering/home-party-catering-birmingham' }
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
                Home Party Catering Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Pakistani & Indian Halal Food Delivered to Your Door</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Fresh <strong className="text-white">halal home party catering</strong> delivered across Birmingham. Authentic Pakistani & Indian cuisine from £15pp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Get Home Party Quote
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Birmingham's Trusted Home Party Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Planning a <strong className="text-white">family gathering</strong>, <strong className="text-white">Eid celebration</strong>, or <strong className="text-white">intimate home party</strong> in Birmingham? 
                LUXE VENUE delivers authentic halal home party catering with fresh Pakistani and Indian cuisine straight to your door. We understand the importance of great food 
                at family celebrations and provide hassle-free catering service that lets you enjoy your party without the stress of cooking for large groups.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our home party catering menu features family favorites: fragrant chicken biryani with tender meat and aromatic basmati rice, rich lamb karahi cooked with fresh tomatoes 
                and spices, flavorful chicken curry with authentic masala gravy, crispy vegetable samosas with mint chutney, fresh tandoori naan bread, golden pilau rice with cumin, 
                mixed vegetable curry for vegetarian guests, fresh salad, and traditional mithai desserts. Every dish is prepared fresh on your party day using authentic Pakistani 
                spices and 100% halal certified ingredients. No frozen food, no reheating - just authentic taste like homemade cooking.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We deliver home party catering throughout Birmingham and surrounding areas including Sparkhill, Small Heath, Alum Rock, Handsworth, Erdington, Edgbaston, Selly Oak, 
                Balsall Heath, Moseley, Kings Heath, Acocks Green, Washwood Heath, Bordesley Green, Saltley, and all West Midlands postcodes. Food arrives hot and ready to serve 
                in professional chafing dishes (for buffet service) or convenient foil trays (for smaller gatherings). We provide all serving utensils, spoons, and equipment needed. 
                You just need plates and cutlery for your guests, or we can supply disposable options at small extra cost.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Minimum order is 15 people, making our service perfect for intimate home celebrations. Popular for Eid parties with family, birthday dinners, religious gatherings like 
                Milad-un-Nabi or Muharram, baby shower celebrations, small wedding receptions at home, engagement announcements, graduation parties, and Sunday family get-togethers. 
                Delivery is free for 30+ guests. Small delivery charge applies for smaller orders. We work around your schedule with flexible delivery times - afternoon, evening, 
                or weekend delivery available. Order 48 hours in advance for best availability, but last-minute bookings often possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">🏠 Home Delivery</h3>
                <p className="text-gray-300 text-sm">Hot food delivered to your door. Chafing dishes or foil trays. Birmingham-wide delivery. Flexible timing.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Affordable Pricing</h3>
                <p className="text-gray-300 text-sm">From £15pp for complete buffet. Minimum 15 guests. Free delivery 30+ guests. Custom menu options available.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">✅ Fresh & Halal</h3>
                <p className="text-gray-300 text-sm">100% halal certified. Cooked fresh daily. Authentic Pakistani recipes. Like homemade taste. No frozen food.</p>
              </div>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Perfect for Family Celebrations & Intimate Gatherings</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Home party catering from LUXE VENUE takes the stress out of hosting. No need to spend all day cooking for your guests. No kitchen mess. No worry about running out 
                of food. We handle everything - you just enjoy your celebration with family and friends. Our team has years of experience catering for Birmingham families, understanding 
                the importance of authentic taste and generous portions that satisfy everyone.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Pakistani and Indian home catering is especially popular during Ramadan for iftar gatherings, Eid celebrations when the whole family comes together, and religious 
                occasions like Milad gatherings. Families trust us because the food tastes authentic - made using traditional family recipes passed down generations. The biryani has 
                the perfect balance of spice and tenderness. The karahi has that home-cooked taste with fresh tomatoes. The samosas are crispy and filled generously. It's food that 
                reminds you of home cooking but without the effort.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ordering is simple. Call us or complete our online enquiry form with your party date, number of guests, and any special requirements. We'll send you menu options 
                and a quote within hours. Choose from our standard Pakistani menu, premium Indian menu, or mix dishes for a custom buffet. We accommodate dietary needs - extra 
                vegetarian dishes, mild spice for children, no nuts for allergies. Payment is flexible - cash on delivery or bank transfer. Regular customers get loyalty discounts. 
                Collection option available if you prefer to pick up from our kitchen in Birmingham B12.
              </p>
            </div>

            <div className="bg-black-secondary p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Home Party Catering FAQs</h2>
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
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Need a Venue for Larger Celebrations?</h3>
              <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Celebrating with more than 70 guests? LUXE VENUE also offers a beautiful event space in Birmingham B12 perfect for larger family gatherings, birthday parties, and celebrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/venue-hire-birmingham" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all text-center">
                  View Event Venue
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Order Home Party Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your home party. Fresh Pakistani & Indian halal food delivered hot to your door across Birmingham.</p>
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
