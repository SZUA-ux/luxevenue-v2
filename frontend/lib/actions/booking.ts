'use server'

import { connectDB } from '@/lib/db/connect'
import { Booking } from '@/lib/models/Booking'
import { VenueLead } from '@/lib/models/VenueLead'
import { CateringLead } from '@/lib/models/CateringLead'
import { HireLead } from '@/lib/models/HireLead'
import { sendEmail } from '@/lib/email/mailer'
import { revalidatePath } from 'next/cache'

// Helper function to build type-specific data from lead
function buildTypeSpecificData(lead: any, leadType: 'venue' | 'catering' | 'hire', bookingData: any) {
  if (leadType === 'venue') {
    return {
      eventType: bookingData.eventType || lead.eventType || '',
      foodPackage: bookingData.foodPackage || 'standard',
      menuSelection: bookingData.menuSelection || [],
      dietaryRequirements: bookingData.dietaryRequirements || [],
      cateringNotes: bookingData.cateringNotes || lead.cateringNotes || '',
      decorPackage: bookingData.decorPackage || 'basic',
      decorTheme: bookingData.decorTheme || '',
      decorItems: bookingData.decorItems || [],
      decorNotes: bookingData.decorNotes || '',
      roomSetup: bookingData.roomSetup || 'banquet',
      audioVisual: bookingData.audioVisual || [],
      venueHireFee: bookingData.venueHireFee || 0,
      cateringFee: bookingData.cateringFee || 0,
      decorFee: bookingData.decorFee || 0,
      equipmentFee: bookingData.equipmentFee || 0,
      additionalServices: bookingData.additionalServices || []
    }
  } else if (leadType === 'catering') {
    return {
      cuisineType: lead.cuisineType || bookingData.cuisineType || '',
      serviceType: bookingData.serviceType || 'buffet',
      courses: bookingData.courses || [],
      menuItems: bookingData.menuItems || [],
      chefOnSite: bookingData.chefOnSite || false,
      waitStaff: bookingData.waitStaff || 0,
      setupService: bookingData.setupService || false,
      cleanupService: bookingData.cleanupService || false,
      servingEquipment: bookingData.servingEquipment || [],
      beverageService: bookingData.beverageService || false,
      deliveryLocation: lead.location || bookingData.deliveryLocation || '',
      deliveryTime: bookingData.deliveryTime || '',
      setupTime: bookingData.setupTime || '',
      perHeadPrice: bookingData.perHeadPrice || 0,
      serviceCharge: bookingData.serviceCharge || 0,
      equipmentCharge: bookingData.equipmentCharge || 0,
      deliveryCharge: bookingData.deliveryCharge || 0
    }
  } else {
    return {
      spaceType: lead.spaceType || bookingData.spaceType || '',
      purpose: lead.purpose || bookingData.purpose || '',
      duration: bookingData.duration || 2,
      recurringBooking: bookingData.recurringBooking || false,
      frequency: bookingData.frequency || undefined,
      requiredEquipment: bookingData.requiredEquipment || [],
      audioSystem: bookingData.audioSystem || false,
      heatingCooling: bookingData.heatingCooling || false,
      storageSpace: bookingData.storageSpace || false,
      setupNeeded: bookingData.setupNeeded || false,
      specificRequirements: lead.notes || bookingData.specificRequirements || '',
      keyAccess: bookingData.keyAccess || false,
      securityDeposit: bookingData.securityDeposit || 0,
      hourlyRate: bookingData.hourlyRate || 0,
      additionalHours: bookingData.additionalHours || 0,
      equipmentCharge: bookingData.equipmentCharge || 0,
      cleaningFee: bookingData.cleaningFee || 0
    }
  }
}

export async function convertLeadToBooking(leadId: string, leadType: 'venue' | 'catering' | 'hire', bookingData: any) {
  try {
    await connectDB()
    
    // Get the lead
    let lead: any
    if (leadType === 'venue') {
      lead = await VenueLead.findById(leadId)
    } else if (leadType === 'catering') {
      lead = await CateringLead.findById(leadId)
    } else {
      lead = await HireLead.findById(leadId)
    }
    
    if (!lead) {
      return { success: false, error: 'Lead not found' }
    }
    
    // Build type-specific data from lead + booking form data
    const typeSpecificData = buildTypeSpecificData(lead, leadType, bookingData)
    
    // Create booking with enhanced data
    const totalAmount = bookingData.totalAmount || 0
    const discount = bookingData.discount || 0
    const paidAmount = bookingData.paidAmount || 0
    
    // Validate required fields
    if (!bookingData.date) {
      return { success: false, error: 'Event date is required' }
    }
    if (!bookingData.startTime) {
      return { success: false, error: 'Start time is required' }
    }
    if (!bookingData.endTime) {
      return { success: false, error: 'End time is required' }
    }
    if (!bookingData.eventType && !lead.eventType && !lead.spaceType) {
      return { success: false, error: 'Event type is required' }
    }

    const booking = await Booking.create({
      id: `BK-${Date.now()}`,
      bookingType: leadType,
      sourceLeadId: leadId,
      sourceLeadType: leadType,
      clientName: lead.clientName,
      clientEmail: lead.clientEmail,
      clientPhone: lead.clientPhone || 'N/A',
      eventType: bookingData.eventType || lead.eventType || lead.spaceType || '',
      date: new Date(bookingData.date),
      startTime: bookingData.startTime,
      endTime: bookingData.endTime,
      guestCount: bookingData.guestCount || lead.guestCount || 50,
      totalAmount: totalAmount,
      discount: discount,
      paidAmount: paidAmount,
      balanceDue: totalAmount - discount - paidAmount,
      status: bookingData.status || 'tentative',
      notes: lead.notes || '',
      menuDetails: bookingData.menuDetails || '',
      specialRequirements: bookingData.specialRequirements || '',
      typeSpecificData: typeSpecificData
    })
    
    // Update lead status to converted
    if (leadType === 'venue') {
      await VenueLead.findByIdAndUpdate(leadId, { status: 'converted' })
    } else if (leadType === 'catering') {
      await CateringLead.findByIdAndUpdate(leadId, { status: 'converted' })
    } else {
      await HireLead.findByIdAndUpdate(leadId, { status: 'converted' })
    }
    
    revalidatePath('/crm/leads')
    revalidatePath('/crm/bookings')
    
    return { success: true, bookingId: booking._id.toString() }
  } catch (error: any) {
    console.error('Error converting lead to booking:', error)
    return { success: false, error: error.message || 'Failed to convert lead' }
  }
}

export async function updateBooking(bookingId: string, updates: any) {
  try {
    await connectDB()
    
    const booking = await Booking.findByIdAndUpdate(bookingId, updates, { new: true })
    
    if (!booking) {
      return { success: false, error: 'Booking not found' }
    }
    
    revalidatePath('/crm/bookings')
    
    return { success: true, booking: JSON.parse(JSON.stringify(booking)) }
  } catch (error) {
    console.error('Error updating booking:', error)
    return { success: false, error: 'Failed to update booking' }
  }
}

export async function deleteBooking(bookingId: string) {
  try {
    await connectDB()
    
    await Booking.findByIdAndDelete(bookingId)
    
    revalidatePath('/crm/bookings')
    
    return { success: true }
  } catch (error) {
    console.error('Error deleting booking:', error)
    return { success: false, error: 'Failed to delete booking' }
  }
}

export async function updateBookingStatus(bookingId: string, status: 'tentative' | 'confirmed' | 'completed' | 'cancelled') {
  try {
    await connectDB()
    
    const booking = await Booking.findByIdAndUpdate(
      bookingId, 
      { status },
      { new: true }
    )
    
    if (!booking) {
      return { success: false, error: 'Booking not found' }
    }
    
    revalidatePath('/crm/bookings')
    
    return { success: true }
  } catch (error) {
    console.error('Error updating booking status:', error)
    return { success: false, error: 'Failed to update status' }
  }
}

export async function sendBookingConfirmation(bookingId: string) {
  try {
    await connectDB()
    
    const booking = await Booking.findById(bookingId)
    
    if (!booking) {
      return { success: false, error: 'Booking not found' }
    }
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2px; border-radius: 12px;">
        <div style="background: white; padding: 40px; border-radius: 10px;">
          <h1 style="color: #667eea; margin: 0 0 20px 0; font-size: 28px;">Booking Confirmed</h1>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${booking.clientName},</p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Your booking at LUXE VENUE has been confirmed!</p>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h2 style="color: white; margin: 0 0 15px 0; font-size: 20px;">Booking Details</h2>
            <table style="width: 100%; color: white;">
              <tr><td style="padding: 8px 0;"><strong>Event:</strong></td><td style="padding: 8px 0;">${booking.eventType}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Date:</strong></td><td style="padding: 8px 0;">${booking.date}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Time:</strong></td><td style="padding: 8px 0;">${booking.startTime} - ${booking.endTime}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Guests:</strong></td><td style="padding: 8px 0;">${booking.guestCount}</td></tr>
              ${booking.totalAmount ? `<tr><td style="padding: 8px 0;"><strong>Total:</strong></td><td style="padding: 8px 0;">£${booking.totalAmount}</td></tr>` : ''}
            </table>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">For any queries, contact us:</p>
          <p style="color: #667eea; font-size: 16px; margin: 5px 0;">📞 +44 7391 222884</p>
          <p style="color: #667eea; font-size: 16px; margin: 5px 0;">📧 info@luxevenue.co.uk</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center; color: #999; font-size: 14px;">
            <p>LUXE VENUE | 86 Leopold Street, Birmingham B12 0UD</p>
          </div>
        </div>
      </div>
    `
    
    await sendEmail({
      to: booking.clientEmail,
      subject: `Booking Confirmation - ${booking.eventType} - LUXE VENUE`,
      html: emailHtml
    })
    
    return { success: true }
  } catch (error) {
    console.error('Error sending confirmation:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

export async function generateBookingPDF(bookingId: string) {
  try {
    await connectDB()
    
    const booking = await Booking.findById(bookingId)
    
    if (!booking) {
      return { success: false, error: 'Booking not found' }
    }
    
    // For now, return booking data - in production you'd generate actual PDF
    const pdfData = {
      bookingId: booking._id.toString(),
      clientName: booking.clientName,
      clientEmail: booking.clientEmail,
      clientPhone: booking.clientPhone,
      eventType: booking.eventType,
      date: booking.date,
      time: `${booking.startTime} - ${booking.endTime}`,
      guests: booking.guestCount,
      totalAmount: booking.totalAmount,
      paidAmount: booking.paidAmount,
      balance: (booking.totalAmount || 0) - (booking.paidAmount || 0),
      status: booking.status
    }
    
    return { success: true, pdfData }
  } catch (error) {
    console.error('Error generating PDF:', error)
    return { success: false, error: 'Failed to generate PDF' }
  }
}
