import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

// DataForSEO credentials stored in environment variables
const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD
const DATAFORSEO_API = 'https://api.dataforseo.com/v3'

export async function POST(request: NextRequest) {
  try {
    // Open access - no authentication required

    // Check if credentials are configured
    if (!DATAFORSEO_LOGIN || !DATAFORSEO_PASSWORD) {
      console.error('DataForSEO credentials not configured in environment variables')
      return NextResponse.json(
        { success: false, error: 'API credentials not configured' },
        { status: 500 }
      )
    }

    // Create base64 encoded credentials
    const authString = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64')
    
    const { keywords, location } = await request.json()

    // DataForSEO Keywords Data endpoint
    const response = await axios.post(
      `${DATAFORSEO_API}/dataforseo_labs/google/keyword_suggestions/live`,
      [{
        keyword: keywords[0],
        location_code: 2826, // United Kingdom
        language_code: 'en',
        include_serp_info: true,
        limit: 20
      }],
      {
        headers: {
          'Authorization': `Basic ${authString}`,
          'Content-Type': 'application/json'
        }
      }
    )

    return NextResponse.json({
      success: true,
      data: response.data
    })
  } catch (error: any) {
    console.error('DataForSEO API Error:', error.response?.data || error.message)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
