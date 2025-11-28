import mongoose, { Schema, Document } from 'mongoose'

export interface IBlogPost extends Document {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  featuredImage: {
    url: string
    alt: string
    width: number
    height: number
  }
  metaTitle: string
  metaDescription: string
  keywords: string[]
  status: 'Draft' | 'Published' | 'Archived'
  publishedDate?: Date
  updatedDate?: Date
  views: number
  readTime: string
  createdAt: Date
  updatedAt: Date
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    tags: [{ type: String }],
    featuredImage: {
      url: { type: String, required: true },
      alt: { type: String, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    keywords: [{ type: String }],
    status: { type: String, enum: ['Draft', 'Published', 'Archived'], default: 'Draft' },
    publishedDate: { type: Date },
    updatedDate: { type: Date },
    views: { type: Number, default: 0 },
    readTime: { type: String, required: true },
  },
  { timestamps: true }
)

// Note: slug index is already created via 'unique: true' in schema definition
// Removed duplicate: BlogPostSchema.index({ slug: 1 })
BlogPostSchema.index({ status: 1, publishedDate: -1 })
BlogPostSchema.index({ category: 1 })

export const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema)
