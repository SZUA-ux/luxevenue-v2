'use server'

import { connectDB } from '@/lib/db/connect'
import { VenueLead } from '@/lib/models/VenueLead'
import { CateringLead } from '@/lib/models/CateringLead'
import { sendEmail } from '@/lib/email/mailer'

export async function submitContactEnquiry(formData: FormData) {
  try {
    await connectDB()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    
    // Create venue lead (generic enquiry)
    await VenueLead.create({
      clientName: name,
      clientEmail: email,
      clientPhone: phone,
      eventType: subject || 'General Enquiry',
      notes: message,
      status: 'new',
      source: 'contact-form'
    })
    
    // Send notification email
    await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'info@luxevenue.co.uk',
      subject: `Contact Form: ${subject || 'General Enquiry'}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject || 'General Enquiry'}</p>
        <p><strong>Message:</strong> ${message || 'None'}</p>
      `
    })
    
    return { success: true }
  } catch (error) {
    console.error('Error submitting contact enquiry:', error)
    return { success: false, error: 'Failed to submit enquiry' }
  }
}

export async function submitCateringEnquiry(formData: FormData) {
  try {
    await connectDB()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const eventType = formData.get('eventType') as string
    const eventDate = formData.get('eventDate') as string
    const guestCount = formData.get('guestCount') as string
    const message = formData.get('message') as string
    
    // Create catering lead
    await CateringLead.create({
      clientName: name,
      clientEmail: email,
      clientPhone: phone,
      eventType,
      eventDate: eventDate ? new Date(eventDate) : undefined,
      guestCount: guestCount ? parseInt(guestCount) : undefined,
      notes: message,
      status: 'new',
      source: 'catering-page'
    })
    
    // Send notification email
    await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'info@luxevenue.co.uk',
      subject: `Catering Enquiry: ${eventType}`,
      html: `
        <h2>New Catering Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Date:</strong> ${eventDate || 'Not specified'}</p>
        <p><strong>Guests:</strong> ${guestCount || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'None'}</p>
      `
    })
    
    return { success: true }
  } catch (error) {
    console.error('Error submitting catering enquiry:', error)
    return { success: false, error: 'Failed to submit enquiry' }
  }
}
