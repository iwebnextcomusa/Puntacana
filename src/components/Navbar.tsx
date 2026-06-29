import React, { useState, useEffect } from "react";
import { Ship, Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tours", href: "#tours" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80, // Navbar height offset
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glassmorphism shadow-xl border-b border-cyan-500/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, "#home")}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="relative p-2 bg-gradient-to-tr from-[#40E0D0] to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-extrabold tracking-tight text-white leading-none">
                  PUNTA CANA
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#40E0D0] font-bold leading-none mt-0.5">
                  BOAT ADVENTURES
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5 bg-white/3 rounded-full p-1 border border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold text-white/70 hover:text-[#40E0D0] hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:9082904666"
                className="flex items-center gap-2 text-sm font-semibold text-[#40E0D0] hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 animate-pulse" />
                <span>(908) 290-4666</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "#contact")}
                className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7F50] text-white text-xs font-bold uppercase tracking-widest rounded-full overflow-hidden shadow-lg shadow-orange-500/20 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4 text-white/90 group-hover:rotate-12 transition-transform" />
                <span>Book Adventure</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <a
                href="tel:9082904666"
                className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="Call Business"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-[#011627]/95 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl md:hidden overflow-hidden py-6 px-4"
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-[#40E0D0] hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/5 my-3" />
              <div className="flex flex-col gap-3">
                <a
                  href="tel:9082904666"
                  className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-white/3 border border-white/10 text-[#40E0D0] font-bold text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (908) 290-4666</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#FF7F50] text-white text-xs font-bold uppercase tracking-widest text-center shadow-lg shadow-orange-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Adventure</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
