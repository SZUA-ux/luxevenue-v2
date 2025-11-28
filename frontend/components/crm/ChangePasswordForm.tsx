'use client'

import { useState, FormEvent } from 'react'
import { Lock, CheckCircle, AlertCircle } from 'lucide-react'

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    // Validate passwords match
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match')
      return
    }

    // Validate password strength
    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          currentPassword, 
          newPassword 
        }),
        credentials: 'include',
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccess(false)
        }, 5000)
      } else {
        setError(data.error || 'Failed to change password')
      }
    } catch (err) {
      console.error('Change password error:', err)
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {success && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
          <p className="text-green-300 text-sm">Password changed successfully!</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Current Password */}
      <div>
        <label htmlFor="currentPassword" className="block text-sm font-bold text-gray-300 mb-2">
          Current Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Enter current password"
            required
            autoComplete="current-password"
          />
        </div>
      </div>

      {/* New Password */}
      <div>
        <label htmlFor="newPassword" className="block text-sm font-bold text-gray-300 mb-2">
          New Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Enter new password"
            required
            minLength={8}
            autoComplete="new-password"
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">Minimum 8 characters</p>
      </div>

      {/* Confirm New Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-300 mb-2">
          Confirm New Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Confirm new password"
            required
            minLength={8}
            autoComplete="new-password"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Changing Password...
          </>
        ) : (
          'Change Password'
        )}
      </button>
    </form>
  )
}
