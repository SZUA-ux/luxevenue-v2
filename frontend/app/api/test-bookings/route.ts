import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db/connect'
import { Booking } from '@/lib/models/Booking'

export async function GET() {
  try {
    await connectDB()
    
    const rawBookings = await Booking.find().lean()
    const count = await Booking.countDocuments()
    
    return NextResponse.json({
      success: true,
      count,
      bookings: rawBookings.map((b: any) => ({
        id: b._id.toString(),
        clientName: b.clientName,
        bookingType: b.bookingType,
        date: b.date
      }))
    })
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 })
  }
}
