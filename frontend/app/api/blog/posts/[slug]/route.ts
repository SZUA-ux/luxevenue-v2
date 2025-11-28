import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db/connect'
import { BlogPost } from '@/lib/models/BlogPost'

// GET /api/blog/posts/:slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()
    
    const post = await BlogPost.findOne({ slug: params.slug, status: 'Published' })

    if (!post) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 })
    }

    // Increment views
    post.views += 1
    await post.save()

    return NextResponse.json({ success: true, data: post })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
