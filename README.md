# Hardy

**hardy-fit** is the official website for the HARDY brand, designed to deliver a dynamic and energetic digital experience centered around the motto _"Alimentá tu instinto"_ (Feed your instinct).

## 🚀 Tech Stack

This project is built with a modern, performance-focused stack:

- **[Astro](https://astro.build/)**: The web framework for content-driven websites.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: For utility-first styling.
- **[Mapbox GL](https://www.mapbox.com/)**: For interactive location maps.
- **[Motion](https://motion.dev/)**: For smooth, high-performance animations.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd hardy-fit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app should now be running on `http://localhost:4321`.

## 📂 Project Structure

```text
hardy-fit/
├── public/       # Static assets (favicon, videos, etc.)
├── src/
│   ├── assets/   # Processed assets (svgs, images)
│   ├── components/ # Reusable UI components
│   ├── consts/   # Application constants
│   ├── layouts/  # Page layouts
│   ├── pages/    # File-based routing
│   └── styles/   # Global styles and Tailwind config
├── AGENTS.md     # 🤖 Context for AI Coding Agents
├── DESIGN-SYSTEM.md # 🎨 Brand design guidelines
├── README.md # For humans
└── package.json
```

## 🎨 Design System

This project adheres to the **Hardy Design System**.

- **Primary Color**: Red (`#ED3237`)
- **Secondary Color**: Yellow (`#FFCD00`)
- **Accent**: Purple (`#4E377F`)

For detailed design tokens and usage, please refer to [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md).

## 🧞 Commands

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🤖 AI Contributors

If you are an AI agent working on this repository, please consult [`AGENTS.md`](./AGENTS.md) first for context, guidelines, and conventions.
