# Tru Bond Back Cleaning Sydney

## Current State
- Full website exists with Home, Services (6 pages), About, and Contact pages
- SEOHead component handles title, meta description, OG, Twitter, canonical, and JSON-LD schema
- content.ts has `serviceAreas` array with 20 Sydney suburbs
- App.tsx uses TanStack Router with fixed routes
- Home page has trust badges, services grid, FAQ, pricing, how-it-works sections

## Requested Changes (Diff)

### Add
- A `SuburbPage.tsx` page component — one dynamic page per suburb at `/suburbs/:slug`
- A `suburbs.ts` data file with 20 suburb entries: slug, name, postcode, ~400-word SEO-optimised content (Australian English, active voice, readable by a 10-year-old), meta title, meta description, and JSON-LD LocalBusiness schema per suburb
- Route `/suburbs/:slug` in App.tsx
- A "Service Areas" section on the Home page (below the FAQ section) with an internal link grid to all 20 suburb pages (for SEO internal linking)
- Footer update to include suburb links for crawlability

### Modify
- App.tsx: add `suburbRoute` for `/suburbs/:slug`
- HomePage.tsx: add a "We Clean Your Suburb" section with 20 suburb link cards
- Footer.tsx: add a "Suburbs We Serve" column with links to all suburb pages

### Remove
- Nothing removed

## Implementation Plan
1. Create `/src/data/suburbs.ts` with 20 suburb entries including slug, postcode, content (400 words, Australian English, active voice, simple language), meta title, meta description
2. Create `/src/pages/SuburbPage.tsx` — displays suburb-specific content, JSON-LD LocalBusiness schema, CTAs (WhatsApp + Get Quote), internal links back to home and services
3. Update `App.tsx` to add suburb route at `/suburbs/:slug`
4. Update `HomePage.tsx` to add "Areas We Serve" grid section with links to all suburb pages
5. Update `Footer.tsx` to add suburbs column with links
6. Validate build
