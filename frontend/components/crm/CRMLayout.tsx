'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  UserCircle, 
  BarChart3, 
  Mail,
  Menu,
  X,
  LogOut
} from 'lucide-react'
import { useState } from 'react'

interface CRMLayoutProps {
  children: React.ReactNode
  user: any
}

export default function CRMLayout({ children, user }: CRMLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  const handleLogout = async () => {
    if (loggingOut) return
    
    setLoggingOut(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/crm/login')
      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
      setLoggingOut(false)
    }
  }

  const navigation = [
    { name: 'Dashboard', href: '/crm', icon: LayoutDashboard },
    { name: 'Leads', href: '/crm/leads', icon: Users },
    { name: 'Bookings', href: '/crm/bookings', icon: Calendar },
    { name: 'Clients', href: '/crm/clients', icon: UserCircle },
    { name: 'Analytics', href: '/crm/analytics', icon: BarChart3 },
    { name: 'Email Log', href: '/crm/email-log', icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Top Bar - Glassmorphic */}
      <header className="fixed top-0 left-0 right-0 h-20 z-40 backdrop-blur-xl bg-slate-900/40 border-b border-white/10 shadow-2xl">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-3 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm"
            >
              {sidebarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
            <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
              LUXE VENUE CRM
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <UserCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-bold text-white">{user?.username || user?.email || 'Admin'}</span>
            </div>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 backdrop-blur-xl rounded-xl border border-red-500/30 hover:border-red-500/50 transition-all disabled:opacity-50"
              title="Logout"
            >
              <LogOut className="w-4 h-4 text-red-400" />
              <span className="hidden md:inline text-sm font-bold text-red-300">
                {loggingOut ? 'Logging out...' : 'Logout'}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="pt-20 flex relative">
        {/* Sidebar - Glassmorphic Desktop */}
        <aside className="hidden lg:block fixed left-0 top-20 bottom-0 w-72 backdrop-blur-xl bg-slate-900/40 border-r border-white/10 shadow-2xl">
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/crm' && pathname.startsWith(item.href))
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-purple-400/50 shadow-lg shadow-purple-500/25'
                      : 'hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${
                    isActive 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                      : 'bg-white/5 group-hover:bg-white/10'
                  }`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`font-bold ${
                    isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-500/50 animate-pulse"></div>
                  )}
                </Link>
              )
            })}
          </nav>
          
          <div className="absolute bottom-6 left-4 right-4 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <p className="text-xs text-white font-bold">System Online</p>
            </div>
            <p className="text-xs text-gray-300">Premium CRM • Futuristic Edition</p>
          </div>
        </aside>

        {/* Sidebar - Glassmorphic Mobile */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 top-20 z-30 bg-black/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}>
            <aside className="absolute left-0 top-0 bottom-0 w-72 backdrop-blur-xl bg-slate-900/95 border-r border-white/10 shadow-2xl">
              <nav className="p-4 space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/crm' && pathname.startsWith(item.href))
                  const Icon = item.icon
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-purple-400/50 shadow-lg'
                          : 'hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10'
                      }`}
                    >
                      <div className={`p-2 rounded-xl ${
                        isActive ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-white/5'
                      }`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className={`font-bold ${
                        isActive ? 'text-white' : 'text-gray-300'
                      }`}>{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="lg:ml-72 flex-1 min-h-screen relative">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
