import { useState } from "react";
import { Camera, X, Eye, ZoomIn, Compass } from "lucide-react";
import heroBg from "../assets/images/hero_background_1782762036664.jpg";
import catamaranBg from "../assets/images/catamaran_adventure_1782762055008.jpg";
import sunsetBg from "../assets/images/sunset_cruise_1782762067351.jpg";
import privateBg from "../assets/images/private_charter_1782762085711.jpg";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"All" | "Boats" | "Beaches" | "Snorkeling" | "Wildlife" | "Couples" | "Sunset">("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryData: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Our Flagship Luxury Cruiser",
      category: "Boats",
      image: privateBg,
    },
    {
      id: "gal-2",
      title: "Crystal Waters of Macao Beach",
      category: "Beaches",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-3",
      title: "Snorkeling along Bavaro Reefs",
      category: "Snorkeling",
      image: catamaranBg,
    },
    {
      id: "gal-4",
      title: "Friendly Stingrays in Natural Pool",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-5",
      title: "Elite Yacht Sunset Champagne Toast",
      category: "Sunset",
      image: sunsetBg,
    },
    {
      id: "gal-6",
      title: "Romantic Couples Beach Excursion",
      category: "Couples",
      image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-7",
      title: "Deep Sea Fishing Outriggers",
      category: "Boats",
      image: privateBg,
    },
    {
      id: "gal-8",
      title: "Snorkeling with Sea Turtles",
      category: "Snorkeling",
      image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-9",
      title: "Saona Island Pristine Palm Trees",
      category: "Beaches",
      image: heroBg,
    },
  ];

  const filteredItems = galleryData.filter(
    (item) => activeTab === "All" || item.category === activeTab
  );

  const categories: ("All" | "Boats" | "Beaches" | "Snorkeling" | "Wildlife" | "Couples" | "Sunset")[] = [
    "All",
    "Boats",
    "Beaches",
    "Snorkeling",
    "Wildlife",
    "Couples",
    "Sunset",
  ];

  return (
    <section id="gallery" className="py-24 bg-[#011627] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(64,224,208,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-semibold tracking-wider text-[#40E0D0] uppercase mb-5">
            <Camera className="w-3.5 h-3.5" />
            <span>EXCURSION PHOTO ALBUM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl serif italic font-light text-white mb-6 text-glow leading-tight">
            Capturing the <br />
            <span className="not-italic font-extrabold block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
              Pristine Magic
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Take a visual tour of our private luxury yachts, deep-sea snorkeling reefs, natural pools, and golden-hour sunset cruises. This is what your tropical dream vacation looks like!
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#FF7F50] text-white shadow-lg shadow-orange-500/15"
                  : "bg-white/3 border border-white/5 text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-images-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-glass border border-white/5 cursor-pointer hover:border-[#40E0D0]/30 transition-all duration-300 shadow-xl"
            >
              {/* Image Box */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011627]/90 via-[#011627]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />
                
                {/* Floating zoom button inside image */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 rounded-xl bg-[#FF7F50] text-white shadow-lg shadow-orange-500/30">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Caption bottom on hover */}
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono tracking-widest text-[#40E0D0] uppercase font-bold bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-base mt-2 drop-shadow-md font-display">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-[#011627]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            id="gallery-lightbox"
          >
            <div
              className="relative max-w-4xl w-full bg-glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#011627]/80 text-gray-400 hover:text-white border border-white/10 transition-all hover:scale-105"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Image */}
              <div className="relative aspect-video max-h-[75vh] w-full overflow-hidden bg-[#011627]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lightbox Caption Footer */}
              <div className="p-6 bg-[#011627]/90 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#40E0D0] uppercase">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1 font-display">
                    {selectedImage.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl">
                  <Compass className="w-4 h-4 text-[#40E0D0] animate-spin-slow" />
                  <span>Punta Cana Adventures</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
