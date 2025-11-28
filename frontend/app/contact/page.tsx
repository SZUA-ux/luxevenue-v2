'use client'

import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import { useState, useTransition } from 'react'
import { submitContactEnquiry } from '@/lib/actions/enquiry'

export default function ContactPage() {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formKey, setFormKey] = useState(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    startTransition(async () => {
      const result = await submitContactEnquiry(formData)
      
      if (result.success) {
        setStatus('success')
        setFormKey(prev => prev + 1)
        form.reset()
      } else {
        setStatus('error')
      }
    })
  }

  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Get in touch to discuss your event
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-surface-dark p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-heading font-semibold text-white mb-6">Send us a message</h2>
                
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    Thank you! We'll be in touch within 24 hours.
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    Something went wrong. Please try again.
                  </div>
                )}

                <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Event Type *</label>
                    <select
                      name="eventType"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    >
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Nikah Ceremony">Nikah Ceremony</option>
                      <option value="Mehndi Event">Mehndi Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Number of Guests</label>
                    <input
                      type="number"
                      name="numberOfGuests"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-semibold hover:shadow-2xl transition-all disabled:opacity-50"
                  >
                    {isPending ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="bg-surface-dark p-8 rounded-xl border border-white/10 mb-6">
                  <h2 className="text-2xl font-heading font-semibold text-white mb-6">Get in Touch</h2>
                  <div className="space-y-4 text-gray-300">
                    <p><strong className="text-white">Address:</strong><br />86 Leopold Street, Birmingham B12 0UD</p>
                    <p><strong className="text-white">Phone:</strong><br /><a href="tel:+447391222884" className="text-rose-gold hover:underline">+44 7391 222884</a></p>
                    <p><strong className="text-white">Email:</strong><br /><a href="mailto:info@luxevenue.co.uk" className="text-rose-gold hover:underline">info@luxevenue.co.uk</a></p>
                    <p className="pt-4">
                      <a href="https://wa.me/447391222884" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        WhatsApp Us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
