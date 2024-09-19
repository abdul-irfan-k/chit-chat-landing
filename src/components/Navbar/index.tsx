"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window === undefined) return;
    const handleScroll = (e: any) => {
      if (e.wheelDelta > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="fixed flex pb-5 bottom-0 w-screen z-30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="  gap-6 px-6  mx-auto py-4 flex items-center bottom-10  rounded-[32px] bg-[#171717]"
        variants={{
          active: {
            y: 0,
            opacity: 1,
          },
          hidden: {
            y: "150%",
            opacity: 0,
          },
        }}
        initial="active"
        animate={isVisible || isHovering ? "active" : "hidden"}
      >
        <NavItem label="home" />
        <NavItem label="demo" />
        <NavItem label="features" />
        <NavItem label="technology" />
        <NavItem label="get started" />
      </motion.div>
    </div>
  );
};

export default Navbar;

const NavItem = ({
  isActive,
  label,
}: {
  label: string;
  isActive?: boolean;
}) => {
  return (
    <div className="px-4 py-2 rounded-[16px] border-[1px] text-white">
      {label}
    </div>
  );
};
