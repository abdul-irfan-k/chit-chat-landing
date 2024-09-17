"use client";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useFrame } from "@studio-freight/hamo";

const LenisSmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | undefined>(undefined);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      // duration: 5,
      lerp: 0.05,
    });
    lenis.start();
    setLenis(lenis);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useFrame((time: any) => {
    if (lenis == undefined) return;
    lenis.raf(time);
  });
  return <div>{children}</div>;
};

export default LenisSmoothScroll;
