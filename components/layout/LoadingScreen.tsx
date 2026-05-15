"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const STATUS = [
  "INITIALIZING SYSTEM...",
  "LOADING ASSETS...",
  "BUILDING INTERFACE...",
  "SYSTEM READY.",
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
      const speed = remaining > 25 ? 10 : remaining > 8 ? 4 : 1.5;
      p = Math.min(p + Math.random() * speed + 0.5, 100);
      setProgress(Math.round(p));

      if (p < 100) {
        setTimeout(tick, 30 + Math.random() * 70);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 650);
        }, 550);
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
        "fixed inset-0 z-[9999] bg-[#111] flex flex-col items-center justify-center gap-10",
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

      {/* logo */}
      <div className="relative flex flex-col items-center gap-4">
        <div className="border-2 border-white/80 p-4 shadow-[4px_4px_0px_rgba(92,124,250,0.5)]">
          <Terminal size={36} strokeWidth={2} className="text-brand-blue" />
        </div>
        <span className="font-(family-name:--font-pixel) text-lg md:text-2xl text-white uppercase tracking-widest">
          PIXEL.DEV
        </span>
      </div>

      {/* status + bar */}
      <div className="flex flex-col items-center gap-4 w-64 md:w-80">
        {/* status message */}
        <p className="font-(family-name:--font-pixel) text-[8px] text-brand-grey uppercase tracking-widest self-start min-h-[1em]">
          {STATUS[statusIdx]}
          <span className="animate-[blink_1s_step-end_infinite] ml-0.5">▌</span>
        </p>

        {/* segmented bar */}
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

        {/* percent */}
        <div className="flex justify-between w-full">
          <span className="font-(family-name:--font-pixel) text-[7px] text-white/40 uppercase tracking-widest">
            LOADING
          </span>
          <span className="font-(family-name:--font-pixel) text-[7px] text-white tabular-nums">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
