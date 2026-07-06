import React, { useState, useRef } from "react";
import { Phone, Calendar, Star, Compass, Award, ShieldCheck, Ship, Shield, Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import heroBg from "../assets/images/hero_background_1782762036664.jpg";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#011627]"
    >
      {/* Background Video/Image with Parallax & Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover object-center"
        >
          <source
            src="https://n0depdr1cxzp5kie.public.blob.vercel-storage.com/Punta_Cana_Boat_Adventures_video_202607062202.mp4"
            type="video/mp4"
          />
          <img
            src={heroBg}
            alt="Luxury Speedboat cruising in crystal clear turquoise water in Punta Cana"
            className="w-full h-full object-cover object-center"
          />
        </video>
        {/* Multilayer Gradients for high-end text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011627]/95 via-[#011627]/75 to-[#011627]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011627] via-transparent to-[#011627]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(64,224,208,0.15),transparent_50%)]" />
      </div>

      {/* Modern Mute/Unmute toggle control button */}
      <button
        onClick={toggleMute}
        className="absolute top-28 right-6 md:right-8 z-30 p-3.5 rounded-full bg-[#011627]/80 hover:bg-[#FF7F50] text-white border border-white/10 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
        id="video-mute-toggle"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-5 h-5 text-gray-300 group-hover:text-white" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">Unmute Video</span>
          </>
        ) : (
          <>
            <Volume2 className="w-5 h-5 text-[#40E0D0] group-hover:text-white" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">Mute Video</span>
          </>
        )}
      </button>

      {/* Floating Animated Bubbles / Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px]" />
      </div>

      {/* Top buffer spacing for fixed header */}
      <div className="h-24 shrink-0" />

      {/* Main content centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full my-auto">
        <div className="max-w-3xl flex flex-col items-start text-left">
          
          {/* Top Decorative Line & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1.5px] w-12 bg-[#40E0D0]" />
            <span className="text-xs uppercase tracking-[0.4em] text-[#40E0D0] font-bold">
              Unforgettable Dominican Experiences
            </span>
          </motion.div>

          {/* Immersive display typography headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-7xl md:text-[84px] serif italic leading-[0.95] font-light text-white mb-6 text-glow"
          >
            Escape to the <br />
            <span className="not-italic font-extrabold block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
              Crystal Waters
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-white/70 font-light max-w-xl mb-10 leading-relaxed"
          >
            Explore the hidden tropical gems of Punta Cana with premium private charters, catamaran sunset cruises, and deep-sea coral reef safaris. Fully customized elite routes and top-tier hospitality.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <button
              onClick={handleScrollToContact}
              className="px-10 py-5 bg-[#FF7F50] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-2xl shadow-orange-500/25 transition-all hover:scale-105 active:scale-[0.98] cursor-pointer"
            >
              RESERVE NOW
            </button>

            <button
              onClick={handleScrollToContact}
              className="bg-glass px-10 py-5 rounded-xl font-bold text-xs uppercase tracking-widest text-white hover:bg-white/10 flex items-center justify-center gap-3 transition-all duration-300"
            >
              <span>VIEW TOURS</span>
              <svg className="w-4 h-4 text-[#40E0D0]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Immersive UI Bottom Stat/Feature Bento Grid */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 z-10 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {/* Bento item 1 */}
          <div className="bg-glass p-5 rounded-2xl border border-white/5 shadow-2xl">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Private Boat</h4>
              <Ship className="w-3.5 h-3.5 text-[#40E0D0]" />
            </div>
            <p className="text-sm font-bold text-white font-display">Luxury Yacht Charters</p>
            <div className="mt-4.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-[#40E0D0] rounded-full" />
            </div>
          </div>

          {/* Bento item 2 */}
          <div className="bg-glass p-5 rounded-2xl border border-white/5 shadow-2xl">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Snorkeling</h4>
              <Compass className="w-3.5 h-3.5 text-[#40E0D0]" />
            </div>
            <p className="text-sm font-bold text-white font-display">Coral Reef Safari</p>
            <div className="mt-4.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-[#40E0D0] rounded-full" />
            </div>
          </div>

          {/* Bento item 3 */}
          <div className="bg-glass p-5 rounded-2xl border border-white/5 shadow-2xl">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Capacity</h4>
              <Award className="w-3.5 h-3.5 text-[#40E0D0]" />
            </div>
            <p className="text-sm font-bold text-white font-display">Up to 24 Guests</p>
            <div className="mt-4.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="w-full h-full bg-[#40E0D0] rounded-full" />
            </div>
          </div>

          {/* Bento item 4 */}
          <div className="bg-glass p-5 rounded-2xl border border-white/5 shadow-2xl">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Rating</h4>
              <Star className="w-3.5 h-3.5 text-[#FF7F50] fill-[#FF7F50]" />
            </div>
            <p className="text-sm font-bold text-white font-display">5.0 ★ Excellent</p>
            <div className="mt-4.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="w-full h-full bg-[#40E0D0] rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
