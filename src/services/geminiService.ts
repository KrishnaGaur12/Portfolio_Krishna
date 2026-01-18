import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, ensure this key is present or handle the error gracefully.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCharacterVariation = async (): Promise<string | null> => {
  if (!apiKey) {
    console.warn("API Key is missing. Skipping Gemini generation.");
    return null;
  }

  try {
    const prompt = "Cute cartoon character peeking over a frame, big round glasses, star eyes, flat vector style, pink pastel colors, white background, kawaii aesthetic, minimal details, vector art";
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
            aspectRatio: "1:1", 
        }
      }
    });

    // Extract image from response
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    return null;
  } catch (error) {
    console.error("Failed to generate character:", error);
    return null;
  }
};