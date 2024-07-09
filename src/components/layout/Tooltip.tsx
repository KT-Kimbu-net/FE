"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type TTolltip = {
  children: React.ReactNode;
  position: string;
  tooltipContent: React.ReactNode;
  isView?: boolean;
  customStyle?: string;
};

export default function Tooltip(props: TTolltip) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log("hovering");
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log("leave");
  };

  return (
    <>
      <span>
        <span
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.children}
          <span
            className={`absolute top-[-3%] left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out rounded-[5px] bg-black text-white w-10 h-10 flex items-center justify-center
              ${
                isHovering
                  ? " opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }
                after:content-[''] 
                after:absolute 
                after:left-1/2 
                after:-translate-x-1/2
                after:top-full
                after:border-[10px] 
                after:border-solid 
              after:border-t-black
                after:border-l-transparent 
                after:border-r-transparent 
                after:border-b-transparent

            `}
          >
            {props.tooltipContent}
          </span>
        </span>
      </span>
    </>
  );
}
