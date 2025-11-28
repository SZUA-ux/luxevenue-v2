import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db/connect'
import { Booking } from '@/lib/models/Booking'
import nodemailer from 'nodemailer'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { type } = body // 'confirmation' or 'reminder'
    
    const booking: any = await Booking.findById(params.id).lean()
    
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
    
    const bookingDate = new Date(booking.date).toLocaleDateString('en-GB')
    const subject = type === 'reminder' 
      ? `Booking Reminder - ${booking.eventType} | Luxe Venue Ltd` 
      : `Booking Confirmation - ${booking.eventType} | Luxe Venue Ltd`
    
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border-radius: 0 0 10px 10px;
    }
    .section {
      background: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .section h3 {
      color: #667eea;
      margin-top: 0;
      border-bottom: 2px solid #667eea;
      padding-bottom: 10px;
    }
    .row {
      display: flex;
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .row:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: bold;
      width: 150px;
      color: #555;
    }
    .value {
      flex: 1;
    }
    .financial {
      background: #ecfdf5;
      border-left: 4px solid #10b981;
    }
    .balance-due {
      font-size: 18px;
      font-weight: bold;
      color: #10b981;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 2px solid #10b981;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e5e7eb;
      color: #666;
      font-size: 14px;
    }
    .badge {
      display: inline-block;
      padding: 5px 15px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: bold;
      color: white;
    }
    .badge-confirmed { background: #10b981; }
    .badge-tentative { background: #f59e0b; }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0;">LUXE VENUE LTD</h1>
    <p style="margin: 10px 0 0 0; font-size: 18px;">${type === 'reminder' ? 'Booking Reminder' : 'Booking Confirmation'}</p>
  </div>
  
  <div class="content">
    <p style="font-size: 16px; margin-bottom: 20px;">
      Dear ${booking.clientName},
    </p>
    <p style="margin-bottom: 20px;">
      ${type === 'reminder' 
        ? 'This is a friendly reminder about your upcoming booking with LUXE VENUE.' 
        : 'Thank you for booking with LUXE VENUE. We are delighted to confirm your reservation.'}
    </p>
    
    <div class="section">
      <h3>Booking Details</h3>
      <div class="row">
        <div class="label">Booking ID:</div>
        <div class="value"><strong>${booking.id}</strong></div>
      </div>
      <div class="row">
        <div class="label">Type:</div>
        <div class="value">${booking.bookingType.toUpperCase()}</div>
      </div>
      <div class="row">
        <div class="label">Status:</div>
        <div class="value">
          <span class="badge badge-${booking.status}">${booking.status.toUpperCase()}</span>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h3>Event Information</h3>
      <div class="row">
        <div class="label">Event Type:</div>
        <div class="value">${booking.eventType}</div>
      </div>
      <div class="row">
        <div class="label">Date:</div>
        <div class="value"><strong>${bookingDate}</strong></div>
      </div>
      <div class="row">
        <div class="label">Time:</div>
        <div class="value">${booking.startTime} - ${booking.endTime}</div>
      </div>
      <div class="row">
        <div class="label">Guests:</div>
        <div class="value">${booking.guestCount}</div>
      </div>
    </div>
    
    <div class="section financial">
      <h3>Financial Summary</h3>
      <div class="row">
        <div class="label">Total Amount:</div>
        <div class="value">£${(booking.totalAmount || 0).toFixed(2)}</div>
      </div>
      <div class="row">
        <div class="label">Discount:</div>
        <div class="value">£${(booking.discount || 0).toFixed(2)}</div>
      </div>
      <div class="row">
        <div class="label">Paid Amount:</div>
        <div class="value">£${(booking.paidAmount || 0).toFixed(2)}</div>
      </div>
      <div class="balance-due">
        <div class="row">
          <div class="label">Balance Due:</div>
          <div class="value">£${(booking.balanceDue || 0).toFixed(2)}</div>
        </div>
      </div>
    </div>
    
    ${booking.notes ? `
    <div class="section">
      <h3>Notes</h3>
      <p>${booking.notes}</p>
    </div>
    ` : ''}
    
    <div class="footer">
      <table style="width: 100%; margin-bottom: 20px;">
        <tr>
          <td style="vertical-align: top; padding-right: 20px;">
            <p style="font-weight: bold; color: #667eea; margin-bottom: 8px;">LUXE VENUE LTD</p>
            <p style="font-size: 13px; line-height: 1.6;">
              86 Leopold Street<br>
              Birmingham B12 0UD<br>
              United Kingdom
            </p>
          </td>
          <td style="vertical-align: top; padding-right: 20px;">
            <p style="font-weight: bold; color: #667eea; margin-bottom: 8px;">CONTACT US</p>
            <p style="font-size: 13px; line-height: 1.6;">
              Phone: +44 7391 222884<br>
              Email: info@luxevenue.co.uk<br>
              Support: luxevenue01@gmail.com
            </p>
          </td>
          <td style="vertical-align: top;">
            <p style="font-weight: bold; color: #667eea; margin-bottom: 8px;">BUSINESS HOURS</p>
            <p style="font-size: 13px; line-height: 1.6;">
              Mon-Fri: 9:00 AM - 6:00 PM<br>
              Saturday: 10:00 AM - 4:00 PM<br>
              Sunday: Closed
            </p>
          </td>
        </tr>
      </table>
      <p style="text-align: center; font-size: 11px; color: #999; border-top: 1px solid #e5e7eb; padding-top: 15px;">
        © ${new Date().getFullYear()} Luxe Venue Ltd. All rights reserved.
      </p>
      <p style="text-align: center; font-size: 11px; color: #999; margin-top: 8px;">
        If you have any questions about your booking, please reply to this email or call us at +44 7391 222884.
      </p>
    </div>
  </div>
</body>
</html>
    `
    
    // Send email
    await transporter.sendMail({
      from: `"${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>`,
      to: booking.clientEmail,
      subject: subject,
      html: emailHTML
    })
    
    console.log(`✅ Email sent to: ${booking.clientEmail}`)
    
    return NextResponse.json({
      success: true,
      message: `Email sent successfully to ${booking.clientEmail}`
    })
    
  } catch (error: any) {
    console.error('❌ Error sending email:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    )
  }
}
