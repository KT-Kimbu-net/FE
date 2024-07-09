type TSubMenu = {
  menuList: string[];
  functionList: (() => void)[];
  menuStatus: string;
};

// export default function SubMenu(props: TSubMenu) {
//   const selectStyle = "border-black px-5 py-2 text-black border-b-[4px]";
//   return (
//     <>
//       <div className="w-full flex items-center justify-center">
//         <ul className="flex items-center justify-center text-[20px] text-[#6D758F]">
//           {props.menuList.map((menu, index) => (
//             <li
//               key={index}
//               onClick={props.functionList[index]}
//               className={`px-5 py-2 cursor-pointer border-b-[2px] ${
//                 menu === props.menuStatus && selectStyle
//               }`}
//             >
//               {menu}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";

export default function SubMenu(props: TSubMenu) {
  const [selectedPosition, setSelectedPosition] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const selectedIndex = props.menuList.indexOf(props.menuStatus);
    if (selectedIndex !== -1 && ulRef.current) {
      const li = ulRef.current.children[selectedIndex] as HTMLLIElement;
      setSelectedPosition(li.offsetLeft + li.offsetWidth / 2);
    }
  }, [props.menuStatus, props.menuList]);

  const selectStyle = "text-black";

  return (
    <div className="w-full flex items-center justify-center relative">
      <ul
        ref={ulRef}
        className="flex items-center justify-center text-[20px] text-[#6D758F] text-center "
      >
        {props.menuList.map((menu, index) => (
          <li
            key={index}
            onClick={props.functionList[index]}
            className={`px-5 py-2 cursor-pointer relative w-[270px] h-[60px] flex items-center justify-center ${
              menu === props.menuStatus ? selectStyle : "border-b-[2px]"
            }`}
          >
            {menu}
          </li>
        ))}
      </ul>
      <div
        className="absolute bottom-0 h-[4px] bg-black transition-all duration-300 ease-in-out"
        style={{
          left: `${selectedPosition}px`,
          width: "270px",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
