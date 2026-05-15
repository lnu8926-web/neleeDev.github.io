"use client";

import { createContext, useContext } from "react";

export const BootContext = createContext(false);

export function useBooted() {
  return useContext(BootContext);
}
