
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Bot, Loader2 } from 'lucide-react';
import { getMenuRecommendation } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: '¡Hola! Soy tu asistente virtual de Delar\'te. ¿En qué puedo ayudarte hoy? Puedo recomendarte algo del menú según tus gustos.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botResponse = await getMenuRecommendation(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || 'Lo siento, no pude procesar tu solicitud.' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 border border-[#D4AF37]/20 flex flex-col max-h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#062C22] p-4 rounded-t-2xl flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <Bot size={18} className="text-[#062C22]" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Chef Virtual Delar'te</h4>
                <p className="text-[10px] text-white/60">En línea ahora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF9F6]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-[#062C22] text-white rounded-br-none' 
                    : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                  <span className="text-xs text-gray-400">El chef está pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta por recomendaciones..."
                className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-[#D4AF37] text-[#062C22] p-2 rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-[#062C22] border-2 border-[#D4AF37] w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
        >
          <Bot size={28} />
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
