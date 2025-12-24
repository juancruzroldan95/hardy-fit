import type { ImageMetadata } from "astro";

// Import all recipe images
import cookiesHardyCrunchImage from "../assets/images/recipes/cookies-hardy-crunch.webp";
import bananaBitesHardyImage from "../assets/images/recipes/banana-bites-hardy.webp";
import miniPancakesProteicosImage from "../assets/images/recipes/mini-pancakes-proteicos-hardy.webp";
import shotEnergiaNaturalImage from "../assets/images/recipes/shot-de-energia-natural-hardy.webp";
import bocaditosHardyCocoImage from "../assets/images/recipes/bocaditos-hardy-coco.webp";
import barritasEnergeticasImage from "../assets/images/recipes/barritas-energeticas-caseras-hardy.webp";
import snackEnergeticoGoImage from "../assets/images/recipes/snack-energetico-go-hardy.webp";
import toastProteicoVainillaImage from "../assets/images/recipes/toast-proteico-vainilla.webp";
import granolaEnergeticaImage from "../assets/images/recipes/granola-energetica.webp";
import smoothieCookiesRecoveryImage from "../assets/images/recipes/smoothie-cookies-recovery.webp";
import panquequesAlimentaImage from "../assets/images/recipes/panqueques-alimenta-tu-instinto.webp";
import overnightOatsImage from "../assets/images/recipes/overnight-oats-energia-real.webp";
import porridgeProteicoImage from "../assets/images/recipes/porridge-proteico-con-hardy.webp";
import tostadasCrunchyImage from "../assets/images/recipes/tostadas crunchy con frutas.webp";
import wafflesFitImage from "../assets/images/recipes/waffles-fit-con-miel-hardy.webp";
import yogurtBowlImage from "../assets/images/recipes/yogurt-bowl-hardy.webp";

export interface RecipeIngredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: ImageMetadata;
  prepTime?: number;
  servings?: number | string;
  difficulty?: string;
  category?: RecipeCategory;
  calories?: number;
  protein?: number;
  isActive?: boolean;
  ingredients: RecipeIngredient[];
  instructions: string[];
  benefits: string[];
  productsUsed: string[];
  tip: string;
}

export type RecipeCategory = "Desayunos y Meriendas" | "Pre/Post Entrenamiento";

export const RECIPES: Recipe[] = [
  {
    id: 1,
    slug: "hardy-cookies",
    title: "Hardy Cookies",
    shortDescription:
      "Sabor intenso, ingredientes reales y energía para todo el día.",
    fullDescription:
      "Avena, chips de chocolate y nuestra crema de maní HARDY Cookies, finalizadas con un toque de miel natural. Un snack simple, potente y listo para acompañar tu entrenamiento o tu café.",
    image: cookiesHardyCrunchImage,
    prepTime: 15,
    servings: "6-8 cookies",
    difficulty: "Fácil",
    category: "Desayunos y Meriendas",
    ingredients: [
      { name: "Huevo", quantity: "1" },
      { name: "Avena", quantity: "3 cdas" },
      { name: "Crema de Maní Cookies HARDY", quantity: "2 cdas" },
      { name: "Miel Líquida HARDY", quantity: "1 cda" },
      { name: "Chips de chocolate amargo", quantity: "1 puñado" },
    ],
    instructions: [
      "En un bowl, mezclá todos los ingredientes hasta lograr una masa uniforme.",
      "Con una cuchara, formá bolitas y colocalas sobre una placa con papel manteca.",
      "Aplastalas suavemente para darles forma de cookie.",
      "Horneá a 180 °C durante 10–12 minutos o hasta que los bordes estén dorados.",
      "Dejalas enfriar sobre una rejilla (¡aunque cuesta esperar!).",
      "Servilas con una cucharadita de Hardy Cookies por encima o con un café bien cargado.",
    ],
    benefits: [
      "100 % ingredientes reales",
      "Energía natural, sin aditivos",
      "Sabor auténtico Hardy",
      "Perfectas como snack o post entreno",
    ],
    productsUsed: ["Crema de Maní Cookies HARDY", "Miel Líquida HARDY"],
    tip: "Si querés una textura más húmeda, agregá 1 cdita extra de Hardy Cookies a la mezcla.",
    isActive: true,
  },
  {
    id: 2,
    slug: "bites-de-banana",
    title: "Bites de Banana",
    shortDescription: "Un snack simple, potente y lleno de energía real.",
    fullDescription:
      "Banana fresca, crema de maní HARDY Natural y un baño de chocolate amargo. Equilibrio perfecto entre nutrición, sabor y rendimiento.",
    image: bananaBitesHardyImage,
    prepTime: 20,
    servings: "8-10 bocados",
    difficulty: "Fácil",
    category: "Pre/Post Entrenamiento",
    ingredients: [
      { name: "Banana", quantity: "1" },
      { name: "Crema de Maní Natural HARDY", quantity: "2 cdas" },
      { name: "Miel Líquida HARDY", quantity: "1 cda" },
      {
        name: "Chocolate amargo derretido (mín. 70%)",
        quantity: "100 g",
      },
    ],
    instructions: [
      "Cortá la banana en rodajas de 1 cm aprox.",
      "Untá una rodaja con Crema de Maní HARDY, agregá un toque de miel y cerrá con otra rodaja, formando un 'sandwichito'.",
      "Sumergí cada bocado en el chocolate derretido.",
      "Colocalos sobre papel manteca y llevá al freezer 1 hora o hasta que el chocolate esté firme.",
      "¡Listo! Tenés tus Banana Bites HARDY: energía real en formato dulce y helado.",
    ],
    benefits: [
      "Banana: aporta potasio y energía rápida",
      "Crema de Maní HARDY Natural: grasas buenas + proteínas vegetales",
      "Miel Líquida HARDY: dulzura natural, sin refinados",
      "Chocolate amargo: antioxidantes y placer real",
    ],
    productsUsed: ["Crema de Maní Natural HARDY", "Miel Líquida HARDY"],
    tip: "Snack helado sin culpa y lleno de energía real. Perfecto para después de entrenar o como postre fit.",
    isActive: true,
  },
  {
    id: 3,
    slug: "pancakes-con-hardy-cookies",
    title: "Pancakes con Hardy Cookies",
    shortDescription: "Suaves, nutritivos y con un sabor que eleva tu rutina.",
    fullDescription:
      "Avena, banana y nuestra crema de maní HARDY Cookies, coronados con miel natural para un final intenso y equilibrado. Un ritual simple para después de entrenar o para empezar el día con potencia.",
    image: miniPancakesProteicosImage,
    prepTime: 15,
    servings: "6-8 mini pancakes",
    difficulty: "Fácil",
    category: "Pre/Post Entrenamiento",
    ingredients: [
      { name: "Banana madura", quantity: "1" },
      { name: "Huevo", quantity: "1" },
      { name: "Avena", quantity: "1 cda" },
      { name: "Crema de Maní HARDY Cookies", quantity: "1 cda" },
      { name: "Miel Líquida HARDY (para decorar)", quantity: "Al gusto" },
    ],
    instructions: [
      "En una licuadora o procesadora, colocá la banana, el huevo, la avena y la crema de maní.",
      "Procesá hasta obtener una mezcla homogénea.",
      "Calentá una sartén antiadherente con unas gotas de aceite o rocío vegetal.",
      "Verté pequeñas porciones para formar los mini pancakes.",
      "Cociná 1 minuto por lado hasta dorar.",
      "Servilos apilados, con un toque de Crema de Maní Cookies HARDY y un hilo de miel líquida por encima.",
    ],
    benefits: [
      "Banana: fuente natural de energía y potasio",
      "Avena: aporta fibra y carbohidratos complejos",
      "Crema de Maní HARDY Cookies: proteínas y grasas buenas para sostener la energía",
      "Miel Líquida HARDY: endulzante natural con poder antioxidante",
    ],
    productsUsed: ["Crema de Maní Cookies HARDY", "Miel Líquida HARDY"],
    tip: "Ideal para fotos, reels y desayunos ricos en energía real. Súper fácil de preparar, con sabor auténtico y textura irresistible.",
    isActive: true,
  },
  {
    id: 4,
    slug: "shot-energia-natural",
    title: "Shot de Energía Natural Hardy",
    shortDescription: "Una combinación simple, pura y llena de energía real.",
    fullDescription:
      "Textura suave, miel dorada y un equilibrio perfecto entre nutrición y sabor. Ideal para sumar potencia a tus snacks, desayunos o rituales de entrenamiento.",
    image: shotEnergiaNaturalImage,
    prepTime: 1,
    servings: "1 porción",
    difficulty: "Fácil",
    category: "Pre/Post Entrenamiento",
    ingredients: [
      { name: "Crema de Maní Natural HARDY", quantity: "1 cda" },
      { name: "Miel Líquida HARDY", quantity: "½ cdita" },
      { name: "Sal marina", quantity: "1 pizca" },
    ],
    instructions: [
      "Mezclá los tres ingredientes en una cuchara o vasito pequeño.",
      "Tomalo directo o acompañalo con un vaso de agua.",
      "Listo: energía inmediata y real en menos de 30 segundos.",
    ],
    benefits: [
      "Crema de Maní Natural HARDY: grasas buenas y proteína vegetal → energía sostenida",
      "Miel Líquida HARDY: fuente natural de glucosa → impulso rápido",
      "Sal marina: ayuda a reponer electrolitos, ideal pre-entreno",
    ],
    productsUsed: ["Crema de Maní Natural HARDY", "Miel Líquida HARDY"],
    tip: "Perfecto pre-entreno o cuando necesitás energía inmediata sin ultraprocesados. Una dosis chiquita que marca la diferencia.",
    isActive: true,
  },
  {
    id: 5,
    slug: "coco-energy-bites",
    title: "Coco Energy Bites Hardy",
    shortDescription: "Bocados suaves, frescos y llenos de energía real.",
    fullDescription:
      "Nuestra crema de maní HARDY Coco, coco rallado y un toque de miel natural para un sabor equilibrado y nutritivo. Un snack ideal para antes del entrenamiento, después o como parte de tu rutina diaria.",
    image: bocaditosHardyCocoImage,
    prepTime: 35,
    servings: "10-12 bocaditos",
    difficulty: "Fácil",
    category: "Pre/Post Entrenamiento",
    ingredients: [
      { name: "Avena tradicional", quantity: "1 taza" },
      { name: "Coco rallado sin azúcar", quantity: "½ taza" },
      { name: "Crema de Maní HARDY sabor Coco", quantity: "2 cdas" },
      { name: "Miel Líquida HARDY", quantity: "1 cda" },
    ],
    instructions: [
      "En un bowl, mezclá la avena, el coco rallado, la crema de maní y la miel líquida.",
      "Integrá con cuchara o con las manos hasta lograr una masa uniforme y moldeable.",
      "Formá bolitas del tamaño de un bocado.",
      "Llevá a la heladera durante 30 minutos para que tomen consistencia.",
      "¡Listo! Tenés tus bocaditos energéticos HARDY listos para disfrutar.",
    ],
    benefits: [
      "Avena: energía sostenida y saciedad",
      "Coco rallado: aporta grasas saludables y textura tropical",
      "Crema de Maní HARDY Coco: fuente de proteína y sabor natural",
      "Miel Líquida HARDY: endulzante natural con poder antioxidante",
    ],
    productsUsed: ["Crema de Maní Coco HARDY", "Miel Líquida HARDY"],
    tip: "Energía rápida, natural y deliciosa. Llevalos al trabajo, al gym o al aire libre — son el snack funcional que te sigue el ritmo.",
    isActive: true,
  },
  {
    id: 6,
    slug: "barritas-energeticas-hardy",
    title: "Barritas Energéticas Hardy",
    shortDescription: "Crocantes, nutritivas y cargadas de energía real.",
    fullDescription:
      "Avena, frutos secos, chips de chocolate y nuestra crema de maní HARDY, unidas con miel para un sabor intenso y equilibrado. Un snack ideal para entrenar, recuperar o acompañar tu día con potencia.",
    image: barritasEnergeticasImage,
    prepTime: 45,
    servings: "8-10 barritas",
    difficulty: "Fácil",
    category: "Pre/Post Entrenamiento",
    ingredients: [
      { name: "Avena tradicional", quantity: "1 taza" },
      {
        name: "Dátiles sin carozo (remojados 10 minutos en agua caliente)",
        quantity: "10",
      },
      { name: "Crema de Maní HARDY Natural", quantity: "3 cdas" },
      { name: "Miel sólida HARDY", quantity: "1 cda" },
      { name: "Sal marina (opcional, realza el sabor)", quantity: "1 pizca" },
      {
        name: "Chips de chocolate amargo o semillas para topping (opcional)",
        quantity: "Al gusto",
      },
    ],
    instructions: [
      "Procesar los dátiles hasta formar una pasta suave. (Si están muy secos, agregar una cucharadita de agua del remojo.)",
      "Incorporar la crema de maní y la miel sólida HARDY. Mezclar hasta lograr una consistencia homogénea y cremosa.",
      "Agregar la avena y la sal marina. Integrar bien con una espátula o las manos hasta formar una masa compacta.",
      "Colocar la mezcla en un molde rectangular forrado con papel manteca. Presionar con fuerza hasta que quede pareja y firme.",
      "Llevar al freezer 30 minutos para que tome consistencia.",
      "Cortar en barritas.",
      "Guardar en la heladera en recipiente hermético (duran 7 días).",
    ],
    benefits: [
      "Avena: fuente de carbohidratos de liberación lenta → energía sostenida",
      "Dátiles: aportan glucosa natural → recarga inmediata",
      "Crema de Maní HARDY: grasas buenas + proteína vegetal → saciedad y fuerza",
      "Miel Sólida HARDY: endulzante natural con antioxidantes y minerales",
    ],
    productsUsed: ["Crema de Maní Natural HARDY", "Miel Sólida HARDY"],
    tip: "Perfectas para llevar al gym o como snack durante el día. Energía real sin ultraprocesados.",
    isActive: true,
  },
  {
    id: 7,
    slug: "crispy-energy-bites-hardy",
    title: "Crispy Energy Bites Hardy",
    shortDescription: "Bocados nutritivos, simples y llenos de energía real.",
    fullDescription:
      "Semillas, crema de maní HARDY y un toque de miel para un equilibrio perfecto entre potencia y sabor. Ideales para antes de entrenar, después o como snack diario de alto rendimiento.",
    image: snackEnergeticoGoImage,
    prepTime: 25,
    servings: "12-15 bolitas",
    difficulty: "Fácil",
    category: "Desayunos y Meriendas",
    ingredients: [
      { name: "Crema de Maní Natural HARDY", quantity: "2 cdas" },
      { name: "Miel Líquida HARDY", quantity: "1 cda" },
      { name: "Avena", quantity: "1 taza" },
      { name: "Banana madura", quantity: "1" },
      { name: "Chips de chocolate amargo (opcional)", quantity: "Al gusto" },
    ],
    instructions: [
      "Pisá la banana y mezclala con la crema de maní y la miel.",
      "Agregá la avena y los chips.",
      "Formá bolitas y llevá a la heladera 20 minutos.",
    ],
    benefits: [
      "Sin azúcar refinada ni conservantes",
      "Solo energía real para tus entrenamientos",
      "Fácil de preparar y transportar",
    ],
    productsUsed: ["Crema de Maní Natural HARDY", "Miel Líquida HARDY"],
    tip: "Sin azúcar refinada ni conservantes. Solo energía real para tus entrenamientos.",
    isActive: true,
  },
  {
    id: 8,
    slug: "toasts-hardy-vainilla",
    title: "Toasts Hardy Vainilla",
    shortDescription: "Simples, frescos y cargados de energía real.",
    fullDescription:
      "Pan integral, nuestra crema de maní HARDY Vainilla y frutas naturales para un desayuno o snack equilibrado, nutritivo y lleno de sabor.",
    image: toastProteicoVainillaImage,
    prepTime: 5,
    servings: "1 porción",
    difficulty: "Fácil",
    category: "Desayunos y Meriendas",
    ingredients: [
      { name: "Tostadas integrales", quantity: "2" },
      { name: "Crema de Maní Vainilla HARDY", quantity: "2 cdas" },
      { name: "Frutillas o banana en rodajas", quantity: "Al gusto" },
      { name: "Semillas de chía", quantity: "1 cdita" },
    ],
    instructions: [
      "Untá las tostadas con la crema de maní.",
      "Agregá las frutas y espolvoreá semillas por encima.",
    ],
    benefits: [
      "Desayuno completo y equilibrado",
      "Alto contenido proteico",
      "Sabor dulce natural sin azúcares añadidos",
    ],
    productsUsed: ["Crema de Maní Vainilla HARDY"],
    tip: "Perfecto para pre-entreno o una merienda saludable y saciante.",
    isActive: true,
  },
  {
    id: 9,
    slug: "granola-hardy",
    title: "Granola Hardy",
    shortDescription:
      "Crujiente, dulce y natural. Una granola artesanal que te da energía sostenida durante todo el día.",
    fullDescription:
      "Una granola artesanal hecha con miel sólida y crema de maní coco Hardy. Perfecta para yogur, frutas o sola como snack.",
    image: granolaEnergeticaImage,
    prepTime: 25,
    servings: "1 frasco grande",
    difficulty: "Fácil",
    category: "Desayunos y Meriendas",
    ingredients: [
      { name: "Avena tradicional", quantity: "1 taza" },
      { name: "Miel Sólida HARDY", quantity: "¼ taza" },
      { name: "Crema de Maní Coco HARDY", quantity: "¼ taza" },
      {
        name: "Frutos secos y semillas a gusto (almendras, nueces, girasol, chía, etc.)",
        quantity: "Al gusto",
      },
    ],
    instructions: [
      "En un bowl, mezclá la avena con los frutos secos y semillas.",
      "Derretí la Miel Sólida HARDY junto con la Crema de Maní Coco HARDY hasta integrar.",
      "Verté sobre la mezcla seca y mezclá bien hasta que todo quede cubierto.",
      "Extendé sobre una placa y horneá a 180 °C por 10–12 minutos, revolviendo una vez a mitad de cocción.",
      "Dejá enfriar completamente (esto es lo que le da el crunch perfecto).",
      "Guardá en frasco de vidrio hermético.",
    ],
    benefits: [
      "Fuente natural de grasas buenas",
      "Energía sostenida",
      "Sabor real sin aditivos",
      "Textura crujiente irresistible",
    ],
    productsUsed: ["Miel Sólida HARDY", "Crema de Maní Coco HARDY"],
    tip: "Usala con yogur, frutas o simplemente sola como snack. Natural, crujiente y real. Energía hecha en casa.",
    isActive: true,
  },
  {
    id: 10,
    slug: "smoothie-hardy-cookies",
    title: "Smoothie Hardy Cookies",
    shortDescription: "Cremoso, nutritivo y lleno de energía real.",
    fullDescription:
      "Banana, cacao y nuestra crema de maní HARDY Cookies para un blend intenso, equilibrado y perfecto para antes o después del entrenamiento.",
    image: smoothieCookiesRecoveryImage,
    prepTime: 5,
    servings: "1 vaso grande",
    difficulty: "Fácil",
    category: "Desayunos y Meriendas",
    ingredients: [
      { name: "Banana congelada", quantity: "1" },
      { name: "Crema de Maní HARDY Cookies", quantity: "1 cda" },
      {
        name: "Leche vegetal (almendra, avena o coco)",
        quantity: "200 ml",
      },
      { name: "Cacao amargo", quantity: "1 cdita" },
    ],
    instructions: [
      "Colocá todos los ingredientes en una licuadora.",
      "Licuá hasta lograr una textura espesa, cremosa y uniforme.",
      "Serví en vaso frío y decorá con un hilo de crema de maní por encima si querés un toque extra Hardy.",
    ],
    benefits: [
      "Rico en proteínas y grasas saludables",
      "Recuperación muscular efectiva",
      "Energía real sin ultraprocesados",
      "Perfecto post-entreno",
    ],
    productsUsed: ["Crema de Maní Cookies HARDY"],
    tip: "Rico en proteínas y grasas saludables para una recuperación muscular efectiva. Perfecto para reponer energía real después del entrenamiento sin ultraprocesados.",
    isActive: true,
  },
  {
    id: 11,
    slug: "parfait-hardy",
    title: "Parfait Hardy",
    shortDescription: "Fresco, nutritivo y lleno de energía real.",
    fullDescription:
      "Chía, avena, banana, crema de maní HARDY y un toque de miel natural para un equilibrio perfecto entre textura, sabor y rendimiento.",
    image: overnightOatsImage,
    prepTime: 370,
    servings: "1 frasco individual",
    difficulty: "Fácil",
    category: "Desayunos y Meriendas",
    ingredients: [
      { name: "Avena", quantity: "½ taza" },
      {
        name: "Leche vegetal (almendra, coco o avena)",
        quantity: "¾ taza",
      },
      { name: "Crema de Maní HARDY Natural", quantity: "1 cda" },
      { name: "Miel HARDY líquida", quantity: "1 cdita" },
      { name: "Banana en rodajas", quantity: "½" },
      {
        name: "Semillas de chía o lino (opcional)",
        quantity: "1 cdita",
      },
    ],
    instructions: [
      "En un frasco de vidrio con tapa, mezclá la avena con la leche vegetal.",
      "Agregá la Crema de Maní HARDY Natural y la Miel HARDY líquida.",
      "Creá capas visuales: primera capa avena con leche, segunda capa una cucharada visible de crema de maní, tercera capa rodajas de banana.",
      "Finalizá con un hilo de miel y, si querés, un poco de avena o chía encima.",
      "Tapá y llevá a la heladera durante la noche (mínimo 6 horas).",
      "A la mañana siguiente, revolvé o comelo directo del frasco para mantener el efecto visual en capas.",
    ],
    benefits: [
      "Carbohidratos de absorción lenta",
      "Alto contenido proteico",
      "Preparación anticipada",
      "Energía sostenida todo el día",
    ],
    productsUsed: ["Crema de Maní Natural HARDY", "Miel Líquida HARDY"],
    tip: "Prepará varios frascos para tener desayunos listos toda la semana. Ideal para pre-entreno o para quienes no desayunan en casa. Si querés un extra crunch, sumá granola al momento de comerlo.",
    isActive: true,
  },
  {
    id: 12,
    slug: "porridge-hardy-vainilla",
    title: "Porridge Hardy Vainilla",
    shortDescription: "Cremoso, nutritivo y lleno de energía real.",
    fullDescription:
      "Avena caliente, fruta fresca, chía y nuestra crema de maní HARDY Vainilla, coronada con miel natural para un final intenso y equilibrado.",
    image: porridgeProteicoImage,
    prepTime: 10,
    servings: "1 porción",
    difficulty: "Fácil",
    category: "Desayunos y Meriendas",
    ingredients: [
      { name: "Avena tradicional", quantity: "½ taza" },
      {
        name: "Leche (puede ser vegetal o descremada)",
        quantity: "1 taza",
      },
      { name: "Crema de Maní HARDY Vainilla", quantity: "1 cda" },
      { name: "Miel HARDY líquida", quantity: "1 cdita" },
      { name: "Frutillas frescas cortadas", quantity: "3-4" },
      {
        name: "Scoop de proteína neutra o de vainilla (opcional)",
        quantity: "1",
      },
    ],
    instructions: [
      "En una olla pequeña, calentá la leche y agregá la avena. Cociná a fuego medio revolviendo hasta que espese (3–5 minutos).",
      "Una vez cocido, agregá la proteína (si usás) y mezclá hasta integrar.",
      "Sumá una cucharada generosa de Crema de Maní HARDY sabor Vainilla y mezclá parcialmente para que queden vetas de crema visibles.",
      "Colocá el porridge en un bowl y decorá con frutillas por encima.",
      "Terminá con un hilo fino de Miel HARDY líquida.",
    ],
    benefits: [
      "Alto contenido proteico",
      "Textura cremosa y saciante",
      "Energía sostenida",
      "Perfecto pre o post entreno",
    ],
    productsUsed: ["Crema de Maní Vainilla HARDY", "Miel Líquida HARDY"],
    tip: "Si querés un efecto más cremoso, mezclá la crema de maní directamente dentro del porridge caliente. Para una textura más gourmet, serví con un toque de granola o coco rallado encima.",
    isActive: true,
  },
  {
    id: 13,
    slug: "waffles-hardy",
    title: "Waffles Hardy",
    shortDescription: "Livianos, nutritivos y llenos de energía real.",
    fullDescription:
      "Waffles dorados, fruta fresca y nuestra crema de maní HARDY Vainilla, coronados con miel natural para un final intenso y equilibrado.",
    image: wafflesFitImage,
    prepTime: 20,
    servings: "2 porciones",
    difficulty: "Medio",
    category: "Desayunos y Meriendas",
    ingredients: [
      {
        name: "Avena (puede ser tradicional o instantánea)",
        quantity: "1 taza",
      },
      { name: "Huevos grandes", quantity: "2" },
      { name: "Leche (puede ser vegetal)", quantity: "½ taza" },
      { name: "Polvo de hornear", quantity: "1 cdita" },
      { name: "Esencia de vainilla", quantity: "1 cdita" },
      {
        name: "Miel (opcional para endulzar la mezcla)",
        quantity: "1 cda",
      },
      { name: "Crema de Maní HARDY Coco (topping)", quantity: "2 cdas" },
      {
        name: "Miel HARDY sólida, derretida a baño maría (topping)",
        quantity: "1 cda",
      },
      {
        name: "Frutas frescas (banana, frutillas o arándanos)",
        quantity: "Al gusto",
      },
    ],
    instructions: [
      "En un bowl mediano, colocá el huevo, la media banana pisada, las 2 cucharadas de avena, la crema de maní Coco Hardy y la miel sólida Hardy.",
      "Si la miel sólida está muy firme, calentalá unos segundos a baño maría o en microondas (5–10 segundos) hasta que quede cremosa.",
      "Batí o mezclá todo con una cuchara o minipimer hasta que quede una textura homogénea. Si está muy espesa, sumá una cucharada de leche o agua.",
      "Precalentá la wafflera o una sartén antiadherente. Enmantecá o rociá apenas con spray vegetal.",
      "Verté una porción de mezcla y cociná 2–3 minutos por lado hasta que estén dorados y con textura esponjosa.",
      "Apilá los waffles en un plato y terminá con Miel Sólida Hardy derretida y frutas frescas.",
    ],
    benefits: [
      "Sin harinas refinadas",
      "Rico en proteínas",
      "Sabor tropical natural",
      "Textura esponjosa perfecta",
    ],
    productsUsed: ["Crema de Maní Coco HARDY", "Miel Sólida HARDY"],
    tip: "Agregá rodajas de banana, coco rallado o frutas rojas para darle color y frescura. La miel sólida al enfriarse vuelve a solidificarse dándole ese brillo irresistible.",
    isActive: true,
  },
  {
    id: 14,
    slug: "yogurt-bowl-hardy",
    title: "Yogurt Bowl Hardy",
    shortDescription: "Fresco, equilibrado y lleno de energía real.",
    fullDescription:
      "Yogurt cremoso, fruta fresca, granola y nuestra crema de maní HARDY Vainilla, coronados con miel natural para un sabor intenso y nutritivo.",
    image: yogurtBowlImage,
    prepTime: 5,
    servings: "1 porción",
    difficulty: "Fácil",
    category: "Desayunos y Meriendas",
    ingredients: [
      {
        name: "Yogurt natural (puede ser griego o vegetal sin azúcar)",
        quantity: "200 g",
      },
      {
        name: "Granola casera o artesanal",
        quantity: "2 cdas",
      },
      {
        name: "Crema de Maní HARDY Vainilla",
        quantity: "1 cda abundante",
      },
      { name: "Miel HARDY líquida", quantity: "1 cdita" },
      {
        name: "Frutas frescas al gusto (banana, frutilla o arándanos)",
        quantity: "Al gusto",
      },
      {
        name: "Semillas de chía o lino (opcional)",
        quantity: "1 cdita",
      },
    ],
    instructions: [
      "En un bowl, colocá el yogurt natural frío como base.",
      "Agregá encima la granola casera, distribuyéndola en un costado para mantener una presentación visual atractiva.",
      "Incorporá una cucharada generosa de Crema de Maní HARDY sabor Vainilla en el centro o en forma de swirl (espiral) para resaltar su textura cremosa.",
      "Terminá con un hilo de Miel HARDY líquida, dejándola caer de forma natural sobre el bowl.",
      "Sumá frutas frescas y semillas si querés más color y nutrientes.",
    ],
    benefits: [
      "Equilibrado y completo",
      "Alto en proteínas",
      "Grasas saludables",
      "Perfecto post-entreno o desayuno",
    ],
    productsUsed: ["Crema de Maní Vainilla HARDY", "Miel Líquida HARDY"],
    tip: "Para un extra de energía pre-entreno, agregá una segunda cucharada de crema de maní. Para un toque más proteico, mezclá el yogurt con proteína neutra antes de armar el bowl.",
    isActive: true,
  },
];
