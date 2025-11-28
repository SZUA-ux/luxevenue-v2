# LUXE VENUE - Next.js 14+ CRM & Website

Premier luxury wedding venue website and CRM system built with Next.js 14+ App Router, MongoDB, and full email automation.

## 🎯 Overview

LUXE VENUE is a complete event venue management system featuring:
- **Public Website**: 18 SEO-optimized pages for marketing
- **CRM System**: 11 protected pages for managing bookings, enquiries, clients, and leads
- **Email Automation**: Automated confirmations, notifications, and review requests
- **Blog System**: 7 SEO-optimized blog posts with ISR

## 🏗️ Architecture

**Framework**: Next.js 14.2.33 (App Router)  
**Database**: MongoDB with Mongoose ODM  
**Authentication**: JWT with HTTP-only cookies  
**Email**: Nodemailer with Gmail SMTP  
**Styling**: Tailwind CSS v3 with custom rose gold theme  
**Rendering**: SSG (static), ISR (blog), SSR (CRM)

## 📁 Project Structure

```
/app/frontend/
├── app/
│   ├── (public pages)/
│   │   ├── page.tsx                 # Homepage (SSG)
│   │   ├── about/
│   │   ├── venue/services/
│   │   ├── gallery/
│   │   ├── contact/
│   │   ├── testimonials/
│   │   ├── blog/                    # Blog index (ISR)
│   │   │   └── [slug]/              # Blog posts (ISR)
│   │   ├── wedding-venue-birmingham/
│   │   ├── nikah-venue-birmingham/
│   │   └── ... (10 SEO landing pages)
│   │
│   ├── login/                       # Auth page
│   │
│   ├── crm/ (SSR - Protected)
│   │   ├── page.tsx                 # Dashboard
│   │   ├── bookings/
│   │   ├── enquiries/
│   │   ├── clients/
│   │   ├── leads/
│   │   └── analytics/
│   │
│   ├── api/
│   │   ├── auth/                    # Login, logout, me
│   │   ├── bookings/                # CRUD + email actions
│   │   ├── enquiries/               # CRUD + convert
│   │   ├── clients/                 # CRUD
│   │   ├── leads/                   # CRUD
│   │   ├── analytics/               # Overview stats
│   │   └── blog/posts/              # Blog API
│   │
│   ├── layout.tsx
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── PublicNav.tsx                # Public navigation with mobile menu
│   ├── PublicFooter.tsx
│   └── CRMLayout.tsx                # CRM layout with sidebar
│
├── lib/
│   ├── db/connect.ts                # MongoDB connection
│   ├── auth/jwt.ts                  # JWT utilities
│   ├── email/
│   │   ├── mailer.ts                # Nodemailer setup
│   │   └── templates.ts             # Email templates
│   ├── models/                      # Mongoose models
│   │   ├── User.ts
│   │   ├── Booking.ts
│   │   ├── Enquiry.ts
│   │   ├── Client.ts
│   │   ├── Lead.ts
│   │   └── BlogPost.ts
│   ├── validators/                  # Zod schemas
│   ├── utils/seo.ts                 # SEO helpers
│   ├── seed.ts                      # Admin user seed
│   └── seed-blogs.ts                # Blog posts seed
│
├── middleware.ts                    # Route protection
├── .env.local                       # Environment variables
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB running on localhost:27017
- Gmail SMTP credentials

### Installation

1. **Install dependencies**:
```bash
cd /app/frontend
yarn install
```

2. **Configure environment** (`.env.local`):
```env
MONGODB_URI=mongodb://localhost:27017/luxe_venue_db
JWT_SECRET=your-secret-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@luxevenue.co.uk
SMTP_PASSWORD=your-smtp-password
ADMIN_EMAIL=info@luxevenue.co.uk
ADMIN_CC_EMAIL=luxevenue01@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

3. **Seed admin user**:
```bash
yarn seed
```

4. **Seed blog posts** (optional):
```bash
yarn seed:blogs
```

5. **Build and start**:
```bash
yarn build
yarn start
```

The application will be available at `http://localhost:3000`

## 🔑 Default Credentials

**Admin Account**:
- Email: `info@luxevenue.co.uk`
- Password: `Admin@LuxeVenue2024!`

⚠️ **Change the password after first login!**

## 📊 Features

### Public Website (18 Pages)
- ✅ Homepage with hero, services, testimonials
- ✅ About page with venue story
- ✅ Services page with detailed offerings
- ✅ Gallery (image placeholders)
- ✅ Contact form with email automation
- ✅ Testimonials showcase
- ✅ 10 SEO landing pages (wedding venues, Nikah, Mehndi, etc.)
- ✅ Blog system with 7 posts

### CRM System (11 Pages)
- ✅ Dashboard with KPIs
- ✅ Bookings management (list, create, edit, delete)
- ✅ Enquiries management (list, view, convert to booking)
- ✅ Clients database with booking history
- ✅ Leads tracking
- ✅ Analytics overview

### API Endpoints (30+)
- ✅ Authentication (login, logout, me)
- ✅ Bookings CRUD + email actions
- ✅ Enquiries CRUD + convert to booking
- ✅ Clients CRUD
- ✅ Leads CRUD
- ✅ Analytics overview
- ✅ Blog posts API
- ✅ Health check

### Email Automation
- ✅ Enquiry confirmation (to customer)
- ✅ Admin notification (new enquiry)
- ✅ Booking confirmation (to customer)
- ✅ Review request (post-event)
- ✅ Admin login notification

## 🎨 Design System

**Color Palette**:
- Rose Gold: #E8C4B8, #D4AF37, #C9A982
- Dark Theme: #0A0A0A, #121212, #1A1A1A
- Accents: Purple (#8B5CF6), Blue (#6366F1)

**Typography**:
- Headings: Playfair Display (serif)
- Subheadings: Montserrat (sans-serif)
- Body: Lato (sans-serif)

**Components**:
- Glassmorphism cards with backdrop blur
- Rose gold gradient buttons
- Smooth hover animations
- Mobile-responsive navigation

## 🔒 Security

- JWT tokens with 7-day expiry
- HTTP-only cookies (not accessible via JavaScript)
- Middleware route protection for /crm/*
- Password hashing with bcryptjs (12 rounds)
- Input validation with Zod schemas

## 📧 Email Configuration

All emails sent via Nodemailer with Gmail SMTP:
- **From**: LUXE VENUE LTD <info@luxevenue.co.uk>
- **Admin CC**: luxevenue01@gmail.com
- **Templates**: Professional HTML with brand styling

## 🌐 SEO Optimization

- ✅ Canonical URLs on all pages
- ✅ OpenGraph and Twitter cards
- ✅ JSON-LD schema (LocalBusiness, BreadcrumbList)
- ✅ Dynamic sitemap.xml
- ✅ robots.txt
- ✅ ISR for blog posts (revalidate every hour)
- ✅ Optimized meta descriptions and titles

## 📝 Key Business Details

- **Venue Type**: Alcohol-free, family-friendly
- **Capacity**: Up to 70 guests
- **Specialty**: Halal catering, multicultural events
- **Location**: 86 Leopold Street, Birmingham B12 0UD
- **Service Area**: Birmingham, Dudley, Wolverhampton, Walsall, West Midlands
- **Events**: Weddings, Nikah, Mehndi, birthdays, corporate

## 🛠️ Development Commands

```bash
# Development server with hot reload
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Seed admin user
yarn seed

# Seed blog posts
yarn seed:blogs

# Run linter
yarn lint
```

## 📦 Database Collections

1. **users** - Admin and staff accounts
2. **bookings** - Event bookings with payment tracking
3. **enquiries** - Contact form submissions
4. **clients** - Client relationship management
5. **leads** - Lead tracking and follow-ups
6. **blog_posts** - Blog content with SEO

## 🎯 Unique Selling Points

- **Alcohol-Free Venue**: Family-friendly environment
- **100% Halal Catering**: All ingredients halal-certified
- **Cultural Sensitivity**: Accommodates all faiths and traditions
- **Intimate Setting**: Perfect for 20-70 guests
- **Complimentary Event Planner**: Worth £400 with every booking
- **Central Location**: Birmingham city centre, B12 0UD

## 📞 Contact Information

- **Phone**: +44 7391 222884
- **Email**: info@luxevenue.co.uk
- **WhatsApp**: https://wa.me/447391222884
- **Address**: 86 Leopold Street, Birmingham B12 0UD

## ⚠️ Known Issues

**Infrastructure Issue**: Kubernetes ingress routes `/api/*` to port 8001 (stopped FastAPI backend) instead of port 3000 (Next.js app). This blocks API access via public URL. 

**Workaround**: All APIs work perfectly on localhost:3000 for development.

**Solution Needed**: Platform team must update ingress to route all requests (including `/api/*`) to Next.js on port 3000.

## 📄 License

© 2024 LUXE VENUE LTD. All rights reserved.

---

Built with ❤️ by LUXE VENUE Team
