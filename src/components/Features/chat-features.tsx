"use client";
import React, { useEffect, useRef, useState } from "react";
import FeatureCard from "./Feature-Card";
import { RotateCwSquare } from "lucide-react";
import {
  AnimatePresence,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import BackgroundVideo from "next-video/background-video";
import Demo2 from "../../../videos/demo2.webm";
import Demo3 from "../../../videos/demo3.webm";

const ChatFeatures = () => {
  const featuresRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end end"],
  });
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 1, 2, 3, 4, 5]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    return activeIndex.onChange((latest) => {
      setIndex(Math.round(latest));
    });
  }, [activeIndex]);

  return (
    <div className="relative  py-60 h-[600vh]" ref={featuresRef}>
      <div className="sticky top-6">
        <div className="px-44 gap-3 flex items-center">
          <div className="relative block w-6 aspect-square rounded-full bg-white "></div>
          <span className="text-white text-2xl">features</span>
        </div>

        <div className="relative mt-10 gap-5 flex ">
          <div className="pl-44 flex flex-col w-full">
            <AnimatePresence>
              <FeatureCard
                title="Message Reactions & Viewers List"
                description="Enhance conversations with personalized message reactions, while the insightful viewers list keeps you updated on who’s following the chat."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 0}
              />
              <FeatureCard
                title="Keyboard Shortcuts"
                description="Enhance conversations with personalized message reactions, while the insightful viewers list keeps you updated on who’s following the chat."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 1}
              />
              <FeatureCard
                title="Dark & Light Themes"
                description="Enhance conversations with personalized message reactions, while the insightful viewers list keeps you updated on who’s following the chat."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 2}
              />
              <FeatureCard
                title="Dual-Mode Aesthetic: Dark & Light Themest"
                description="Enhancepx-44 conversations with personalized message reactions, while the insightful viewers list keeps you updated on who’s following the chat."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 3}
              />
              <FeatureCard
                title="Customizable User Message Themes"
                description="Enhance conversations with personalized message reactions, while the insightful viewers list keeps you updated on who’s following the chat."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 4}
              />
            </AnimatePresence>
          </div>
          <div className="relative w-full aspect-square bg-[#171717]">
            {/* <motion.div
              variants={{ active: { opacity: 1 }, initial: { opacity: 0 } }}
              animate={index < 2 ? "active" : "initial"}
              className="absolute top-0 left-0 w-full h-full"
            > */}
            {index < 2 && (
              <BackgroundVideo src={Demo2} className="w-full h-full" />
            )}
            {/* </motion.div> */}
            {/* <motion.div
              variants={{ active: { opacity: 1 }, initial: { opacity: 0 } }}
              animate={index >= 2 ? "active" : "initial"}
              className="absolute top-0 left-0 w-full h-full"
            > */}
            {index >= 2 && (
              <BackgroundVideo src={Demo3} className="w-full h-full" />
            )}
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFeatures;
