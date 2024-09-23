import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <div className="relative  py-60">
      <div className="px-40 gap-3 flex items-center">
        <div className="relative block w-6 aspect-square rounded-full bg-white "></div>
        <span className="text-white text-2xl">Technologies</span>
      </div>
      <h1 className="mt-6 text-center font-extrabold text-6xl">Technologies</h1>

      <div className="flex gap-6">
        <div className=" gap-3 flex flex-col relative w-[70px] ">
          <div className="relative aspect-square">
            <Image src={"/Asset/Icons/css3-plain.svg"} fill alt="svg-image" />
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
