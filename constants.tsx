
import React from 'react';
import { MenuCategory, MenuItem, Promotion } from './types';
import { Coffee, Pizza, Utensils, Beer, Sandwich } from 'lucide-react';

export const COLORS = {
  cream: '#FAF9F6',
  darkGreen: '#062C22',
  gold: '#D4AF37',
  black: '#111111',
};

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Laura Martínez', review: 'Los mejores chilaquiles de la zona. El servicio es excelente y el lugar es muy acogedor para ir en familia.', rating: 5 },
  { id: 't2', name: 'Roberto Gómez', review: 'Frecuento mucho el Menú Ejecutivo por mi trabajo. Siempre variado, rico y a un precio justo. Altamente recomendado.', rating: 5 },
  { id: 't3', name: 'Carmen Ortiz', review: 'Celebramos el bautizo de mi hijo aquí y todo fue perfecto. El personal es muy atento y la comida deliciosa.', rating: 5 },
  { id: 't4', name: 'Daniel Sosa', review: 'La pizza de peperoni tiene ese toque artesanal que no encuentras en las cadenas. ¡Muy buena!', rating: 4 },
];

export const MENU_ITEMS: MenuItem[] = [
  // Desayunos
  { id: 'd1', name: 'Huevos al Gusto', description: 'Dos huevos preparados a tu elección, acompañados de frijoles refritos y chilaquiles.', price: 85, category: MenuCategory.Breakfast, popular: true },
  { id: 'd2', name: 'Chilaquiles Delar\'te', description: 'Verdes o rojos con pollo deshebrado, crema fresca, queso y cebolla morada.', price: 95, category: MenuCategory.Breakfast },
  { id: 'd3', name: 'Hot Cakes Especiales', description: 'Tres piezas esponjosas con fruta de temporada, miel de abeja y mantequilla.', price: 75, category: MenuCategory.Breakfast },
  { id: 'd4', name: 'Omelette Vegetariano', description: 'Claras de huevo con espinaca, champiñones y queso panela.', price: 88, category: MenuCategory.Breakfast },
  
  // Burgers & More
  { id: 'b1', name: 'Hamburguesa Especial VV', description: 'Carne de res premium, queso fundido, tocino crujiente, cebolla caramelizada y papas a la francesa.', price: 125, category: MenuCategory.Burgers, popular: true },
  { id: 'b2', name: 'Torta de Milanesa', description: 'Pan artesanal con milanesa de res, aguacate, quesillo y chipotle.', price: 85, category: MenuCategory.Burgers },
  { id: 'b3', name: 'Burrito Norteño', description: 'Gran tortilla de harina con carne asada, frijoles bayos, queso y pico de gallo.', price: 90, category: MenuCategory.Burgers },
  { id: 'b4', name: 'Club Sandwich', description: 'Triple piso con pollo, jamón, tocino, queso, lechuga y jitomate.', price: 110, category: MenuCategory.Burgers },

  // Platos Fuertes
  { id: 'p1', name: 'Menú Ejecutivo Completo', description: 'Incluye sopa del día, arroz o pasta, plato fuerte a elegir, postre y agua de fruta.', price: 110, category: MenuCategory.Main, popular: true },
  { id: 'p2', name: 'Enchiladas Suizas', description: 'Tres piezas rellenas de pollo bañadas en salsa verde cremosa y gratinadas.', price: 115, category: MenuCategory.Main },
  { id: 'p3', name: 'Pechuga a la Cordon Bleu', description: 'Rellena de jamón y queso, acompañada de ensalada fresca y puré de papa.', price: 145, category: MenuCategory.Main },
  { id: 'p4', name: 'Corte Arrachera (250g)', description: 'Acompañada de una enchilada, guacamole, frijoles y cebollitas cambray.', price: 210, category: MenuCategory.Main },

  // Pizzas
  { id: 'z1', name: 'Pizza Familiar Peperoni', description: 'Masa artesanal delgada con salsa de la casa y abundante peperoni.', price: 195, category: MenuCategory.Pizza },
  { id: 'z2', name: 'Paquete Amigos', description: 'Dos pizzas grandes de especialidad + Una orden de alitas + Refresco 2L.', price: 450, category: MenuCategory.Pizza, popular: true },
  { id: 'z3', name: 'Pizza Hawaiana', description: 'La clásica con jamón y piña natural.', price: 185, category: MenuCategory.Pizza },

  // Bebidas
  { id: 'dr1', name: 'Café de Olla', description: 'Tradicional receta con canela y piloncillo en jarro de barro.', price: 35, category: MenuCategory.Drinks },
  { id: 'dr2', name: 'Cerveza Nacional', description: 'Corona, Victoria o Modelo Especial (355ml).', price: 45, category: MenuCategory.Drinks },
  { id: 'dr3', name: 'Margarita de la Casa', description: 'Frappé con tequila reposado, controy y limón fresco.', price: 95, category: MenuCategory.Drinks },
  { id: 'dr4', name: 'Limonada / Naranjada', description: 'Natural o mineral, endulzada al gusto.', price: 40, category: MenuCategory.Drinks },
  { id: 'dr5', name: 'Clamatada Especial', description: 'Cerveza con mezcla de salsas y clamato.', price: 85, category: MenuCategory.Drinks },
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo1',
    title: 'Paquete Desayuno',
    description: 'Jugo de Naranja o Fruta + Plato Fuerte del Menú + Café de Olla Ilimitado',
    price: '$115',
    validity: 'Lunes a Viernes (8:00 AM - 12:00 PM)',
    image: 'https://images.unsplash.com/photo-149485981460c-38af4a3ce1dd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'promo2',
    title: 'Menú Ejecutivo',
    description: 'La opción más completa para tu comida diaria con el auténtico sazón de casa. Cambia a diario.',
    price: '$110',
    validity: 'Lunes a Viernes (1:00 PM - 5:00 PM)',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800'
  }
];

export const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  [MenuCategory.Breakfast]: <Coffee className="w-6 h-6" />,
  [MenuCategory.Burgers]: <Sandwich className="w-6 h-6" />,
  [MenuCategory.Main]: <Utensils className="w-6 h-6" />,
  [MenuCategory.Pizza]: <Pizza className="w-6 h-6" />,
  [MenuCategory.Drinks]: <Beer className="w-6 h-6" />,
};
