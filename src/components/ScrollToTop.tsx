import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 p-3.5 rounded-full bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/5 cursor-pointer animate-fade-in"
          aria-label="Scroll back to top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-5 h-5 animate-bounce-slow" />
        </button>
      )}
    </>
  );
}
