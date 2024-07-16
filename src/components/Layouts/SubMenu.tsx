"use client"

import React, { useState, useEffect, useRef } from "react";

type TSubMenu = {
  menuList: string[];
  functionList: (() => void)[];
  menuStatus: string;
};

export default function SubMenu(props: TSubMenu) {
  const [selectedPosition, setSelectedPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(270);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateLayout = () => {
      if (ulRef.current) {
        const containerWidth = ulRef.current.offsetWidth;
        const itemCount = props.menuList.length;
        const newItemWidth = Math.min(270, Math.max(80, containerWidth / itemCount));
        setItemWidth(newItemWidth);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, [props.menuList.length]);

  useEffect(() => {
    const selectedIndex = props.menuList.indexOf(props.menuStatus);
    if (selectedIndex !== -1 && ulRef.current) {
      const li = ulRef.current.children[selectedIndex] as HTMLLIElement;
      setSelectedPosition(li.offsetLeft + li.offsetWidth / 2);
    }
  }, [props.menuStatus, props.menuList, itemWidth]);

  const selectStyle = "text-black";

  return (
    <div className="w-full flex items-center justify-center relative">
      <ul
        ref={ulRef}
        className="flex items-center justify-center text-[16px] sm:text-[18px] md:text-[20px] text-[#6D758F] text-center w-full max-w-[1200px]"
      >
        {props.menuList.map((menu, index) => (
          <li
            key={index}
            onClick={props.functionList[index]}
            className={`px-2 sm:px-3 md:px-5 py-2 cursor-pointer relative flex items-center justify-center ${
              menu === props.menuStatus ? selectStyle : "border-b-[2px]"
            }`}
            style={{ width: `${itemWidth}px`, height: '60px' }}
          >
            {menu}
          </li>
        ))}
      </ul>
      <div
        className="absolute bottom-0 h-[4px] bg-black transition-all duration-300 ease-in-out"
        style={{
          left: `${selectedPosition}px`,
          width: `${itemWidth}px`,
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}