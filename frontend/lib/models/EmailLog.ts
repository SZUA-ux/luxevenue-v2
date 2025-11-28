import mongoose from 'mongoose'

const EmailLogSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true }, // 'lead_confirmation', 'admin_notification', 'booking_confirmation', etc.
  recipient: { type: String, required: true },
  recipientEmail: { type: String, required: true },
  subject: { type: String, required: true },
  status: { type: String, enum: ['sent', 'failed', 'pending'], default: 'pending' },
  messageId: String,
  leadId: String,
  bookingId: String,
  leadType: { type: String, enum: ['event', 'catering', 'hire'] },
  error: String,
  sentAt: { type: Date, default: Date.now },
  metadata: mongoose.Schema.Types.Mixed,
}, {
  timestamps: true,
})

EmailLogSchema.index({ leadId: 1 })
EmailLogSchema.index({ bookingId: 1 })
EmailLogSchema.index({ sentAt: -1 })
EmailLogSchema.index({ recipientEmail: 1 })

export const EmailLog = mongoose.models.EmailLog || mongoose.model('EmailLog', EmailLogSchema)
