'use client'

import { useState, useEffect } from 'react'
import { X, Save } from 'lucide-react'
import VenueBookingFields from './VenueBookingFields'
import CateringBookingFields from './CateringBookingFields'
import HireBookingFields from './HireBookingFields'
import { VenueBookingData, CateringBookingData, HireBookingData } from '@/lib/models/Booking'

interface Booking {
  _id: string
  bookingType: 'venue' | 'catering' | 'hire'
  sourceLeadId?: string
  sourceLeadType?: 'venue' | 'catering' | 'hire'
  clientName: string
  clientEmail: string
  clientPhone?: string
  eventType: string
  date: string
  startTime?: string
  endTime?: string
  guestCount: number
  totalAmount?: number
  discount?: number
  paidAmount?: number
  status: 'tentative' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
  menuDetails?: string
  specialRequirements?: string
  typeSpecificData?: any
  createdAt?: string
}

interface BookingEditModalProps {
  booking: Booking
  isOpen: boolean
  onClose: () => void
  onSave: (bookingId: string, updates: any) => Promise<void>
}

export default function BookingEditModal({ booking, isOpen, onClose, onSave }: BookingEditModalProps) {
  const [formData, setFormData] = useState<Booking>(booking)
  const [typeSpecificData, setTypeSpecificData] = useState<any>(booking.typeSpecificData || {})
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setFormData(booking)
    setTypeSpecificData(booking.typeSpecificData || {})
  }, [booking])

  if (!isOpen) return null

  // No auto-calculation - total is manual input

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const updates = {
        ...formData,
        balanceDue: (formData.totalAmount || 0) - (formData.paidAmount || 0),
        typeSpecificData
      }
      await onSave(booking._id, updates)
      onClose()
    } catch (error) {
      console.error('Error saving booking:', error)
      alert('Failed to save booking')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-purple-500/50 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto my-8" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Edit Booking</h2>
            <p className="text-purple-100 mt-1">{booking.clientName} - {booking.bookingType.toUpperCase()}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Common Fields */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Basic Information</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Client Name</label>
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Client Email</label>
                  <input
                    type="email"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Client Phone</label>
                  <input
                    type="tel"
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Event Type</label>
                  <input
                    type="text"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Time (Start)</label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Time (End)</label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Guest Count</label>
                  <input
                    type="number"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  >
                    <option value="tentative">Tentative</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Notes</label>
                <textarea
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  placeholder="Any additional notes..."
                />
              </div>
            </div>
          </div>

          {/* Type-Specific Fields */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {formData.bookingType === 'venue' ? '🎪 Venue Booking Details' : 
               formData.bookingType === 'catering' ? '🍽️ Catering Details' : 
               '🏢 Space Hire Details'}
            </h3>
            {formData.bookingType === 'venue' && (
              <VenueBookingFields 
                data={typeSpecificData as VenueBookingData}
                onChange={setTypeSpecificData}
              />
            )}
            {formData.bookingType === 'catering' && (
              <CateringBookingFields 
                data={typeSpecificData as CateringBookingData}
                onChange={setTypeSpecificData}
              />
            )}
            {formData.bookingType === 'hire' && (
              <HireBookingFields 
                data={typeSpecificData as HireBookingData}
                onChange={setTypeSpecificData}
              />
            )}
          </div>

          {/* Pricing Summary */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">💰 Pricing Summary</h3>
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 p-6 rounded-xl border border-emerald-500/30">
              <div className="space-y-4 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Total Amount (£)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.totalAmount || 0}
                      onChange={(e) => setFormData({ ...formData, totalAmount: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white font-bold text-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                      placeholder="Enter total amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Discount (£)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.discount || 0}
                      onChange={(e) => setFormData({ ...formData, discount: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white font-bold text-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Paid Amount (£)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.paidAmount || 0}
                      onChange={(e) => setFormData({ ...formData, paidAmount: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white font-bold text-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Balance Due (£)</label>
                    <div className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-yellow-400 font-bold text-lg">
                      {((formData.totalAmount || 0) - (formData.discount || 0) - (formData.paidAmount || 0)).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-6 bg-gray-900/90 backdrop-blur-sm border-t border-purple-500/30 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all font-bold"
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}
