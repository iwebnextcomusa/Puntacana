import { useState } from "react";
import { Clock, Check, Star, Filter, ShieldCheck, Compass, Anchor, Calendar } from "lucide-react";
import heroBg from "../assets/images/hero_background_1782762036664.jpg";
import catamaranBg from "../assets/images/catamaran_adventure_1782762055008.jpg";
import sunsetBg from "../assets/images/sunset_cruise_1782762067351.jpg";
import privateBg from "../assets/images/private_charter_1782762085711.jpg";
import { Tour } from "../types";

interface ToursProps {
  onSelectTour: (tourTitle: string) => void;
}

export default function Tours({ onSelectTour }: ToursProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "private" | "group" | "romantic" | "adventure">("all");

  const toursData: Tour[] = [
    {
      id: "private-boat",
      title: "Private Boat Tours",
      description: "Elite private speedboats and luxury yacht charters. Completely customizable routes, dedicated private crew, and open bar options.",
      duration: "4 to 8 Hours",
      price: "From $399",
      highlights: ["Flexible Departure Times", "Snorkeling Equipment Included", "Customize Beach & Reef Stops", "Optional Champagne & Lunch Catering"],
      image: privateBg,
      category: "private",
      popular: true,
    },
    {
      id: "catamaran-cruise",
      title: "Catamaran Cruises",
      description: "Sail across turquoise lagoons on a spacious, stable catamaran. Sip tropical cocktails from the open bar, swim, and meet new friends.",
      duration: "4 Hours",
      price: "From $85 / person",
      highlights: ["Large Shaded & Sunbathing Areas", "Vibrant Caribbean Music", "Vessel Slides & Water Toys", "Premium Open Bar & Fresh Snacks"],
      image: catamaranBg,
      category: "group",
      popular: false,
    },
    {
      id: "snorkeling",
      title: "Snorkeling Adventures",
      description: "Submerge into the legendary warm waters of Punta Cana. Swim alongside tropical reef fish, sea turtles, stingrays, and friendly nurse sharks.",
      duration: "3 Hours",
      price: "From $59 / person",
      highlights: ["All Snorkeling Gear Provided", "Professional Marine Instructors", "Natural Coral Reef Protection Area", "Post-Snorkel Refreshments Provided"],
      image: catamaranBg,
      category: "adventure",
      popular: false,
    },
    {
      id: "party-boat",
      title: "Party Boat Experiences",
      description: "Bring the ultimate celebration to the ocean! Includes custom music, vibrant floating bar stops, premium Caribbean drinks, and an energy-filled atmosphere.",
      duration: "4 Hours",
      price: "From $75 / person",
      highlights: ["Vessels equipped with DJ Booths", "Stop at Punta Cana Natural Shallow Pool", "Exciting Floating Bar & Drinks", "Professional Entertaining Host"],
      image: catamaranBg,
      category: "group",
      popular: true,
    },
    {
      id: "family-excursion",
      title: "Family Excursions",
      description: "Safe, highly curated, and child-friendly excursions designed for multi-generational families. Safe swimming, beach play, and sandcastle stops.",
      duration: "4 to 6 Hours",
      price: "From $450 (Private Group)",
      highlights: ["Kids' Coast Guard Approved Vests", "Shallow Sandbar Beaches Only", "Flexible, Low-Speed Cruising", "Kid-Friendly Snacks & Juices Provided"],
      image: privateBg,
      category: "private",
      popular: false,
    },
    {
      id: "romantic-sunset",
      title: "Romantic Sunset Cruises",
      description: "The absolute pinnacle of luxury. Toast with premium champagne as you watch the spectacular golden-hour sunset over the calm tropical waves.",
      duration: "3 Hours",
      price: "From $499 (Private Yacht)",
      highlights: ["Elegant Sunset Champagne Toast", "Custom Gourmet Fruit & Cheese Platters", "Exclusive Private Yacht Ambience", "Breathtaking Photo Opportunities"],
      image: sunsetBg,
      category: "romantic",
      popular: true,
    },
    {
      id: "fishing-charters",
      title: "Fishing Charters",
      description: "Embark on a deep-sea fishing quest. Hook legendary blue marlin, mahi-mahi, wahoo, and sailfish with state-of-the-art Shimano tackle.",
      duration: "4 to 8 Hours",
      price: "From $550",
      highlights: ["Shimano Custom Rods & Outriggers", "Professional Captain & Co-Captain", "Beverages & Deep-Sea Bait Included", "Keep and Grill Your Catch Service"],
      image: privateBg,
      category: "adventure",
      popular: false,
    },
    {
      id: "saona-island",
      title: "Saona Island Excursions",
      description: "A full-day luxury excursion to Saona Island. Ride safe speedboats, swim in shallow natural swimming pools, and eat a fresh buffet lunch on pristine white sands.",
      duration: "Full Day (8 Hours)",
      price: "From $99 / person",
      highlights: ["Speedboat and Catamaran Combo Sailing", "Shallow Natural Pool Stingray Swim", "Private Beach Area with Buffet & Bar", "Elizabeth/Punta Cana VIP Concierge Support"],
      image: heroBg,
      category: "adventure",
      popular: true,
    },
  ];

  const filteredTours = toursData.filter(
    (tour) => activeFilter === "all" || tour.category === activeFilter
  );

  const handleBookClick = (tourTitle: string) => {
    // autofill and scroll
    onSelectTour(tourTitle);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const categories = [
    { id: "all", label: "All Adventures" },
    { id: "private", label: "Private Charters" },
    { id: "group", label: "Catamarans & Groups" },
    { id: "adventure", label: "Snorkeling & Adventure" },
    { id: "romantic", label: "Romantic Sunset" },
  ];

  return (
    <section id="tours" className="py-24 bg-[#011627] relative border-t border-white/5">
      {/* Background grid details */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#011627] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(64,224,208,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-semibold tracking-wider text-[#40E0D0] uppercase mb-5">
            <Compass className="w-3.5 h-3.5" />
            <span>EXCURSIONS & CHARTERS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl serif italic font-light text-white mb-6 text-glow leading-tight">
            Elite Dominican <br />
            <span className="not-italic font-extrabold block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
              Ocean Adventures
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Select the perfect vessel and voyage for your group. From customized private VIP yachts to high-energy catamaran social cruises, we offer unmatched safety, comfort, and luxury under the Caribbean sun.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="tours-filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === cat.id
                  ? "bg-[#FF7F50] text-white shadow-lg shadow-orange-500/20 scale-[1.03]"
                  : "bg-white/3 border border-white/5 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10"
              }`}
            >
              {cat.id === "all" && <Filter className="w-3.5 h-3.5" />}
              {cat.id === "private" && <Anchor className="w-3.5 h-3.5" />}
              {cat.id === "adventure" && <ShieldCheck className="w-3.5 h-3.5" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="tours-cards-grid">
          {filteredTours.map((tour) => (
            <article
              key={tour.id}
              className="group flex flex-col h-full rounded-2xl overflow-hidden bg-glass hover:border-[#40E0D0]/30 hover:bg-white/5 hover:shadow-2xl hover:shadow-[#40E0D0]/5 transition-all duration-300 relative"
            >
              {/* Highlight Badge */}
              {tour.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#FF7F50] to-[#E0663B] text-white text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg border border-white/10">
                  ★ Best Seller
                </div>
              )}

              {/* Card Image */}
              <div className="relative aspect-video overflow-hidden z-10">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011627] via-transparent to-transparent opacity-80" />
                
                {/* Duration Badge */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-[#011627]/80 border border-white/10 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold text-[#40E0D0]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{tour.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow z-10 relative">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#40E0D0] transition-colors duration-200">
                    {tour.title}
                  </h3>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-[#40E0D0] block">{tour.price}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {tour.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5 mb-8 mt-auto pt-4 border-t border-white/5">
                  {tour.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#40E0D0] mt-0.5 shrink-0" />
                      <span className="leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <button
                  onClick={() => handleBookClick(tour.title)}
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center tracking-wide text-white bg-white/5 hover:bg-[#FF7F50] border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-orange-500/10 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#40E0D0] group-hover:text-white transition-colors" />
                  <span>Request Custom Booking</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Global Seal / Trust Bar */}
        <div className="mt-16 p-6 rounded-2xl bg-glass border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-[#40E0D0]">
              <ShieldCheck className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">US-Style Security & Support with PuntaCanaBoatAdventures.com</h4>
              <p className="text-gray-400 text-xs mt-1">Book safely with our support office in Elizabeth, NJ. Secure payment options and 100% weather refund guarantee.</p>
            </div>
          </div>
          <button
            onClick={() => handleBookClick("General Excursion Inquiry")}
            className="px-6 py-2.5 bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-orange-500/15 cursor-pointer"
          >
            Inquire Now
          </button>
        </div>

      </div>
    </section>
  );
}
