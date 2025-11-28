import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/venue_booker'

const testLeads = {
  venue_leads: [
    {
      id: uuidv4(),
      name: 'Sarah Ahmed',
      email: 'sarah.ahmed@email.com',
      phone: '07712345678',
      eventType: 'Wedding Reception',
      eventDate: new Date('2025-06-15'),
      startTime: '17:00',
      endTime: '23:00',
      guestCount: 120,
      message: 'Looking for a beautiful venue for our nikah reception. Need halal catering options.',
      status: 'New',
      source: 'website-contact-form',
      receivedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      notes: []
    },
    {
      id: uuidv4(),
      name: 'Mohammed Khan',
      email: 'mkhan@email.com',
      phone: '07798765432',
      eventType: 'Engagement Party',
      eventDate: new Date('2025-05-20'),
      startTime: '18:00',
      endTime: '22:00',
      guestCount: 80,
      message: 'Engagement party for approximately 80 guests. Interested in your Pakistani catering menu.',
      status: 'Contacted',
      source: 'website-contact-form',
      receivedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      updatedAt: new Date(),
      notes: [
        {
          text: 'Called and confirmed budget. Sending proposal.',
          addedAt: new Date(),
          addedBy: 'Admin'
        }
      ]
    },
    {
      id: uuidv4(),
      name: 'Aisha Patel',
      email: 'aisha.patel@email.com',
      phone: '07723456789',
      eventType: 'Birthday Party',
      eventDate: new Date('2025-04-10'),
      startTime: '15:00',
      endTime: '20:00',
      guestCount: 50,
      message: '50th birthday celebration. Family-friendly venue needed.',
      status: 'New',
      source: 'website-contact-form',
      receivedAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
      notes: []
    }
  ],
  catering_leads: [
    {
      id: uuidv4(),
      name: 'Fatima Hussain',
      email: 'fatima.h@email.com',
      phone: '07787654321',
      interestedIn: 'Corporate Catering',
      numberOfGuests: 40,
      eventDate: new Date('2025-03-25'),
      message: 'Need halal catering for office event. Buffet style for 40 people.',
      budget: '£600-800',
      status: 'New',
      source: 'catering-enquiry-form',
      createdAt: new Date(),
      updatedAt: new Date(),
      notes: []
    },
    {
      id: uuidv4(),
      name: 'Imran Sheikh',
      email: 'imran.sheikh@email.com',
      phone: '07734567890',
      interestedIn: 'Wedding Catering',
      numberOfGuests: 200,
      eventDate: new Date('2025-07-12'),
      message: 'Wedding catering for 200 guests. Need Pakistani menu with biryani and karahi.',
      budget: '£5000+',
      status: 'Qualified',
      source: 'catering-enquiry-form',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      updatedAt: new Date(),
      notes: [
        {
          text: 'Very interested. Scheduled tasting for next week.',
          addedAt: new Date(),
          addedBy: 'Admin'
        }
      ]
    },
    {
      id: uuidv4(),
      name: 'Zainab Ali',
      email: 'zainab.ali@email.com',
      phone: '07756789012',
      interestedIn: 'Home Party Catering',
      numberOfGuests: 30,
      eventDate: new Date('2025-03-15'),
      message: 'Eid party at home. Need food delivery for 30 people.',
      budget: '£400-600',
      status: 'Contacted',
      source: 'catering-enquiry-form',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      updatedAt: new Date(),
      notes: []
    }
  ],
  hire_leads: [
    {
      id: uuidv4(),
      name: 'Yusuf Rahman',
      email: 'yusuf.rahman@email.com',
      phone: '07745678901',
      eventType: 'Corporate Meeting',
      date: new Date('2025-03-18'),
      startTime: '10:00',
      endTime: '16:00',
      guestCount: 25,
      message: 'Need venue for business training session. Require projector and tables.',
      status: 'New',
      source: 'venue-hire-page',
      receivedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      notes: []
    },
    {
      id: uuidv4(),
      name: 'Amina Begum',
      email: 'amina.begum@email.com',
      phone: '07767890123',
      eventType: 'Baby Shower',
      date: new Date('2025-04-22'),
      startTime: '14:00',
      endTime: '18:00',
      guestCount: 35,
      message: 'Baby shower for my sister. Looking for elegant venue with catering options.',
      status: 'Contacted',
      source: 'venue-hire-page',
      receivedAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
      updatedAt: new Date(),
      notes: [
        {
          text: 'Sent pricing information. Awaiting response.',
          addedAt: new Date(),
          addedBy: 'Admin'
        }
      ]
    },
    {
      id: uuidv4(),
      name: 'Hassan Malik',
      email: 'hassan.malik@email.com',
      phone: '07778901234',
      eventType: 'Graduation Party',
      date: new Date('2025-07-05'),
      startTime: '19:00',
      endTime: '23:00',
      guestCount: 60,
      message: 'Graduation celebration for my daughter. Need space for 60 people with food.',
      status: 'New',
      source: 'venue-hire-page',
      receivedAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
      updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
      notes: []
    }
  ]
}

async function seedTestLeads() {
  const client = new MongoClient(MONGODB_URI)
  
  try {
    await client.connect()
    console.log('✅ Connected to MongoDB')
    
    const db = client.db()
    
    // Insert Venue Leads
    await db.collection('venue_leads').deleteMany({})
    await db.collection('venue_leads').insertMany(testLeads.venue_leads)
    console.log(`✅ Inserted ${testLeads.venue_leads.length} venue leads`)
    
    // Insert Catering Leads
    await db.collection('catering_leads').deleteMany({})
    await db.collection('catering_leads').insertMany(testLeads.catering_leads)
    console.log(`✅ Inserted ${testLeads.catering_leads.length} catering leads`)
    
    // Insert Hire Leads
    await db.collection('hire_leads').deleteMany({})
    await db.collection('hire_leads').insertMany(testLeads.hire_leads)
    console.log(`✅ Inserted ${testLeads.hire_leads.length} hire leads (Space/Venue Hire)`)
    
    console.log('\n📊 Summary:')
    console.log(`   - Event Leads: ${testLeads.venue_leads.length}`)
    console.log(`   - Catering Leads: ${testLeads.catering_leads.length}`)
    console.log(`   - Hire Leads (Space/Venue Hire): ${testLeads.hire_leads.length}`)
    console.log(`   - Total: ${testLeads.venue_leads.length + testLeads.catering_leads.length + testLeads.hire_leads.length} leads`)
    
  } catch (error) {
    console.error('❌ Error seeding test leads:', error)
    throw error
  } finally {
    await client.close()
    console.log('\n✅ MongoDB connection closed')
  }
}

seedTestLeads()
