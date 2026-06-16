# Portfolio — demo, 3D Creator

A dark-themed, animation-rich portfolio website built with React, TypeScript, and Vite. Features scroll-driven animations, a magnetic cursor effect, sticky project cards with scale transforms, and a dual-row infinite marquee — all wrapped in a minimal black-and-ice aesthetic.

## Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (with `@vitejs/plugin-react`)
- **Tailwind CSS 3** (custom `kanit` font family, `dark` / `accent` color tokens)
- **Framer Motion 12** (scroll-linked animations, layout transforms, magnetic hover)
- **Lucide React** (icons)

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen landing with a massive gradient heading ("Hi, I'm Molla"), a magnetically-tracking portrait image, nav links, and a contact CTA. |
| **Marquee** | Two rows of project preview GIFs scrolling in opposite directions, driven by scroll position. |
| **About** | Large "About Me" title with corner decorative icons that slide in on scroll, animated character-by-character text reveal, and a contact button. |
| **Services** | White-background section listing 5 services (3D Modeling, Rendering, Motion Design, Branding, Web Design) with staggered fade-in. |
| **Projects** | Stacked sticky cards with scroll-driven scale transforms. Each card shows a project number, name, category, live-project CTA, and a 3-column image grid. |

## Key Components

- `FadeIn` — Generic scroll-triggered fade + translate wrapper using `whileInView`.
- `Magnet` — Mouse-tracking container that shifts children toward the cursor.
- `AnimatedText` — Character-level opacity animation tied to scroll progress.
- `ContactButton` — Gradient CTA button with hover/tap scale.
- `LiveProjectButton` — Outlined secondary button for project links.

## Project Data

3 projects are defined in `ProjectsSection.tsx`:
1. **Nextlevel Studio** (Client)
2. **Aura Brand Identity** (Personal)
3. **Solaris Digital** (Client)

Images are served via the Higgs AI CDN with WebP output and responsive width/quality params.

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview production build
npm run lint     # ESLint
```

## Project Structure

```
src/
├── App.tsx                    # Root layout, section composition
├── App.css                    # Legacy template styles (mostly unused)
├── index.css                  # Tailwind directives, base resets, hero-heading gradient
├── main.tsx                   # React entry point
├── components/
│   ├── AnimatedText.tsx       # Scroll-driven character reveal
│   ├── ContactButton.tsx      # Gradient CTA
│   ├── FadeIn.tsx             # Scroll-triggered fade-in wrapper
│   ├── LiveProjectButton.tsx  # Outlined secondary button
│   └── Magnet.tsx             # Magnetic cursor-follow effect
├── sections/
│   ├── AboutSection.tsx       # About with corner icons + animated text
│   ├── HeroSection.tsx        # Full-screen hero with portrait
│   ├── MarqueeSection.tsx     # Dual-row scroll-driven marquee
│   ├── ProjectsSection.tsx    # Sticky stacked project cards
│   └── ServicesSection.tsx    # Services list on white background
└── assets/
    ├── hero.png
    ├── react.svg
    └── vite.svg
```

## Customization

- **Colors**: Edit `tailwind.config.js` (`dark: '#0C0C0C'`, `accent: '#D7E2EA'`) and the `.hero-heading` gradient in `src/index.css`.
- **Font**: Currently Kanit from Google Fonts. Change the `@import` in `index.css` and the `font-kanit` class in `tailwind.config.js`.
- **Content**: All text, project data, and image URLs are inline in their respective section components.
- **Sections**: Add/remove sections in `App.tsx`.

## License

Private project. All rights reserved.
