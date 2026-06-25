---
inclusion: always
---

# next. — Brand & Project Context

This repo (`next-website`) is the **marketing website** for **next.** — a fast
local delivery app. Keep all content and styling consistent with the brand below.

## Product

- **next.** is a quick-commerce / fast local delivery app (Blinkit/Zepto-style)
  for **Contai (Kanthi), Purba Medinipur, West Bengal**.
- Delivers groceries, medicines, snacks and daily essentials from trusted local
  stores. Order is picked from the **nearest store** and delivered by the
  **closest rider**.
- Live order tracking, UPI or cash on delivery, reorder favourites.
- **Min order ₹150 · Free delivery above ₹399 · 9 km service radius.**

## Operating company

- **Moolya India Private Limited** (Contai, Purba Medinipur, West Bengal – 721433).
- CIN: `U74999UP2024PTC123456` · GSTIN: `19AAUCM3819L1ZN` · PAN: `AAUCM3819L`.
- Contact: `info@moolyaindiapvtltd.com` · +91 522 400 1234.
- Address: Plot No. 274, Tagaria, Contai, Purba Medinipur, WB – 721433.

## Brand design system (single source of truth: `zaldi-app/packages/shared/brand.ts`)

- **Brand name:** `next` shown as the wordmark **next** where the final letter
  **t**'s crossbar is a green arrow with a slanted tail pointing right. Use the
  `Wordmark` component (em-based, scales with font-size), not plain text.
- **Colors:** Hyper Green `#00D16B` (primary/actions), dark `#00B85D`, light
  `#E6FBF0`; Obsidian/Ink `#0F172A`; sky/trust accent `#38BDF8`.
- **Font:** Inter.

## The three apps

| App              | Audience  | Purpose                                              |
| ---------------- | --------- | ---------------------------------------------------- |
| **next**         | Customers | Browse, cart, checkout (UPI/COD), live tracking      |
| **next Partner** | Stores    | Accept orders, mark ready, manage products/prices    |
| **next Rider**   | Riders    | Get nearby offers, navigate, deliver, track earnings |

## "Everyone wins" fair-pricing model

- Merchants keep **88%** (12% commission, below the 15–18% industry norm).
- Riders get a **guaranteed base payout + per-km rate**, and **100% of tips**.
- Customers get fair prices, a small ₹7 handling fee, **no hidden charges**.
- Smart routing: **nearest store + nearest rider** keeps delivery fast and cheap.

## Site implementation notes

- Next.js 14 App Router (JavaScript), only `next`/`react`/`react-dom` as deps.
- All 3D/animation effects are **pure CSS transforms + small vanilla JS** — do
  not add heavy 3D libraries.
- Content data lives in arrays at the top of `app/page.js`; theme variables at
  the top of `app/globals.css`.
- Keep `prefers-reduced-motion` support and responsiveness intact.
