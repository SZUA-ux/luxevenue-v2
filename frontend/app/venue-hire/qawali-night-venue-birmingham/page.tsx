import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Qawali & Nasheed Venue Birmingham | Islamic Event Space from £90/hr | LUXE VENUE',
  description: 'Premier venue for Qawali nights and Nasheed events in Birmingham. Alcohol-free, halal space perfect for Islamic entertainment and cultural celebrations. From £90/hr.',
  keywords: 'qawali night venue birmingham, nasheed event birmingham, islamic event venue birmingham, halal entertainment birmingham, nasheed night hire',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/qawali-night-venue-birmingham' },
}

export default function QawaliVenuePage() {
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