import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Creative Workshop Studio Birmingham | Arts & Crafts Space from £50/hr | LUXE VENUE',
  description: 'Versatile creative workshop studio in Birmingham. Perfect for arts and crafts classes, painting workshops, and creative skill-sharing events. From £50/hr.',
  keywords: 'workshop space hire birmingham, creative studio birmingham, arts workshop venue, craft class venue birmingham, creative space rental birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/creative-workshop-studio-birmingham' },
}

export default function CreativeWorkshopPage() {
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