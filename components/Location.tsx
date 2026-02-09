
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#062C22] mb-4">Nuestra Ubicación</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <MapPin size={20} className="text-[#D4AF37]" />
            Valle Verde, Ixtapaluca, Estado de México
          </p>
        </div>

        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-4 border border-gray-100">
          <div className="h-[450px] w-full bg-gray-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15059.697664426867!2d-98.8954441!3d19.3175216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f8f3c7e7e57%3A0xc6c766443c79c882!2sValle%20Verde%2C%2056577%20Ixtapaluca%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Delar'te"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Valle+Verde+Ixtapaluca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#062C22] text-white px-10 py-4 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#062C22] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <Navigation size={20} />
            ¿CÓMO LLEGAR?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
