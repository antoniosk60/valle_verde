
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getMenuRecommendation = async (userInput: string) => {
  try {
    const menuSummary = MENU_ITEMS.map(item => `${item.name} (${item.category}): ${item.description || ''} - $${item.price}`).join('\n');
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres el asistente virtual de 'Restaurante Delar'te Ixtapaluca'. Tu tono es amable, profesional y elegante.
      Basado en el siguiente menú, recomienda platillos al usuario según lo que pida. Responde en máximo 2 párrafos.
      
      Menú:
      ${menuSummary}
      
      Usuario pregunta: ${userInput}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "¡Hola! Estoy teniendo problemas para ver el menú ahora mismo, pero te recomiendo nuestra Hamburguesa Especial Delar'te o nuestro Menú Ejecutivo. ¿En qué más puedo ayudarte?";
  }
};
