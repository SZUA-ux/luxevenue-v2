import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { connectDB } from './db/connect.js'
import { User } from './models/User.js'
import { v4 as uuidv4 } from 'uuid'

async function seed() {
  try {
    console.log('Connecting to MongoDB...')
    await connectDB()
    console.log('✓ Connected to MongoDB')

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'info@luxevenue.co.uk' })
    
    if (existingAdmin) {
      console.log('✓ Admin user already exists')
      console.log('Admin Email: info@luxevenue.co.uk')
      return
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('Admin@LuxeVenue2024!', 12)
    
    const admin = await User.create({
      id: uuidv4(),
      email: 'info@luxevenue.co.uk',
      password: hashedPassword,
      role: 'admin',
      firstName: 'LUXE',
      lastName: 'Admin',
    })

    console.log('✓ Admin user created successfully!')
    console.log('Admin Email: info@luxevenue.co.uk')
    console.log('Admin Password: Admin@LuxeVenue2024!')
    console.log('\n⚠️  IMPORTANT: Change this password after first login!')

  } catch (error) {
    console.error('✗ Seed error:', error)
  } finally {
    await mongoose.connection.close()
    console.log('\n✓ Database connection closed')
  }
}

seed()
