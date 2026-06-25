"use client";

import { useRef } from "react";

/**
 * 3D mouse-tilt card. Wraps children and tilts toward the cursor using
 * CSS transforms. Also feeds --mx/--my to power the glare highlight.
 */
export default function TiltCard({
  children,
  className = "",
  max = 12,
  glare = true,
  ...rest
}) {
  const ref = useRef(null);
  const raf = useRef(0);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotX = (0.5 - py) * max * 2;
    const rotY = (px - 0.5) * max * 2;

    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateX(${rotX.toFixed(
        2,
      )}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(0)`;
      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {glare && <span className="tilt-glare" aria-hidden="true" />}
      <div className="tilt-inner">{children}</div>
    </div>
  );
}
