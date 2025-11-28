import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { COOKIE_NAME } from '@/lib/auth/jwt'

// Protect all /crm routes except /crm/login
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow access to login page
  if (pathname === '/crm/login') {
    return NextResponse.next()
  }

  // Check for session cookie
  const token = request.cookies.get(COOKIE_NAME)?.value

  if (!token) {
    // No token, redirect to login
    const loginUrl = new URL('/crm/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  // For now, just check if cookie exists
  // The actual validation happens server-side in page components
  return NextResponse.next()
}

// Configure which paths to protect
// Match all /crm routes including /crm itself
export const config = {
  matcher: [
    '/crm',
    '/crm/:path*',
  ],
}
