import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%2C%20I%27d%20like%20a%20quote%20for%20bond%20cleaning%20in%20Sydney"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.floating.button"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-4 py-3 rounded-full shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl group"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden group-hover:inline text-sm whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}
