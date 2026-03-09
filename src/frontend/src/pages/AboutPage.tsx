import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { serviceAreas } from "@/data/content";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, MessageCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Tru Bond Cleaning Sydney | Professional End of Lease Cleaners"
        description="Learn about Tru Bond Back Cleaning Sydney. Professional, police-checked, fully insured end of lease cleaners serving all Sydney suburbs. 100% bond back guarantee."
        canonical="/about"
        ogImage="/assets/generated/tru-bond-cleaning-team-sydney.dim_800x500.jpg"
      />

      {/* Hero */}
      <section className="gradient-teal pt-32 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
            About Tru Bond Cleaning
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Sydney's dedicated bond back cleaning specialists. We understand the
            stress of moving out — and we're here to make it easier.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="lg:w-1/2">
              <img
                src="/assets/generated/tru-bond-cleaning-team-sydney.dim_800x500.jpg"
                alt="Tru Bond Cleaning Sydney professional cleaning team"
                className="w-full rounded-2xl shadow-teal"
                loading="eager"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">
                We Built Our Business Around One Goal: Getting Your Bond Back
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tru Bond Cleaning has been serving Sydney tenants for years.
                  We started because we saw too many people lose part or all of
                  their bond due to inadequate cleaning — and we knew we could
                  do better.
                </p>
                <p>
                  Our team understands the stress of moving out. You're juggling
                  removalists, paperwork, utilities, and a hundred other things.
                  The last thing you need is to worry about whether your
                  property is clean enough to pass inspection. That's exactly
                  what we take off your plate.
                </p>
                <p>
                  Our goal is simple — get your bond back in full. We follow
                  REISA-approved checklists that are accepted by all major
                  Sydney real estate agencies. Every cleaner on our team is
                  trained to deliver results that pass even the strictest
                  inspection.
                </p>
                <p>
                  We're fully insured, police-checked, and background-verified.
                  You can trust us in your home because we take that
                  responsibility seriously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-alt py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Not all cleaning companies are the same. Here's what sets Tru Bond
              Cleaning apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🛡️",
                title: "100% Bond Back Guarantee",
                desc: "If your real estate agent finds anything we missed, we come back and re-clean it for free within 72 hours. No arguments, no fuss.",
              },
              {
                icon: "📋",
                title: "Real Estate-Approved Checklists",
                desc: "We use the same checklists that Sydney real estate agencies use for their final inspections. Nothing gets missed, ever.",
              },
              {
                icon: "🔒",
                title: "Fully Insured & Police-Checked",
                desc: "Every member of our team is police-checked, background-verified, and fully insured. You can trust us in your home.",
              },
              {
                icon: "🌿",
                title: "Eco-Friendly Products",
                desc: "We use biodegradable, non-toxic cleaning products that are safe for your kids and pets — and kind to the environment.",
              },
              {
                icon: "⭐",
                title: "5-Star Reputation",
                desc: "Trusted by 2,000+ Sydney tenants with consistently excellent reviews. Our reputation is built on results, not promises.",
              },
              {
                icon: "📅",
                title: "Flexible Bookings",
                desc: "Same-day, next-day, weekend — we fit around your schedule. Moving out is stressful enough without fighting for a booking.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-teal transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="/assets/generated/bond-back-guarantee-sydney.dim_600x400.jpg"
                alt="100% bond back guarantee - Tru Bond Cleaning Sydney"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">
                Our Guarantee to You
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We stand behind every clean we do. If your real estate agent or
                property manager isn't completely satisfied, just let us know
                within 72 hours and we'll come back and re-clean the affected
                areas at absolutely no extra cost.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free re-clean within 72 hours if needed",
                  "No arguments, no hassle — just results",
                  "Works with all Sydney real estate agencies",
                  "Trusted by thousands of happy tenants",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="font-bold">
                <Link to="/contact">Book With Confidence</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-alt py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
              We Service All Sydney Suburbs
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From Parramatta to Bondi, from the North Shore to the Shire — we
              come to you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 bg-white text-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-card"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {area}
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Not sure if we cover your suburb?{" "}
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              WhatsApp us
            </a>{" "}
            and we'll let you know!
          </p>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-3xl font-black text-foreground mb-8 text-center">
            Business Hours
          </h2>
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="gradient-teal p-4 text-white text-center">
              <p className="font-display font-bold text-lg">
                We're here when you need us
              </p>
            </div>
            <div className="divide-y divide-border">
              {[
                { day: "Monday", hours: "7:00am – 7:00pm" },
                { day: "Tuesday", hours: "7:00am – 7:00pm" },
                { day: "Wednesday", hours: "7:00am – 7:00pm" },
                { day: "Thursday", hours: "7:00am – 7:00pm" },
                { day: "Friday", hours: "7:00am – 7:00pm" },
                { day: "Saturday", hours: "7:00am – 7:00pm" },
                { day: "Sunday", hours: "8:00am – 5:00pm" },
              ].map((row) => (
                <div key={row.day} className="flex justify-between px-6 py-3">
                  <span className="font-medium text-foreground">{row.day}</span>
                  <span className="text-primary font-semibold">
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-teal py-14 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Ready to Meet the Team?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Book a bond clean today and see why 2,000+ Sydney tenants trust Tru
            Bond Cleaning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
