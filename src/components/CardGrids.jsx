import React from "react";
import features from "../utils/Data";

const CardGrids = () => {
  return (
    <div className="cards w-full ">
      <div className=" flex flex-wrap  gap-6">
        {/* Centered animated heading */}

        {/* Cards - 2 per row */}
        {features.map((item, index) => (
          <div
            key={index}
            className="cardContainer mb-[2vw] relative pb-[5vw] w-[48%] h-[75vh]"
          >
            {/* Heading with dot */}
            <div className="flex items-center mb-3">
              <div className="h-4 w-4 bg-white rounded-full"></div>
              <h1 className="text-lg px-2">{item.heading.toUpperCase()}</h1>
            </div>

            {/* Image Card */}
            <div className="card rounded-lg w-full h-full hover:scale-95 duration-800 overflow-hidden ">
              <img
                src={item.image}
                alt={item.heading}
                className="rounded-lg bg-cover hover:scale-110 duration-800 w-full h-full object-cover"
              />
            </div>
            <div className="flex mt-3 gap-3">
              {item.text.map((elem, idx) => {
                return (
                  <>
                    <button key={idx} className="relative overflow-hidden px-4 py-2 text-zinc-100 border border-white rounded-full group">
                      <span className="absolute -bottom-1 left-1/2 w-0 h-0 bg-zinc-100 rounded-full transform -translate-x-1/2 group-hover:w-72 group-hover:h-72 transition-all duration-500 ease-out z-0"></span>
                      <span className="relative text-sm uppercase z-10 group-hover:text-black transition duration-300">
                        {elem}
                      </span>
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrids;
