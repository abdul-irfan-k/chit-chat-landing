import Image from "next/image";
import React from "react";

const Technologies = () => {
  const techIcons = [
    { src: "react-original.svg", label: "React" },
    { src: "typescript-plain.svg", label: "Next.js" },
    { src: "nodejs-plain.svg", label: "Node.js" },
    { src: "typescript-plain.svg", label: "TypeScript" },
    { src: "javascript-original.svg", label: "JavaScript" },
    { src: "tailwindcss-plain.svg", label: "Tailwind CSS" },
    { src: "mongodb-plain.svg", label: "MongoDB" },
    { src: "git-plain.svg", label: "Express" },
    { src: "redis-original.svg", label: "Redis" },
    { src: "git-plain.svg", label: "Git" },
    { src: "github-original.svg", label: "GitHub" },
    { src: "css3-plain.svg", label: "Socket.IO" },
    { src: "figma-original.svg", label: "Figma" },
    { src: "css3-plain.svg", label: "CSS3" },
  ];

  return (
    <div className="relative  pt-32 lg:pt-44 xl:pt-60">
      <div className="gap-3 flex items-center px-3 sm:px-5  md:px-14 lg:px-28 xl:px-40">
        <div className="relative block  aspect-square rounded-full bg-white  w-4 md:w-5 lg:w-6 "></div>
        <span className="text-white  text-lg sm:text-xl lg:text-2xl">
          Technologies
        </span>
      </div>
      {/* <h1 className="mt-6 text-center font-extrabold text-6xl">Technologies</h1> */}
      <div className="px-3 sm:px-5  md:px-14 lg:px-28 xl:px-40">
        <div className="relative  flex w-full overflow-x-hidden">
          <div className="flex gap-6  pt-12 w-fit animate-infinite-scroll">
            {techIcons.map((icon, index) => {
              return (
                <div
                  className=" gap-3 flex items-center relative  "
                  key={icon.label}
                >
                  <div className="relative w-[50px]  aspect-square">
                    <Image
                      src={`/Asset/Icons/${icon.src}`}
                      fill
                      alt="svg-image"
                    />
                  </div>
                  <span className="text-2xl font-semibold text-nowrap text-[#ffffffb3]">
                    {icon.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex ml-5 gap-6  pt-12 w-fit animate-infinite-scroll ">
            {techIcons.map((icon, index) => {
              return (
                <div
                  className=" gap-3 flex items-center relative  "
                  key={icon.label}
                >
                  <div className="relative w-[50px]  aspect-square">
                    <Image
                      src={`/Asset/Icons/${icon.src}`}
                      fill
                      alt="svg-image"
                    />
                  </div>
                  <span className="text-2xl font-semibold text-nowrap text-[#ffffffb3]">
                    {icon.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div
            className="absolute h-full w-[15%] top-0 "
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,100%), rgba(0,0,0,0%))",
            }}
          ></div>

          <div
            className="absolute top-0 w-[15%] h-full  right-0 "
            style={{
              background:
                "linear-gradient(270deg, rgba(0,0,0,100%), rgba(0,0,0,0%))",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
