import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import asyncio

load_dotenv()

async def list_collections():
    mongo_url = os.getenv('MONGO_URL')
    client = AsyncIOMotorClient(mongo_url)
    
    if 'luxevenue' in mongo_url:
        db = client['luxevenue']
    else:
        db_name = mongo_url.split('/')[-1].split('?')[0] if '/' in mongo_url else 'luxevenue'
        db = client[db_name if db_name else 'luxevenue']
    
    print("Collections in database:")
    collections = await db.list_collection_names()
    for coll in collections:
        count = await db[coll].count_documents({})
        print(f"  - {coll}: {count} documents")
    
    client.close()

asyncio.run(list_collections())
