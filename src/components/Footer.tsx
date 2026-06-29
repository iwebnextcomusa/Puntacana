import React from "react";
import { Ship, Phone, Mail, MapPin, ExternalLink, Calendar } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#011627] border-t border-white/5 py-16 text-gray-400 relative" id="footer-section">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cyan-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, "#home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="p-2 bg-gradient-to-tr from-[#FF7F50] to-[#FF7F50]/80 rounded-xl shadow-lg shadow-orange-500/10">
                <Ship className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-extrabold tracking-tight text-white leading-none">
                  PUNTA CANA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#40E0D0] font-bold leading-none mt-0.5">
                  BOAT ADVENTURES
                </span>
              </div>
            </a>
            
            <p className="text-sm text-gray-400 font-light mt-2 leading-relaxed">
              Experience the absolute best of Punta Cana's crystal turquoise waters, reef snorkeling, luxury private yachts, and catamaran party cruises. Safe, elite, and unforgettable Caribbean memories.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm font-display tracking-wider uppercase">
              Explore Cruises
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-sm">
              <a
                href="#home"
                onClick={(e) => handleScrollToSection(e, "#home")}
                className="hover:text-[#40E0D0] transition-colors"
              >
                Home Base
              </a>
              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "#about")}
                className="hover:text-[#40E0D0] transition-colors"
              >
                About Us
              </a>
              <a
                href="#tours"
                onClick={(e) => handleScrollToSection(e, "#tours")}
                className="hover:text-[#40E0D0] transition-colors"
              >
                Excursions & Tours
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleScrollToSection(e, "#gallery")}
                className="hover:text-[#40E0D0] transition-colors"
              >
                Photo Gallery
              </a>
              <a
                href="#reviews"
                onClick={(e) => handleScrollToSection(e, "#reviews")}
                className="hover:text-[#40E0D0] transition-colors"
              >
                Reviews & Ratings
              </a>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm font-display tracking-wider uppercase">
              Main Booking Support
            </h4>
            
            <div className="space-y-3.5 text-sm">
              <a
                href="tel:9082904666"
                className="flex items-center gap-3 hover:text-[#40E0D0] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#40E0D0] shrink-0" />
                <span>(908) 290-4666</span>
              </a>

              <a
                href="mailto:adolfocabrera777@gmail.com"
                className="flex items-center gap-3 hover:text-[#40E0D0] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#40E0D0] shrink-0" />
                <span className="break-all">adolfocabrera777@gmail.com</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#40E0D0] shrink-0" />
                <span>Elizabeth, New Jersey, USA (Booking Office)</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#40E0D0] shrink-0" />
                <span>Punta Cana, Dominican Republic (Vessel Port)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub-row with credit aligned centered */}
        <div className="pt-8 flex flex-col items-center justify-center gap-4 text-xs">
          
          <div className="flex flex-wrap justify-center gap-6 mb-2">
            <span className="hover:text-[#40E0D0] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#40E0D0] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#40E0D0] cursor-pointer">Cancellation Policy</span>
          </div>

          <p className="text-gray-500 text-center leading-normal">
            &copy; {currentYear} Punta Cana Boat Adventures. All rights reserved.
          </p>

          <div className="text-gray-500 font-medium text-center mt-2 flex items-center gap-1.5 bg-white/3 border border-white/5 px-4.5 py-2.5 rounded-full shadow-lg">
            <span>Developed by</span>
            <a 
              href="https://iwebnext.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#40E0D0] font-extrabold hover:text-[#40E0D0]/80 hover:underline inline-flex items-center gap-1 transition-all"
            >
              iWebNext
              <ExternalLink className="w-3 h-3 text-[#40E0D0]/70" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
