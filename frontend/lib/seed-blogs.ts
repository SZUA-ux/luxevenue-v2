import 'dotenv/config'
import mongoose from 'mongoose'
import { connectDB } from './db/connect.js'
import { BlogPost } from './models/BlogPost.js'
import { v4 as uuidv4 } from 'uuid'

const blogPosts = [
  {
    title: 'Complete Event Planning Services at LUXE VENUE Birmingham',
    slug: 'complete-event-planning-services-luxe-venue',
    excerpt: 'Full-service event planning at LUXE VENUE Birmingham. Complimentary £400 coordination, customized halal menus, décor, DJ, and photography. Affordable packages from £3k for intimate weddings up to 70 guests.',
    content: `# Complete Event Planning Services at LUXE VENUE Birmingham

Planning an intimate celebration in Birmingham? LUXE VENUE offers comprehensive event planning services for weddings, Nikah ceremonies, and special occasions up to 70 guests.

## What's Included

### Complimentary Event Planner (Worth £400)
Every booking includes a dedicated event coordinator who handles:
- Pre-event consultations and timeline creation
- Vendor coordination (DJ, photography, videography)
- Setup and breakdown management
- On-the-day supervision

### Venue & Facilities
- Elegant event space for 20-70 guests
- Premium tables, designer chairs, fine cutlery
- Professional-grade sound and lighting systems
- Customizable layouts and décor

### Halal Catering Options
Our award-winning chefs create authentic Pakistani, Indian, and fusion menus with 100% halal ingredients. All dietary requirements accommodated.

### Package Options
- **Bronze Package (£3,000)**: Perfect for intimate gatherings
- **Silver Package (£5,000)**: Enhanced décor and menu options
- **Gold Package (£8,000)**: Premium all-inclusive experience

## Why Choose LUXE VENUE?

Located in Birmingham city centre (B12 0UD), we're easily accessible from Dudley, Wolverhampton, Walsall, and across the West Midlands. Our alcohol-free, family-friendly venue welcomes all cultures and faiths.

**Book Your Free Consultation**: Contact us today to discuss your vision.`,
    author: 'LUXE VENUE Team',
    category: 'Event Planning',
    tags: ['event planning', 'Birmingham venue', 'wedding packages', 'halal catering', 'small wedding venue'],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c286?w=1200&h=630&fit=crop',
      alt: 'Event planning services at LUXE VENUE Birmingham',
      width: 1200,
      height: 630,
    },
    metaTitle: 'Complete Event Planning Services Birmingham | LUXE VENUE Packages',
    metaDescription: 'Full-service event planning at LUXE VENUE Birmingham. Complimentary £400 coordinator, halal catering, packages from £3k. Small wedding venue up to 70 guests.',
    keywords: ['event planning Birmingham', 'wedding packages Birmingham', 'halal wedding venue', 'small wedding venue Birmingham', 'affordable wedding packages'],
    readTime: '5 min read',
  },
  {
    title: 'Alcohol-Free Celebrations: LUXE VENUE\'s Family-Friendly Policy',
    slug: 'alcohol-free-celebrations-no-alcohol-policy',
    excerpt: 'Understanding LUXE VENUE\'s alcohol-free policy. Perfect for Nikah ceremonies, Muslim weddings, and conservative families in Birmingham. Halal-compliant venue with mocktail alternatives and family-friendly environment.',
    content: `# Alcohol-Free Celebrations at LUXE VENUE Birmingham

LUXE VENUE is proud to be Birmingham's premier alcohol-free event venue, providing a safe, family-friendly environment for celebrations of all cultures and faiths.

## Why We're Alcohol-Free

### Family-Friendly Environment
Our strict no-alcohol policy creates a welcoming atmosphere for families with children, elderly guests, and those who prefer alcohol-free celebrations.

### Cultural & Religious Sensitivity
Perfect for:
- Nikah ceremonies and Muslim weddings
- Hindu, Sikh, and Buddhist celebrations
- Conservative Christian events
- Community gatherings
- Corporate events

### Halal Compliance
Our alcohol-free policy ensures 100% halal compliance for Muslim families planning weddings, Mehndi events, and Walima celebrations in Birmingham.

## What We Offer Instead

### Premium Mocktails & Beverages
- Artisan mocktails and fresh fruit punches
- Traditional drinks (Lassi, Rooh Afza, Chai)
- Premium soft drinks and juices
- Fresh fruit infused waters

### Focus on Food & Entertainment
Without alcohol, your celebration focuses on:
- Exceptional halal cuisine
- Meaningful conversations
- Professional entertainment (DJ, photography)
- Cultural traditions and ceremonies

## Perfect for Birmingham's Diverse Community

Located in Birmingham city centre, we serve families from Dudley, Wolverhampton, Walsall, and across the West Midlands seeking an inclusive, alcohol-free venue.

**Book Your Event**: Contact LUXE VENUE today for alcohol-free celebrations done right.`,
    author: 'LUXE VENUE Team',
    category: 'Venue Policies',
    tags: ['alcohol-free venue', 'Nikah ceremony', 'Muslim wedding Birmingham', 'halal venue', 'family-friendly events'],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=630&fit=crop',
      alt: 'Alcohol-free wedding celebration at LUXE VENUE',
      width: 1200,
      height: 630,
    },
    metaTitle: 'Alcohol-Free Wedding Venue Birmingham | Halal-Compliant Events',
    metaDescription: 'LUXE VENUE Birmingham - alcohol-free, family-friendly venue for Nikah ceremonies, Muslim weddings, and halal celebrations. Serving Dudley, Wolverhampton.',
    keywords: ['alcohol-free venue Birmingham', 'Nikah ceremony venue', 'Muslim wedding venue', 'halal wedding Birmingham', 'family-friendly venue'],
    readTime: '4 min read',
  },
  {
    title: 'Traditional Indian Wedding Catering: Regional Halal Specialties',
    slug: 'traditional-indian-wedding-catering-regional-halal',
    excerpt: 'Authentic Indian halal wedding menu at LUXE VENUE Birmingham. Samosa, Rogan Josh, Vegetable Korma, Gulab Jamun, and regional Indian specialties. Award-winning chefs creating traditional flavors.',
    content: `# Traditional Indian Wedding Catering at LUXE VENUE

Experience authentic Indian wedding cuisine with our traditional 3-course halal menu, perfect for intimate celebrations in Birmingham.

## Our Traditional Indian Menu

### Starters
- **Samosa**: Crispy pastries filled with spiced potatoes and peas
- **Paneer Tikka**: Marinated cottage cheese grilled to perfection
- **Vegetable Pakoras**: Mixed vegetables in spiced gram flour batter
- **Onion Bhaji**: Crispy fried onion fritters

### Main Course
- **Rogan Josh**: Aromatic lamb curry with traditional Kashmiri spices
- **Vegetable Korma**: Creamy mixed vegetable curry with nuts
- **Chicken Tikka Masala**: Tender chicken in rich tomato-cream sauce
- **Dal Makhani**: Black lentils simmered with butter and cream
- **Pilau Rice & Naan Bread**

### Desserts
- **Gulab Jamun**: Sweet milk dumplings in rose syrup
- **Kheer**: Traditional rice pudding with cardamom
- **Rasgulla**: Soft cheese balls in sweet syrup
- **Fresh Fruit Platter**

## Regional Specialties

LUXE VENUE's chefs specialize in regional Indian cuisines:
- North Indian (Punjabi, Kashmiri)
- South Indian (Kerala, Tamil)
- Gujarati vegetarian specialties
- Bengali sweets and desserts

## Perfect for Birmingham Asian Weddings

Our venue accommodates up to 70 guests, ideal for intimate Indian weddings, Mehndi ceremonies, and family celebrations across Birmingham, Dudley, and Wolverhampton.

**All menus 100% halal-certified and customizable for dietary requirements.**`,
    author: 'LUXE VENUE Culinary Team',
    category: 'Catering',
    tags: ['Indian wedding catering', 'halal Indian food', 'Birmingham wedding menu', 'traditional Indian cuisine', 'Asian wedding Birmingham'],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200&h=630&fit=crop',
      alt: 'Traditional Indian wedding catering',
      width: 1200,
      height: 630,
    },
    metaTitle: 'Traditional Indian Halal Wedding Catering Birmingham | LUXE VENUE',
    metaDescription: 'Authentic Indian halal wedding menu in Birmingham. Samosa, Rogan Josh, Vegetable Korma, Gulab Jamun. Award-winning chefs, 100% halal certified.',
    keywords: ['Indian wedding catering Birmingham', 'halal Indian food', 'Asian wedding venue Birmingham', 'traditional Indian menu', 'Birmingham halal catering'],
    readTime: '6 min read',
  },
  {
    title: 'Asian Wedding Venues in Birmingham & Black Country: Ultimate Guide',
    slug: 'asian-wedding-venues-birmingham-black-country',
    excerpt: 'Complete guide to planning Pakistani, Indian & South Asian weddings in Birmingham, Dudley, Wolverhampton. Halal catering, Mehndi venues, cultural traditions, and budget tips for intimate celebrations.',
    content: `# Asian Wedding Venues in Birmingham & Black Country

Planning a South Asian wedding in Birmingham or the Black Country? This comprehensive guide covers everything you need to know about finding the perfect venue for your Pakistani, Indian, or multicultural celebration.

## Understanding Asian Wedding Requirements

### Cultural Accommodations
- Separate spaces for men/women if required
- Prayer facilities for Islamic ceremonies
- Flexible timings for religious rituals
- Cultural decoration options

### Halal Catering Must-Haves
- 100% halal-certified meat
- Vegetarian and vegan options
- Traditional regional cuisines
- Professional halal caterers

## Best Areas for Asian Weddings

### Birmingham City Centre
LUXE VENUE (Leopold Street, B12 0UD) - Intimate venue for 70 guests with complete halal catering and alcohol-free environment.

### Dudley & Black Country
Easily accessible from Dudley, West Bromwich, and surrounding areas. Many families prefer Birmingham venues for better facilities.

### Wolverhampton & Walsall
Good transport links to Birmingham city centre venues. LUXE VENUE is 20-30 minutes from both cities.

## Planning Your Asian Wedding

### Budget Considerations
- Small wedding venues (under 100 guests): £3,000-£8,000
- Mid-size venues: £8,000-£15,000
- Large banquet halls: £15,000+

### Timeline
- Book 6-12 months in advance
- Mehndi ceremony: Day before wedding
- Nikah/main ceremony: Wedding day
- Walima reception: Same day or following day

## Why Choose LUXE VENUE?

### Perfect for Intimate Asian Weddings
- Capacity: 20-70 guests ideal for small families
- 100% halal catering with regional specialties
- Alcohol-free, family-friendly environment
- Cultural sensitivity and flexibility
- Complimentary event planner (worth £400)

### Serving the Asian Community
We understand Pakistani, Indian, Bangladeshi, and Afghan wedding traditions. Our team has experience with:
- Nikah ceremonies
- Mehndi events
- Walima receptions
- Mixed-culture weddings

**Contact us today to discuss your Asian wedding plans in Birmingham.**`,
    author: 'LUXE VENUE Wedding Team',
    category: 'Wedding Planning',
    tags: ['Asian wedding Birmingham', 'Pakistani wedding venue', 'Indian wedding Birmingham', 'halal wedding venue', 'Black Country weddings'],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1587271339550-58e7f8b6bd56?w=1200&h=630&fit=crop',
      alt: 'Asian wedding venue in Birmingham',
      width: 1200,
      height: 630,
    },
    metaTitle: 'Asian Wedding Venues Birmingham & Black Country | Pakistani, Indian Weddings',
    metaDescription: 'Complete guide to Asian wedding venues in Birmingham, Dudley, Wolverhampton. Halal catering, Nikah ceremonies, cultural traditions. Small venue up to 70 guests.',
    keywords: ['Asian wedding Birmingham', 'Pakistani wedding venue Dudley', 'Indian wedding Wolverhampton', 'halal wedding venue Birmingham', 'Nikah ceremony Birmingham'],
    readTime: '8 min read',
  },
  {
    title: 'Affordable Small Wedding Venues in Birmingham Under £5,000',
    slug: 'affordable-small-wedding-venues-birmingham-under-5000',
    excerpt: 'Budget-friendly intimate wedding venues in Birmingham, Dudley & West Midlands. Complete guide to planning beautiful small weddings for 20-70 guests under £5,000 with halal catering options.',
    content: `# Affordable Small Wedding Venues in Birmingham Under £5,000

Planning a beautiful wedding on a budget? Discover how to host an intimate, elegant celebration in Birmingham without breaking the bank.

## Why Choose a Small Wedding Venue?

### Benefits of Intimate Celebrations
- More meaningful guest interactions
- Lower overall costs
- Easier planning and coordination
- Greater flexibility and personalization
- Focus on quality over quantity

### Perfect Guest Count: 20-70
Small venues like LUXE VENUE (capacity 70) offer the ideal setting for:
- Close family and friends only
- Micro weddings and elopements
- Intimate cultural ceremonies
- Budget-conscious couples

## Budget Breakdown for £5,000 Wedding

### Venue & Catering: £3,000-£4,000
- Venue hire with basic décor
- 3-course halal meal for 50-70 guests
- Complimentary event planner
- Sound system and lighting

### Additional Services: £1,000-£2,000
- Photography (4-6 hours): £500-£800
- DJ services: £300-£500
- Flowers and additional décor: £200-£400
- Invitations and stationery: £100-£200

## Tips for Affordable Birmingham Weddings

### 1. Choose Off-Peak Dates
Thursday or Sunday weddings cost less than Saturday celebrations.

### 2. Limit Guest List
Keep it intimate - 50 guests instead of 150 saves significantly on catering.

### 3. All-Inclusive Packages
Venues offering complete packages (like LUXE VENUE) save money versus booking separately.

### 4. DIY Where Possible
- Create your own invitations
- Playlist for background music
- Simple homemade favors

## Best Affordable Venues in Birmingham

### LUXE VENUE - Birmingham B12
**Starting from £3,000**
- Capacity: Up to 70 guests
- Alcohol-free, halal-compliant
- Complimentary event planner (£400 value)
- Flexible packages
- All faiths and cultures welcome

### Location Benefits
- Birmingham city centre location
- Easy access from Dudley (15 mins)
- Near Wolverhampton (20 mins)
- Close to Walsall and West Bromwich

## Halal Catering Options

LUXE VENUE specializes in:
- Pakistani wedding menus (Biryani, Karahi, Kebabs)
- Indian cuisine (Rogan Josh, Korma, Tikka)
- Fusion Indo-Pak menus
- Vegetarian and vegan options

**All ingredients 100% halal-certified.**

## Perfect for Asian Weddings

Serving Birmingham's diverse community:
- Pakistani Muslim weddings
- Indian Hindu/Sikh ceremonies
- Bangladeshi celebrations
- Afghan wedding traditions
- Mixed-culture unions

**Book your affordable Birmingham wedding today - beautiful celebrations don't have to be expensive!**`,
    author: 'LUXE VENUE Team',
    category: 'Wedding Planning',
    tags: ['affordable wedding Birmingham', 'budget wedding venue', 'small wedding Birmingham', 'cheap wedding venue', 'Birmingham wedding under 5000'],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop',
      alt: 'Affordable small wedding venue Birmingham',
      width: 1200,
      height: 630,
    },
    metaTitle: 'Affordable Small Wedding Venues Birmingham Under £5000 | LUXE VENUE',
    metaDescription: 'Budget-friendly intimate wedding venue in Birmingham. Beautiful small weddings for 20-70 guests under £5000. Halal catering, alcohol-free, packages from £3k.',
    keywords: ['affordable wedding Birmingham', 'small wedding venue Birmingham', 'budget wedding Dudley', 'cheap wedding venue Birmingham', 'intimate wedding Birmingham'],
    readTime: '7 min read',
  },
  {
    title: 'Planning a Nikah Ceremony in Birmingham: Complete Guide 2025',
    slug: 'nikah-ceremony-birmingham-complete-guide',
    excerpt: 'Everything you need to know about planning a beautiful Nikah ceremony in Birmingham, Wolverhampton, or West Midlands. Halal venues, Islamic wedding traditions, budget tips, and cultural requirements.',
    content: `# Planning a Nikah Ceremony in Birmingham: Complete Guide 2025

Planning a Nikah ceremony in Birmingham? This comprehensive guide covers everything Muslim couples need to know about organizing an Islamic wedding in the West Midlands.

## What is a Nikah Ceremony?

The Nikah is the Islamic marriage contract and religious ceremony that makes a marriage official in Islam. It's a sacred event requiring specific conditions and traditions.

## Essential Requirements

### Religious Requirements
- **Wali (Guardian)**: Bride's father or male guardian
- **Witnesses**: Two adult Muslim witnesses
- **Mahr (Dowry)**: Agreed upon gift from groom to bride
- **Ijab (Offer) & Qubool (Acceptance)**: Verbal contract
- **Imam or Qazi**: To officiate the ceremony

### Venue Requirements
- Clean, respectful space
- Separate seating for men and women (if preferred)
- Prayer facilities
- Halal catering only
- Alcohol-free environment

## Why LUXE VENUE for Nikah Ceremonies?

### Islamic-Compliant Venue
- **100% Alcohol-Free**: Strict no-alcohol policy
- **100% Halal Catering**: All ingredients halal-certified
- **Prayer Space Available**: For Salah before/after ceremony
- **Cultural Sensitivity**: Staff trained in Islamic wedding customs
- **Modest Environment**: Family-friendly atmosphere

### Perfect Setup for Nikah
- Capacity: 20-70 guests (perfect for intimate Islamic weddings)
- Flexible seating arrangements (mixed or segregated)
- Beautiful décor with customizable colors
- Professional sound system for Quran recitation

## Nikah Ceremony Timeline

### Pre-Ceremony (30 mins)
- Guest arrival and seating
- Light refreshments

### Nikah Ceremony (30-45 mins)
- Opening prayers and Quran recitation
- Khutbah (sermon) by Imam
- Mahr announcement
- Ijab and Qubool (marriage contract)
- Signing of Nikahnama
- Dua (prayers) for the couple

### Reception (2-3 hours)
- Formal meal service
- Family speeches
- Photography
- Celebration and socializing

## Budget Planning for Nikah

### Affordable Packages at LUXE VENUE
- **Basic Nikah Package (£3,000)**: Venue, 3-course halal meal, 50 guests
- **Premium Nikah Package (£5,000)**: Enhanced décor, photography, 70 guests
- **Complimentary Event Planner (£400 value)** with all bookings

### Additional Costs to Consider
- Imam fees: £200-£500
- Mehndi ceremony (separate day): £1,500-£3,000
- Walima reception: Included in main package
- Photography/videography: £500-£1,500

## Serving Birmingham's Muslim Community

### Our Coverage Area
Located in Birmingham B12, easily accessible from:
- **Sparkhill & Small Heath**: 10 minutes
- **Alum Rock & Bordesley Green**: 15 minutes
- **Dudley & West Bromwich**: 20 minutes
- **Wolverhampton & Walsall**: 25 minutes

### Cultural Understanding
We've hosted over 100 Nikah ceremonies for Pakistani, Indian, Bangladeshi, Afghan, Arab, and convert Muslim families across Birmingham and the West Midlands.

## Halal Menu Options for Nikah

### Pakistani-Style Nikah Menu
- Samosas, Chicken Biryani, Lamb Karahi
- Naan, Raita, Salad
- Kheer, Gulab Jamun

### Indian-Style Nikah Menu
- Paneer Tikka, Rogan Josh, Vegetable Korma
- Pilau Rice, Naan
- Rasmalai, Jalebi

### Fusion Menu
- Mixed starters (Indian & Pakistani)
- Choice of curries and rice dishes
- Traditional sweets

**All ingredients 100% halal-certified. No alcohol anywhere on premises.**

## Book Your Nikah Ceremony

Contact LUXE VENUE today to discuss your Islamic wedding plans in Birmingham. We honor your traditions and create beautiful, halal-compliant celebrations.

**Phone**: +44 7391 222884  
**WhatsApp**: Available  
**Email**: info@luxevenue.co.uk`,
    author: 'LUXE VENUE Team',
    category: 'Islamic Weddings',
    tags: ['Nikah ceremony Birmingham', 'Muslim wedding venue', 'Islamic wedding Birmingham', 'halal wedding venue', 'Nikah ceremony Dudley'],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop',
      alt: 'Nikah ceremony at LUXE VENUE Birmingham',
      width: 1200,
      height: 630,
    },
    metaTitle: 'Nikah Ceremony Birmingham | Islamic Wedding Venue | Halal Catering',
    metaDescription: 'Plan your Nikah ceremony in Birmingham at LUXE VENUE. 100% halal catering, alcohol-free, prayer facilities. Serving Muslim families across West Midlands.',
    keywords: ['Nikah ceremony Birmingham', 'Islamic wedding venue Birmingham', 'Muslim wedding Dudley', 'halal wedding venue Wolverhampton', 'Nikah ceremony West Midlands'],
    readTime: '10 min read',
  },
  {
    title: 'Top Wedding Venues in Birmingham for Small Intimate Weddings 2025',
    slug: 'small-intimate-wedding-venues-birmingham-2025',
    excerpt: 'Discover the best small wedding venues in Birmingham, Dudley, and Black Country for intimate celebrations. Perfect for 20-70 guests with halal catering, cultural accommodations, and affordable packages.',
    content: `# Top Small Wedding Venues in Birmingham 2025

Searching for the perfect intimate wedding venue in Birmingham? Here's your complete guide to small wedding spaces ideal for 20-70 guests.

## Why Small Weddings Are Trending

### 2025 Wedding Trends
- Micro weddings (under 50 guests) increasing 300%
- Focus on quality over quantity
- More budget for food and experience
- Intimate, meaningful celebrations
- Easier planning process

## What Makes a Great Small Venue?

### Key Features to Look For
- **Flexible Capacity**: 20-70 guests maximum
- **All-Inclusive Packages**: Venue + catering + coordination
- **Personalization Options**: Custom décor and menus
- **Central Location**: Easy access for all guests
- **Cultural Sensitivity**: Accommodates diverse traditions

## LUXE VENUE Birmingham - Top Choice for Small Weddings

### Why Couples Choose Us

**Location**: 86 Leopold Street, Birmingham B12 0UD
- City centre location
- 15 mins from Dudley
- 20 mins from Wolverhampton
- Easy parking and public transport

**Capacity**: Up to 70 guests
- Perfect for intimate weddings
- Flexible seating arrangements
- Not too big, not too small

**Packages**: From £3,000
- Bronze Package (£3,000): Basic but beautiful
- Silver Package (£5,000): Enhanced options
- Gold Package (£8,000): Premium all-inclusive

**Unique Features**:
- 100% alcohol-free (perfect for Muslim weddings)
- 100% halal catering
- Complimentary event planner (£400 value)
- Cultural accommodations (all faiths)
- Professional sound and lighting

## Perfect for Multicultural Weddings

### We Specialize In:
- **Pakistani Weddings**: Full Nikah, Mehndi, Walima support
- **Indian Weddings**: Hindu, Sikh, Christian ceremonies
- **Mixed-Culture Unions**: Blending traditions beautifully
- **Convert Muslim Weddings**: Small Islamic ceremonies
- **Interfaith Celebrations**: Respectful of all beliefs

## Comparison: Birmingham Small Venues

### LUXE VENUE Advantages
✓ Central Birmingham location (B12)  
✓ True small venue (70 max - not a large hall with minimum guests)  
✓ All-inclusive packages with event planner  
✓ 100% halal & alcohol-free  
✓ Transparent pricing from £3,000  
✓ Flexible cultural accommodations  

### What to Avoid
✗ Large banquet halls with high minimum spends  
✗ Venues without halal catering options  
✗ Locations far from Birmingham/Black Country  
✗ Hidden fees and extras  

## Areas We Serve

### Primary Service Area
- Birmingham (all postcodes)
- Dudley
- Wolverhampton
- Walsall
- West Bromwich
- Sandwell

### Extended Coverage
- Solihull
- Coventry
- Tamworth
- Cannock

## Booking Your Small Wedding

### Steps to Book LUXE VENUE
1. **Initial Contact**: Call, WhatsApp, or email
2. **Venue Viewing**: Private tour of the space
3. **Menu Tasting**: Sample our halal cuisine
4. **Package Selection**: Choose Bronze, Silver, or Gold
5. **Deposit**: Secure your date
6. **Planning Sessions**: Work with complimentary event planner
7. **Your Perfect Day**: Relax and celebrate!

### Available Dates
Book 6-12 months in advance for popular dates. Some short-notice availability for weekday and off-peak weddings.

## Small Wedding Tips

### Make It Special
- Personalized menus with family recipes
- Custom cocktail table names
- Photo booth or backdrop area
- Playlist of meaningful songs
- Handwritten notes to each guest

### Save Money
- Weekday weddings (Thursday/Sunday)
- Off-peak seasons (Jan-March, Nov)
- Digital invitations
- Simple but elegant décor
- Focus budget on food quality

**Ready to plan your intimate Birmingham wedding? Contact LUXE VENUE today for a venue tour and consultation.**`,
    author: 'LUXE VENUE Team',
    category: 'Wedding Planning',
    tags: ['small wedding Birmingham', 'intimate wedding venue', 'micro wedding Birmingham', 'affordable wedding venue', 'Birmingham wedding under 5000'],
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=630&fit=crop',
      alt: 'Small intimate wedding venue Birmingham',
      width: 1200,
      height: 630,
    },
    metaTitle: 'Small Intimate Wedding Venues Birmingham Under £5000 | LUXE VENUE',
    metaDescription: 'Top small wedding venues in Birmingham for 20-70 guests. Affordable packages from £3k with halal catering. Perfect for intimate celebrations in Birmingham, Dudley.',
    keywords: ['small wedding venue Birmingham', 'intimate wedding Birmingham', 'micro wedding venue', 'affordable wedding Birmingham', 'small wedding Dudley'],
    readTime: '9 min read',
  },
]

async function seedBlogs() {
  try {
    console.log('Connecting to MongoDB...')
    await connectDB()
    console.log('✓ Connected to MongoDB')

    // Clear existing blog posts
    await BlogPost.deleteMany({})
    console.log('✓ Cleared existing blog posts')

    // Create blog posts
    for (const postData of blogPosts) {
      await BlogPost.create({
        id: uuidv4(),
        ...postData,
        status: 'Published',
        publishedDate: new Date(),
        views: Math.floor(Math.random() * 500) + 100,
      })
    }

    console.log(`✓ Created ${blogPosts.length} blog posts`)
    console.log('\nBlog posts:')
    blogPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`)
      console.log(`   Slug: /blog/${post.slug}`)
    })

  } catch (error) {
    console.error('✗ Seed error:', error)
  } finally {
    await mongoose.connection.close()
    console.log('\n✓ Database connection closed')
  }
}

seedBlogs()
