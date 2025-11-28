import { MetadataRoute } from 'next'
import { connectDB } from '@/lib/db/connect'
import { BlogPost } from '@/lib/models/BlogPost'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxevenue.co.uk'

  // Static routes
  const routes = [
    '',
    '/about',
    '/affordable-venue-hire-dudley',
    '/affordable-venue-hire-wolverhampton',
    '/affordable-wedding-venue-birmingham',
    '/anniversary-venue-birmingham',
    '/asian-wedding-venue-birmingham',
    '/baby-shower-venue-birmingham',
    '/birthday-party-venue-birmingham',
    '/birthday-venue-birmingham',
    '/birthday-venue-dudley',
    '/birthday-venue-solihull',
    '/birthday-venue-walsall',
    '/birthday-venue-wolverhampton',
    '/blog',
    '/catering',
    '/catering/asian-catering-west-midlands',
    '/catering/asian-wedding-catering-birmingham',
    '/catering/birmingham-pakistani-indian-catering',
    '/catering/birthday-catering-birmingham',
    '/catering/black-country-pakistani-indian-catering',
    '/catering/corporate-catering-birmingham',
    '/catering/coventry-pakistani-indian-catering',
    '/catering/curry-catering-birmingham',
    '/catering/dudley-pakistani-indian-catering',
    '/catering/halal-buffet-birmingham',
    '/catering/halal-catering-birmingham',
    '/catering/halal-catering-dudley',
    '/catering/halal-catering-walsall',
    '/catering/halal-corporate-catering-birmingham',
    '/catering/halal-private-chef-birmingham',
    '/catering/halal-tiffin-service-birmingham',
    '/catering/home-catering-service-birmingham',
    '/catering/home-party-catering-birmingham',
    '/catering/indian-catering-birmingham',
    '/catering/indian-catering-solihull',
    '/catering/marquee-catering-birmingham',
    '/catering/outdoor-catering-birmingham',
    '/catering/pakistani-bbq-catering-birmingham',
    '/catering/pakistani-catering-birmingham',
    '/catering/pakistani-catering-wolverhampton',
    '/catering/pakistani-wedding-food-birmingham',
    '/catering/sandwell-pakistani-indian-catering',
    '/catering/solihull-pakistani-indian-catering',
    '/catering/special-occasion-catering-birmingham',
    '/catering/street-food-catering-birmingham',
    '/catering/sutton-coldfield-pakistani-indian-catering',
    '/catering/tandoori-catering-birmingham',
    '/catering/walsall-pakistani-indian-catering',
    '/catering/wedding-catering-birmingham',
    '/catering/west-bromwich-pakistani-indian-catering',
    '/catering/wolverhampton-pakistani-indian-catering',
    '/contact',
    '/corporate-event-venue-birmingham',
    '/engagement-party-venue-birmingham',
    '/gallery',
    '/mehndi-venue-birmingham',
    '/nikah-venue-birmingham',
    '/small-event-venue-birmingham',
    '/small-event-venue-dudley',
    '/small-event-venue-solihull',
    '/small-event-venue-walsall',
    '/small-event-venue-wolverhampton',
    '/testimonials',
    '/venue-hire-birmingham',
    '/venue-hire/comedy-night-venue-birmingham',
    '/venue-hire/corporate-event-space-birmingham',
    '/venue-hire/creative-workshop-studio-birmingham',
    '/venue-hire/dance-studio-hire-birmingham',
    '/venue-hire/gender-reveal-venue-birmingham',
    '/venue-hire/ladies-event-venue-birmingham',
    '/venue-hire/martial-arts-class-venue-birmingham',
    '/venue-hire/martial-arts-yoga-studio-birmingham',
    '/venue-hire/networking-event-space-birmingham',
    '/venue-hire/photo-video-studio-hire-birmingham',
    '/venue-hire/qawali-night-venue-birmingham',
    '/venue-hire/theatre-rehearsal-space-birmingham',
    '/venue-hire/wellness-meditation-studio-birmingham',
    '/venue/services',
    '/wedding-venue-birmingham',
    '/wedding-venue-dudley',
    '/wedding-venue-near-dudley',
    '/wedding-venue-solihull',
    '/wedding-venue-walsall',
    '/wedding-venue-wolverhampton',
  ]

  // Get dynamic blog posts
  let blogPosts: any[] = []
  try {
    // Only fetch blog posts if we're not in build/static generation mode
    // During build, database may not be available
    if (process.env.NEXT_PHASE !== 'phase-production-build') {
      await connectDB()
      const posts = await BlogPost.find({ status: 'Published' }).lean()
      blogPosts = posts.map((post: any) => `/blog/${post.slug}`)
    }
  } catch (error) {
    // Silently fail during build - sitemap will only include static routes
    console.log('Sitemap: Skipping dynamic blog posts (database not available during build)')
  }

  // Combine static routes and blog posts
  const allRoutes = [...routes, ...blogPosts]

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' || route.startsWith('/blog/') ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/blog/') ? 0.9 : 0.8,
  }))
}
