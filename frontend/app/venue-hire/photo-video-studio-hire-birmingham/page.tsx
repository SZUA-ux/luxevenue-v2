import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import Link from 'next/link'
import Image from 'next/image'
import VenueHireForm from '@/components/forms/VenueHireForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Photo & Video Studio Birmingham | Professional Studio Hire from £60/hr | LUXE VENUE',
  description: 'Professional photo and video studio in Birmingham. Fully equipped creative space with lighting, backdrops, and equipment for photoshoots, video production, and content creation. From £60/hr.',
  keywords: 'photo studio hire birmingham, photography studio rental birmingham, professional photo studio birmingham, video studio hire birmingham, creative studio birmingham',
  alternates: { canonical: 'https://luxevenue.co.uk/venue-hire/photo-video-studio-hire-birmingham' },
}

export default function PhotoStudioPage() {
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