import { MotionValue, useTransform } from "framer-motion";
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
      className={"gap-6 flex flex-col px-6 py-5 rounded-[16px]  "}
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
      <motion.span
        variants={{
          active: {
            display: "block",
            opacity: 1,
          },
          initial: {
            display: "none",
            opacity: 0,
          },
        }}
        className="pl-9 text-[#ffffffb3]"
        animate={active ? "active" : "initial"}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.span>
    </motion.div>
  );
};

export default FeatureCard;
