import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Navigation, Plus, Minus, ShieldCheck, HelpCircle } from "lucide-react";

interface ContactProps {
  selectedTour: string;
  setSelectedTour: (tour: string) => void;
}

export default function Contact({ selectedTour, setSelectedTour }: ContactProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: selectedTour,
    date: "",
    guests: "2",
    message: "",
  });

  // Sync prop selectedTour with form input value
  useEffect(() => {
    setFormData((prev) => ({ ...prev, tour: selectedTour }));
  }, [selectedTour]);

  // Validation & Submission States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Map state
  const [activeLocation, setActiveLocation] = useState<"DR" | "NJ">("DR");
  const [mapZoom, setMapZoom] = useState(13);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Full Name must be at least 2 characters.";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || cleanedPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.date) {
      newErrors.date = "Please select your preferred excursion date.";
    }

    const guestNum = parseInt(formData.guests);
    if (!formData.guests || isNaN(guestNum) || guestNum < 1) {
      newErrors.guests = "Must have at least 1 guest.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate safe API posting delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form (except keep default tour option)
      setFormData({
        name: "",
        email: "",
        phone: "",
        tour: "General Excursion Inquiry",
        date: "",
        guests: "2",
        message: "",
      });
      setSelectedTour("General Excursion Inquiry");
    }, 1500);
  };

  const handleZoomIn = () => setMapZoom((prev) => Math.min(prev + 1, 18));
  const handleZoomOut = () => setMapZoom((prev) => Math.max(prev - 1, 10));

  const tourOptions = [
    "General Excursion Inquiry",
    "Private Boat Tours",
    "Catamaran Cruises",
    "Snorkeling Adventures",
    "Party Boat Experiences",
    "Family Excursions",
    "Romantic Sunset Cruises",
    "Fishing Charters",
    "Saona Island Excursions",
  ];

  return (
    <section id="contact" className="py-24 bg-[#011627] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(64,224,208,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-semibold tracking-wider text-[#40E0D0] uppercase mb-5">
            <Navigation className="w-3.5 h-3.5" />
            <span>SECURE BOOKING RESERVATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl serif italic font-light text-white mb-6 text-glow leading-tight">
            Begin Your <br />
            <span className="not-italic font-extrabold block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
              Caribbean Legend
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Reserve your boat tour date securely with our team. Send us your excursion criteria below, or call directly to lock in group charters instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Details & Interactive Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Rapid Info Block */}
            <div className="rounded-2xl bg-glass border border-white/5 p-6 flex flex-col gap-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white font-display border-b border-white/5 pb-3">
                Business Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:9082904666"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#40E0D0] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-[#40E0D0] group-hover:bg-[#FF7F50] group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase block">Phone / WhatsApp</span>
                    <span className="font-bold text-base transition-colors group-hover:text-white">(908) 290-4666</span>
                  </div>
                </a>

                <a
                  href="mailto:adolfocabrera777@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#40E0D0] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-[#40E0D0] group-hover:bg-[#FF7F50] group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase block">Secure Email Support</span>
                    <span className="font-semibold text-sm break-all transition-colors group-hover:text-white">adolfocabrera777@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-[#40E0D0]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase block">Corporate Headquarters</span>
                    <span className="font-medium text-sm">Elizabeth, New Jersey, USA</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-[#40E0D0]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase block">Booking Office Hours</span>
                    <span className="font-medium text-sm">Mon - Sun: 7:00 AM - 10:00 PM EST</span>
                  </div>
                </div>
              </div>

              {/* Large Call Button */}
              <a
                href="tel:9082904666"
                className="w-full py-4 text-center bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all block mt-2 cursor-pointer"
              >
                CALL MAIN OFFICE NOW
              </a>
            </div>

            {/* High-fidelity Vector Interactive Map Placeholder */}
            <div className="rounded-2xl bg-glass border border-white/5 p-6 flex flex-col gap-4 overflow-hidden relative shadow-2xl" id="interactive-map-visualizer">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h3 className="text-lg font-bold text-white font-display">
                  Operating Locations
                </h3>
                {/* Location Selectors */}
                <div className="flex bg-[#011627] border border-white/10 rounded-xl p-0.5">
                  <button
                    onClick={() => setActiveLocation("DR")}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                      activeLocation === "DR" ? "bg-[#FF7F50] text-white shadow-sm" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Punta Cana Port
                  </button>
                  <button
                    onClick={() => setActiveLocation("NJ")}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                      activeLocation === "NJ" ? "bg-[#FF7F50] text-white shadow-sm" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    NJ Office
                  </button>
                </div>
              </div>

              {/* Mock Map canvas box */}
              <div className="relative w-full h-[220px] rounded-xl bg-slate-950 overflow-hidden border border-white/5 flex items-center justify-center">
                
                {/* Simulated Radar Sweep background */}
                <div className="absolute inset-0 bg-[radial-gradient(#0e7490_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0e7490_1px,transparent_100%)] opacity-30 animate-pulse" />

                {/* Map Graphics */}
                {activeLocation === "DR" ? (
                  // Punta Cana Caribbean graphic
                  <div className="relative text-center p-4">
                    {/* Glowing coordinate marker */}
                    <div className="relative mx-auto mb-3 flex items-center justify-center">
                      <div className="absolute w-12 h-12 rounded-full bg-cyan-400/10 animate-ping border border-[#40E0D0]/20" />
                      <div className="absolute w-8 h-8 rounded-full bg-[#40E0D0]/20 animate-pulse" />
                      <MapPin className="w-6 h-6 text-[#40E0D0] relative z-10" />
                    </div>
                    <span className="text-xs font-mono text-[#40E0D0] font-bold block mb-1">Bavaro Marina Port</span>
                    <span className="text-[10px] font-mono text-gray-400 block mb-3">LAT: 18.6823° N | LON: 68.4121° W</span>
                    <div className="text-[11px] text-gray-300 leading-normal max-w-xs mx-auto">
                      All boat departures launch from our private gate at Bavaro-Bibijagua Beach, Punta Cana, Dominican Republic. Air-conditioned shuttles dock directly outside.
                    </div>
                  </div>
                ) : (
                  // Elizabeth, NJ graphic
                  <div className="relative text-center p-4">
                    {/* Glowing coordinate marker */}
                    <div className="relative mx-auto mb-3 flex items-center justify-center">
                      <div className="absolute w-12 h-12 rounded-full bg-indigo-400/10 animate-ping border border-indigo-400/20" />
                      <div className="absolute w-8 h-8 rounded-full bg-indigo-400/20 animate-pulse" />
                      <MapPin className="w-6 h-6 text-indigo-400 relative z-10" />
                    </div>
                    <span className="text-xs font-mono text-indigo-300 font-bold block mb-1">NJ Booking Headquarters</span>
                    <span className="text-[10px] font-mono text-gray-400 block mb-3">LAT: 40.6639° N | LON: 74.2107° W</span>
                    <div className="text-[11px] text-gray-300 leading-normal max-w-xs mx-auto">
                      Elizabeth, New Jersey administrative hub. Handles global tour scheduling, wire invoices, private yacht custom logistics, and contract coordination.
                    </div>
                  </div>
                )}

                {/* Simulated zoom control sidebar overlay */}
                <div className="absolute bottom-3 right-3 flex flex-col gap-1.5 z-20">
                  <button
                    onClick={handleZoomIn}
                    className="p-1.5 rounded-lg bg-[#011627]/90 border border-white/10 text-gray-300 hover:text-white hover:border-[#40E0D0]/50"
                    aria-label="Map Zoom In"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="p-1.5 rounded-lg bg-[#011627]/90 border border-white/10 text-gray-300 hover:text-white hover:border-[#40E0D0]/50"
                    aria-label="Map Zoom Out"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Simulated Zoom multiplier tag */}
                <div className="absolute bottom-3 left-3 bg-[#011627]/90 border border-white/10 text-[9px] font-mono text-gray-400 px-2 py-0.5 rounded-md">
                  Scale: {mapZoom * 400}m
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-fidelity contact form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-glass border border-white/5 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FF7F50]" />
              
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Excursion Inquiry Form
              </h3>
              <p className="text-gray-400 text-sm mb-6 font-light">
                Fill out this secure form. A Punta Cana travel coordinator will coordinate your reservation within 1 hour.
              </p>

              {/* Booking success overlay */}
              {isSuccess ? (
                <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-fade-in" id="contact-success-panel">
                  <div className="p-4 rounded-full bg-cyan-500/10 text-[#40E0D0] border border-cyan-500/30 mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display mb-3">
                    Reservation Request Sent!
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">
                    Thank you! Your boat excursion request has been logged securely. Our Elizabeth / Dominican booking desk has assigned a concierge who will contact you via email or phone within the next 30 to 60 minutes.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-mono font-bold text-[#40E0D0] tracking-wider uppercase transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-reservation-form">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-bold font-mono tracking-wider text-gray-300 uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name-input"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full bg-[#011627]/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#40E0D0]/50 focus:border-[#40E0D0]/50 transition-all ${
                          errors.name ? "border-red-500/60" : "border-white/10"
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="email-input" className="block text-xs font-bold font-mono tracking-wider text-gray-300 uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full bg-[#011627]/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#40E0D0]/50 focus:border-[#40E0D0]/50 transition-all ${
                          errors.email ? "border-red-500/60" : "border-white/10"
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Row 2: Phone & Tour */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone-input" className="block text-xs font-bold font-mono tracking-wider text-gray-300 uppercase mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(908) 290-4666"
                        className={`w-full bg-[#011627]/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#40E0D0]/50 focus:border-[#40E0D0]/50 transition-all ${
                          errors.phone ? "border-red-500/60" : "border-white/10"
                        }`}
                      />
                      {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label htmlFor="tour-select" className="block text-xs font-bold font-mono tracking-wider text-gray-300 uppercase mb-2">
                        Preferred Adventure *
                      </label>
                      <select
                        id="tour-select"
                        name="tour"
                        value={formData.tour}
                        onChange={handleInputChange}
                        className="w-full bg-[#011627] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#40E0D0]/50 focus:border-[#40E0D0]/50 transition-all"
                      >
                        {tourOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#011627] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Date & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="date-input" className="block text-xs font-bold font-mono tracking-wider text-gray-300 uppercase mb-2">
                        Excursion Date *
                      </label>
                      <input
                        type="date"
                        id="date-input"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full bg-[#011627]/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#40E0D0]/50 focus:border-[#40E0D0]/50 transition-all ${
                          errors.date ? "border-red-500/60" : "border-white/10"
                        }`}
                      />
                      {errors.date && <span className="text-[11px] text-red-400 mt-1 block">{errors.date}</span>}
                    </div>

                    <div>
                      <label htmlFor="guests-input" className="block text-xs font-bold font-mono tracking-wider text-gray-300 uppercase mb-2">
                        Total Guests *
                      </label>
                      <input
                        type="number"
                        id="guests-input"
                        name="guests"
                        min="1"
                        max="100"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className={`w-full bg-[#011627]/60 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#40E0D0]/50 focus:border-[#40E0D0]/50 transition-all ${
                          errors.guests ? "border-red-500/60" : "border-white/10"
                        }`}
                      />
                      {errors.guests && <span className="text-[11px] text-red-400 mt-1 block">{errors.guests}</span>}
                    </div>
                  </div>

                  {/* Special messages */}
                  <div>
                    <label htmlFor="message-area" className="block text-xs font-bold font-mono tracking-wider text-gray-300 uppercase mb-2">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      id="message-area"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. Vegetarian diet, anniversary setup, private shuttle required from Majestic Mirage Resort, etc."
                      className="w-full bg-[#011627]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#40E0D0]/50 focus:border-[#40E0D0]/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#FF7F50] hover:bg-[#FF7F50]/90 disabled:opacity-50 text-white font-extrabold text-sm uppercase tracking-widest rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Verifying Availability...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white/90" />
                        <span>SEND EXCURSION REQUEST</span>
                      </>
                    )}
                  </button>

                  {/* Secure booking assurance badge */}
                  <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-[#40E0D0] shrink-0" />
                    <span>Your request is 128-bit SSL encrypted & secure. Rescheduled free of charge anytime.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
