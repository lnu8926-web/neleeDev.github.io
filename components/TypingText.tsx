"use client";

import { useState, useEffect } from "react";

interface Props {
  lines: string[];
  className?: string;
  speed?: number;
}

export default function TypingText({ lines, className = "", speed = 100 }: Props) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const current = lines[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (lineIdx < lines.length - 1) {
      const t = setTimeout(() => { setLineIdx((l) => l + 1); setCharIdx(0); }, 200);
      return () => clearTimeout(t);
    }
    setDone(true);
  }, [charIdx, lineIdx, done, lines, speed]);

  return (
    <>
      {lines.map((line, i) => (
        <span key={line} className={className}>
          {i < lineIdx
            ? line
            : i === lineIdx
            ? line.slice(0, charIdx)
            : ""}
          {i === lineIdx && !done && (
            <span className="animate-[blink_1s_step-end_infinite] text-[0.5em] align-middle">▌</span>
          )}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      {done && <span className="animate-[blink_1s_step-end_infinite] text-[0.5em] align-middle">▌</span>}
    </>
  );
}
