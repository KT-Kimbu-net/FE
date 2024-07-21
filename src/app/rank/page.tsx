"use client";

import SubHeader from "@/components/Layouts/SubHeader";
import Rank from "@/components/Rank/Rank";

export default function page() {

  return (
    <>
      <SubHeader title="랭킹" subTitle="누가누가 잘했나" />
      <Rank />
    </>
  );
}
