import React from "react";

const Cards = () => {
  return (
    <div className=" border-t-[1px] border-zinc-500 w-full flex gap-[2vw] p-[3vw] justify-center items-center h-screen bg-zinc-900">
      <div className="w-1/2 rounded-2xl h-[50vh] bg-[#004D43] ">
        <div className="relative flex w-full h-full items-center justify-center ">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute rounded-full left-[2vw] bottom-[2vw] px-2 py-1 border-1 border-zinc-100 ">&copy;2025-2026</button>
        </div>
      </div>

       <div className="w-1/2 flex h-[50vh] gap-[2vw] ">
        <div className="w-1/2 flex relative items-center justify-center h-full rounded-2xl  bg-[#FFFF] ">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
           <button className="absolute uppercase text-zinc-900 rounded-full left-[2vw] bottom-[2vw] px-2 py-1 border-1 border-zinc-900 ">business bootcamp alumni</button>
        </div>
        <div className="w-1/2 flex relative items-center justify-center h-full rounded-2xl bg-zinc-500 ">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
           <button className="absolute  uppercase rounded-full left-[2vw] bottom-[2vw] px-2 py-1 border-1 border-zinc-100 ">rating 5.0 on clutch</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
