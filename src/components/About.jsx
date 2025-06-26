import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const About = () => {
  return (
    // heading
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full text-[#212121] pt-20  bg-[#CDEA68] rounded-3xl 3xl font-["NeueMontreal, Roboto, sans-serif"] '>
      <h1 className=" mt-5 pb-[5vw] font-medium leading-none pl-[4vw] pr-[11vw] text-[3.5vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to{" "}
        <span className="underline">
          raise funds, sell prod­ucts, ex­plain com­plex ideas
        </span>
        , and <span className="underline">hire great peo­ple.</span>
      </h1>

      {/* flex boxes */}
      <div className="px-[5vw] pt-[2vw] pb-[5vw] border-t-1 border-[#a1b562] w-full flex item justify-between">
        {/* left */}
        <div className="w-1/2">
          <p className="font-normal text-[1vw] leading-[2vw]">
            What you can expect:
          </p>
        </div>
        {/* right */}
        <div className="w-1/2 flex">
          {/* left */}
          <div className="flex gap-5 flex-col w-[50%]">
            <p className="w-[90%] font-normal text-[1vw] leading-[25.3465px]">
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.
            </p>
            <p className="w-[90%] font-normal text-[1vw] leading-[25.3465px]">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          {/* right */}
          <div className=" pt-[5vw] pl-[10vw] font-normal text-[1vw] leading-[2vw] flex flex-col ">
            <p>S:</p>
            <p className="mt-1 flex flex-col">
              <a className="underline" href="">
                Instagram
              </a>
              <a className="underline" href="">
                Behance
              </a>
              <a className="underline" href="">
                Facebook
              </a>
              <a className="underline" href="">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[1vw] pb-10 border-t-1 border-[#a1b562] flex w-full justify-between">
        {/* left */}
        <div className="w-1/2 pl-[4vw]">
          <h1 className="text-[4vw] font-normal tracking-tight leading-none">
            Our approach:
          </h1>
          <div className="mt-[2vw] bg-[#212121] rounded-4xl p-3 w-fit flex justify-between items-center gap-5 text-white ">
            <span className="px-2 tracking-tight mr-1">READ MORE</span>
            <span className="bg-white text-black p-2 rounded-full">
              <ArrowOutwardIcon />
            </span>
          </div>
        </div>

        {/* right */}
        <div className="w-1/2 pt-5 pr-[4vw]">
          <img
            className="rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
