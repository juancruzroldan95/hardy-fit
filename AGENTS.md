# Project Context for AI Agents

## Project Overview

**Hardy Fit** is a web application built with [Astro](https://astro.build/). It is a fitness/brand-oriented site with a strong visual identity.

## Tech Stack

- **Framework**: Astro 5 (latest)
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Animation**: Motion (succesor to Framer Motion/Motion One)
- **Maps**: Mapbox GL JS (`mapbox-gl`)
- **Language**: TypeScript / JavaScript (ES Modules)
- **Package Manager**: NPM (implied by `package-lock.json`)

## Design System & Styling

- **Source of Truth**: See `DESIGN-SYSTEM.md` in the root for color palettes, typography rules, and brand voice.
- **Colors**:
  - Primary Red: `#ED3237` (Class: `bg-primary`, `text-primary`)
  - Secondary Yellow: `#FFCD00` (Class: `bg-secondary` etc.)
  - Accent Purple: `#4E377F`
- **Typography**: The design system specifies **DIN**, but the project currently has `@fontsource-variable/nunito-sans` installed. Check `src/layouts/Layout.astro` or global CSS for the active font family implementation.
- **Components**: UI components are located in `src/components`.

## Key Directories

- `src/pages`: Astro routes (file-based routing).
- `src/layouts`: Main layout templates (e.g., `Layout.astro`).
- `src/components`: Reusable UI components.
- `public`: Static assets (images, fonts).

## Development Conventions

- Use **Tailwind v4** syntax (no `tailwind.config.js` needed by default, configured via CSS or plugin).
- Prefer **functional components** in Astro.
- Use `client:*` directives sparingly, only when interactivity is needed (Island Architecture).
- **Language**: The codebase uses English for variable names/logic, but the content and design docs are in **Spanish**.

## Agent Instructions

- **Modifying UI**: Always consult `DESIGN-SYSTEM.md` for color and tone ("Hero" archetype, motivational/imperative language like "Alimentá", "Rompé").
- **New Components**: Create them in `src/components` and export them.
- **Styling**: Use Tailwind utility classes. Avoid inline styles unless dynamic.
- **Images**: Use `generate_image` tool if placeholders are needed, but prefer existing assets in `public`.
