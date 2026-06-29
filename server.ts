import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client with standard User-Agent header for build tracking
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// AI Chatbot secure API proxy
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const systemInstruction = `You are an expert concierge and tour assistant for Punta Cana Boat Adventures, a premium boat excursion company based in Elizabeth, NJ (USA) but operating in Punta Cana, Dominican Republic. 
Your goal is to help visitors book their dream boat tour, provide accurate and exciting details about the excursions, answer FAQs, and build trust.

Company Details to reference:
- Business Name: Punta Cana Boat Adventures
- Contact Phone: (908) 290-4666 (Call or WhatsApp)
- Email: adolfocabrera777@gmail.com
- Location: Operating in Punta Cana, Dominican Republic, with booking office in Elizabeth, NJ.
- Tours offered: 
  1. Private Boat Tours (exclusive, customizable yachts/speedboats)
  2. Catamaran Cruises (snorkeling, open bar, buffet, music, party/relaxing)
  3. Snorkeling Adventures (beautiful reefs, stingrays, nurse sharks)
  4. Party Boat Experiences (fun vibes, DJ, floating bar, tropical drinks)
  5. Family Excursions (safe, child-friendly, beach stops, Saona Island)
  6. Romantic Sunset Cruises (sunset champagne toast, peaceful, beautiful skies)
  7. Fishing Charters (deep-sea fishing, expert crew, high-end gear)
  8. Saona Island Excursions (pristine beach paradise, speedboats, buffet lunch)

Provide enthusiastic, friendly, helpful, and professional responses. Encourage the user to contact the company via phone or WhatsApp at (908) 290-4666 or via the booking form on the page to lock in their adventure! Keep replies concise, readable with bullet points where appropriate, and exciting.`;

    const contents = [];
    if (history && Array.isArray(history)) {
      for (const h of history) {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }]
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to generate response", details: error.message });
  }
});

// Setup Vite middleware in Dev, Static asset serving in Production
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
