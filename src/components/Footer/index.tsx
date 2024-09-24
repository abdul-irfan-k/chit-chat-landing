import React from "react";

const Footer = () => {
  return (
    <div className="relative  px-3 sm:px-5  md:px-14 lg:px-28 xl:px-40 pt-32 lg:pt-44 xl:pt-60">
      <div className="relative  bg-white text-black  aspect-[2/1] rounded-[16px] lg:rounded-[64px] p-[24px] md:p-[30px] lg:p-[50px]">
        <div className="w-[90%] lg:w-[75%]">
          <h1 className=" font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            Connect Effortlessly with Chit-Chat Today
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Experience seamless video calls and real-time chat with Chit-Chat.
            Start connecting today and elevate your communication experience
          </p>
        </div>

        <div className="absolute bottom-[50px] flex gap-6 text-base">
          <span>demo</span>
          <span>contact</span>
          <span>help</span>
          <span>technologies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
