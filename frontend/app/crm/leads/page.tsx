import { connectDB } from '@/lib/db/connect'
import { VenueLead } from '@/lib/models/VenueLead'
import { CateringLead } from '@/lib/models/CateringLead'
import { HireLead } from '@/lib/models/HireLead'
import CRMLayout from '@/components/crm/CRMLayout'
import LeadsClient from './LeadsClient'
import { getCurrentUser } from '@/lib/auth/getUser'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Leads - LUXE VENUE CRM',
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function LeadsPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/crm/login')
  }

  await connectDB()

  const venueLeads = await VenueLead.find().sort({ createdAt: -1 }).limit(100).lean()
  const cateringLeads = await CateringLead.find().sort({ createdAt: -1 }).limit(100).lean()
  const hireLeads = await HireLead.find().sort({ createdAt: -1 }).limit(100).lean()

  const serializedVenueLeads = venueLeads.map((lead: any) => ({
    ...lead,
    _id: lead._id.toString(),
    type: 'venue',
    createdAt: lead.createdAt.toISOString(),
    updatedAt: lead.updatedAt?.toISOString(),
  }))

  const serializedCateringLeads = cateringLeads.map((lead: any) => ({
    ...lead,
    _id: lead._id.toString(),
    type: 'catering',
    createdAt: lead.createdAt.toISOString(),
    updatedAt: lead.updatedAt?.toISOString(),
  }))

  const serializedHireLeads = hireLeads.map((lead: any) => ({
    ...lead,
    _id: lead._id.toString(),
    type: 'hire',
    createdAt: lead.createdAt.toISOString(),
    updatedAt: lead.updatedAt?.toISOString(),
  }))

  // Combine all leads
  const allLeads = [...serializedVenueLeads, ...serializedCateringLeads, ...serializedHireLeads]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return (
    <CRMLayout user={user}>
      <LeadsClient leads={allLeads} />
    </CRMLayout>
  )
}
