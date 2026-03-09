import { ServiceType } from "@/backend.d";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { serviceAreas } from "@/data/content";
import { useActor } from "@/hooks/useActor";
import {
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  preferredDate: string;
  message: string;
}

const serviceOptions = [
  { label: "End of Lease / Bond Back Cleaning", value: ServiceType.endOfLease },
  { label: "Carpet Steam Cleaning", value: ServiceType.carpetAndFloorCare },
  {
    label: "Oven & Kitchen Deep Cleaning",
    value: ServiceType.internalCleaning,
  },
  { label: "Bathroom & Toilet Cleaning", value: ServiceType.tileAndGroutClean },
  { label: "Window Cleaning", value: ServiceType.externalCleaning },
  { label: "Wall Spot Cleaning", value: ServiceType.handsOnAssistance },
  { label: "Full Bond Clean Package", value: ServiceType.endOfLease },
];

// Base64 encoded to avoid displaying the email address directly
const getRecipient = () =>
  atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==");

export default function ContactPage() {
  const { actor } = useActor();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    preferredDate: "",
    message: "",
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.phone || !form.address) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      // Save to backend canister
      if (actor) {
        await actor.submitContactForm(
          form.fullName,
          form.email,
          form.phone,
          form.address,
          (form.serviceType as ServiceType) || ServiceType.endOfLease,
          `${form.message}\n\nPreferred Date: ${form.preferredDate}`,
        );
      }

      // Build mailto link — sends from customer's email to hidden recipient
      const serviceName =
        serviceOptions.find((s) => s.value === form.serviceType)?.label ||
        form.serviceType ||
        "Bond Cleaning";
      const subject = encodeURIComponent(
        `Bond Cleaning Enquiry - ${form.fullName}`,
      );
      const body = encodeURIComponent(
        `Hi Tru Bond Cleaning,\n\nI'd like to enquire about bond cleaning services.\n\nFull Name: ${form.fullName}\nPhone: ${form.phone}\nProperty Address: ${form.address}\nService Required: ${serviceName}\nPreferred Date: ${form.preferredDate}\n\nMessage:\n${form.message}\n\nPlease contact me to confirm the booking and provide a quote.\n\nThank you!`,
      );

      const mailtoLink = `mailto:${getRecipient()}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setSubmitted(true);
      toast.success("Enquiry sent! We'll get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Tru Bond Cleaning Sydney | Free Quote | WhatsApp 0488841883"
        description="Contact Tru Bond Back Cleaning Sydney for a free, no-obligation quote. Book online or WhatsApp 0488841883. Same-day and weekend bookings available across all Sydney suburbs."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="gradient-teal pt-32 pb-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Fill in your details below or WhatsApp us directly. We'll get back
            to you with an upfront price — no obligation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-14">
            {/* Contact Form */}
            <div className="lg:w-7/12">
              {submitted ? (
                <div
                  data-ocid="contact.form.success_state"
                  className="bg-accent rounded-2xl p-12 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-2xl font-black text-foreground mb-3">
                    Enquiry Sent!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Thanks for reaching out. We'll get back to you very soon
                    with your quote. If you need a faster response, WhatsApp us
                    directly.
                  </p>
                  <a
                    href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us Now
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-card p-8"
                  noValidate
                  aria-label="Bond cleaning enquiry form"
                >
                  <h2 className="font-display text-2xl font-black text-foreground mb-6">
                    Book Your Bond Clean
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="fullName"
                        className="font-semibold mb-1.5 block"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Sarah Johnson"
                        value={form.fullName}
                        onChange={(e) =>
                          handleChange("fullName", e.target.value)
                        }
                        required
                        autoComplete="name"
                        data-ocid="contact.form.input"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="font-semibold mb-1.5 block"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        autoComplete="email"
                        data-ocid="contact.form.input"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label
                        htmlFor="phone"
                        className="font-semibold mb-1.5 block"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="04XX XXX XXX"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        autoComplete="tel"
                        data-ocid="contact.form.input"
                      />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="address"
                        className="font-semibold mb-1.5 block"
                      >
                        Property Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="e.g. 45 George Street, Parramatta NSW 2150"
                        value={form.address}
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                        required
                        autoComplete="street-address"
                        data-ocid="contact.form.input"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <Label
                        htmlFor="serviceType"
                        className="font-semibold mb-1.5 block"
                      >
                        Service Required
                      </Label>
                      <Select
                        value={form.serviceType}
                        onValueChange={(val) =>
                          handleChange("serviceType", val)
                        }
                      >
                        <SelectTrigger
                          data-ocid="contact.form.select"
                          id="serviceType"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((opt, i) => (
                            <SelectItem
                              key={`${opt.value}-${i}`}
                              value={`${opt.value}-${i}`}
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <Label
                        htmlFor="preferredDate"
                        className="font-semibold mb-1.5 block"
                      >
                        Preferred Date
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) =>
                          handleChange("preferredDate", e.target.value)
                        }
                        data-ocid="contact.form.input"
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="message"
                        className="font-semibold mb-1.5 block"
                      >
                        Additional Notes
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your property — number of bedrooms, bathrooms, any special requirements..."
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        data-ocid="contact.form.textarea"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-bold text-lg"
                      disabled={submitting}
                      data-ocid="contact.form.submit_button"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending Enquiry...
                        </>
                      ) : (
                        "Send My Free Quote Request"
                      )}
                    </Button>
                    <p className="text-muted-foreground text-xs text-center mt-3">
                      Your details are safe with us. We will never share your
                      information with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-5/12 space-y-6">
              {/* WhatsApp CTA */}
              <div className="bg-[#25D366] rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-xl mb-2">
                  Prefer to Chat?
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  WhatsApp us for a fast, friendly quote. We typically respond
                  within minutes during business hours.
                </p>
                <a
                  href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-[#25D366] font-bold px-5 py-3 rounded-lg transition-colors hover:bg-white/90 w-full"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp 0488 841 883
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-bold text-lg text-foreground">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Mon – Sat", hours: "7:00am – 7:00pm" },
                    { day: "Sunday", hours: "8:00am – 5:00pm" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {row.day}
                      </span>
                      <span className="text-primary font-semibold">
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-bold text-lg text-foreground">
                    Service Areas
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.slice(0, 12).map((area) => (
                    <span
                      key={area}
                      className="bg-accent text-foreground text-xs font-medium px-2 py-1 rounded-md"
                    >
                      {area}
                    </span>
                  ))}
                  <span className="text-muted-foreground text-xs py-1">
                    + many more
                  </span>
                </div>
              </div>

              {/* Why Book Us */}
              <div className="bg-accent rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  Why Book Tru Bond Cleaning?
                </h3>
                <ul className="space-y-2">
                  {[
                    "100% Bond Back Guarantee",
                    "Transparent upfront pricing",
                    "Same-day bookings available",
                    "Police-checked, insured cleaners",
                    "Real estate-approved checklists",
                    "Free re-clean within 72 hours",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
