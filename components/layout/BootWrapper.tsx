"use client";

import { useState } from "react";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { BootContext } from "@/components/layout/BootContext";

export default function BootWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <BootContext.Provider value={loaded}>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div
        className={[
          "flex flex-col min-h-full transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        {children}
      </div>
    </BootContext.Provider>
  );
}
