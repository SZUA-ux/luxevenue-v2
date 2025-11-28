'use client'

import { useState, useMemo } from 'react'
import { Calendar, Users, Mail, Eye, Edit, Search, Trash2 } from 'lucide-react'
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

interface BookingsTabsProps {
  venueBookings: Booking[]
  cateringBookings: Booking[]
  hireBookings: Booking[]
}

// Smart date-based status calculation
function getBookingStatus(dateString: string) {
  const bookingDate = new Date(dateString)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  bookingDate.setHours(0, 0, 0, 0)
  
  const diffTime = bookingDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays < 0) {
    return { label: 'Completed', color: 'bg-blue-500', emoji: '✓', class: 'completed' }
  } else if (diffDays === 0) {
    return { label: 'Today', color: 'bg-purple-500', emoji: '🔔', class: 'today' }
  } else if (diffDays <= 7) {
    return { label: 'This Week', color: 'bg-orange-500', emoji: '⚡', class: 'soon' }
  } else if (diffDays <= 30) {
    return { label: 'This Month', color: 'bg-yellow-500', emoji: '📅', class: 'upcoming' }
  } else {
    return { label: 'Upcoming', color: 'bg-green-500', emoji: '🗓️', class: 'future' }
  }
}

export default function BookingsTabs({ venueBookings, cateringBookings, hireBookings }: BookingsTabsProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'venue' | 'catering' | 'hire'>('venue')
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [viewModalOpen, setViewModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [creating, setCreating] = useState(false)
  const [newBookingData, setNewBookingData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    eventType: '',
    date: '',
    startTime: '10:00',
    endTime: '18:00',
    guestCount: 50,
    totalAmount: 0,
    discount: 0,
    paidAmount: 0,
    status: 'tentative' as 'tentative' | 'confirmed',
    notes: '',
  })

  // Status color helper (for backwards compatibility)


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

  const handleDeleteBooking = async (bookingId: string, clientName: string) => {
    // Confirmation dialog
    const confirmed = window.confirm(
      `Are you sure you want to delete the booking for ${clientName}?\n\nThis action cannot be undone.`
    )
    
    if (!confirmed) return

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (result.success) {
        alert('✅ Booking deleted successfully!')
        router.refresh()
      } else {
        alert(`❌ ${result.error || 'Failed to delete booking'}`)
      }
    } catch (error) {
      console.error('Error deleting booking:', error)
      alert('❌ Failed to delete booking')
    }
  }

  const handleCreateBooking = async () => {
    if (!newBookingData.clientName || !newBookingData.clientEmail || !newBookingData.date || !newBookingData.eventType) {
      alert('❌ Please fill in all required fields (Name, Email, Date, Event Type)')
      return
    }

    setCreating(true)
    try {
      const response = await fetch('/api/bookings/create-direct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newBookingData,
          bookingType: activeTab,
        }),
      })

      const result = await response.json()
      if (result.success) {
        alert('✅ Booking created successfully!')
        setCreateModalOpen(false)
        setNewBookingData({
          clientName: '',
          clientEmail: '',
          clientPhone: '',
          eventType: '',
          date: '',
          startTime: '10:00',
          endTime: '18:00',
          guestCount: 50,
          totalAmount: 0,
          discount: 0,
          paidAmount: 0,
          status: 'tentative',
          notes: '',
        })
        router.refresh()
      } else {
        alert(`❌ ${result.error || 'Failed to create booking'}`)
      }
    } catch (error) {
      console.error('Error creating booking:', error)
      alert('❌ Failed to create booking')
    } finally {
      setCreating(false)
    }
  }

  const handleDownloadPDF = async (bookingId: string) => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}/pdf`, {
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
      const response = await fetch(`/api/bookings/${bookingId}/email`, {
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

  const getTabIcon = (type: 'venue' | 'catering' | 'hire') => {
    if (type === 'venue') return '🎪'
    if (type === 'catering') return '🍽️'
    return '🏢'
  }

  const getTabLabel = (type: 'venue' | 'catering' | 'hire') => {
    if (type === 'venue') return 'Venue Bookings'
    if (type === 'catering') return 'Catering Bookings'
    return 'Space Hire Bookings'
  }

  // Get current bookings based on active tab
  const currentBookings = activeTab === 'venue' ? venueBookings : activeTab === 'catering' ? cateringBookings : hireBookings

  // Filter bookings based on search query and status
  const filteredBookings = useMemo(() => {
    let filtered = currentBookings

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(booking => 
        booking.clientName.toLowerCase().includes(query) ||
        booking.clientEmail.toLowerCase().includes(query) ||
        booking.clientPhone?.toLowerCase().includes(query) ||
        booking.eventType.toLowerCase().includes(query) ||
        booking.date.includes(query)
      )
    }

    // Status filter (date-based)
    if (filterStatus !== 'all') {
      filtered = filtered.filter(booking => {
        const status = getBookingStatus(booking.date)
        return status.class === filterStatus
      })
    }

    return filtered
  }, [currentBookings, searchQuery, filterStatus])

  // Calculate status counts
  const statusCounts = useMemo(() => {
    const counts = {
      completed: 0,
      today: 0,
      soon: 0,
      upcoming: 0,
      future: 0,
      total: currentBookings.length
    }
    
    currentBookings.forEach(booking => {
      const status = getBookingStatus(booking.date)
      counts[status.class as keyof typeof counts]++
    })
    
    return counts
  }, [currentBookings])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Bookings Management</h1>
        <p className="text-gray-400 mt-2">Manage venue, catering, and space hire bookings</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b-2 border-purple-500/30">
        {(['venue', 'catering', 'hire'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 font-bold text-lg transition-all flex items-center gap-2 ${
              activeTab === tab
                ? 'border-b-4 border-purple-500 text-white bg-purple-500/20'
                : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
            }`}
          >
            <span className="text-2xl">{getTabIcon(tab)}</span>
            {getTabLabel(tab)}
            <span className="ml-2 px-2 py-1 bg-purple-500/30 rounded-full text-xs">
              {tab === 'venue' ? venueBookings.length : tab === 'catering' ? cateringBookings.length : hireBookings.length}
            </span>
          </button>
        ))}
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              data-testid="bookings-search-input"
              type="text"
              placeholder="Search by name, email, phone, date, event..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Create Button */}
        <button
          data-testid="create-booking-btn"
          onClick={() => setCreateModalOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Booking
        </button>
      </div>

      {/* Status Filter Chips */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setFilterStatus('all')}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            filterStatus === 'all' 
              ? 'bg-purple-500 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          All ({statusCounts.total})
        </button>
        <button
          onClick={() => setFilterStatus('today')}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            filterStatus === 'today' 
              ? 'bg-purple-500 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🔔 Today ({statusCounts.today})
        </button>
        <button
          onClick={() => setFilterStatus('soon')}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            filterStatus === 'soon' 
              ? 'bg-orange-500 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          ⚡ This Week ({statusCounts.soon})
        </button>
        <button
          onClick={() => setFilterStatus('upcoming')}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            filterStatus === 'upcoming' 
              ? 'bg-yellow-500 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          📅 This Month ({statusCounts.upcoming})
        </button>
        <button
          onClick={() => setFilterStatus('future')}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            filterStatus === 'future' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🗓️ Future ({statusCounts.future})
        </button>
        <button
          onClick={() => setFilterStatus('completed')}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            filterStatus === 'completed' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          ✓ Completed ({statusCounts.completed})
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/30 shadow-2xl hover:border-purple-400/50 hover:shadow-purple-500/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Today & This Week</p>
              <p className="text-3xl font-bold text-white mt-2">{statusCounts.today + statusCounts.soon}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </div>
        <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-yellow-500/30 shadow-2xl hover:border-yellow-400/50 hover:shadow-yellow-500/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Tentative</p>
              <p className="text-3xl font-bold text-white mt-2">{filteredBookings.filter(b => b.status === 'tentative').length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
        </div>
        <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-blue-500/30 shadow-2xl hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-medium">Completed</p>
              <p className="text-3xl font-bold text-white mt-2">{filteredBookings.filter(b => b.status === 'completed').length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 shadow-2xl">
        <span className="font-semibold text-white">Status Filter:</span>
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
          Showing {filteredBookings.length} of {currentBookings.length} {activeTab} bookings
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
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                    No {activeTab} bookings found
                  </td>
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
                        <span className="text-emerald-400 font-bold">£</span>{booking.totalAmount || 0}
                      </div>
                      {booking.paidAmount && booking.paidAmount > 0 && (
                        <div className="text-xs text-emerald-400 mt-1">Paid: £{booking.paidAmount}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {(() => {
                        const status = getBookingStatus(booking.date)
                        return (
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-white ${status.color} shadow-lg`}>
                            <span className="text-base">{status.emoji}</span>
                            {status.label}
                          </span>
                        )
                      })()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          data-testid={`view-booking-${booking._id}`}
                          onClick={() => handleViewBooking(booking)}
                          className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-xl transition-all"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          data-testid={`edit-booking-${booking._id}`}
                          onClick={() => handleEditBooking(booking)}
                          className="p-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all"
                          title="Edit Booking"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          data-testid={`download-pdf-${booking._id}`}
                          onClick={() => handleDownloadPDF(booking._id)}
                          className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all"
                          title="Download PDF"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                        <button
                          data-testid={`delete-booking-${booking._id}`}
                          onClick={() => handleDeleteBooking(booking._id, booking.clientName)}
                          className="p-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-xl transition-all"
                          title="Delete Booking"
                        >
                          <Trash2 className="w-4 h-4" />
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

      {/* Create Booking Modal */}
      {createModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={() => !creating && setCreateModalOpen(false)}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-purple-500/50 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600 p-6">
              <h2 className="text-2xl font-bold text-white">
                Create New {activeTab === 'venue' ? '🎪 Venue' : activeTab === 'catering' ? '🍽️ Catering' : '🏢 Space Hire'} Booking
              </h2>
              <p className="text-purple-100 mt-1">Direct booking without lead conversion</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Client Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Client Information</h3>
                <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Client Name *</label>
                      <input
                        data-testid="booking-client-name"
                        type="text"
                        value={newBookingData.clientName}
                        onChange={(e) => setNewBookingData({...newBookingData, clientName: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Client Email *</label>
                      <input
                        data-testid="booking-client-email"
                        type="email"
                        value={newBookingData.clientEmail}
                        onChange={(e) => setNewBookingData({...newBookingData, clientEmail: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Client Phone</label>
                    <input
                      type="tel"
                      value={newBookingData.clientPhone}
                      onChange={(e) => setNewBookingData({...newBookingData, clientPhone: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Event Details</h3>
                <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Event Type *</label>
                      <input
                        data-testid="booking-event-type"
                        type="text"
                        value={newBookingData.eventType}
                        onChange={(e) => setNewBookingData({...newBookingData, eventType: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                        placeholder={activeTab === 'venue' ? 'Wedding, Corporate Event, Birthday' : activeTab === 'catering' ? 'Wedding Catering, Corporate Lunch' : 'Studio Rental, Theatre Practice'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Date *</label>
                      <input
                        data-testid="booking-date"
                        type="date"
                        value={newBookingData.date}
                        onChange={(e) => setNewBookingData({...newBookingData, date: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Time (Start)</label>
                      <input
                        type="time"
                        value={newBookingData.startTime}
                        onChange={(e) => setNewBookingData({...newBookingData, startTime: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Time (End)</label>
                      <input
                        type="time"
                        value={newBookingData.endTime}
                        onChange={(e) => setNewBookingData({...newBookingData, endTime: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Guests</label>
                      <input
                        type="number"
                        value={newBookingData.guestCount}
                        onChange={(e) => setNewBookingData({...newBookingData, guestCount: parseInt(e.target.value)})}
                        className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Notes</label>
                    <textarea
                      value={newBookingData.notes}
                      onChange={(e) => setNewBookingData({...newBookingData, notes: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                      placeholder="Any special requirements or notes..."
                    />
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">💰 Pricing</h3>
                <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 p-6 rounded-xl border border-emerald-500/30">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Total Amount (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newBookingData.totalAmount}
                        onChange={(e) => setNewBookingData({...newBookingData, totalAmount: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white font-bold text-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Discount (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newBookingData.discount}
                        onChange={(e) => setNewBookingData({...newBookingData, discount: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white font-bold text-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Paid Amount (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newBookingData.paidAmount}
                        onChange={(e) => setNewBookingData({...newBookingData, paidAmount: parseFloat(e.target.value) || 0})}
                        className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white font-bold text-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Balance Due (£)</label>
                      <div className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-yellow-400 font-bold text-lg">
                        {(newBookingData.totalAmount - newBookingData.discount - newBookingData.paidAmount).toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Booking Status</label>
                    <select
                      value={newBookingData.status}
                      onChange={(e) => setNewBookingData({...newBookingData, status: e.target.value as 'tentative' | 'confirmed'})}
                      className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white font-medium focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
                    >
                      <option value="tentative">Tentative</option>
                      <option value="confirmed">Confirmed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 p-6 bg-gray-900/90 backdrop-blur-sm border-t border-purple-500/30 flex justify-end gap-3">
              <button
                onClick={() => !creating && setCreateModalOpen(false)}
                disabled={creating}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all font-bold disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                data-testid="submit-create-booking"
                onClick={handleCreateBooking}
                disabled={creating || !newBookingData.clientName || !newBookingData.clientEmail || !newBookingData.date || !newBookingData.eventType}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {creating ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Create Booking
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModalOpen && selectedBooking && (
        <BookingEditModal
          booking={selectedBooking}
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSaveBooking}
        />
      )}

      {/* View Modal - Simplified version */}
      {viewModalOpen && selectedBooking && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setViewModalOpen(false)}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-purple-500/50 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
              <h3 className="text-2xl font-bold text-white">Booking Details</h3>
              <p className="text-purple-100 mt-1">{selectedBooking.clientName} - {selectedBooking.bookingType.toUpperCase()}</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-purple-400 mb-3">Client Information</label>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl space-y-2">
                  <p className="text-white"><strong>Name:</strong> {selectedBooking.clientName}</p>
                  <p className="text-gray-300"><strong>Email:</strong> {selectedBooking.clientEmail}</p>
                  <p className="text-gray-300"><strong>Phone:</strong> {selectedBooking.clientPhone}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-purple-400 mb-3">Event Details</label>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl space-y-2 text-gray-300">
                  <p><strong className="text-white">Type:</strong> {selectedBooking.eventType}</p>
                  <p><strong className="text-white">Date:</strong> {selectedBooking.date}</p>
                  <p><strong className="text-white">Time:</strong> {selectedBooking.startTime} - {selectedBooking.endTime}</p>
                  <p><strong className="text-white">Guests:</strong> {selectedBooking.guestCount}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-emerald-400 mb-3">Financial Summary</label>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl space-y-2 text-gray-300">
                  <p><strong className="text-white">Total:</strong> £{selectedBooking.totalAmount || 0}</p>
                  <p><strong className="text-white">Discount:</strong> £{selectedBooking.discount || 0}</p>
                  <p><strong className="text-white">Paid:</strong> £{selectedBooking.paidAmount || 0}</p>
                  <p className="text-yellow-400 text-lg"><strong>Balance:</strong> £{((selectedBooking.totalAmount || 0) - (selectedBooking.discount || 0) - (selectedBooking.paidAmount || 0)).toFixed(2)}</p>
                </div>
              </div>
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
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print
                </button>
                <button
                  onClick={() => handleDownloadPDF(selectedBooking._id)}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF
                </button>
                <button
                  onClick={() => handleSendEmail(selectedBooking._id, 'confirmation')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2"
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
