import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Wellness & Meditation Studio Birmingham | Mindfulness Space from £45/hr | LUXE VENUE',
  description: 'Peaceful wellness and meditation studio in Birmingham. Calm space perfect for meditation classes, mindfulness sessions, and holistic health workshops. From £45/hr.',
  keywords: 'meditation studio hire birmingham, wellness space birmingham, holistic health venue birmingham, mindfulness studio birmingham, wellbeing classes birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/wellness-meditation-studio-birmingham' },
}

export default function WellnessStudioPage() {
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