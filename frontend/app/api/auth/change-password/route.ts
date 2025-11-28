import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db/connect'
import { User } from '@/lib/models/User'
import { getCurrentUser } from '@/lib/auth/getUser'

export async function POST(request: NextRequest) {
  try {
    // Get current logged-in user
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const { currentPassword, newPassword } = await request.json()

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, error: 'Current password and new password are required' },
        { status: 400 }
      )
    }

    // Validate new password strength
    if (newPassword.length < 8) {
      return NextResponse.json(
        { success: false, error: 'New password must be at least 8 characters long' },
        { status: 400 }
      )
    }

    await connectDB()

    // Find user by ID
    const user = await User.findOne({ id: currentUser.userId })

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      )
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password)

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Current password is incorrect' },
        { status: 400 }
      )
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12)

    // Update password
    user.password = hashedPassword
    await user.save()

    return NextResponse.json({
      success: true,
      message: 'Password changed successfully'
    })

  } catch (error: any) {
    console.error('Change password error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
