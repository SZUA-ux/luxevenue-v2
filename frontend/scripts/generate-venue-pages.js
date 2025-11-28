const fs = require('fs');
const path = require('path');

const venues = [
  // Wedding venues
  { service: 'Wedding Venue', city: 'Dudley', capacity: '20-70', price: '£500-£900', keywords: 'wedding venue dudley, halal wedding dudley, asian wedding dudley' },
  { service: 'Wedding Venue', city: 'Solihull', capacity: '20-70', price: '£500-£900', keywords: 'wedding venue solihull, halal wedding solihull, asian wedding solihull' },
  { service: 'Wedding Venue', city: 'Walsall', capacity: '20-70', price: '£500-£900', keywords: 'wedding venue walsall, halal wedding walsall, asian wedding walsall' },
  
  // Small event venues
  { service: 'Small Event Venue', city: 'Birmingham', capacity: '20-50', price: '£400-£700', keywords: 'small event venue birmingham, intimate venue birmingham, small party venue birmingham' },
  { service: 'Small Event Venue', city: 'Wolverhampton', capacity: '20-50', price: '£400-£700', keywords: 'small event venue wolverhampton, intimate venue wolverhampton' },
  { service: 'Small Event Venue', city: 'Dudley', capacity: '20-50', price: '£400-£700', keywords: 'small event venue dudley, intimate venue dudley' },
  { service: 'Small Event Venue', city: 'Solihull', capacity: '20-50', price: '£400-£700', keywords: 'small event venue solihull, intimate venue solihull' },
  { service: 'Small Event Venue', city: 'Walsall', capacity: '20-50', price: '£400-£700', keywords: 'small event venue walsall, intimate venue walsall' },
  
  // Birthday venues
  { service: 'Birthday Venue', city: 'Birmingham', capacity: '30-70', price: '£500-£800', keywords: 'birthday venue birmingham, birthday party venue birmingham, halal birthday venue' },
  { service: 'Birthday Venue', city: 'Wolverhampton', capacity: '30-70', price: '£500-£800', keywords: 'birthday venue wolverhampton, birthday party venue wolverhampton' },
  { service: 'Birthday Venue', city: 'Dudley', capacity: '30-70', price: '£500-£800', keywords: 'birthday venue dudley, birthday party venue dudley' },
  { service: 'Birthday Venue', city: 'Solihull', capacity: '30-70', price: '£500-£800', keywords: 'birthday venue solihull, birthday party venue solihull' },
  { service: 'Birthday Venue', city: 'Walsall', capacity: '30-70', price: '£500-£800', keywords: 'birthday venue walsall, birthday party venue walsall' },
  
  // Affordable venues
  { service: 'Affordable Venue Hire', city: 'Wolverhampton', capacity: '20-70', price: '£400-£700', keywords: 'affordable venue wolverhampton, cheap venue hire wolverhampton, budget venue' },
  { service: 'Affordable Venue Hire', city: 'Dudley', capacity: '20-70', price: '£400-£700', keywords: 'affordable venue dudley, cheap venue hire dudley, budget venue' },
];

console.log(`Will generate ${venues.length} venue pages`);
console.log(JSON.stringify(venues, null, 2));
