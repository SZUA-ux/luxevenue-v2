import mongoose, { Schema, Document } from 'mongoose'

export interface IClient extends Document {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  totalBookings: number
  totalSpent: number
  lastEventDate?: Date
  marketingConsent: boolean
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const ClientSchema = new Schema<IClient>(
  {
    id: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    totalBookings: { type: Number, default: 0 },
    totalSpent: { type: Number, default: 0 },
    lastEventDate: { type: Date },
    marketingConsent: { type: Boolean, default: false },
    notes: { type: String },
  },
  { timestamps: true }
)

ClientSchema.index({ email: 1 })
ClientSchema.index({ totalSpent: -1 })

export const Client = mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema)
