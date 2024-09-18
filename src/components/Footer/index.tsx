import React from "react";

const Footer = () => {
  return (
    <div className="relative px-44 py-60 ">
      <div className="relative p-[50px] bg-white text-black rounded-[64px] aspect-[2/1]">
        <div className="w-[75%]">
          <h1 className="text-6xl font-extrabold">
            Connect Effortlessly with Chit-Chat Today
          </h1>
          <p className="text-lg">
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
