import os
from pymongo import MongoClient

# Connect directly
client = MongoClient("mongodb://localhost:27017")
db = client["luxe_venue_db"]

# Get all collections
collections = db.list_collection_names()
print(f"Found collections: {collections}")

# Delete from all
for coll_name in collections:
    coll = db[coll_name]
    count = coll.count_documents({})
    if count > 0:
        result = coll.delete_many({})
        print(f"✅ {coll_name}: Deleted {result.deleted_count} documents")
    else:
        print(f"⚪ {coll_name}: Already empty")

client.close()
print("\n✨ Done!")
