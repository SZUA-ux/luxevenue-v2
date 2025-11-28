#!/usr/bin/env python3
"""
Script to reset/clean all test data from LUXE VENUE CRM database
"""
import os
import sys
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import asyncio

load_dotenv()

async def reset_database():
    """Delete all test data from collections"""
    
    # Use the correct database connection
    mongo_url = "mongodb://localhost:27017"
    db_name = "luxe_venue_db"
    
    print(f"🔌 Connecting to database: {db_name}...")
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    # Collections to clean
    collections = [
        'bookings',
        'venueleads',
        'cateringleads',
        'hireleads',
        'clients',
        'emaillogs'
    ]
    
    print("\n🗑️  Starting database cleanup...\n")
    
    total_deleted = 0
    
    for collection_name in collections:
        try:
            collection = db[collection_name]
            count_before = await collection.count_documents({})
            
            if count_before > 0:
                result = await collection.delete_many({})
                print(f"✅ {collection_name}: Deleted {result.deleted_count} documents (was {count_before})")
                total_deleted += result.deleted_count
            else:
                print(f"⚪ {collection_name}: Already empty (0 documents)")
                
        except Exception as e:
            print(f"⚠️  {collection_name}: Error - {str(e)}")
    
    print(f"\n✨ Database cleanup complete!")
    print(f"📊 Total documents deleted: {total_deleted}")
    print("\n🎉 Database is now fresh and ready for manual testing!")
    
    client.close()

if __name__ == "__main__":
    print("=" * 60)
    print("LUXE VENUE CRM - Database Reset Tool")
    print("=" * 60)
    print("\n⚠️  WARNING: This will delete ALL data from:")
    print("   - All Bookings (Venue, Catering, Hire)")
    print("   - All Leads (Venue, Catering, Hire)")
    print("   - All Clients")
    print("   - All Email Logs")
    print("\n" + "=" * 60)
    
    confirm = input("\n❓ Are you sure you want to proceed? Type 'YES' to confirm: ")
    
    if confirm.strip().upper() == 'YES':
        print("\n🚀 Starting cleanup...\n")
        asyncio.run(reset_database())
    else:
        print("\n❌ Operation cancelled. No data was deleted.")
        sys.exit(0)
