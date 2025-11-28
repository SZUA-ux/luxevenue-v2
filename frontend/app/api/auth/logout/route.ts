import { NextResponse } from 'next/server'
import { COOKIE_NAME } from '@/lib/auth/jwt'
import { serialize } from 'cookie'

export async function POST() {
  // Clear the session cookie
  const cookie = serialize(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0, // Expire immediately
  })

  const response = NextResponse.json(
    { success: true },
    { status: 200 }
  )

  response.headers.set('Set-Cookie', cookie)
  return response
}
