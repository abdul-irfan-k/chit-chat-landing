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
import useDeviceType from "@/hooks/user-device-type";

const ChatFeatures = () => {
  const deviceType = useDeviceType();

  const featuresRef = useRef(null);

  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);
  const video3 = useRef<HTMLVideoElement>(null);
  const video4 = useRef<HTMLVideoElement>(null);
  const video5 = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end end"],
  });
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 2, 3, 4, 5, 6]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    return activeIndex.onChange((latest) => {
      setIndex(Math.round(latest));
    });
  }, [activeIndex]);

  const onViewportEnterHandler = () => {
    video1.current?.play();
    video2.current?.play();
    video3.current?.play();
    video4.current?.play();
    video5.current?.play();
  };

  return (
    <motion.div
      className="relative   lg:h-[600vh] pt-32 lg:pt-44 xl:pt-60 "
      ref={featuresRef}
      onViewportEnter={onViewportEnterHandler}
      onViewportLeave={() => console.log("leave")}
    >
      <div className="sticky top-0">
        <div className=" gap-3 flex items-center px-3 sm:px-5  md:px-14 lg:px-28 xl:px-32">
          <div className="relative block w-6 aspect-square rounded-full bg-white "></div>
          <span className="text-white text-2xl">features</span>
        </div>

        <div className="relative mt-5 gap-5 flex px-3 sm:px-5  md:px-14 lg:px-0 ">
          <div className="gap-5 flex flex-wrap justify-between  w-full  lg:pl-32 lg:flex-col lg:justify-normal lg:gap-0">
            <AnimatePresence>
              <FeatureCard
                title="Message Reactions & Viewers List"
                description="Enhance conversations with personalized message reactions, while the insightful."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 1 || deviceType != "Desktop"}
                src="https://res.cloudinary.com/dl9ibkuyg/video/upload/v1726924500/hrpkpmvpdocebjayqbrk.webm"
                ref={video1}
              />

              <FeatureCard
                title="Keyboard Shortcuts"
                description="Enhance conversations with personalized message reactions, while the insightful."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 2 || deviceType != "Desktop"}
                src="https://res.cloudinary.com/dl9ibkuyg/video/upload/v1726924500/owzqb8nomvma7mpdeozr.webm"
                ref={video2}
              />

              <FeatureCard
                title="Dark & Light Themes"
                description="Enhance conversations with personalized message reactions, while the insightful."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 3 || deviceType != "Desktop"}
                src="https://res.cloudinary.com/dl9ibkuyg/video/upload/v1726924500/hrpkpmvpdocebjayqbrk.webm"
                ref={video3}
              />

              <FeatureCard
                title="Dual-Mode Aesthetic: Dark & Light Themest"
                description="Enhancepx-40 conversations with personalized message reactions, while the insightful viewers list keeps you updated on who’s following the chat."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 4 || deviceType != "Desktop"}
                src="https://res.cloudinary.com/dl9ibkuyg/video/upload/v1726924500/owzqb8nomvma7mpdeozr.webm"
                ref={video4}
              />
              <FeatureCard
                title="Customizable User Message Themes"
                description="Enhance conversations with personalized message reactions, while the insightful."
                icon={<RotateCwSquare className="w-6 h-6   " />}
                active={index == 5 || deviceType != "Desktop"}
                src="https://res.cloudinary.com/dl9ibkuyg/video/upload/v1726924500/hrpkpmvpdocebjayqbrk.webm"
                ref={video5}
              />
            </AnimatePresence>
          </div>
          {/* <div className="relative w-full aspect-square bg-[#171717]"> */}
          <div className="relative  aspect-square  lg:w-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatFeatures;
