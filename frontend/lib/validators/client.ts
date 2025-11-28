import { z } from 'zod'

export const clientSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone is required'),
  notes: z.string().optional(),
  totalSpent: z.number().optional(),
  totalBookings: z.number().optional()
})

export type ClientInput = z.infer<typeof clientSchema>
