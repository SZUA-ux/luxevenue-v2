import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db/connect'
import { User } from '@/lib/models/User'
import { createToken, COOKIE_NAME, getCookieOptions } from '@/lib/auth/jwt'
import { serialize } from 'cookie'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      )
    }

    await connectDB()

    // Find user by username (case-insensitive)
    const user = await User.findOne({ username: username.toLowerCase() })
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password' },
        { status: 401 }
      )
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password)
    
    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password' },
        { status: 401 }
      )
    }

    // Create JWT token
    const token = await createToken({
      userId: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    })

    // Set cookie
    const cookie = serialize(COOKIE_NAME, token, getCookieOptions())

    const response = NextResponse.json(
      { 
        success: true, 
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        }
      },
      { status: 200 }
    )

    response.headers.set('Set-Cookie', cookie)
    return response

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
