export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

export const FAQS: FAQSection[] = [
  {
    id: "productos",
    title: "Sobre los productos",
    items: [
      {
        id: "productos-1",
        question: "¿Las cremas de maní Hardy tienen azúcar agregada?",
        answer:
          "No. Nuestras cremas de maní están elaboradas sin azúcar agregada. Algunas variedades pueden incluir endulzantes naturales o ingredientes extra (como vainilla o sabores), pero siempre lo vas a ver claramente detallado en la etiqueta.",
      },
      {
        id: "productos-2",
        question: "¿Son aptas para personas celíacas?",
        answer:
          'Muchos de nuestros productos son libres de gluten, pero siempre te recomendamos revisar la información del envase para ver el logo "Sin TACC" o la aclaración correspondiente. Ante cualquier duda puntual, escribinos y te asesoramos.',
      },
      {
        id: "productos-3",
        question: "¿Cómo debo conservar la crema de maní?",
        answer:
          "Te recomendamos guardar el frasco en un lugar fresco, seco y lejos de la luz directa del sol. No es necesario refrigerar, pero podés hacerlo si preferís una textura más firme. Si se separa el aceite, es normal: solo mezclá bien y listo.",
      },
    ],
  },
  {
    id: "envios",
    title: "Compras y envíos",
    items: [
      {
        id: "envios-1",
        question: "¿A qué zonas realizan envíos?",
        answer:
          "Realizamos envíos a todo el país a través de correos y operadores logísticos. Durante el proceso de compra vas a ver las opciones disponibles y el costo según tu ubicación.",
      },
      {
        id: "envios-2",
        question: "¿Cuánto tarda en llegar mi pedido?",
        answer:
          "Los tiempos pueden variar según la ciudad y el medio de envío, pero en general los pedidos se entregan entre 3 y 7 días hábiles luego de acreditado el pago. Apenas despachamos tu compra, te enviamos el número de seguimiento.",
      },
      {
        id: "envios-3",
        question: "¿Qué medios de pago aceptan?",
        answer:
          "Podés pagar con tarjeta de crédito, débito, billeteras virtuales y otros medios habilitados en nuestra tienda online. Todas las transacciones se procesan a través de plataformas seguras.",
      },
    ],
  },
  {
    id: "mayoristas",
    title: "Mayoristas y comercios",
    items: [
      {
        id: "mayoristas-1",
        question: "Tengo un local o gimnasio, ¿puedo vender Hardy?",
        answer:
          "¡Obvio! Trabajamos con gimnasios, dietéticas y distintos puntos de venta en todo el país. Podés ver más información en la sección de mayoristas o escribirnos para armar un plan a tu medida.",
      },
      {
        id: "mayoristas-2",
        question: "¿Tienen packs especiales para compra mayorista?",
        answer:
          'Sí, contamos con packs pensados para reventa y para consumo en clubes, boxes y gimnasios. Podés ver nuestras propuestas en la sección "Mayoristas" o contactarnos para recibir una propuesta personalizada.',
      },
    ],
  },
];
