import mongoose, { Schema, Document } from 'mongoose'

export interface IHireLead extends Document {
  id: string
  name: string
  email: string
  phone: string
  eventType: string
  date?: Date
  startTime?: string
  endTime?: string
  guestCount?: number
  message?: string
  status: 'New' | 'Contacted' | 'Converted' | 'Lost'
  source: string
  sourceUrl?: string
  contactedAt?: Date
  convertedToBookingId?: string
  lostReason?: string
  receivedAt: Date
  updatedAt: Date
  notes: Array<{
    text: string
    addedAt: Date
    addedBy: string
  }>
}

const HireLeadSchema = new Schema<IHireLead>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    eventType: { type: String, required: true },
    date: { type: Date },
    startTime: { type: String },
    endTime: { type: String },
    guestCount: { type: Number },
    message: { type: String },
    status: { type: String, enum: ['New', 'Contacted', 'Converted', 'Lost'], default: 'New' },
    source: { type: String, required: true },
    sourceUrl: { type: String },
    contactedAt: { type: Date },
    convertedToBookingId: { type: String },
    lostReason: { type: String },
    receivedAt: { type: Date, default: Date.now },
    notes: [
      {
        text: { type: String },
        addedAt: { type: Date, default: Date.now },
        addedBy: { type: String },
      },
    ],
  },
  { timestamps: true, collection: 'hire_leads' }
)

HireLeadSchema.index({ receivedAt: -1, status: 1 })
HireLeadSchema.index({ email: 1 })
HireLeadSchema.index({ date: 1 })

export const HireLead = mongoose.models.HireLead || mongoose.model<IHireLead>('HireLead', HireLeadSchema)