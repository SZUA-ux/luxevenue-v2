'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [resetUrl, setResetUrl] = useState('') // For development only

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        // In development, show the reset URL
        if (data.resetUrl) {
          setResetUrl(data.resetUrl)
        }
      } else {
        setError(data.error || 'Failed to send reset email')
      }
    } catch (err) {
      console.error('Forgot password error:', err)
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Check Your Email</h1>
              <p className="text-gray-300 text-sm">
                If an account exists with <strong>{email}</strong>, we've sent password reset instructions.
              </p>
            </div>

            {/* Development Only - Show Reset URL */}
            {resetUrl && (
              <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <p className="text-yellow-300 text-xs mb-2">
                  <strong>Development Mode:</strong> Reset URL
                </p>
                <a 
                  href={resetUrl} 
                  className="text-yellow-400 text-xs break-all hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resetUrl}
                </a>
              </div>
            )}

            <div className="space-y-4">
              <Link
                href="/crm/login"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </div>

            <p className="text-center text-gray-400 text-xs mt-6">
              Didn't receive the email? Check your spam folder or try again.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Forgot Password
            </h1>
            <p className="text-gray-400 text-sm">Enter your email to reset your password</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  placeholder="info@luxevenue.co.uk"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <Link
              href="/crm/login"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2024 LUXE VENUE. All rights reserved.
        </p>
      </div>
    </div>
  )
}
