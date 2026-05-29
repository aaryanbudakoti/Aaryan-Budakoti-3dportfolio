# Aaryan Budakoti — 3D Portfolio

A fully immersive 3D portfolio website built with React, Three.js, and GSAP. Features an animated 3D character, physics-based tech-stack balls, smooth scroll animations, and a Cyber Blue theme.

## ✨ Features

- **3D Character Model** — An animated, rigged character that responds to mouse movement
- **Physics Tech Stack** — Interactive bouncing balls showcasing tech skills (powered by Rapier physics)
- **GSAP Scroll Animations** — Cinematic entrance animations triggered by scroll position
- **Smooth Scrolling** — GSAP ScrollSmoother for a buttery-smooth scroll experience
- **Cyber Blue Theme** — Custom `#00bfff` / `#1e90ff` accent color system
- **Responsive** — Adapts to desktop and mobile viewports
- **Custom Cursor** — Replaces the default cursor with a branded one

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| 3D Rendering | Three.js (vanilla) |
| React 3D | @react-three/fiber, @react-three/drei |
| Physics | @react-three/rapier + Rapier3D WASM |
| Post-processing | @react-three/postprocessing |
| Animations | GSAP (ScrollTrigger, ScrollSmoother, SplitText) |
| Ticker | react-fast-marquee |
| Icons | react-icons |
| Build | Vite 7 |

## 📁 Project Structure

```
src/
├── components/
│   ├── Character/          # 3D character model, scene setup, animations
│   ├── utils/              # GSAP scroll timelines, split-text helpers
│   ├── styles/             # Per-component CSS
│   ├── Landing.tsx         # Hero section
│   ├── About.tsx           # About section
│   ├── WhatIDo.tsx         # Skills / services panels
│   ├── Career.tsx          # Accomplishments timeline
│   ├── Work.tsx            # Projects grid
│   ├── TechStack.tsx       # Physics-based tech balls
│   ├── Contact.tsx         # Contact section
│   └── Navbar.tsx          # Navigation + ScrollSmoother init
├── context/
│   └── LoadingProvider.tsx # Global loading state
├── App.tsx
└── index.css               # Global styles + CSS variables
public/
├── models/                 # 3D model files (.enc encrypted, .hdr)
├── images/                 # Tech stack logos (WebP)
└── draco/                  # Draco decoder for GLTF compression
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install & Run

```bash
pnpm install
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
pnpm build
```

Output goes to `dist/`.

## 🎨 Customization

All personal content is in these files — swap out your own details:

| File | What to change |
|---|---|
| `src/components/Landing.tsx` | Name, title, intro text |
| `src/components/About.tsx` | Bio, background |
| `src/components/Career.tsx` | Accomplishments / timeline |
| `src/components/Work.tsx` | Projects, links, descriptions |
| `src/components/WhatIDo.tsx` | Skills / services |
| `src/components/Contact.tsx` | Email, social links |
| `src/components/Navbar.tsx` | Logo initials, nav links |
| `src/index.css` | `--primary` / `--secondary` CSS variables for theme color |


