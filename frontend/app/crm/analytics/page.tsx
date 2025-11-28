import CRMLayout from '@/components/crm/CRMLayout'
import { getCurrentUser } from '@/lib/auth/getUser'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Analytics - LUXE VENUE CRM',
}

export const dynamic = 'force-dynamic'

export default async function AnalyticsPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/crm/login')
  }

  return (
    <CRMLayout user={user}>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Analytics</h1>
          <p className="text-gray-400 mt-2">View insights and reports</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-2xl border border-purple-500/30 shadow-2xl text-center">
          <p className="text-gray-400 text-lg">Analytics dashboard coming soon...</p>
        </div>
      </div>
    </CRMLayout>
  )
}
