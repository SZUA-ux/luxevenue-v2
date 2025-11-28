import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db/connect'
import { User } from '@/lib/models/User'

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json()

    if (!token || !password) {
      return NextResponse.json(
        { success: false, error: 'Token and password are required' },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 8 characters long' },
        { status: 400 }
      )
    }

    await connectDB()

    // Hash the token from URL to compare with database
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex')

    // Find user with valid reset token
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: new Date() } // Token not expired
    })

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired reset token' },
        { status: 400 }
      )
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Update password and clear reset fields
    user.password = hashedPassword
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()

    return NextResponse.json({
      success: true,
      message: 'Password has been reset successfully. You can now login with your new password.'
    })

  } catch (error: any) {
    console.error('Reset password error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
