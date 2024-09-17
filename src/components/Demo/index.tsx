import React from "react";
import DemoVideo from "../../../videos/demo1.mp4";
import BackgroundVideo from "next-video/background-video";

const Demo = () => {
  return (
    <div className="relative px-44 py-60">
      <div className="gap-3 flex items-center">
        <div className="relative block w-6 aspect-square rounded-full bg-white "></div>
        <span className="text-white text-2xl">demo</span>
      </div>
      <h1 className="mt-6 text-center font-extrabold text-6xl">VIDEO DEMO</h1>
      <div className="mt-10 w-full aspect-video rounded-[16px] overflow-hidden">
        <BackgroundVideo src={DemoVideo} />
      </div>
    </div>
  );
};

export default Demo;
