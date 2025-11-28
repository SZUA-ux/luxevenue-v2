/**
 * Comprehensive Keyword Research Generator for LUXE VENUE
 * 
 * This script generates 5000+ keywords using DataForSEO API
 * and creates a detailed report with high/medium/low ranking keywords
 */

import { COMPLETE_KEYWORD_LIST, CATEGORIZED_KEYWORDS, LANDING_PAGE_SUGGESTIONS } from '../lib/seo/keyword-research'
import { batchProcessKeywords, sortBySearchVolume, sortByCompetition, KeywordMetrics } from '../lib/seo/dataforseo-client'
import * as fs from 'fs'
import * as path from 'path'

interface KeywordReport {
  metadata: {
    generatedAt: string
    totalKeywords: number
    keywordsWithData: number
    locationTargeted: string[]
  }
  highVolume: KeywordMetrics[]
  mediumVolume: KeywordMetrics[]
  lowVolume: KeywordMetrics[]
  lowCompetition: KeywordMetrics[]
  mediumCompetition: KeywordMetrics[]
  highCompetition: KeywordMetrics[]
  topCommercialKeywords: KeywordMetrics[]
  topLocalKeywords: KeywordMetrics[]
  landingPageSuggestions: typeof LANDING_PAGE_SUGGESTIONS
  rawData: KeywordMetrics[]
}

async function generateKeywordResearch(): Promise<KeywordReport> {
  console.log('🚀 Starting Comprehensive Keyword Research for LUXE VENUE')
  console.log(`📊 Total keywords to analyze: ${COMPLETE_KEYWORD_LIST.length}`)
  
  // Step 1: Get metrics for all keywords
  console.log('\n⏳ Fetching keyword metrics from DataForSEO...')
  console.log('⚠️  This may take several minutes due to API rate limiting...')
  
  const keywordMetrics = await batchProcessKeywords(COMPLETE_KEYWORD_LIST, 100)
  
  console.log(`✅ Retrieved data for ${keywordMetrics.length} keywords`)
  
  // Step 2: Sort by search volume
  console.log('\n📈 Sorting by search volume...')
  const volumeSorted = sortBySearchVolume(keywordMetrics)
  
  console.log(`  - High volume (1000+): ${volumeSorted.high.length} keywords`)
  console.log(`  - Medium volume (100-999): ${volumeSorted.medium.length} keywords`)
  console.log(`  - Low volume (<100): ${volumeSorted.low.length} keywords`)
  
  // Step 3: Sort by competition
  console.log('\n🎯 Sorting by competition...')
  const competitionSorted = sortByCompetition(keywordMetrics)
  
  console.log(`  - Low competition: ${competitionSorted.low.length} keywords`)
  console.log(`  - Medium competition: ${competitionSorted.medium.length} keywords`)
  console.log(`  - High competition: ${competitionSorted.high.length} keywords`)
  
  // Step 4: Identify commercial keywords (high CPC)
  console.log('\n💰 Identifying commercial keywords...')
  const commercialKeywords = keywordMetrics
    .filter(k => k.cpc > 0.5)
    .sort((a, b) => b.cpc - a.cpc)
    .slice(0, 100)
  
  console.log(`  - Found ${commercialKeywords.length} high-value commercial keywords`)
  
  // Step 5: Identify local keywords
  console.log('\n📍 Identifying local keywords...')
  const localKeywords = keywordMetrics
    .filter(k => 
      k.keyword.includes('birmingham') || 
      k.keyword.includes('near me') || 
      k.keyword.includes('local')
    )
    .sort((a, b) => b.search_volume - a.search_volume)
    .slice(0, 100)
  
  console.log(`  - Found ${localKeywords.length} high-priority local keywords`)
  
  // Step 6: Create report
  const report: KeywordReport = {
    metadata: {
      generatedAt: new Date().toISOString(),
      totalKeywords: COMPLETE_KEYWORD_LIST.length,
      keywordsWithData: keywordMetrics.length,
      locationTargeted: ['Birmingham', 'Solihull', 'Dudley', 'Walsall', 'Wolverhampton', 'West Midlands'],
    },
    highVolume: volumeSorted.high,
    mediumVolume: volumeSorted.medium,
    lowVolume: volumeSorted.low,
    lowCompetition: competitionSorted.low,
    mediumCompetition: competitionSorted.medium,
    highCompetition: competitionSorted.high,
    topCommercialKeywords: commercialKeywords,
    topLocalKeywords: localKeywords,
    landingPageSuggestions: LANDING_PAGE_SUGGESTIONS,
    rawData: keywordMetrics,
  }
  
  return report
}

async function saveReport(report: KeywordReport) {
  const reportsDir = path.join(__dirname, '../reports')
  
  // Create reports directory if it doesn't exist
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true })
  }
  
  // Save full JSON report
  const jsonPath = path.join(reportsDir, 'keyword-research-full.json')
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2))
  console.log(`\n✅ Full report saved to: ${jsonPath}`)
  
  // Save CSV for easy import
  const csvPath = path.join(reportsDir, 'keyword-research.csv')
  const csvContent = [
    'Keyword,Search Volume,Competition,Competition Level,CPC,Category',
    ...report.rawData.map(k => 
      `"${k.keyword}",${k.search_volume},${k.competition},"${k.competition_level}",${k.cpc},`
    )
  ].join('\n')
  fs.writeFileSync(csvPath, csvContent)
  console.log(`✅ CSV report saved to: ${csvPath}`)
  
  // Save markdown summary
  const mdPath = path.join(reportsDir, 'keyword-research-summary.md')
  const mdContent = generateMarkdownSummary(report)
  fs.writeFileSync(mdPath, mdContent)
  console.log(`✅ Summary saved to: ${mdPath}`)
  
  // Save top opportunities (quick reference)
  const opportunitiesPath = path.join(reportsDir, 'top-opportunities.json')
  const opportunities = {
    quickWins: report.lowCompetition
      .filter(k => k.search_volume >= 100)
      .slice(0, 50)
      .map(k => ({
        keyword: k.keyword,
        volume: k.search_volume,
        competition: k.competition,
        cpc: k.cpc,
      })),
    highVolumeLowComp: report.highVolume
      .filter(k => k.competition < 0.5)
      .slice(0, 30)
      .map(k => ({
        keyword: k.keyword,
        volume: k.search_volume,
        competition: k.competition,
        cpc: k.cpc,
      })),
    commercialGems: report.topCommercialKeywords.slice(0, 30).map(k => ({
      keyword: k.keyword,
      volume: k.search_volume,
      competition: k.competition,
      cpc: k.cpc,
    })),
  }
  fs.writeFileSync(opportunitiesPath, JSON.stringify(opportunities, null, 2))
  console.log(`✅ Top opportunities saved to: ${opportunitiesPath}`)
}

function generateMarkdownSummary(report: KeywordReport): string {
  return `# LUXE VENUE - Comprehensive Keyword Research Report

**Generated:** ${new Date(report.metadata.generatedAt).toLocaleString()}  
**Total Keywords Analyzed:** ${report.metadata.totalKeywords}  
**Keywords with Data:** ${report.metadata.keywordsWithData}  
**Locations Targeted:** ${report.metadata.locationTargeted.join(', ')}

---

## 📊 Executive Summary

### Search Volume Distribution
- **High Volume (1000+):** ${report.highVolume.length} keywords
- **Medium Volume (100-999):** ${report.mediumVolume.length} keywords
- **Low Volume (<100):** ${report.lowVolume.length} keywords

### Competition Distribution
- **Low Competition:** ${report.lowCompetition.length} keywords (Easy to rank)
- **Medium Competition:** ${report.mediumCompetition.length} keywords
- **High Competition:** ${report.highCompetition.length} keywords (Difficult to rank)

---

## 🎯 Top 20 High-Volume Keywords

| Keyword | Volume | Competition | CPC |
|---------|--------|-------------|-----|
${report.highVolume.slice(0, 20).map(k => 
  `| ${k.keyword} | ${k.search_volume} | ${k.competition_level} | £${k.cpc.toFixed(2)} |`
).join('\n')}

---

## ⭐ Top 30 Low-Competition Keywords (Quick Wins)

| Keyword | Volume | Competition | CPC |
|---------|--------|-------------|-----|
${report.lowCompetition.filter(k => k.search_volume >= 50).slice(0, 30).map(k => 
  `| ${k.keyword} | ${k.search_volume} | ${k.competition_level} | £${k.cpc.toFixed(2)} |`
).join('\n')}

---

## 💰 Top 20 Commercial Keywords (High CPC)

| Keyword | Volume | CPC | Competition |
|---------|--------|-----|-------------|
${report.topCommercialKeywords.slice(0, 20).map(k => 
  `| ${k.keyword} | ${k.search_volume} | £${k.cpc.toFixed(2)} | ${k.competition_level} |`
).join('\n')}

---

## 📍 Top 20 Local Keywords

| Keyword | Volume | Competition | CPC |
|---------|--------|-------------|-----|
${report.topLocalKeywords.slice(0, 20).map(k => 
  `| ${k.keyword} | ${k.search_volume} | ${k.competition_level} | £${k.cpc.toFixed(2)} |`
).join('\n')}

---

## 🚀 Recommended Landing Pages (25+ Pages)

${report.landingPageSuggestions.map((page, i) => `
### ${i + 1}. ${page.title}
- **URL:** \`${page.url}\`
- **Priority:** ${page.priority.toUpperCase()}
- **Target Keywords:**
${page.targetKeywords.map(k => `  - ${k}`).join('\n')}
`).join('\n')}

---

## 📈 Implementation Strategy

### Phase 1: Quick Wins (Weeks 1-4)
Target low-competition, medium-volume keywords:
${report.lowCompetition.filter(k => k.search_volume >= 100 && k.search_volume < 500).slice(0, 10).map(k => `- ${k.keyword} (Vol: ${k.search_volume})`).join('\n')}

### Phase 2: High-Impact (Weeks 5-12)
Target high-volume, medium-competition keywords:
${report.highVolume.filter(k => k.competition >= 0.3 && k.competition <= 0.6).slice(0, 10).map(k => `- ${k.keyword} (Vol: ${k.search_volume})`).join('\n')}

### Phase 3: Authority Building (Months 4-6)
Target high-competition, high-volume keywords:
${report.highVolume.filter(k => k.competition > 0.6).slice(0, 10).map(k => `- ${k.keyword} (Vol: ${k.search_volume})`).join('\n')}

---

## 💡 Key Insights

1. **Birmingham Focus:** Local Birmingham keywords have strong search volume with manageable competition
2. **Nikah/Muslim Wedding:** Niche opportunity with lower competition
3. **Small/Intimate Weddings:** Growing trend with good search volume
4. **Affordable/Budget:** High commercial intent keywords
5. **Near Me Queries:** Strong local intent, prioritize for mobile SEO

---

**Next Steps:**
1. Create 25+ landing pages targeting keyword clusters
2. Implement local SEO schema markup
3. Build location-specific content
4. Create comparison pages (vs competitors)
5. Develop blog content for informational keywords

---

*Report generated automatically using DataForSEO API*
`
}

// Run the script
async function main() {
  try {
    console.log('═══════════════════════════════════════════════════════')
    console.log('  LUXE VENUE - Keyword Research Generator')
    console.log('  Generating 5000+ keywords with DataForSEO')
    console.log('═══════════════════════════════════════════════════════\n')
    
    const report = await generateKeywordResearch()
    await saveReport(report)
    
    console.log('\n═══════════════════════════════════════════════════════')
    console.log('  ✅ Keyword Research Complete!')
    console.log('═══════════════════════════════════════════════════════')
    console.log(`\n📊 Summary:`)
    console.log(`  - Total keywords: ${report.rawData.length}`)
    console.log(`  - High volume: ${report.highVolume.length}`)
    console.log(`  - Low competition: ${report.lowCompetition.length}`)
    console.log(`  - Quick wins: ${report.lowCompetition.filter(k => k.search_volume >= 100).length}`)
    console.log(`\n📁 Reports saved in: /app/frontend/reports/`)
    
  } catch (error) {
    console.error('\n❌ Error generating keyword research:', error)
    process.exit(1)
  }
}

main()
