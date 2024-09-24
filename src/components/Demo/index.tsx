import React from "react";
import BackgroundVideo from "../BackgroundVideo";

const Demo = () => {
  return (
    <div className="relative   px-3 sm:px-5  md:px-14 lg:px-28 xl:px-40 pt-32 lg:pt-44 xl:pt-60">
      <div className="gap-3 flex items-center">
        <div className="relative block  aspect-square rounded-full bg-white  w-4 md:w-5 lg:w-6 "></div>
        <span className="text-white  text-lg sm:text-xl lg:text-2xl">demo</span>
      </div>
      <h1 className="mt-6 text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        VIDEO DEMO
      </h1>
      <div className="mt-10 w-full aspect-video rounded-[16px] overflow-hidden">
        <BackgroundVideo
          src={
            "https://res.cloudinary.com/dl9ibkuyg/video/upload/v1726924053/ymms4onuhuo0dtahsyhu.mp4"
          }
        />
      </div>
    </div>
  );
};

export default Demo;
