import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';

const Landing = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 text-white pt-1'>
        <div className='textstructure mt-52 px-20'>
            {
            ["We Create","Eye Opening","Presentation"].map((data,index)=>
            {
                return   <div key={index} className='masker '>

                <div  className='w-fit flex gap-1 justify-center items-center '>
                {index=== 1 && (
                    <motion.div 
                    initial={{width:0}}
                    animate={{width:"7vw"}}
                    transition={{ease:[0.76, 0, 0.24, 1],duration:1}}
                    className='mt-[1vw] rounded-2xl  w-[7vw] h-[5vw] bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'>

                </motion.div>
            )}
                <h1 className='text-[7vw] tracking-tighter font-medium uppercase leading-[6vw] font-["FoundersGrotesk, Roboto, sans-serif"]'>
                    {data}
                </h1>
                </div>
            </div>
            }
            )
            }
        </div>

        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {
            ["For public and private company","From the first pitch to IPO"].map((item,idx)=>{
                return <p key={idx} className='text-[1vw] font-light tracking-tight leading-none'>{item}</p>
            })
            }
            <div className='start  flex gap-2 items-center justify-between '>
                <div className='px-5 py-2 uppercase  border-[1px] border-zinc-500 font-lighter text-sm rounded-full'>start the project</div>
                <div className=' border-[1px] border-zinc-500 font-lighter text-md rounded-full p-1'><ArrowOutwardIcon/></div>
            </div>
        </div>
    </div>
  )
}

export default Landing