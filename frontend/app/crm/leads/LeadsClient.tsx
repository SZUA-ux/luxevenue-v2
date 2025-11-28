'use client'

import { useState } from 'react'
import { Filter, Mail, Phone, Calendar, MapPin, X, Check, Search } from 'lucide-react'
import { convertLeadToBooking } from '@/lib/actions/booking'
import { useRouter } from 'next/navigation'

interface Lead {
  _id: string
  type: 'venue' | 'catering' | 'hire'
  clientName: string
  clientEmail: string
  clientPhone: string
  eventType?: string
  spaceType?: string
  eventDate?: string
  preferredDate?: string
  guestCount?: number
  status?: string
  sourcePage?: string
  createdAt: string
  notes?: string
  cuisineType?: string
  location?: string
}

export default function LeadsClient({ leads }: { leads: Lead[] }) {
  const router = useRouter()
  const [filterType, setFilterType] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [convertModalOpen, setConvertModalOpen] = useState(false)
  const [convertData, setConvertData] = useState({
    date: '',
    startTime: '10:00',
    endTime: '18:00',
    guestCount: 0,
    totalAmount: 0,
    discount: 0,
    paidAmount: 0,
    eventType: '',
    menuDetails: '',
    specialRequirements: '',
    status: 'confirmed' as 'tentative' | 'confirmed'
  })
  const [converting, setConverting] = useState(false)

  const filteredLeads = leads.filter(lead => {
    if (filterType !== 'all' && lead.type !== filterType) return false
    if (filterStatus !== 'all' && lead.status !== filterStatus) return false
    
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      return (
        lead.clientName.toLowerCase().includes(query) ||
        lead.clientEmail.toLowerCase().includes(query) ||
        lead.clientPhone?.toLowerCase().includes(query) ||
        lead.eventType?.toLowerCase().includes(query) ||
        lead.eventDate?.includes(query) ||
        lead.preferredDate?.includes(query)
      )
    }
    return true
  })

  const openConvertModal = (lead: Lead) => {
    setSelectedLead(lead)
    setConvertData({
      date: lead.eventDate || lead.preferredDate || '',
      startTime: '10:00',
      endTime: '18:00',
      guestCount: lead.guestCount || 50,
      totalAmount: 0,
      discount: 0,
      paidAmount: 0,
      eventType: lead.eventType || lead.spaceType || '',
      menuDetails: '',
      specialRequirements: lead.notes || '',
      status: 'tentative'
    })
    setConvertModalOpen(true)
  }

  const handleConvert = async () => {
    if (!selectedLead || converting) return
    
    setConverting(true)
    
    try {
      const result = await convertLeadToBooking(selectedLead._id, selectedLead.type, convertData)
      
      if (result.success) {
        alert('✅ Lead converted to booking successfully!')
        setConvertModalOpen(false)
        setSelectedLead(null)
        router.refresh()
      } else {
        alert('❌ ' + (result.error || 'Failed to convert lead. Please check all required fields.'))
      }
    } catch (error) {
      alert('❌ An error occurred. Please try again.')
      console.error('Convert error:', error)
    } finally {
      setConverting(false)
    }
  }

  const getTypeColor = (type: string) => {
    if (type === 'venue') return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-400'
    if (type === 'catering') return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-purple-400'
    return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-400'
  }

  const getStatusColor = (status?: string) => {
    if (status === 'new') return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
    if (status === 'contacted') return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
    if (status === 'qualified') return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
    if (status === 'converted') return 'bg-gradient-to-r from-green-500 to-green-600 text-white'
    if (status === 'lost') return 'bg-gradient-to-r from-red-500 to-red-600 text-white'
    return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">All Leads</h1>
        <p className="text-gray-400 mt-2">Manage all incoming enquiries</p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name, email, phone, event type, date..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 shadow-2xl">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-400" />
          <span className="font-semibold text-white">Filters:</span>
        </div>
        
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 bg-gray-800 border border-purple-500/30 rounded-lg text-white font-medium focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
        >
          <option value="all">All Types</option>
          <option value="venue">Venue Leads</option>
          <option value="catering">Catering Leads</option>
          <option value="hire">Space Hire Leads</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 bg-gray-800 border border-purple-500/30 rounded-lg text-white font-medium focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>

        <div className="ml-auto text-sm text-purple-400 font-medium">
          Showing {filteredLeads.length} of {leads.length} leads
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600 to-pink-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Event/Service</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-500/20">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">No leads found</td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-purple-500/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">{lead.clientName}</div>
                      <div className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                        <Mail className="w-3 h-3" />
                        {lead.clientEmail}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                        <Phone className="w-3 h-3" />
                        {lead.clientPhone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold border shadow-lg ${getTypeColor(lead.type)}`}>
                        {lead.type === 'venue' ? 'VENUE' : lead.type === 'catering' ? 'CATERING' : 'SPACE HIRE'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-white">
                        {lead.eventType || lead.spaceType || '-'}
                      </div>
                      {lead.guestCount && (
                        <div className="text-xs text-gray-400 mt-1">{lead.guestCount} guests</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        {lead.eventDate || lead.preferredDate || '-'}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Submitted {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg ${getStatusColor(lead.status)}`}>
                        {(lead.status || 'new').toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-xl transition-all text-sm font-bold"
                        >
                          VIEW
                        </button>
                        {lead.status !== 'converted' && (
                          <button
                            onClick={() => openConvertModal(lead)}
                            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all text-sm font-bold flex items-center gap-1"
                          >
                            <Check className="w-4 h-4" />
                            CONVERT
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Detail Modal */}
      {selectedLead && !convertModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedLead(null)}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-purple-500/50 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
              <h3 className="text-2xl font-bold text-white">{selectedLead.clientName}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold ${getTypeColor(selectedLead.type)}`}>
                  {selectedLead.type === 'venue' ? 'VENUE LEAD' : selectedLead.type === 'catering' ? 'CATERING LEAD' : 'SPACE HIRE LEAD'}
                </span>
              </div>
            </div>
            
            <div className="p-6 space-y-4 text-gray-300">
              <div>
                <label className="text-sm font-bold text-purple-400">Contact Information</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a href={`mailto:${selectedLead.clientEmail}`} className="hover:text-purple-400">{selectedLead.clientEmail}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <a href={`tel:${selectedLead.clientPhone}`} className="hover:text-purple-400">{selectedLead.clientPhone}</a>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-purple-400">Event Details</label>
                <div className="mt-2 space-y-2">
                  <p><strong className="text-white">Type:</strong> {selectedLead.eventType || selectedLead.spaceType || '-'}</p>
                  {selectedLead.cuisineType && <p><strong className="text-white">Cuisine:</strong> {selectedLead.cuisineType}</p>}
                  {selectedLead.guestCount && <p><strong className="text-white">Guests:</strong> {selectedLead.guestCount}</p>}
                  {(selectedLead.eventDate || selectedLead.preferredDate) && (
                    <p><strong className="text-white">Date:</strong> {selectedLead.eventDate || selectedLead.preferredDate}</p>
                  )}
                  {selectedLead.location && <p><strong className="text-white">Location:</strong> {selectedLead.location}</p>}
                </div>
              </div>

              {selectedLead.notes && (
                <div>
                  <label className="text-sm font-bold text-purple-400">Notes</label>
                  <p className="mt-2 bg-gray-800 p-4 rounded-lg">{selectedLead.notes}</p>
                </div>
              )}
            </div>

            <div className="p-6 bg-gray-900/50 flex justify-end gap-3">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all font-bold"
              >
                Close
              </button>
              {selectedLead.status !== 'converted' && (
                <button
                  onClick={() => { setConvertModalOpen(true) }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all font-bold"
                >
                  Convert to Booking
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Convert to Booking Modal */}
      {convertModalOpen && selectedLead && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setConvertModalOpen(false)}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-emerald-500/50 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6">
              <h3 className="text-2xl font-bold text-white">Convert Lead to Booking</h3>
              <p className="text-emerald-100 mt-1">{selectedLead.clientName} - {selectedLead.clientEmail}</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-purple-400 mb-2">Event Type *</label>
                  <input
                    type="text"
                    value={convertData.eventType}
                    onChange={(e) => setConvertData({...convertData, eventType: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                    placeholder="Wedding, Corporate Event, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-400 mb-2">Date *</label>
                  <input
                    type="date"
                    value={convertData.date}
                    onChange={(e) => setConvertData({...convertData, date: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-bold text-purple-400 mb-2">Time (Start)</label>
                  <input
                    type="time"
                    value={convertData.startTime}
                    onChange={(e) => setConvertData({...convertData, startTime: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-400 mb-2">Time (End)</label>
                  <input
                    type="time"
                    value={convertData.endTime}
                    onChange={(e) => setConvertData({...convertData, endTime: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-400 mb-2">Guests</label>
                  <input
                    type="number"
                    value={convertData.guestCount}
                    onChange={(e) => setConvertData({...convertData, guestCount: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-emerald-400 mb-2">Total Amount (£)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={convertData.totalAmount}
                    onChange={(e) => setConvertData({...convertData, totalAmount: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-3 bg-gray-800 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-emerald-400 mb-2">Discount (£)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={convertData.discount}
                    onChange={(e) => setConvertData({...convertData, discount: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-3 bg-gray-800 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-emerald-400 mb-2">Paid Amount (£)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={convertData.paidAmount}
                    onChange={(e) => setConvertData({...convertData, paidAmount: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-3 bg-gray-800 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-yellow-400 mb-2">Balance Due (£)</label>
                  <div className="w-full px-4 py-3 bg-gray-700 border border-yellow-500/30 rounded-lg text-yellow-400 font-bold text-lg">
                    {(convertData.totalAmount - convertData.discount - convertData.paidAmount).toFixed(2)}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-purple-400 mb-2">Booking Status</label>
                <select
                  value={convertData.status}
                  onChange={(e) => setConvertData({...convertData, status: e.target.value as 'tentative' | 'confirmed'})}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                >
                  <option value="tentative">Tentative</option>
                  <option value="confirmed">Confirmed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-purple-400 mb-2">Menu Details</label>
                <textarea
                  value={convertData.menuDetails}
                  onChange={(e) => setConvertData({...convertData, menuDetails: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                  placeholder="Menu selections, dietary requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-purple-400 mb-2">Special Requirements</label>
                <textarea
                  value={convertData.specialRequirements}
                  onChange={(e) => setConvertData({...convertData, specialRequirements: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
                  placeholder="Additional notes..."
                />
              </div>
            </div>

            <div className="p-6 bg-gray-900/50 flex justify-end gap-3">
              <button
                onClick={() => { setConvertModalOpen(false); setSelectedLead(null); }}
                disabled={converting}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all font-bold disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConvert}
                disabled={converting || !convertData.date || !convertData.eventType}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {converting ? 'Converting...' : 'Create Booking'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
