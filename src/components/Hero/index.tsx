import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex px-40 items-center">
      <div className="w-full flex justify-center">
        <div className="gap-3 w-[80%] flex flex-col">
          <h2 className="text-5xl font-extrabold">
            Great Meeting Are Just The Beginning
          </h2>
          <span className="text-[#ffffffb3]">
            Effortless video calls and instant messaging for seamless
            communication anytime, anywhere.
          </span>
          <div className="px-6 py-3 rounded-full w-fit rounded-full font-semibold text-white bg-[#136DF5]">
            Get Started
          </div>
        </div>
      </div>
      <div className="w-full gap-6 items-center  flex justify-end">
        <div className="gap-6 relative flex flex-col w-[17%]">
          <div className="relative w-full aspect-[1.2/2.8] rounded-full  overflow-hidden">
            <Image fill src={"/Asset/Image/user4.png"} alt="image" />
          </div>
          <div className="relative w-full aspect-[1.2/2.8] rounded-full  overflow-hidden">
            <Image fill src={"/Asset/Image/user5.png"} alt="image" />
          </div>
        </div>
        <div className="gap-6 relative flex flex-col w-[17%]">
          <div className="relative w-full aspect-[1.2/2.8] rounded-full  overflow-hidden">
            <Image fill src={"/Asset/Image/user6.png"} alt="image" />
          </div>
          <div className="relative w-full aspect-[1.2/2.8] rounded-full  overflow-hidden">
            <Image fill src={"/Asset/Image/user3.png"} alt="image" />
          </div>
          <div className="relative w-full aspect-[1.2/2.8] rounded-full  overflow-hidden">
            <Image fill src={"/Asset/Image/user4.png"} alt="image" />
          </div>
        </div>
        <div className="mt-20 gap-6  relative flex flex-col w-[17%]">
          <div className="relative w-full aspect-[1.2/2.8] rounded-full  overflow-hidden">
            <Image fill src={"/Asset/Image/user1.png"} alt="image" />
          </div>
          <div className="relative w-full aspect-[1.2/2.8] rounded-full  overflow-hidden">
            <Image fill src={"/Asset/Image/user2.png"} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
