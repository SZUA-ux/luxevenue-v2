import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db/connect'
import { VenueLead } from '@/lib/models/VenueLead'
import { EmailLog } from '@/lib/models/EmailLog'
import { sendEmail } from '@/lib/email/mailer'
import { venueLeadSchema } from '@/lib/validators/venueLead'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    
    const body = await request.json()
    const validated = venueLeadSchema.parse(body)
    
    // Create venue lead
    const lead = await VenueLead.create(validated)
    
    // Send admin notification
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a1a1a, #2d2d2d); padding: 30px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0; font-size: 32px; letter-spacing: 2px;">LUXE VENUE</h1>
        </div>
        <div style="padding: 40px; background: #ffffff;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Venue Enquiry</h2>
          <table style="width: 100%; margin-top: 20px;">
            <tr><td style="padding: 10px 0; color: #666;"><strong>Name:</strong></td><td style="padding: 10px 0; color: #333;">${validated.clientName}</td></tr>
            <tr><td style="padding: 10px 0; color: #666;"><strong>Email:</strong></td><td style="padding: 10px 0; color: #333;">${validated.clientEmail}</td></tr>
            <tr><td style="padding: 10px 0; color: #666;"><strong>Phone:</strong></td><td style="padding: 10px 0; color: #333;">${validated.clientPhone}</td></tr>
            <tr><td style="padding: 10px 0; color: #666;"><strong>Event Type:</strong></td><td style="padding: 10px 0; color: #333;">${validated.eventType}</td></tr>
            ${validated.eventDate ? `<tr><td style="padding: 10px 0; color: #666;"><strong>Event Date:</strong></td><td style="padding: 10px 0; color: #333;">${validated.eventDate}</td></tr>` : ''}
            ${validated.guestCount ? `<tr><td style="padding: 10px 0; color: #666;"><strong>Guests:</strong></td><td style="padding: 10px 0; color: #333;">${validated.guestCount}</td></tr>` : ''}
            ${validated.notes ? `<tr><td style="padding: 10px 0; color: #666; vertical-align: top;"><strong>Message:</strong></td><td style="padding: 10px 0; color: #333;">${validated.notes}</td></tr>` : ''}
            ${validated.sourcePage ? `<tr><td style="padding: 10px 0; color: #666;"><strong>Source:</strong></td><td style="padding: 10px 0; color: #333;">${validated.sourcePage}</td></tr>` : ''}
          </table>
        </div>
        <div style="background: #f8f8f8; padding: 20px; text-align: center; color: #666; font-size: 14px;">
          <p>Login to CRM to manage this lead</p>
        </div>
      </div>
    `
    
    await sendEmail({
      to: 'info@luxevenue.co.uk',
      cc: 'info.luxevenuebirmingham@gmail.com',
      subject: `New Venue Enquiry: ${validated.eventType}`,
      html: adminHtml
    })
    
    // Send customer confirmation
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a1a1a, #2d2d2d); padding: 30px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0; font-size: 32px; letter-spacing: 2px;">LUXE VENUE</h1>
        </div>
        <div style="padding: 40px; background: #ffffff;">
          <h2 style="color: #1a1a1a;">Thank You for Your Enquiry!</h2>
          <p style="color: #333; line-height: 1.6; font-size: 16px;">Dear ${validated.clientName},</p>
          <p style="color: #333; line-height: 1.6; font-size: 16px;">Thank you for your interest in LUXE VENUE. We've received your enquiry for <strong>${validated.eventType}</strong> and will respond within 24 hours with availability and pricing.</p>
          
          <div style="background: #fef9e7; border-left: 4px solid #d4af37; padding: 20px; margin: 25px 0;">
            <h3 style="color: #1a1a1a; margin-top: 0;">Your Enquiry Details</h3>
            <p style="color: #333; margin: 5px 0;"><strong>Event Type:</strong> ${validated.eventType}</p>
            ${validated.eventDate ? `<p style="color: #333; margin: 5px 0;"><strong>Date:</strong> ${validated.eventDate}</p>` : ''}
            ${validated.guestCount ? `<p style="color: #333; margin: 5px 0;"><strong>Guests:</strong> ${validated.guestCount}</p>` : ''}
          </div>
          
          <p style="color: #333; line-height: 1.6; font-size: 16px;">For immediate assistance, contact us:</p>
          <p style="color: #333; line-height: 1.6;">
            📞 <strong>Phone:</strong> <a href="tel:+447391222884" style="color: #d4af37;">+44 7391 222884</a><br/>
            💬 <strong>WhatsApp:</strong> <a href="https://wa.me/447391222884" style="color: #d4af37;">Chat with us</a><br/>
            📧 <strong>Email:</strong> <a href="mailto:info@luxevenue.co.uk" style="color: #d4af37;">info@luxevenue.co.uk</a>
          </p>
        </div>
        <div style="background: #f8f8f8; padding: 20px; text-align: center; color: #666; font-size: 14px;">
          <p>LUXE VENUE | 86 Leopold Street, Birmingham B12 0UD</p>
        </div>
      </div>
    `
    
    await sendEmail({
      to: validated.clientEmail,
      subject: 'Thank You for Your Enquiry - LUXE VENUE',
      html: customerHtml
    })
    
    // Log emails
    await EmailLog.create({
      to: 'info@luxevenue.co.uk',
      subject: `New Venue Enquiry: ${validated.eventType}`,
      leadId: lead._id,
      leadType: 'venue',
      status: 'sent'
    })
    
    await EmailLog.create({
      to: validated.clientEmail,
      subject: 'Thank You for Your Enquiry - LUXE VENUE',
      leadId: lead._id,
      leadType: 'venue',
      status: 'sent'
    })
    
    return NextResponse.json({ success: true, leadId: lead._id })
  } catch (error: any) {
    console.error('Error creating venue lead:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit enquiry' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    
    const filter: any = {}
    if (status) filter.status = status
    
    const leads = await VenueLead.find(filter).sort({ createdAt: -1 }).limit(100)
    return NextResponse.json(leads)
  } catch (error) {
    console.error('Error fetching venue leads:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}
