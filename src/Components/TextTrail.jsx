// src/Components/TextTrail.jsx
import React, { useEffect, useMemo, useState } from 'react';

const TextTrail = ({
  text = 'Hello World',
  fontFamily = 'Figtree, system-ui, sans-serif',
  fontWeight = 900,
  animateColor = true,
  startColor = '#ff6b6b',
  textColor = '#4ecdc4',
  backgroundColor = 'transparent',
  colorCycleInterval = 2000,
  trailDelay = 0.05, // seconds between character animation starts
}) => {
  const chars = useMemo(() => String(text).split(''), [text]);
  const [currentColor, setCurrentColor] = useState(textColor);

  // Simple color toggle cycle between startColor and textColor
  useEffect(() => {
    if (!animateColor) {
      setCurrentColor(textColor);
      return;
    }
    let mounted = true;
    let toggle = false;
    setCurrentColor(startColor);
    const id = setInterval(() => {
      if (!mounted) return;
      toggle = !toggle;
      setCurrentColor(toggle ? textColor : startColor);
    }, colorCycleInterval);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [animateColor, startColor, textColor, colorCycleInterval]);

  // Respect reduced motion user preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <span
      role="text"
      aria-label={text}
      style={{
        display: 'inline-block',
        backgroundColor,
        fontFamily,
        fontWeight,
        lineHeight: 1,
      }}
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          className="text-trail-char"
          style={{
            display: 'inline-block',
            animation: prefersReducedMotion
              ? 'none'
              : `textTrail 1200ms ease-in-out ${i * trailDelay}s infinite`,
            color: currentColor,
            transition: `color ${Math.max(200, Math.floor(colorCycleInterval / 2))}ms linear`,
            willChange: 'transform, opacity',
            whiteSpace: 'pre',
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}

      {/* Component-local styles */}
      <style>{`
        @keyframes textTrail {
          0% { transform: translateY(0); opacity:1; filter: blur(0); text-shadow: none; }
          40% { transform: translateY(-8px) scale(1.02); opacity:0.95; filter: blur(.6px); text-shadow: 0 6px 14px rgba(0,0,0,0.28); }
          100% { transform: translateY(0); opacity:1; filter: blur(0); text-shadow: none; }
        }
      `}</style>
    </span>
  );
};

export default TextTrail;
