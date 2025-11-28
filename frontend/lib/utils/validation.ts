'use server'

import { connectDB } from '@/lib/db/connect'
import { VenueLead } from '@/lib/models/VenueLead'
import { HireLead } from '@/lib/models/HireLead'
import { Booking } from '@/lib/models/Booking'

interface TimeSlot {
  date: Date
  startTime: string
  endTime: string
}

function parseTime(timeStr: string): number {
  // Handle formats like "17:00", "5:00 PM", "17:00:00"
  const time = timeStr.toLowerCase().trim()
  let hours = 0
  let minutes = 0

  if (time.includes('pm') || time.includes('am')) {
    const [timePart, period] = time.split(/\s+/)
    const [h, m] = timePart.split(':')
    hours = parseInt(h)
    minutes = parseInt(m || '0')
    if (period.includes('pm') && hours !== 12) hours += 12
    if (period.includes('am') && hours === 12) hours = 0
  } else {
    const [h, m] = time.split(':')
    hours = parseInt(h)
    minutes = parseInt(m || '0')
  }

  return hours * 60 + minutes
}

function timesOverlap(start1: string, end1: string, start2: string, end2: string): boolean {
  const s1 = parseTime(start1)
  const e1 = parseTime(end1)
  const s2 = parseTime(start2)
  const e2 = parseTime(end2)

  return s1 < e2 && e1 > s2
}

function datesMatch(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

export async function checkTimeSlotConflict(slot: TimeSlot, excludeId?: string): Promise<{
  hasConflict: boolean
  conflictDetails?: string
}> {
  try {
    await connectDB()

    // Check venue leads with dates and times
    const venueLeads = await VenueLead.find({
      eventDate: { $exists: true },
      status: { $ne: 'Lost' },
    }).lean()

    // Check hire leads
    const hireLeads = await HireLead.find({
      date: { $exists: true },
      startTime: { $exists: true },
      endTime: { $exists: true },
      status: { $ne: 'Lost' },
    }).lean()

    // Check bookings
    const bookings = await Booking.find({
      status: { $in: ['active', 'completed'] },
    }).lean()

    // Check venue leads
    for (const lead of venueLeads) {
      if (lead.id === excludeId) continue
      if (lead.eventDate && datesMatch(new Date(lead.eventDate), slot.date)) {
        return {
          hasConflict: true,
          conflictDetails: `Conflict with existing ${lead.eventType} booking on this date`,
        }
      }
    }

    // Check hire leads with time slots
    for (const lead of hireLeads) {
      if (lead.id === excludeId) continue
      if (lead.date && lead.startTime && lead.endTime && datesMatch(new Date(lead.date), slot.date)) {
        if (timesOverlap(slot.startTime, slot.endTime, lead.startTime, lead.endTime)) {
          return {
            hasConflict: true,
            conflictDetails: `Conflict with ${lead.eventType} from ${lead.startTime} to ${lead.endTime}`,
          }
        }
      }
    }

    // Check bookings
    for (const booking of bookings) {
      if (booking.id === excludeId) continue
      if (datesMatch(new Date(booking.date), slot.date)) {
        if (timesOverlap(slot.startTime, slot.endTime, booking.startTime, booking.endTime)) {
          return {
            hasConflict: true,
            conflictDetails: `Conflict with confirmed ${booking.eventType} from ${booking.startTime} to ${booking.endTime}`,
          }
        }
      }
    }

    return { hasConflict: false }
  } catch (error) {
    console.error('Error checking time slot conflict:', error)
    return { hasConflict: false }
  }
}