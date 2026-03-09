import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs, services, trustBadges } from "@/data/content";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Back Cleaning Sydney",
  description:
    "Professional bond back cleaning and end of lease cleaning services in Sydney, NSW. 100% bond back guarantee.",
  url: "https://trubondcleaningsydney.com.au",
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: "Sydney, NSW, Australia",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2000",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.slice(0, 10).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.replace(/\*\*/g, ""),
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Tru Bond Back Cleaning Sydney | 100% Bond Back Guarantee | Expert Vacate Cleaning"
        description="Sydney's #1 bond back cleaning service. Professional end of lease cleaning with a 100% bond back guarantee. Call or WhatsApp 0488841883 for a free quote. All Sydney suburbs covered."
        canonical="/"
        schema={[localBusinessSchema, faqSchema]}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-bond-cleaning-sydney.dim_1200x600.jpg"
            alt="Professional bond back cleaning team in Sydney apartment - Tru Bond Cleaning"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            5-Star Rated · Trusted by 2,000+ Sydney Tenants
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
            Sydney's Most Trusted
            <br />
            <span className="text-primary">Bond Back Cleaning</span>
            <br />
            Service
          </h1>

          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get your full bond back — guaranteed. We clean every corner so your
            landlord smiles and you walk away stress-free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="font-bold text-lg px-8 py-6 shadow-teal"
              data-ocid="hero.primary_button"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.whatsapp.button"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-lg px-8 py-6 rounded-lg transition-colors shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Call Us on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {[
              "100% Bond Back Guarantee",
              "Same-Day Bookings",
              "All Sydney Suburbs",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-white/90 text-sm font-medium"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* ── Trust Badges ──────────────────────────────────────── */}
      <section
        className="section-alt py-14"
        aria-label="Why choose us highlights"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="bg-white rounded-xl p-5 text-center shadow-card hover:shadow-teal transition-shadow"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="font-display font-bold text-foreground text-sm leading-tight mb-1">
                  {badge.title}
                </p>
                <p className="text-muted-foreground text-xs">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ─────────────────────────────────── */}
      <section className="py-20" aria-label="Our cleaning services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-4 text-foreground">
              Everything Your Landlord Checks
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our full bond back cleaning service covers every item on your real
              estate agent's inspection checklist — so nothing gets missed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <article
                key={service.id}
                data-ocid={`services.item.${idx + 1}`}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-teal transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-2 py-1 rounded-lg">
                    {service.priceRange}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-bold border-primary text-primary hover:bg-accent"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Guarantee Section ─────────────────────────────────── */}
      <section
        className="gradient-teal py-20 text-white"
        aria-label="Bond back guarantee"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="/assets/generated/bond-back-guarantee-sydney.dim_600x400.jpg"
                alt="100% bond back guarantee - Tru Bond Cleaning Sydney"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-white/15 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                OUR PROMISE
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black mb-6 leading-tight">
                100% Bond Back Guarantee
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                We're so confident in our cleaning that we guarantee your bond
                back. If your real estate agent finds anything we missed, we
                come back and re-clean it for <strong>absolutely free</strong>{" "}
                within 72 hours.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "No arguments, no fuss — just great cleaning",
                  "Free re-clean within 72 hours if needed",
                  "Real estate-approved checklists used every time",
                  "Trusted by 2,000+ Sydney tenants",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold"
              >
                <Link to="/contact">Book With Confidence</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section
        className="section-alt py-20"
        aria-label="How our bond cleaning works"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Getting your bond back is easy with Tru Bond Cleaning. Four simple
              steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Get a Free Quote",
                desc: "WhatsApp or fill in our form. Tell us your property size and we'll give you an upfront price.",
              },
              {
                step: "02",
                title: "Book Your Clean",
                desc: "Pick a date that suits you — same-day, weekend, or next-day bookings available.",
              },
              {
                step: "03",
                title: "We Do the Work",
                desc: "Our professional team arrives on time and cleans to your real estate agent's checklist.",
              },
              {
                step: "04",
                title: "Get Your Bond Back",
                desc: "Pass the inspection and get your full bond refunded. If not — we re-clean for free!",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center text-white font-display font-black text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Table ─────────────────────────────────────── */}
      <section className="py-20" aria-label="Bond cleaning pricing guide">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-4">
              Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No hidden fees, no surprises. Here's what end of lease cleaning
              typically costs in Sydney.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="gradient-teal p-6 text-white text-center">
                <h3 className="font-display font-bold text-2xl mb-1">
                  Bond Cleaning Price Guide
                </h3>
                <p className="text-white/80 text-sm">
                  Sydney pricing — all-inclusive, no hidden extras
                </p>
              </div>
              <div className="divide-y divide-border">
                {[
                  {
                    size: "Studio / 1 Bedroom Apartment",
                    price: "$180 – $280",
                  },
                  { size: "2 Bedroom Apartment", price: "$250 – $380" },
                  { size: "3 Bedroom House", price: "$350 – $500" },
                  { size: "4+ Bedroom House", price: "$450 – $700+" },
                  {
                    size: "Carpet Steam Cleaning (per room)",
                    price: "$35 – $60",
                  },
                  { size: "Oven Deep Clean (add-on)", price: "$50 – $80" },
                ].map((row) => (
                  <div
                    key={row.size}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span className="text-foreground font-medium text-sm md:text-base">
                      {row.size}
                    </span>
                    <span className="font-display font-bold text-primary text-sm md:text-base">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-accent text-center">
                <p className="text-foreground text-sm mb-4">
                  Get an exact quote for your property — no obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="font-bold">
                    <Link to="/contact">Get Free Quote Online</Link>
                  </Button>
                  <a
                    href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-2 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    WhatsApp Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section
        className="section-alt py-20"
        aria-label="Frequently asked questions"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-4">
              Your Questions Answered
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Everything you need to know about bond cleaning in Sydney.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.question.slice(0, 30)}
                  value={`faq-${idx}`}
                  data-ocid={`faq.item.${idx + 1}`}
                  className="bg-white rounded-xl border border-border px-6 shadow-card"
                >
                  <AccordionTrigger className="font-display font-bold text-foreground text-left py-5 hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section
        className="gradient-teal py-16 text-white"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
            Join 2,000+ happy Sydney tenants who got their full bond back with
            Tru Bond Cleaning. Book today — same-day available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6"
            >
              <Link to="/contact">Book Now — Free Quote</Link>
            </Button>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-lg px-8 py-6 rounded-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp 0488 841 883
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
