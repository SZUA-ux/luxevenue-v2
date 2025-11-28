import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import { getCanonicalUrl } from '@/lib/utils/seo'
import Link from 'next/link'
import Image from 'next/image'
import { connectDB } from '@/lib/db/connect'
import { BlogPost } from '@/lib/models/BlogPost'
import { notFound } from 'next/navigation'

export const revalidate = 3600

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    await connectDB()
    const post = await BlogPost.findOne({ slug: params.slug, status: 'Published' }).lean()
    
    if (!post) {
      return {
        title: 'Blog Post Not Found - LUXE VENUE',
      }
    }

    const postData = post as any

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxevenue.co.uk'
    
    return {
      title: postData.metaTitle,
      description: postData.metaDescription,
      keywords: postData.keywords?.join(', '),
      authors: [{ name: postData.author || 'LUXE VENUE Events Team' }],
      alternates: {
        canonical: getCanonicalUrl(`/blog/${params.slug}`),
      },
      openGraph: {
        type: 'article',
        title: postData.title,
        description: postData.excerpt,
        url: getCanonicalUrl(`/blog/${params.slug}`),
        siteName: 'LUXE VENUE',
        images: [{
          url: `${siteUrl}${postData.featuredImage.url}`,
          width: postData.featuredImage.width || 1200,
          height: postData.featuredImage.height || 630,
          alt: postData.featuredImage.alt,
        }],
        publishedTime: postData.publishedDate,
        modifiedTime: postData.updatedDate,
      },
      twitter: {
        card: 'summary_large_image',
        title: postData.title,
        description: postData.excerpt,
        images: [`${siteUrl}${postData.featuredImage.url}`],
        creator: '@luxevenue',
        site: '@luxevenue',
      },
    }
  } catch (error) {
    return {
      title: 'Blog - LUXE VENUE',
    }
  }
}

async function getBlogPost(slug: string) {
  try {
    await connectDB()
    const post = await BlogPost.findOne({ slug, status: 'Published' })
    
    if (!post) return null

    // Increment views
    post.views += 1
    await post.save()

    return JSON.parse(JSON.stringify(post))
  } catch (error) {
    return null
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxevenue.co.uk'
  
  // Article Schema (JSON-LD)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: `${siteUrl}${post.featuredImage.url}`,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    author: {
      '@type': 'Organization',
      name: post.author || 'LUXE VENUE Events Team',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LUXE VENUE',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/luxe-venue-logo.png`,
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.keywords?.join(', '),
  }

  return (
    <>
      {/* Schema.org Article markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <Link href="/blog" className="text-rose-gold hover:text-rose-gold-light transition-colors">
                ← Back to Blog
              </Link>
              <span className="px-3 py-1 bg-rose-gold/20 text-rose-gold rounded-full">
                {post.category}
              </span>
              <span className="text-gray-400">{post.readTime}</span>
              <span className="text-gray-400">{post.views} views</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-12">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Excerpt */}
            <div className="p-6 bg-surface-dark rounded-xl border border-rose-gold/20 mb-12">
              <p className="text-lg text-gray-300 leading-relaxed italic">
                {post.excerpt}
              </p>
            </div>

            {/* Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              <div 
                className="text-gray-300 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/###/g, '<h3 class="text-2xl font-heading font-semibold text-rose-gold mt-8 mb-4">')
                    .replace(/##/g, '<h2 class="text-3xl font-heading font-bold text-white mt-12 mb-6">')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                    .replace(/^- /gm, '• ')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>')
                }}
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">TAGS</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-surface-dark to-surface-elevated rounded-xl border border-rose-gold/30 text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Ready to Plan Your Event?
              </h3>
              <p className="text-gray-300 mb-6">
                Let LUXE VENUE bring your vision to life with our expert team and stunning venue.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark text-black font-semibold hover:shadow-2xl transition-all"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
