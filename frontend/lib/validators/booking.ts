import { z } from 'zod'

export const bookingSchema = z.object({
  clientName: z.string().min(2, 'Name is required'),
  clientEmail: z.string().email('Invalid email'),
  clientPhone: z.string().min(10, 'Phone is required'),
  eventType: z.string().min(1, 'Event type is required'),
  date: z.string().min(1, 'Date is required'),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  guestCount: z.number().min(1, 'Guest count is required'),
  totalAmount: z.number().optional(),
  paidAmount: z.number().optional(),
  status: z.enum(['tentative', 'confirmed', 'completed', 'cancelled']).default('tentative'),
  notes: z.string().optional(),
  menuDetails: z.string().optional(),
  specialRequirements: z.string().optional()
})

export type BookingInput = z.infer<typeof bookingSchema>
