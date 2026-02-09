
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="text-[#D4AF37] uppercase tracking-[0.4em] mb-4 text-sm font-bold animate-fade-in">Bienvenido a Delar'te</p>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          Sabor, arte y tradición en cada platillo
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Descubre la mejor experiencia gastronómica de Ixtapaluca en un ambiente cálido y contemporáneo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-[#D4AF37] text-[#062C22] px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#062C22] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Ver Nuestro Menú
          </a>
          <a
            href="https://wa.me/525580876606"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300"
          >
            Hacer Pedido
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-70">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
