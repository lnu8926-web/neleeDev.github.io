"use client";

import { BootContext } from "@/components/layout/BootContext";

export default function BootWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BootContext.Provider value={true}>
      <div className="flex flex-col min-h-full">
        {children}
      </div>
    </BootContext.Provider>
  );
}
