// src/Components/Galaxy.jsx
import React, { useRef, useEffect } from "react";

const Galaxy = ({
  mouseRepulsion = false,
  mouseInteraction = true,
  density = 0.002, // stars per pixel
  glowIntensity = 0.6,
  saturation = 0.8,
  hueShift = 240,
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({
    stars: [],
    w: 0,
    h: 0,
    mouseX: 0.5,
    mouseY: 0.5,
  });

  // Resize & init
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const parent = canvas.parentElement || document.body;
      const rect = parent.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      stateRef.current.w = w;
      stateRef.current.h = h;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // (re)create stars based on density and area
      const count = Math.max(40, Math.floor(w * h * density));
      const stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.2 + Math.random() * 0.8, // depth factor
        speed: 0.2 + Math.random() * 0.8,
        size: 0.4 + Math.random() * 1.6,
        hue: (hueShift + Math.random() * 60) % 360,
      }));
      stateRef.current.stars = stars;
    };

    // use ResizeObserver to pick up any parent size changes
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || document.body);
    resize();

    return () => {
      ro.disconnect();
    };
  }, [density, hueShift]);

  // Mouse tracking (uses window so foreground elements won't block it)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / Math.max(1, rect.width);
      const my = (e.clientY - rect.top) / Math.max(1, rect.height);
      stateRef.current.mouseX = Math.max(0, Math.min(1, mx));
      stateRef.current.mouseY = Math.max(0, Math.min(1, my));
    };

    if (mouseInteraction) {
      window.addEventListener("mousemove", updateMouse, { passive: true });
      window.addEventListener("touchmove", (ev) => {
        if (ev.touches && ev.touches[0]) updateMouse(ev.touches[0]);
      }, { passive: true });
    }

    return () => {
      if (mouseInteraction) {
        window.removeEventListener("mousemove", updateMouse);
        window.removeEventListener("touchmove", updateMouse);
      }
    };
  }, [mouseInteraction]);

  // Draw loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      const s = stateRef.current;
      const w = s.w;
      const h = s.h;
      if (!w || !h) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      // clear with a very dark transparent background so the color can show subtly
      ctx.clearRect(0, 0, w, h);
      // subtle background tint (very dark)
      ctx.fillStyle = `rgba(6, 6, 10, 0.25)`;
      ctx.fillRect(0, 0, w, h);

      // base hue tint (soft color wash)
      ctx.globalCompositeOperation = "lighter";

      // draw stars
      const centerX = w / 2;
      const centerY = h / 2;
      const mx = (s.mouseX - 0.5) * 2; // -1..1
      const my = (s.mouseY - 0.5) * 2;

      for (let i = 0; i < s.stars.length; i++) {
        const star = s.stars[i];
        // parallax shift by mouse
        const px = star.x + mx * (1 - star.z) * 40;
        const py = star.y + my * (1 - star.z) * 40;

        // twinkle by sine + depth
        const tw = (Math.sin((i + performance.now() / 1000) * (0.5 + star.speed)) + 1) * 0.5;
        const alpha = 0.25 + tw * glowIntensity * (1 - star.z);

        // size scaled by depth
        const size = star.size * (1 + (1 - star.z) * 1.8);

        ctx.beginPath();
        const hue = star.hue;
        ctx.fillStyle = `hsla(${hue}, ${Math.min(100, saturation * 120)}%, ${60 - star.z * 40}%, ${alpha})`;
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [glowIntensity, saturation]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 0,
        pointerEvents: "none", // leave interactions for foreground content
      }}
    />
  );
};

export default Galaxy;
