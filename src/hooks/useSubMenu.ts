"use client";
import { useState } from "react";

export default function useSubMenu(menuList:string[]) {
  const [menuStatus, setMenuStatus] = useState<string>(menuList[0]);

  const functionList = menuList.map((menu) => {
    return () => {
      setMenuStatus(menu);
    };
  });

  return {
    menuList,
    menuStatus,
    functionList,
  };
}
