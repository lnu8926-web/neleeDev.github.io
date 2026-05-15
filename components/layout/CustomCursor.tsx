"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [angle, setAngle] = useState(0);
  const prev = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - prev.current.x;
      const dy = e.clientY - prev.current.y;

      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        setAngle(Math.atan2(dy, dx) * (180 / Math.PI) + 90);
      }

      prev.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: 32,
        height: 32,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        pointerEvents: "none",
        zIndex: 99999,
        imageRendering: "pixelated",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges">
        <rect x="14" y="0"  width="4" height="4" fill="#f0f0f0"/>
        <rect x="12" y="4"  width="8" height="4" fill="#5C7CFA"/>
        <rect x="10" y="8"  width="12" height="4" fill="#5C7CFA"/>
        <rect x="8"  y="12" width="16" height="4" fill="#5C7CFA"/>
        <rect x="13" y="6"  width="6"  height="4" fill="#f0f0f0"/>
        <rect x="2"  y="14" width="6"  height="6" fill="#FF85B3"/>
        <rect x="24" y="14" width="6"  height="6" fill="#FF85B3"/>
        <rect x="10" y="18" width="4"  height="4" fill="#FF85B3"/>
        <rect x="18" y="18" width="4"  height="4" fill="#FF85B3"/>
        <rect x="12" y="22" width="2"  height="4" fill="#5C7CFA"/>
        <rect x="18" y="22" width="2"  height="4" fill="#5C7CFA"/>
      </svg>
    </div>
  );
}
