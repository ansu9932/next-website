"use client";

import { useRef } from "react";
import CountUp from "./CountUp";
import {
  ShieldIcon,
  ArrowIcon,
  LockIcon,
  FingerprintIcon,
  CheckIcon,
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
      el.style.transform = `rotateX(${(-py * 10).toFixed(
        2,
      )}deg) rotateY(${(px * 14).toFixed(2)}deg)`;
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
            SOC 2 Type II · ISO 27001 certified
          </span>

          <h1>
            Build on a foundation of{" "}
            <span className="gradient-text">absolute trust</span>.
          </h1>

          <p className="lead">
            Veritrust gives modern teams verifiable identity, real-time fraud
            defense, and bank-grade compliance — in one elegant platform your
            customers can feel safe with.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">
              Start free trial
              <ArrowIcon style={{ width: 18, height: 18 }} />
            </a>
            <a href="#platform" className="btn btn-ghost">
              Explore the platform
            </a>
          </div>

          <div className="hero-meta">
            <div className="item">
              <div className="num">
                <CountUp end={99.99} decimals={2} suffix="%" />
              </div>
              <div className="lbl">Platform uptime</div>
            </div>
            <div className="item">
              <div className="num">
                <CountUp end={4.2} decimals={1} prefix="$" suffix="B+" />
              </div>
              <div className="lbl">Protected yearly</div>
            </div>
            <div className="item">
              <div className="num">
                <CountUp end={180} suffix="+" />
              </div>
              <div className="lbl">Countries covered</div>
            </div>
          </div>
        </div>

        {/* 3D scene */}
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

          <div className="cube-wrap">
            <div className="cube">
              <div className="face front">
                <ShieldIcon style={{ color: "#cfd2ff" }} />
              </div>
              <div className="face back">
                <LockIcon style={{ color: "#cfd2ff" }} />
              </div>
              <div className="face right">
                <FingerprintIcon style={{ color: "#cfd2ff" }} />
              </div>
              <div className="face left">
                <CheckIcon style={{ color: "#cfd2ff" }} />
              </div>
              <div className="face top">
                <ShieldIcon style={{ color: "#cfd2ff" }} />
              </div>
              <div className="face bottom">
                <LockIcon style={{ color: "#cfd2ff" }} />
              </div>
            </div>
          </div>

          <div className="glass chip chip-1">
            <span className="ic">
              <LockIcon />
            </span>
            End-to-end encrypted
          </div>
          <div className="glass chip chip-2">
            <span className="ic">
              <CheckIcon />
            </span>
            Identity verified
          </div>
          <div className="glass chip chip-3">
            <span className="ic">
              <ShieldIcon />
            </span>
            0 breaches · 8 yrs
          </div>
        </div>
      </div>
    </header>
  );
}
