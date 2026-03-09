import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { services } from "@/data/content";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle, Star } from "lucide-react";
import { useEffect } from "react";

// Render markdown-style bold text
function RichText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-4">
      {lines.map((line) => {
        if (!line.trim()) return null;
        const lineKey = line.slice(0, 40).replace(/\s+/g, "-");

        // Heading lines (lines that end with a colon and start with **)
        if (line.startsWith("**") && line.endsWith("**")) {
          const content = line.replace(/\*\*/g, "");
          return (
            <h3
              key={lineKey}
              className="font-display font-bold text-foreground text-lg mt-6"
            >
              {content}
            </h3>
          );
        }

        // Bullet points
        if (line.startsWith("- **")) {
          const match = line.match(/^- \*\*(.+?)\*\*:? ?(.*)/);
          if (match) {
            return (
              <div key={lineKey} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">{match[1]}:</strong>{" "}
                  {match[2]}
                </p>
              </div>
            );
          }
        }

        if (line.startsWith("- ")) {
          return (
            <div key={lineKey} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {line.slice(2)}
              </p>
            </div>
          );
        }

        // Bold inline text
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p
            key={lineKey}
            className="text-muted-foreground text-base leading-relaxed"
          >
            {parts.map((part) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={part} className="text-foreground font-semibold">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams({ strict: false });
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (!service) {
      navigate({ to: "/services" });
    }
  }, [service, navigate]);

  if (!service) return null;

  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const prevService = serviceIndex > 0 ? services[serviceIndex - 1] : null;
  const nextService =
    serviceIndex < services.length - 1 ? services[serviceIndex + 1] : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Tru Bond Back Cleaning Sydney",
      telephone: "+61488841883",
    },
    areaServed: "Sydney, NSW, Australia",
    keywords: service.keywords.join(", "),
  };

  return (
    <>
      <SEOHead
        title={`${service.title} Sydney | Tru Bond Cleaning | ${service.priceRange}`}
        description={`${service.shortDescription} Professional ${service.title.toLowerCase()} in Sydney. ${service.priceRange}. 100% bond back guarantee. Call 0488841883.`}
        ogImage={service.image}
        canonical={`/services/${service.slug}`}
        schema={serviceSchema}
      />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 section-alt">
        <div className="container mx-auto px-4">
          <nav
            className="flex items-center gap-2 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/services"
              className="hover:text-primary transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-alt pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-teal">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-72 lg:h-96 object-cover"
                  loading="eager"
                />
                <div className="absolute top-4 left-4 bg-primary text-white font-bold text-sm px-3 py-1 rounded-lg">
                  From {service.priceRange}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{service.icon}</span>
                <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                  Professional Service
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">
                {service.title} in Sydney
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {service.shortDescription}
              </p>

              {/* Star rating */}
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-foreground font-semibold text-sm">
                  4.9 / 5
                </span>
                <span className="text-muted-foreground text-sm">
                  (2,000+ reviews)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-bold">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
                <a
                  href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-5 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <RichText text={service.fullDescription} />

            {/* Keywords */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wide mb-3">
                Related searches
              </p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nav between services */}
      <section className="section-alt py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            {prevService ? (
              <Link
                to="/services/$slug"
                params={{ slug: prevService.slug }}
                className="flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                {prevService.title}
              </Link>
            ) : (
              <div />
            )}
            <Button
              asChild
              variant="outline"
              className="font-bold border-primary text-primary"
            >
              <Link to="/services">All Services</Link>
            </Button>
            {nextService ? (
              <Link
                to="/services/$slug"
                params={{ slug: nextService.slug }}
                className="flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                {nextService.title}
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-teal py-14 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Ready to Book {service.title}?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Get a free quote today. We cover all Sydney suburbs and offer
            same-day and weekend bookings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp 0488 841 883
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
