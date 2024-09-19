import { AnimatePresence, MotionValue, useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

interface FeatureCardProps {
  active?: boolean;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  description,
  icon,
  title,
  active,
}) => {
  return (
    <motion.div
      className={"gap-6 flex flex-col px-6 py-8 rounded-[16px]  "}
      variants={{
        active: {
          backgroundColor: "#101010",
          color: "#ffffff",
        },
        initial: {
          background: "none",
          color: "#ffffffb3",
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      animate={active ? "active" : "initial"}
    >
      <span className="flex gap-3  text-[24px] font-semibold ">
        <span className="mt-2">{icon}</span>
        {title}
      </span>
      <AnimatePresence initial={false}>
        {active && (
          <motion.span
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            className="pl-9 text-[#ffffffb3]"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {description}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FeatureCard;
