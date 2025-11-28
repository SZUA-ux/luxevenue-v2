'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ClearSessionPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    })
    
    // Redirect to login
    setTimeout(() => {
      router.push('/crm/login')
    }, 1000)
  }, [router])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Clearing session...</h1>
        <p className="text-gray-400">Redirecting to login...</p>
      </div>
    </div>
  )
}
