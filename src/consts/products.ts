import type { ImageMetadata } from "astro";

// Import all product images
import naturalImage from "../assets/images/products/crema-de-mani-natural.webp";
import chocolateImage from "../assets/images/products/frasco-380-chocolate-fondo-blanco.webp";
import cookiesImage from "../assets/images/products/crema-de-mani-cookies.webp";
import cocoImage from "../assets/images/products/crema-de-mani-coco.webp";
import vainillaImage from "../assets/images/products/crema-de-mani-vainilla.webp";
import mielLiquidaImage from "../assets/images/products/miel-liquida.webp";
import mielSolidaImage from "../assets/images/products/miel-solida.webp";

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  fullDescription?: string;
  image: ImageMetadata;
  weight?: string;
  purchaseLink?: string;
  nutrition: {
    servingSize: string;
    calories: number;
    caloriesKj: number;
    protein: number;
    fat: number;
    saturatedFat: number;
    transFat: number;
    carbs: number;
    fiber: number;
    sodium: number;
  };
  ingredients: string[];
  benefits: string[];
  features?: string[];
  allergens?: string;
  notes?: string[];
  isActive: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "crema-mani-natural",
    name: "Crema de Maní Natural",
    shortDescription: "La esencia de la energía real.",
    description:
      "100% maní seleccionado. Sin azúcar, sin conservantes, sin vueltas.",
    fullDescription:
      "La HARDY NATURAL es nuestro producto estrella — pura potencia nutricional y sabor auténtico. Ideal para quienes entrenan, se mueven y eligen una alimentación real.",
    image: naturalImage,
    weight: "380gr",
    purchaseLink: "https://www.hardymarket.com.ar/productos/hardy-natural1/",
    nutrition: {
      servingSize: "25g (1 cucharada)",
      calories: 119,
      caloriesKj: 498,
      protein: 4.8,
      fat: 9.9,
      saturatedFat: 1.4,
      transFat: 0,
      carbs: 2.7,
      fiber: 1.6,
      sodium: 0,
    },
    ingredients: ["Maní pelado tostado"],
    benefits: ["Alta Proteína", "Energía Natural", "Sin Azúcar Agregado"],
    features: [
      "100% maní tostado seleccionado",
      "Alta en proteínas y grasas buenas",
      "Sin azúcar agregada ni aditivos",
      "Ideal para smoothies, tostadas, bowls o recetas fitness",
    ],
    allergens: "Contiene derivados de maní",
    notes: [
      "Simple. Real. Poderosa. HARDY NATURAL: la base de toda tu energía.",
      "Producto libre de gluten",
      "Conservar en lugar fresco y seco",
      "Normalmente, puede ocurrir la separación del aceite propio del maní",
      "Si esto sucede, tan sólo mezclá y disfrutá de tu Hardy!",
    ],
    isActive: true,
  },
  {
    id: 2,
    slug: "crema-mani-chocolate",
    name: "Crema de Maní Chocolate",
    shortDescription: "Energía real con intensidad de cacao.",
    description:
      "Combinación perfecta de maní premium con cacao de alta calidad.",
    fullDescription:
      "La potencia del maní se encuentra con el cacao real. Para quienes buscan energía con un toque indulgente y nutritivo.",
    image: chocolateImage,
    weight: "380gr",
    nutrition: {
      servingSize: "25g (1 cucharada)",
      calories: 125,
      caloriesKj: 523,
      protein: 4.5,
      fat: 9.5,
      saturatedFat: 2.0,
      transFat: 0,
      carbs: 5.0,
      fiber: 1.8,
      sodium: 5,
    },
    ingredients: [
      "Maní Tostado",
      "Cacao Puro",
      "Azúcar de Coco",
      "Vainilla",
      "Sal Marina",
    ],
    benefits: ["Rico en Antioxidantes", "Mejora el Ánimo", "Dulzura Natural"],
    features: [
      "Fuente natural de proteínas y grasas saludables",
      "Con cacao puro de alta calidad",
      "Sin conservantes ni azúcar agregada",
      "Ideal para smoothies, bowls o post entrenamiento",
    ],
    allergens: "Contiene derivados de maní",
    notes: ["Producto libre de gluten", "Conservar en lugar fresco y seco"],
    isActive: false,
  },
  {
    id: 3,
    slug: "crema-mani-cookies",
    name: "Crema de Maní Cookies",
    shortDescription: "Energía real con sabor a recompensa.",
    description:
      "La combinación perfecta entre la proteína del maní y el sabor intenso de las cookies.",
    fullDescription:
      "HARDY COOKIES te da lo mejor de los dos mundos: nutrición natural y placer real. Sin conservantes, sin azúcar agregada, con la textura justa.",
    image: cookiesImage,
    weight: "380gr",
    purchaseLink:
      "https://www.hardymarket.com.ar/productos/crema-de-mani-cookies/",
    nutrition: {
      servingSize: "25g (1 cucharada)",
      calories: 119,
      caloriesKj: 498,
      protein: 4.8,
      fat: 9.9,
      saturatedFat: 1.4,
      transFat: 0,
      carbs: 2.7,
      fiber: 1.6,
      sodium: 0,
    },
    ingredients: [
      "Maní pelado tostado",
      "ARO: Saborizante Cookies",
      "EDU: Sucralosa",
    ],
    benefits: ["Textura Crujiente", "Sabor Indulgente", "Energía Sostenida"],
    features: [
      "Fuente natural de proteínas y grasas saludables",
      "Sin conservantes ni azúcar agregada",
      "Con trozos reales de cookies",
      "Ideal para snacks, bowls, tostadas o post entrenamiento",
    ],
    allergens: "Contiene derivados de maní y gluten",
    notes: [
      "Cuando necesitás energía, pero también disfrutar. HARDY: alimentá tu instinto.",
      "Conservar en lugar fresco y seco",
    ],
    isActive: true,
  },
  {
    id: 4,
    slug: "crema-mani-coco",
    name: "Crema de Maní Coco",
    shortDescription: "Energía real con frescura natural.",
    description:
      "HARDY COCO combina la potencia proteica del maní con el sabor suave.",
    fullDescription:
      "Una experiencia ligera, cremosa y naturalmente dulce, ideal para quienes buscan energía sin exceso.",
    image: cocoImage,
    weight: "380gr",
    purchaseLink:
      "https://www.hardymarket.com.ar/productos/crema-de-mani-coco/",
    nutrition: {
      servingSize: "25g (1 cucharada)",
      calories: 120,
      caloriesKj: 502,
      protein: 4.7,
      fat: 10,
      saturatedFat: 1.8,
      transFat: 0,
      carbs: 2.7,
      fiber: 1.7,
      sodium: 0,
    },
    ingredients: [
      "Maní pelado tostado",
      "Coco rallado",
      "ARO: Saborizante de coco",
      "Sucralosa",
    ],
    benefits: ["Sabor Tropical", "Grasas Saludables", "Energía Natural"],
    features: [
      "Fuente natural de proteínas y grasas buenas",
      "Sin azúcar agregada ni conservantes",
      "Sabor fresco y equilibrado",
      "Perfecta para bowls, tostadas, batidos o post entrenamiento",
    ],
    allergens: "Contiene derivados de maní y coco",
    notes: [
      "Ligera, natural y real. HARDY COCO — alimentá tu instinto.",
      "Producto libre de gluten",
      "Conservar en lugar fresco y seco",
    ],
    isActive: true,
  },
  {
    id: 5,
    slug: "crema-mani-vainilla",
    name: "Crema de Maní Vainilla",
    shortDescription: "Energía real con un toque suave y natural.",
    description:
      "La clásica crema de maní HARDY, fusionada con el sabor sutil y natural de la vainilla.",
    fullDescription:
      "Perfecta para quienes buscan una experiencia más cremosa, equilibrada y deliciosa sin dejar de lado la nutrición real.",
    image: vainillaImage,
    weight: "380gr",
    purchaseLink:
      "https://www.hardymarket.com.ar/productos/crema-de-mani-vainilla/",
    nutrition: {
      servingSize: "25g (1 cucharada)",
      calories: 119,
      caloriesKj: 498,
      protein: 4.8,
      fat: 9.9,
      saturatedFat: 1.4,
      transFat: 0,
      carbs: 2.7,
      fiber: 1.6,
      sodium: 0,
    },
    ingredients: [
      "Maní pelado tostado",
      "ARO: Saborizante de vainilla",
      "EDU: Sucralosa",
    ],
    benefits: ["Sabor Suave", "Energía Natural", "Dulzura Natural"],
    features: [
      "Fuente natural de proteínas y grasas buenas",
      "Sin conservantes ni azúcar agregada",
      "Sabor suave, dulce y natural",
      "Ideal para batidos, bowls, tostadas o snacks saludables",
    ],
    allergens: "Contiene derivados de maní",
    notes: [
      "Ligera, nutritiva y llena de energía real. HARDY: alimentá tu instinto.",
      "Producto libre de gluten",
      "Conservar en lugar fresco y seco",
    ],
    isActive: true,
  },
  {
    id: 6,
    slug: "miel-liquida",
    name: "Miel Líquida",
    shortDescription: "Dulzura natural y energía pura.",
    description:
      "Miel pura y natural en su estado más fluido. Endulzante natural premium.",
    image: mielLiquidaImage,
    weight: "380gr",
    purchaseLink: "https://www.hardymarket.com.ar/productos/miel-liquida/",
    nutrition: {
      servingSize: "25g (1 cucharada)",
      calories: 85,
      caloriesKj: 356,
      protein: 0.1,
      fat: 0,
      saturatedFat: 0,
      transFat: 0,
      carbs: 21.0,
      fiber: 0,
      sodium: 0,
    },
    ingredients: ["Miel Pura 100%"],
    benefits: ["Endulzante Natural", "Antibacteriano", "Energía Rápida"],
    notes: ["Producto natural", "Conservar en lugar fresco y seco"],
    isActive: true,
  },
  {
    id: 7,
    slug: "miel-solida",
    name: "Miel Sólida",
    shortDescription: "Dulzura natural con textura única.",
    description:
      "Miel cristalizada naturalmente. Textura única y sabor intenso.",
    image: mielSolidaImage,
    weight: "380gr",
    purchaseLink: "https://www.hardymarket.com.ar/productos/miel-solida/",
    nutrition: {
      servingSize: "25g (1 cucharada)",
      calories: 85,
      caloriesKj: 356,
      protein: 0.1,
      fat: 0,
      saturatedFat: 0,
      transFat: 0,
      carbs: 21.0,
      fiber: 0,
      sodium: 0,
    },
    ingredients: ["Miel Pura 100%"],
    benefits: ["Textura Única", "Sabor Intenso", "Conservación Natural"],
    notes: [
      "Producto natural",
      "La cristalización es un proceso natural",
      "Conservar en lugar fresco y seco",
    ],
    isActive: true,
  },
];
