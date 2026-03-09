import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { suburbs } from "@/data/suburbs";
import { Link, useParams } from "@tanstack/react-router";
import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  Shield,
  Star,
  Zap,
} from "lucide-react";

export default function SuburbPage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const suburb = suburbs.find((s) => s.slug === slug);

  if (!suburb) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display text-3xl font-black mb-4 text-foreground">
            Suburb Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find a page for that suburb. Check out our full list of
            service areas.
          </p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  // JSON-LD LocalBusiness schema for this suburb
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tru Bond Back Cleaning Sydney",
    description: `Professional bond back cleaning and end of lease cleaning services in ${suburb.name}, Sydney, NSW. 100% bond back guarantee.`,
    url: `https://trubondcleaningsydney.com.au/suburbs/${suburb.slug}`,
    telephone: "+61488841883",
    address: {
      "@type": "PostalAddress",
      addressLocality: suburb.name,
      addressRegion: "NSW",
      postalCode: suburb.postcode,
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "City",
      name: suburb.name,
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
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2000",
    },
  };

  // Get 6 other suburbs for internal linking
  const otherSuburbs = suburbs
    .filter((s) => s.slug !== suburb.slug)
    .slice(0, 6);

  const trustBadges = [
    { icon: <Shield className="h-5 w-5" />, text: "100% Bond Back Guarantee" },
    { icon: <Zap className="h-5 w-5" />, text: "Same-Day Bookings" },
    { icon: <Star className="h-5 w-5" />, text: "5-Star Rated" },
    { icon: <MapPin className="h-5 w-5" />, text: "All Sydney Suburbs" },
  ];

  return (
    <>
      <SEOHead
        title={suburb.metaTitle}
        description={suburb.metaDescription}
        canonical={`/suburbs/${suburb.slug}`}
        schema={localBusinessSchema}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="gradient-teal py-20 text-white"
        aria-label={`Bond cleaning in ${suburb.name} hero`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              {suburb.name} {suburb.postcode} · Sydney NSW
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight">
              {suburb.h1}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              {suburb.intro}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6"
                data-ocid="suburb.primary_button"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <a
                href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="suburb.whatsapp.button"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-lg px-8 py-6 rounded-lg transition-colors shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us Now
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-white/90 text-sm font-medium"
                >
                  <span className="text-white/80">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content + Sidebar ────────────────────────────── */}
      <section
        className="py-16"
        aria-label={`Bond cleaning content for ${suburb.name}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Content */}
            <article className="lg:col-span-2 space-y-8">
              {suburb.sections.map((section, idx) => (
                <div
                  key={section.heading}
                  data-ocid={`suburb.content.item.${idx + 1}`}
                  className="bg-white rounded-2xl p-6 shadow-card"
                >
                  <h2 className="font-display text-xl md:text-2xl font-black text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}

              {/* Why Us */}
              <div className="bg-accent rounded-2xl p-6">
                <h2 className="font-display text-xl md:text-2xl font-black text-foreground mb-4">
                  Why Tru Bond Cleaning for {suburb.name}?
                </h2>
                <ul className="space-y-3">
                  {suburb.whyUs.map((point, idx) => (
                    <li
                      key={point}
                      data-ocid={`suburb.why.item.${idx + 1}`}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6" aria-label="Booking and trust sidebar">
              {/* Trust Badges */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-bold text-foreground text-lg mb-4">
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  {[
                    "100% Bond Back Guarantee",
                    "Real estate-approved checklist",
                    "All products & equipment supplied",
                    "Free re-clean within 72 hours",
                    "Trusted by 2,000+ Sydney tenants",
                    "5-star rated service",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="gradient-teal p-4 text-white text-center">
                  <h3 className="font-display font-bold text-lg">
                    {suburb.name} Pricing Guide
                  </h3>
                  <p className="text-white/80 text-xs">
                    All-inclusive, no hidden fees
                  </p>
                </div>
                <div className="p-4 divide-y divide-border">
                  {[
                    { size: "Studio / 1 Bed", price: "$180–$280" },
                    { size: "2 Bedroom", price: "$250–$380" },
                    { size: "3 Bedroom", price: "$350–$500" },
                    { size: "4+ Bedroom", price: "$450–$700+" },
                  ].map((row) => (
                    <div
                      key={row.size}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="text-foreground text-sm">
                        {row.size}
                      </span>
                      <span className="font-display font-bold text-primary text-sm">
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-accent text-center">
                  <Button
                    asChild
                    className="w-full font-bold"
                    data-ocid="suburb.sidebar.primary_button"
                  >
                    <Link to="/contact">Get Exact Quote</Link>
                  </Button>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#25D366] rounded-2xl p-6 text-white text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Get a quote for your {suburb.name} property in minutes.
                </p>
                <a
                  href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="suburb.sidebar.whatsapp.button"
                  className="inline-flex items-center gap-2 bg-white text-[#25D366] font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp 0488 841 883
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Explore More Suburbs ──────────────────────────────── */}
      <section
        className="section-alt py-14"
        aria-label="Explore more Sydney suburbs"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-black mb-3 text-foreground">
              Explore More Sydney Suburbs
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              We service all these suburbs and more across Greater Sydney.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherSuburbs.map((s, idx) => (
              <Link
                key={s.slug}
                to="/suburbs/$slug"
                params={{ slug: s.slug }}
                data-ocid={`suburbs.item.${idx + 1}`}
                className="bg-white rounded-xl p-4 text-center shadow-card hover:shadow-teal hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors leading-tight mb-1">
                  {s.name}
                </p>
                <p className="text-muted-foreground text-xs">{s.postcode}</p>
                <p className="text-primary text-xs font-semibold mt-2 group-hover:underline">
                  View →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section
        className="gradient-teal py-16 text-white"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
            Our professional team covers {suburb.name} and all surrounding
            Sydney suburbs. Book today — same-day available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6"
              data-ocid="suburb.cta.primary_button"
            >
              <Link to="/contact">Book Now — Free Quote</Link>
            </Button>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburb.cta.whatsapp.button"
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
