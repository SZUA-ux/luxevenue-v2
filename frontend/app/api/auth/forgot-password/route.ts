import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { connectDB } from '@/lib/db/connect'
import { User } from '@/lib/models/User'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    await connectDB()

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() })

    if (!user) {
      // Don't reveal if user exists or not (security best practice)
      return NextResponse.json({
        success: true,
        message: 'If an account exists with this email, a password reset link has been sent.'
      })
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex')

    // Set token and expiration (1 hour)
    user.resetPasswordToken = hashedToken
    user.resetPasswordExpires = new Date(Date.now() + 3600000) // 1 hour
    await user.save()

    // Create reset URL
    const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/crm/reset-password?token=${resetToken}`

    // TODO: Send email with reset link
    // For now, log the URL (in production, send via email service)
    console.log('Password reset URL:', resetUrl)
    console.log('Reset token:', resetToken)

    // In production, you would send an email here
    // Example:
    // await sendPasswordResetEmail(user.email, resetUrl)

    return NextResponse.json({
      success: true,
      message: 'If an account exists with this email, a password reset link has been sent.',
      // Remove this in production - only for development
      ...(process.env.NODE_ENV === 'development' && { resetUrl })
    })

  } catch (error: any) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
