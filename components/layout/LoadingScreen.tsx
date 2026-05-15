"use client";

import { useState, useEffect } from "react";

const STATUS = [
  "BOOTING NELEE.DEV...",
  "LOADING COMPONENTS...",
  "RENDERING PIXELS...",
  "WELCOME.",
];

interface Props {
  onDone: () => void;
}

export default function LoadingScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const statusIdx =
    progress < 35 ? 0 : progress < 70 ? 1 : progress < 100 ? 2 : 3;

  useEffect(() => {
    let p = 0;
    const tick = () => {
      const remaining = 100 - p;
      const speed = remaining > 25 ? 5 : remaining > 8 ? 2 : 0.8;
      p = Math.min(p + Math.random() * speed + 0.3, 100);
      setProgress(Math.round(p));

      if (p < 100) {
        setTimeout(tick, 60 + Math.random() * 100);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 650);
        }, 800);
      }
    };
    const init = setTimeout(tick, 200);
    return () => clearTimeout(init);
  }, [onDone]);

  const SEGMENTS = 20;
  const filled = Math.round((progress / 100) * SEGMENTS);

  return (
    <div
      className={[
        "fixed inset-0 z-[9999] bg-[#111] flex flex-col items-center justify-center",
        "transition-opacity duration-700",
        exiting ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      {/* scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.18) 2px,rgba(0,0,0,0.18) 4px)",
        }}
      />

      {/* 로고 + 프로그레스 — 동일 너비 컨테이너 */}
      <div className="relative flex flex-col gap-10 w-64 md:w-80">

        {/* 로고 */}
        <span className="font-(family-name:--font-pixel) text-lg md:text-2xl uppercase tracking-widest text-center whitespace-nowrap">
          <span className="text-brand-pink/70">&lt;</span>
          <span className="text-white">NELEE.DEV</span>
          <span className="text-brand-pink/70"> /&gt;</span>
        </span>

        {/* status + bar */}
        <div className="flex flex-col gap-4">
          <p className="font-(family-name:--font-pixel) text-[8px] text-brand-white/50 uppercase tracking-widest min-h-[1em]">
            {STATUS[statusIdx]}
            <span className="animate-[blink_1s_step-end_infinite] ml-0.5">▌</span>
          </p>

          <div className="w-full border-2 border-white/70 p-1 flex gap-0.5">
            {Array.from({ length: SEGMENTS }).map((_, i) => (
              <div
                key={i}
                className={[
                  "flex-1 h-4 transition-colors duration-75",
                  i < filled ? "bg-brand-blue" : "bg-white/10",
                ].join(" ")}
              />
            ))}
          </div>

          <div className="flex justify-between">
            <span className="font-(family-name:--font-pixel) text-[7px] text-white/40 uppercase tracking-widest">
              LOADING
            </span>
            <span className="font-(family-name:--font-pixel) text-[7px] text-white tabular-nums">
              {progress}%
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
