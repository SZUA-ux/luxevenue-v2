import nodemailer from 'nodemailer'
import { connectDB } from '@/lib/db/connect'
import { EmailLog } from '@/lib/models/EmailLog'
import { v4 as uuidv4 } from 'uuid'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  cc?: string | string[]
  attachments?: any[]
  emailType?: string
  leadId?: string
  bookingId?: string
  leadType?: 'event' | 'catering' | 'hire'
  recipientName?: string
}

export async function sendEmail({ 
  to, 
  subject, 
  html, 
  cc, 
  attachments,
  emailType = 'general',
  leadId,
  bookingId,
  leadType,
  recipientName 
}: EmailOptions) {
  const emailLogId = uuidv4()
  const primaryRecipient = Array.isArray(to) ? to[0] : to
  
  try {
    // Send email
    const info = await transporter.sendMail({
      from: `"${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      cc: cc ? (Array.isArray(cc) ? cc.join(', ') : cc) : undefined,
      subject,
      html,
      attachments: attachments || [],
    })
    
    console.log('Email sent:', info.messageId)
    
    // Log email to database
    try {
      await connectDB()
      await EmailLog.create({
        id: emailLogId,
        type: emailType,
        recipient: recipientName || primaryRecipient,
        recipientEmail: primaryRecipient,
        subject,
        status: 'sent',
        messageId: info.messageId,
        leadId,
        bookingId,
        leadType,
        sentAt: new Date(),
        metadata: {
          hasAttachments: attachments && attachments.length > 0,
          cc: cc,
        }
      })
    } catch (dbError) {
      console.error('Failed to log email to database:', dbError)
      // Don't fail the email send if logging fails
    }
    
    return { success: true, messageId: info.messageId, emailLogId }
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Log failed email
    try {
      await connectDB()
      await EmailLog.create({
        id: emailLogId,
        type: emailType,
        recipient: recipientName || primaryRecipient,
        recipientEmail: primaryRecipient,
        subject,
        status: 'failed',
        leadId,
        bookingId,
        leadType,
        error: String(error),
        sentAt: new Date(),
      })
    } catch (dbError) {
      console.error('Failed to log failed email:', dbError)
    }
    
    return { success: false, error: String(error) }
  }
}

export async function sendAdminLoginNotification(adminEmail: string) {
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
        .info { background: rgba(212, 175, 55, 0.1); border-left: 4px solid #D4AF37; padding: 15px; margin: 20px 0; border-radius: 4px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 14px; color: #A0A0A0; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <h1>LUXE VENUE</h1>
        </div>
        <div class="content">
          <h2 style="color: #D4AF37; font-family: 'Montserrat', sans-serif;">Admin Login Notification</h2>
          <p>Hello,</p>
          <p>An admin user has successfully logged into the LUXE VENUE CRM system.</p>
          <div class="info">
            <p style="margin: 5px 0;"><strong>Admin Email:</strong> ${adminEmail}</p>
            <p style="margin: 5px 0;"><strong>Login Time:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
            <p style="margin: 5px 0;"><strong>Location:</strong> CRM Dashboard</p>
          </div>
          <p>If this wasn't you, please contact the system administrator immediately.</p>
        </div>
        <div class="footer">
          <p><strong>LUXE VENUE LTD</strong></p>
          <p>86 Leopold Street, Birmingham B12 0UD</p>
          <p>Phone: +44 7391 222884</p>
        </div>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: process.env.ADMIN_CC_EMAIL!,
    subject: 'Admin Login Notification - LUXE VENUE CRM',
    html,
  })
}

export async function sendTestEmail(recipient: string) {
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
        .success { background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10B981; padding: 15px; margin: 20px 0; border-radius: 4px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 14px; color: #A0A0A0; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <h1>LUXE VENUE</h1>
        </div>
        <div class="content">
          <h2 style="color: #D4AF37; font-family: 'Montserrat', sans-serif;">SMTP Email Test</h2>
          <p>Hello,</p>
          <p>This is a test email to verify that SMTP email delivery is working correctly for the LUXE VENUE CRM system.</p>
          <div class="success">
            <p style="margin: 5px 0;"><strong>✓ Email Service:</strong> Working</p>
            <p style="margin: 5px 0;"><strong>✓ Sent At:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
            <p style="margin: 5px 0;"><strong>✓ Configuration:</strong> Valid</p>
          </div>
          <p>If you received this email, the SMTP configuration is correct and emails will be delivered successfully.</p>
        </div>
        <div class="footer">
          <p><strong>LUXE VENUE LTD</strong></p>
          <p>86 Leopold Street, Birmingham B12 0UD</p>
          <p>Phone: +44 7391 222884</p>
        </div>
      </div>
    </body>
    </html>
  `

  return sendEmail({
    to: recipient,
    cc: process.env.ADMIN_CC_EMAIL,
    subject: 'SMTP Test Email - LUXE VENUE',
    html,
  })
}
