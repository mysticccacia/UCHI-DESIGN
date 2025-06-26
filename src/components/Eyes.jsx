import React, { useEffect, useState } from "react";

const Eyes = () => {

    const [rotate, setRotate] = useState(0);
      const [irisPos, setIrisPos] = useState({ x: 0, y: 0 });
    
      useEffect(() => {
        const handleMouseMove = (e) => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
    
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
    
          const deltaX = mouseX - centerX;
          const deltaY = mouseY - centerY;
    
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          setRotate(angle - 180);
    
          // Move iris slightly toward mouse
          const irisX = (deltaX / centerX) * 10; // Max 10px left/right
          const irisY = (deltaY / centerY) * 10; // Max 10px up/down
          setIrisPos({ x: irisX, y: irisY });
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);
  return (
    <>
         {/* Eye 1 */}
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
            <div
              className="w-2/3 h-2/3 relative bg-black rounded-full transition-transform duration-75"
              style={{
                transform: `translate(${irisPos.x}px, ${irisPos.y}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
            <div
              className="w-2/3 h-2/3 relative bg-black rounded-full transition-transform duration-75"
              style={{
                transform: `translate(${irisPos.x}px, ${irisPos.y}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Eyes