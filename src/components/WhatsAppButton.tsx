import { PhoneCall } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/19082904666?text=Hi!%20I'm%20visiting%20Punta%20Cana%20and%20would%20love%20to%20inquire%20about%20your%20boat%20adventures."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center p-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-[#4df38a]/20 group cursor-pointer"
      aria-label="Contact on WhatsApp"
      id="whatsapp-floating-btn"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />
      
      {/* Custom WhatsApp Icon or general Phone icon */}
      <PhoneCall className="w-5 h-5 animate-pulse" />
      
      {/* Slide-out text on hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] group-hover:ml-2.5 transition-all duration-300 text-xs font-bold font-mono tracking-wide uppercase whitespace-nowrap hidden sm:inline-block">
        WhatsApp Us
      </span>
    </a>
  );
}
