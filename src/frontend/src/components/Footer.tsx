import { serviceAreas } from "@/data/content";
import { suburbs } from "@/data/suburbs";
import { Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img
                src="/assets/generated/tru-bond-cleaning-logo-transparent.dim_400x200.png"
                alt="Tru Bond Cleaning Sydney logo"
                className="h-10 w-auto object-contain mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Sydney's most trusted bond back cleaning specialists. We get your
              bond back — guaranteed.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Serving all Sydney suburbs, NSW</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <Clock className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Mon–Sat 7am–7pm | Sun 8am–5pm</span>
            </div>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" as const },
                { label: "Our Services", href: "/services" as const },
                { label: "About Us", href: "/about" as const },
                { label: "Contact Us", href: "/contact" as const },
                { label: "Get a Free Quote", href: "/contact" as const },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-lg">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                {
                  label: "End of Lease Cleaning",
                  slug: "end-of-lease-cleaning",
                },
                {
                  label: "Carpet Steam Cleaning",
                  slug: "carpet-steam-cleaning",
                },
                {
                  label: "Oven & Kitchen Cleaning",
                  slug: "oven-kitchen-cleaning",
                },
                { label: "Bathroom Cleaning", slug: "bathroom-cleaning" },
                { label: "Window Cleaning", slug: "window-cleaning" },
                { label: "Wall Spot Cleaning", slug: "wall-spot-cleaning" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: link.slug }}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-lg">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {suburbs.map((suburb) => (
                <Link
                  key={suburb.slug}
                  to="/suburbs/$slug"
                  params={{ slug: suburb.slug }}
                  className="text-white/60 hover:text-primary text-xs transition-colors"
                >
                  {suburb.name}
                </Link>
              ))}
            </div>
            {/* Render serviceAreas for additional areas not in suburbs list */}
            {serviceAreas
              .filter(
                (area) =>
                  !suburbs.some(
                    (s) => s.name.toLowerCase() === area.toLowerCase(),
                  ),
              )
              .map((area) => (
                <span key={area} className="text-white/60 text-xs mr-1">
                  {area}
                </span>
              ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {year} Tru Bond Back Cleaning Sydney. All rights reserved.
          </p>
          <p className="text-white/50 text-sm text-center">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
