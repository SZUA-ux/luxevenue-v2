import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { connectDB } from './db/connect.js'
import { User } from './models/User.js'
import { v4 as uuidv4 } from 'uuid'

async function seedAdmin() {
  try {
    console.log('Connecting to MongoDB...')
    await connectDB()
    console.log('✓ Connected to MongoDB')

    // Clear existing users
    await User.deleteMany({})
    console.log('✓ Cleared existing users')

    // Create admin user with USERNAME
    const hashedPassword = await bcrypt.hash('LuxeVenue2024!', 12)
    
    const admin = await User.create({
      id: uuidv4(),
      username: 'luxeadmin',
      email: 'info@luxevenue.co.uk',
      password: hashedPassword,
      role: 'admin',
      firstName: 'LUXE',
      lastName: 'Admin',
    })

    console.log('\\n✅ Admin user created successfully!')
    console.log('==================================================')
    console.log('USERNAME: luxeadmin')
    console.log('PASSWORD: LuxeVenue2024!')
    console.log('EMAIL: info@luxevenue.co.uk')
    console.log('==================================================')
    console.log('\\n⚠️  IMPORTANT: Change password after first login!')

  } catch (error) {
    console.error('✗ Seed error:', error)
  } finally {
    await mongoose.connection.close()
    console.log('\\n✓ Database connection closed')
  }
}

seedAdmin()
