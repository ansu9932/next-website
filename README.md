# Veritrust — Trust & Security Platform Website

A modern, trust-focused marketing website built with **Next.js (App Router)** and
styled with **pure-CSS 3D animations** — no heavy 3D libraries required.

> Brand and copy are fictional placeholders ("Veritrust") so you can drop in your
> own product name, colors, and content.

## Highlights

- **3D animation style throughout**
  - Mouse-parallax 3D hero scene with floating orbs, a continuously rotating
    3D cube, and glassmorphic "trust" chips.
  - Interactive 3D **tilt cards** that lean toward the cursor (with a moving
    glare highlight) on features, stats, badges, and testimonials.
  - Animated gradient mesh background, shimmering gradient text, scroll-reveal
    animations, animated stat counters, and an infinite logo marquee.
- **Trust-first design** — security certifications, audit points, customer
  proof, and reliability stats front and center.
- **Zero exotic dependencies** — only `next`, `react`, and `react-dom`. All 3D
  effects use CSS transforms + a little vanilla JS, so `next build` is fast and
  reliable.
- **Accessible & responsive** — honours `prefers-reduced-motion`, works from
  mobile to widescreen.

## Tech stack

| Concern    | Choice                                      |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 14 (App Router, JavaScript)         |
| UI         | React 18                                    |
| Styling    | Plain CSS design system (`app/globals.css`) |
| Animations | CSS 3D transforms + IntersectionObserver    |
| Fonts      | Inter via Google Fonts `<link>`             |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Project structure

```
next-website/
├─ app/
│  ├─ globals.css      # full design system + all animation keyframes
│  ├─ layout.js        # root layout, metadata, font link
│  └─ page.js          # homepage — assembles every section
├─ components/
│  ├─ Navbar.jsx       # scroll-aware glass navbar
│  ├─ Hero.jsx         # 3D parallax hero scene
│  ├─ TiltCard.jsx     # reusable 3D mouse-tilt card
│  ├─ Reveal.jsx       # scroll-reveal wrapper
│  ├─ CountUp.jsx      # animated number counter
│  └─ icons.js         # inline SVG icon set (no deps)
├─ next.config.mjs
├─ jsconfig.json       # "@/*" path alias
└─ package.json
```

## Customizing

- **Colors / theme:** edit the CSS variables at the top of `app/globals.css`
  (`--brand`, `--brand-2`, gradients, etc.).
- **Copy & sections:** all content lives in the data arrays at the top of
  `app/page.js` (`FEATURES`, `STATS`, `BADGES`, `TESTIMONIALS`, `LOGOS`).
- **Brand name:** search-replace `Veritrust`.

## Deployment

Deploys cleanly to any Next.js host (Vercel, Netlify, Node server, or a static
export). On Vercel: import the repo and accept the defaults.
