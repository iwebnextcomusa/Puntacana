import { Compass, Anchor, Waves, ZoomIn } from "lucide-react";
import yachtImage from "../assets/images/luxury_catamaran_punta_cana_1782763081756.jpg";

export default function ThreeDSection() {
  return (
    <section 
      id="3d-adventure" 
      className="relative py-24 bg-[#011627] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(64,224,208,0.08),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Image Panel */}
          <div className="lg:col-span-7 animate-fade-in">
            <div 
              className="relative w-full h-[320px] sm:h-[480px] rounded-2xl overflow-hidden bg-glass border border-white/10 shadow-2xl group transition-all duration-500 hover:border-[#40E0D0]/30 cursor-pointer"
            >
              {/* Premium Fleet Tag */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#011627]/80 px-4 py-2 rounded-full border border-white/10 text-xs font-mono font-bold tracking-wider text-[#40E0D0]">
                <Waves className="w-3.5 h-3.5 animate-pulse text-[#FF7F50]" />
                <span>PUNTA CANA ELITE FLEET</span>
              </div>

              {/* Image with zoom effect */}
              <img
                src={yachtImage}
                alt="Luxury Yacht and Catamaran off the coast of Punta Cana"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011627]/90 via-[#011627]/10 to-transparent pointer-events-none" />

              {/* Fleet status tag */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-[#011627]/80 px-3.5 py-1.5 rounded-xl border border-white/5 text-[11px] font-mono text-gray-300">
                <Anchor className="w-3.5 h-3.5 text-[#40E0D0]" />
                <span>Active Vessel: 52ft Luxury Catamaran</span>
              </div>

              {/* View details overlay indicator */}
              <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-1.5 bg-[#FF7F50] text-white px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Exclusive Charter</span>
              </div>
            </div>
          </div>

          {/* Copy Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 w-fit text-xs font-semibold tracking-wider text-[#40E0D0] uppercase mb-6">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>Cutting-Edge Luxury Excursions</span>
            </div>

            <h2 className="text-4xl sm:text-5xl serif italic font-light text-white mb-6 text-glow leading-tight">
              Immersive Caribbean <br />
              <span className="not-italic font-extrabold block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
                Private Charters
              </span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-8 font-light">
              Experience the pristine azure waves and white-sand keys of Punta Cana aboard our state-of-the-art vessel fleet. We combine modern luxury with authentic island navigation to create unforgettable private snorkeling, sunset, and celebration cruises tailored perfectly to your group.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-[#40E0D0]/20 text-[#40E0D0]">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">State-Of-the-Art Elite Fleet</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Every single private yacht and catamaran in our fleet undergoes rigorous daily inspections and is equipped with premier safety gear.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-[#40E0D0]/20 text-[#40E0D0]">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Tailored Navigation Courses</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">We plot customized courses using real-time sea swell forecasts to guarantee the smoothest, most breathtaking cruising conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
