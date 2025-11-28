import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import CateringEnquiryForm from '@/components/CateringEnquiryForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pakistani & Indian Halal Catering Birmingham | Wedding, Corporate & Party Catering',
  description: 'Award-winning Pakistani & Indian halal catering across Birmingham, Walsall, Dudley & Solihull. Weddings, corporate events, home parties. From £15pp. Fresh cooking on-site. Free delivery 100+ guests.',
  keywords: 'pakistani catering birmingham, indian catering birmingham, halal catering, wedding catering, corporate catering, asian catering west midlands, buffet catering, home party catering, walsall catering, dudley catering, solihull catering',
  openGraph: {
    title: 'Pakistani & Indian Halal Catering Birmingham | LUXE VENUE Catering',
    description: 'Authentic Pakistani & Indian halal catering for all occasions. 100% halal certified, fresh daily cooking, 10-500 guests. Serving Birmingham, Walsall, Dudley & West Midlands.',
    url: 'https://luxevenue.co.uk/catering',
    siteName: 'LUXE VENUE',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function CateringPage() {
  return (<><PublicNav /><main className="min-h-screen bg-black-primary pt-20">
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-rose-gold font-semibold mb-4 uppercase text-sm tracking-wider">Birmingham Premier Halal Catering</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
          <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
            Pakistani & Indian Catering
          </span><br/>
          <span className="text-white text-3xl sm:text-4xl">Birmingham, Walsall, Dudley & Solihull</span>
        </h1>
        <p className="text-xl text-gray-200 mb-6 max-w-4xl mx-auto">Award-Winning Halal Catering for Weddings, Corporate Events, Home Parties & Private Celebrations</p>
        <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
          Authentic Pakistani & Indian cuisine • 100% Halal certified • Off-site catering specialists • 
          3-Course meals from £15pp • Fresh cooking on-site • Buffet & plated service • 10-500 guests
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a href="#quote" className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold text-lg shadow-2xl hover:shadow-rose-gold/50 hover:scale-110 transition-all">
            Get Free Quote
          </a>
          <a href="tel:+447391222884" className="px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold text-lg hover:bg-rose-gold hover:text-black transition-all">
            📞 +44 7391 222884
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[{i:'✅',t:'100% Halal'},{i:'🍽️',t:'Fresh Daily'},{i:'⭐',t:'500+ Events'},{i:'🚚',t:'Free Delivery 100+'}].map((b,i)=>(
            <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10"><div className="text-3xl mb-2">{b.i}</div><p className="text-sm text-gray-300 font-semibold">{b.t}</p></div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-white text-center mb-12">
          Pakistani & Indian Catering <span className="text-rose-gold">Across West Midlands</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
          {[
            {name:'Birmingham',link:'/catering/birmingham-pakistani-indian-catering'},
            {name:'Walsall',link:'/catering/walsall-pakistani-indian-catering'},
            {name:'Dudley',link:'/catering/dudley-pakistani-indian-catering'},
            {name:'Solihull',link:'/catering/solihull-pakistani-indian-catering'},
            {name:'Wolverhampton',link:'/catering/wolverhampton-pakistani-indian-catering'},
            {name:'West Bromwich',link:'/catering/west-bromwich-pakistani-indian-catering'},
            {name:'Sandwell',link:'/catering/sandwell-pakistani-indian-catering'},
            {name:'Sutton Coldfield',link:'/catering/sutton-coldfield-pakistani-indian-catering'},
            {name:'Coventry',link:'/catering/coventry-pakistani-indian-catering'},
            {name:'Black Country',link:'/catering/black-country-pakistani-indian-catering'},
          ].map((a,i)=>(
            <Link key={i} href={a.link} className="p-4 bg-surface-dark rounded-lg border border-rose-gold/20 text-center hover:border-rose-gold hover:shadow-lg hover:shadow-rose-gold/40 hover:scale-105 transition-all">
              <p className="text-gray-200 font-semibold text-sm">✓ {a.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
          Off-Site <span className="text-rose-gold">Catering Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {i:'💍',t:'Wedding Catering',d:'Halal Pakistani & Indian wedding catering for Nikah, Mehndi, Walima. Buffet or plated. 50-500 guests.',link:'/catering/wedding-catering-birmingham'},
            {i:'🏠',t:'Home Party Catering',d:'Intimate dinners, birthdays, anniversaries. Fresh cooking in your kitchen. 10-70 guests.',link:'/catering/home-party-catering-birmingham'},
            {i:'🏢',t:'Corporate Catering',d:'Business meetings, conferences, team events. Halal, veg & vegan options. 20-200 guests.',link:'/catering/corporate-catering-birmingham'},
            {i:'⛺',t:'Marquee Catering',d:'Garden party catering for marquee events. Complete setup with staff. 50-300 guests.',link:'/catering/marquee-catering-birmingham'},
            {i:'🎂',t:'Birthday Catering',d:'Milestone birthdays, kids parties. Pakistani & Indian favorites. 20-100 guests.',link:'/catering/birthday-catering-birmingham'},
            {i:'🎉',t:'Special Occasions',d:'Anniversaries, engagements, baby showers. Bespoke menus. 15-150 guests.',link:'/catering/special-occasion-catering-birmingham'},
          ].map((s,i)=>(
            <Link key={i} href={s.link} className="group p-8 bg-surface-dark rounded-2xl border border-white/10 hover:border-rose-gold hover:shadow-2xl hover:shadow-rose-gold/40 hover:-translate-y-2 transition-all duration-500">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{s.i}</div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-rose-gold transition-colors">{s.t}</h3>
              <p className="text-gray-300 mb-4">{s.d}</p>
              <span className="text-rose-gold font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
          <span className="text-rose-gold">Authentic Halal</span> Catering Menus
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-br from-surface-dark to-surface-elevated rounded-2xl border border-rose-gold/30">
            <h3 className="text-3xl font-heading font-bold text-rose-gold mb-6">Pakistani Menu</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div><h4 className="font-bold text-white mb-2">Starters</h4>
              <p>Chicken Tikka • Seekh Kebab • Samosas • Pakoras • Chapli Kebab • Shami Kebab</p></div>
              <div><h4 className="font-bold text-white mb-2">Mains</h4>
              <p>Chicken Biryani • Lamb Karahi • Nihari • Mutton Korma • Chicken Jalfrezi • Dal Makhani • Rice & Naan</p></div>
              <div><h4 className="font-bold text-white mb-2">Desserts</h4>
              <p>Gulab Jamun • Kheer • Gajar Halwa • Ras Malai</p></div>
            </div>
            <div className="mt-6 p-4 bg-rose-gold/10 rounded-lg text-center">
              <p className="text-rose-gold font-bold text-xl">From £18/pp</p>
              <p className="text-gray-400 text-xs">Min 20 guests</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-surface-dark to-surface-elevated rounded-2xl border border-rose-gold/30">
            <h3 className="text-3xl font-heading font-bold text-rose-gold mb-6">Indian Menu</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div><h4 className="font-bold text-white mb-2">Starters</h4>
              <p>Paneer Tikka • Chicken 65 • Aloo Tikki • Samosas • Onion Bhaji • Pani Puri</p></div>
              <div><h4 className="font-bold text-white mb-2">Mains</h4>
              <p>Butter Chicken • Rogan Josh • Tikka Masala • Palak Paneer • Veg Korma • Hyderabadi Biryani • Rice & Naan</p></div>
              <div><h4 className="font-bold text-white mb-2">Desserts</h4>
              <p>Rasmalai • Jalebi • Kulfi • Barfi</p></div>
            </div>
            <div className="mt-6 p-4 bg-rose-gold/10 rounded-lg text-center">
              <p className="text-rose-gold font-bold text-xl">From £16/pp</p>
              <p className="text-gray-400 text-xs">Min 20 guests</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-surface-dark to-surface-elevated rounded-2xl border border-rose-gold/30">
            <h3 className="text-3xl font-heading font-bold text-rose-gold mb-6">Fusion Menu</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div><h4 className="font-bold text-white mb-2">Starters</h4>
              <p>Mix of Pakistani & Indian • Custom selection available</p></div>
              <div><h4 className="font-bold text-white mb-2">Mains</h4>
              <p>Butter Chicken + Lamb Karahi • Chicken Biryani • Veg Korma + Dal Makhani • Rice & Naan</p></div>
              <div><h4 className="font-bold text-white mb-2">Desserts</h4>
              <p>Gulab Jamun • Ras Malai • Kheer • Jalebi</p></div>
            </div>
            <div className="mt-6 p-4 bg-rose-gold/10 rounded-lg text-center">
              <p className="text-rose-gold font-bold text-xl">From £20/pp</p>
              <p className="text-gray-400 text-xs">Min 20 guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Catering Gallery Section */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
          Our <span className="text-rose-gold">Halal Catering</span> in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-rose-gold/50 transition-all">
            <img 
              src="/images/gallery/luxe-venue-halal-buffet-catering.png" 
              alt="LUXE VENUE Birmingham - Halal Buffet Catering Service"
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-rose-gold text-sm font-semibold mb-2">Buffet Service</p>
                <p className="text-white font-semibold text-lg">Premium Halal Buffet Catering</p>
                <p className="text-gray-300 text-sm mt-2">Fresh Pakistani & Indian cuisine prepared on-site</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-rose-gold/50 transition-all">
            <img 
              src="/images/gallery/luxe-venue-buffet-catering-setup.png" 
              alt="LUXE VENUE Birmingham - On-Site Buffet Catering Setup"
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-rose-gold text-sm font-semibold mb-2">On-Site Setup</p>
                <p className="text-white font-semibold text-lg">Professional Buffet Station Setup</p>
                <p className="text-gray-300 text-sm mt-2">Complete catering service with experienced staff</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a 
            href="/gallery" 
            className="inline-block px-8 py-4 rounded-full border-2 border-rose-gold text-rose-gold font-semibold hover:bg-rose-gold hover:text-black transition-all"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>

    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
          Why Choose <span className="text-rose-gold">LUXE VENUE Catering?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {i:'🏆',t:'10+ Years Experience',d:'Serving Birmingham families since 2015'},
            {i:'✅',t:'100% Halal Certified',d:'All ingredients halal-certified'},
            {i:'👨‍🍳',t:'Award-Winning Chefs',d:'Traditional Pakistani & Indian chefs'},
            {i:'🥘',t:'Fresh Daily Cooking',d:'Prepared fresh on event day'},
            {i:'🚚',t:'Free Delivery',d:'For 100+ guests within Birmingham area'},
            {i:'🍽️',t:'Full Service Options',d:'Staff, disposable, or premium china'},
            {i:'💰',t:'Transparent Pricing',d:'No hidden costs'},
            {i:'🎨',t:'Custom Menus',d:'Tailored to your requirements'},
          ].map((f,i)=>(
            <div key={i} className="p-6 bg-surface-dark rounded-xl border border-white/10 hover:border-rose-gold/30 transition-all">
              <div className="text-5xl mb-4">{f.i}</div>
              <h3 className="text-lg font-bold text-white mb-2">{f.t}</h3>
              <p className="text-sm text-gray-400">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="quote" className="py-24 px-4 sm:px-6 lg:px-8 bg-black-secondary">
      <div className="max-w-5xl mx-auto">
        <CateringEnquiryForm />
      </div>
    </section>

    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-primary">
      <div className="max-w-7xl mx-auto prose prose-invert max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-gray-300">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              <span className="text-rose-gold">Pakistani Catering Birmingham:</span> Authentic Flavors
            </h2>
            <p className="mb-4">Looking for authentic Pakistani catering in Birmingham? LUXE VENUE brings over 10 years of culinary expertise to your event.</p>
            <p className="mb-4">Our halal-certified Pakistani chefs specialize in traditional recipes from Punjab, Karachi, Peshawar, and Lahore.</p>
            <h3 className="text-2xl font-heading font-bold text-rose-gold mt-8 mb-4">Specialties</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong className="text-white">Chicken Biryani</strong> - Signature dish served at 300+ Birmingham weddings</li>
              <li>• <strong className="text-white">Lamb Karahi</strong> - Traditional wok-cooked curry</li>
              <li>• <strong className="text-white">Seekh Kebab</strong> - Hand-rolled charcoal-grilled</li>
              <li>• <strong className="text-white">Nihari</strong> - Slow-cooked beef stew specialty</li>
            </ul>
            <div className="mt-6 p-4 bg-rose-gold/10 rounded-lg text-sm">
              <strong className="text-rose-gold">Serving:</strong> Pakistani catering Walsall • Halal catering Dudley • Asian catering Solihull • Birmingham city centre catering
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              <span className="text-rose-gold">Indian Catering Birmingham:</span> Regional Excellence
            </h2>
            <p className="mb-4">Experience premium Indian catering in Birmingham with LUXE VENUE. Award-winning chefs create authentic dishes from across India - all 100% halal-certified.</p>
            <p className="mb-4">Perfect for Hindu weddings, Sikh celebrations, or multicultural events. 10-500 guests across Birmingham, Walsall, Dudley, Solihull.</p>
            <h3 className="text-2xl font-heading font-bold text-rose-gold mt-8 mb-4">Highlights</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong className="text-white">Butter Chicken</strong> - Britain's favorite curry</li>
              <li>• <strong className="text-white">Paneer Tikka</strong> - Vegetarian tandoor grilled</li>
              <li>• <strong className="text-white">Hyderabadi Biryani</strong> - Aromatic saffron rice</li>
              <li>• <strong className="text-white">Ras Malai</strong> - Wedding dessert favorite</li>
            </ul>
            <div className="mt-6 p-4 bg-rose-gold/10 rounded-lg text-xs">
              <strong className="text-white">Regions:</strong> North Indian (Punjabi, Kashmiri) • South Indian (Dosas, Idli) • Gujarati (Vegetarian) • Bengali (Sweets)
            </div>
          </div>
        </div>
      </div>
    </section>
  </main><PublicFooter /></>)
}
