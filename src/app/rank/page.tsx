"use client";

import SubHeader from "@/components/Layouts/SubHeader";
import SubMenu from "@/components/Layouts/SubMenu";
import Rank from "@/components/Rank/Rank";
import useSubMenu from "@/hooks/useSubMenu";
import { useEffect, useState } from "react";

export default function page() {
  // const [isMounted, setIsMounted] = useState(false);
  // const { menuList, menuStatus, functionList } = useSubMenu([
  //   "연속 퀴즈 정답",
  //   "퀴즈 정답 수",
  //   "누적 승률 정답 회수",
  //   "누적 크레딧",
  // ]);
  // useEffect(() => {
  //   setIsMounted(true);
  // });
  // if (!isMounted) return null;

  return (
    <>
      <SubHeader title="랭킹" subTitle="누가누가 잘했나" />
      {/* <SubMenu
        menuList={menuList}
        functionList={functionList}
        menuStatus={menuStatus}
      /> */}
      <Rank />
    </>
  );
}
