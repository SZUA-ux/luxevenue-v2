'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function PublicNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cateringOpen, setCateringOpen] = useState(false)
  const [venueHireOpen, setVenueHireOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/luxe-venue-logo.png" 
              alt="LUXE VENUE" 
              width={180} 
              height={60}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/venue/services" className="text-sm lg:text-base text-gray-300 hover:text-rose-gold transition-colors">
              Services
            </Link>
            
            {/* Venue Hire Dropdown */}
            <div className="relative" onMouseEnter={() => setVenueHireOpen(true)} onMouseLeave={() => setVenueHireOpen(false)}>
              <button className="text-sm lg:text-base text-gray-300 hover:text-rose-gold transition-colors flex items-center gap-1">
                Venue Hire
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {venueHireOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black-secondary/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">
                  <Link href="/venue-hire-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    All Venue Hire Options
                  </Link>
                  <div className="border-t border-white/10 my-2"></div>
                  <Link href="/venue-hire/theatre-rehearsal-space-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Theatre Rehearsal Space
                  </Link>
                  <Link href="/venue-hire/comedy-night-venue-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Comedy Night Venue
                  </Link>
                  <Link href="/venue-hire/ladies-event-venue-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Ladies Event Space
                  </Link>
                  <Link href="/venue-hire/photo-video-studio-hire-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Photo & Video Studio
                  </Link>
                  <Link href="/venue-hire/corporate-event-space-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Corporate Training Space
                  </Link>
                  <Link href="/venue-hire/martial-arts-yoga-studio-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Martial Arts & Yoga Studio
                  </Link>
                </div>
              )}
            </div>

            {/* Catering Dropdown */}
            <div className="relative" onMouseEnter={() => setCateringOpen(true)} onMouseLeave={() => setCateringOpen(false)}>
              <button className="text-sm lg:text-base text-gray-300 hover:text-rose-gold transition-colors flex items-center gap-1">
                Catering
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {cateringOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black-secondary/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2 max-h-96 overflow-y-auto">
                  <Link href="/catering" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    All Catering Services
                  </Link>
                  <div className="border-t border-white/10 my-2"></div>
                  <Link href="/catering/pakistani-catering-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Pakistani Catering
                  </Link>
                  <Link href="/catering/indian-catering-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Indian Catering
                  </Link>
                  <Link href="/catering/halal-catering-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Halal Catering
                  </Link>
                  <Link href="/catering/halal-buffet-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Halal Buffet
                  </Link>
                  <Link href="/catering/asian-wedding-catering-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Asian Wedding Catering
                  </Link>
                  <Link href="/catering/pakistani-bbq-catering-birmingham" className="block px-4 py-2 text-sm text-gray-300 hover:text-rose-gold hover:bg-white/5">
                    Pakistani BBQ Catering
                  </Link>
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-sm lg:text-base text-gray-300 hover:text-rose-gold transition-colors">
              Gallery
            </Link>
            <Link href="/testimonials" className="text-sm lg:text-base text-gray-300 hover:text-rose-gold transition-colors">
              Testimonials
            </Link>
            <Link href="/blog" className="text-sm lg:text-base text-gray-300 hover:text-rose-gold transition-colors">
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 lg:px-6 py-2 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black text-sm lg:text-base font-semibold hover:shadow-lg hover:shadow-rose-gold/40 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/venue/services" className="text-gray-300 hover:text-rose-gold transition-colors px-4 py-2">
                Services
              </Link>
              <Link href="/venue-hire-birmingham" className="text-gray-300 hover:text-rose-gold transition-colors px-4 py-2">
                Venue Hire
              </Link>
              <Link href="/catering" className="text-gray-300 hover:text-rose-gold transition-colors px-4 py-2">
                Catering
              </Link>
              <Link href="/gallery" className="text-gray-300 hover:text-rose-gold transition-colors px-4 py-2">
                Gallery
              </Link>
              <Link href="/testimonials" className="text-gray-300 hover:text-rose-gold transition-colors px-4 py-2">
                Testimonials
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-rose-gold transition-colors px-4 py-2">
                Blog
              </Link>
              <Link
                href="/contact"
                className="mx-4 px-6 py-3 text-center rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
