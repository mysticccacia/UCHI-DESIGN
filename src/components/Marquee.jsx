import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  const text = "WE ARE UCHI WE ARE UCHI WE ARE UCHI WE ARE UCHI ";

  return (
    <div className="w-full h-[50vh] rounded-tl-3xl rounded-tr-3xl bg-zinc-100 flex items-center justify-center">
      <div className="w-full border-y-1 border-[#004D43] overflow-hidden py-4 flex items-center">
        <motion.div
          className="flex min-w-full gap-[5vw]"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        >
          <h1 className="text-[#004D43] text-[15vw] font-extrabold leading-none whitespace-nowrap">
            {text + text}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;



// import { motion } from "framer-motion";
// import React from "react";

// const Marquee = () => {
//   return (
//     <div className="w-full h-[50vh] rounded-tl-3xl rounded-tr-3xl bg-white flex items-center justify-center">
//       <div className="w-full border-y-1 border-[#004D43] overflow-hidden py-4 flex items-center">
//         <motion.div
//           className="flex pb-3 min-w-full gap-[5vw]"
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
//         >
//           <h1 className="text-[#004D43] text-[15vw] font-extrabold leading-none whitespace-nowrap">
//             WE ARE UCHI WE ARE UCHI 
//           </h1>
//           <h1 className="text-[#004D43] text-[15vw] font-extrabold leading-none whitespace-nowrap">
//             WE ARE UCHI WE ARE UCHI 
//           </h1>
//           <h1 className="text-[#004D43] text-[15vw] font-extrabold leading-none whitespace-nowrap">
//             WE ARE UCHI WE ARE UCHI 
//           </h1>
//           <h1 className="text-[#004D43] text-[15vw] font-extrabold leading-none whitespace-nowrap">
//             WE ARE UCHI WE ARE UCHI 
//           </h1>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Marquee;
