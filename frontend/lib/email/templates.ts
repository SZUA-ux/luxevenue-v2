import { sendEmail } from './mailer'

// Get app URL from environment variable with fallback
const getAppUrl = () => {
  return process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL || 'https://luxevenue.co.uk'
}

export async function sendEnquiryConfirmation(enquiry: {
  name: string
  email: string
  eventType: string
  eventDate?: string
  numberOfGuests?: number
  leadId?: string
  leadType?: 'event' | 'catering' | 'hire'
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center; }
        .logo h1 { font-family: Georgia, 'Times New Roman', serif; color: #d4af37; font-size: 36px; margin: 0; letter-spacing: 2px; }
        .content { padding: 40px 30px; color: #333333; line-height: 1.8; }
        .content h2 { color: #1a1a1a; font-size: 24px; margin-bottom: 20px; }
        .content p { margin-bottom: 15px; font-size: 16px; color: #555555; }
        .highlight { background: #fef9e7; border-left: 4px solid #d4af37; padding: 20px; margin: 25px 0; border-radius: 4px; }
        .highlight h3 { color: #1a1a1a; font-size: 18px; margin-bottom: 12px; }
        .highlight p { margin: 8px 0; font-size: 15px; color: #333333; }
        .highlight strong { color: #1a1a1a; font-weight: 600; }
        .cta-button { display: inline-block; padding: 14px 32px; background: #d4af37; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 25px 0; font-size: 16px; box-shadow: 0 2px 4px rgba(212, 175, 55, 0.3); }
        .cta-button:hover { background: #c29d2e; }
        .footer { background: #f8f8f8; padding: 30px; text-align: center; font-size: 14px; color: #666666; border-top: 1px solid #e0e0e0; }
        .footer p { margin: 8px 0; }
        .footer a { color: #d4af37; text-decoration: none; font-weight: 500; }
        .footer strong { color: #1a1a1a; }
        .reference { background: #e8f4f8; padding: 12px; border-radius: 4px; margin: 20px 0; font-size: 14px; color: #555; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">
            <h1>LUXE VENUE</h1>
            <p style="color: #d4af37; margin-top: 8px; font-size: 14px; letter-spacing: 1px;">BIRMINGHAM'S PREMIER EVENT SPACE</p>
          </div>
        </div>
        <div class="content">
          <h2>Thank You for Your Enquiry!</h2>
          <p>Dear ${enquiry.name},</p>
          <p>Thank you for your interest in LUXE VENUE for your special event. We've received your enquiry and our dedicated team will be in touch with you within 24 hours to discuss your requirements in detail.</p>
          <div class="highlight">
            <h3>Your Enquiry Details:</h3>
            <p><strong>Event Type:</strong> ${enquiry.eventType}</p>
            ${enquiry.eventDate ? `<p><strong>Event Date:</strong> ${new Date(enquiry.eventDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>` : ''}
            ${enquiry.numberOfGuests ? `<p><strong>Number of Guests:</strong> ${enquiry.numberOfGuests}</p>` : ''}
          </div>
          ${enquiry.leadId ? `<div class="reference"><strong>Reference ID:</strong> ${enquiry.leadId.substring(0, 8).toUpperCase()}</div>` : ''}
          <p>In the meantime, feel free to explore our venue gallery to see LUXE VENUE transformed for various celebrations, or contact us directly if you have any immediate questions.</p>
          <div style="text-align: center;">
            <a href="${getAppUrl()}/gallery" class="cta-button">View Our Gallery</a>
          </div>
          <p>We look forward to helping you create an unforgettable event at Birmingham's finest venue!</p>
          <p style="margin-top: 30px;">Warm regards,<br><strong style="color: #1a1a1a;">The LUXE VENUE Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>LUXE VENUE LTD</strong></p>
          <p>86 Leopold Street, Birmingham B12 0UD</p>
          <p>📞 <a href="tel:+447391222884">+44 7391 222884</a> | 📧 <a href="mailto:info@luxevenue.co.uk">info@luxevenue.co.uk</a></p>
          <p><a href="https://wa.me/447391222884">💬 WhatsApp Us</a> | <a href="https://luxevenue.co.uk">🌐 Visit Website</a></p>
        </div>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: enquiry.email,
    subject: 'Thank You for Your Enquiry - LUXE VENUE',
    html,
    emailType: 'lead_confirmation',
    leadId: enquiry.leadId,
    leadType: enquiry.leadType,
    recipientName: enquiry.name,
  })
}

export async function sendAdminEnquiryNotification(enquiry: {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate?: string
  numberOfGuests?: number
  message?: string
  leadId?: string
  leadType?: 'event' | 'catering' | 'hire'
}) {
  const timestamp = new Date().toLocaleString('en-GB', { 
    timeZone: 'Europe/London',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f2f5; padding: 20px; }
        .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center; }
        .header h1 { color: #ffffff; font-size: 24px; margin-bottom: 8px; }
        .header p { color: #fca5a5; font-size: 14px; }
        .alert-badge { background: #fef2f2; color: #dc2626; padding: 12px 20px; font-weight: 600; display: inline-block; border-radius: 6px; margin: 20px 0; border: 2px solid #fecaca; }
        .content { padding: 30px; color: #1f2937; }
        .info-box { background: #f9fafb; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 6px; }
        .info-box h3 { color: #1f2937; font-size: 16px; margin-bottom: 12px; font-weight: 600; }
        .info-box p { margin: 10px 0; font-size: 15px; color: #374151; line-height: 1.6; }
        .info-box strong { color: #111827; font-weight: 600; }
        .info-box a { color: #2563eb; text-decoration: none; font-weight: 500; }
        .info-box a:hover { text-decoration: underline; }
        .message-box { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 6px; }
        .message-box h3 { color: #92400e; margin-bottom: 12px; }
        .message-box p { color: #78350f; white-space: pre-wrap; line-height: 1.7; }
        .cta-button { display: inline-block; padding: 14px 32px; background: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 25px 0; font-size: 16px; box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3); }
        .cta-button:hover { background: #1d4ed8; }
        .priority { background: #fef2f2; border: 2px solid #fecaca; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .priority strong { color: #dc2626; font-size: 16px; }
        .priority p { color: #991b1b; margin-top: 8px; }
        .footer { background: #f9fafb; padding: 25px; text-align: center; font-size: 13px; color: #6b7280; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 6px 0; }
        .ref-id { background: #dbeafe; color: #1e40af; padding: 8px 16px; border-radius: 4px; font-family: monospace; font-size: 13px; display: inline-block; margin: 10px 0; }
        .lead-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
        .badge-event { background: #dbeafe; color: #1e40af; }
        .badge-catering { background: #d1fae5; color: #065f46; }
        .badge-hire { background: #e9d5ff; color: #6b21a8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Lead Received</h1>
          <p>LUXE VENUE CRM Notification</p>
        </div>
        <div class="content">
          <div class="alert-badge">⚡ Immediate Attention Required</div>
          ${enquiry.leadId ? `<div class="ref-id">Lead ID: ${enquiry.leadId.substring(0, 8).toUpperCase()}</div>` : ''}
          ${enquiry.leadType ? `<span class="lead-badge badge-${enquiry.leadType}">${enquiry.leadType} Lead</span>` : ''}
          
          <p style="margin: 20px 0; font-size: 16px; color: #374151;">A new enquiry has been submitted through the website and requires your response.</p>
          
          <div class="info-box">
            <h3>👤 Contact Information</h3>
            <p><strong>Name:</strong> ${enquiry.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${enquiry.email}">${enquiry.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${enquiry.phone}">${enquiry.phone}</a></p>
          </div>
          
          <div class="info-box">
            <h3>📅 Event Details</h3>
            <p><strong>Event Type:</strong> ${enquiry.eventType}</p>
            ${enquiry.eventDate ? `<p><strong>Requested Date:</strong> ${new Date(enquiry.eventDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>` : ''}
            ${enquiry.numberOfGuests ? `<p><strong>Guest Count:</strong> ${enquiry.numberOfGuests} guests</p>` : ''}
            <p><strong>Received At:</strong> ${timestamp}</p>
          </div>
          
          ${enquiry.message ? `
          <div class="message-box">
            <h3>💬 Client Message</h3>
            <p>${enquiry.message}</p>
          </div>
          ` : ''}
          
          <div style="text-align: center;">
            <a href="${getAppUrl()}/crm/leads" class="cta-button">Open CRM Dashboard →</a>
          </div>
          
          <div class="priority">
            <strong>⏰ Response Deadline:</strong>
            <p>Please respond to this enquiry within 24 hours to maintain our service standards and maximize conversion rate.</p>
          </div>
        </div>
        <div class="footer">
          <p><strong>LUXE VENUE CRM System</strong></p>
          <p>Automated notification | Do not reply to this email</p>
          <p>This email was sent to all admins and will be logged in the system</p>
        </div>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: process.env.ADMIN_EMAIL!,
    cc: process.env.ADMIN_CC_EMAIL,
    subject: `🔔 New Lead: ${enquiry.eventType} - ${enquiry.name} [${enquiry.leadId?.substring(0, 8).toUpperCase() || 'NEW'}]`,
    html,
    emailType: 'admin_notification',
    leadId: enquiry.leadId,
    leadType: enquiry.leadType,
    recipientName: 'Admin Team',
  })
}

export async function sendBookingConfirmationEmail(booking: {
  id?: string
  clientName: string
  clientEmail: string
  eventType: string
  date: string
  startTime?: string
  endTime?: string
  guestCount: number
  totalAmount?: number
  paidAmount?: number
  balanceDue?: number
  notes?: string
  pdfBase64?: string
}) {
  const eventDate = new Date(booking.date)
  const eventTime = booking.startTime && booking.endTime 
    ? `${booking.startTime} - ${booking.endTime}` 
    : 'To be confirmed'
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f9ff; padding: 20px; }
        .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: #ffffff; font-size: 28px; margin-bottom: 8px; }
        .header p { color: #d1fae5; font-size: 16px; }
        .success-badge { background: #ecfdf5; color: #059669; padding: 16px 24px; font-weight: 600; display: inline-block; border-radius: 8px; margin: 20px 0; border: 2px solid #a7f3d0; font-size: 18px; }
        .content { padding: 40px 30px; color: #1f2937; }
        .content p { margin: 15px 0; font-size: 16px; color: #374151; line-height: 1.7; }
        .info-box { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 6px; }
        .info-box h3 { color: #92400e; font-size: 18px; margin-bottom: 14px; font-weight: 600; }
        .info-box p { margin: 10px 0; font-size: 15px; color: #78350f; }
        .info-box strong { color: #451a03; font-weight: 600; }
        .payment-box { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0; border-radius: 6px; }
        .payment-box h3 { color: #1e40af; font-size: 18px; margin-bottom: 14px; font-weight: 600; }
        .payment-box p { margin: 10px 0; font-size: 15px; color: #1e3a8a; }
        .payment-box strong { color: #1e3a8a; font-weight: 600; }
        .payment-box .balance { font-size: 22px; color: #dc2626; margin-top: 15px; padding-top: 15px; border-top: 2px dashed #93c5fd; }
        .next-steps { background: #f9fafb; padding: 20px; border-radius: 6px; margin: 25px 0; }
        .next-steps h3 { color: #1f2937; margin-bottom: 12px; }
        .next-steps ul { margin-left: 20px; }
        .next-steps li { margin: 10px 0; color: #4b5563; line-height: 1.6; }
        .attachment-note { background: #fef3c7; border: 2px dashed #f59e0b; padding: 15px; border-radius: 6px; margin: 20px 0; text-align: center; }
        .attachment-note p { color: #92400e; font-weight: 500; }
        .footer { background: #f9fafb; padding: 30px; text-align: center; font-size: 14px; color: #6b7280; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 8px 0; }
        .footer a { color: #10b981; text-decoration: none; font-weight: 500; }
        .footer strong { color: #1f2937; }
        .ref-id { background: #d1fae5; color: #065f46; padding: 8px 16px; border-radius: 4px; font-family: monospace; font-size: 13px; display: inline-block; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✓ Booking Confirmed!</h1>
          <p>Your event at LUXE VENUE is secured</p>
        </div>
        <div class="content">
          <div class="success-badge">🎉 Congratulations! Your booking is confirmed</div>
          ${booking.id ? `<div class="ref-id">Booking ID: ${booking.id.substring(0, 8).toUpperCase()}</div>` : ''}
          
          <p>Dear ${booking.clientName},</p>
          <p>Thank you for choosing LUXE VENUE! We're absolutely thrilled to be part of your special celebration. Your booking has been confirmed and we're already preparing to make your event unforgettable.</p>
          
          <div class="info-box">
            <h3>📅 Your Event Details</h3>
            <p><strong>Event Type:</strong> ${booking.eventType}</p>
            <p><strong>Date:</strong> ${eventDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
            <p><strong>Number of Guests:</strong> ${booking.guestCount}</p>
            ${booking.notes ? `<p><strong>Special Requirements:</strong> ${booking.notes}</p>` : ''}
          </div>
          
          ${booking.totalAmount ? `
          <div class="payment-box">
            <h3>💳 Payment Summary</h3>
            <p><strong>Total Amount:</strong> £${booking.totalAmount.toFixed(2)}</p>
            <p><strong>Deposit Paid:</strong> £${(booking.paidAmount || 0).toFixed(2)}</p>
            <p class="balance"><strong>Balance Due:</strong> £${(booking.balanceDue || 0).toFixed(2)}</p>
            <p style="font-size: 13px; color: #6b7280; margin-top: 10px;">⏰ Balance payment due 7 days before your event date</p>
          </div>
          ` : ''}
          
          ${booking.pdfBase64 ? `
          <div class="attachment-note">
            <p>📎 <strong>Booking Confirmation PDF attached</strong> - Please save this for your records</p>
          </div>
          ` : ''}
          
          <div class="next-steps">
            <h3>📋 What Happens Next?</h3>
            <ul>
              <li><strong>Within 48 hours:</strong> Our events coordinator will contact you to discuss your requirements in detail</li>
              <li><strong>Menu Planning:</strong> We'll help you select the perfect menu and catering options</li>
              <li><strong>Event Planning:</strong> A detailed event timeline and setup plan will be shared with you</li>
              <li><strong>Final Walkthrough:</strong> We'll schedule a venue visit closer to your event date</li>
              <li><strong>24/7 Support:</strong> Our team is always here to answer any questions</li>
            </ul>
          </div>
          
          <p>If you need to make any changes to your booking or have questions, please don't hesitate to contact us. We're here to ensure everything is perfect for your special day.</p>
          
          <p style="margin-top: 30px;">We look forward to hosting you at LUXE VENUE!</p>
          <p>Warm regards,<br><strong style="color: #1f2937;">The LUXE VENUE Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>LUXE VENUE LTD</strong></p>
          <p>86 Leopold Street, Birmingham B12 0UD</p>
          <p>📞 <a href="tel:+447391222884">+44 7391 222884</a> | 📧 <a href="mailto:info@luxevenue.co.uk">info@luxevenue.co.uk</a></p>
          <p><a href="https://wa.me/447391222884">💬 WhatsApp</a> | <a href="https://luxevenue.co.uk">🌐 Website</a></p>
        </div>
      </div>
    </body>
    </html>
  `

  const attachments = []
  if (booking.pdfBase64) {
    attachments.push({
      filename: `LUXE-VENUE-Booking-${booking.id?.substring(0, 8).toUpperCase() || 'Confirmation'}.pdf`,
      content: booking.pdfBase64,
      encoding: 'base64',
      contentType: 'application/pdf'
    })
  }

  return sendEmail({
    to: booking.clientEmail,
    subject: `✓ Booking Confirmed - ${booking.eventType} at LUXE VENUE [${booking.id?.substring(0, 8).toUpperCase() || ''}]`,
    html,
    attachments,
    emailType: 'booking_confirmation',
    bookingId: booking.id,
    recipientName: booking.clientName,
  })
}

export async function sendAdminBookingNotification(booking: {
  id: string
  clientName: string
  clientEmail: string
  clientPhone?: string
  eventType: string
  date: string
  startTime?: string
  endTime?: string
  guestCount: number
  totalAmount?: number
  paidAmount?: number
  balanceDue?: number
  notes?: string
}) {
  const eventDate = new Date(booking.date)
  const eventTime = booking.startTime && booking.endTime 
    ? `${booking.startTime} - ${booking.endTime}` 
    : 'To be confirmed'
  const timestamp = new Date().toLocaleString('en-GB', { 
    timeZone: 'Europe/London',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; background: #f0f2f5; padding: 20px; }
        .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; }
        .header h1 { color: #ffffff; font-size: 24px; margin-bottom: 8px; }
        .header p { color: #d1fae5; font-size: 14px; }
        .content { padding: 30px; color: #1f2937; }
        .success-badge { background: #ecfdf5; color: #059669; padding: 12px 20px; font-weight: 600; display: inline-block; border-radius: 6px; margin: 15px 0; border: 2px solid #a7f3d0; }
        .info-box { background: #f9fafb; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 6px; }
        .info-box h3 { color: #1f2937; font-size: 16px; margin-bottom: 12px; font-weight: 600; }
        .info-box p { margin: 10px 0; font-size: 15px; color: #374151; line-height: 1.6; }
        .info-box strong { color: #111827; font-weight: 600; }
        .info-box a { color: #2563eb; text-decoration: none; font-weight: 500; }
        .payment-box { background: #eff6ff; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 6px; }
        .payment-box p { margin: 8px 0; color: #1e3a8a; }
        .payment-box .total { font-size: 20px; color: #059669; font-weight: 700; margin-top: 12px; }
        .cta-button { display: inline-block; padding: 14px 32px; background: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 25px 0; font-size: 16px; }
        .footer { background: #f9fafb; padding: 25px; text-align: center; font-size: 13px; color: #6b7280; border-top: 1px solid #e5e7eb; }
        .ref-id { background: #d1fae5; color: #065f46; padding: 8px 16px; border-radius: 4px; font-family: monospace; font-size: 13px; display: inline-block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✓ New Booking Created</h1>
          <p>Lead successfully converted to booking</p>
        </div>
        <div class="content">
          <div class="success-badge">💰 Confirmed Booking</div>
          <div class="ref-id">Booking ID: ${booking.id.substring(0, 8).toUpperCase()}</div>
          
          <p style="margin: 20px 0; font-size: 16px; color: #374151;">A new booking has been created in the CRM system.</p>
          
          <div class="info-box">
            <h3>👤 Client Information</h3>
            <p><strong>Name:</strong> ${booking.clientName}</p>
            <p><strong>Email:</strong> <a href="mailto:${booking.clientEmail}">${booking.clientEmail}</a></p>
            ${booking.clientPhone ? `<p><strong>Phone:</strong> <a href="tel:${booking.clientPhone}">${booking.clientPhone}</a></p>` : ''}
          </div>
          
          <div class="info-box">
            <h3>📅 Event Details</h3>
            <p><strong>Event Type:</strong> ${booking.eventType}</p>
            <p><strong>Date:</strong> ${eventDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
            <p><strong>Guest Count:</strong> ${booking.guestCount} guests</p>
            ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}
            <p><strong>Created At:</strong> ${timestamp}</p>
          </div>
          
          ${booking.totalAmount ? `
          <div class="payment-box">
            <h3>💳 Payment Information</h3>
            <p><strong>Total Amount:</strong> £${booking.totalAmount.toFixed(2)}</p>
            <p><strong>Deposit Paid:</strong> £${(booking.paidAmount || 0).toFixed(2)}</p>
            <p class="total"><strong>Balance Due:</strong> £${(booking.balanceDue || 0).toFixed(2)}</p>
          </div>
          ` : ''}
          
          <div style="text-align: center;">
            <a href="${getAppUrl()}/crm/bookings" class="cta-button">View in CRM Dashboard →</a>
          </div>
          
          <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="color: #92400e; font-weight: 600; margin: 0;">📧 Confirmation email with PDF has been sent to the client</p>
          </div>
        </div>
        <div class="footer">
          <p><strong>LUXE VENUE CRM System</strong></p>
          <p>Automated notification | Booking logged in system</p>
        </div>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: process.env.ADMIN_EMAIL!,
    cc: process.env.ADMIN_CC_EMAIL,
    subject: `✓ New Booking: ${booking.eventType} - ${booking.clientName} [${booking.id.substring(0, 8).toUpperCase()}]`,
    html,
    emailType: 'admin_booking_notification',
    bookingId: booking.id,
    recipientName: 'Admin Team',
  })
}

export async function sendReviewRequest(booking: {
  clientName: string
  clientEmail: string
  eventType: string
  eventDate: string
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Lato', Arial, sans-serif; background: #0A0A0A; color: #FFFFFF; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1A1A1A, #242424); border: 1px solid #D4AF37; border-radius: 16px; padding: 40px; }
        .logo { text-align: center; margin-bottom: 30px; }
        .logo h1 { font-family: 'Playfair Display', serif; background: linear-gradient(to right, #E8C4B8, #D4AF37, #C9A982); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 32px; margin: 0; }
        .content { color: #E5E5E5; line-height: 1.6; }
        .cta-button { display: inline-block; padding: 15px 40px; background: linear-gradient(to right, #E8C4B8, #D4AF37, #C9A982); color: #000; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; font-size: 16px; }
        .stars { font-size: 40px; text-align: center; margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 14px; color: #A0A0A0; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <h1>LUXE VENUE</h1>
        </div>
        <div class="content">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <h2 style="color: #D4AF37; font-family: 'Montserrat', sans-serif; text-align: center;">How Was Your Experience?</h2>
          <p>Dear ${booking.clientName},</p>
          <p>We hope your ${booking.eventType} at LUXE VENUE was absolutely perfect!</p>
          <p>Your feedback is incredibly valuable to us and helps us continue to provide exceptional experiences for our clients. We would be grateful if you could take a moment to share your thoughts about your event.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${getAppUrl()}/testimonials" class="cta-button">Leave a Review</a>
          </div>
          <p style="text-align: center; color: #A0A0A0; font-size: 14px;">Your review will help other couples and event planners discover LUXE VENUE</p>
          <p>If you have any concerns or feedback you'd like to share privately, please don't hesitate to contact us directly. We're always here to help.</p>
          <p>Thank you for choosing LUXE VENUE for your special day. We hope to welcome you back in the future!</p>
          <p>Warm regards,<br><strong>The LUXE VENUE Team</strong></p>
        </div>
        <div class="footer">
          <p><strong>LUXE VENUE LTD</strong></p>
          <p>86 Leopold Street, Birmingham B12 0UD</p>
          <p>Phone: +44 7391 222884 | Email: info@luxevenue.co.uk</p>
        </div>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: booking.clientEmail,
    subject: "We'd Love Your Feedback - LUXE VENUE",
    html,
  })
}
