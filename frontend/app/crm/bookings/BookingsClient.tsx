'use client'

import { useState } from 'react'
import { Calendar, Users, DollarSign, Mail, Phone, Clock, Edit, Trash2, Archive, CheckCircle, X, Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'
import BookingEditModal from '@/components/crm/bookings/BookingEditModal'
import { updateBooking } from '@/lib/actions/booking'

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
  createdAt: string
}

export default function BookingsClient({ bookings }: { bookings: Booking[] }) {
  const router = useRouter()
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [viewModalOpen, setViewModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)

  const filteredBookings = bookings.filter(booking => {
    if (filterStatus !== 'all' && booking.status !== filterStatus) return false
    return true
  })

  const getStatusColor = (status: string) => {
    if (status === 'confirmed') return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-emerald-400'
    if (status === 'tentative') return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-yellow-400'
    if (status === 'completed') return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-400'
    if (status === 'cancelled') return 'bg-gradient-to-r from-red-500 to-red-600 text-white border-red-400'
    return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white border-gray-400'
  }

  const handleViewBooking = (booking: Booking) => {
    setSelectedBooking(booking)
    setViewModalOpen(true)
  }

  const handleEditBooking = (booking: Booking) => {
    setSelectedBooking(booking)
    setEditModalOpen(true)
  }

  const handleSaveBooking = async (bookingId: string, updates: any) => {
    try {
      const result = await updateBooking(bookingId, updates)
      if (result.success) {
        router.refresh()
        setEditModalOpen(false)
      } else {
        alert(result.error || 'Failed to update booking')
      }
    } catch (error) {
      console.error('Error updating booking:', error)
      alert('Failed to update booking')
    }
  }

  const handleDownloadPDF = async (bookingId: string) => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || '/api'
      const response = await fetch(`${backendUrl}/bookings/${bookingId}/pdf`, {
        method: 'POST',
      })
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `booking_${bookingId}.pdf`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
        alert('✅ PDF downloaded successfully!')
      } else {
        alert('❌ Failed to generate PDF')
      }
    } catch (error) {
      console.error('Error downloading PDF:', error)
      alert('❌ Error downloading PDF')
    }
  }

  const handlePrintBooking = () => {
    window.print()
  }

  const handleSendEmail = async (bookingId: string, type: 'confirmation' | 'reminder') => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || '/api'
      const response = await fetch(`${backendUrl}/bookings/${bookingId}/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      })
      
      const data = await response.json()
      if (data.success) {
        alert(`✅ ${type === 'confirmation' ? 'Confirmation' : 'Reminder'} email sent successfully!`)
      } else {
        alert(`❌ Failed to send email: ${data.error}`)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('❌ Error sending email')
    }
  }

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    // TODO: Implement status change
    alert(`Changing status to ${newStatus} for booking ${bookingId}`)
    router.refresh()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Bookings</h1>
        <p className="text-gray-400 mt-2">Manage all venue bookings</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-emerald-500/30 shadow-2xl hover:border-emerald-400/50 hover:shadow-emerald-500/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Confirmed</p>
              <p className="text-3xl font-bold text-white mt-2">{bookings.filter(b => b.status === 'confirmed').length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </div>
        <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-yellow-500/30 shadow-2xl hover:border-yellow-400/50 hover:shadow-yellow-500/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Tentative</p>
              <p className="text-3xl font-bold text-white mt-2">{bookings.filter(b => b.status === 'tentative').length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
        </div>
        <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-blue-500/30 shadow-2xl hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Completed</p>
              <p className="text-3xl font-bold text-white mt-2">{bookings.filter(b => b.status === 'completed').length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 shadow-2xl">
        <span className="font-semibold text-white">Filter:</span>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 bg-gray-800 border border-purple-500/30 rounded-lg text-white font-medium focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
        >
          <option value="all">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="tentative">Tentative</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <div className="ml-auto text-sm text-purple-400 font-medium">
          Showing {filteredBookings.length} of {bookings.length} bookings
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600 to-pink-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Client</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Event</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Guests</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-500/20">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-400">No bookings found</td>
                </tr>
              ) : (
                filteredBookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-purple-500/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">{booking.clientName}</div>
                      <div className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                        <Mail className="w-3 h-3" />
                        {booking.clientEmail}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-white">{booking.eventType}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        {booking.date}
                      </div>
                      {booking.startTime && (
                        <div className="text-xs text-gray-500 mt-1">
                          {booking.startTime} - {booking.endTime}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-gray-300">
                        <Users className="w-4 h-4 text-purple-400" />
                        {booking.guestCount}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-gray-300 font-semibold">
                        <DollarSign className="w-4 h-4 text-emerald-400" />
                        £{booking.totalAmount || 0}
                      </div>
                      {booking.paidAmount && booking.paidAmount > 0 && (
                        <div className="text-xs text-emerald-400 mt-1">Paid: £{booking.paidAmount}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border shadow-lg ${getStatusColor(booking.status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        {booking.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewBooking(booking)}
                          className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-xl transition-all"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEditBooking(booking)}
                          className="p-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all"
                          title="Edit Booking"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleSendEmail(booking._id, 'confirmation')}
                          className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all"
                          title="Send Email"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Booking Modal */}
      {editModalOpen && selectedBooking && (
        <BookingEditModal
          booking={selectedBooking}
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSaveBooking}
        />
      )}

      {/* View Booking Modal */}
      {viewModalOpen && selectedBooking && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setViewModalOpen(false)}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-purple-500/50 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
              <h3 className="text-2xl font-bold text-white">Booking Details</h3>
              <p className="text-purple-100 mt-1">{selectedBooking.clientName} - {selectedBooking.eventType}</p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Client Information */}
              <div>
                <label className="block text-sm font-bold text-purple-400 mb-3">Client Information</label>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-white">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="font-semibold">{selectedBooking.clientName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    {selectedBooking.clientEmail}
                  </div>
                  {selectedBooking.clientPhone && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-purple-400" />
                      {selectedBooking.clientPhone}
                    </div>
                  )}
                </div>
              </div>

              {/* Event Details */}
              <div>
                <label className="block text-sm font-bold text-purple-400 mb-3">Event Details</label>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl space-y-2 text-gray-300">
                  <p><strong className="text-white">Type:</strong> {selectedBooking.eventType}</p>
                  <p><strong className="text-white">Date:</strong> {selectedBooking.date}</p>
                  {selectedBooking.startTime && (
                    <p><strong className="text-white">Time:</strong> {selectedBooking.startTime} - {selectedBooking.endTime}</p>
                  )}
                  <p><strong className="text-white">Guests:</strong> {selectedBooking.guestCount}</p>
                  <p>
                    <strong className="text-white">Status:</strong>
                    <span className={`ml-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border ${getStatusColor(selectedBooking.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      {selectedBooking.status.toUpperCase()}
                    </span>
                  </p>
                </div>
              </div>

              {/* Financial Details */}
              <div>
                <label className="block text-sm font-bold text-purple-400 mb-3">Financial Details</label>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl space-y-2 text-gray-300">
                  <p><strong className="text-white">Total Amount:</strong> £{selectedBooking.totalAmount || 0}</p>
                  <p><strong className="text-white">Paid Amount:</strong> £{selectedBooking.paidAmount || 0}</p>
                  <p><strong className="text-white">Balance Due:</strong> £{(selectedBooking.totalAmount || 0) - (selectedBooking.paidAmount || 0)}</p>
                </div>
              </div>

              {/* Additional Details */}
              {(selectedBooking.menuDetails || selectedBooking.specialRequirements) && (
                <div>
                  <label className="block text-sm font-bold text-purple-400 mb-3">Additional Details</label>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl space-y-3 text-gray-300">
                    {selectedBooking.menuDetails && (
                      <div>
                        <strong className="text-white block mb-1">Menu Details:</strong>
                        <p className="text-sm">{selectedBooking.menuDetails}</p>
                      </div>
                    )}
                    {selectedBooking.specialRequirements && (
                      <div>
                        <strong className="text-white block mb-1">Special Requirements:</strong>
                        <p className="text-sm">{selectedBooking.specialRequirements}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-gray-900/50 flex justify-between items-center gap-3">
              <button
                onClick={() => setViewModalOpen(false)}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all font-bold"
              >
                Close
              </button>
              <div className="flex gap-3">
                <button
                  onClick={handlePrintBooking}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2"
                  title="Print Booking"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print
                </button>
                <button
                  onClick={() => handleDownloadPDF(selectedBooking._id)}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2"
                  title="Download PDF"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF
                </button>
                <button
                  onClick={() => handleSendEmail(selectedBooking._id, 'confirmation')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2"
                  title="Send Confirmation Email"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
