/**
 * DataForSEO Keyword Research Helper
 * Fetches city + service specific keywords dynamically
 */

interface KeywordData {
  keyword: string
  search_volume: number
  competition: number
}

interface DataForSEOResponse {
  keywords: string[]
  questions: string[]
  relatedTerms: string[]
}

const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || ''
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || ''

export async function fetchKeywords(
  service: string,
  city: string,
  location: string = 'United Kingdom'
): Promise<DataForSEOResponse> {
  // In production, this would call DataForSEO API
  // For now, return curated keywords based on service + city
  
  const baseKeyword = `${service} ${city}`.toLowerCase()
  
  // Generate LSI keywords dynamically
  const keywords = generateLSIKeywords(service, city)
  const questions = generateQuestions(service, city)
  const relatedTerms = generateRelatedTerms(service, city)
  
  return {
    keywords,
    questions,
    relatedTerms
  }
}

function generateLSIKeywords(service: string, city: string): string[] {
  const serviceLower = service.toLowerCase()
  const cityLower = city.toLowerCase()
  
  const baseTerms = [
    `${serviceLower} ${cityLower}`,
    `${serviceLower} near me ${cityLower}`,
    `best ${serviceLower} ${cityLower}`,
    `affordable ${serviceLower} ${cityLower}`,
    `cheap ${serviceLower} ${cityLower}`,
    `${serviceLower} hire ${cityLower}`,
    `${serviceLower} booking ${cityLower}`,
    `${serviceLower} with catering ${cityLower}`,
    `halal ${serviceLower} ${cityLower}`,
    `asian ${serviceLower} ${cityLower}`,
    `muslim ${serviceLower} ${cityLower}`,
    `${serviceLower} west midlands`,
    `${serviceLower} packages ${cityLower}`,
    `${serviceLower} prices ${cityLower}`,
    `${serviceLower} capacity ${cityLower}`,
  ]
  
  // Add service-specific variations
  if (serviceLower.includes('wedding')) {
    baseTerms.push(
      `nikah ${cityLower}`,
      `walima ${cityLower}`,
      `asian wedding ${cityLower}`,
      `pakistani wedding ${cityLower}`,
      `indian wedding ${cityLower}`,
      `small wedding ${cityLower}`,
      `intimate wedding ${cityLower}`
    )
  }
  
  if (serviceLower.includes('catering')) {
    baseTerms.push(
      `halal food ${cityLower}`,
      `pakistani catering ${cityLower}`,
      `indian catering ${cityLower}`,
      `biryani catering ${cityLower}`,
      `curry catering ${cityLower}`,
      `buffet catering ${cityLower}`
    )
  }
  
  return baseTerms
}

function generateQuestions(service: string, city: string): string[] {
  const serviceLower = service.toLowerCase()
  const cityLower = city.toLowerCase()
  
  return [
    `How much does ${serviceLower} cost in ${cityLower}?`,
    `Where can I find ${serviceLower} in ${cityLower}?`,
    `What is the best ${serviceLower} in ${cityLower}?`,
    `How to book ${serviceLower} in ${cityLower}?`,
    `What areas do you cover for ${serviceLower}?`,
    `Do you offer halal catering with ${serviceLower}?`,
    `What is the capacity for ${serviceLower}?`,
    `Is parking available at ${serviceLower}?`,
  ]
}

function generateRelatedTerms(service: string, city: string): string[] {
  const westMidlandsCities = [
    'Birmingham', 'Wolverhampton', 'Dudley', 'Solihull', 'Walsall',
    'West Bromwich', 'Sutton Coldfield', 'Stourbridge', 'Halesowen'
  ]
  
  return westMidlandsCities
    .filter(c => c.toLowerCase() !== city.toLowerCase())
    .map(c => `${service} ${c}`)
    .slice(0, 5)
}

export function generateMetaTags(
  service: string,
  city: string,
  keywords: string[]
) {
  const title = `${service} ${city} | Affordable Venue Hire | LUXE VENUE`
  const description = `Premium ${service.toLowerCase()} in ${city}. Capacity 20-70 guests. Halal catering available. ${keywords.slice(0, 3).join(', ')}. Book your viewing today.`
  
  return {
    title: title.slice(0, 60),
    description: description.slice(0, 160),
    keywords: keywords.slice(0, 10).join(', ')
  }
}
