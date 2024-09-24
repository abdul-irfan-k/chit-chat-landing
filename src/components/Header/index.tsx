import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="px-3 sm:px-5  md:px-14 lg:px-28 xl:px-40">
      <div className="absolute top-2  w-[20%] max-w-[70px] aspect-square">
        <Image fill src={"/Asset/Image/logo.png"} alt="image" />
      </div>

      <div className="absolute top-[5%] translate-y-[-50%] text-2xl font-bold left-[50%] translate-x-[-50%]">
        CHIT-CHAT
      </div>
    </div>
  );
};

export default Header;
