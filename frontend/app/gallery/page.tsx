'use client'

import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  // Wedding & Nikah Setups (grouped together for visual flow)
  { src: '/images/gallery/luxe-venue-backdrop.png', alt: 'LUXE VENUE Birmingham - Elegant Wedding Backdrop with Floral Arrangements | Asian Wedding Venue', span: 'md:col-span-2 md:row-span-2', category: 'Wedding Setup' },
  { src: '/images/gallery/luxe-venue-nikah-setup.png', alt: 'LUXE VENUE Birmingham - Traditional Nikah Ceremony Setup | Islamic Wedding Venue Sparkbrook', span: 'md:row-span-2', category: 'Nikah Ceremony' },
  { src: '/images/gallery/luxe-venue-elegant-decor.png', alt: 'LUXE VENUE Birmingham - Premium Wedding Decor with Crystal Chandeliers | Small Wedding Venue', span: 'md:col-span-2', category: 'Wedding Decor' },
  { src: '/images/gallery/luxe-venue-decor-variation.png', alt: 'LUXE VENUE Birmingham - Asian Wedding Decor Setup with Gold Accents | Halal Venue West Midlands', span: '', category: 'Asian Weddings' },
  { src: '/images/gallery/luxe-venue-white-gold-setup.png', alt: 'LUXE VENUE Birmingham - White & Gold Wedding Decor Theme | Luxury Event Venue B12', span: '', category: 'Wedding Decor' },
  
  // Venue Features & Modern Elements
  { src: '/images/gallery/luxe-venue-glass-led-walkway.png', alt: 'LUXE VENUE Birmingham - Glass LED Walkway for Modern Weddings | Contemporary Event Space', span: 'md:col-span-2', category: 'Modern Features' },
  { src: '/images/gallery/luxe-venue-led-stage.png', alt: 'LUXE VENUE Birmingham - Premium LED Stage Lighting for Weddings & Events | Professional AV Setup', span: 'md:row-span-2', category: 'Lighting & Stage' },
  { src: '/images/gallery/luxe-venue-white-walkway.png', alt: 'LUXE VENUE Birmingham - White Carpet Wedding Walkway | Elegant Venue Entrance', span: '', category: 'Venue Features' },
  { src: '/images/gallery/luxe-venue-golden-pillars.png', alt: 'LUXE VENUE Birmingham - Golden Pillars Wedding Decor | Premium Birmingham Venue B12 0UD', span: 'md:col-span-2', category: 'Venue Features' },
  { src: '/images/gallery/luxe-venue-white-gold-theme.png', alt: 'LUXE VENUE Birmingham - Luxury White & Gold Theme | Intimate Wedding Venue Dudley', span: '', category: 'Wedding Themes' },
  
  // Catering Services (NEW - grouped together)
  { src: '/images/gallery/luxe-venue-halal-buffet-catering.png', alt: 'LUXE VENUE Birmingham - Halal Buffet Catering Service | Asian Wedding Food Birmingham', span: 'md:col-span-2', category: 'Halal Catering' },
  { src: '/images/gallery/luxe-venue-buffet-catering-setup.png', alt: 'LUXE VENUE Birmingham - On-Site Buffet Catering Setup | Pakistani Indian Food Venue West Midlands', span: 'md:row-span-2', category: 'Catering Service' },
  
  // Cultural & Community Events
  { src: '/images/gallery/qawali-night.jpg', alt: 'LUXE VENUE Birmingham - Qawali Night Event Setup | Pakistani Cultural Events Venue', span: '', category: 'Cultural Events' },
  { src: '/images/gallery/ladies-night.jpg', alt: 'LUXE VENUE Birmingham - Ladies Only Event Space | Alcohol-Free Family Venue', span: 'md:col-span-2', category: 'Private Events' },
  { src: '/images/gallery/gender-reveal.jpg', alt: 'LUXE VENUE Birmingham - Gender Reveal Party Venue | Baby Shower Space Birmingham', span: '', category: 'Baby Celebrations' },
  
  // Corporate & Professional Events
  { src: '/images/gallery/corporate-event.jpg', alt: 'LUXE VENUE Birmingham - Corporate Event Space | Business Meetings & Team Building Venue', span: 'md:col-span-2', category: 'Corporate Events' },
  { src: '/images/gallery/production-setup.jpg', alt: 'LUXE VENUE Birmingham - Photo & Video Production Studio | Professional Shooting Location', span: 'md:row-span-2', category: 'Production Studio' },
  { src: '/images/gallery/rehearsal-space.jpg', alt: 'LUXE VENUE Birmingham - Theatre Rehearsal Space | Performance Venue Hire West Midlands', span: '', category: 'Performance Space' },
  
  // Entertainment & Classes
  { src: '/images/gallery/comedy-night.jpg', alt: 'LUXE VENUE Birmingham - Comedy & Entertainment Night | Private Event Hire Sparkbrook', span: 'md:col-span-2', category: 'Entertainment' },
  { src: '/images/gallery/karate-classes.jpg', alt: 'LUXE VENUE Birmingham - Martial Arts Classes Venue | Multi-Purpose Event Space Hire', span: '', category: 'Classes & Training' },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden' // Prevent background scroll
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  // Add keyboard event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown as any)
  }

  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                  Gallery
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-2">
                Explore our beautiful venue and past events
              </p>
              <p className="text-gray-400">
                From elegant weddings to corporate events - see LUXE VENUE in action
              </p>
            </div>

            {/* Masonry/Collage Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  data-testid={`gallery-image-${index}`}
                  onClick={() => openModal(index)}
                  className={`group relative overflow-hidden rounded-lg border border-white/10 hover:border-rose-gold/50 transition-all duration-300 cursor-pointer ${image.span}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-rose-gold text-xs font-semibold mb-1">{image.category}</p>
                      <p className="text-white font-semibold text-sm line-clamp-2">{image.alt}</p>
                    </div>
                  </div>
                  {/* Click to view indicator */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs">Click to view</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center p-12 bg-surface-dark/30 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Create Your Own <span className="text-rose-gold">Memorable Event</span>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book LUXE VENUE for your wedding, birthday, corporate event, or special celebration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/venue-hire-birmingham"
                  data-testid="book-venue-cta"
                  className="px-10 py-4 bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-bold rounded-full hover:shadow-lg hover:shadow-rose-gold/20 transition-all"
                >
                  Book Your Event
                </a>
                <a
                  href="/contact"
                  data-testid="contact-cta"
                  className="px-10 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />

      {/* Slideshow Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          data-testid="gallery-modal"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            data-testid="close-modal-btn"
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 z-50 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
            <span className="text-white font-semibold">
              {selectedImage + 1} / {galleryImages.length}
            </span>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            data-testid="prev-image-btn"
            className="absolute left-6 z-50 p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            data-testid="next-image-btn"
            className="absolute right-6 z-50 p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 rounded-b-lg">
              <p className="text-rose-gold text-sm font-semibold mb-2">
                {galleryImages[selectedImage].category}
              </p>
              <p className="text-white text-lg font-medium leading-relaxed">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-4xl px-4 pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === selectedImage 
                    ? 'border-rose-gold scale-110' 
                    : 'border-white/20 hover:border-white/50'
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
