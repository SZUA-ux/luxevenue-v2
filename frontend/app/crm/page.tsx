import { connectDB } from '@/lib/db/connect'
import { VenueLead } from '@/lib/models/VenueLead'
import { CateringLead } from '@/lib/models/CateringLead'
import { HireLead } from '@/lib/models/HireLead'
import { Booking } from '@/lib/models/Booking'
import CRMLayout from '@/components/crm/CRMLayout'
import { Users, Calendar, TrendingUp, Mail } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth/getUser'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Dashboard - LUXE VENUE CRM',
}

export const dynamic = 'force-dynamic'

export default async function CRMDashboard() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/crm/login')
  }

  await connectDB()

  // Get stats
  const venueLeadsCount = await VenueLead.countDocuments()
  const cateringLeadsCount = await CateringLead.countDocuments()
  const hireLeadsCount = await HireLead.countDocuments()
  const totalLeads = venueLeadsCount + cateringLeadsCount + hireLeadsCount

  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const recentLeads = await VenueLead.countDocuments({ createdAt: { $gte: sevenDaysAgo } }) +
    await CateringLead.countDocuments({ createdAt: { $gte: sevenDaysAgo } }) +
    await HireLead.countDocuments({ createdAt: { $gte: sevenDaysAgo } })

  const bookingsCount = await Booking.countDocuments()
  const upcomingBookings = await Booking.countDocuments({
    date: { $gte: new Date().toISOString().split('T')[0] },
    status: { $in: ['tentative', 'confirmed'] }
  })

  // Get recent activity
  const recentVenueLeads = await VenueLead.find().sort({ createdAt: -1 }).limit(5).lean()
  const recentCateringLeads = await CateringLead.find().sort({ createdAt: -1 }).limit(5).lean()
  const recentHireLeads = await HireLead.find().sort({ createdAt: -1 }).limit(5).lean()

  const allRecentLeads = [
    ...recentVenueLeads.map((l: any) => ({ 
      ...l, 
      _id: l._id.toString(), 
      type: 'venue',
      createdAt: l.createdAt.toISOString()
    })),
    ...recentCateringLeads.map((l: any) => ({ 
      ...l, 
      _id: l._id.toString(), 
      type: 'catering',
      createdAt: l.createdAt.toISOString()
    })),
    ...recentHireLeads.map((l: any) => ({ 
      ...l, 
      _id: l._id.toString(), 
      type: 'hire',
      createdAt: l.createdAt.toISOString()
    }))
  ].sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 10)

  return (
    <CRMLayout user={user}>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Dashboard</h1>
          <p className="text-gray-400 mt-2">Welcome back, {user?.username || 'Admin'}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/30 shadow-2xl hover:border-purple-400/50 hover:shadow-purple-500/20 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium">Total Leads</p>
                <p className="text-3xl font-bold text-white mt-2">{totalLeads}</p>
                <p className="text-xs text-emerald-400 mt-1">+{recentLeads} new this week</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-blue-500/30 shadow-2xl hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium">Venue Leads</p>
                <p className="text-3xl font-bold text-white mt-2">{venueLeadsCount}</p>
                <p className="text-xs text-blue-400 mt-1">Event enquiries</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-pink-500/30 shadow-2xl hover:border-pink-400/50 hover:shadow-pink-500/20 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium">Catering Leads</p>
                <p className="text-3xl font-bold text-white mt-2">{cateringLeadsCount}</p>
                <p className="text-xs text-pink-400 mt-1">Catering enquiries</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-pink-400" />
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-emerald-500/30 shadow-2xl hover:border-emerald-400/50 hover:shadow-emerald-500/20 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium">Bookings</p>
                <p className="text-3xl font-bold text-white mt-2">{bookingsCount}</p>
                <p className="text-xs text-emerald-400 mt-1">{upcomingBookings} upcoming</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Lead Type Breakdown */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/30 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Lead Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-300">Venue Leads</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">{venueLeadsCount}</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50" style={{ width: `${totalLeads ? (venueLeadsCount / totalLeads) * 100 : 0}%` }}></div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-300">Catering Leads</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">{cateringLeadsCount}</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-500/50" style={{ width: `${totalLeads ? (cateringLeadsCount / totalLeads) * 100 : 0}%` }}></div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-300">Space Hire Leads</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">{hireLeadsCount}</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/50" style={{ width: `${totalLeads ? (hireLeadsCount / totalLeads) * 100 : 0}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/30 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          {allRecentLeads.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-gray-400">No recent leads</p>
            </div>
          ) : (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>
              
              <div className="space-y-6">
                {allRecentLeads.map((lead: any, index: number) => {
                  const typeColors = {
                    venue: { 
                      dot: 'bg-blue-500', 
                      glow: 'shadow-blue-500/50',
                      badge: 'bg-gradient-to-r from-blue-500 to-blue-600 border-blue-400',
                      icon: 'text-blue-400'
                    },
                    catering: { 
                      dot: 'bg-purple-500', 
                      glow: 'shadow-purple-500/50',
                      badge: 'bg-gradient-to-r from-purple-500 to-purple-600 border-purple-400',
                      icon: 'text-purple-400'
                    },
                    hire: { 
                      dot: 'bg-pink-500', 
                      glow: 'shadow-pink-500/50',
                      badge: 'bg-gradient-to-r from-pink-500 to-pink-600 border-pink-400',
                      icon: 'text-pink-400'
                    }
                  }
                  const colors = typeColors[lead.type as keyof typeof typeColors] || typeColors.venue
                  
                  return (
                    <div key={`${lead.type}-${lead._id}`} className="relative pl-16 group">
                      {/* Timeline dot */}
                      <div className={`absolute left-4 top-3 w-4 h-4 rounded-full ${colors.dot} shadow-lg ${colors.glow} animate-pulse`}></div>
                      
                      {/* Content card */}
                      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-purple-400/30 hover:shadow-xl transition-all">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <p className="font-bold text-white text-lg">{lead.clientName}</p>
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border ${colors.badge} shadow-lg`}>
                                <span className={`w-1.5 h-1.5 rounded-full bg-white`}></span>
                                {lead.type === 'venue' ? 'VENUE' : lead.type === 'catering' ? 'CATERING' : 'SPACE HIRE'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                              <Mail className={`w-4 h-4 ${colors.icon}`} />
                              {lead.clientEmail}
                            </div>
                            {lead.eventType && (
                              <p className="text-sm text-gray-500">Event: {lead.eventType}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">{new Date(lead.createdAt).toLocaleDateString()}</p>
                            <p className="text-xs text-gray-600">{new Date(lead.createdAt).toLocaleTimeString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </CRMLayout>
  )
}
