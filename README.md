<a name="readme-top"></a>

# Abhijith Space Portfolio (Next.js 14 + Three.js)

![Abhijith Space Portfolio](/.github/images/img_main.png "Abhijith Space Portfolio")

<p align="center">
  <a href="https://github.com/abhijithshetty12">
    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-abhijithshetty12-181717?style=flat&logo=github" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat" />
  </a>
</p>

<!-- Table of Contents -->
<details>
  <summary><b>Table of Contents</b></summary>

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [About the Theme](#about-the-theme)
- [Acknowledgements](#acknowledgements)
- [License](#license)
</details>

## Features

- Space-themed UI with an interactive / animated 3D background (Three.js + React Three Fiber)
- Modern, component-driven structure (Next.js App Router)
- Skills + Projects showcase sections
- Tailwind CSS for styling
- Optimized developer workflow with ESLint + TypeScript

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Three.js** + **@react-three/fiber** + **@react-three/drei**
- **framer-motion** (animations)

## Getting Started

1. Ensure **Node.js** and **Git** are installed.
2. Clone the repository.
3. Install dependencies:

```bash
npm install
```

4. Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start development server
- `npm run build` — build the Next.js app
- `npm run start` — run the production server
- `npm run lint` — lint the codebase

## Folder Structure

```bash
abhijith-portfolio/
  app/
    layout.tsx
    page.tsx
    about/
      page.tsx
    skills/
      page.tsx
    projects/
      page.tsx
    contact/
      page.tsx
    globals.css
    favicon.ico
    apple-icon.png
  components/
    main/
      hero.tsx
      navbar.tsx
      footer.tsx
      about.tsx
      skills.tsx
      projects.tsx
      contact.tsx
      star-background.tsx
    sub/
      hero-content.tsx
      project-card.tsx
      skill-data-provider.tsx
      skill-text.tsx
  config/
    index.ts
  constants/
    index.ts
  lib/
    motion.ts
    utils.ts
  public/
    (static assets: images, videos, resume.pdf, icons)
  netlify.toml
  next.config.js
  package.json
  tailwind.config.ts
  tsconfig.json
```

## Screenshots

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Showcase your skills](/.github/images/img2.png "Showcase your skills")

![Built with TypeScript](/.github/images/img3.png "Built with TypeScript")

![Showcase your projects](/.github/images/img4.png "Showcase your projects")

## Deployment

This project includes a `netlify.toml` configuration.

### Netlify

1. Push your code to GitHub.
2. Create a site on Netlify.
3. Connect the repository.
4. Build & publish settings (typical for Next.js):

- Framework preset: **Next.js**
- Build command: `npm run build`
- Publish directory: `.next`

## About the Theme

The portfolio uses a “modern space” aesthetic:
- a 3D background
- animated motion/hover effects
- content-driven sections (hero, skills, projects, contact)

## Acknowledgements

This project uses several open-source libraries, including:
- `next`
- `react`
- `tailwindcss`
- `three`
- `@react-three/fiber`, `@react-three/drei`
- `framer-motion`
- `eslint`

## License

Licensed under the **MIT License**. See `LICENSE` for details.

