import { cookies } from 'next/headers'
import { verifyToken, COOKIE_NAME } from '@/lib/auth/jwt'

/**
 * Get current authenticated user in server components
 * Verifies JWT token locally without calling backend
 */
export async function getCurrentUser() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get(COOKIE_NAME)?.value

    if (!token) {
      return null
    }

    // Verify JWT token locally
    const payload = await verifyToken(token)

    if (!payload) {
      return null
    }

    return {
      id: payload.userId,
      userId: payload.userId,
      email: payload.email,
      username: payload.username,
      role: payload.role,
    }
  } catch (error) {
    console.error('Get current user error:', error)
    return null
  }
}
