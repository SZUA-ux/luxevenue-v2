import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Networking Event Space Birmingham | Business Venue from £90/hr | LUXE VENUE',
  description: 'Modern networking event space in Birmingham. Ideal for business meetups, professional networking events, and industry gatherings. From £90/hr.',
  keywords: 'networking venue birmingham, networking event space birmingham, business networking birmingham, corporate networking venue, professional meetup space birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/networking-event-space-birmingham' },
}

export default function NetworkingSpacePage() {
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