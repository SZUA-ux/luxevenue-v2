import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Dance Studio Hire Birmingham | Professional Dance Space from £55/hr | LUXE VENUE',
  description: 'Professional dance studio in Birmingham. Sprung floor, mirrors, and sound system perfect for dance rehearsals, classes, and choreography sessions. From £55/hr.',
  keywords: 'dance studio hire birmingham, dance rehearsal space birmingham, dance studio rental birmingham, dance practice venue birmingham, dance room hire',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/dance-studio-hire-birmingham' },
}

export default function DanceStudioPage() {
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