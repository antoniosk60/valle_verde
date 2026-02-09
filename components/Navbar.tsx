
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú', href: '#menu' },
    { name: 'Promociones', href: '#promociones' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#062C22] shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-2xl font-serif font-bold text-[#D4AF37] leading-none">DELAR'TE</span>
            <span className="text-[10px] text-white/80 tracking-[0.2em] font-light">VALLE VERDE</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/525580876606"
                className="bg-[#D4AF37] text-[#062C22] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#b8942b] transition-all transform hover:scale-105"
              >
                Reservar Mesa
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] p-2"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-[#062C22] transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 border-b border-[#D4AF37]/20' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#D4AF37] block px-3 py-4 text-base font-medium border-b border-white/5 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/525580876606"
            className="w-full text-center block mt-4 bg-[#D4AF37] text-[#062C22] px-4 py-3 rounded-md text-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            PEDIR POR WHATSAPP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
