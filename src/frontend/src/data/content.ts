// ─── Services Data ──────────────────────────────────────────────────────────
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  priceRange: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "end-of-lease",
    slug: "end-of-lease-cleaning",
    title: "End of Lease / Bond Back Cleaning",
    shortDescription:
      "Our most popular service. We clean your entire property from top to bottom using a real estate-approved checklist — so you get every dollar of your bond back.",
    fullDescription: `Moving out of a rental property in Sydney can feel overwhelming. Between packing boxes, organising removalists, and sorting paperwork, the last thing you want to stress about is getting your property spotless enough to pass the final real estate inspection. That's exactly where Tru Bond Cleaning steps in.

**What Is End of Lease Cleaning?**

End of lease cleaning — also known as bond back cleaning, vacate cleaning, or exit cleaning — is a thorough, top-to-bottom clean of your rental property when you move out. In NSW, the Residential Tenancies Act 2010 requires tenants to leave the property in a reasonably clean condition, consistent with how it was when you first moved in (fair wear and tear excepted). If you don't meet that standard, your landlord or property manager can legally use your bond to pay for professional cleaning.

**What's Included in Our Bond Back Clean?**

Our end of lease cleaning service in Sydney covers every inch of your property:

- **Kitchen**: Deep clean inside the oven, rangehood, stovetop, all cupboards (inside and out), benchtops, splashback, and sink
- **Bathrooms**: Full scrub of tiles, grout, shower screens, toilet (inside and out), taps, mirrors, exhaust fans, and benchtops
- **Bedrooms and Living Areas**: Vacuuming all floors and carpets, mopping hard floors, dusting ceiling fans, light fittings, blinds, and skirting boards
- **Windows**: Clean inside and outside (ground floor), tracks, frames, and fly screens
- **Walls**: Spot clean all visible marks, scuffs, and fingerprints
- **General**: Wipe down all light switches, power points, door handles, and internal doors

**Why You Need It in NSW**

Sydney real estate agents use detailed inspection checklists. If even a few items don't pass, they can issue a breach notice and deduct cleaning costs from your bond. With bonds averaging $2,000–$8,000 in Sydney, that's a risk you don't want to take. Our team follows the exact checklists used by major Sydney real estate agencies, so nothing gets missed.

**How Much Does It Cost?**

Bond cleaning in Sydney typically ranges from $250 for a studio apartment to $600+ for a large family home. At Tru Bond Cleaning, we give you a transparent, upfront quote — no hidden fees, no nasty surprises. The final price depends on the size of the property and any extra services like carpet steam cleaning or pest control.

**Our Satisfaction Guarantee**

We stand behind our work with a 100% Bond Back Guarantee. If your real estate agent finds anything we missed, we come back and re-clean it for free within 72 hours. No arguments, no fuss. Just message us on WhatsApp and we'll sort it out straight away.

**How to Book**

Booking is easy! Just WhatsApp us at 0488841883 or fill in our online quote form. We offer same-day and weekend bookings across all Sydney suburbs including Parramatta, Bondi, Newtown, Chatswood, Liverpool, and more. Don't lose your bond — let Tru Bond Cleaning handle it.`,
    image: "/assets/generated/end-of-lease-cleaning-sydney.dim_800x500.jpg",
    imageAlt:
      "End of lease bond back cleaning service Sydney kitchen - Tru Bond Cleaning",
    keywords: [
      "end of lease cleaning Sydney",
      "bond back cleaning Sydney",
      "vacate cleaning Sydney",
      "exit cleaning Sydney NSW",
    ],
    priceRange: "$250 – $600+",
    icon: "🏠",
  },
  {
    id: "carpet-steam",
    slug: "carpet-steam-cleaning",
    title: "Carpet Steam Cleaning",
    shortDescription:
      "Professional hot water extraction removes deep-set dirt, pet hair, stains, and allergens — leaving your carpets fresh, fluffy, and landlord-ready.",
    fullDescription: `Dirty or stained carpets are one of the top reasons tenants lose part of their bond in Sydney. Most real estate agents specifically require professional carpet steam cleaning as part of the end of lease process — a DIY vacuum just won't cut it. Tru Bond Cleaning uses industrial-grade hot water extraction equipment to deliver results that meet and exceed real estate inspection standards.

**What Is Carpet Steam Cleaning?**

Carpet steam cleaning — more accurately called hot water extraction — uses high-pressure hot water mixed with a professional cleaning solution, injected deep into your carpet fibres. A powerful extraction system then pulls out the water along with all the loosened dirt, dust, allergens, bacteria, pet hair, and stains. The result is a carpet that looks, smells, and feels brand new.

**Why Do You Need It for Your Bond Clean?**

Under NSW's standard tenancy agreements, tenants are required to have carpets professionally cleaned when vacating if they were professionally cleaned at the start of the lease. Many property managers request a receipt as proof. Even if your carpets look clean to the naked eye, deep-set allergens, pet odours, and embedded grime can fail a thorough inspection. Our professional service comes with a receipt you can hand to your property manager.

**What We Remove**

Our carpet steam cleaning service tackles:
- Deep-set dirt and dust embedded in carpet fibres
- Pet hair, pet stains, and pet odours
- Food and drink stains (coffee, red wine, juice)
- Mud, grease, and general foot traffic grime
- Dust mites and allergens that trigger asthma and hay fever
- Mould and mildew in high-moisture areas

**Eco-Friendly, Fast-Drying Solutions**

We use biodegradable, non-toxic cleaning solutions that are safe for kids and pets. Our high-extraction process removes most of the moisture, so carpets typically dry within 2–4 hours — much faster than older cleaning methods. We can usually schedule carpet cleaning on the same day as your bond clean to save you time.

**Pricing and Coverage**

Carpet steam cleaning in Sydney is priced per room, typically $35–$60 per room. Stairs, hallways, and walk-in wardrobes are priced separately. We cover all Sydney suburbs and can combine carpet cleaning with our full bond back clean for a discounted package.

**Book Today**

Stop stressing about your carpets and let Tru Bond Cleaning handle it. WhatsApp us at 0488841883 or book online. We bring all the equipment — all you need to do is let us in. We service Parramatta, Blacktown, Liverpool, Bondi, Chatswood, Manly, Randwick, and all surrounding Sydney areas.`,
    image: "/assets/generated/carpet-steam-cleaning-sydney.dim_800x500.jpg",
    imageAlt:
      "Professional carpet steam cleaning service Sydney - Tru Bond Cleaning",
    keywords: [
      "carpet cleaning Sydney",
      "carpet steam cleaning Sydney",
      "end of lease carpet cleaning",
    ],
    priceRange: "$35 – $60 per room",
    icon: "🧹",
  },
  {
    id: "oven-kitchen",
    slug: "oven-kitchen-cleaning",
    title: "Oven & Kitchen Deep Cleaning",
    shortDescription:
      "Grease and grime don't stand a chance. We deep clean your oven inside and out, rangehood, stovetop, cupboards, benchtops, and sink until they sparkle.",
    fullDescription: `The kitchen is the hardest room to clean in any rental property — and it's the first room real estate agents check during their final inspection. Months or years of cooking build up layers of grease, burnt food, and grime that regular household cleaning products simply can't shift. Tru Bond Cleaning's professional kitchen and oven deep cleaning service uses industry-grade degreasers to make your kitchen look brand new.

**Why Kitchens Fail Bond Inspections**

Real estate agents in Sydney inspect kitchens with a fine-tooth comb. Common failure points include:
- Burnt residue and grease inside the oven cavity and on oven racks
- Grease buildup inside and underneath the rangehood filter
- Stovetop burners caked with burnt food residue
- Sticky, greasy cupboard interiors and door fronts
- Limescale and food deposits in the sink and around the tap
- Splashback grease and food stains
- Dirty fridge (if included in the tenancy)

Our team knows exactly what agents look for, and we clean every single one of these areas — thoroughly.

**What's Included in Our Kitchen Clean**

Our oven and kitchen deep cleaning covers:
- **Oven**: Full interior clean including cavity walls, ceiling, door glass (inside and out), racks, and drip trays. We use professional-grade caustic degreasers to dissolve even the most stubborn baked-on grease
- **Rangehood**: Degrease filters (soaked and cleaned), wipe down interior cavity, clean exterior
- **Stovetop**: Clean all burners, grates, and surrounding surface
- **Benchtops and Splashback**: Full wipe-down and sanitise
- **Cupboards**: Inside and out — shelves, door fronts, handles
- **Sink and Tap**: Descale, scrub, and polish
- **Dishwasher**: Clean interior and wipe down exterior (if applicable)
- **Fridge**: Clean interior shelves and drawers, wipe exterior (if included in quote)

**Professional-Grade Degreasers**

We don't use the same products you buy at the supermarket. Our professional degreasers break down burnt grease and carbon buildup that consumer products can't touch. They're powerful yet safe — we ventilate the area properly and ensure no residue remains after rinsing.

**Real Estate Inspection Ready**

After our kitchen clean, your oven, stovetop, rangehood, and all cupboards will be inspection-ready. We guarantee it — if your agent finds anything we missed, we come back and fix it free of charge within 72 hours.

**Book Your Kitchen Clean**

A thorough kitchen clean typically takes 2–4 hours depending on the size and condition. Contact us on WhatsApp at 0488841883 for an upfront quote. Combine with our full bond back cleaning service for the best value.`,
    image: "/assets/generated/oven-kitchen-cleaning-sydney.dim_800x500.jpg",
    imageAlt:
      "Deep oven and kitchen cleaning service Sydney - Tru Bond Cleaning",
    keywords: [
      "oven cleaning Sydney",
      "kitchen cleaning Sydney bond",
      "deep kitchen clean Sydney",
    ],
    priceRange: "$80 – $180",
    icon: "🍳",
  },
  {
    id: "bathroom",
    slug: "bathroom-cleaning",
    title: "Bathroom & Toilet Deep Cleaning",
    shortDescription:
      "We remove soap scum, limescale, and mould from tiles, grout, shower screens, and toilets — leaving every bathroom sparkling clean for inspection.",
    fullDescription: `Bathrooms are the second most scrutinised room during a bond inspection in Sydney. Soap scum, limescale, mould, and grime accumulate quickly and are notoriously difficult to remove without the right tools and products. Tru Bond Cleaning's professional bathroom and toilet cleaning service tackles everything — leaving your bathrooms spotless and inspection-ready.

**Why Bathrooms Fail Bond Inspections**

Sydney real estate agents check bathrooms carefully for these common issues:
- White or grey soap scum on shower screens, tiles, and taps
- Brown or orange limescale deposits on shower heads, taps, and around the base of toilets
- Black or green mould growing in grout lines, silicone seals, and corners
- Dirty, stained toilet bowls, under the rim, and around the base
- Dusty exhaust fans clogged with fluff and grime
- Streaky mirrors and smeared vanity glass
- Calcium deposits on tiles and shower floors

Ignoring these issues can cost you hundreds of dollars from your bond. Our team treats every bathroom like it's a show home.

**What's Included in Our Bathroom Clean**

Our comprehensive bathroom cleaning service covers:
- **Shower and Bath**: Full scrub of tiles, grout lines, shower screens, shower base, and bath (if applicable). We use acid-based limescale removers for stubborn calcium deposits
- **Toilet**: Inside bowl (including under the rim), exterior, cistern lid, seat and hinge, and around the base
- **Vanity and Sink**: Scrub basin, taps, and benchtop; remove limescale from tap spouts
- **Mirrors**: Streak-free clean using glass cleaner and microfibre
- **Exhaust Fan**: Vacuum and wipe grille to remove dust and fluff buildup
- **Tiles and Grout**: Full wall tile wipe-down; grout scrubbing to remove mould and discolouration
- **Floor**: Mop and scrub floor tiles, paying attention to corners and grout lines
- **Towel Rails, Toilet Roll Holders, and Fixtures**: Wipe down and polish all metal fixtures

**Mould Treatment**

Mould is a serious issue in Sydney bathrooms, particularly in older buildings with poor ventilation. We apply professional mould treatment products that kill mould at the root — not just wipe the surface. This gives you a clean that lasts and prevents re-growth.

**Safe Products**

All our bathroom cleaning products are powerful but safe. We use appropriate protective equipment and ventilate the area after applying strong cleaners. Once we rinse and dry, there's no chemical residue left behind.

**Book Your Bathroom Clean**

One bathroom typically takes 45–90 minutes to clean professionally. Most bond cleans include 1–2 bathrooms as standard. Additional bathrooms and ensuites are quoted separately. Contact us on WhatsApp at 0488841883 or fill in our online form for a free quote.`,
    image: "/assets/generated/bathroom-cleaning-sydney.dim_800x500.jpg",
    imageAlt:
      "Professional bathroom and toilet cleaning Sydney - Tru Bond Cleaning",
    keywords: [
      "bathroom cleaning Sydney",
      "bond clean bathroom Sydney",
      "toilet cleaning Sydney",
    ],
    priceRange: "$60 – $120 per bathroom",
    icon: "🚿",
  },
  {
    id: "window",
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortDescription:
      "Streak-free windows inside and out. We clean glass, frames, tracks, and fly screens for a crystal-clear finish that impresses at final inspection.",
    fullDescription: `Clean windows make an enormous difference to how a property looks at inspection. Dirty, streaky, or grimy windows are immediately noticeable and give a bad overall impression — even if the rest of the property is spotless. Tru Bond Cleaning provides a professional window cleaning service as part of our bond back cleaning packages across Sydney.

**Why Window Cleaning Matters for Your Bond**

Real estate agents and property managers in Sydney check windows both from inside and outside the property. Common issues they look for include:
- Fingerprints and smudges on the glass
- Dust and grime on window frames and sills
- Dirty, grimy window tracks (often black with mould and dirt)
- Fly screens clogged with dust, insects, and cobwebs
- Water spots and limescale on glass (particularly in bathrooms)
- Streaky cleaning marks left by DIY attempts

Even one or two dirty windows can lead to a re-clean requirement from your property manager. Let us handle it properly the first time.

**What's Included in Our Window Cleaning Service**

Our professional window cleaning covers:
- **Glass Panels**: Full clean of interior and exterior glass (ground floor and accessible upper floor windows) using professional squeegees and streak-free window cleaning solution
- **Window Frames and Sills**: Wipe down all PVC, aluminium, or timber frames and sills to remove dust, mould, and grime
- **Window Tracks**: Scrub and vacuum window tracks — these get very dirty and are always checked at inspection
- **Fly Screens**: Remove screens, wash both sides, and replace
- **Sliding Door Glass**: Full clean of glass panels, frames, and tracks on sliding doors and balcony doors

**Our Technique**

We use a professional two-step process: first applying a diluted window cleaning solution to dissolve dirt and smears, then removing it with a professional rubber squeegee in overlapping strokes. This gives a perfectly streak-free finish every time. We finish with a dry microfibre edge wipe to remove any drips from frames.

**Height and Safety**

We clean all ground-floor and easily accessible windows as standard. For upper-floor windows, we use extension poles that allow us to reach safely from the ground or a step ladder. We do not use ladders above one storey for safety reasons — please discuss upper-level window access requirements when booking.

**Pricing**

Window cleaning is typically included in our full bond back cleaning packages. For standalone window cleaning, prices start from $80 for a small apartment and increase based on the number of windows, their size, and condition. Contact us for an upfront quote with no hidden fees.`,
    image: "/assets/generated/window-cleaning-sydney.dim_800x500.jpg",
    imageAlt: "Window cleaning service Sydney apartment - Tru Bond Cleaning",
    keywords: [
      "window cleaning Sydney bond clean",
      "window cleaning Sydney",
      "bond window cleaning Sydney",
    ],
    priceRange: "$80 – $200",
    icon: "🪟",
  },
  {
    id: "wall-spot",
    slug: "wall-spot-cleaning",
    title: "Wall Spot Cleaning",
    shortDescription:
      "We safely remove scuff marks, fingerprints, crayon, and light stains from walls using paint-safe methods — a detail that makes a real difference at inspection.",
    fullDescription: `Walls accumulate marks, scuffs, and stains over the course of a tenancy — especially in homes with kids or pets. While normal wear and tear is expected by landlords, obvious marks, fingerprints, crayon drawings, food splatters, and scuff marks are not. Tru Bond Cleaning's wall spot cleaning service removes these blemishes using paint-safe methods, giving your property a noticeably cleaner look at final inspection.

**What Counts as Normal Wear and Tear?**

Under NSW's Residential Tenancies Act, landlords can only claim for damage that goes beyond normal wear and tear. However, the line can be grey — and a dirty wall full of scuff marks and fingerprints is unlikely to be accepted as "normal." Our wall spot cleaning removes the obvious stuff so that even strict real estate agents can't raise a complaint.

**What We Clean From Walls**

Our wall spot cleaning service addresses:
- **Scuff marks**: Black and grey marks from shoes, furniture, and bags rubbing against walls
- **Fingerprints and handprints**: Oils from hands show up especially clearly on light-coloured walls
- **Food and drink splatters**: Grease, sauce, coffee, and food residue on kitchen and dining room walls
- **Crayon and pencil marks**: Common in children's bedrooms — we have effective methods to remove these safely
- **Light stains**: General discolouration and smears on walls
- **Sticky residue**: From tape, stickers, and BluTack — we remove the residue as well as the marks left behind

**Our Paint-Safe Methods**

We don't just scrub walls with any old product — harsh cleaners can strip paint, create shiny patches, or make the wall look worse. We use a combination of techniques depending on the paint type:
- Mild sugar soap solution applied with a soft sponge (effective on most paints)
- Magic eraser (melamine foam) for scuffs on semi-gloss and gloss paint
- Specialist spot removers for grease and food stains
- Isopropyl alcohol for sticky adhesive residue

We always test on an inconspicuous area first and work gently to preserve the paint finish.

**Limitations**

Wall spot cleaning removes marks and stains — it does not repaint walls. Deep gouges, holes from nails or anchors, permanent paint stains (e.g. from paint or dye), and large areas of worn paint are beyond the scope of spot cleaning and may require repainting. We'll let you know during our quote if we think a wall needs more than spot cleaning.

**Why It Makes a Real Difference**

Agents and landlords notice walls. A freshly spot-cleaned property feels cared for and clean — it creates a positive impression that can influence the entire inspection. Combined with a full bond back clean, our wall spot cleaning service gives your property the best possible chance of passing first time.

**Book Wall Spot Cleaning**

Wall spot cleaning is included in our comprehensive bond back cleaning packages. For standalone service or if you need specific walls cleaned, contact us on WhatsApp at 0488841883 for a free quote.`,
    image: "/assets/generated/wall-cleaning-sydney.dim_800x500.jpg",
    imageAlt: "Wall spot cleaning service Sydney - Tru Bond Cleaning",
    keywords: [
      "wall cleaning Sydney bond",
      "wall spot cleaning Sydney",
      "scuff mark removal Sydney",
    ],
    priceRange: "Included in bond clean",
    icon: "🧽",
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is Bond Cleaning and why is it required?",
    answer:
      "Bond cleaning (also called end of lease cleaning or vacate cleaning) is a thorough clean of a rental property when a tenant moves out. In NSW, the Residential Tenancies Act 2010 requires tenants to return the property in the same condition as when they moved in (fair wear and tear excepted). If the property is not clean, your landlord or property manager can use your bond money to pay for professional cleaning. Bond cleaning is not just a good idea — it's often a legal requirement to get your full deposit back. The bond is typically 4 weeks' rent, so it's worth getting right.",
  },
  {
    question: "Why is bond cleaning important?",
    answer:
      "Bond cleaning is important because it directly affects whether you get your bond back. In NSW, bonds are typically 4 weeks' rent — that could be $2,000 to $8,000 or more. A proper bond clean means your real estate agent ticks off every item on their inspection checklist. Skipping it or doing a half-job can cost you hundreds or even thousands of dollars. Professional cleaners like Tru Bond Cleaning know exactly what real estate agents look for and won't miss a thing.",
  },
  {
    question: "How much does a bond clean cost in Sydney?",
    answer:
      "Bond cleaning in Sydney typically costs between $250 and $600 for a standard 2–3 bedroom apartment. Larger homes or properties needing extras like carpet cleaning, pest control, or balcony cleaning cost more. At Tru Bond Cleaning, we offer transparent pricing with no hidden fees. Here's a rough guide: Studio/1 bed ($180–$280), 2 bed apartment ($250–$380), 3 bed house ($350–$500), 4+ bed house ($450–$700+). Get a free quote by contacting us on WhatsApp at 0488841883.",
  },
  {
    question: "What is full bond cleaning?",
    answer:
      "Full bond cleaning means cleaning every single part of the property from top to bottom — kitchens (inside oven, rangehood, all cupboards), bathrooms (tiles, grout, shower screens, toilet), all bedrooms and living areas (vacuuming, mopping, dusting), windows (inside and outside ground floor), walls (spot clean marks), skirtings, light fittings, and more. It follows the specific checklist your real estate agent uses at final inspection, so nothing gets missed.",
  },
  {
    question:
      "Which are the top rated bond cleaning companies near me in Sydney?",
    answer: `Here are 5 top-rated bond cleaning companies serving Sydney tenants:

**1. Pristine Home** (pristinehome.com.au) — A leading Sydney cleaning company offering comprehensive end of lease cleaning services with a satisfaction guarantee. Known for reliable service and experienced cleaners across all Sydney suburbs. They cover residential and commercial properties with attention to detail.

**2. Bond Cleaning in Sydney** (bondcleaninginsydney.com.au) — Specialists in bond and end of lease cleaning across greater Sydney. They offer a bond back guarantee and work to real estate checklists. Popular choice among tenants in inner-city suburbs and the north shore.

**3. Cleaning Exec Sydney** (cleaningexec.com) — Professional cleaning service covering Sydney metro area. Offers bond cleaning, regular cleaning, and move-out cleaning with online booking. Trusted by thousands of Sydney renters for getting bonds back hassle-free.

**4. Jim's Cleaning Sydney** (jimscleaning.com.au) — Part of Australia's largest home services network. Jim's Cleaning offers bond cleaning services across all Sydney suburbs with fully trained, police-checked staff. Their franchise model ensures consistent quality and accountability.

**5. Tru Bond Cleaning** (trubondcleaningbrisbane.com) — A dedicated bond back cleaning specialist with a strong track record of helping tenants get their full bond returned. Tru Bond Cleaning uses real estate-approved checklists and guarantees their work. Available across Sydney with flexible booking options including weekends. Friendly local team with transparent pricing and a genuine commitment to customer satisfaction. Highly recommended for anyone wanting a stress-free moving experience.`,
  },
  {
    question: "Which cleaning products are best for bond cleaning?",
    answer:
      "Professional cleaners use industry-grade products that are safe but powerful. The best products for bond cleaning include: Selleys Sugar Soap (excellent for washing walls and removing grease and grime), CLR — Calcium Lime Rust remover (brilliant for taps, shower heads, and limescale on tiles), Goo Gone (removes sticky residue, sticker marks, and adhesive), Exit Mould spray (kills mould and mildew in bathrooms and grout lines), and Mr Muscle Oven Cleaner (heavy-duty degreaser for oven interiors). For general surfaces, microfibre cloths and steam cleaners are highly effective.",
  },
  {
    question: "How much does professional bond cleaning typically cost?",
    answer:
      "Professional bond cleaning in Sydney typically costs: Studio/1 bedroom ($180–$280), 2 bedroom apartment ($250–$380), 3 bedroom house ($350–$500), 4+ bedroom house ($450–$700+). Carpet steam cleaning usually adds $35–$60 per room. Oven cleaning adds $50–$80. These prices vary based on property condition and what's included. At Tru Bond Cleaning, we provide upfront quotes with no surprises. Contact us on WhatsApp for a free, no-obligation quote.",
  },
  {
    question: "What products are best for bond cleaning carpets?",
    answer:
      "For carpet cleaning, professional hot water extraction (steam cleaning) gives the best results. Products to look for: Bissell Professional Pet Stain & Odour (available at Bunnings — bunnings.com.au) — great for pet stains and odours; Resolve Carpet Cleaner (available at Woolworths/Coles) — good for general stains and freshening; Rug Doctor Carpet Detergent (rugdoctor.com.au) — professional-grade formula used with hire machines; Scotchgard Carpet Protector — apply after cleaning to protect against future stains. For stubborn stains, always call a professional — DIY attempts can set stains permanently.",
  },
  {
    question: "How do I choose a reliable bond cleaner?",
    answer:
      "When choosing a bond cleaner in Sydney, look for: a written bond back guarantee, experience with real estate agency checklists, police-checked and fully insured cleaners, transparent pricing (no hidden fees), good Google reviews (4.5 stars or above), same-day or flexible booking options, eco-friendly and pet-safe products, and a re-clean policy if the agent is not satisfied. Tru Bond Cleaning ticks all these boxes. We have cleaned thousands of properties across Sydney and know exactly what real estate agents expect.",
  },
  {
    question:
      "Can I book a bond cleaning company online with a Satisfaction Guarantee?",
    answer:
      "Yes! At Tru Bond Cleaning Sydney, you can book online or via WhatsApp in minutes. We offer a 100% Satisfaction Guarantee — if your real estate agent is not happy with any aspect of our clean, we come back and re-clean it for FREE within 72 hours. No arguments, no hassle. Just message us on WhatsApp at 0488841883 or fill in our online form to get started.",
  },
  {
    question: "How much is a cleaner per hour in Sydney?",
    answer:
      "In Sydney, cleaners typically charge between $35 and $65 per hour. Bond cleaning is usually quoted as a flat rate rather than hourly because it covers a fixed scope of work based on the property size. Hourly rates vary depending on the type of cleaning — general domestic cleaning is cheaper, while specialist cleaning like ovens or carpets costs more per hour. At Tru Bond Cleaning, we offer flat-rate bond cleaning so you always know your total cost upfront.",
  },
  {
    question: "How much is end of lease cleaning in Australia?",
    answer:
      "Across Australia, end of lease cleaning costs vary by city and property size. In Sydney and Melbourne (the most expensive cities), expect to pay $250–$600+ for a standard apartment. In Brisbane, Adelaide, and Perth, prices are generally 10–20% lower. Always get a written quote and check what's included. Some companies charge extra for carpet cleaning, window cleaning, and balconies. At Tru Bond Cleaning, we provide a clear, itemised quote upfront.",
  },
  {
    question: "How much do you pay a cleaner for 3 hours?",
    answer:
      "At the standard Sydney rate of $35–$65 per hour, a 3-hour cleaning session costs $105–$195. For bond cleaning, most companies (including Tru Bond Cleaning) charge a flat rate because they work until the job is done to pass the real estate inspection — not by the hour. This means you're not left short-changed if the property needs a little extra attention.",
  },
  {
    question: "What is the 20-minute rule in cleaning?",
    answer:
      "The 20-minute rule is a time management trick: focus on cleaning one area intensely for 20 minutes, then move on. It helps people avoid getting overwhelmed when tackling household chores. For professional bond cleaning, we don't follow this rule — we stay as long as it takes to get every inch of your property spotless. Our cleaners work through a detailed checklist to make sure nothing is rushed or overlooked.",
  },
  {
    question: "What is bond back cleaning?",
    answer:
      "Bond back cleaning is another term for end of lease cleaning or vacate cleaning. It's a professional clean done when you move out of a rental property. The goal is to get the property clean enough to pass the final real estate inspection and get your full bond deposit refunded. The 'bond' is the security deposit (usually 4 weeks' rent) you paid when you moved in — and a thorough bond back clean is the best way to make sure you get every dollar of it returned.",
  },
  {
    question: "Is bond cleaning required in NSW?",
    answer:
      "Yes. Under the NSW Residential Tenancies Act 2010, tenants must leave the property in a reasonably clean condition. Most real estate agencies require a professional clean and will provide a detailed checklist. If you don't clean to the required standard, your landlord can claim cleaning costs from your bond. While the Act doesn't specifically require you to use a professional cleaner, the standard required (especially for carpets) typically means professional cleaning is necessary to pass inspection.",
  },
  {
    question: "How much do cleaners charge per hour in Sydney?",
    answer:
      "Domestic cleaners in Sydney typically charge $35–$65 per hour. End of lease and bond cleaning specialists often charge $45–$75 per hour or offer flat-rate packages. At Tru Bond Cleaning, we offer competitive flat-rate pricing so you know exactly what you pay upfront — no clock watching, no unexpected bills. Message us on WhatsApp at 0488841883 for a free quote.",
  },
  {
    question: "How much does end of tenancy cleaning cost in Sydney?",
    answer:
      "End of tenancy cleaning in Sydney costs $250–$600+ depending on property size. A 1-bedroom apartment typically costs $180–$280. A 3-bedroom house with carpet cleaning and oven cleaning can cost $450–$700. The exact price depends on the number of rooms, the condition of the property, and any additional services required. Tru Bond Cleaning offers transparent pricing — contact us for a free, no-obligation quote.",
  },
  {
    question: "How much is a bond clean in Sydney?",
    answer:
      "A bond clean in Sydney starts from around $250 for a small apartment and goes up to $600+ for larger homes. The price depends on the number of bedrooms and bathrooms, the condition of the property, and whether you need extras like carpet steam cleaning or pest control. Tru Bond Cleaning provides free, no-obligation quotes — just WhatsApp us at 0488841883 and we'll give you an accurate price based on your specific property.",
  },
  {
    question: "Do you offer a bond back guarantee?",
    answer:
      "Yes! We offer a 100% Bond Back Guarantee. If your real estate agent or property manager identifies anything that wasn't cleaned to their satisfaction, we will return and re-clean that area at absolutely no extra charge — within 72 hours of you notifying us. We stand behind every clean we do. Our entire business is built on getting your bond back, and we won't let you down.",
  },
  {
    question: "Which Sydney suburbs do you service?",
    answer:
      "We service all Sydney suburbs including Parramatta, Blacktown, Liverpool, Penrith, Hornsby, Chatswood, Bondi, Newtown, Randwick, Manly, Cronulla, Campbelltown, Auburn, Strathfield, Burwood, and many more. If you're not sure whether we cover your area, just WhatsApp us at 0488841883 — we're happy to help.",
  },
];

// ─── Trust badges ──────────────────────────────────────────────────────────
export const trustBadges = [
  {
    icon: "🛡️",
    title: "100% Bond Back Guarantee",
    desc: "Re-clean for free within 72 hrs",
  },
  {
    icon: "⭐",
    title: "5-Star Rated",
    desc: "Trusted by 2,000+ Sydney tenants",
  },
  {
    icon: "✅",
    title: "Real Estate Approved",
    desc: "Checklists accepted by all agencies",
  },
  {
    icon: "📅",
    title: "Same-Day Bookings",
    desc: "Weekends and short notice welcome",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly Products",
    desc: "Pet-safe, biodegradable solutions",
  },
  {
    icon: "🔒",
    title: "Fully Insured",
    desc: "Police-checked, background-verified",
  },
];

// ─── Service areas ──────────────────────────────────────────────────────────
export const serviceAreas = [
  "Parramatta",
  "Blacktown",
  "Liverpool",
  "Penrith",
  "Hornsby",
  "Chatswood",
  "Bondi",
  "Newtown",
  "Randwick",
  "Manly",
  "Cronulla",
  "Campbelltown",
  "Auburn",
  "Strathfield",
  "Burwood",
  "Ryde",
  "Bankstown",
  "Hurstville",
  "Sutherland",
  "Castle Hill",
];
