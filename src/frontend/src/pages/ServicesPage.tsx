import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { services } from "@/data/content";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Bond Cleaning Services Sydney | End of Lease, Carpet, Oven & More | Tru Bond Cleaning"
        description="Complete bond back cleaning services in Sydney. End of lease cleaning, carpet steam cleaning, oven & kitchen cleaning, bathroom cleaning, window cleaning, and wall spot cleaning. 100% bond back guarantee."
        canonical="/services"
      />

      {/* Page Header */}
      <section className="gradient-teal pt-32 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Everything your real estate agent checks — covered. Choose from our
            individual services or book a full bond back clean.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <article
                key={service.id}
                data-ocid={`services.item.${idx + 1}`}
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
              >
                <div className="lg:w-5/12">
                  <div className="relative rounded-2xl overflow-hidden shadow-teal">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-72 lg:h-96 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-lg">
                      From {service.priceRange}
                    </div>
                  </div>
                </div>

                <div className="lg:w-7/12">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="bg-accent text-primary text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                      Service {idx + 1}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="font-bold">
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                      >
                        Read Full Details →
                      </Link>
                    </Button>
                    <a
                      href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-5 py-2 rounded-lg transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Get a Quote
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-alt py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-black mb-3">
              Why Choose Tru Bond Cleaning?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We know what Sydney real estate agents look for — and we deliver
              it every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              "100% Bond Back Guarantee — re-clean free within 72 hrs",
              "Trusted by 2,000+ Sydney tenants",
              "Real estate agent-approved checklists used every time",
              "Same-day and weekend bookings available",
              "Eco-friendly, pet-safe cleaning products",
              "Fully insured and police-checked cleaners",
              "Transparent upfront pricing — no hidden fees",
              "5-star Google rated cleaning service",
              "We cover all Sydney suburbs",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-teal py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Ready to Book Your Bond Clean?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Get an upfront quote in minutes. No obligation, no pressure. Just
            great cleaning.
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
