# Minimal Developer Portfolio

A production-ready developer portfolio template by **CodeTemplateLab** built with React, Vite, Tailwind CSS, Framer Motion, and lucide-react.

This template is designed for marketplace buyers who want a clean, modern, and minimal portfolio they can customize quickly.

## Project Overview

- Minimal and developer-focused UI
- Large whitespace and balanced spacing
- Neutral color palette with subtle visual texture
- Smooth Framer Motion entrance and scroll reveal animations
- Responsive layout optimized for desktop, laptop, tablet, and mobile
- Data-driven customization through dedicated configuration files

## Live Demo

- https://minimal-developer-portfolio-iota.vercel.app/

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react

## Installation Guide

```bash
npm install
```

If needed, install key UI dependencies directly:

```bash
npm install framer-motion lucide-react
```

Run the development server:

```bash
npm run dev
```

## Build Instructions

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Customization Guide

Edit developer information:

- `src/data/profile.js`

Edit projects:

- `src/data/projects.js`

Edit skills:

- `src/data/skills.js`

Edit experience timeline:

- `src/data/experience.js`

## Portfolio Sections

- Navbar
- Hero Section
- About Section
- Experience Section
- Skills Section
- Projects Section
- Contact Section
- Footer

Each section is implemented as a separate component in `src/sections`.

## Project Structure

```text
Minimal Developer Portfolio/
  public/
    favicon.svg
  src/
    assets/
      placeholder-sources.md
    components/
      ui/
        ButtonLink.jsx
        ProjectCard.jsx
        Reveal.jsx
        SectionHeading.jsx
        SkillCard.jsx
        SkillIcon.jsx
    data/
      experience.js
      profile.js
      projects.js
      skills.js
    sections/
      About.jsx
      Contact.jsx
      Experience.jsx
      Footer.jsx
      Hero.jsx
      Navbar.jsx
      Projects.jsx
      Skills.jsx
    styles/
      theme.css
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
```

### Folder Notes

- `src/components` -> reusable UI components
- `src/sections` -> page sections and layout composition
- `src/data` -> buyer-editable content files
- `src/styles` -> theme tokens and global visual behaviors
- `src/assets` -> placeholder asset documentation and local media slot

## Placeholder Images

This template uses free placeholder images from:

- https://picsum.photos

You can also replace them with:

- https://images.unsplash.com
- https://pexels.com

Current placeholder image URLs are defined in:

- `src/data/profile.js`
- `src/data/projects.js`

## Responsive Targets

Designed for the following viewport widths:

- 320px
- 375px
- 768px
- 1024px
- 1440px

## Notes for Buyers

- Contact form is UI-only by default and ready to connect with Formspree, EmailJS, or a custom backend.
- Replace demo/GitHub URLs in `src/data/projects.js` before publishing.
