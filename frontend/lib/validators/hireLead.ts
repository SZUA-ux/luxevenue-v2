import { z } from 'zod'

export const hireLeadSchema = z.object({
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  clientEmail: z.string().email('Invalid email address'),
  clientPhone: z.string().min(10, 'Phone number must be at least 10 digits'),
  spaceType: z.string().min(1, 'Space type is required'),
  preferredDate: z.string().optional(),
  duration: z.string().optional(),
  guestCount: z.number().optional(),
  notes: z.string().optional(),
  sourcePage: z.string().optional(),
  status: z.enum(['new', 'contacted', 'qualified', 'converted', 'lost']).default('new')
})

export type HireLeadInput = z.infer<typeof hireLeadSchema>
