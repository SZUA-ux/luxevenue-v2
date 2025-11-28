import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

interface BookingData {
  id: string
  clientName: string
  clientEmail: string
  clientPhone: string
  eventType: string
  date: Date
  startTime: string
  endTime: string
  guestCount: number
  totalAmount?: number
  paidAmount?: number
  balanceDue?: number
  paymentStatus?: string
  menuDetails?: string
  notes?: string
}

export function generateBookingPDF(booking: BookingData): Buffer {
  const doc = new jsPDF()
  
  // Colors matching the sample PDF
  const tealColor = [0, 180, 180] as [number, number, number]
  const darkGray = [40, 40, 40] as [number, number, number]
  const lightGray = [100, 100, 100] as [number, number, number]
  
  let yPos = 20

  // Header
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...darkGray)
  doc.text('BOOKING CONFIRMATION', 105, yPos, { align: 'center' })
  
  yPos += 10
  
  // Company info
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('LUXE VENUE LTD', 105, yPos, { align: 'center' })
  
  yPos += 7
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...lightGray)
  doc.text('Birmingham\'s Premier Halal Wedding & Event Venue', 105, yPos, { align: 'center' })
  
  yPos += 5
  
  // Teal line
  doc.setDrawColor(...tealColor)
  doc.setLineWidth(0.5)
  doc.line(20, yPos, 190, yPos)
  
  yPos += 15

  // Client Information Section
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...darkGray)
  doc.text('Client Information', 20, yPos)
  
  yPos += 2
  doc.setDrawColor(...tealColor)
  doc.line(20, yPos, 80, yPos)
  
  yPos += 8
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('CLIENT NAME:', 20, yPos)
  doc.setFont('helvetica', 'normal')
  doc.text(booking.clientName, 60, yPos)
  
  yPos += 7
  doc.setFont('helvetica', 'bold')
  doc.text('EVENT TYPE:', 20, yPos)
  doc.setFont('helvetica', 'normal')
  doc.text(booking.eventType, 60, yPos)
  
  yPos += 7
  doc.setFont('helvetica', 'bold')
  doc.text('CONTACT NUMBER:', 20, yPos)
  doc.setFont('helvetica', 'normal')
  doc.text(booking.clientPhone, 60, yPos)
  
  yPos += 7
  doc.setFont('helvetica', 'bold')
  doc.text('EMAIL:', 20, yPos)
  doc.setFont('helvetica', 'normal')
  doc.text(booking.clientEmail, 60, yPos)
  
  yPos += 15

  // Event Details Section
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...darkGray)
  doc.text('Event Details', 20, yPos)
  
  yPos += 2
  doc.setDrawColor(...tealColor)
  doc.line(20, yPos, 80, yPos)
  
  yPos += 8
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('EVENT DATE:', 20, yPos)
  doc.setFont('helvetica', 'normal')
  doc.text(new Date(booking.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), 60, yPos)
  
  yPos += 7
  doc.setFont('helvetica', 'bold')
  doc.text('TIME:', 20, yPos)
  doc.setFont('helvetica', 'normal')
  doc.text(`${booking.startTime} - ${booking.endTime}`, 60, yPos)
  
  yPos += 7
  doc.setFont('helvetica', 'bold')
  doc.text('GUEST COUNT:', 20, yPos)
  doc.setFont('helvetica', 'normal')
  doc.text(`${booking.guestCount} guests`, 60, yPos)
  
  yPos += 15

  // Payment Information Section (if available)
  if (booking.totalAmount) {
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...darkGray)
    doc.text('Payment Information', 20, yPos)
    
    yPos += 2
    doc.setDrawColor(...tealColor)
    doc.line(20, yPos, 80, yPos)
    
    yPos += 8
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('Total Amount:', 20, yPos)
    doc.setFontSize(14)
    doc.text(`£${booking.totalAmount.toFixed(2)}`, 60, yPos)
    
    yPos += 8
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('PAID AMOUNT:', 20, yPos)
    doc.setFont('helvetica', 'normal')
    doc.text(`£${(booking.paidAmount || 0).toFixed(2)}`, 60, yPos)
    
    yPos += 7
    doc.setFont('helvetica', 'bold')
    doc.text('BALANCE DUE:', 20, yPos)
    doc.setFont('helvetica', 'normal')
    doc.text(`£${(booking.balanceDue || 0).toFixed(2)}`, 60, yPos)
    
    yPos += 7
    doc.setFont('helvetica', 'bold')
    doc.text('Status:', 20, yPos)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...lightGray)
    doc.text(booking.paymentStatus || 'Pending', 60, yPos)
    
    yPos += 10
  }

  // Add new page for Terms & Conditions
  doc.addPage()
  yPos = 20

  // Terms & Conditions
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...darkGray)
  doc.text('Terms & Conditions', 20, yPos)
  
  yPos += 2
  doc.setDrawColor(...tealColor)
  doc.line(20, yPos, 80, yPos)
  
  yPos += 10
  
  const terms = [
    {
      title: '1. Deposit & Payment:',
      text: 'A non-refundable deposit of 50% of the total booking value is required to secure your event date. The remaining balance must be paid in full no later than 14 days prior to the event date. All deposits and payments are non-refundable.'
    },
    {
      title: '2. Date Changes:',
      text: 'Date changes may be accommodated subject to availability and must be requested in writing at least 28 days prior to the original event date. A £250 administration fee will apply to all date changes. Date change requests made within 28 days of the event will not be accepted, and the booking will be forfeited.'
    },
    {
      title: '3. Cancellation:',
      text: 'In the event of cancellation by the client, all deposits and payments made are non-refundable. LUXE VENUE LTD reserves the right to cancel or reschedule events due to unforeseen circumstances, in which case a full refund of all payments made will be provided.'
    },
    {
      title: '4. Guest Numbers:',
      text: 'Final guest numbers must be confirmed 7 days prior to the event. You will be charged for the confirmed number of guests, even if the actual attendance is lower. Additional guests exceeding the agreed capacity may not be accommodated.'
    },
    {
      title: '5. Venue Access & Timings:',
      text: 'Access to the venue will be granted at the agreed start time. Any requests for early access or extended time must be arranged in advance and may incur additional charges. The venue must be vacated by the agreed end time.'
    },
  ]

  doc.setFontSize(9)
  terms.forEach(term => {
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...darkGray)
    doc.text(term.title, 20, yPos)
    yPos += 5
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...lightGray)
    const lines = doc.splitTextToSize(term.text, 170)
    doc.text(lines, 20, yPos)
    yPos += lines.length * 5 + 5
  })

  // Add page 3 for more terms
  doc.addPage()
  yPos = 20

  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...darkGray)
  doc.text('Terms & Conditions (Continued)', 20, yPos)
  
  yPos += 2
  doc.setDrawColor(...tealColor)
  doc.line(20, yPos, 100, yPos)
  
  yPos += 10

  const moreTerms = [
    {
      title: '6. Damage & Liability:',
      text: 'The client is responsible for any damage caused to the venue, its fixtures, fittings, or equipment during the event. LUXE VENUE LTD accepts no liability for any loss, damage, or injury to persons or property during the event, except where caused by negligence on the part of LUXE VENUE LTD. Clients are strongly advised to arrange their own event insurance.'
    },
    {
      title: '7. Conduct & Compliance:',
      text: 'All guests must comply with venue rules and UK licensing laws. LUXE VENUE LTD reserves the right to refuse service or ask guests to leave if they behave inappropriately or breach venue policies. The client is responsible for the conduct of their guests.'
    },
    {
      title: '8. External Suppliers:',
      text: 'Any external suppliers (caterers, decorators, DJs, etc.) must be approved by LUXE VENUE LTD in advance. All suppliers must provide proof of public liability insurance.'
    },
    {
      title: '9. Force Majeure:',
      text: 'LUXE VENUE LTD shall not be liable for any failure to perform its obligations due to circumstances beyond its reasonable control, including but not limited to acts of God, fire, flood, government restrictions, pandemics, or civil unrest.'
    },
    {
      title: '10. Governing Law:',
      text: 'These terms and conditions are governed by the laws of England and Wales. Any disputes arising from this agreement shall be subject to the exclusive jurisdiction of the courts of England and Wales.'
    },
  ]

  doc.setFontSize(9)
  moreTerms.forEach(term => {
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...darkGray)
    doc.text(term.title, 20, yPos)
    yPos += 5
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...lightGray)
    const lines = doc.splitTextToSize(term.text, 170)
    doc.text(lines, 20, yPos)
    yPos += lines.length * 5 + 5
  })

  // Footer
  yPos = 270
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...darkGray)
  doc.text('LUXE VENUE LTD', 105, yPos, { align: 'center' })
  
  yPos += 5
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...lightGray)
  doc.text('86 Leopold Street, Birmingham, West Midlands, B12 OUD', 105, yPos, { align: 'center' })
  
  yPos += 4
  doc.text('Tel: +447391222884 | Email: info@luxevenue.co.uk', 105, yPos, { align: 'center' })
  
  yPos += 4
  doc.text(`Document generated on ${new Date().toLocaleDateString('en-GB')}`, 105, yPos, { align: 'center' })
  
  yPos += 5
  doc.setFontSize(7)
  doc.text('By signing or accepting this booking, the client acknowledges and agrees to the above terms and conditions.', 105, yPos, { align: 'center' })

  return Buffer.from(doc.output('arraybuffer'))
}

export function generateBookingPDFBase64(booking: BookingData): string {
  const buffer = generateBookingPDF(booking)
  return buffer.toString('base64')
}