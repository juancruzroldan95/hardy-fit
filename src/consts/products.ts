export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  nutrition: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  ingredients: string[];
  benefits: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Pasta de Maní Original',
    description: 'Maní tostado 100% natural. La esencia pura del maní en su máxima expresión.',
    image: '/src/assets/images/products/frasco-380-natural-fondo-blanco.webp',
    nutrition: {
      calories: 190,
      protein: 8,
      fat: 16,
      carbs: 6
    },
    ingredients: ['Maní Tostado', 'Sal Marina'],
    benefits: ['Alta Proteína', 'Energía Natural', 'Sin Azúcar Agregado']
  },
  {
    id: 2,
    name: 'Pasta de Maní Chocolate',
    description: 'Combinación perfecta de maní premium con cacao de alta calidad.',
    image: '/src/assets/images/products/frasco-380-chocolate-fondo-blanco.webp',
    nutrition: {
      calories: 200,
      protein: 9,
      fat: 16,
      carbs: 8
    },
    ingredients: ['Maní Tostado', 'Cacao Puro', 'Azúcar de Coco', 'Vainilla', 'Sal Marina'],
    benefits: ['Rico en Antioxidantes', 'Mejora el Ánimo', 'Dulzura Natural']
  },
  {
    id: 3,
    name: 'Pasta de Maní Cookies',
    description: 'Maní con trozos de cookies crujientes. Un placer irresistible.',
    image: '/src/assets/images/products/frasco-380-cookies-fondo-blanco.webp',
    nutrition: {
      calories: 210,
      protein: 8,
      fat: 17,
      carbs: 10
    },
    ingredients: ['Maní Tostado', 'Trozos de Cookies', 'Azúcar de Coco', 'Sal Marina'],
    benefits: ['Textura Crujiente', 'Sabor Indulgent', 'Energía Sostenida']
  },
  {
    id: 4,
    name: 'Pasta de Maní Coco',
    description: 'Fusión tropical de maní premium con coco natural.',
    image: '/src/assets/images/products/frasco-380-coco.webp',
    nutrition: {
      calories: 195,
      protein: 8,
      fat: 15,
      carbs: 7
    },
    ingredients: ['Maní Tostado', 'Coco Natural', 'Azúcar de Coco', 'Sal Marina'],
    benefits: ['Sabor Tropical', 'Grasas Saludables', 'Energía Natural']
  },
  {
    id: 5,
    name: 'Miel Líquida',
    description: 'Miel pura y natural en su estado más fluido. Endulzante natural premium.',
    image: '/src/assets/images/products/frasco-380-miel-liquida-fondo-blanco.webp',
    nutrition: {
      calories: 180,
      protein: 0,
      fat: 0,
      carbs: 45
    },
    ingredients: ['Miel Pura 100%'],
    benefits: ['Endulzante Natural', 'Antibacteriano', 'Energía Rápida']
  },
  {
    id: 6,
    name: 'Miel Sólida',
    description: 'Miel cristalizada naturalmente. Textura única y sabor intenso.',
    image: '/src/assets/images/products/frasco-380-miel-solida-fondo-blanco.webp',
    nutrition: {
      calories: 180,
      protein: 0,
      fat: 0,
      carbs: 45
    },
    ingredients: ['Miel Pura 100%'],
    benefits: ['Textura Única', 'Sabor Intenso', 'Conservación Natural']
  }
];
