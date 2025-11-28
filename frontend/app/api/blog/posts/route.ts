import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db/connect'
import { BlogPost } from '@/lib/models/BlogPost'

// GET /api/blog/posts - List published blog posts
export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')

    const query: any = { status: 'Published' }
    if (category && category !== 'all') {
      query.category = category
    }

    const total = await BlogPost.countDocuments(query)
    const posts = await BlogPost.find(query)
      .sort({ publishedDate: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean()

    return NextResponse.json({
      success: true,
      data: posts,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
        limit,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
