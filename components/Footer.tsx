
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="text-3xl font-serif font-bold text-[#D4AF37] block mb-2">DELAR'TE</span>
          <span className="text-xs text-white/40 tracking-[0.5em] uppercase font-light">Ixtapaluca Valle Verde</span>
        </div>
        
        <p className="text-white/50 text-sm max-w-md mx-auto mb-10 font-light leading-relaxed">
          Un rincón donde el arte y el sabor se encuentran para crear momentos inolvidables. Gracias por ser parte de nuestra familia.
        </p>

        <div className="w-full h-px bg-white/5 mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Restaurante Delar'te. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase text-white/40 font-bold">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
