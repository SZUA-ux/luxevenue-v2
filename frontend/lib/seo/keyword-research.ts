interface KeywordData {
  keyword: string
  search_volume: number
  competition: string
  cpc: number
  difficulty: number
  category: string
}

// Main seed keywords
const SEED_KEYWORDS = [
  // Wedding related
  'wedding venue',
  'small wedding venue',
  'affordable wedding venue',
  'wedding hall',
  'nikah venue',
  'asian wedding venue',
  'muslim wedding venue',
  'intimate wedding venue',
  'micro wedding venue',
  
  // Event types
  'birthday party venue',
  'anniversary party venue',
  'engagement party venue',
  'iftar party venue',
  'dinner party venue',
  'baby shower venue',
  'gender reveal venue',
  'mehndi venue',
  
  // Services
  'venue hire',
  'hall hire',
  'event space',
  'party venue',
  'function room',
  'event hall',
  'celebration venue',
  
  // Additional
  'non alcoholic venue',
  'halal venue',
  'dry hire venue',
  'small event space',
]

// West Midlands locations
const LOCATIONS = [
  // Primary
  'birmingham',
  'solihull',
  'dudley',
  'walsall',
  'wolverhampton',
  'west bromwich',
  'sutton coldfield',
  'sandwell',
  
  // Secondary
  'coventry',
  'halesowen',
  'stourbridge',
  'smethwick',
  'tipton',
  'rowley regis',
  'oldbury',
  'aldridge',
  'bloxwich',
  'bilston',
  'wednesbury',
  'willenhall',
  'darlaston',
  
  // Tertiary (nearby)
  'redditch',
  'tamworth',
  'cannock',
  'lichfield',
  'bromsgrove',
  'kidderminster',
  'telford',
  'burton upon trent',
]

// Location modifiers
const LOCATION_MODIFIERS = [
  '{location}',
  'near {location}',
  '{location} area',
  '{location} city centre',
  '{location} near me',
  'in {location}',
  'local {location}',
  '{location} west midlands',
]

// Generate all keyword combinations
export function generateKeywordCombinations(): string[] {
  const keywords: string[] = []
  
  // 1. Add "near me" and "local" variants
  SEED_KEYWORDS.forEach(keyword => {
    keywords.push(keyword)
    keywords.push(`${keyword} near me`)
    keywords.push(`local ${keyword}`)
    keywords.push(`${keyword} nearby`)
  })
  
  // 2. Add location-based variations
  SEED_KEYWORDS.forEach(keyword => {
    LOCATIONS.forEach(location => {
      LOCATION_MODIFIERS.forEach(modifier => {
        const locationPhrase = modifier.replace('{location}', location)
        keywords.push(`${keyword} ${locationPhrase}`)
      })
    })
  })
  
  // 3. Add question-based keywords
  const questionPrefixes = ['best', 'top', 'cheap', 'affordable', 'small', 'beautiful']
  SEED_KEYWORDS.forEach(keyword => {
    questionPrefixes.forEach(prefix => {
      keywords.push(`${prefix} ${keyword}`)
      LOCATIONS.forEach(location => {
        keywords.push(`${prefix} ${keyword} ${location}`)
        keywords.push(`${prefix} ${keyword} near ${location}`)
      })
    })
  })
  
  // 4. Add long-tail variations
  const longTailModifiers = [
    'for 50 guests',
    'for 70 guests',
    'for small wedding',
    'for intimate wedding',
    'with catering',
    'with parking',
    'under 1000',
    'under 2000',
    'on a budget',
    'cheap and beautiful',
  ]
  
  SEED_KEYWORDS.forEach(keyword => {
    longTailModifiers.forEach(modifier => {
      keywords.push(`${keyword} ${modifier}`)
      LOCATIONS.slice(0, 8).forEach(location => {
        keywords.push(`${keyword} in ${location} ${modifier}`)
      })
    })
  })
  
  return [...new Set(keywords)] // Remove duplicates
}

// Categorize keywords by intent and difficulty
export function categorizeKeywords(keywords: string[]): {
  highVolume: string[]
  mediumVolume: string[]
  lowVolume: string[]
  commercial: string[]
  informational: string[]
  local: string[]
} {
  const categorized = {
    highVolume: [] as string[],
    mediumVolume: [] as string[],
    lowVolume: [] as string[],
    commercial: [] as string[],
    informational: [] as string[],
    local: [] as string[],
  }
  
  keywords.forEach(keyword => {
    const lower = keyword.toLowerCase()
    
    // Local intent
    if (lower.includes('near me') || lower.includes('local') || lower.includes('nearby') || 
        LOCATIONS.some(loc => lower.includes(loc))) {
      categorized.local.push(keyword)
    }
    
    // Commercial intent
    if (lower.includes('cheap') || lower.includes('affordable') || lower.includes('best') || 
        lower.includes('top') || lower.includes('hire') || lower.includes('book')) {
      categorized.commercial.push(keyword)
    }
    
    // Informational
    if (lower.includes('what') || lower.includes('how') || lower.includes('why') || 
        lower.includes('guide') || lower.includes('tips')) {
      categorized.informational.push(keyword)
    }
    
    // Volume estimation based on keyword length and specificity
    const wordCount = keyword.split(' ').length
    if (wordCount <= 3 && !lower.includes(LOCATIONS.slice(8).join('|'))) {
      categorized.highVolume.push(keyword)
    } else if (wordCount <= 5) {
      categorized.mediumVolume.push(keyword)
    } else {
      categorized.lowVolume.push(keyword)
    }
  })
  
  return categorized
}

// Suggested landing pages structure
export function generateLandingPageSuggestions(): Array<{
  title: string
  url: string
  targetKeywords: string[]
  priority: 'high' | 'medium' | 'low'
}> {
  return [
    // High priority pages
    {
      title: 'Wedding Venue Birmingham',
      url: '/wedding-venue-birmingham',
      targetKeywords: [
        'wedding venue birmingham',
        'small wedding venue birmingham',
        'affordable wedding venue birmingham',
        'wedding hall birmingham',
        'intimate wedding venue birmingham',
      ],
      priority: 'high',
    },
    {
      title: 'Nikah Venue Birmingham',
      url: '/nikah-venue-birmingham',
      targetKeywords: [
        'nikah venue birmingham',
        'muslim wedding venue birmingham',
        'islamic wedding venue birmingham',
        'halal wedding venue birmingham',
      ],
      priority: 'high',
    },
    {
      title: 'Birthday Party Venue Birmingham',
      url: '/birthday-party-venue-birmingham',
      targetKeywords: [
        'birthday party venue birmingham',
        'birthday venue birmingham',
        'party venue birmingham',
        'birthday hall birmingham',
      ],
      priority: 'high',
    },
    
    // Medium priority - Major locations
    {
      title: 'Wedding Venue Solihull',
      url: '/wedding-venue-solihull',
      targetKeywords: [
        'wedding venue solihull',
        'small wedding venue solihull',
        'wedding hall solihull',
      ],
      priority: 'medium',
    },
    {
      title: 'Wedding Venue Dudley',
      url: '/wedding-venue-dudley',
      targetKeywords: [
        'wedding venue dudley',
        'wedding hall dudley',
        'small wedding venue dudley',
      ],
      priority: 'medium',
    },
    {
      title: 'Wedding Venue Walsall',
      url: '/wedding-venue-walsall',
      targetKeywords: [
        'wedding venue walsall',
        'wedding hall walsall',
      ],
      priority: 'medium',
    },
    
    // Event-specific pages
    {
      title: 'Iftar Party Venue Birmingham',
      url: '/iftar-party-venue-birmingham',
      targetKeywords: [
        'iftar party venue birmingham',
        'ramadan iftar venue birmingham',
        'iftar event space birmingham',
      ],
      priority: 'medium',
    },
    {
      title: 'Anniversary Party Venue Birmingham',
      url: '/anniversary-party-venue-birmingham',
      targetKeywords: [
        'anniversary party venue birmingham',
        'anniversary celebration venue birmingham',
      ],
      priority: 'medium',
    },
    {
      title: 'Engagement Party Venue Birmingham',
      url: '/engagement-party-venue-birmingham',
      targetKeywords: [
        'engagement party venue birmingham',
        'engagement venue birmingham',
      ],
      priority: 'medium',
    },
    
    // Niche/Long-tail pages
    {
      title: 'Small Wedding Venue Near Me Birmingham',
      url: '/small-wedding-venue-near-me-birmingham',
      targetKeywords: [
        'small wedding venue near me',
        'small wedding venue birmingham near me',
        'intimate wedding venue near me birmingham',
      ],
      priority: 'low',
    },
    {
      title: 'Affordable Wedding Venue Birmingham',
      url: '/affordable-wedding-venue-birmingham',
      targetKeywords: [
        'affordable wedding venue birmingham',
        'cheap wedding venue birmingham',
        'budget wedding venue birmingham',
        'wedding venue birmingham under 1000',
      ],
      priority: 'medium',
    },
    {
      title: 'Dinner Party Venue Birmingham',
      url: '/dinner-party-venue-birmingham',
      targetKeywords: [
        'dinner party venue birmingham',
        'private dining venue birmingham',
      ],
      priority: 'low',
    },
    
    // Additional location-specific
    {
      title: 'Event Venue Wolverhampton',
      url: '/event-venue-wolverhampton',
      targetKeywords: [
        'event venue wolverhampton',
        'party venue wolverhampton',
        'wedding venue wolverhampton',
      ],
      priority: 'medium',
    },
    {
      title: 'Event Venue West Bromwich',
      url: '/event-venue-west-bromwich',
      targetKeywords: [
        'event venue west bromwich',
        'party venue west bromwich',
      ],
      priority: 'low',
    },
    {
      title: 'Event Venue Sutton Coldfield',
      url: '/event-venue-sutton-coldfield',
      targetKeywords: [
        'event venue sutton coldfield',
        'wedding venue sutton coldfield',
      ],
      priority: 'medium',
    },
  ]
}

// Export complete keyword list
export const COMPLETE_KEYWORD_LIST = generateKeywordCombinations()
export const CATEGORIZED_KEYWORDS = categorizeKeywords(COMPLETE_KEYWORD_LIST)
export const LANDING_PAGE_SUGGESTIONS = generateLandingPageSuggestions()

// Stats
console.log(`Total keywords generated: ${COMPLETE_KEYWORD_LIST.length}`)
console.log(`High volume keywords: ${CATEGORIZED_KEYWORDS.highVolume.length}`)
console.log(`Medium volume keywords: ${CATEGORIZED_KEYWORDS.mediumVolume.length}`)
console.log(`Low volume keywords: ${CATEGORIZED_KEYWORDS.lowVolume.length}`)
console.log(`Local keywords: ${CATEGORIZED_KEYWORDS.local.length}`)
console.log(`Commercial keywords: ${CATEGORIZED_KEYWORDS.commercial.length}`)
