"use client";

import { useRef } from "react";
import CountUp from "./CountUp";
import {
  ArrowIcon,
  BoltIcon,
  PinIcon,
  RupeeIcon,
  BagIcon,
  ScooterIcon,
} from "./icons";

export default function Hero() {
  const sceneRef = useRef(null);
  const raf = useRef(0);

  const onMove = (e) => {
    const el = sceneRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(
        px * 12
      ).toFixed(2)}deg)`;
    });
  };

  const onLeave = () => {
    const el = sceneRef.current;
    if (el) el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">
            <span className="dot" />
            Now serving Contai (Kanthi), West Bengal
          </span>

          <h1>
            Your essentials,{" "}
            <span className="gradient-text">delivered in minutes</span>.
          </h1>

          <p className="lead">
            Order groceries, medicines, snacks and daily essentials from trusted
            local stores near you — picked from the nearest shop and delivered
            by the closest rider. Quick for you, fair for everyone.
          </p>

          <div className="hero-actions">
            <a href="#download" className="btn btn-primary">
              Get the app
              <ArrowIcon style={{ width: 18, height: 18 }} />
            </a>
            <a href="#how" className="btn btn-ghost">
              See how it works
            </a>
          </div>

          <div className="hero-meta">
            <div className="item">
              <div className="num">
                <CountUp end={15} suffix=" min" />
              </div>
              <div className="lbl">Typical delivery</div>
            </div>
            <div className="item">
              <div className="num">
                <CountUp end={9} suffix=" km" />
              </div>
              <div className="lbl">Service radius</div>
            </div>
            <div className="item">
              <div className="num">
                <CountUp end={399} prefix="₹" />
              </div>
              <div className="lbl">Free delivery above</div>
            </div>
          </div>
        </div>

        {/* 3D delivery scene */}
        <div
          className="scene"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          ref={sceneRef}
          aria-hidden="true"
        >
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />

          <div className="phone">
            <div className="phone-screen">
              <span className="phone-notch" />
              <div className="phone-map">
                <span className="phone-route" />
                <span className="map-pin a" />
                <span className="map-pin b" />
                <span className="rider-dot" />
              </div>
              <div className="phone-card">
                <div className="pc-row">
                  <div>
                    <div className="pc-eta">
                      Arriving in <span>9 min</span>
                    </div>
                    <div className="pc-sub">Rider Sourav is on the way</div>
                  </div>
                </div>
                <div className="pc-bar">
                  <i />
                </div>
                <div className="pc-item">
                  <span className="dotg">
                    <BagIcon />
                  </span>
                  Groceries · 6 items
                </div>
                <div className="pc-item">
                  <span className="dotg">
                    <ScooterIcon />
                  </span>
                  Picked up from Maa Tara Stores
                </div>
              </div>
            </div>
          </div>

          <div className="glass chip chip-1">
            <span className="ic">
              <BoltIcon />
            </span>
            Lightning fast
          </div>
          <div className="glass chip chip-2">
            <span className="ic">
              <PinIcon />
            </span>
            Live tracking
          </div>
          <div className="glass chip chip-3">
            <span className="ic">
              <RupeeIcon />
            </span>
            No hidden charges
          </div>
        </div>
      </div>
    </header>
  );
}
