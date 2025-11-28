export default function PublicFooter() {
  return (
    <footer className="bg-black-primary border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                LUXE VENUE
              </span>
            </h3>
            <p className="text-gray-400 text-sm">
              Birmingham's premier luxury event venue for unforgettable celebrations.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-rose-gold transition-colors">About Us</a></li>
              <li><a href="/venue/services" className="text-gray-400 hover:text-rose-gold transition-colors">Services</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-rose-gold transition-colors">Gallery</a></li>
              <li><a href="/testimonials" className="text-gray-400 hover:text-rose-gold transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Events</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/wedding-venue-birmingham" className="text-gray-400 hover:text-rose-gold transition-colors">Weddings</a></li>
              <li><a href="/corporate-event-venue-birmingham" className="text-gray-400 hover:text-rose-gold transition-colors">Corporate Events</a></li>
              <li><a href="/birthday-party-venue-birmingham" className="text-gray-400 hover:text-rose-gold transition-colors">Birthday Parties</a></li>
              <li><a href="/nikah-venue-birmingham" className="text-gray-400 hover:text-rose-gold transition-colors">Nikah Ceremonies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>86 Leopold Street</li>
              <li>Birmingham B12 0UD</li>
              <li className="pt-2">
                <a href="tel:+447391222884" className="hover:text-rose-gold transition-colors">+44 7391 222884</a>
              </li>
              <li>
                <a href="mailto:info@luxevenue.co.uk" className="hover:text-rose-gold transition-colors">info@luxevenue.co.uk</a>
              </li>
              <li className="pt-2">
                <a href="https://wa.me/447391222884" className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} LUXE VENUE LTD. All rights reserved. | <a href="/crm" className="text-gray-400 hover:text-rose-gold transition-colors">CRM</a></p>
        </div>
      </div>
    </footer>
  )
}
