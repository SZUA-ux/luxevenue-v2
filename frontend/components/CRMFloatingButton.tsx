'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LayoutDashboard, X } from 'lucide-react'

export default function CRMFloatingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/crm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
        style={{
          boxShadow: '0 0 30px rgba(217, 119, 6, 0.4), 0 10px 25px rgba(0, 0, 0, 0.2)'
        }}
      >
        <LayoutDashboard className="w-6 h-6" />
        <span className={`font-bold text-sm tracking-wide transition-all duration-300 ${
          isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 overflow-hidden'
        }`}>
          CRM Dashboard
        </span>
      </Link>
      
      {/* Pulsing ring effect */}
      <div className="absolute inset-0 rounded-full bg-amber-500 opacity-20 animate-ping pointer-events-none" style={{ animationDuration: '2s' }}></div>
    </div>
  )
}
