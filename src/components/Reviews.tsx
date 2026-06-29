import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { Review } from "../types";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviewsData: Review[] = [
    {
      id: "rev-1",
      name: "Marcus G.",
      location: "Elizabeth, New Jersey",
      rating: 5,
      date: "May 2026",
      comment: "We booked a private boat tour for my family through their Elizabeth office and it was the highlight of our entire Punta Cana trip! The crew was incredibly professional, the snorkeling was out of this world, and the boat was immaculate. Safe, fun, and beautiful!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: "rev-2",
      name: "Sarah & David L.",
      location: "Boston, Massachusetts",
      rating: 5,
      date: "June 2026",
      comment: "The romantic sunset cruise was pure heaven. Sitting on the deck clinking glasses with fresh tropical fruit and the ocean sunset background was stunning. The captain took perfect photos of us. Highly recommend Punta Cana Boat Adventures!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: "rev-3",
      name: "Christian R.",
      location: "New York City, New York",
      rating: 5,
      date: "April 2026",
      comment: "We rented a private catamaran for a corporate retreat party and it exceeded all expectations. Incredible music, premium tropical drinks from the open bar, and swimming in the natural shallow pools. Adolfo Cabrera and his crew made booking a breeze!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: "rev-4",
      name: "Elena M.",
      location: "Miami, Florida",
      rating: 5,
      date: "June 2026",
      comment: "Excellent snorkeling and Saona island trip. The speedboat ride was thrilling and Saona Island was an absolute tropical beach paradise. The buffet lunch and rum drinks on the beach were fantastic. Will definitely book again next summer!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviewsData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [reviewsData.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#011627] relative overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(64,224,208,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-semibold tracking-wider text-[#40E0D0] uppercase mb-5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>REAL TRAVELER REVIEWS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl serif italic font-light text-white mb-6 text-glow leading-tight">
            Loved by <br />
            <span className="not-italic font-extrabold block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
              Thousands of Voyagers
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Read stories and 5-star experiences from families, couples, and group adventurers who sailed with Punta Cana Boat Adventures.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" id="reviews-carousel-wrapper">
          <div className="max-w-4xl mx-auto">
            {/* Carousel Card */}
            <div className="relative rounded-3xl bg-glass border border-white/5 p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-between">
              
              {/* Giant decorative Quote Icon */}
              <div className="absolute top-8 right-8 text-[#40E0D0]/10 pointer-events-none">
                <Quote className="w-24 h-24 stroke-[1.5]" />
              </div>

              {/* Quote details */}
              <div>
                {/* Stars */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(reviewsData[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF7F50] text-[#FF7F50]" />
                  ))}
                </div>

                {/* Main Comment Text */}
                <p className="text-white/90 text-lg sm:text-xl font-light leading-relaxed mb-8 relative z-10">
                  "{reviewsData[activeIndex].comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-4">
                  <img
                    src={reviewsData[activeIndex].avatar}
                    alt={reviewsData[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/20 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-white font-bold text-base leading-tight font-display">
                      {reviewsData[activeIndex].name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {reviewsData[activeIndex].location}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#40E0D0] bg-[#011627]/80 border border-white/5 px-4 py-1.5 rounded-full">
                  Excursion Date: {reviewsData[activeIndex].date}
                </span>
              </div>
            </div>

            {/* Navigation Dots and Arrows */}
            <div className="flex items-center justify-between mt-8 max-w-4xl mx-auto px-2">
              {/* Left arrow */}
              <button
                onClick={handlePrev}
                className="p-3.5 rounded-full bg-white/3 hover:bg-[#FF7F50] hover:text-white border border-white/5 hover:border-transparent text-gray-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Navigation dots */}
              <div className="flex items-center gap-2.5">
                {reviewsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-8 bg-[#40E0D0]" : "w-2.5 bg-gray-700 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Right arrow */}
              <button
                onClick={handleNext}
                className="p-3.5 rounded-full bg-white/3 hover:bg-[#FF7F50] hover:text-white border border-white/5 hover:border-transparent text-gray-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
