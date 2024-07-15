"use client";

import { useState } from "react";
import Image from "next/image";
import Kt from "@/img/TeamLogo/Kt.svg";
import Kia from "@/img/TeamLogo/Kia.svg";

export type selectBet = "WIN" | "LOSE" | "DRAW";

export default function MatchBet() {
  const [selectBet, setSelectBet] = useState<selectBet>("DRAW");

  return (
    <section className="bg-white w-1/3 rounded-2xl flex flex-col items-center p-5">
      <section className="font-[Pretendard-Bold] text-xl">
        오늘의 경기 결과를 예측하고 크레딧을 받아가세요!
      </section>
      <section className="font-[Pretendard-SemiBold] text-[#8a8a8a]">
        경기 시작 10분전 마감됩니다.
      </section>
      <section className="relative w-full p-5 h-fit mt-5 flex justify-between items-center">
        <section
          className={`w-1/2 ${
            selectBet === "WIN"
              ? "bg-main text-white"
              : "bg-[#ffd0d0] text-black"
          } p-1 rounded-l-2xl flex items-center gap-2 px-3 cursor-pointer`}
          onClick={() => {
            setSelectBet("WIN");
          }}
        >
          <Image src={Kt} alt="kt" />
          <section className="flex flex-col font-[Pretendard-Bold]">
            <strong className="font-[Pretendard-SemiBold]">KT</strong>
            <span className="font-[Pretendard-Bold]">62%</span>
          </section>
        </section>
        <section
          className={`absolute right-0 left-1/2 translate-x-[-50%] [clip-path:polygon(0_0,80%_0%,100%_100%,20%_100%)] p-1 translate-y-[-50%] top-1/2 w-1/3 cursor-pointer ${
            selectBet === "DRAW"
              ? "bg-black text-white"
              : "bg-[#EFECEC] text-[#242424]"
          }`}
          onClick={() => {
            setSelectBet("DRAW");
          }}
        >
          <section className="flex flex-col font-[Pretendard-Bold] items-center">
            <strong>무</strong>
            <span>2%</span>
          </section>
        </section>
        <section
          className={`bg-[#B8B2B2] w-1/2 p-1 rounded-r-2xl text-end text-white flex items-center gap-2 px-3 justify-end cursor-pointer ${
            selectBet === "LOSE"
              ? "bg-black text-white"
              : "bg-[#b8b2b2] text-white"
          }`}
          onClick={() => {
            setSelectBet("LOSE");
          }}
        >
          <section className="flex flex-col">
            <strong className="font-[Pretendard-SemiBold]">KIA</strong>
            <span className="font-[Pretendard-Bold]">36%</span>
          </section>
          <Image src={Kia} alt="kia" />
        </section>
      </section>
    </section>
  );
}
