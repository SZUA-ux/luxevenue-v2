'use server'

export async function downloadBookingPDF(bookingId: string) {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8001'
    const response = await fetch(`${backendUrl}/api/bookings/${bookingId}/pdf`, {
      method: 'POST',
    })

    if (!response.ok) {
      return { success: false, error: 'Failed to generate PDF' }
    }

    const blob = await response.blob()
    return { success: true, blob }
  } catch (error) {
    console.error('Error downloading PDF:', error)
    return { success: false, error: 'Failed to download PDF' }
  }
}

export async function sendBookingEmail(bookingId: string, emailType: 'confirmation' | 'reminder' = 'confirmation') {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8001'
    const response = await fetch(`${backendUrl}/api/bookings/${bookingId}/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: emailType }),
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

export async function printBooking(bookingId: string) {
  // This will be handled on client side with window.print()
  return { success: true }
}
