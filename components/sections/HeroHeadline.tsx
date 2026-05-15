"use client";

import { useState } from "react";
import HeroTitle from "@/components/sections/HeroTitle";

export default function HeroHeadline() {
  const [done, setDone] = useState(false);

  return (
    <>
      <h1 className="font-(family-name:--font-pixel) text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-tight uppercase mb-8 max-w-3xl text-center">
        <HeroTitle onDone={() => setDone(true)} />
      </h1>

      <p
        className={[
          "text-base md:text-lg text-brand-white/70 max-w-xl leading-relaxed mb-10 border-l-4 border-brand-blue/50 pl-4 bg-brand-grey/40",
          "transition-opacity duration-700",
          done ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        사용자가 보고 느끼는 모든 것을 만드는 개발자
      </p>
    </>
  );
}
