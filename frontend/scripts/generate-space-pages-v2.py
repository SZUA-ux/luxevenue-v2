#!/usr/bin/env python3
"""
Generate space hire pages by adapting the working catering template
"""
import os
import re

# Read the working catering template
with open('/app/frontend/app/catering/pakistani-catering-birmingham/page.tsx', 'r') as f:
    template = f.read()

# Define pages with their specific data
pages = [
    {
        'name': 'Theatre Rehearsal Space',
        'slug': 'venue-hire/theatre-rehearsal-space-birmingham',
        'keywords': 'theatre rehearsal space birmingham, rehearsal room hire birmingham, theatre rehearsal birmingham, rehearsal studios birmingham, drama rehearsal birmingham',
        'description': 'Professional theatre rehearsal space in Birmingham. Fully equipped drama studio with staging area, sound system, and flexible layout. Ideal for theatre companies, drama groups, and performers.',
        'capacity': '70',
        'price': '£60-80/hr',
        'type': 'Professional Theatre & Drama Rehearsal Studio'
    },
    {
        'name': 'Comedy Night Venue',
        'slug': 'venue-hire/comedy-night-venue-birmingham',
        'keywords': 'comedy nights birmingham, comedy venue hire birmingham, stand-up comedy birmingham, comedy club birmingham, comedy events birmingham',
        'description': 'Premier comedy night venue in Birmingham. Professional stage, sound, and lighting for stand-up shows, open mic nights, and comedy events. Perfect for comedians and promoters.',
        'capacity': '70',
        'price': '£80-120/hr',
        'type': 'Stand-Up Comedy & Entertainment Space'
    },
    {
        'name': 'Ladies Event Space',
        'slug': 'venue-hire/ladies-event-venue-birmingham',
        'keywords': 'ladies event venue birmingham, ladies night venue hire birmingham, women event space birmingham, sisters gathering birmingham, ladies gathering venue',
        'description': 'Exclusive ladies event space in Birmingham. Private venue perfect for sisters gatherings, ladies nights, women workshops, and female-only events in a comfortable setting.',
        'capacity': '70',
        'price': '£70-100/hr',
        'type': 'Exclusive Women Event & Sisters Gathering Venue'
    },
    {
        'name': 'Photo & Video Studio Hire',
        'slug': 'venue-hire/photo-video-studio-hire-birmingham',
        'keywords': 'photo studio hire birmingham, photography studio rental birmingham, professional photo studio birmingham, video studio hire birmingham, creative studio birmingham',
        'description': 'Professional photo and video studio in Birmingham. Fully equipped creative space with lighting, backdrops, and equipment for photoshoots, video production, and content creation.',
        'capacity': '20',
        'price': '£60-100/hr',
        'type': 'Professional Photography & Content Creation Studio'
    },
    {
        'name': 'Corporate Training Space',
        'slug': 'venue-hire/corporate-event-space-birmingham',
        'keywords': 'corporate training space birmingham, training venue hire birmingham, meeting room hire birmingham, conference room birmingham, corporate event space birmingham',
        'description': 'Professional corporate training space in Birmingham. Modern facilities for workshops, meetings, training sessions, and business events with presentation equipment and catering options.',
        'capacity': '50',
        'price': '£80-120/hr',
        'type': 'Professional Business Training & Workshop Venue'
    },
    {
        'name': 'Gender Reveal Party Venue',
        'slug': 'venue-hire/gender-reveal-venue-birmingham',
        'keywords': 'gender reveal venue hire birmingham, gender reveal party venue birmingham, baby shower venue birmingham, gender reveal space birmingham',
        'description': 'Beautiful gender reveal and baby shower venue in Birmingham. Perfect setting for memorable celebrations with decoration options, catering, and photo opportunities.',
        'capacity': '70',
        'price': '£80-120/hr',
        'type': 'Exclusive Baby Shower & Gender Reveal Space'
    },
    {
        'name': 'Martial Arts & Yoga Studio',
        'slug': 'venue-hire/martial-arts-yoga-studio-birmingham',
        'keywords': 'martial arts venue hire birmingham, yoga studio hire birmingham, martial arts studio birmingham, yoga space birmingham, fitness studio rental birmingham',
        'description': 'Dedicated martial arts and yoga studio in Birmingham. Sprung wooden floor, mirrors, and professional space for classes, workshops, and training sessions.',
        'capacity': '50',
        'price': '£50-80/hr',
        'type': 'Professional Fitness & Wellness Studio Space'
    },
    {
        'name': 'Qawali & Nasheed Night Venue',
        'slug': 'venue-hire/qawali-night-venue-birmingham',
        'keywords': 'qawali night venue birmingham, nasheed event birmingham, islamic event venue birmingham, halal entertainment birmingham, nasheed night hire',
        'description': 'Premier venue for Qawali nights and Nasheed events in Birmingham. Alcohol-free, halal-certified space perfect for Islamic entertainment, cultural celebrations, and religious gatherings.',
        'capacity': '70',
        'price': '£90-130/hr',
        'type': 'Islamic Entertainment & Cultural Event Space'
    },
    {
        'name': 'Wellness & Meditation Studio',
        'slug': 'venue-hire/wellness-meditation-studio-birmingham',
        'keywords': 'meditation studio hire birmingham, wellness space birmingham, holistic health venue birmingham, mindfulness studio birmingham, wellbeing classes birmingham',
        'description': 'Peaceful wellness and meditation studio in Birmingham. Calm, serene space perfect for meditation classes, mindfulness sessions, yoga therapy, and holistic health workshops.',
        'capacity': '40',
        'price': '£45-70/hr',
        'type': 'Holistic Health & Mindfulness Space'
    },
    {
        'name': 'Dance Studio Hire',
        'slug': 'venue-hire/dance-studio-hire-birmingham',
        'keywords': 'dance studio hire birmingham, dance rehearsal space birmingham, dance studio rental birmingham, dance practice venue birmingham, dance room hire',
        'description': 'Professional dance studio in Birmingham. Sprung floor, mirrors, and sound system perfect for dance rehearsals, classes, choreography sessions, and performances.',
        'capacity': '50',
        'price': '£55-85/hr',
        'type': 'Professional Dance Rehearsal & Performance Space'
    },
    {
        'name': 'Networking Event Space',
        'slug': 'venue-hire/networking-event-space-birmingham',
        'keywords': 'networking venue birmingham, networking event space birmingham, business networking birmingham, corporate networking venue, professional meetup space birmingham',
        'description': 'Modern networking event space in Birmingham. Ideal for business meetups, professional networking events, industry gatherings, and corporate mixers with flexible layout.',
        'capacity': '70',
        'price': '£90-140/hr',
        'type': 'Professional Business Networking Venue'
    },
    {
        'name': 'Creative Workshop Studio',
        'slug': 'venue-hire/creative-workshop-studio-birmingham',
        'keywords': 'workshop space hire birmingham, creative studio birmingham, arts workshop venue, craft class venue birmingham, creative space rental birmingham',
        'description': 'Versatile creative workshop studio in Birmingham. Perfect for arts and crafts classes, painting workshops, DIY sessions, and creative skill-sharing events.',
        'capacity': '40',
        'price': '£50-75/hr',
        'type': 'Arts & Crafts Workshop Space'
    }
]

base_dir = '/app/frontend/app'

for page in pages:
    # Start with template and replace key sections
    content = template
    
    # Replace title and metadata
    content = re.sub(
        r"title: '.*?'",
        f"title: '{page['name']} Birmingham | {page['type']} | From {page['price']} | LUXE VENUE'",
        content
    )
    
    content = re.sub(
        r"description: 'Authentic .*?'",
        f"description: '{page['description']}'",
        content
    )
    
    content = re.sub(
        r"keywords: '.*?'",
        f"keywords: '{page['keywords']}'",
        content
    )
    
    content = re.sub(
        r"canonical: 'https://luxevenue.co.uk/.*?'",
        f"canonical: 'https://luxevenue.co.uk/{page['slug']}'",
        content
    )
    
    content = re.sub(
        r"url: 'https://luxevenue.co.uk/.*?'",
        f"url: 'https://luxevenue.co.uk/{page['slug']}'",
        content, count=5
    )
    
    # Replace function name
    content = re.sub(
        r"export default function \w+\(\)",
        f"export default function {page['name'].replace(' ', '').replace('&', '')}Page()",
        content
    )
    
    # Replace schema names
    content = re.sub(
        r"name: 'LUXE VENUE - .*? Birmingham'",
        f"name: 'LUXE VENUE - {page['name']} Birmingham'",
        content, count=5
    )
    
    # Replace hero heading
    content = re.sub(
        r"<h1 className=\"text-5xl.*?</h1>",
        f'''<h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-gold-light via-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
                {page['name']} Birmingham
              </span>
            </h1>''',
        content,
        flags=re.DOTALL
    )
    
    # Replace capacity references (20-200 -> actual capacity)
    content = re.sub(r'20-200', page['capacity'], content)
    
    # Replace price
    content = re.sub(r'£15-25pp', page['price'], content)
    content = re.sub(r'£15pp', page['price'].split('-')[0], content)
    content = re.sub(r'£20pp', page['price'].split('-')[0], content)
    content = re.sub(r'£25pp', page['price'].split('-')[0], content)
    content = re.sub(r'£30pp', page['price'].split('-')[0], content)
    
    # Replace "catering" with "venue hire" in certain contexts
    content = re.sub(r'pakistani catering', page['name'].lower(), content, flags=re.I)
    content = re.sub(r'Pakistani Catering', page['name'], content)
    content = re.sub(r'Authentic Halal Pakistani & Indian Cuisine', page['type'], content)
    
    # Create directory
    dir_path = os.path.join(base_dir, page['slug'])
    os.makedirs(dir_path, exist_ok=True)
    
    # Write file
    file_path = os.path.join(dir_path, 'page.tsx')
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"✅ Generated: {file_path}")

print(f"\n🎉 Total: {len(pages)} specialized space/activity hire pages generated")
