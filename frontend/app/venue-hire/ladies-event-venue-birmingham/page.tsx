import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Ladies Event Space Birmingham | Women Only Venue from £70/hr | LUXE VENUE',
  description: 'Exclusive ladies event space in Birmingham. Private venue perfect for sisters gatherings, ladies nights, women workshops, and female-only events. From £70/hr.',
  keywords: 'ladies event venue birmingham, ladies night venue hire birmingham, women event space birmingham, sisters gathering birmingham, ladies gathering venue',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/ladies-event-venue-birmingham' },
}

export default function LadiesEventPage() {
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