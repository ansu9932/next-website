import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CountUp from "@/components/CountUp";
import {
  ShieldIcon,
  LockIcon,
  FingerprintIcon,
  BoltIcon,
  GlobeIcon,
  ChartIcon,
  EyeIcon,
  CheckIcon,
  KeyIcon,
  ServerIcon,
  ArrowIcon,
} from "@/components/icons";

const FEATURES = [
  {
    icon: FingerprintIcon,
    title: "Verifiable identity",
    text: "Onboard real people in seconds with document, biometric, and liveness checks that adapt to risk in real time.",
  },
  {
    icon: BoltIcon,
    title: "Real-time fraud defense",
    text: "A self-learning risk engine scores every event in under 40ms, blocking threats before they ever reach your users.",
  },
  {
    icon: LockIcon,
    title: "End-to-end encryption",
    text: "Data is encrypted in transit and at rest with customer-managed keys. You hold the keys — we just keep them safe.",
  },
  {
    icon: ChartIcon,
    title: "Trust analytics",
    text: "See the full trust signal across your funnel with dashboards your risk, product, and growth teams actually share.",
  },
  {
    icon: GlobeIcon,
    title: "Global compliance",
    text: "GDPR, CCPA, PSD2, and KYC/AML coverage across 180+ countries — localized and continuously updated for you.",
  },
  {
    icon: ServerIcon,
    title: "99.99% reliability",
    text: "Multi-region, active-active infrastructure with automatic failover so trust never takes a day off.",
  },
];

const STATS = [
  { end: 12, suffix: "M+", lbl: "Identities verified daily" },
  { end: 99.99, decimals: 2, suffix: "%", lbl: "Uptime SLA" },
  { end: 40, suffix: "ms", lbl: "Avg. risk decision" },
  { end: 0, lbl: "Breaches in 8 years" },
];

const BADGES = [
  { icon: ShieldIcon, t: "SOC 2 Type II", s: "Audited annually" },
  { icon: LockIcon, t: "ISO 27001", s: "Information security" },
  { icon: GlobeIcon, t: "GDPR & CCPA", s: "Privacy by design" },
  { icon: KeyIcon, t: "PCI DSS L1", s: "Payment-grade" },
];

const TRUST_POINTS = [
  {
    t: "Customer-managed keys",
    s: "Bring your own KMS. Rotate, revoke, and audit access whenever you choose.",
  },
  {
    t: "Zero-trust architecture",
    s: "Every request is authenticated, authorized, and encrypted — no implicit trust, ever.",
  },
  {
    t: "Independent pen-testing",
    s: "Third-party security researchers test us continuously, and we publish the results.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Veritrust cut our fraud losses by 71% in the first quarter while making onboarding faster. Our customers literally feel the difference.",
    name: "Amara Okafor",
    role: "VP Risk, NorthPay",
    initials: "AO",
  },
  {
    quote:
      "We replaced four vendors with one platform. Compliance reviews that took weeks now take an afternoon. It's the calmest our security team has ever been.",
    name: "Daniel Reyes",
    role: "CISO, Lumen Bank",
    initials: "DR",
  },
  {
    quote:
      "The 3D-clean dashboards make trust signals obvious to everyone — not just analysts. Adoption across teams was instant.",
    name: "Sofia Lindqvist",
    role: "Head of Product, Vela",
    initials: "SL",
  },
];

const LOGOS = [
  "NorthPay",
  "Lumen Bank",
  "Vela",
  "Aerocred",
  "Monto",
  "Finch",
  "Orbit",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Trust logos marquee */}
      <section className="logos">
        <div className="container">
          <p className="label">Trusted by security-first teams worldwide</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span className="logo" key={i}>
                <ShieldIcon style={{ width: 20, height: 20, opacity: 0.7 }} />
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="platform" className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" />
              The platform
            </span>
            <h2 className="section-title">
              Everything you need to{" "}
              <span className="gradient-text">earn and keep trust</span>.
            </h2>
            <p className="section-subtitle">
              One API, one dashboard, one source of truth. Veritrust unifies the
              tools that used to live in five different vendors.
            </p>
          </Reveal>

          <div className="grid-features">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 90}>
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

      {/* Stats */}
      <section className="section" style={{ paddingBlock: 60 }}>
        <div className="container">
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal key={s.lbl} delay={i * 90}>
                <TiltCard className="glass stat" max={8} glare={false}>
                  <div className="num gradient-text">
                    <CountUp
                      end={s.end}
                      decimals={s.decimals || 0}
                      suffix={s.suffix || ""}
                    />
                  </div>
                  <div className="lbl">{s.lbl}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security / trust */}
      <section id="security" className="section">
        <div className="container">
          <div className="trust-grid">
            <Reveal>
              <span className="eyebrow">
                <span className="dot" />
                Security you can audit
              </span>
              <h2 className="section-title">
                Built to the highest{" "}
                <span className="gradient-text">trust standards</span>.
              </h2>
              <p className="section-subtitle">
                Trust isn't a marketing word here — it's an architecture. Every
                layer is designed, tested, and independently verified.
              </p>
              <ul className="trust-list">
                {TRUST_POINTS.map((p) => (
                  <li key={p.t}>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    <span>
                      <strong>{p.t}</strong>
                      {p.s}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="badges">
                {BADGES.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <TiltCard key={b.t} className="glass badge" max={12}>
                      <span className="b-ic">
                        <Icon />
                      </span>
                      <span>
                        <span className="b-t">{b.t}</span>
                        <span className="b-s" style={{ display: "block" }}>
                          {b.s}
                        </span>
                      </span>
                    </TiltCard>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="customers" className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" />
              Customers
            </span>
            <h2 className="section-title">
              Loved by the people who{" "}
              <span className="gradient-text">protect their users</span>.
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

      {/* CTA */}
      <section id="pricing" className="section">
        <div className="container">
          <Reveal>
            <div className="glass cta-wrap">
              <span className="eyebrow">
                <span className="dot" />
                Start in minutes
              </span>
              <h2 style={{ marginTop: 20 }}>
                Ready to make trust your{" "}
                <span className="gradient-text">advantage</span>?
              </h2>
              <p>
                Spin up a free sandbox, integrate in an afternoon, and go live
                with confidence. No credit card required.
              </p>
              <div className="cta-actions">
                <a href="#" className="btn btn-primary">
                  Start free trial
                  <ArrowIcon style={{ width: 18, height: 18 }} />
                </a>
                <a href="#" className="btn btn-ghost">
                  Talk to sales
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
            <div>
              <a href="#top" className="brand">
                <span className="brand-mark">
                  <ShieldIcon
                    style={{ width: 20, height: 20, color: "#fff" }}
                  />
                </span>
                Veritrust
              </a>
              <p>
                The trust infrastructure for modern teams. Verifiable identity,
                real-time fraud defense, and bank-grade compliance in one
                platform.
              </p>
            </div>

            <div>
              <h4>Platform</h4>
              <ul>
                <li>
                  <a href="#platform">Identity</a>
                </li>
                <li>
                  <a href="#platform">Fraud defense</a>
                </li>
                <li>
                  <a href="#security">Compliance</a>
                </li>
                <li>
                  <a href="#platform">Analytics</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#customers">Customers</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Trust</h4>
              <ul>
                <li>
                  <a href="#security">Security</a>
                </li>
                <li>
                  <a href="#">Trust center</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Veritrust, Inc. All rights reserved.
            </span>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <EyeIcon
                style={{ width: 16, height: 16, color: "var(--accent)" }}
              />
              Privacy-first by design
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
