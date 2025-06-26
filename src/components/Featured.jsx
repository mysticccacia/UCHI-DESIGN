import React from 'react'
import CardGrids from './CardGrids'

const Featured = (features) => {
  return (
    <div className='w-full rounded-t-3xl bg-zinc-900 py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className="text-[4vw] font-normal tracking-tight leading-none">Featured projects</h1>
        </div>
        <div className=' px-20 mb-[4vw]'>
            <div className='cards w-full relative  flex gap-6 mt-[3vw]'>
                <CardGrids data={features}/>
    
               
              
            </div>
        </div>
    </div>
  )
}

export default Featured



//    {/* FIRST */}
//                 <div className='cardContainer w-1/2  h-[75vh] '>
//                     <div className='flex items-center mb-3 '>
//                             <div className='h-4 w-4 bg-white rounded-full'></div>
//                          <h1 className='text-lg px-2'>SALIENCE LABS</h1>
//                     </div>
                   
//                     <div className='card rounded-lg w-full h-full hover:scale-95 duration-800 overflow-hidden '>
//                         <img className=' rounded-lg  bg-cover hover:scale-110 duration-800 ' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
//                     </div>
//                 </div>
//                 {/* SECOND*/}
//                 <div className='cardContainer w-1/2   h-[75vh] '>
//                 <div className='flex items-center mb-3 '>
//                             <div className='h-4 w-4 bg-white rounded-full'></div>
//                          <h1 className='text-lg px-2'>CARDBOARD SPACESHIPS</h1>
//                     </div>
//                     <div className='card rounded-lg w-full h-full hover:scale-95 duration-800 overflow-hidden '>
//                         <img className=' rounded-lg  bg-cover hover:scale-110 duration-800 ' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
//                     </div>
//                 </div>
              
               
               