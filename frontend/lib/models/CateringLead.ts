import mongoose, { Schema, Document } from 'mongoose'

export interface ICateringLead extends Document {
  id: string
  name: string
  email?: string
  phone?: string
  source: string
  status: 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost'
  interestedIn?: string
  nextFollowUpDate?: Date
  lastContactedAt?: Date
  convertedToEnquiryId?: string
  createdAt: Date
  updatedAt: Date
  notes: Array<{
    text: string
    addedAt: Date
    addedBy: string
  }>
}

const CateringLeadSchema = new Schema<ICateringLead>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    source: { type: String, required: true },
    status: { type: String, enum: ['New', 'Contacted', 'Qualified', 'Converted', 'Lost'], default: 'New' },
    interestedIn: { type: String },
    nextFollowUpDate: { type: Date },
    lastContactedAt: { type: Date },
    convertedToEnquiryId: { type: String },
    notes: [
      {
        text: { type: String },
        addedAt: { type: Date, default: Date.now },
        addedBy: { type: String },
      },
    ],
  },
  { timestamps: true, collection: 'leads' }
)

CateringLeadSchema.index({ createdAt: -1, status: 1 })

export const CateringLead = mongoose.models.CateringLead || mongoose.model<ICateringLead>('CateringLead', CateringLeadSchema)
