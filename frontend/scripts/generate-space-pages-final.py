#!/usr/bin/env python3
"""
Generate space hire pages using the wedding venue template as base
"""
import os
import re

# Read the wedding venue template
with open('/app/frontend/app/wedding-venue-birmingham/page.tsx', 'r') as f:
    template = f.read()

# Define pages with their specific data
pages = [
    {
        'name': 'Theatre Rehearsal Space',
        'slug': 'venue-hire/theatre-rehearsal-space-birmingham',
        'keywords': 'theatre rehearsal space birmingham, rehearsal room hire birmingham, theatre rehearsal birmingham, rehearsal studios birmingham, drama rehearsal birmingham',
        'description': 'Professional theatre rehearsal space in Birmingham. Fully equipped drama studio with staging area, sound system, and flexible layout. Ideal for theatre companies, drama groups, and performers. From £60/hr.',
        'capacity': '70',
        'price': '£60-80/hr',
        'price_from': '£60',
        'type': 'Professional Theatre & Drama Rehearsal Studio',
        'og_title': 'Theatre Rehearsal Space Birmingham',
        'service_type': 'rehearsal space'
    },
    {
        'name': 'Comedy Night Venue',
        'slug': 'venue-hire/comedy-night-venue-birmingham',
        'keywords': 'comedy nights birmingham, comedy venue hire birmingham, stand-up comedy birmingham, comedy club birmingham, comedy events birmingham',
        'description': 'Premier comedy night venue in Birmingham. Professional stage, sound, and lighting for stand-up shows, open mic nights, and comedy events. Perfect for comedians and promoters. From £80/hr.',
        'capacity': '70',
        'price': '£80-120/hr',
        'price_from': '£80',
        'type': 'Stand-Up Comedy & Entertainment Space',
        'og_title': 'Comedy Night Venue Birmingham',
        'service_type': 'comedy venue'
    },
    {
        'name': 'Ladies Event Space',
        'slug': 'venue-hire/ladies-event-venue-birmingham',
        'keywords': 'ladies event venue birmingham, ladies night venue hire birmingham, women event space birmingham, sisters gathering birmingham, ladies gathering venue',
        'description': 'Exclusive ladies event space in Birmingham. Private venue perfect for sisters gatherings, ladies nights, women workshops, and female-only events. From £70/hr.',
        'capacity': '70',
        'price': '£70-100/hr',
        'price_from': '£70',
        'type': 'Exclusive Women Event & Sisters Gathering Venue',
        'og_title': 'Ladies Event Space Birmingham',
        'service_type': 'ladies event space'
    },
    {
        'name': 'Photo & Video Studio',
        'slug': 'venue-hire/photo-video-studio-hire-birmingham',
        'keywords': 'photo studio hire birmingham, photography studio rental birmingham, professional photo studio birmingham, video studio hire birmingham, creative studio birmingham',
        'description': 'Professional photo and video studio in Birmingham. Fully equipped creative space with lighting, backdrops, and equipment for photoshoots, video production, and content creation. From £60/hr.',
        'capacity': '20',
        'price': '£60-100/hr',
        'price_from': '£60',
        'type': 'Professional Photography & Content Creation Studio',
        'og_title': 'Photo & Video Studio Birmingham',
        'service_type': 'photo studio'
    },
    {
        'name': 'Corporate Training Space',
        'slug': 'venue-hire/corporate-event-space-birmingham',
        'keywords': 'corporate training space birmingham, training venue hire birmingham, meeting room hire birmingham, conference room birmingham, corporate event space birmingham',
        'description': 'Professional corporate training space in Birmingham. Modern facilities for workshops, meetings, training sessions, and business events. From £80/hr.',
        'capacity': '50',
        'price': '£80-120/hr',
        'price_from': '£80',
        'type': 'Professional Business Training & Workshop Venue',
        'og_title': 'Corporate Training Space Birmingham',
        'service_type': 'corporate training space'
    },
    {
        'name': 'Gender Reveal Venue',
        'slug': 'venue-hire/gender-reveal-venue-birmingham',
        'keywords': 'gender reveal venue hire birmingham, gender reveal party venue birmingham, baby shower venue birmingham, gender reveal space birmingham',
        'description': 'Beautiful gender reveal and baby shower venue in Birmingham. Perfect setting for memorable celebrations with decoration options and catering. From £80/hr.',
        'capacity': '70',
        'price': '£80-120/hr',
        'price_from': '£80',
        'type': 'Exclusive Baby Shower & Gender Reveal Space',
        'og_title': 'Gender Reveal Venue Birmingham',
        'service_type': 'gender reveal venue'
    },
    {
        'name': 'Martial Arts & Yoga Studio',
        'slug': 'venue-hire/martial-arts-yoga-studio-birmingham',
        'keywords': 'martial arts venue hire birmingham, yoga studio hire birmingham, martial arts studio birmingham, yoga space birmingham, fitness studio rental birmingham',
        'description': 'Dedicated martial arts and yoga studio in Birmingham. Sprung wooden floor, mirrors, and professional space for classes and training sessions. From £50/hr.',
        'capacity': '50',
        'price': '£50-80/hr',
        'price_from': '£50',
        'type': 'Professional Fitness & Wellness Studio Space',
        'og_title': 'Martial Arts & Yoga Studio Birmingham',
        'service_type': 'martial arts and yoga studio'
    },
    {
        'name': 'Qawali & Nasheed Venue',
        'slug': 'venue-hire/qawali-night-venue-birmingham',
        'keywords': 'qawali night venue birmingham, nasheed event birmingham, islamic event venue birmingham, halal entertainment birmingham, nasheed night hire',
        'description': 'Premier venue for Qawali nights and Nasheed events in Birmingham. Alcohol-free, halal space perfect for Islamic entertainment and cultural celebrations. From £90/hr.',
        'capacity': '70',
        'price': '£90-130/hr',
        'price_from': '£90',
        'type': 'Islamic Entertainment & Cultural Event Space',
        'og_title': 'Qawali & Nasheed Venue Birmingham',
        'service_type': 'qawali and nasheed venue'
    },
    {
        'name': 'Wellness & Meditation Studio',
        'slug': 'venue-hire/wellness-meditation-studio-birmingham',
        'keywords': 'meditation studio hire birmingham, wellness space birmingham, holistic health venue birmingham, mindfulness studio birmingham, wellbeing classes birmingham',
        'description': 'Peaceful wellness and meditation studio in Birmingham. Calm space perfect for meditation classes, mindfulness sessions, and holistic health workshops. From £45/hr.',
        'capacity': '40',
        'price': '£45-70/hr',
        'price_from': '£45',
        'type': 'Holistic Health & Mindfulness Space',
        'og_title': 'Wellness & Meditation Studio Birmingham',
        'service_type': 'wellness studio'
    },
    {
        'name': 'Dance Studio',
        'slug': 'venue-hire/dance-studio-hire-birmingham',
        'keywords': 'dance studio hire birmingham, dance rehearsal space birmingham, dance studio rental birmingham, dance practice venue birmingham, dance room hire',
        'description': 'Professional dance studio in Birmingham. Sprung floor, mirrors, and sound system perfect for dance rehearsals, classes, and choreography sessions. From £55/hr.',
        'capacity': '50',
        'price': '£55-85/hr',
        'price_from': '£55',
        'type': 'Professional Dance Rehearsal & Performance Space',
        'og_title': 'Dance Studio Hire Birmingham',
        'service_type': 'dance studio'
    },
    {
        'name': 'Networking Event Space',
        'slug': 'venue-hire/networking-event-space-birmingham',
        'keywords': 'networking venue birmingham, networking event space birmingham, business networking birmingham, corporate networking venue, professional meetup space birmingham',
        'description': 'Modern networking event space in Birmingham. Ideal for business meetups, professional networking events, and industry gatherings. From £90/hr.',
        'capacity': '70',
        'price': '£90-140/hr',
        'price_from': '£90',
        'type': 'Professional Business Networking Venue',
        'og_title': 'Networking Event Space Birmingham',
        'service_type': 'networking space'
    },
    {
        'name': 'Creative Workshop Studio',
        'slug': 'venue-hire/creative-workshop-studio-birmingham',
        'keywords': 'workshop space hire birmingham, creative studio birmingham, arts workshop venue, craft class venue birmingham, creative space rental birmingham',
        'description': 'Versatile creative workshop studio in Birmingham. Perfect for arts and crafts classes, painting workshops, and creative skill-sharing events. From £50/hr.',
        'capacity': '40',
        'price': '£50-75/hr',
        'price_from': '£50',
        'type': 'Arts & Crafts Workshop Space',
        'og_title': 'Creative Workshop Studio Birmingham',
        'service_type': 'creative workshop studio'
    }
]

base_dir = '/app/frontend/app'

for page in pages:
    content = template
    
    # Replace title
    content = re.sub(
        r"title: 'Wedding Venue Birmingham.*?'",
        f"title: '{page['og_title']} | {page['type']} | From {page['price_from']} | LUXE VENUE'",
        content
    )
    
    # Replace description
    content = re.sub(
        r"description: 'Premium wedding venue.*?'",
        f"description: '{page['description']}'",
        content
    )
    
    # Replace keywords
    content = re.sub(
        r"keywords: 'wedding venue birmingham.*?'",
        f"keywords: '{page['keywords']}'",
        content
    )
    
    # Replace OpenGraph
    content = re.sub(
        r"title: 'Wedding Venue Birmingham.*?LUXE VENUE'",
        f"title: '{page['og_title']} | LUXE VENUE'",
        content
    )
    
    content = re.sub(
        r"Birmingham's premier intimate wedding venue.*?free viewing\.'",
        f"{page['description']}'",
        content,
        flags=re.DOTALL
    )
    
    # Replace URLs
    content = re.sub(
        r"https://luxevenue\.co\.uk/wedding-venue-birmingham",
        f"https://luxevenue.co.uk/{page['slug']}",
        content
    )
    
    # Replace canonical
    content = re.sub(
        r"canonical: 'https://luxevenue\.co\.uk/wedding-venue-birmingham'",
        f"canonical: 'https://luxevenue.co.uk/{page['slug']}'",
        content
    )
    
    # Replace main heading
    content = re.sub(
        r"<span className=\"bg-gradient.*?\">.*?</span><br/>",
        f'<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">\n                  {page["name"]} Birmingham\n                </span><br/>',
        content,
        flags=re.DOTALL
    )
    
    # Replace subtitle
    content = re.sub(
        r"<span className=\"text-white text-2xl.*?\">.*?</span>",
        f'<span className="text-white text-2xl sm:text-3xl lg:text-4xl">{page["type"]}</span>',
        content
    )
    
    # Replace capacity references
    content = re.sub(r'70 guest capacity', f'{page["capacity"]} capacity', content)
    content = re.sub(r'up to 70 guests', f'up to {page["capacity"]} guests', content)
    content = re.sub(r'for 70 guests', f'for {page["capacity"]} guests', content)
    content = re.sub(r'accommodates up to 70', f'accommodates up to {page["capacity"]}', content)
    
    # Replace wedding-specific terms
    content = re.sub(r'wedding venue', page['service_type'], content, flags=re.I)
    content = re.sub(r'Wedding Venue', page['name'], content)
    content = re.sub(r'weddings', 'events', content, flags=re.I)
    content = re.sub(r'Wedding', page['name'], content)
    
    # Replace pricing
    content = re.sub(r'£1,500', page['price_from'], content)
    content = re.sub(r'£15-35 per person', page['price'], content)
    
    # Create directory
    dir_path = os.path.join(base_dir, page['slug'])
    os.makedirs(dir_path, exist_ok=True)
    
    # Write file
    file_path = os.path.join(dir_path, 'page.tsx')
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"✅ Generated: {file_path}")

print(f"\n🎉 Total: {len(pages)} specialized space/activity hire pages generated")
