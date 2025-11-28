import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8001'

    // Forward request to FastAPI backend
    const res = await fetch(`${backendUrl}/api/bookings/${params.id}/pdf`, {
      method: 'POST',
    })

    if (!res.ok) {
      console.error(`Backend PDF generation failed: ${res.status}`)
      return NextResponse.json(
        { error: 'Failed to generate PDF' },
        { status: 500 }
      )
    }

    // Get the PDF as ArrayBuffer
    const arrayBuffer = await res.arrayBuffer()

    // Get the Content-Disposition header from backend (includes client name)
    const contentDisposition = res.headers.get('content-disposition') || `attachment; filename="booking_${params.id}.pdf"`

    // Return PDF with proper headers from backend
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': contentDisposition,
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
