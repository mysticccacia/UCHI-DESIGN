import React from "react";
import Eyes from "./Eyes";

const Plays = () => {
 
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll  data-scroll-speed="-.9" className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] relative'>
        <div className="absolute gap-[3vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-between">
        <Eyes/>
          
        </div>
      </div>
    </div>
  );
};

export default Plays;
