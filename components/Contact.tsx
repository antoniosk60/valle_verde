
import React from 'react';
import { Phone, MessageCircle, Facebook, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4 block">Contacto</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#062C22] mb-8 italic">Estamos para servirte</h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              ¿Tienes un evento especial o simplemente quieres una mesa reservada? Escríbenos o llámanos directamente. Nuestro equipo estará encantado de atenderte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center text-[#D4AF37] shrink-0 shadow-sm group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#062C22]">Teléfonos de Atención</h4>
                  <div className="flex flex-col">
                    <a href="tel:5559747705" className="text-gray-500 hover:text-[#D4AF37] transition-colors">5974 7705</a>
                    <a href="tel:5559747716" className="text-gray-500 hover:text-[#D4AF37] transition-colors">5974 7716</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center text-[#25D366] shrink-0 shadow-sm group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#062C22]">WhatsApp Directo</h4>
                  <a href="https://wa.me/525580876606" className="text-gray-500 hover:text-[#D4AF37] transition-colors">55 8087 6606</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center text-blue-600 shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Facebook size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#062C22]">Facebook Oficial</h4>
                  <a 
                    href="https://www.facebook.com/search/top?q=DELAR%27TE%20VV" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#D4AF37] font-bold hover:underline"
                  >
                    @DELAR'TE VV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#062C22] p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37] rounded-full opacity-10"></div>
             <h3 className="text-3xl font-serif text-[#D4AF37] mb-8">Horarios de Servicio</h3>
             
             <div className="space-y-6">
               <div className="flex justify-between border-b border-white/10 pb-4">
                 <span className="font-bold">Lunes - Viernes</span>
                 <span className="text-white/80">08:00 AM - 10:00 PM</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-4">
                 <span className="font-bold">Sábado</span>
                 <span className="text-white/80">09:00 AM - 11:00 PM</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-4">
                 <span className="font-bold">Domingo</span>
                 <span className="text-white/80">09:00 AM - 08:00 PM</span>
               </div>
             </div>

             <div className="mt-12 flex items-center gap-4">
               <div className="w-10 h-10 border border-[#D4AF37] rounded-full flex items-center justify-center">
                 <Clock className="text-[#D4AF37]" size={20} />
               </div>
               <p className="text-sm italic text-white/60">
                 ¡El arte del buen comer te espera hoy!
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
