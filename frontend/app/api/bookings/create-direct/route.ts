import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db/connect'
import { Booking } from '@/lib/models/Booking'
import nodemailer from 'nodemailer'

// Email backup function
async function sendBackupEmail(booking: any) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })

    const backupEmails = ['luxevenue01@gmail.com', 'info@luxevenue.co.uk']
    const bookingDate = new Date(booking.date).toLocaleDateString('en-GB')
    
    const emailContent = `
🔔 NEW BOOKING CREATED - BACKUP NOTIFICATION

Booking ID: ${booking.id}
Booking Type: ${booking.bookingType.toUpperCase()}
Status: ${booking.status.toUpperCase()}

CLIENT DETAILS:
Name: ${booking.clientName}
Email: ${booking.clientEmail}
Phone: ${booking.clientPhone}

EVENT DETAILS:
Type: ${booking.eventType}
Date: ${bookingDate}
Time: ${booking.startTime} - ${booking.endTime}
Guests: ${booking.guestCount}

FINANCIAL:
Total Amount: £${booking.totalAmount || 0}
Discount: £${booking.discount || 0}
Paid Amount: £${booking.paidAmount || 0}
Balance Due: £${booking.balanceDue || 0}

Notes: ${booking.notes || 'None'}

Created: ${new Date().toLocaleString('en-GB')}

---
This is an automated backup email to protect against system failures.
Please verify this booking in the CRM system.
`

    await transporter.sendMail({
      from: `"LUXE VENUE CRM Backup" <${process.env.SENDER_EMAIL}>`,
      to: backupEmails.join(', '),
      subject: `[BACKUP] New ${booking.bookingType.toUpperCase()} Booking - ${booking.clientName}`,
      text: emailContent
    })

    console.log('✅ Backup email sent to:', backupEmails.join(', '))
  } catch (error) {
    console.error('⚠️ Failed to send backup email:', error)
    // Don't fail the booking creation if email fails
  }
}

export async function POST(request: Request) {
  try {
    await connectDB()
    
    const body = await request.json()
    
    // Validate required fields
    if (!body.clientName || !body.clientEmail || !body.eventType || !body.date || !body.bookingType) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Calculate balance
    const totalAmount = parseFloat(body.totalAmount) || 0
    const discount = parseFloat(body.discount) || 0
    const paidAmount = parseFloat(body.paidAmount) || 0
    const balanceDue = totalAmount - discount - paidAmount
    
    // Create new booking
    const booking = await Booking.create({
      id: `BK-${Date.now()}`,
      bookingType: body.bookingType,
      clientName: body.clientName,
      clientEmail: body.clientEmail,
      clientPhone: body.clientPhone || 'N/A',
      eventType: body.eventType,
      date: new Date(body.date),
      startTime: body.startTime || '10:00',
      endTime: body.endTime || '18:00',
      guestCount: body.guestCount || 50,
      totalAmount: totalAmount,
      discount: discount,
      paidAmount: paidAmount,
      balanceDue: balanceDue,
      status: body.status || 'tentative',
      notes: body.notes || '',
      menuDetails: '',
      specialRequirements: '',
      typeSpecificData: {}
    })
    
    // Send backup email asynchronously (don't wait for it)
    sendBackupEmail(booking.toObject()).catch(err => 
      console.error('Background email send failed:', err)
    )
    
    return NextResponse.json({
      success: true,
      bookingId: booking._id.toString(),
      message: 'Booking created successfully'
    })
    
  } catch (error: any) {
    console.error('Error creating direct booking:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create booking' },
      { status: 500 }
    )
  }
}
