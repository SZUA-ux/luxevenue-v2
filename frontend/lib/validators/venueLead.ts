import { z } from 'zod'

export const venueLeadSchema = z.object({
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  clientEmail: z.string().email('Invalid email address'),
  clientPhone: z.string().min(10, 'Phone number must be at least 10 digits'),
  eventType: z.string().min(1, 'Event type is required'),
  eventDate: z.string().optional(),
  guestCount: z.number().optional(),
  notes: z.string().optional(),
  sourcePage: z.string().optional(),
  status: z.enum(['new', 'contacted', 'qualified', 'converted', 'lost']).default('new')
})

export type VenueLeadInput = z.infer<typeof venueLeadSchema>
