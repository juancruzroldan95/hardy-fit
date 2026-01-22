# AGENTS.md

> **Purpose:** This file provides context, conventions, and instructions for coding agents working on the `hardy-fit` project.

## 1. Project Overview

**hardy-fit** is a modern web application built with [Astro](https://astro.build/). It serves as the digital presence for the **HARDY** brand, focusing on fitness, nutrition ("Alimentá tu instinto"), and a dynamic user experience.

### Key Technologies

- **Framework:** Astro (latest)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Maps:** Mapbox GL JS
- **Animations:** Motion (Framer Motion equivalent)
- **Font:** Nunito Sans (via `@fontsource-variable/nunito-sans`), though `DESIGN-SYSTEM.md` references "DIN". _Nunito Sans is the free font more similar to DIN. That's why we use it._

## 2. Directory Structure

- `src/`
  - `components/`: Reusable Astro and UI components.
  - `layouts/`: Page layouts (e.g., `Layout.astro`).
  - `pages/`: File-based routing for the application.
  - `styles/`: Global styles (likely imports Tailwind).
  - `consts/`: Constant data files.
  - `assets/`: Static assets like images and videos.
- `public/`: Static files served at the root.

## 3. Development Workflow

### Commands

- **Install Dependencies:** `npm install`
- **Start Dev Server:** `npm run dev` (Runs on `localhost:4321` by default)
- **Build for Production:** `npm run build`
- **Preview Build:** `npm run preview`
- **Lint/Format:** Uses Prettier with Astro plugin.

### Code Style & Conventions

- **Styling:** Use Tailwind CSS utility classes principally. Avoid writing custom CSS unless necessary for complex animations or specific overrides.
- **Components:** clear separation of concerns. Keep components small, focused, and reusable.
- **Responsiveness:** Mobile-first approach using Tailwind's breakpoints.
- **Type Safety:** Use TypeScript (even if `.astro` files don't enforce it strictly, standard `.ts` files should be typed).

## 4. Design System & UI

> **CRITICAL:** Before creating or modifying UI components, **read `DESIGN-SYSTEM.md`**.

- **Colors:** strict adherence to the brand palette (Primary Red `#ED3237`, Secondary Yellow `#FFCD00`, Accent Purple `#4E377F`).
- **Typography:** The design system specifies **DIN**, but the project currently has **Nunito Sans** installed. _Check `src/layouts/Layout.astro` or global CSS to see which is actually used._
- **Tone:** "Dynamic", "Energetic", "Heroic". Use `motion` for entrance animations and interactions to reflect this.

## 5. Mapbox Integration

- The project uses `mapbox-gl`.
- Ensure strictly typed interactions with the Mapbox API where possible.
- API keys should be handled via environment variables (`.env`).

## 6. What to do when starting a task?

1. **Read Context:** Check `AGENTS.md` and `DESIGN-SYSTEM.md`.
2. **Check Routes:** Look at `src/pages` to understand the current page structure.
3. **Check Components:** Look at `src/components` to avoid duplication.
