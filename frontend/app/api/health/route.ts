import { NextRequest, NextResponse } from 'next/server'
import { connectDB, isConnected } from '@/lib/db/connect'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const mongoStatus = isConnected()

    return NextResponse.json({
      success: true,
      mongo: mongoStatus ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        mongo: 'error',
        error: String(error),
      },
      { status: 500 }
    )
  }
}
