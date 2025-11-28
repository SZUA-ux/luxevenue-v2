import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Corporate Training Space Birmingham | Business Venue from £80/hr | LUXE VENUE',
  description: 'Professional corporate training space in Birmingham. Modern facilities for workshops, meetings, training sessions, and business events. From £80/hr.',
  keywords: 'corporate training space birmingham, training venue hire birmingham, meeting room hire birmingham, conference room birmingham, corporate event space birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/corporate-event-space-birmingham' },
}

export default function CorporateSpacePage() {
  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        
        {/* Booking Form */}
        <VenueHireForm />

      </main>
      <PublicFooter />
    </>
  )
}