import React from "react";
import Eyes from "./Eyes";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Projects = () => {
  return (
    <div className="w-full min-h-screen pb-[2vw] text-zinc-900 bg-[#CEEA67] overflow-hidden ">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className='relative w-full flex flex-col items-center justify-center h-full font-["FoundersGrotesk, Roboto, sans-serif"]'
      >
        <div className="absolute gap-[3vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-between">
          <Eyes />
        </div>
        <h1 className="text-[12vw] leading-none font-bold -mb-4 tracking-tighter">
          READY
        </h1>
        <h1 className="text-[12vw] leading-none font-bold -mb-4  tracking-tighter">
          TO START
        </h1>
        <h1 className="text-[12vw] leading-none font-bold -mb-4  tracking-tighter">
          THE PROJECT ?
        </h1>
        <div className="mt-[2vw] bg-[#212121] rounded-full px-[1vw] py-[1vw]  w-fit flex justify-between items-center gap-[1.5vw] text-white ">
          <span className="tracking-tight mr-1">START THE PROJECT</span>
          <span className="bg-white text-black p-[0.5vw] rounded-full">
            <ArrowOutwardIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
