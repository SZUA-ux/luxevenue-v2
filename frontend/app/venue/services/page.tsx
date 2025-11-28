import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import { getCanonicalUrl } from '@/lib/utils/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Event Services Birmingham, Dudley, Wolverhampton | All-Faith Celebrations | LUXE VENUE',
  description: 'Complete celebration services for all cultures & faiths in Birmingham, Dudley, Wolverhampton. Customized catering (halal, kosher, vegan), event planning, décor, and more.',
  alternates: { canonical: getCanonicalUrl('/venue/services') },
}

export default function ServicesPage() {
  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creating unforgettable moments with warmth, elegance, and personalized care for your special celebration
            </p>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                What We <span className="text-rose-gold">Offer</span>
              </h2>
              <p className="text-lg text-gray-400">
                Everything you need for your perfect celebration, thoughtfully curated with love
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Elegant Event Space */}
              <div className="p-8 bg-surface-dark rounded-xl border border-white/10 hover:border-rose-gold/50 transition-all">
                <div className="text-5xl mb-6">🏛️</div>
                <h3 className="text-2xl font-heading font-semibold text-rose-gold mb-4">Elegant Event Space</h3>
                <p className="text-gray-400 mb-6">Your canvas for unforgettable memories</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Venue Essentials</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Premium tables and elegant seating arrangements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Fine cutlery and sophisticated crockery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Glassware and serving platters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Professional-grade sound system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Ambient lighting with adjustable settings</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-3">Décor & Styling</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Custom color schemes to match your vision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Fresh floral arrangements and centerpieces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Table linens and chair covers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Backdrop installations for photo opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Decorative lighting and candle arrangements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Exceptional Catering */}
              <div className="p-8 bg-surface-dark rounded-xl border border-white/10 hover:border-rose-gold/50 transition-all">
                <div className="text-5xl mb-6">🍽️</div>
                <h3 className="text-2xl font-heading font-semibold text-rose-gold mb-4">Exceptional Catering</h3>
                <p className="text-gray-400 mb-6">Culinary excellence for every palate</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Starters</h4>
                    <p className="text-sm text-gray-300 mb-2">Begin your celebration with elegant appetizers</p>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Indian & British favorites</li>
                      <li>• Italian antipasti selection</li>
                      <li>• Hot and cold options</li>
                      <li>• Vegetarian & vegan choices</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-3">Main Course</h4>
                    <p className="text-sm text-gray-300 mb-2">Sumptuous dishes crafted with care</p>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Traditional Indian curries</li>
                      <li>• Classic British roasts</li>
                      <li>• Italian pasta & risotto</li>
                      <li>• 100% Halal options available</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-3">Desserts</h4>
                    <p className="text-sm text-gray-300 mb-2">Sweet endings to remember</p>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Traditional Indian sweets</li>
                      <li>• European patisserie</li>
                      <li>• Fresh fruit selections</li>
                      <li>• Special dietary options</li>
                    </ul>
                  </div>

                  <div className="mt-4 p-3 bg-rose-gold/10 rounded-lg border border-rose-gold/30">
                    <p className="text-xs text-gray-300">
                      <strong className="text-rose-gold">Note:</strong> All menus customizable for dietary requirements, religious preferences & cultural traditions
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Management */}
              <div className="p-8 bg-surface-dark rounded-xl border border-white/10 hover:border-rose-gold/50 transition-all">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-2xl font-heading font-semibold text-rose-gold mb-4">Event Management</h3>
                <p className="text-gray-400 mb-6">Stress-free celebration, perfectly orchestrated</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Our Coordination Services</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Pre-event consultation and planning sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Vendor coordination (DJ, photography, videography)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Timeline creation and management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Setup and breakdown coordination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>On-the-day event supervision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-gold mt-1">✦</span>
                        <span>Guest coordination and assistance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-br from-rose-gold/10 to-rose-gold/5 rounded-lg border border-rose-gold/30">
                    <div className="text-center">
                      <h4 className="text-xl font-heading font-bold text-rose-gold mb-2">Exclusive Offer</h4>
                      <p className="text-white font-semibold mb-1">Dedicated Event Planner</p>
                      <p className="text-2xl font-bold text-rose-gold mb-2">Worth £400</p>
                      <p className="text-green-400 font-semibold text-lg">Complimentary!</p>
                      <p className="text-xs text-gray-400 mt-2">
                        Receive a dedicated event planner with every booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Vendor Services */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Professional <span className="text-rose-gold">Vendor Services</span>
              </h2>
              <p className="text-lg text-gray-400">
                Enhance your celebration with our trusted professional partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎵',
                  title: 'Professional DJ Services',
                  features: ['Premium sound equipment', 'Professional lighting effects', 'Music requests honored', 'MC services available']
                },
                {
                  icon: '📸',
                  title: 'Photography Services',
                  features: ['Full-day coverage', 'Professional editing', 'Digital gallery included', 'Candid & posed photography']
                },
                {
                  icon: '🎥',
                  title: 'Videography Services',
                  features: ['Cinematic 4K recording', 'Highlight reel included', 'Drone footage available', 'Same-day edit options']
                },
              ].map((service, index) => (
                <div key={index} className="p-8 bg-surface-dark rounded-xl border border-white/10">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-rose-gold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Specialized <span className="text-rose-gold">Venue Services</span>
              </h2>
              <p className="text-lg text-gray-400">
                Learn more about how we cater to your specific celebration needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Wedding Venue',
                  desc: 'Intimate wedding celebrations for up to 70 guests with halal catering and elegant décor',
                  link: '/wedding-venue-birmingham',
                  icon: '💍'
                },
                {
                  title: 'Nikah Ceremonies',
                  desc: 'Islamic wedding venue with prayer facilities and 100% halal catering for Muslim families',
                  link: '/nikah-venue-birmingham',
                  icon: '🕌'
                },
                {
                  title: 'Mehndi Events',
                  desc: 'Vibrant mehndi celebrations with traditional décor and authentic Pakistani refreshments',
                  link: '/mehndi-venue-birmingham',
                  icon: '💅'
                },
                {
                  title: 'Birthday Parties',
                  desc: "Children's parties and milestone adult birthdays with custom themes and halal catering",
                  link: '/birthday-party-venue-birmingham',
                  icon: '🎂'
                },
                {
                  title: 'Baby Showers',
                  desc: 'Elegant baby shower venue with beautiful décor and accommodation for cultural traditions',
                  link: '/baby-shower-venue-birmingham',
                  icon: '🍼'
                },
                {
                  title: 'Corporate Events',
                  desc: 'Professional business events, team building, and client entertainment with AV equipment',
                  link: '/corporate-event-venue-birmingham',
                  icon: '🏢'
                },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl border border-white/10 hover:border-rose-gold/50 hover:shadow-xl hover:shadow-rose-gold/20 transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-rose-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
              Let's Create <span className="text-rose-gold">Magic Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your celebration deserves the perfect setting. Get in touch to discuss your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-semibold text-lg hover:shadow-2xl hover:shadow-rose-gold/50 hover:scale-105 transition-all"
            >
              Start Your Journey
            </Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
