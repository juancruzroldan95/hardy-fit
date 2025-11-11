export interface PackItem {
  productName: string;
  presentation: string;
  boxes: number;
  unitsPerBox: number;
  totalUnits: number;
  unitPrice?: number;
  totalPrice?: number;
  inStock: boolean;
}

export interface Pack {
  id: number;
  slug: string;
  name: string;
  title: string;
  description: string;
  fullDescription?: string;
  minUnits: number;
  totalBoxes: number;
  composition: PackItem[];
  showPrices: boolean;
  benefits?: string[];
  targetAudience: string[];
  notes?: string[];
}

export const PACKS: Pack[] = [
  {
    id: 1,
    slug: "pack-base-mayorista",
    name: "Pack Base Mayorista",
    title: "Pack Base Mayorista (75 u / 5 cajas)",
    description: "Tu primer paso para vender HARDY",
    fullDescription:
      "Este pack está pensado para que puedas probar la rotación de nuestros productos en tu tienda, gimnasio o dietética. Incluye los mejores sabores y miel pura con presentación lista para exhibir.",
    minUnits: 75,
    totalBoxes: 5,
    composition: [
      {
        productName: "Crema de Maní Natural",
        presentation: "380 grs",
        boxes: 2,
        unitsPerBox: 15,
        totalUnits: 30,
        unitPrice: 2990.0,
        totalPrice: 44850.0,
        inStock: true,
      },
      {
        productName: "Crema de Maní Cookies",
        presentation: "380 grs",
        boxes: 1,
        unitsPerBox: 15,
        totalUnits: 15,
        unitPrice: 3190.0,
        totalPrice: 47850.0,
        inStock: true,
      },
      {
        productName: "Crema de Maní Vainilla",
        presentation: "380 grs",
        boxes: 1,
        unitsPerBox: 15,
        totalUnits: 15,
        unitPrice: 3190.0,
        totalPrice: 47850.0,
        inStock: true,
      },
      {
        productName: "Miel Líquida",
        presentation: "500 grs",
        boxes: 1,
        unitsPerBox: 15,
        totalUnits: 15,
        unitPrice: 4990.0,
        totalPrice: 74850.0,
        inStock: true,
      },
    ],
    showPrices: false,
    benefits: [
      "Precio mayorista competitivo",
      "Productos con alta rotación",
      "Presentación lista para exhibir",
      "Sin necesidad de grandes cantidades",
    ],
    targetAudience: [
      "Dietéticas y tiendas saludables",
      "Boxes y gimnasios",
      "Cafeterías fit",
      "Almacenes premium",
    ],
    notes: [
      "LOS PRECIOS EXPRESADOS EN ESTAS LISTAS NO INCLUYEN IVA NI ENVIO",
      "En todos los casos deben ser cajas cerradas conteniendo la misma variedad",
      "La cantidad mínima de compra es de 75 unidades",
    ],
  },
  {
    id: 2,
    slug: "pack-distribuidor-450",
    name: "Pack Distribuidor 450",
    title: "Pack Distribuidor Oficial HARDY (450 u / 30 cajas)",
    description: "Pensado para negocios con rotación constante",
    fullDescription:
      "Ideal para gimnasios, tiendas saludables, emprendimientos mayoristas y distribuidores con cartera activa. Este pack te da acceso al precio más competitivo y a beneficios exclusivos como soporte comercial, contenido promocional y prioridad de reposición.",
    minUnits: 450,
    totalBoxes: 30,
    composition: [
      {
        productName: "Crema de Maní Natural",
        presentation: "380 grs",
        boxes: 12,
        unitsPerBox: 15,
        totalUnits: 180,
        unitPrice: 2790.0,
        totalPrice: 41850.0,
        inStock: true,
      },
      {
        productName: "Crema de Maní Cookies",
        presentation: "380 grs",
        boxes: 6,
        unitsPerBox: 15,
        totalUnits: 90,
        unitPrice: 2990.0,
        totalPrice: 44850.0,
        inStock: true,
      },
      {
        productName: "Crema de Maní Vainilla",
        presentation: "380 grs",
        boxes: 6,
        unitsPerBox: 15,
        totalUnits: 90,
        unitPrice: 2990.0,
        totalPrice: 44850.0,
        inStock: true,
      },
      {
        productName: "Crema de Maní Coco",
        presentation: "380 grs",
        boxes: 3,
        unitsPerBox: 15,
        totalUnits: 45,
        unitPrice: 2990.0,
        totalPrice: 44850.0,
        inStock: true,
      },
      {
        productName: "Miel Líquida Hardy",
        presentation: "500 grs",
        boxes: 2,
        unitsPerBox: 15,
        totalUnits: 30,
        unitPrice: 4490.0,
        totalPrice: 62860.0,
        inStock: true,
      },
      {
        productName: "Miel Sólida Hardy",
        presentation: "500 grs",
        boxes: 1,
        unitsPerBox: 15,
        totalUnits: 15,
        unitPrice: 4490.0,
        totalPrice: 67350.0,
        inStock: true,
      },
    ],
    showPrices: false,
    benefits: [
      "Precio más competitivo",
      "Soporte comercial directo",
      "Contenido promocional exclusivo",
      "Prioridad de reposición",
      "Mix equilibrado de productos",
    ],
    targetAudience: [
      "Gimnasios con alta rotación",
      "Tiendas saludables establecidas",
      "Emprendimientos mayoristas",
      "Distribuidores con cartera activa",
    ],
    notes: [
      "LOS PRECIOS EXPRESADOS EN ESTAS LISTAS NO INCLUYEN IVA NI ENVIO",
      "En todos los casos deben ser cajas cerradas conteniendo la misma variedad",
      "La cantidad mínima de compra es de 450 unidades",
    ],
  },
  {
    id: 3,
    slug: "pack-gran-distribuidor",
    name: "Pack Gran Distribuidor",
    title: "Pack Gran Distribuidor HARDY (900 u / 60 cajas)",
    description: "Nivel Elite del Programa Mayorista Hardy",
    fullDescription:
      "Pensado para distribuidores regionales y mayoristas líderes que buscan máxima rentabilidad, rotación y soporte directo de la marca.",
    minUnits: 900,
    totalBoxes: 60,
    composition: [
      {
        productName: "Hardy Natural",
        presentation: "380 grs",
        boxes: 20,
        unitsPerBox: 15,
        totalUnits: 300,
        unitPrice: 2590.0,
        totalPrice: 38850.0,
        inStock: true,
      },
      {
        productName: "Hardy Cookies",
        presentation: "380 grs",
        boxes: 10,
        unitsPerBox: 15,
        totalUnits: 150,
        unitPrice: 2790.0,
        totalPrice: 41850.0,
        inStock: true,
      },
      {
        productName: "Hardy Vainilla",
        presentation: "380 grs",
        boxes: 10,
        unitsPerBox: 15,
        totalUnits: 150,
        unitPrice: 2790.0,
        totalPrice: 41850.0,
        inStock: true,
      },
      {
        productName: "Hardy Coco",
        presentation: "380 grs",
        boxes: 10,
        unitsPerBox: 15,
        totalUnits: 150,
        unitPrice: 2790.0,
        totalPrice: 41850.0,
        inStock: true,
      },
      {
        productName: "Miel Líquida",
        presentation: "500 grs",
        boxes: 5,
        unitsPerBox: 15,
        totalUnits: 75,
        unitPrice: 3990.0,
        totalPrice: 55860.0,
        inStock: true,
      },
      {
        productName: "Miel Sólida",
        presentation: "500 grs",
        boxes: 5,
        unitsPerBox: 15,
        totalUnits: 75,
        unitPrice: 3990.0,
        totalPrice: 59850.0,
        inStock: true,
      },
    ],
    showPrices: false,
    benefits: [
      "Máxima rentabilidad por volumen",
      "Mejor precio por unidad",
      "Soporte directo de la marca",
      "Material POP exclusivo",
      "Prioridad absoluta en entregas",
      "Asesoramiento comercial personalizado",
    ],
    targetAudience: [
      "Distribuidores regionales",
      "Mayoristas líderes",
      "Cadenas de tiendas",
      "Redes de gimnasios",
    ],
    notes: [
      "LOS PRECIOS EXPRESADOS EN ESTAS LISTAS NO INCLUYEN IVA NI ENVIO",
      "En todos los casos deben ser cajas cerradas conteniendo la misma variedad",
      "La cantidad mínima de compra es de 900 unidades",
    ],
  },
];
