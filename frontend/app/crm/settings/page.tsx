import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth/getUser'
import CRMLayout from '@/components/crm/CRMLayout'
import ChangePasswordForm from '@/components/crm/ChangePasswordForm'

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/crm/login')
  }

  return (
    <CRMLayout user={user}>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Account Settings
          </h1>
          <p className="text-gray-400 mt-2">Manage your account settings and security</p>
        </div>

        {/* User Information */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">Username</label>
              <div className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white">
                {user.username}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">Email</label>
              <div className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white">
                {user.email}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">Role</label>
              <div className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white capitalize">
                {user.role}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">User ID</label>
              <div className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm truncate">
                {user.userId}
              </div>
            </div>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Change Password</h2>
          <p className="text-gray-400 mb-6">Update your password to keep your account secure</p>
          
          <ChangePasswordForm />
        </div>

        {/* Security Tips */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30 p-6">
          <h3 className="text-lg font-bold text-white mb-3">🔒 Security Tips</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Use a strong password with at least 8 characters</li>
            <li>• Include a mix of uppercase, lowercase, numbers, and symbols</li>
            <li>• Don't reuse passwords from other accounts</li>
            <li>• Change your password regularly</li>
            <li>• Never share your password with anyone</li>
          </ul>
        </div>
      </div>
    </CRMLayout>
  )
}
