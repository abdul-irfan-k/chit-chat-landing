"use client";
import { ReactLenis } from "lenis/react";

const LenisSmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ duration: 3.75 }}>
      {children}
    </ReactLenis>
  );
};

export default LenisSmoothScroll;
