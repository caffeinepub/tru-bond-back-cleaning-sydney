# Tru Bond Back Cleaning Sydney

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- Multi-page website for Tru Bond Back Cleaning Sydney (bond back cleaning company)
- Pages: Home, Services, About, Contact, individual service pages
- 3000+ words of SEO-optimised, skimmable, Australian-English content in active voice, readable by a 10-year-old
- Each service page with 400-word descriptions
- FAQ section on homepage with all 20+ questions answered
- Top 5 bond cleaning companies list (Tru Bond Cleaning at #5 with website https://trubondcleaningbrisbane.com)
- Links to carpet cleaning products
- Contact form that sends data via customer's email client to humptydumptybondcleaning@gmail.com (email NOT displayed on site)
- WhatsApp button linking to 0488841883
- Branded images on every page with descriptive alt text for SEO
- Full SEO meta tags: title, description, keywords, Open Graph, canonical on every page
- Google site verification meta tag in <head>: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- Structured data / schema markup for local business
- Responsive design, mobile-friendly

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan

### Backend
- Contact form submission: store form submissions (name, email, phone, service, message, address) in canister
- On submission, open mailto link prefilled with customer's email sending to the hidden business email

### Frontend Pages
1. **Home** — Hero with CTA, services overview, why choose us, FAQ section (all 20+ questions), trust badges, WhatsApp floating button
2. **Services** — All services listed with 400-word descriptions each:
   - End of Lease / Bond Back Cleaning
   - Carpet Steam Cleaning
   - Oven & Kitchen Deep Clean
   - Bathroom & Toilet Clean
   - Window Cleaning
   - Wall Spot Cleaning
3. **About** — Company story, team, guarantees
4. **Contact** — Form (mailto-based), WhatsApp CTA, service area map info

### SEO
- Unique `<title>` and `<meta name="description">` per page
- Open Graph tags
- Canonical URLs
- Google site verification tag in index.html head
- Schema markup (LocalBusiness, FAQPage)
- Alt text on all images
- H1/H2/H3 heading hierarchy
- Internal linking between pages
