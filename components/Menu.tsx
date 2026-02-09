
import React, { useState } from 'react';
import { MENU_ITEMS, CATEGORY_ICONS } from '../constants';
import { MenuCategory } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.Breakfast);

  const categories = Object.values(MenuCategory);
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#062C22] mb-4">Nuestro Menú</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Preparados al momento con los ingredientes más frescos para deleitar tu paladar.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#062C22] text-white shadow-lg'
                  : 'bg-white text-[#062C22] border border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              {CATEGORY_ICONS[category]}
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              {item.popular && (
                <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#062C22] text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">
                  Popular
                </div>
              )}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-bold text-[#062C22] group-hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-[#D4AF37] ml-4">
                  ${item.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{item.category}</span>
                <a 
                  href={`https://wa.me/525580876606?text=Hola!%20Me%20gustaría%20pedir:%20${item.name}`}
                  className="text-[#062C22] hover:text-[#D4AF37] text-sm font-bold flex items-center gap-1 transition-colors"
                >
                  Pedir ahora &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-[#062C22] rounded-3xl text-center text-white">
          <h3 className="text-2xl font-serif mb-4 italic">¿No encuentras lo que buscas?</h3>
          <p className="mb-8 opacity-80">Pregunta por nuestros platillos de temporada y opciones especiales del día.</p>
          <a
            href="https://wa.me/525580876606"
            className="inline-block border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-[#062C22] transition-all font-bold"
          >
            Consultar al Chef
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
