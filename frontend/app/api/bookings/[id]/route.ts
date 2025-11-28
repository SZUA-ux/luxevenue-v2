import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db/connect'
import { Booking } from '@/lib/models/Booking'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    
    const booking: any = await Booking.findById(params.id).lean()
    
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }
    
    // Serialize the booking data
    const serializedBooking = {
      ...booking,
      _id: booking._id.toString(),
      date: booking.date instanceof Date ? booking.date.toISOString().split('T')[0] : booking.date,
      createdAt: booking.createdAt?.toISOString?.() || new Date().toISOString(),
      updatedAt: booking.updatedAt?.toISOString?.()
    }
    
    return NextResponse.json(serializedBooking)
    
  } catch (error: any) {
    console.error('Error fetching booking:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch booking' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    
    // Try to find by MongoDB _id (ObjectId string)
    const booking = await Booking.findById(params.id)
    
    if (!booking) {
      return NextResponse.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      )
    }
    
    await Booking.findByIdAndDelete(params.id)
    
    return NextResponse.json({
      success: true,
      message: 'Booking deleted successfully'
    })
    
  } catch (error: any) {
    console.error('Error deleting booking:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete booking' },
      { status: 500 }
    )
  }
}
