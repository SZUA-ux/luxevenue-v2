import axios from 'axios'

const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || ''
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || ''
const DATAFORSEO_API = 'https://api.dataforseo.com/v3'

const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64')

export interface KeywordMetrics {
  keyword: string
  location_code: number
  language_code: string
  search_volume: number
  competition: number
  competition_level: string
  cpc: number
  low_top_of_page_bid: number
  high_top_of_page_bid: number
  monthly_searches: Array<{ year: number; month: number; search_volume: number }>
}

export interface KeywordIdea {
  keyword: string
  search_volume: number
  competition: number
  cpc: number
}

/**
 * Get keyword metrics for a list of keywords
 */
export async function getKeywordMetrics(keywords: string[], locationCode = 2826): Promise<KeywordMetrics[]> {
  try {
    const response = await axios.post(
      `${DATAFORSEO_API}/keywords_data/google_ads/search_volume/live`,
      [{
        keywords,
        location_code: locationCode, // 2826 = Birmingham, UK
        language_code: 'en',
        sort_by: 'search_volume',
      }],
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (response.data.tasks && response.data.tasks[0] && response.data.tasks[0].result) {
      return response.data.tasks[0].result
    }

    return []
  } catch (error: any) {
    console.error('DataForSEO API Error:', error.response?.data || error.message)
    throw error
  }
}

/**
 * Get keyword suggestions/ideas
 */
export async function getKeywordIdeas(seedKeyword: string, locationCode = 2826): Promise<KeywordIdea[]> {
  try {
    const response = await axios.post(
      `${DATAFORSEO_API}/dataforseo_labs/google/keyword_suggestions/live`,
      [{
        keyword: seedKeyword,
        location_code: locationCode,
        language_code: 'en',
        include_serp_info: false,
        limit: 100,
      }],
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (response.data.tasks && response.data.tasks[0] && response.data.tasks[0].result) {
      return response.data.tasks[0].result.map((item: any) => ({
        keyword: item.keyword,
        search_volume: item.search_volume,
        competition: item.competition,
        cpc: item.cpc,
      }))
    }

    return []
  } catch (error: any) {
    console.error('DataForSEO Keyword Ideas Error:', error.response?.data || error.message)
    throw error
  }
}

/**
 * Get keyword difficulty
 */
export async function getKeywordDifficulty(keywords: string[], locationCode = 2826) {
  try {
    const response = await axios.post(
      `${DATAFORSEO_API}/dataforseo_labs/google/keyword_ideas/live`,
      [{
        keywords,
        location_code: locationCode,
        language_code: 'en',
        include_seed_keyword: true,
        include_serp_info: true,
      }],
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return response.data
  } catch (error: any) {
    console.error('DataForSEO Difficulty Error:', error.response?.data || error.message)
    throw error
  }
}

/**
 * Batch process keywords in chunks
 */
export async function batchProcessKeywords(
  keywords: string[],
  chunkSize = 100
): Promise<KeywordMetrics[]> {
  const chunks: string[][] = []
  
  // Split into chunks
  for (let i = 0; i < keywords.length; i += chunkSize) {
    chunks.push(keywords.slice(i, i + chunkSize))
  }

  const results: KeywordMetrics[] = []

  // Process each chunk with delay to avoid rate limiting
  for (const chunk of chunks) {
    try {
      const metrics = await getKeywordMetrics(chunk)
      results.push(...metrics)
      
      // Wait 1 second between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error('Error processing chunk:', error)
    }
  }

  return results
}

/**
 * Sort keywords by search volume
 */
export function sortBySearchVolume(keywords: KeywordMetrics[]): {
  high: KeywordMetrics[]
  medium: KeywordMetrics[]
  low: KeywordMetrics[]
} {
  return {
    high: keywords.filter(k => k.search_volume >= 1000).sort((a, b) => b.search_volume - a.search_volume),
    medium: keywords.filter(k => k.search_volume >= 100 && k.search_volume < 1000).sort((a, b) => b.search_volume - a.search_volume),
    low: keywords.filter(k => k.search_volume < 100 && k.search_volume > 0).sort((a, b) => b.search_volume - a.search_volume),
  }
}

/**
 * Sort keywords by competition
 */
export function sortByCompetition(keywords: KeywordMetrics[]): {
  low: KeywordMetrics[]
  medium: KeywordMetrics[]
  high: KeywordMetrics[]
} {
  return {
    low: keywords.filter(k => k.competition < 0.33),
    medium: keywords.filter(k => k.competition >= 0.33 && k.competition < 0.66),
    high: keywords.filter(k => k.competition >= 0.66),
  }
}
