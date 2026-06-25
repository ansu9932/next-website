import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CountUp from "@/components/CountUp";
import Wordmark from "@/components/Wordmark";
import {
  BoltIcon,
  PinIcon,
  RupeeIcon,
  BagIcon,
  ScooterIcon,
  StoreIcon,
  ClockIcon,
  ShieldIcon,
  RouteIcon,
  HeartIcon,
  CheckIcon,
  ArrowIcon,
  PhoneIcon,
  MailIcon,
  AppleIcon,
  PlayIcon,
} from "@/components/icons";

const FEATURES = [
  {
    icon: BoltIcon,
    title: "Delivered in minutes",
    text: "Your order is picked from the nearest store and handed to the closest available rider, so essentials reach your door fast.",
  },
  {
    icon: PinIcon,
    title: "Live order tracking",
    text: "Watch your rider move on the map in real time, from the shop to your doorstep, with an honest, updating ETA.",
  },
  {
    icon: RupeeIcon,
    title: "Fair, transparent pricing",
    text: "Clear item prices, a tiny handling fee and no hidden charges. Free delivery once your basket crosses ₹399.",
  },
  {
    icon: StoreIcon,
    title: "Shop local stores",
    text: "We connect you with trusted neighbourhood shops in Contai, so you support local business while getting it faster.",
  },
  {
    icon: ShieldIcon,
    title: "Pay your way, safely",
    text: "Pay securely by UPI or choose cash on delivery. Every online payment is processed through a trusted gateway.",
  },
  {
    icon: HeartIcon,
    title: "Reorder in one tap",
    text: "Your favourites are saved, so restocking the daily essentials takes a single tap. Less hassle, more time back.",
  },
];

const STEPS = [
  {
    icon: BagIcon,
    title: "Pick your items",
    text: "Browse local stores and add groceries, medicines and essentials to your cart.",
  },
  {
    icon: StoreIcon,
    title: "Nearest store accepts",
    text: "We route your order to the closest shop that has everything you need.",
  },
  {
    icon: ScooterIcon,
    title: "Closest rider picks up",
    text: "The nearest free rider gets the job first and heads straight to your door.",
  },
  {
    icon: PinIcon,
    title: "Track to your door",
    text: "Follow the rider live on the map and pay by UPI or cash on delivery.",
  },
];

const STATS = [
  { end: 15, suffix: " min", lbl: "Typical delivery time" },
  { end: 9, suffix: " km", lbl: "Service radius from Contai" },
  { end: 88, suffix: "%", lbl: "Of every sale kept by stores" },
  { end: 100, suffix: "%", lbl: "Of tips go to riders" },
];

const WINS = [
  {
    t: "Customers save",
    s: "Fair prices versus MRP, a small ₹7 handling fee, and free delivery above ₹399 — with zero hidden charges.",
  },
  {
    t: "Stores keep 88%",
    s: "A 12% commission — below the 15–18% industry norm — so local shops earn more with no marketing spend.",
  },
  {
    t: "Riders earn fairly",
    s: "A guaranteed base payout per delivery plus a per-km rate, and 100% of every tip goes straight to the rider.",
  },
  {
    t: "Built to last",
    s: "A small, sustainable platform cut keeps next. healthy so it can keep serving the town for the long run.",
  },
];

const APPS = [
  {
    name: "next",
    role: "For customers",
    text: "Browse nearby stores, build your cart, check out with UPI or cash, and track your rider live to your door.",
    tags: ["Android", "iOS"],
  },
  {
    name: "next Partner",
    role: "For stores",
    text: "Accept incoming orders, mark them ready for pickup, and manage your products and prices from your phone.",
    tags: ["Android", "iOS"],
  },
  {
    name: "next Rider",
    role: "For riders",
    text: "Get nearby delivery offers, navigate with live maps, collect payment, and track your daily earnings.",
    tags: ["Android", "iOS"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I ordered medicines at night and they arrived before I finished making tea. The live tracking is so reassuring.",
    name: "Ritika Das",
    role: "Customer · Contai",
    initials: "RD",
  },
  {
    quote:
      "Since joining next. my shop gets orders from streets I never reached before — and I keep most of every sale.",
    name: "Sourav Maity",
    role: "Store partner · Maa Tara Stores",
    initials: "SM",
  },
  {
    quote:
      "Offers come to the nearest rider first, so I'm never driving across town for nothing. Tips are fully mine too.",
    name: "Abhijit Jana",
    role: "Delivery partner",
    initials: "AJ",
  },
];

const CATEGORIES = [
  "Groceries",
  "Fruits & Veg",
  "Medicines",
  "Snacks",
  "Dairy & Eggs",
  "Household",
  "Personal care",
  "Beverages",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Category marquee */}
      <section className="logos">
        <div className="container">
          <p className="label">Everything your home needs, from shops nearby</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...CATEGORIES, ...CATEGORIES].map((c, i) => (
              <span className="logo" key={i}>
                <BagIcon style={{ width: 18, height: 18, opacity: 0.7 }} />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" />
              Why next.
            </span>
            <h2 className="section-title">
              Fast, fair, and{" "}
              <span className="gradient-text">genuinely local</span>.
            </h2>
            <p className="section-subtitle">
              We built next. for our town — quick deliveries from the shops you
              already trust, with pricing that is honest to everyone involved.
            </p>
          </Reveal>

          <div className="grid-features">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 80}>
                  <TiltCard className="glass feature-card" max={10}>
                    <span className="icon">
                      <Icon />
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" />
              How it works
            </span>
            <h2 className="section-title">
              From cart to doorstep in{" "}
              <span className="gradient-text">four simple steps</span>.
            </h2>
          </Reveal>

          <div className="steps">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <TiltCard className="glass step" max={9} glare={false}>
                    <span className="n">{i + 1}</span>
                    <span className="s-ic">
                      <Icon />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingBlock: 50 }}>
        <div className="container">
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal key={s.lbl} delay={i * 80}>
                <TiltCard className="glass stat" max={8} glare={false}>
                  <div className="num gradient-text">
                    <CountUp end={s.end} suffix={s.suffix || ""} />
                  </div>
                  <div className="lbl">{s.lbl}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Everyone wins / fair pricing */}
      <section id="fair" className="section">
        <div className="container">
          <div className="wins-grid">
            <Reveal>
              <span className="eyebrow">
                <span className="dot" />
                The "everyone wins" model
              </span>
              <h2 className="section-title">
                A fair deal for{" "}
                <span className="gradient-text">every single side</span>.
              </h2>
              <p className="section-subtitle">
                Quick delivery only works long-term if it is fair. So we split
                every order so the customer, the store, the rider and the
                platform all come out ahead.
              </p>
              <ul className="win-list">
                {WINS.map((w) => (
                  <li key={w.t}>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    <span>
                      <strong>{w.t}</strong>
                      {w.s}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <TiltCard className="glass bill" max={9}>
                <h4>Sample bill · ₹300 basket, 2 km away</h4>
                <div className="bill-row">
                  <span>Item subtotal</span>
                  <span>₹300</span>
                </div>
                <div className="bill-row">
                  <span>Delivery fee</span>
                  <span>₹25</span>
                </div>
                <div className="bill-row">
                  <span>Handling fee</span>
                  <span>₹7</span>
                </div>
                <div className="bill-row free">
                  <span>Hidden charges</span>
                  <span>₹0</span>
                </div>
                <div className="bill-total">
                  <span>You pay</span>
                  <span className="gradient-text">₹332</span>
                </div>
                <p className="bill-note">
                  <RupeeIcon />
                  Add a little more to cross ₹399 and delivery is on us.
                </p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Apps */}
      <section id="apps" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" />
              One platform, three apps
            </span>
            <h2 className="section-title">
              Everyone in the loop, on{" "}
              <span className="gradient-text">their own app</span>.
            </h2>
          </Reveal>

          <div className="apps">
            {APPS.map((a, i) => (
              <Reveal key={a.name} delay={i * 100}>
                <TiltCard className="glass app-card" max={9}>
                  <span className="badge-app">
                    <Wordmark />
                  </span>
                  <div className="role">{a.role}</div>
                  <h3>{a.name}</h3>
                  <p>{a.text}</p>
                  <div className="store-tags">
                    {a.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="partners" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" />
              Loved across the town
            </span>
            <h2 className="section-title">
              Customers, stores and riders{" "}
              <span className="gradient-text">all win with next.</span>
            </h2>
          </Reveal>

          <div className="grid-testimonials">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <TiltCard className="glass testimonial" max={9} glare={false}>
                  <div className="stars">★★★★★</div>
                  <p>“{t.quote}”</p>
                  <div className="who">
                    <span className="avatar">{t.initials}</span>
                    <span>
                      <span className="name" style={{ display: "block" }}>
                        {t.name}
                      </span>
                      <span className="role">{t.role}</span>
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / download */}
      <section id="download" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="glass cta-wrap">
              <span className="eyebrow">
                <span className="dot" />
                Get started today
              </span>
              <h2 style={{ marginTop: 20 }}>
                Get <Wordmark style={{ fontSize: "1em" }} /> and order in
                minutes.
              </h2>
              <p>
                Download the app, set your address in Contai, and have your
                essentials on the way before you know it.
              </p>
              <div className="cta-actions">
                <a href="#" className="btn btn-primary">
                  <PlayIcon style={{ width: 18, height: 18 }} />
                  Google Play
                </a>
                <a href="#" className="btn btn-ghost">
                  <AppleIcon style={{ width: 18, height: 18 }} />
                  App Store
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="about">
              <a href="#top" className="brand">
                <Wordmark style={{ fontSize: "1.5rem" }} />
              </a>
              <p>
                Fast local delivery of groceries, medicines and daily essentials
                from trusted stores in Contai (Kanthi), West Bengal. Shop local,
                delivered fast.
              </p>
              <div className="company-meta">
                <span>
                  Operated by <b>Moolya India Private Limited</b>
                </span>
                <span>CIN: U74999UP2024PTC123456</span>
                <span>GSTIN: 19AAUCM3819L1ZN</span>
              </div>
            </div>

            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#features">Why next.</a>
                </li>
                <li>
                  <a href="#how">How it works</a>
                </li>
                <li>
                  <a href="#fair">Fair pricing</a>
                </li>
                <li>
                  <a href="#apps">Our apps</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Partner</h4>
              <ul>
                <li>
                  <a href="#partners">List your store</a>
                </li>
                <li>
                  <a href="#partners">Become a rider</a>
                </li>
                <li>
                  <a href="#download">Download apps</a>
                </li>
                <li>
                  <a href="#fair">Commission model</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Reach us</h4>
              <ul>
                <li className="contact-row">
                  <PinIcon />
                  <span>
                    Plot No. 274, Tagaria, Contai, Purba Medinipur, West Bengal
                    – 721433
                  </span>
                </li>
                <li className="contact-row">
                  <PhoneIcon />
                  <span>+91 522 400 1234</span>
                </li>
                <li className="contact-row">
                  <MailIcon />
                  <span>info@moolyaindiapvtltd.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Moolya India Private Limited. All
              rights reserved.
            </span>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <RouteIcon
                style={{ width: 16, height: 16, color: "var(--green)" }}
              />
              Nearest store · nearest rider · fair for everyone
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
