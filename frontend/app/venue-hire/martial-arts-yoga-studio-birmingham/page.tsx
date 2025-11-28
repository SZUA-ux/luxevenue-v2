import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Martial Arts & Yoga Studio Birmingham | Fitness Space from £50/hr | LUXE VENUE',
  description: 'Dedicated martial arts and yoga studio in Birmingham. Sprung wooden floor, mirrors, and professional space for classes and training sessions. From £50/hr.',
  keywords: 'martial arts venue hire birmingham, yoga studio hire birmingham, martial arts studio birmingham, yoga space birmingham, fitness studio rental birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/martial-arts-yoga-studio-birmingham' },
}

export default function MartialArtsYogaPage() {
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