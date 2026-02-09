
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Promotions from './components/Promotions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import { MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Menu />
        <Promotions />
        <Testimonials />
        <Contact />
        <Location />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/525580876606?text=Hola!%20Me%20gustaría%20hacer%20un%20pedido%20o%20reservar%20una%20mesa."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center gap-2"
        aria-label="Contactar por WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
          ¿Hambre? Escríbenos
        </span>
        <MessageSquare size={28} />
      </a>

      {/* AI Assistant */}
      <AIConsultant />
    </div>
  );
};

export default App;
