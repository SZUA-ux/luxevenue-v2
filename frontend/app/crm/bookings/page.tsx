import { connectDB } from '@/lib/db/connect'
import { Booking } from '@/lib/models/Booking'
import CRMLayout from '@/components/crm/CRMLayout'
import BookingsTabs from './BookingsTabs'
import { getCurrentUser } from '@/lib/auth/getUser'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Bookings - LUXE VENUE CRM',
}

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function BookingsPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/crm/login')
  }

  await connectDB()

  const rawBookings = await Booking.find().sort({ date: -1 }).limit(100).lean()
  
  // Serialize all dates and ensure all fields are present
  const serializedBookings = rawBookings.map((b: any) => ({
    ...b,
    _id: b._id.toString(),
    bookingType: b.bookingType || 'venue',
    date: typeof b.date === 'string' ? b.date : b.date?.toISOString?.()?.split('T')[0] || b.date,
    createdAt: b.createdAt?.toISOString?.() || new Date().toISOString(),
    updatedAt: b.updatedAt?.toISOString?.(),
    typeSpecificData: b.typeSpecificData || {}
  }))

  // Split by booking type
  const venueBookings = serializedBookings.filter((b: any) => b.bookingType === 'venue')
  const cateringBookings = serializedBookings.filter((b: any) => b.bookingType === 'catering')
  const hireBookings = serializedBookings.filter((b: any) => b.bookingType === 'hire')

  return (
    <CRMLayout user={user}>
      <BookingsTabs 
        venueBookings={venueBookings}
        cateringBookings={cateringBookings}
        hireBookings={hireBookings}
      />
    </CRMLayout>
  )
}
