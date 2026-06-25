# next. — Marketing Website

The official marketing website for **next.** — a fast local delivery app for
**Contai (Kanthi), West Bengal**, operated by **Moolya India Private Limited**.

Built with **Next.js (App Router)** and styled with **pure-CSS 3D animations**
(no heavy 3D libraries), matching the next. brand: **Hyper Green `#00D16B`** +
**Obsidian `#0F172A`**.

## What next. is

Order groceries, medicines, snacks and daily essentials from trusted local
stores and get them delivered to your door in minutes. Your order is picked from
the **nearest store** and delivered by the **closest rider** — quick for you,
fair for everyone.

- Live order tracking on a map
- Fair, transparent pricing — free delivery above ₹399, min order ₹150
- Pay by UPI or cash on delivery
- 9 km service radius from Contai

## Highlights of this site

- **3D animation style throughout**
  - Mouse-parallax hero with a floating 3D phone mock showing a live delivery
    map (animated rider moving along the route), an ETA card, glowing orbs and
    glassmorphic chips.
  - Interactive 3D **tilt cards** (features, steps, stats, apps, testimonials,
    sample bill) that lean toward the cursor with a green glare.
  - Animated gradient-mesh background, shimmering gradient text, scroll-reveal,
    animated counters, and a category marquee.
- **On-brand** — the `next.` wordmark (green dot), brand palette, and Inter font.
- **Real content** — how it works, the "everyone wins" fair-pricing model with a
  worked sample bill, the three apps (next / next Partner / next Rider), and the
  Moolya India company details in the footer.
- **Minimal dependencies** — only `next`, `react`, `react-dom`. All 3D effects
  use CSS transforms + a little vanilla JS, so `npm install && npm run build` is
  fast and reliable.
- **Accessible & responsive** — honours `prefers-reduced-motion`, mobile → desktop.

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
│  ├─ Hero.jsx         # 3D parallax hero with delivery phone scene
│  ├─ Wordmark.jsx     # the "next." brand wordmark
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
  (`--green`, `--ink`, `--sky`, gradients).
- **Copy & sections:** all content lives in the data arrays at the top of
  `app/page.js` (`FEATURES`, `STEPS`, `STATS`, `WINS`, `APPS`, `TESTIMONIALS`,
  `CATEGORIES`).
- **Company / contact details:** in the footer of `app/page.js`.

## Deployment

Deploys cleanly to any Next.js host (Vercel, Netlify, Node server) or as a static
export. The admin dashboard for the apps deploys separately (see the `zaldi-app`
repo).
