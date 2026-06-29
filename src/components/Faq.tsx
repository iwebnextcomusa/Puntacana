import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { FaqItem } from "../types";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqData: FaqItem[] = [
    {
      id: "faq-1",
      question: "What is included in the boat tours?",
      answer: "All of our standard boat adventures and private yacht charters include: certified expert captain and hospitable crew, top-tier professional snorkeling gear (masks, snorkels, sanitized fins, and USCG-approved life vests), premium tropical open bar (island rum, ice-cold Dominican beers, custom beach cocktails, Coca-Cola, Sprite, and juices), purified bottled water, fresh tropical seasonal fruit plates, and salty light snacks. Private catering packages (such as lobster lunch or champagne catering) are available upon request.",
    },
    {
      id: "faq-2",
      question: "What should I bring with me on the tour?",
      answer: "We highly recommend bringing: reef-safe biodegradable sunscreen (vital for protecting the fragile tropical coral reefs of Bavaro), towels, comfortable swimwear, a light dry set of clothes, sunglasses, a sun hat, and waterproof camera/dry bags for phones. You may also bring pocket cash or credit cards if you wish to buy local coconut drinks, handmade Dominican souvenirs at Saona Island, or tip our hardworking local boat crew.",
    },
    {
      id: "faq-3",
      question: "What is your cancellation and refund policy?",
      answer: "We offer a 100% full money-back refund or free instant rescheduling if you cancel your booking up to 24 hours prior to your scheduled excursion. Cancellations made within 24 hours of departure will receive a 50% refund or a free voucher to reschedule to any date within 12 months. Your booking safety, trust, and flexibility are fully guaranteed.",
    },
    {
      id: "faq-4",
      question: "Can I book a fully private tour or customize our route?",
      answer: "Absolutely! Customized private charters and yacht rentals are our specialty. You can fully specify your departure times, swimming/snorkeling durations, secluded beach stops, and custom food/drink catering. This is perfect for family reunions, couples, bachelor/bachelorette celebrations, corporate retreats, or wedding anniversaries. Call or WhatsApp our Booking Team at (908) 290-4666 to plan your elite custom layout.",
    },
    {
      id: "faq-5",
      question: "Do you provide hotel transportation within Punta Cana?",
      answer: "Yes! We provide convenient, fully air-conditioned roundtrip hotel shuttle transportation from all major resorts, private villas, Airbnb rentals, and condos in the Punta Cana, Bavaro, Cabeza de Toro, Cap Cana, and Uvero Alto areas. Transport is either included or available for a tiny nominal surcharge depending on your selected tour package.",
    },
    {
      id: "faq-6",
      question: "What happens in case of bad weather?",
      answer: "Safety is our absolute absolute priority. If marine conditions are officially deemed unsafe by the Dominican Republic Port Authority (Armada de República Dominicana) or our captains, the excursion will be postponed. In this scenario, you will be offered the choice to reschedule to any other available day or receive a 100% immediate full refund with zero questions asked.",
    },
    {
      id: "faq-7",
      question: "How does the reservation and booking process work?",
      answer: "It is simple and secure! You can fill out our validated online booking inquiry on this website, select your ideal tour, or directly call or message us via WhatsApp at (908) 290-4666. Our booking support based in Elizabeth, NJ will confirm availability, coordinate your custom route or hotel pickup times, and send you a safe digital invoice and official booking ticket. No stress, full USA-level service quality!",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#011627] relative border-t border-white/5">
      {/* Background accents */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-semibold tracking-wider text-[#40E0D0] uppercase mb-5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>EXCURSION HELPDESK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl serif italic font-light text-white mb-6 text-glow leading-tight">
            Frequently Asked <br />
            <span className="not-italic font-extrabold block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Have questions about planning your dream Dominican boat excursion? Find quick answers regarding our inclusions, hotel pick-ups, weather, and safety below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4" id="faq-accordions-list">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/5 border-[#40E0D0]/30 shadow-lg shadow-[#40E0D0]/5"
                    : "bg-glass border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="text-white font-bold text-sm sm:text-base pr-4 leading-snug font-display">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-colors ${
                    isOpen ? "bg-[#FF7F50] text-white border-transparent" : "bg-white/5 text-gray-400 border-white/5"
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer container */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 py-5 sm:py-6 text-gray-300 text-sm sm:text-base leading-relaxed font-light bg-gray-950/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-glass border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-[#40E0D0]">
              <MessageSquare className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Still have questions?</h4>
              <p className="text-gray-400 text-xs mt-1">Get immediate human support in real-time from our Elizabeth or Dominican teams.</p>
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <a
              href="tel:9082904666"
              className="flex-1 sm:flex-initial px-6 py-3.5 bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-500/20 text-center"
            >
              Call (908) 290-4666
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
