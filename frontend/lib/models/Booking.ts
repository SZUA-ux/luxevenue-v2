import mongoose, { Schema, Document } from 'mongoose'

// Type-specific data interfaces
export interface VenueBookingData {
  eventType: string
  // Food Options
  foodPackage?: 'basic' | 'standard' | 'premium' | 'custom'
  menuSelection?: string[]
  dietaryRequirements?: string[]
  cateringNotes?: string
  // Decor Options
  decorPackage?: 'basic' | 'premium' | 'luxury' | 'custom'
  decorTheme?: string
  decorItems?: string[]
  decorNotes?: string
  // Venue-specific
  roomSetup?: 'theater' | 'banquet' | 'cocktail' | 'classroom' | 'reception'
  audioVisual?: string[]
  // Pricing Breakdown
  venueHireFee?: number
  cateringFee?: number
  decorFee?: number
  equipmentFee?: number
  additionalServices?: { name: string; price: number }[]
}

export interface CateringBookingData {
  cuisineType: string
  serviceType?: 'buffet' | 'plated' | 'family-style' | 'cocktail'
  // Menu Details
  courses?: string[]
  menuItems?: { course: string; dishes: string[] }[]
  // Service Options
  chefOnSite?: boolean
  waitStaff?: number
  setupService?: boolean
  cleanupService?: boolean
  // Equipment
  servingEquipment?: string[]
  beverageService?: boolean
  // Delivery
  deliveryLocation?: string
  deliveryTime?: string
  setupTime?: string
  // Pricing
  perHeadPrice?: number
  serviceCharge?: number
  equipmentCharge?: number
  deliveryCharge?: number
}

export interface HireBookingData {
  spaceType: string
  purpose: string
  // Duration & Timing
  duration?: number
  recurringBooking?: boolean
  frequency?: 'daily' | 'weekly' | 'monthly'
  // Equipment & Facilities
  requiredEquipment?: string[]
  audioSystem?: boolean
  heatingCooling?: boolean
  storageSpace?: boolean
  // Setup Requirements
  setupNeeded?: boolean
  specificRequirements?: string
  // Access
  keyAccess?: boolean
  securityDeposit?: number
  // Pricing
  hourlyRate?: number
  additionalHours?: number
  equipmentCharge?: number
  cleaningFee?: number
}

export interface IBooking extends Document {
  id: string
  bookingType: 'venue' | 'catering' | 'hire'
  sourceLeadId?: string
  sourceLeadType?: 'venue' | 'catering' | 'hire'
  clientName: string
  clientEmail: string
  clientPhone: string
  eventType: string
  date: Date
  startTime: string
  endTime: string
  guestCount: number
  notes?: string
  status: 'tentative' | 'confirmed' | 'completed' | 'cancelled'
  totalAmount?: number
  discount?: number
  paidAmount?: number
  balanceDue?: number
  paymentStatus?: 'pending' | 'partial' | 'paid'
  createdAt: Date
  updatedAt: Date
  menuDetails?: string
  specialRequirements?: string
  // Type-specific flexible data
  typeSpecificData?: VenueBookingData | CateringBookingData | HireBookingData | Record<string, any>
}

const BookingSchema = new Schema<IBooking>(
  {
    id: { type: String, required: true, unique: true },
    bookingType: { type: String, enum: ['venue', 'catering', 'hire'], required: true },
    sourceLeadId: { type: String },
    sourceLeadType: { type: String, enum: ['venue', 'catering', 'hire'] },
    clientName: { type: String, required: true },
    clientEmail: { type: String, required: true },
    clientPhone: { type: String, required: true },
    eventType: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    guestCount: { type: Number, required: true },
    notes: { type: String },
    status: { type: String, enum: ['tentative', 'confirmed', 'completed', 'cancelled'], default: 'tentative' },
    totalAmount: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    paidAmount: { type: Number, default: 0 },
    balanceDue: { type: Number, default: 0 },
    paymentStatus: { type: String, enum: ['pending', 'partial', 'paid'], default: 'pending' },
    menuDetails: { type: String },
    specialRequirements: { type: String },
    // Flexible type-specific data (stored as JSON)
    typeSpecificData: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true, collection: 'bookings' }
)

BookingSchema.index({ date: 1, status: 1 })
BookingSchema.index({ clientEmail: 1 })
BookingSchema.index({ bookingType: 1 })
BookingSchema.index({ sourceLeadId: 1 })

export const Booking = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema)