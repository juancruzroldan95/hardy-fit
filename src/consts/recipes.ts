import Heart from "../icons/Heart.astro";
import type { CardItem } from "../components/Card.astro";

export const RECIPES: CardItem[] = [
  {
    icon: Heart,
    title: "Smoothie Proteico",
    description:
      "Batido energético con pasta de maní, banana y frutos rojos para antes del entrenamiento.",
  },
  {
    icon: Heart,
    title: "Energía Matutina",
    description:
      "Desayuno completo con avena, pasta de maní y frutas para empezar el día con fuerza.",
  },
  {
    icon: Heart,
    title: "Recuperación Post-Entreno",
    description:
      "Snack perfecto para reponer energías después de una sesión intensa de ejercicio.",
  },
  {
    icon: Heart,
    title: "Merienda Saludable",
    description:
      "Opción nutritiva y deliciosa para mantenerte saciado entre comidas.",
  },
];
