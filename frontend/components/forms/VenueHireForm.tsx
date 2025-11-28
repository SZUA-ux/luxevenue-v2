'use client'

import { useState } from 'react'
import { submitHireEnquiry } from '@/lib/actions/hire'

export default function VenueHireForm() {
  const [isPending, setIsPending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('idle')
    setIsPending(true)
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const result = await submitHireEnquiry(formData)
    
    if (result.success) {
      setStatus('success')
      form.reset()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setStatus('error')
      setErrorMessage(result.error || 'Failed to submit enquiry')
    }
    setIsPending(false)
  }

  return (
    <section id="hire-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-950/40 to-blue-950/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Check availability & <span className="text-purple-400">get a quote</span>
          </h2>
          <p className="text-gray-300">Fill out the form and we'll get back within 24 hours with pricing & availability</p>
        </div>

        <div className="bg-surface-dark p-8 sm:p-10 rounded-2xl border border-purple-500/30">
          {status === 'success' && (
            <div className="mb-8 p-6 bg-green-500/20 border border-green-500/30 rounded-xl text-center" data-testid="hire-form-success">
              <h3 className="text-2xl font-bold text-green-400 mb-2">✓ Enquiry Received!</h3>
              <p className="text-green-300">We'll send availability & pricing within 24 hours. Check your email!</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-8 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400" data-testid="hire-form-error">
              {errorMessage || 'Error submitting form. Please call: '}
              {!errorMessage && <a href="tel:+447391222884" className="underline font-bold">07391 222884</a>}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  data-testid="hire-form-name"
                  className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  data-testid="hire-form-email"
                  className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Mobile / WhatsApp *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  pattern="^(\+44|0)[0-9]{10,11}$"
                  placeholder="07123 456789"
                  data-testid="hire-form-phone"
                  className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Event Type *</label>
                <select 
                  name="eventType" 
                  required 
                  data-testid="hire-form-event-type"
                  className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white focus:border-purple-400 transition-all"
                >
                  <option value="">Select event type</option>
                  <option>Yoga Class</option>
                  <option>Fitness / Pilates Class</option>
                  <option>Theatre Rehearsal</option>
                  <option>Comedy Show</option>
                  <option>Ladies' Night</option>
                  <option>Baby Shower</option>
                  <option>Gender Reveal</option>
                  <option>Nikah Ceremony</option>
                  <option>Workshop / Training</option>
                  <option>Photo Shoot</option>
                  <option>Video / Content Shoot</option>
                  <option>Community Meeting</option>
                  <option>Poetry / Spoken Word</option>
                  <option>Dance Rehearsal</option>
                  <option>Martial Arts Class</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Preferred Date *</label>
                <input 
                  type="date" 
                  name="date" 
                  required
                  min={new Date().toISOString().split('T')[0]}
                  data-testid="hire-form-date"
                  className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white focus:border-purple-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Start Time *</label>
                <input 
                  type="time" 
                  name="startTime" 
                  required
                  data-testid="hire-form-start-time"
                  className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white focus:border-purple-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">End Time *</label>
                <input 
                  type="time" 
                  name="endTime" 
                  required
                  data-testid="hire-form-end-time"
                  className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white focus:border-purple-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Expected Guests</label>
              <input 
                type="number" 
                name="guestCount" 
                placeholder="Max 70" 
                max="70" 
                min="1"
                data-testid="hire-form-guest-count"
                className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Additional Information</label>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="Tell us about your event, special requirements, equipment needs, etc."
                data-testid="hire-form-message"
                className="w-full px-4 py-3 bg-black-primary border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isPending} 
              data-testid="hire-form-submit"
              className="w-full px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? 'Sending Enquiry...' : 'Send Enquiry'}
            </button>
            
            <p className="text-center text-gray-400 text-xs mt-4">
              💬 Quick response via WhatsApp: <a href="https://wa.me/447391222884" className="text-purple-400 hover:underline">+44 7391 222884</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
