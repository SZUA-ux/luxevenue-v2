import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Gender Reveal Venue Birmingham | Baby Shower Space from £80/hr | LUXE VENUE',
  description: 'Beautiful gender reveal and baby shower venue in Birmingham. Perfect setting for memorable celebrations with decoration options and catering. From £80/hr.',
  keywords: 'gender reveal venue hire birmingham, gender reveal party venue birmingham, baby shower venue birmingham, gender reveal space birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/gender-reveal-venue-birmingham' },
}

export default function GenderRevealPage() {
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