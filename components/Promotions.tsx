
import React from 'react';
import { PROMOTIONS } from '../constants';
import { Calendar, Clock } from 'lucide-react';

const Promotions: React.FC = () => {
  return (
    <section id="promociones" className="py-24 bg-[#062C22] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">Paquetes y Promociones</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Diseñados para compartir y disfrutar al máximo con los tuyos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROMOTIONS.map((promo) => (
            <div key={promo.id} className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-serif text-[#D4AF37]">{promo.title}</h3>
                  <span className="text-2xl font-bold bg-[#D4AF37] text-[#062C22] px-4 py-1 rounded-lg">{promo.price}</span>
                </div>
                <p className="text-lg mb-6 text-white/90 font-light">{promo.description}</p>
                <div className="flex flex-col gap-3 text-sm text-white/60 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#D4AF37]" />
                    <span>Lunes a Viernes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#D4AF37]" />
                    <span>{promo.validity}</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/525580876606?text=Hola!%20Me%20interesa%20el%20${promo.title}`}
                  className="block w-full text-center bg-white text-[#062C22] py-4 rounded-xl font-bold hover:bg-[#D4AF37] transition-colors"
                >
                  ORDENAR AHORA
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-white/50 text-xs tracking-widest uppercase">
          * NO APLICA EN DÍAS FESTIVOS | DISPONIBILIDAD SUJETA A CAMBIOS
        </div>
      </div>
    </section>
  );
};

export default Promotions;
