'use client'

import { useState, useTransition } from 'react'
import { submitCateringEnquiry } from '@/lib/actions/enquiry'

export default function CateringEnquiryForm() {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formKey, setFormKey] = useState(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    startTransition(async () => {
      const result = await submitCateringEnquiry(formData)
      
      if (result.success) {
        setStatus('success')
        setFormKey(prev => prev + 1) // Reset form
        form.reset()
      } else {
        setStatus('error')
      }
    })
  }

  return (
    <div className="bg-surface-dark p-8 sm:p-12 rounded-2xl border border-rose-gold/30">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-6">
        Request Your <span className="text-rose-gold">Free Catering Quote</span>
      </h2>
      <p className="text-xl text-gray-300 text-center mb-12">
        Get customized quote for halal catering in Birmingham, Walsall, Dudley, or Solihull
      </p>

      {status === 'success' && (
        <div className="mb-8 p-6 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center">
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p>Your catering enquiry has been received. We'll send you a detailed quote within 2 hours.</p>
          <p className="text-sm mt-2">Check your email (including spam folder) for confirmation.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-8 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
          <p className="font-bold mb-2">Something went wrong</p>
          <p>Please call us directly: <a href="tel:+447391222884" className="underline">07391 222884</a></p>
        </div>
      )}

      <form key={formKey} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name *</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
            placeholder="07XXX XXXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Event Type *</label>
          <select
            name="eventType"
            required
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="text-gray-500 bg-black-primary">Select event type</option>
            <option value="Wedding (Nikah/Walima)" className="text-white bg-black-primary">Wedding (Nikah/Walima)</option>
            <option value="Mehndi Ceremony" className="text-white bg-black-primary">Mehndi Ceremony</option>
            <option value="Home Dinner Party" className="text-white bg-black-primary">Home Dinner Party</option>
            <option value="Birthday Party" className="text-white bg-black-primary">Birthday Party</option>
            <option value="Corporate Event" className="text-white bg-black-primary">Corporate Event</option>
            <option value="Anniversary" className="text-white bg-black-primary">Anniversary</option>
            <option value="Marquee/Garden Party" className="text-white bg-black-primary">Marquee/Garden Party</option>
            <option value="House Party" className="text-white bg-black-primary">House Party</option>
            <option value="Other" className="text-white bg-black-primary">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Event Date</label>
          <input
            type="date"
            name="eventDate"
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Event Location *</label>
          <input
            type="text"
            name="location"
            required
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
            placeholder="Birmingham, Walsall, Dudley, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Number of Guests *</label>
          <input
            type="number"
            name="numberOfGuests"
            required
            min="20"
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
            placeholder="Minimum 20 guests"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Catering Type *</label>
          <select
            name="cateringType"
            required
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="text-gray-500 bg-black-primary">Select catering type</option>
            <option value="Buffet Service" className="text-white bg-black-primary">Buffet Service</option>
            <option value="Plated 3-Course Meal" className="text-white bg-black-primary">Plated 3-Course Meal</option>
            <option value="Live Cooking Stations" className="text-white bg-black-primary">Live Cooking Stations</option>
            <option value="Drop-off Delivery" className="text-white bg-black-primary">Drop-off Delivery</option>
            <option value="Full Service with Staff" className="text-white bg-black-primary">Full Service with Staff</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Menu Preference *</label>
          <select
            name="menuPreference"
            required
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="text-gray-500 bg-black-primary">Select menu preference</option>
            <option value="Pakistani Menu" className="text-white bg-black-primary">Pakistani Menu</option>
            <option value="Indian Menu" className="text-white bg-black-primary">Indian Menu</option>
            <option value="Fusion (Pakistani + Indian)" className="text-white bg-black-primary">Fusion (Pakistani + Indian)</option>
            <option value="Vegetarian Only" className="text-white bg-black-primary">Vegetarian Only</option>
            <option value="Custom/Mixed" className="text-white bg-black-primary">Custom/Mixed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Dietary Requirements</label>
          <input
            type="text"
            name="dietaryRequirements"
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
            placeholder="Vegan, gluten-free, allergies..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Budget Per Person</label>
          <select
            name="budget"
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="text-gray-500 bg-black-primary">Select budget range</option>
            <option value="£10-15 per person" className="text-white bg-black-primary">£10-15 per person</option>
            <option value="£15-20 per person" className="text-white bg-black-primary">£15-20 per person</option>
            <option value="£20-25 per person" className="text-white bg-black-primary">£20-25 per person</option>
            <option value="£25-30 per person" className="text-white bg-black-primary">£25-30 per person</option>
            <option value="£30+ per person" className="text-white bg-black-primary">£30+ per person</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-300 mb-2">Additional Requirements</label>
          <textarea
            name="message"
            rows={5}
            className="w-full px-4 py-3 bg-black-primary border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-rose-gold/50 focus:ring-2 focus:ring-rose-gold/20 transition-all"
            placeholder="Special requests, specific dishes, setup requirements, etc."
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isPending}
            className="w-full px-10 py-5 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-subheading font-bold text-lg shadow-2xl hover:shadow-rose-gold/50 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Sending Request...' : 'Get Free Quote →'}
          </button>
          <p className="text-center text-gray-400 text-xs mt-3">
            💬 Or WhatsApp us: <a href="https://wa.me/447391222884" className="text-rose-gold hover:underline">+44 7391 222884</a>
          </p>
        </div>
      </form>
    </div>
  )
}
