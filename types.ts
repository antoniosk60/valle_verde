
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: MenuCategory;
  image?: string;
  popular?: boolean;
}

export enum MenuCategory {
  Breakfast = 'Desayunos',
  Burgers = 'Hamburguesas, Tortas y Burritos',
  Main = 'Platos Fuertes y Menú Ejecutivo',
  Pizza = 'Pizzas y Paquetes',
  Drinks = 'Bebidas y Alcohol'
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  price?: string;
  validity: string;
  image: string;
}
