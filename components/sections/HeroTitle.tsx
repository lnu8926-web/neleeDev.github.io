"use client";

import { useState, useEffect } from "react";
import { useBooted } from "@/components/layout/BootContext";

const FULL_TEXT = "<FRONTEND.DEV>";
const SPEED = 80;

interface Props {
  onDone?: () => void;
}

export default function HeroTitle({ onDone }: Props) {
  const booted = useBooted();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!booted) return;
    if (count >= FULL_TEXT.length) { onDone?.(); return; }
    const t = setTimeout(() => setCount((c) => c + 1), SPEED);
    return () => clearTimeout(t);
  }, [booted, count, onDone]);

  const displayed = FULL_TEXT.slice(0, count);
  const done = count >= FULL_TEXT.length;

  return (
    <>
      {displayed.split("").map((char, i) => (
        <span key={i} className={char === "<" || char === ">" ? "text-brand-pink glow-pink" : "text-brand-white glow-blue"}>
          {char}
        </span>
      ))}
      {!done && (
        <span className="text-brand-white animate-[blink_1s_step-end_infinite] text-[0.5em] align-middle">▌</span>
      )}
    </>
  );
}
