import { Shield, Users, Compass, Anchor, MapPin } from "lucide-react";
import catamaranInquiryImage from "../assets/images/punta_cana_catamaran_excursion_1782763751735.jpg";

export default function About() {
  const values = [
    {
      icon: Compass,
      title: "Dominican Republic Local Expertise",
      description: "With years of navigating the waters around Punta Cana, Saona Island, and Catalina, we design itineraries that showcase hidden keys, marine life hotspots, and pristine quiet beaches most tourists never get to see.",
    },
    {
      icon: Shield,
      title: "Uncompromising Safety Standards",
      description: "Our modern vessel fleet is subject to daily safety inspections and equipped with certified life-saving systems, premium snorkeling equipment, and full liability insurances. Your safety is our absolute first priority.",
    },
    {
      icon: Users,
      title: "Commitment to Customer Satisfaction",
      description: "We are deeply committed to making your vacation exceptional. From catering customized food and bar menus on private charters to arranging convenient door-to-door shuttle transport, we handle every detail with care.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#011627] relative overflow-hidden border-t border-white/5">
      {/* Decorative Blur Orbs */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-[#FF7F50]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Collage / Imagery Left Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-950 aspect-[4/5] sm:aspect-[3/4] group transition-all duration-500 hover:border-[#40E0D0]/30">
              {/* Image with subtle zoom */}
              <img
                src={catamaranInquiryImage}
                alt="Tropical private catamaran cruise in Punta Cana, Dominican Republic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011627]/90 via-[#011627]/20 to-transparent pointer-events-none" />

              {/* Text Badge Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-cyan-500/20 border border-[#40E0D0]/30 text-[#40E0D0] backdrop-blur-md">
                    <Anchor className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-white text-base leading-tight">Punta Cana Boat Adventures</h4>
                    <p className="text-gray-300 text-xs font-mono">Bavaro, Dominican Republic</p>
                  </div>
                </div>
                <p className="text-gray-200 text-xs leading-relaxed font-light backdrop-blur-[2px] bg-black/10 p-2 rounded-lg border border-white/5">
                  "Our mission is simple: to create unforgettable, premium ocean experiences in the Dominican Republic with world-class local navigation."
                </p>
              </div>


            </div>
          </div>

          {/* Copy Panel Right Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 w-fit text-xs font-semibold tracking-wider text-[#40E0D0] uppercase mb-6">
              <span>Our Story & Mission</span>
            </div>

            <h2 className="text-4xl sm:text-5xl serif italic font-light text-white mb-6 leading-tight text-glow">
              A Passion For Creating <br />
              <span className="not-italic font-extrabold block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
                Unforgettable Journeys
              </span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
              Punta Cana Boat Adventures was founded on a deep, lifelong passion for the ocean and the pristine beauty of the Dominican Republic. With operating vessels directly in Punta Cana and booking support based in Elizabeth, New Jersey, we bridge the gap by providing seamless, secure, and stress-free US-style booking paired with world-class Caribbean excursions.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-10 font-light">
              We specialize in creating bespoke ocean voyages tailored directly to your vacation desires. Whether you are seeking a high-energy snorkeling party boat, a peaceful private romantic sunset cruise with premium champagne, or a family adventure day to Saona Island, our crew handles every single detail with elite care.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 gap-6">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="flex gap-4 p-5 rounded-xl bg-white/3 border border-white/5 hover:border-[#40E0D0]/30 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-[#40E0D0] h-fit">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{val.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
