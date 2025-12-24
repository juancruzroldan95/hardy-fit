export interface CommercialScale {
  id: number;
  name: string;
  slug: string;
  minUnits: number;
  targetAudience: string;
  description: string;
  clientProfile: string[];
  objectives: string[];
  isActive: boolean;
}

export const COMMERCIAL_SCALES: CommercialScale[] = [
  {
    id: 1,
    name: "Dietética Box",
    slug: "dietetica-box",
    minUnits: 75,
    targetAudience:
      "Pensado para dietéticas, tiendas saludables y puntos de venta chicos que están comenzando a trabajar con HARDY o que manejan un volumen moderado.",
    description: "Desde 75 unidades – 5 cajas",
    clientProfile: [
      "Dietéticas de barrio",
      "Tiendas saludables independientes",
      "Gimnasios o boxes con venta directa al público",
      "Comercios que priorizan rotación cuidada y surtido corto",
    ],
    objectives: [
      "Probar la rotación del producto",
      "Incorporar una marca premium sin sobrestock",
      "Lograr un margen saludable en reventa",
      "Escala ideal para primeros pedidos o comercios con foco en atención personalizada",
    ],
    isActive: true,
  },
  {
    id: 2,
    name: "Mayorista",
    slug: "mayorista",
    minUnits: 150,
    targetAudience:
      "Orientado a comercios consolidados y operadores que ya tienen experiencia en reventa y necesitan mejorar su estructura de costos.",
    description: "Desde 150 unidades",
    clientProfile: [
      "Dietéticas con más de un punto de venta",
      "Tiendas saludables de alto tráfico",
      "Gimnasios con volumen constante de venta",
      "Operadores comerciales locales",
    ],
    objectives: [
      "Optimizar el costo unitario",
      "Aumentar margen o competitividad",
      "Sostener reposiciones frecuentes",
      "Acompaña a quienes ya venden HARDY de forma regular",
    ],
    isActive: true,
  },
  {
    id: 3,
    name: "Distribuidor",
    slug: "distribuidor",
    minUnits: 450,
    targetAudience:
      "Pensado para distribuidores zonales o regionales que abastecen múltiples puntos de venta.",
    description: "Desde 450 unidades",
    clientProfile: [
      "Distribuidores con cartera activa de dietéticas y gimnasios",
      "Mayoristas regionales",
      "Operadores con estructura logística y comercial",
    ],
    objectives: [
      "Desarrollar zonas",
      "Escalar volumen de forma ordenada",
      "Construir presencia de marca en una región",
      "Relación comercial sostenida",
    ],
    isActive: true,
  },
  {
    id: 4,
    name: "Gran Distribuidor",
    slug: "gran-distribuidor",
    minUnits: 900,
    targetAudience:
      "Dirigido a socios estratégicos con capacidad real de expansión territorial y volumen.",
    description: "Desde 900 unidades",
    clientProfile: [
      "Distribuidores provinciales o interprovinciales",
      "Operadores con red logística consolidada",
      "Empresas con capacidad de inversión y planificación",
    ],
    objectives: [
      "Representar a HARDY en una zona",
      "Escalar volumen con previsibilidad",
      "Mantener coherencia de precios y posicionamiento",
      "Crecimiento a largo plazo",
    ],
    isActive: true,
  },
];
