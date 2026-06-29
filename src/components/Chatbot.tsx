import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Anchor, Compass, Phone, AlertCircle, Sparkles } from "lucide-react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "¡Hola! Welcome to Punta Cana Boat Adventures. 🌴 I am your AI concierge. Ask me anything about our catamaran tours, snorkeling, private yacht charters, hotel pickups, or booking policies!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowNotificationBadge(false);
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      role: "user",
      text: textToSend,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Map React messages history to format expected by server
      const historyPayload = messages.slice(1).map((msg) => ({
        role: msg.role,
        text: msg.text,
      }));

      // Call our secure Express backend proxy route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload,
        }),
      });

      if (!response.ok) {
        throw new Error("API Network error");
      }

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        role: "model",
        text: data.text || "I apologize, I didn't get that. Could you try again?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chatbot API connection error:", err);
      // Fallback response with helpful call-to-action
      const errorMsg: ChatMessage = {
        role: "model",
        text: "I am having a temporary connection issue communicating with our booking server, but our human concierge team is standing by! Feel free to Call or WhatsApp us directly at (908) 290-4666 for instant assistance. 📞⛵",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };

  // Quick Questions
  const quickQuestions = [
    "Tell me about Private Boat Tours",
    "What drinks are in the open bar?",
    "Do you pick up from Bavaro resorts?",
    "What is your cancellation policy?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end" id="ai-chatbot-widget">
      {/* Floating Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[520px] max-h-[calc(100vh-100px)] sm:max-h-[calc(100vh-120px)] rounded-2xl bg-[#011627]/95 border border-white/10 shadow-2xl flex flex-col overflow-hidden mb-4 transition-all duration-300 transform scale-100 origin-bottom-right backdrop-blur-xl">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-cyan-950 to-[#011627] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#FF7F50] text-white animate-pulse shadow-md shadow-orange-500/20">
                <Anchor className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm leading-tight flex items-center gap-1.5 font-display">
                  Tropical Concierge
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#40E0D0]/20 text-[8px] font-mono font-bold text-[#40E0D0]">
                    <Sparkles className="w-2 h-2" /> AI
                  </span>
                </h4>
                <p className="text-gray-400 text-[10px] font-mono">Punta Cana Boat Adventures</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#011627]/40">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#FF7F50] text-white rounded-tr-none shadow-lg shadow-orange-500/10 font-medium"
                      : "bg-white/5 border border-white/5 text-gray-200 rounded-tl-none font-light"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Bouncing Typing Dots */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#40E0D0] animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-[#40E0D0] animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-[#40E0D0] animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt chips (shows only initially or when empty chat inputs exist) */}
          <div className="p-3 bg-gray-950/40 border-t border-white/5 space-y-1.5">
            <span className="text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">
              Suggested Questions:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-[85px] overflow-y-auto">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#011627] border border-white/5 hover:border-[#40E0D0]/30 text-[11px] text-gray-300 hover:text-white transition-all text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input Form */}
          <div className="p-3.5 bg-[#011627]/60 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask our tropical AI concierge..."
              className="flex-1 bg-gray-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#40E0D0]/50"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="p-2.5 rounded-xl bg-[#FF7F50] text-white shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white shadow-2xl shadow-orange-500/20 hover:scale-110 active:scale-95 transition-all duration-300 relative border border-white/5 cursor-pointer"
        aria-label="Toggle AI Concierge Chat"
        id="chatbot-toggle-btn"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}

        {/* Unread notification pulse dot */}
        {showNotificationBadge && !isOpen && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 text-[8px] font-bold text-white items-center justify-center">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
