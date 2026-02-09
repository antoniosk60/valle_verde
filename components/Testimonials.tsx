
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#FAF9F6] rounded-full opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Experiencias</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#062C22] mb-4 italic">Lo que dicen nuestros clientes</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="bg-[#FAF9F6] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 text-[#D4AF37]/30">
                  <Quote size={40} fill="currentColor" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < t.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-8">
                  "{t.review}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-10 h-10 bg-[#062C22] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <h4 className="font-bold text-[#062C22] text-sm tracking-wide">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Más de 200 reseñas de 5 estrellas en redes sociales</p>
          <div className="flex justify-center gap-4 grayscale opacity-40">
             <span className="font-serif italic font-bold text-2xl">Google</span>
             <span className="font-serif italic font-bold text-2xl">Facebook</span>
             <span className="font-serif italic font-bold text-2xl">TripAdvisor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
