import { Metadata } from 'next'
import PublicNav from '@/components/PublicNav'
import PublicFooter from '@/components/PublicFooter'
import { getCanonicalUrl } from '@/lib/utils/seo'
import Link from 'next/link'
import Image from 'next/image'
import { connectDB } from '@/lib/db/connect'
import { BlogPost } from '@/lib/models/BlogPost'

export const metadata: Metadata = {
  title: 'Wedding Planning Blog | LUXE VENUE Birmingham',
  description: 'Expert wedding planning tips, venue guides, and event inspiration for Birmingham brides and grooms. Read the latest from LUXE VENUE wedding experts.',
  alternates: { canonical: getCanonicalUrl('/blog') },
}

export const revalidate = 3600 // Revalidate every hour

async function getBlogPosts() {
  try {
    await connectDB()
    const posts = await BlogPost.find({ status: 'Published' })
      .sort({ publishedDate: -1 })
      .lean()
    return posts
  } catch (error) {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <PublicNav />
      <main className="min-h-screen bg-black-primary pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                  Wedding Planning Blog
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Expert tips, inspiration, and guides for planning your perfect Birmingham wedding
              </p>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-12 bg-surface-dark rounded-xl border border-white/10">
                <p className="text-gray-400 mb-6">No blog posts available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-surface-dark rounded-xl border border-white/10 overflow-hidden hover:border-rose-gold/50 hover:shadow-xl hover:shadow-rose-gold/20 hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-surface-elevated to-black-secondary">
                      <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                        <span className="px-2 py-1 bg-rose-gold/20 text-rose-gold rounded">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                        <span>{post.views} views</span>
                      </div>

                      <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-rose-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">
                          {new Date(post.publishedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="text-rose-gold font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                          Read More <span>→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  )
}
