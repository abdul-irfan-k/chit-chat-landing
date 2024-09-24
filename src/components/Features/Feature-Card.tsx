import { AnimatePresence, MotionValue, useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";
import BackgroundVideo from "../BackgroundVideo";

interface FeatureCardProps {
  active?: boolean;
  title: string;
  description: string;
  icon: React.ReactNode;
  src: string;
  direction?: "left" | "right";
}

const FeatureCard = React.forwardRef<HTMLVideoElement, FeatureCardProps>(
  ({ description, icon, title, active, src, direction = "left" }, ref) => {
    return (
      <div className=" p-5 bg-[#101010] rounded-[16px] lg:bg-transparent w-full sm:w-[47%] lg:w-full lg:p-0">
        <motion.div
          className={"flex flex-col  rounded-[16px]  lg:p-6 lg:gap-6 "}
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
          <span className="flex gap-3   font-semibold lg:text-[24px] ">
            <span className="mt-2">{icon}</span>
            {title}
          </span>
          <AnimatePresence>
            {/* {active && ( */}
            <motion.div
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              className=" text-[#ffffffb3] text-sm lg:text-base lg:pl-9 "
              key="content"
              initial="collapsed"
              animate={active ? "open" : "collapsed"}
              exit="collapsed"
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {description}
            </motion.div>
            {/* )} */}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className={
            "lg:absolute lg:top-0  " +
            (direction === "left"
              ? "lg:pl-20  lg:left-[50%]"
              : "lg:right-[50%] lg:pr-20")
          }
          animate={{
            opacity: active ? 1 : 0,
            transition: { duration: 0.5 },
          }}
        >
          <BackgroundVideo src={src} ref={ref} />
        </motion.div>
      </div>
    );
  }
);

export default FeatureCard;
