#!/bin/bash
# Test all 20 catering pages return 200 OK

APP_URL="https://venue-booking-hub.preview.emergentagent.com"

catering_pages=(
  "catering/pakistani-catering-birmingham"
  "catering/indian-catering-birmingham"
  "catering/halal-catering-birmingham"
  "catering/halal-buffet-birmingham"
  "catering/asian-wedding-catering-birmingham"
  "catering/pakistani-catering-wolverhampton"
  "catering/indian-catering-solihull"
  "catering/halal-catering-dudley"
  "catering/halal-catering-walsall"
  "catering/outdoor-catering-birmingham"
  "catering/tandoori-catering-birmingham"
  "catering/halal-private-chef-birmingham"
  "catering/halal-corporate-catering-birmingham"
  "catering/pakistani-wedding-food-birmingham"
  "catering/curry-catering-birmingham"
  "catering/street-food-catering-birmingham"
  "catering/pakistani-bbq-catering-birmingham"
  "catering/halal-tiffin-service-birmingham"
  "catering/asian-catering-west-midlands"
  "catering/home-catering-service-birmingham"
)

echo "🧪 Testing ${#catering_pages[@]} catering pages..."
echo ""

success_count=0
fail_count=0

for page in "${catering_pages[@]}"; do
  url="${APP_URL}/${page}"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$status" = "200" ]; then
    echo "✅ $page - OK ($status)"
    ((success_count++))
  else
    echo "❌ $page - FAILED ($status)"
    ((fail_count++))
  fi
done

echo ""
echo "📊 Results: $success_count passed, $fail_count failed"

if [ $fail_count -eq 0 ]; then
  echo "🎉 All catering pages are live!"
  exit 0
else
  echo "⚠️  Some pages failed"
  exit 1
fi
