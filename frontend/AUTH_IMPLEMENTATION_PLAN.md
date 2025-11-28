# CRM Authentication Implementation Plan

## ROOT CAUSE ANALYSIS
The CRM currently has **ZERO authentication**:
- No middleware.ts to protect /crm routes
- No login page (/crm/login)
- No JWT helpers or auth utilities
- No API routes for login/logout
- User object is hardcoded: `const user = { username: 'Admin', email: 'admin@luxevenue.co.uk' }`

## FILES TO CREATE/MODIFY

### ✅ CREATE (New Files):
1. `/app/frontend/middleware.ts` - Protect all /crm/* routes
2. `/app/frontend/lib/auth/jwt.ts` - Single source of truth for JWT
3. `/app/frontend/app/crm/login/page.tsx` - Login page
4. `/app/frontend/app/api/auth/login/route.ts` - Login API
5. `/app/frontend/app/api/auth/logout/route.ts` - Logout API
6. `/app/frontend/app/api/auth/me/route.ts` - Get current user

### ✅ MODIFY (Existing Files):
7. `/app/frontend/app/crm/page.tsx` - Remove hardcoded user, fetch from session
8. `/app/frontend/app/crm/bookings/page.tsx` - Same
9. `/app/frontend/app/crm/leads/page.tsx` - Same
10. `/app/frontend/app/crm/clients/page.tsx` - Same
11. `/app/frontend/app/crm/analytics/page.tsx` - Same
12. `/app/frontend/components/crm/CRMLayout.tsx` - Add logout button

## AUTH FLOW DESIGN

### Login Flow:
1. User visits `/crm` → middleware redirects to `/crm/login`
2. User enters username/password
3. POST to `/api/auth/login`
4. Backend verifies credentials with bcrypt
5. Creates JWT with payload: `{ userId, email, username, role, exp }`
6. Sets httpOnly cookie: `luxe_crm_session`
7. Redirects to `/crm`

### Protected Route Access:
1. User visits `/crm/bookings`
2. Middleware reads `luxe_crm_session` cookie
3. Verifies JWT signature with `JWT_SECRET`
4. If valid → allow access
5. If invalid/expired → redirect to `/crm/login`

### Logout Flow:
1. User clicks Logout button
2. POST to `/api/auth/logout`
3. Clears `luxe_crm_session` cookie
4. Redirects to `/crm/login`

## SECURITY CONFIGURATION

### Cookie Settings:
```typescript
{
  httpOnly: true,           // Prevent XSS
  secure: process.env.NODE_ENV === 'production',  // HTTPS only in prod
  sameSite: 'lax',         // CSRF protection
  path: '/',               // Available to all routes
  maxAge: 7 * 24 * 60 * 60 // 7 days
}
```

### JWT Configuration:
- Algorithm: HS256
- Secret: `JWT_SECRET` from environment
- Expiry: 7 days
- Payload: `{ userId, email, username, role, exp }`

## IMPLEMENTATION STEPS

1. Create JWT helper (`lib/auth/jwt.ts`)
2. Create login API (`/api/auth/login`)
3. Create login page (`/crm/login`)
4. Create middleware.ts
5. Create logout API (`/api/auth/logout`)
6. Update all CRM pages to fetch user from session
7. Add logout button to CRMLayout
8. Test all flows

## TESTING CHECKLIST

- [ ] Can log in with valid credentials
- [ ] Cannot log in with invalid credentials
- [ ] Can access /crm routes after login
- [ ] Cannot access /crm routes without login
- [ ] Session persists on page refresh
- [ ] Logout clears session properly
- [ ] Expired tokens redirect to login
- [ ] No infinite redirect loops
- [ ] All CRM tabs work without logout
