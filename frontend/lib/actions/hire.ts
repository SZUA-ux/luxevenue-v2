'use server'

import { connectDB } from '@/lib/db/connect'
import { HireLead } from '@/lib/models/HireLead'
import { sendEmail } from '@/lib/email/mailer'

export async function submitHireEnquiry(formData: FormData) {
  try {
    await connectDB()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const spaceType = formData.get('spaceType') as string
    const date = formData.get('date') as string
    const duration = formData.get('duration') as string
    const message = formData.get('message') as string
    
    // Create hire lead
    await HireLead.create({
      clientName: name,
      clientEmail: email,
      clientPhone: phone,
      spaceType: spaceType || 'Venue Hire',
      preferredDate: date ? new Date(date) : undefined,
      duration,
      notes: message,
      status: 'new',
      source: 'venue-hire-page'
    })
    
    // Send notification email
    await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'info@luxevenue.co.uk',
      subject: `Venue Hire Enquiry: ${spaceType || 'General'}`,
      html: `
        <h2>New Venue Hire Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Space Type:</strong> ${spaceType || 'Not specified'}</p>
        <p><strong>Date:</strong> ${date || 'Not specified'}</p>
        <p><strong>Duration:</strong> ${duration || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'None'}</p>
      `
    })
    
    return { success: true }
  } catch (error) {
    console.error('Error submitting hire enquiry:', error)
    return { success: false, error: 'Failed to submit enquiry' }
  }
}
