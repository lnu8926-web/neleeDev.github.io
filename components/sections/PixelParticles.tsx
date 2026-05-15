"use client";

import { useMemo } from "react";

const COUNT = 35;

export default function PixelParticles() {
  const particles = useMemo(() =>
    Array.from({ length: COUNT }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() < 0.7 ? 1 : 2,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 6,
      opacity: 0.2 + Math.random() * 0.4,
      color: Math.random() < 0.6 ? "#f0f0f0" : Math.random() < 0.5 ? "#5C7CFA" : "#FF85B3",
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `blink ${p.duration}s ${p.delay}s step-end infinite`,
          }}
        />
      ))}
    </div>
  );
}
