#!/usr/bin/env python3
import os

venues = [
    # Wedding venues
    ('Wedding Venue', 'Dudley', '20-70', '£500-£900', 'wedding-venue-dudley'),
    ('Wedding Venue', 'Solihull', '20-70', '£500-£900', 'wedding-venue-solihull'),
    ('Wedding Venue', 'Walsall', '20-70', '£500-£900', 'wedding-venue-walsall'),
    
    # Small event venues  
    ('Small Event Venue', 'Birmingham', '20-50', '£400-£700', 'small-event-venue-birmingham'),
    ('Small Event Venue', 'Wolverhampton', '20-50', '£400-£700', 'small-event-venue-wolverhampton'),
    ('Small Event Venue', 'Dudley', '20-50', '£400-£700', 'small-event-venue-dudley'),
    ('Small Event Venue', 'Solihull', '20-50', '£400-£700', 'small-event-venue-solihull'),
    ('Small Event Venue', 'Walsall', '20-50', '£400-£700', 'small-event-venue-walsall'),
    
    # Birthday venues
    ('Birthday Venue', 'Birmingham', '30-70', '£500-£800', 'birthday-venue-birmingham'),
    ('Birthday Venue', 'Wolverhampton', '30-70', '£500-£800', 'birthday-venue-wolverhampton'),
    ('Birthday Venue', 'Dudley', '30-70', '£500-£800', 'birthday-venue-dudley'),
    ('Birthday Venue', 'Solihull', '30-70', '£500-£800', 'birthday-venue-solihull'),
    ('Birthday Venue', 'Walsall', '30-70', '£500-£800', 'birthday-venue-walsall'),
    
    # Affordable venues
    ('Affordable Venue Hire', 'Wolverhampton', '20-70', '£400-£700', 'affordable-venue-hire-wolverhampton'),
    ('Affordable Venue Hire', 'Dudley', '20-70', '£400-£700', 'affordable-venue-hire-dudley'),
]

base_dir = '/app/frontend/app'

for service, city, capacity, price, slug in venues:
    dir_path = os.path.join(base_dir, slug)
    os.makedirs(dir_path, exist_ok=True)
    print(f"Created directory: {dir_path}")

print(f"\nTotal: {len(venues)} directories created")
