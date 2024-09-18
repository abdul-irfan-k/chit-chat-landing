"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
//@ts-ignore
import { useFrame } from "@studio-freight/hamo";

const lenisContext = createContext<Lenis | undefined>(undefined);
export const useLenisScrollContext = (): Lenis | undefined =>
  useContext(lenisContext);

const LenisSmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      // duration: 5,
      lerp: 0.005,
    });
    lenis.start();
    lenis.resize;
    setLenis(lenis);

    //@ts-ignore
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useFrame((time: any) => {
    if (lenis == undefined) return;
    lenis.raf(time);
  });
  return (
    <lenisContext.Provider value={lenis}>{children}</lenisContext.Provider>
  );
};

export default LenisSmoothScroll;
