import { SignJWT, jwtVerify } from 'jose'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-change-in-production'
const secret = new TextEncoder().encode(JWT_SECRET)

export interface JWTPayload {
  userId: string
  email: string
  username: string
  role: 'admin' | 'staff'
  [key: string]: any // Add index signature for jose compatibility
}

/**
 * Create a signed JWT token
 * Single source of truth for token creation
 */
export async function createToken(payload: JWTPayload): Promise<string> {
  const token = await new SignJWT(payload as any)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // 7 days
    .sign(secret)

  return token
}

/**
 * Verify and decode a JWT token
 * Single source of truth for token verification
 */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload as JWTPayload
  } catch (error) {
    // Token is invalid or expired
    return null
  }
}

/**
 * Cookie name - single source of truth
 */
export const COOKIE_NAME = 'luxe_crm_session'

/**
 * Cookie configuration - single source of truth
 */
export function getCookieOptions(isProduction: boolean = process.env.NODE_ENV === 'production') {
  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
  }
}
