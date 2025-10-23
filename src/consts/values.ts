import type { CardItem } from "../components/Card.astro";

import Bolt from "../icons/Bolt.astro";
import Target from "../icons/Target.astro";
import Dumbell from "../icons/Dumbell.astro";
import Flame from "../icons/Flame.astro";

export const VALUES: CardItem[] = [
  {
    icon: Bolt,
    title: "Impulso",
    description:
      "Te damos el empuje que necesitás para ir siempre hacia adelante",
  },
  {
    icon: Target,
    title: "Competencia",
    description:
      "Una competencia continua con nosotros mismos para ser mejores",
  },
  {
    icon: Dumbell,
    title: "Control",
    description:
      "Teniendo el control sobre cuerpo y mente para alcanzar tus metas",
  },
  {
    icon: Flame,
    title: "Pasión",
    description:
      "Hacer lo que nos apasiona con coraje y elevando nuestro carácter",
  },
];
