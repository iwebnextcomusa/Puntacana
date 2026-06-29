import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tours from "./components/Tours";
import ThreeDSection from "./components/ThreeDSection";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function App() {
  const [selectedTour, setSelectedTour] = useState("General Excursion Inquiry");

  const handleSelectTour = (tourTitle: string) => {
    setSelectedTour(tourTitle);
  };

  return (
    <div className="min-h-screen bg-[#011627] text-gray-100 flex flex-col font-sans select-none selection:bg-[#FF7F50] selection:text-white" id="main-app-container">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Tours Section */}
        <Tours onSelectTour={handleSelectTour} />

        {/* Interactive 3D section utilizing Three.js */}
        <ThreeDSection />

        {/* Interactive Image Masonry Gallery with Lightbox popup */}
        <Gallery />

        {/* Customer testimonial slider reviews carousel */}
        <Reviews />

        {/* Accordions FAQ Section */}
        <Faq />

        {/* Validated Reservation Contact form & Map coord visualizer */}
        <Contact selectedTour={selectedTour} setSelectedTour={setSelectedTour} />
      </main>

      {/* Floating widgets */}
      <WhatsAppButton />
      <ScrollToTop />
      <Chatbot />

      {/* Footer Section with developed by iWebNext link */}
      <Footer />
    </div>
  );
}
