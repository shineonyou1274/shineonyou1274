import { GoogleGenAI, Type } from "@google/genai";
import { Scenario } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateAiScenario = async (topic: string): Promise<Scenario | null> => {
  if (!apiKey) {
    console.warn("No API Key provided");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Create a Pokemon balance game scenario about "${topic}" (or a random social situation for students if topic is empty) for language education. 
      The scenario must have two options: one 'bad' (aggressive/rude) and one 'good' (assertive/kind).
      
      Assign appropriate Pokemon:
      - Bad option: Poison, Dark, Ghost, or aggressive Fighting/Fire types (e.g., Gengar, Ekans, Mankey).
      - Good option: Fairy, Psychic, Normal, or friendly Grass/Water types (e.g., Pikachu, Chansey, Togepi).
      
      Also provide a background color tailwind class (e.g., bg-slate-800, bg-red-900) that fits the vibe.
      Language: Korean (Hangul).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.INTEGER },
            title: { type: Type.STRING },
            situation: { type: Type.STRING },
            bg: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  type: { type: Type.STRING, enum: ["bad", "good"] },
                  character: { type: Type.STRING },
                  spriteId: { type: Type.INTEGER, description: "National Pokedex ID" },
                  label: { type: Type.STRING },
                  text: { type: Type.STRING },
                  moveName: { type: Type.STRING },
                  feedbackCharacter: { type: Type.STRING },
                  feedback: { type: Type.STRING },
                  score: { type: Type.INTEGER },
                },
                required: ["type", "character", "spriteId", "label", "text", "moveName", "feedbackCharacter", "feedback", "score"]
              }
            }
          },
          required: ["id", "title", "situation", "bg", "options"]
        }
      }
    });

    const data = JSON.parse(response.text || "{}");
    
    // Ensure options are sorted: bad (0) then good (1) to match existing logic
    if (data.options && data.options.length === 2) {
      const bad = data.options.find((o: any) => o.type === 'bad');
      const good = data.options.find((o: any) => o.type === 'good');
      if (bad && good) {
        data.options = [bad, good];
      }
    }

    // Force ID to be unique-ish (handled by caller usually, but good for safety)
    data.id = Date.now();
    return data as Scenario;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return null;
  }
};
