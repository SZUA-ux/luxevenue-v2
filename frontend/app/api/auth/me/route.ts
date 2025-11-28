import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken, COOKIE_NAME } from '@/lib/auth/jwt'

// Mark this route as dynamic since it uses cookies
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get(COOKIE_NAME)?.value

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const payload = await verifyToken(token)

    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        user: {
          userId: payload.userId,
          email: payload.email,
          username: payload.username,
          role: payload.role,
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Auth me error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
