import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import { generateCateringServiceMetadata, generateCateringFAQSchema } from '@/lib/seo/catering-seo'

export const metadata: Metadata = generateCateringServiceMetadata('corporate')

const faqs = [
  {
    question: 'How much does corporate halal catering cost in Birmingham?',
    answer: 'Our corporate halal catering in Birmingham starts from £15 per person for buffet service. Packages include Pakistani and Indian cuisine with biryani, karahi, curry options, rice, naan, samosas, and desserts. Pricing includes professional setup, chafing dishes, serving utensils, and punctual delivery. Volume discounts available for regular corporate clients.'
  },
  {
    question: 'Do you provide halal food for business meetings and conferences?',
    answer: 'Yes! We specialize in professional halal catering for all business events - meetings, conferences, training days, seminars, and corporate celebrations. All our food is 100% halal certified. We offer both buffet and individually boxed lunch options. Hot and cold catering available with flexible delivery times to match your schedule.'
  },
  {
    question: 'Can you cater for large corporate events with 100+ attendees in Birmingham?',
    answer: 'Absolutely! We regularly cater corporate events from 20 to 200+ attendees across Birmingham business districts. Our team handles complete setup with professional presentation, uniformed staff, and backup equipment. We provide seamless service for conferences, AGMs, training days, and office celebrations. Early morning, lunch, or evening delivery available.'
  },
  {
    question: 'What corporate catering menu options do you offer?',
    answer: 'We offer several corporate packages: Standard Pakistani Menu (£15pp) with biryani, kebabs, and traditional dishes; Premium Indian Menu (£18pp) with curry selection and tandoori items; Executive Fusion Menu (£20pp) combining both cuisines; Cold Lunch Boxes (£12pp) with wraps, samosas, and snacks. All menus customizable for dietary requirements. Vegetarian and vegan options available.'
  }
]

export default function CorporateCateringPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'Caterer'],
    name: 'LUXE VENUE Corporate Catering',
    description: 'Professional halal corporate catering specialist in Birmingham. Pakistani and Indian cuisine for business meetings, conferences, and corporate events.',
    url: 'https://luxevenue.co.uk/catering/corporate-catering-birmingham',
    telephone: '+447391222884',
    email: 'info@luxevenue.co.uk',
    priceRange: '£15-£20 per person',
    servesCuisine: ['Pakistani', 'Indian', 'Halal', 'Corporate Catering'],
    hasMenu: {
      '@type': 'Menu',
      name: 'Corporate Catering Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Standard Corporate Menu',
          description: 'Pakistani cuisine for business events',
          offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'GBP' }
        },
        {
          '@type': 'MenuSection',
          name: 'Premium Corporate Menu',
          description: 'Indian and fusion dishes for executive events',
          offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'GBP' }
        }
      ]
    }
  }
  
  const faqSchema = generateCateringFAQSchema('Corporate Catering Birmingham', faqs)
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luxevenue.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://luxevenue.co.uk/catering' },
      { '@type': 'ListItem', position: 3, name: 'Corporate Catering', item: 'https://luxevenue.co.uk/catering/corporate-catering-birmingham' }
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
                Corporate Halal Catering Birmingham
              </span>
            </h1>
            <p className="text-2xl text-white text-center mb-8">Professional Pakistani & Indian Food for Business Events</p>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Premium <strong className="text-white">corporate halal catering</strong> for meetings, conferences, and training days. From £15pp with punctual delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg hover:shadow-2xl transition-all text-center">
                Get Corporate Catering Quote
              </Link>
              <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all text-center">
                📞 +44 7391 222884
              </a>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Birmingham's Professional Halal Corporate Catering Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hosting a <strong className="text-white">business meeting</strong>, <strong className="text-white">corporate conference</strong>, or <strong className="text-white">training day</strong> in Birmingham? 
                LUXE VENUE delivers professional halal corporate catering with authentic Pakistani and Indian cuisine that impresses clients and colleagues. We understand the importance of 
                quality food at business events and provide reliable catering service with punctual delivery, professional presentation, and seamless execution.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our corporate catering menu features business-appropriate dishes: fragrant chicken biryani, tender lamb karahi, flavorful chicken curry, crispy vegetable samosas, 
                fresh tandoori naan, aromatic pilau rice, and light desserts. Every dish is prepared fresh daily using authentic spices and 100% halal certified ingredients. 
                We cater for intimate board meetings with 20 attendees to large conferences with 200+ delegates across Birmingham's business districts including the city centre, 
                Edgbaston, Solihull, and surrounding West Midlands areas.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Whether your event is at a hotel conference room, office boardroom, training facility, or exhibition centre, our experienced team handles complete catering logistics. 
                We offer flexible delivery times (breakfast, lunch, afternoon, evening), professional buffet setup with chafing dishes to keep food hot, or individually packaged 
                lunch boxes for convenience. All equipment, serving utensils, plates, and cutlery are provided. Our uniformed delivery staff ensure discreet, efficient service 
                that doesn't disrupt your business agenda.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We work with numerous Birmingham businesses, providing regular corporate catering for weekly meetings, monthly training sessions, quarterly conferences, and annual 
                celebrations. Our clients appreciate our reliability - we're never late, food is always hot and fresh, and presentation is consistently professional. We accommodate 
                all dietary requirements including vegetarian, vegan, gluten-free, and nut-free options. Volume discounts available for corporate contracts and repeat bookings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💼 Business Events</h3>
                <p className="text-gray-300 text-sm">Meetings, conferences, training days, AGMs. 20-200 guests. Breakfast, lunch, dinner options. Professional setup.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">💰 Corporate Pricing</h3>
                <p className="text-gray-300 text-sm">From £15pp standard menu, £18pp premium menu. Includes starters, mains, rice, naan. Volume discounts for regular clients.</p>
              </div>
              <div className="bg-surface-elevated p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">⏰ Punctual Service</h3>
                <p className="text-gray-300 text-sm">Guaranteed on-time delivery. Hot food. Professional presentation. Uniformed staff. All dietary requirements accommodated.</p>
              </div>
            </div>

            <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-8">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Why Choose LUXE VENUE for Corporate Catering?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Birmingham businesses trust LUXE VENUE because we deliver consistent quality and service excellence. Our corporate catering team understands the professional standards 
                required for business events. Food arrives on time, presentation is immaculate, and taste exceeds expectations. We have catered for law firms, accounting practices, 
                tech companies, NHS trusts, universities, and government organizations across Birmingham and the West Midlands.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Pakistani and Indian cuisine offers something different from typical corporate sandwich platters. Clients and colleagues genuinely enjoy the food - it's authentic, 
                flavorful, and substantial enough to sustain energy through long meetings or training sessions. The variety in our buffet menus ensures there's something for everyone, 
                from meat lovers to vegetarians. We source premium quality ingredients, use traditional cooking methods, and maintain strict hygiene standards with full food safety certification.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Flexible ordering makes corporate catering easy. Book online through our website, call our dedicated events team, or email your requirements. We provide detailed menu 
                options, accommodate special requests, and confirm all details in advance. Last-minute orders accepted subject to availability. Invoicing available for corporate accounts. 
                Setup and collection service included - we handle everything so you can focus on your business event. Free tastings for large contracts and regular corporate bookings.
              </p>
            </div>

            <div className="bg-black-secondary p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Corporate Catering FAQs</h2>
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
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Need a Corporate Event Venue?</h3>
              <p className="text-gray-300 mb-6 text-center max-w-3xl mx-auto">
                Hosting a corporate event in Birmingham? LUXE VENUE offers a professional event space in Birmingham B12 perfect for meetings, presentations, and small conferences up to 70 attendees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/venue-hire-birmingham" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all text-center">
                  View Event Venue
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-gold-light/10 via-rose-gold/10 to-rose-gold-dark/10 p-8 rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Corporate Catering?</h3>
              <p className="text-gray-300 mb-6">Get a free quote for your business event catering. Professional service, authentic halal cuisine, perfect for impressing clients and colleagues.</p>
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
