export interface Suburb {
  name: string;
  slug: string;
  postcode: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  whyUs: string[];
}

export const suburbs: Suburb[] = [
  {
    name: "Parramatta",
    slug: "parramatta",
    postcode: "2150",
    metaTitle: "Bond Back Cleaning Parramatta | Tru Bond Cleaning Sydney",
    metaDescription:
      "Professional bond back cleaning in Parramatta. We clean every corner so you get your full bond back. Same-day bookings, 100% guarantee. Call 0488841883.",
    h1: "Bond Back Cleaning in Parramatta",
    intro:
      "We give Parramatta renters the cleanest homes their landlords have ever seen. Book today and we'll make sure you get every dollar of your bond back.",
    sections: [
      {
        heading: "Why Parramatta Renters Choose Us",
        body: "Parramatta is one of Sydney's biggest rental hubs. Heaps of people move in and out every week, and the real estate agents here are strict. They use detailed checklists and they check everything — from the oven to the exhaust fans. Our team knows exactly what Parramatta property managers look for. We clean to their standard every single time, so you pass the inspection on the first go.",
      },
      {
        heading: "What We Clean in Your Parramatta Home",
        body: "We clean your whole home from top to bottom. We scrub the kitchen — inside the oven, under the stovetop, and all the cupboards. We polish the bathrooms until the tiles shine. We vacuum and mop every floor. We wipe down all the walls, light switches, and skirting boards. We even clean the windows and fly screens. If it's on your real estate agent's checklist, we do it.",
      },
      {
        heading: "Our Bond Back Guarantee",
        body: "We are so confident in our cleaning that we back it up with a 100% Bond Back Guarantee. If your property manager finds something we missed, just send us a message on WhatsApp and we will come back to fix it for free within 72 hours. No stress, no arguments — we sort it out fast. Parramatta renters love this because moving out is already stressful enough.",
      },
      {
        heading: "Easy Booking for Parramatta Properties",
        body: "You can book your Parramatta bond clean in minutes. WhatsApp us at 0488841883 or fill in our online form. Tell us how big your home is and we will give you an upfront price — no hidden fees. We offer same-day, next-day, and weekend bookings. We service all parts of Parramatta including Westmead, North Parramatta, and Harris Park.",
      },
    ],
    whyUs: [
      "We know Parramatta real estate agents' checklists inside out",
      "Same-day and weekend bookings available in Parramatta",
      "Competitive flat-rate pricing with no hidden extras",
      "Free re-clean guarantee within 72 hours if needed",
    ],
  },
  {
    name: "Blacktown",
    slug: "blacktown",
    postcode: "2148",
    metaTitle: "Bond Back Cleaning Blacktown | Tru Bond Cleaning Sydney",
    metaDescription:
      "Top-rated bond back cleaning in Blacktown. We clean every room to your real estate agent's checklist. 100% bond back guarantee. Book online today.",
    h1: "Bond Back Cleaning in Blacktown",
    intro:
      "Blacktown renters trust us to get their bond back every time. We clean fast, we clean thoroughly, and we stand behind every job with our 100% guarantee.",
    sections: [
      {
        heading: "Blacktown's Trusted Bond Cleaning Team",
        body: "Blacktown has a massive rental market, and we work in this area all the time. We know the local real estate agencies and we know their standards. Our cleaners arrive on time with all their own equipment and products. We do not waste your time, and we do not cut corners. Your Blacktown landlord will be impressed — and you will get your bond back.",
      },
      {
        heading: "Every Room Gets the Full Treatment",
        body: "We clean every single room in your Blacktown home. In the kitchen, we degrease the oven, the rangehood, and the stovetop. In the bathrooms, we scrub the tiles, the shower, and the toilet. We vacuum and mop all floors. We dust ceiling fans, light fittings, and blinds. We clean inside and outside all windows. Nothing gets missed because we use a real estate-approved checklist every time.",
      },
      {
        heading: "Fair and Honest Pricing",
        body: "We give every Blacktown customer a clear, upfront quote before we start. For a two-bedroom apartment in Blacktown, you are looking at around $250–$380. For a three-bedroom house, it is around $350–$500. These prices include everything — no sneaky extras. You know exactly what you are paying before we arrive, so there are no surprises.",
      },
      {
        heading: "Book Your Blacktown Bond Clean Today",
        body: "Booking is super easy. Just WhatsApp us at 0488841883 or use our online form. We service all of Blacktown and the surrounding areas including Seven Hills, Kings Langley, and Lalor Park. We offer flexible timing — early mornings, evenings, and weekends. Most Blacktown jobs are done in 3–6 hours, so you can hand back your keys the same day.",
      },
    ],
    whyUs: [
      "Experienced with all Blacktown real estate agency requirements",
      "All-inclusive pricing — no surprise charges on the day",
      "Flexible scheduling including early mornings and weekends",
      "Fully equipped team — we bring all products and tools",
    ],
  },
  {
    name: "Liverpool",
    slug: "liverpool",
    postcode: "2170",
    metaTitle: "Bond Back Cleaning Liverpool Sydney | Tru Bond Cleaning",
    metaDescription:
      "Expert bond back cleaning in Liverpool, Sydney. We clean to your real estate agent's standard. Same-day bookings. 100% bond back guarantee. Call now.",
    h1: "Bond Back Cleaning in Liverpool",
    intro:
      "Liverpool renters, we have your back. Our professional cleaning team gets your property sparkling clean so you can get every dollar of your bond returned.",
    sections: [
      {
        heading: "Why Liverpool Tenants Pick Us",
        body: "Liverpool is a busy area with lots of rental properties. The real estate agents here are thorough and they spot every bit of grime. Our team has cleaned hundreds of homes in Liverpool and the surrounding suburbs. We know what passes inspection and what does not. We clean to a professional standard that meets the requirements of all the major Liverpool real estate agencies.",
      },
      {
        heading: "A Full Top-to-Bottom Clean",
        body: "We clean your whole Liverpool home from the ceiling to the floor. We scrub the kitchen thoroughly — every shelf, every drawer, inside the oven, and behind the appliances. We make the bathrooms sparkle — tiles, grout, shower screens, and all. We vacuum every carpet and mop every hard floor. We clean blinds, fans, and all the little details that inspectors always check.",
      },
      {
        heading: "Carpet Steam Cleaning Available",
        body: "Many Liverpool landlords require professional carpet steam cleaning when you move out. We offer this as an add-on to your bond clean. Our hot water extraction system removes deep-set dirt, stains, and odours from your carpets. Your carpets will look and smell fresh. We also provide a professional receipt so your property manager knows the carpets were cleaned professionally.",
      },
      {
        heading: "Book a Liverpool Bond Clean Fast",
        body: "We make booking easy for Liverpool renters. WhatsApp us at 0488841883 any day of the week. We service Liverpool City and nearby areas including Warwick Farm, Casula, and Moorebank. We give you a firm price upfront — no quoting games. If you need us quickly, we often have same-day and next-day spots available for Liverpool properties.",
      },
    ],
    whyUs: [
      "Hundreds of successful bond cleans completed in Liverpool",
      "Carpet steam cleaning add-on available with receipt",
      "Same-day service often available in Liverpool",
      "100% Bond Back Guarantee on every job",
    ],
  },
  {
    name: "Penrith",
    slug: "penrith",
    postcode: "2750",
    metaTitle: "Bond Back Cleaning Penrith | Tru Bond Cleaning Sydney",
    metaDescription:
      "Professional bond back cleaning in Penrith. We get your rental property inspection-ready. 100% bond back guarantee. Same-day bookings. Call 0488841883.",
    h1: "Bond Back Cleaning in Penrith",
    intro:
      "Moving out of your Penrith rental? We handle the deep clean so you can focus on moving. Our guarantee means you get your bond back or we re-clean for free.",
    sections: [
      {
        heading: "Penrith's Go-To Bond Cleaners",
        body: "Penrith has grown heaps in recent years, and with more people renting comes more need for professional bond cleaning. Our team travels to Penrith regularly and we know the local rental market well. Whether you are in an apartment near Penrith CBD or a house in one of the outer suburbs, we bring the same high standard of cleaning to every job.",
      },
      {
        heading: "Everything on the Checklist Gets Done",
        body: "Real estate agents in Penrith are just as strict as anywhere else in Sydney. They check the oven, the rangehood, the bathroom grout, the window tracks — everything. Our cleaners use a real estate-approved checklist for every Penrith property. We tick off each item one by one. By the time we are done, your home is in better condition than when most people first moved in.",
      },
      {
        heading: "Pricing That Makes Sense",
        body: "Penrith has a wide range of property sizes, from small units to large four-bedroom family homes. We price based on the size of your home and give you a firm quote before we start. Our prices are competitive and all-inclusive. A typical two-bedroom Penrith apartment costs around $250–$380 to clean. A four-bedroom house is around $450–$700. No hidden costs.",
      },
      {
        heading: "Serving All of Greater Penrith",
        body: "We clean rental properties all across the Penrith area. This includes Kingswood, Werrington, St Marys, Cambridge Park, and Claremont Meadows. WhatsApp us at 0488841883 to get a fast quote. We are available seven days a week and we often have last-minute spots for Penrith customers who need a quick turnaround.",
      },
    ],
    whyUs: [
      "Experienced with Penrith's diverse property types and sizes",
      "Seven-day availability including last-minute bookings",
      "All-inclusive flat-rate pricing for all Penrith suburbs",
      "Professional team with all equipment supplied",
    ],
  },
  {
    name: "Hornsby",
    slug: "hornsby",
    postcode: "2077",
    metaTitle: "Bond Back Cleaning Hornsby | Tru Bond Cleaning Sydney",
    metaDescription:
      "Expert bond back cleaning in Hornsby. We clean to your property manager's exact standard. 100% bond back guarantee. Easy online booking. Call now.",
    h1: "Bond Back Cleaning in Hornsby",
    intro:
      "Hornsby renters, we make moving out stress-free. Our professional team cleans your home to a 5-star standard so your property manager has nothing to complain about.",
    sections: [
      {
        heading: "The Right Clean for Hornsby Rentals",
        body: "Hornsby is a popular spot for families and young professionals who rent houses and apartments. Moving out of a Hornsby rental means facing a detailed exit inspection. Our cleaners have worked in Hornsby for years and we understand what local property managers expect. We clean everything thoroughly and carefully so your inspection goes smoothly.",
      },
      {
        heading: "What a Bond Clean Covers",
        body: "A proper bond clean covers a lot more than a regular weekly tidy. We clean inside every oven and fridge. We degrease the rangehood filter. We scrub bathroom grout until it looks new. We clean window tracks, blinds, and fly screens. We wipe every light switch and power point. We remove cobwebs from all corners. We clean the inside of all cupboards. This is the full treatment, not a basic surface clean.",
      },
      {
        heading: "Why Our Guarantee Matters",
        body: "When we say 100% Bond Back Guarantee, we mean it. If your property manager sends you a list of things they are not happy with after our clean, we come back and fix it for free. We give you 72 hours after the inspection to let us know. This guarantee is our way of showing you that we trust our own work. Hornsby families and students love the peace of mind it gives them.",
      },
      {
        heading: "Book Your Hornsby Clean Today",
        body: "Book your Hornsby bond clean online or via WhatsApp at 0488841883. We service Hornsby and nearby suburbs including Asquith, Waitara, Thornleigh, and Normanhurst. We do weekday, weekend, and holiday cleans. Flexible scheduling means you can book around your move-out date. Get a quote in minutes and lock in your date today.",
      },
    ],
    whyUs: [
      "Local knowledge of Hornsby real estate agency standards",
      "Free re-clean within 72 hours if anything is missed",
      "Available seven days a week including public holidays",
      "Trusted by Hornsby families and students for years",
    ],
  },
  {
    name: "Chatswood",
    slug: "chatswood",
    postcode: "2067",
    metaTitle: "Bond Back Cleaning Chatswood | Tru Bond Cleaning Sydney",
    metaDescription:
      "Premium bond back cleaning in Chatswood. We know exactly what Chatswood property managers expect. Same-day bookings available. Call 0488841883.",
    h1: "Bond Back Cleaning in Chatswood",
    intro:
      "Chatswood apartments and houses deserve the best clean. We deliver inspection-ready results every time, backed by our 100% Bond Back Guarantee.",
    sections: [
      {
        heading: "Cleaning Chatswood Properties to a High Standard",
        body: "Chatswood is home to some of Sydney's most sought-after apartments and units. The property managers in this area have high standards, and rightly so. Our team cleans Chatswood homes to a level that satisfies even the most thorough inspectors. We pay attention to all the small details — fingerprints on mirrors, marks on walls, and residue inside the microwave — because these are exactly the things that get noticed.",
      },
      {
        heading: "Our Comprehensive Cleaning Checklist",
        body: "Our Chatswood bond clean covers every area of your home. Kitchen: oven, stovetop, rangehood, benchtops, sink, and all cupboards inside and out. Bathrooms: tiles, grout, shower screen, toilet, taps, and exhaust fan. Living and bedroom areas: dusting, vacuuming, mopping, ceiling fans, and skirting boards. Windows and glass doors: cleaned inside and out with no streaks left behind.",
      },
      {
        heading: "Perfect for Chatswood Apartment Living",
        body: "Most Chatswood rentals are apartments and units in large complexes. These properties often have specific requirements like built-in wardrobes, ducted air conditioning vents, and balconies that need attention. Our team handles all of these as part of our standard bond clean. We wipe down balcony tiles, clean the sliding door tracks, and remove dust from all air conditioning vents.",
      },
      {
        heading: "Get a Quote for Your Chatswood Property",
        body: "WhatsApp us at 0488841883 or use our quote form. We service Chatswood, Lane Cove, Willoughby, and surrounding areas. Prices are clear and upfront. A typical one-bedroom Chatswood apartment is $180–$280. A two-bedroom unit is $250–$380. We offer same-day bookings when we have availability, so do not wait too long to get in touch.",
      },
    ],
    whyUs: [
      "Specialists in Chatswood high-rise and unit apartment cleaning",
      "Detailed clean of balconies and air conditioning vents included",
      "Upfront pricing with no hidden extras",
      "Fast response times and same-day availability",
    ],
  },
  {
    name: "Bondi",
    slug: "bondi",
    postcode: "2026",
    metaTitle: "Bond Back Cleaning Bondi Beach | Tru Bond Cleaning Sydney",
    metaDescription:
      "Bond back cleaning in Bondi and Bondi Beach. We get your coastal rental spotless for final inspection. 100% bond back guarantee. Call 0488841883.",
    h1: "Bond Back Cleaning in Bondi",
    intro:
      "Bondi living is amazing, but moving out can be tough. We make your exit inspection a breeze with a thorough bond clean that gives you your full deposit back.",
    sections: [
      {
        heading: "Bondi Beach Renters Love Our Service",
        body: "Living near Bondi Beach is a dream, but coastal properties face extra cleaning challenges. Salt air, sand, and humidity can cause extra buildup in kitchens and bathrooms. Our team knows how to deal with these issues. We remove hard water stains, salt residue, and coastal grime that builds up in Bondi rentals. We give your landlord a property that looks brand new.",
      },
      {
        heading: "What We Clean in Your Bondi Rental",
        body: "We clean every corner of your Bondi home. In the kitchen, we tackle the oven, the rangehood, the stovetop, and all the surfaces. In the bathroom, we scrub away all the soap scum, mould, and hard water stains that are common in coastal properties. We clean all floors, windows, walls, and skirting boards. We also pay extra attention to balconies and outdoor areas, which get dusty and grimy near the beach.",
      },
      {
        heading: "Fast Service for a Busy Lifestyle",
        body: "Bondi people are busy. You do not have time to spend all weekend cleaning. Our team comes in, does the job fast, and leaves your place spotless. A typical Bondi apartment takes 3–5 hours. We offer early morning starts so you can have your bond clean done and dusted before midday. Our cleaners are professional and respectful of your home and your time.",
      },
      {
        heading: "Book Your Bondi Bond Clean",
        body: "We service Bondi Beach, Bondi Junction, North Bondi, and all the surrounding eastern suburbs. WhatsApp us at 0488841883 to get a quote. Prices for a typical Bondi one-bedroom apartment start from $180. We have same-day and weekend availability. Do not let your landlord keep your bond — book your Bondi bond clean with us today.",
      },
    ],
    whyUs: [
      "Expert at removing coastal salt and hard water stains",
      "Thorough balcony and outdoor area cleaning included",
      "Fast service — most Bondi apartments done in 3–5 hours",
      "Eastern suburbs coverage including Bondi Junction and North Bondi",
    ],
  },
  {
    name: "Newtown",
    slug: "newtown",
    postcode: "2042",
    metaTitle: "Bond Back Cleaning Newtown | Tru Bond Cleaning Sydney",
    metaDescription:
      "Bond back cleaning in Newtown and the Inner West. We clean older terrace homes and apartments to pass inspection. 100% guarantee. Call 0488841883.",
    h1: "Bond Back Cleaning in Newtown",
    intro:
      "Newtown's character-filled homes need expert care when you move out. We understand older terrace houses and know exactly how to get them inspection-ready.",
    sections: [
      {
        heading: "Cleaning Newtown's Unique Properties",
        body: "Newtown is full of older terrace houses, heritage apartments, and character homes. These properties have their own cleaning challenges — high ceilings, old tiles, Victorian cornices, and sometimes tricky layouts. Our team loves working on these amazing inner-west homes. We handle the extra details that come with older properties, like cleaning around heritage features without causing damage.",
      },
      {
        heading: "We Clean What Inspectors Check",
        body: "Real estate agents in Newtown check everything carefully, especially in older homes. They look at the kitchen oven (yes, even if it is old), the bathroom tiles and grout, the floors, the ceilings, and all the skirting boards. We follow a real estate-approved checklist so nothing gets missed. We clean inside and outside cupboards, behind appliances, and all those spots you might forget about.",
      },
      {
        heading: "Great for Students and Share Houses",
        body: "Newtown has a big student population and loads of share houses. Moving out of a share house can be complicated, especially when you need to coordinate cleaning with housemates. We make it easy. One call and we clean the whole house. We work around your schedule and give each room the same careful attention. Split the cost between housemates and everyone saves time and stress.",
      },
      {
        heading: "Book Your Newtown Bond Clean",
        body: "We cover Newtown and the whole inner-west area including Erskineville, Enmore, and Marrickville. WhatsApp 0488841883 for a fast quote. We service terrace houses, apartments, and share houses. Pricing is based on your property size and starts from $180 for a small studio. We are available on weekdays, weekends, and at short notice for Newtown renters.",
      },
    ],
    whyUs: [
      "Specialists in Newtown terrace houses and heritage properties",
      "Perfect for share house move-outs — we clean everything",
      "Inner-west coverage including Erskineville and Marrickville",
      "Short-notice bookings available for busy Newtown renters",
    ],
  },
  {
    name: "Randwick",
    slug: "randwick",
    postcode: "2031",
    metaTitle: "Bond Back Cleaning Randwick | Tru Bond Cleaning Sydney",
    metaDescription:
      "Professional bond back cleaning in Randwick. We get your rental spotless for final inspection. Students and families welcome. Call 0488841883.",
    h1: "Bond Back Cleaning in Randwick",
    intro:
      "Randwick renters — students, families, and professionals alike — rely on us to get their bond back. We clean every property to the highest standard.",
    sections: [
      {
        heading: "Why Randwick Tenants Trust Us",
        body: "Randwick is close to UNSW and the Prince of Wales Hospital, which means there are heaps of students, nurses, and young professionals renting in the area. Moving out can be really stressful when you are juggling uni assignments or long work shifts. Our bond cleaning service takes one huge task off your plate. We come in and clean everything so you can focus on what matters.",
      },
      {
        heading: "A Thorough Clean for Every Property Type",
        body: "Whether you rent a studio apartment near the uni or a three-bedroom house in Randwick, we clean it to the same high standard. We clean the kitchen, bathrooms, bedrooms, and living areas. We do carpets, floors, windows, and walls. We clean light fittings, ceiling fans, exhaust fans, and all the things most people forget about. Every item on your real estate agent's checklist gets ticked off.",
      },
      {
        heading: "We Understand Randwick Real Estate Standards",
        body: "The real estate agents in Randwick are known for being thorough during exit inspections. They check the oven interior, the bathroom grout lines, the window tracks, and the fly screens. Our team uses the same checklists that real estate agents use. We do not leave until everything meets the required standard. This is why we rarely ever have to do a re-clean in Randwick.",
      },
      {
        heading: "Easy Booking for Randwick Properties",
        body: "You can book your Randwick bond clean via WhatsApp at 0488841883 or our online form. We service Randwick, Kensington, Coogee, and the surrounding eastern suburbs. Prices start from $180 for a studio. We offer same-day and weekend bookings, which is perfect for students who find out last-minute that their inspection is coming up.",
      },
    ],
    whyUs: [
      "Popular with UNSW students and hospital staff renters",
      "Expert knowledge of Randwick property manager standards",
      "Same-day bookings for last-minute move-outs",
      "Eastern suburbs coverage including Kensington and Coogee",
    ],
  },
  {
    name: "Manly",
    slug: "manly",
    postcode: "2095",
    metaTitle: "Bond Back Cleaning Manly | Tru Bond Cleaning Sydney",
    metaDescription:
      "Bond back cleaning in Manly and the Northern Beaches. Coastal property specialists. 100% bond back guarantee. Book online or call 0488841883.",
    h1: "Bond Back Cleaning in Manly",
    intro:
      "Manly is one of Sydney's most beautiful places to live. When it is time to move on, we make sure your home looks perfect so you get your full bond back.",
    sections: [
      {
        heading: "Coastal Properties Need Extra Care",
        body: "Manly properties face the same coastal challenges as Bondi — salt air, humidity, and sea breeze can cause extra buildup of grime and hard water stains. Our team knows how to tackle these issues. We remove salt deposits from bathroom tiles and shower screens, clean up sandy grout lines, and deal with the humidity-related mould that can appear in coastal bathrooms. We give your Manly landlord a spotless property.",
      },
      {
        heading: "Everything Your Manly Agent Checks",
        body: "Manly real estate agents inspect properties closely because homes here command premium rents. Your agent will check the kitchen top to bottom, all bathroom surfaces, windows (including the ocean-facing ones), floors, carpets, and walls. Our team covers every single item on their checklist. We clean the stovetop and oven inside out, scrub the bathrooms, and leave every floor gleaming.",
      },
      {
        heading: "Serving Manly and the Northern Beaches",
        body: "We do not just clean in Manly itself. We service the whole Northern Beaches area including Dee Why, Balgowlah, Fairlight, Seaforth, and Freshwater. If you are moving out of a home anywhere along the Northern Beaches, give us a call. We know the area well and we understand the premium standards that property managers expect in this part of Sydney.",
      },
      {
        heading: "Book Your Manly Bond Clean",
        body: "To get a quote for your Manly property, WhatsApp us at 0488841883 or use our online form. We offer flexible booking times and are available seven days a week. Prices for a typical Manly apartment start from $180 for a one-bedroom. We can usually fit in same-day or next-day bookings for Northern Beaches customers. Do not lose your beach house bond — book with us today.",
      },
    ],
    whyUs: [
      "Specialists in coastal property cleaning challenges",
      "Coverage across all Northern Beaches suburbs",
      "Available seven days including weekends",
      "Premium standards to match Manly's premium rental market",
    ],
  },
  {
    name: "Cronulla",
    slug: "cronulla",
    postcode: "2230",
    metaTitle: "Bond Back Cleaning Cronulla | Tru Bond Cleaning Sydney",
    metaDescription:
      "Bond back cleaning in Cronulla and the Sutherland Shire. Expert coastal property cleaners. 100% bond back guarantee. Call 0488841883 for a quote.",
    h1: "Bond Back Cleaning in Cronulla",
    intro:
      "Cronulla renters love the beach lifestyle. When your lease ends, we step in to clean your home so thoroughly that your landlord will be smiling — and your bond comes back to you.",
    sections: [
      {
        heading: "Cronulla Beach Rentals Need the Best Clean",
        body: "Cronulla is a stunning beachside suburb and rental properties here come at a premium. When you move out, your landlord expects the property to look as good as when you moved in. Our team specialises in cleaning coastal properties in Cronulla and the Shire. We remove the salt-air buildup from windows and tiles, deep clean the bathroom grout, and leave every surface sparkling.",
      },
      {
        heading: "Our Full Bond Cleaning Service",
        body: "Our Cronulla bond clean covers every part of your home. We deep clean the kitchen — oven, stovetop, rangehood, benchtops, and all cupboards. We scrub bathrooms from ceiling to floor. We vacuum all carpets and mop all hard floors. We clean windows, fly screens, and balcony areas. We even clean the laundry area — the washing machine filter, the tub, and all the surrounding surfaces.",
      },
      {
        heading: "We Know the Shire's Property Standards",
        body: "The Sutherland Shire has active rental market and real estate agents who do thorough inspections. We have cleaned many homes in Cronulla, and we know exactly what local agents look for. Our cleaners follow a detailed checklist that covers every item on a standard real estate inspection form. We do not rush, and we do not cut corners, because we want you to pass first time.",
      },
      {
        heading: "Get a Quote for Your Cronulla Home",
        body: "WhatsApp us at 0488841883 for a fast, friendly quote. We service Cronulla, Caringbah, Woolooware, and the surrounding Shire suburbs. We offer same-day, next-day, and weekend bookings. Pricing starts from $180 for a one-bedroom unit. Get in touch today and we will sort out your bond clean so you can focus on your next adventure.",
      },
    ],
    whyUs: [
      "Deep knowledge of Sutherland Shire rental inspection standards",
      "Expert coastal and beach property cleaning",
      "Flexible bookings including same-day service",
      "Cronulla and surrounding Shire suburbs fully covered",
    ],
  },
  {
    name: "Campbelltown",
    slug: "campbelltown",
    postcode: "2560",
    metaTitle: "Bond Back Cleaning Campbelltown | Tru Bond Cleaning Sydney",
    metaDescription:
      "Professional bond back cleaning in Campbelltown. We clean your rental home to your agent's standard. Affordable pricing. 100% guarantee. Call now.",
    h1: "Bond Back Cleaning in Campbelltown",
    intro:
      "Campbelltown renters deserve a clean they can count on. We clean homes across Campbelltown and the Macarthur region with a bond-back guarantee you can trust.",
    sections: [
      {
        heading: "Campbelltown's Trusted Bond Cleaning Team",
        body: "Campbelltown is growing fast and there are lots of families and young people renting in the area. Moving out of a family home in Campbelltown means there is a lot of cleaning to do. Our team handles it all. We clean big family homes just as thoroughly as small apartments. We bring the right equipment and products for any size property.",
      },
      {
        heading: "What We Do for Your Campbelltown Home",
        body: "Our bond clean for Campbelltown properties includes everything. We clean the kitchen inside and out — the oven, the stovetop, the rangehood, and all the cupboards. We scrub the bathrooms until they are completely spotless. We vacuum and mop all floors. We wipe down walls, skirting boards, light switches, and power points. We also clean windows and fly screens. Everything on the checklist gets done.",
      },
      {
        heading: "Affordable Prices for Macarthur Region",
        body: "We know that Campbelltown is a family-friendly area where people watch their budget carefully. Our prices are fair and all-inclusive. We give you a firm quote before we start, and that is the price you pay — nothing extra. A typical three-bedroom Campbelltown house costs around $350–$500 for a bond clean. We also offer carpet steam cleaning as an affordable add-on.",
      },
      {
        heading: "Book a Campbelltown Bond Clean",
        body: "We service all of Campbelltown and the Macarthur region including Leumeah, Minto, Ingleburn, and Macquarie Fields. WhatsApp us at 0488841883 or fill in our online form. We offer seven-day service and same-day availability when you need it fast. Get your Campbelltown bond clean done properly and get your full deposit back.",
      },
    ],
    whyUs: [
      "Budget-friendly pricing for Campbelltown and Macarthur families",
      "Experienced with large family homes and smaller units",
      "All of the Macarthur region covered",
      "Seven-day service including last-minute bookings",
    ],
  },
  {
    name: "Auburn",
    slug: "auburn",
    postcode: "2144",
    metaTitle: "Bond Back Cleaning Auburn | Tru Bond Cleaning Sydney",
    metaDescription:
      "Bond back cleaning in Auburn. Expert cleaners who know exactly what Auburn property managers expect. 100% bond back guarantee. Call 0488841883.",
    h1: "Bond Back Cleaning in Auburn",
    intro:
      "Moving out of an Auburn rental? Our expert team cleans your home to a standard that gets your full bond back. Book easily — we are available seven days a week.",
    sections: [
      {
        heading: "Auburn Renters, We Have You Covered",
        body: "Auburn is a busy suburb with a strong rental market. Property managers here do thorough exit inspections and they notice everything — grease on the stovetop, soap scum in the shower, dust on the ceiling fans. Our team knows all the usual pain points and we attack them every time. We leave nothing for your property manager to complain about.",
      },
      {
        heading: "Our Detailed Bond Cleaning Process",
        body: "We follow a step-by-step checklist for every Auburn bond clean. We start with the kitchen — degreasing the oven, cleaning the rangehood filter, wiping down all surfaces, and cleaning inside every cupboard. We then move to the bathrooms — scrubbing tiles, grout, the shower screen, and all fittings. We finish with bedrooms, living areas, floors, windows, and walls. Nothing gets left out.",
      },
      {
        heading: "Quick and Reliable for Auburn Tenants",
        body: "We know that moving is hectic. You have a million things to do and not much time. Our Auburn bond cleaning team is fast, reliable, and thorough. We show up when we say we will. We bring all our own equipment. We clean efficiently without cutting corners. Most Auburn homes are done within 4–6 hours, so you can get your keys back to the agent the same day.",
      },
      {
        heading: "Auburn and Surrounding Area Coverage",
        body: "We clean rental properties in Auburn, Lidcombe, Berala, and the nearby western suburbs. WhatsApp us at 0488841883 to book. We offer flexible booking times including evenings and weekends. Our prices are upfront and fair — a typical two-bedroom Auburn unit costs $250–$380 for a full bond clean. Get your deposit back with Tru Bond Cleaning.",
      },
    ],
    whyUs: [
      "Expert at tackling Auburn's most common inspection failure points",
      "Fast and reliable — most jobs done in 4–6 hours",
      "Western suburbs coverage including Lidcombe and Berala",
      "Evenings and weekend bookings available",
    ],
  },
  {
    name: "Strathfield",
    slug: "strathfield",
    postcode: "2135",
    metaTitle: "Bond Back Cleaning Strathfield | Tru Bond Cleaning Sydney",
    metaDescription:
      "Premium bond back cleaning in Strathfield. Trusted by Strathfield families and students. 100% bond back guarantee. Easy booking. Call 0488841883.",
    h1: "Bond Back Cleaning in Strathfield",
    intro:
      "Strathfield is one of Sydney's most popular family suburbs. When it is time to move on, our professional team delivers a flawless bond clean that gets your full deposit back.",
    sections: [
      {
        heading: "Why Strathfield Families Choose Us",
        body: "Strathfield attracts lots of families who rent large homes and units. When a family moves out, there can be marks on walls, stains on carpets, and grease in the kitchen that has built up over the years. Our team handles all of this. We have the right products and equipment to tackle tough cleaning jobs in family homes. We clean to the standard your property manager expects.",
      },
      {
        heading: "A Complete Clean for Strathfield Properties",
        body: "Our Strathfield bond clean covers every room and every surface. We deep clean the kitchen including the oven, stovetop, and rangehood. We scrub all bathroom surfaces. We vacuum and mop all floors. We clean carpets, windows, blinds, ceiling fans, and skirting boards. We also clean inside all built-in wardrobes and pantry shelves. For family homes with backyards, we can include outdoor area cleaning.",
      },
      {
        heading: "Carpet and Wall Cleaning Specialists",
        body: "Family homes in Strathfield often need extra carpet and wall attention. Kids leave marks, pets leave fur, and everyday living leaves its traces. Our carpet steam cleaning service removes deep-set stains and odours. Our wall spot cleaning service removes scuffs, crayon marks, and handprints. These extra services help you pass inspection even if your home has had some hard living.",
      },
      {
        heading: "Book a Strathfield Bond Clean Today",
        body: "WhatsApp us at 0488841883 or use our online booking form. We service Strathfield and surrounding suburbs including Homebush, Flemington, and North Strathfield. We offer flexible timing and same-day bookings when available. Our prices are competitive and all-inclusive — get your Strathfield bond clean done right and walk away with your full deposit.",
      },
    ],
    whyUs: [
      "Specialists in family home bond cleaning in Strathfield",
      "Carpet steam cleaning and wall spot cleaning available",
      "Strathfield and Homebush area fully covered",
      "Family-friendly scheduling and pricing",
    ],
  },
  {
    name: "Burwood",
    slug: "burwood",
    postcode: "2134",
    metaTitle: "Bond Back Cleaning Burwood | Tru Bond Cleaning Sydney",
    metaDescription:
      "Bond back cleaning in Burwood. We clean to your real estate agent's exact standard. Same-day available. 100% bond back guarantee. Call 0488841883.",
    h1: "Bond Back Cleaning in Burwood",
    intro:
      "Burwood renters — whether you live in a modern apartment or a classic terrace — we deliver a thorough bond clean that gets you your full deposit back, guaranteed.",
    sections: [
      {
        heading: "Burwood Bond Cleaning You Can Count On",
        body: "Burwood is a vibrant, densely populated suburb with lots of apartments and houses for rent. The local real estate agents are experienced and thorough. They know exactly what a clean property should look like. Our team matches their standard every time. We have cleaned many Burwood homes and we know how to satisfy even the most detail-oriented property managers.",
      },
      {
        heading: "From Kitchen to Bathroom — We Clean It All",
        body: "Our Burwood bond clean is thorough. In the kitchen, we degrease the oven and clean every surface. In the bathroom, we remove all mould, soap scum, and hard water stains. We clean all floors, carpets, windows, and blinds. We wipe down every wall and skirting board. We clean light fittings and ceiling fans. We even clean the laundry — the machine, the sink, and the surroundings.",
      },
      {
        heading: "We Make It Easy to Book",
        body: "Booking a Burwood bond clean is simple. WhatsApp us at 0488841883 any day of the week. We give you a firm price upfront based on your property size. No hidden charges, no surprises. We confirm your booking quickly and send you a reminder the day before. On the day, we arrive on time and get straight to work so you can get on with your move.",
      },
      {
        heading: "Serving Burwood and Nearby Suburbs",
        body: "We service Burwood and the surrounding inner-west area including Croydon, Concord, and Ashfield. Same-day and next-day bookings are often available. For a typical two-bedroom Burwood apartment, our price is around $250–$380. We stand behind every clean with our 100% Bond Back Guarantee — if your agent finds something we missed, we come back and fix it for free.",
      },
    ],
    whyUs: [
      "Deep familiarity with Burwood's rental property market",
      "Easy booking via WhatsApp — response in minutes",
      "Inner-west coverage including Croydon and Ashfield",
      "Firm upfront pricing with no day-of surprises",
    ],
  },
  {
    name: "Ryde",
    slug: "ryde",
    postcode: "2112",
    metaTitle: "Bond Back Cleaning Ryde | Tru Bond Cleaning Sydney",
    metaDescription:
      "Expert bond back cleaning in Ryde and the Ryde district. We clean every item on your agent's checklist. 100% guarantee. Book online. Call 0488841883.",
    h1: "Bond Back Cleaning in Ryde",
    intro:
      "Ryde is a fantastic place to live, and we help renters leave it in perfect condition. Our professional bond clean gets you through inspection with flying colours.",
    sections: [
      {
        heading: "Ryde's Reliable Bond Cleaning Team",
        body: "The City of Ryde has a large and active rental market. Families and professionals rent homes across Ryde, Meadowbank, West Ryde, and Gladesville. When it is time to move out, our team is ready. We service all parts of the Ryde area and we are familiar with what the local real estate agents expect during exit inspections. We clean to their standard every time.",
      },
      {
        heading: "Professional Clean Across Every Room",
        body: "We work through your Ryde home room by room, ticking off every item. Kitchen: full oven clean, stovetop, rangehood, benchtops, and cupboards. Bathrooms: tiles, grout, toilet, shower, and vanity. Bedrooms and living areas: dusting, vacuuming, mopping, and wiping down surfaces. Windows: cleaned inside and out with no smears. We also clean garage areas if your property has one.",
      },
      {
        heading: "The 100% Guarantee That Gives You Confidence",
        body: "Our 100% Bond Back Guarantee means you do not have to worry. If your Ryde property manager is not satisfied with our work, we come back and re-clean the disputed areas for free within 72 hours. This is not something we have to do very often, because we almost always get it right the first time. But the guarantee is there if you need it.",
      },
      {
        heading: "Book Your Ryde Bond Clean Today",
        body: "Get a quote for your Ryde rental by WhatsApp at 0488841883 or online. We service Ryde, Meadowbank, Gladesville, Ermington, and all surrounding suburbs. We offer flexible booking times including early starts and weekends. Prices start from $180 for a one-bedroom unit. We are quick to respond and easy to deal with — book with confidence today.",
      },
    ],
    whyUs: [
      "Expert coverage across the City of Ryde district",
      "Garage and outdoor area cleaning available on request",
      "Fast response and easy scheduling",
      "100% Bond Back Guarantee with free 72-hour re-clean",
    ],
  },
  {
    name: "Bankstown",
    slug: "bankstown",
    postcode: "2200",
    metaTitle: "Bond Back Cleaning Bankstown | Tru Bond Cleaning Sydney",
    metaDescription:
      "Professional bond back cleaning in Bankstown. We clean every room to your property manager's checklist. Affordable pricing. Call 0488841883 today.",
    h1: "Bond Back Cleaning in Bankstown",
    intro:
      "Bankstown renters trust us to deliver a clean that gets their bond back. Our team works fast, cleans thoroughly, and guarantees your deposit refund.",
    sections: [
      {
        heading: "Serving Bankstown's Rental Community",
        body: "Bankstown is a large and diverse suburb with thousands of rental properties. Many families and individuals move in and out of Bankstown homes each year. Our team has extensive experience cleaning properties across Bankstown and we understand the local real estate standards. We work efficiently to deliver a clean that passes inspection every time.",
      },
      {
        heading: "Our Bankstown Bond Cleaning Checklist",
        body: "We follow a comprehensive checklist for every Bankstown property. We clean the kitchen from top to bottom — the oven interior, the cooktop, the rangehood, benchtops, sink, and all cupboards. We make bathrooms sparkle — tiles, grout, toilet, shower, and mirrors. We vacuum and mop all floors. We dust and wipe down all surfaces. We clean all windows and window tracks.",
      },
      {
        heading: "Value for Money in Bankstown",
        body: "We believe great cleaning should not cost a fortune. Our Bankstown bond cleaning prices are competitive and fair. A one-bedroom apartment starts from $180. A two-bedroom unit is around $250–$380. A three-bedroom house is around $350–$500. These prices include all cleaning products and equipment. No extras, no surprises. We give you the price before we start and we stick to it.",
      },
      {
        heading: "Easy Booking Across Bankstown",
        body: "Book your Bankstown bond clean by WhatsApp at 0488841883 or online. We service Bankstown, Punchbowl, Greenacre, and all the surrounding south-western suburbs. We are available seven days a week and we often have same-day and next-day spots available. Get a fast quote and get your Bankstown bond clean sorted today.",
      },
    ],
    whyUs: [
      "Competitive pricing for Bankstown's diverse rental market",
      "Experienced with all Bankstown property types and sizes",
      "South-western suburbs coverage including Punchbowl and Greenacre",
      "Seven-day availability with fast response times",
    ],
  },
  {
    name: "Hurstville",
    slug: "hurstville",
    postcode: "2220",
    metaTitle: "Bond Back Cleaning Hurstville | Tru Bond Cleaning Sydney",
    metaDescription:
      "Bond back cleaning in Hurstville and St George area. We get your rental spotless for inspection. 100% bond back guarantee. Book online. Call 0488841883.",
    h1: "Bond Back Cleaning in Hurstville",
    intro:
      "Hurstville is one of Sydney's busiest rental hubs. When you move out, we step in with a professional bond clean that satisfies your property manager and returns your full deposit.",
    sections: [
      {
        heading: "Hurstville's Number One Bond Cleaners",
        body: "Hurstville has a very active rental market and property managers in the area are experienced and thorough. They inspect every room carefully and they know exactly what standard they expect. Our team has cleaned many properties in Hurstville and the St George area. We deliver a clean that meets the highest local standards, which is why our customers keep coming back.",
      },
      {
        heading: "We Clean Every Part of Your Home",
        body: "Our Hurstville bond clean covers everything. Kitchen: oven, stovetop, rangehood, benchtops, sink, and cupboards. Bathrooms: tiles, grout, shower screen, toilet, mirrors, and exhaust fans. Bedrooms and living areas: all floors vacuumed and mopped, dusting, ceiling fans, and blinds. Windows: cleaned inside and out. We also clean the laundry area and any outdoor spaces as required.",
      },
      {
        heading: "Perfect for Hurstville Apartments",
        body: "Hurstville has many apartment buildings and high-rise complexes. Apartment bond cleans need special attention to detail — strata managers often require a professional clean as part of the move-out process. Our team handles apartment cleans regularly and we know what strata and real estate managers expect. We clean lift areas if needed and make sure your apartment is left in perfect condition.",
      },
      {
        heading: "Book Your Hurstville Bond Clean",
        body: "Contact us via WhatsApp at 0488841883 or use our online form. We service Hurstville, Allawah, Penshurst, and the wider St George area. Prices start from $180 for a studio apartment. We offer same-day, next-day, and weekend bookings. Our 100% Bond Back Guarantee gives you confidence that your deposit is coming back to you.",
      },
    ],
    whyUs: [
      "Specialists in Hurstville apartment and high-rise cleaning",
      "Familiar with St George area real estate standards",
      "Laundry and outdoor space cleaning included",
      "Same-day bookings available for urgent Hurstville move-outs",
    ],
  },
  {
    name: "Sutherland",
    slug: "sutherland",
    postcode: "2232",
    metaTitle: "Bond Back Cleaning Sutherland Shire | Tru Bond Cleaning Sydney",
    metaDescription:
      "Bond back cleaning in Sutherland and the Sutherland Shire. Expert cleaners for houses and apartments. 100% bond back guarantee. Call 0488841883.",
    h1: "Bond Back Cleaning in Sutherland",
    intro:
      "Sutherland Shire renters love the relaxed lifestyle. When your lease is up, we make the move-out clean easy. We get your home spotless so your bond comes straight back to you.",
    sections: [
      {
        heading: "The Sutherland Shire Needs a Clean You Can Trust",
        body: "The Sutherland Shire is a beautiful area with a strong sense of community. Renters here take pride in their homes and property managers have high expectations. Our team understands the Shire lifestyle and the local rental standards. We have cleaned many homes across the Sutherland area and we consistently deliver results that satisfy even the most thorough property managers.",
      },
      {
        heading: "A Full Bond Clean for Shire Properties",
        body: "Our Sutherland bond clean includes everything your agent checks. We deep clean the kitchen — every surface, inside the oven, and behind the appliances. We scrub the bathrooms until the tiles and grout are spotless. We vacuum and mop all floors. We clean all windows, including sliding door tracks and fly screens. We wipe down walls, doors, and skirting boards. We do a thorough job every time.",
      },
      {
        heading: "House and Apartment Bond Cleaning",
        body: "The Sutherland area has a great mix of houses, townhouses, and apartments. We clean all property types. For houses, we include outdoor areas like the garage and laundry if required. For apartments, we pay extra attention to balconies, intercom panels, and storage cages. Whatever your Sutherland property looks like, we have the experience to clean it properly.",
      },
      {
        heading: "Get Your Sutherland Bond Clean Organised",
        body: "WhatsApp us at 0488841883 or fill in our quote form. We service Sutherland, Jannali, Como, Kirrawee, and all nearby suburbs across the Shire. We offer seven-day service and flexible booking times. Our prices are upfront and fair. A typical three-bedroom Sutherland house costs around $350–$500 for a full bond clean. Book today and take the stress out of moving.",
      },
    ],
    whyUs: [
      "Deep experience with Sutherland Shire rental standards",
      "House, townhouse, and apartment cleaning all covered",
      "Includes outdoor area, garage, and laundry cleaning",
      "Seven-day flexible scheduling across all Shire suburbs",
    ],
  },
  {
    name: "Castle Hill",
    slug: "castle-hill",
    postcode: "2154",
    metaTitle: "Bond Back Cleaning Castle Hill | Tru Bond Cleaning Sydney",
    metaDescription:
      "Professional bond back cleaning in Castle Hill and The Hills District. We clean to your agent's standard. 100% guarantee. Book today. Call 0488841883.",
    h1: "Bond Back Cleaning in Castle Hill",
    intro:
      "Castle Hill is a fantastic suburb for families. When your rental lease ends, our professional team delivers a bond clean so thorough that your deposit comes back to you in full.",
    sections: [
      {
        heading: "Castle Hill's Trusted Bond Cleaning Team",
        body: "Castle Hill is in The Hills District, one of Sydney's most family-friendly areas. Homes here are often large — four, five, even six bedrooms — and moving out of a big house means a lot of cleaning. Our team loves a challenge. We bring the right number of cleaners and the right equipment to handle any size home in Castle Hill. We get the job done thoroughly and efficiently.",
      },
      {
        heading: "Cleaning Large Family Homes",
        body: "Big homes in Castle Hill have lots of rooms, and each one needs careful attention. We clean every bedroom, every bathroom, and every living area. In the kitchen, we degrease the oven, the stovetop, and the rangehood. We clean inside every cupboard and pantry shelf. We vacuum and mop every floor. We clean all windows throughout the home. We make sure even the rooms that do not get used much are clean and dust-free.",
      },
      {
        heading: "We Handle All The Hills District",
        body: "We service the whole Hills District, not just Castle Hill. This includes Baulkham Hills, Kellyville, Rouse Hill, Winston Hills, and Norwest. Whether you are in a modern estate home or an older established property, we clean it to the same high standard. We are familiar with the real estate agencies that operate in The Hills and we know exactly what standard they expect.",
      },
      {
        heading: "Book Your Castle Hill Bond Clean",
        body: "Get a quote for your Castle Hill property by WhatsApp at 0488841883 or our online form. We offer seven-day service and flexible start times. For a four-bedroom Castle Hill house, a bond clean typically costs $450–$700. We give you a firm price upfront. Our 100% Bond Back Guarantee means if anything is missed, we come back and fix it for free within 72 hours.",
      },
    ],
    whyUs: [
      "Specialists in large family home bond cleaning in The Hills",
      "Full Hills District coverage including Kellyville and Rouse Hill",
      "Extra cleaning staff for larger homes — no corners cut",
      "100% Bond Back Guarantee with 72-hour free re-clean",
    ],
  },
];
