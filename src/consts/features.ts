import Heart from "../icons/Heart.astro";
import type { CardItem } from "../components/Card.astro";
import CandyOff from "../icons/CandyOff.astro";
import Leaf from "../icons/Leaf.astro";
import Dumbell from "../icons/Dumbell.astro";

export const FEATURES: CardItem[] = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Ingredientes completamente naturales sin conservantes ni aditivos artificiales.",
  },
  {
    icon: Dumbell,
    title: "Alta Proteína",
    description:
      "Contenido proteico superior para maximizar tu rendimiento deportivo.",
  },
  {
    icon: CandyOff,
    title: "Sin Azúcar Agregado",
    description:
      "Endulzado naturalmente, perfecto para una alimentación saludable.",
  },
];
