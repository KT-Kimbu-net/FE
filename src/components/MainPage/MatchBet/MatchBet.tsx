"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Kt from "@/img/TeamLogo/kt.png";
import Kia from "@/img/TeamLogo/kia.png";
import { getCookie } from "cookies-next";
import { GameChoose } from "@/types/api";
import { useGameBetState } from "@/store/resultBet";

export default function MatchBet() {
  const [isLoading, setIsLoading] = useState(true);
  const { selectBet, setSelectBet } = useGameBetState((state) => ({
    selectBet: state.selectBet,
    setSelectBet: state.setSelectBet,
  }));

  const selectBetApiHandler = async (selectBet: GameChoose) => {
    try {
      const token = getCookie("token");
      const sendData = {
        choose: selectBet,
      };

      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/event/predict`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(sendData),
        }
      );
      if (result.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="bg-white w-1/3 rounded-2xl flex flex-col items-center p-5 animate-pulse">
        <section className="h-6 bg-gray-200 rounded w-3/4 mb-2"></section>
        <section className="h-4 bg-gray-200 rounded w-1/2 mb-5"></section>
        <section className="w-full h-20 bg-gray-200 rounded-2xl"></section>
      </section>
    );
  }

  return (
    <section className="bg-white w-1/3 rounded-2xl flex flex-col items-center p-5">
      <section className="font-[Pretendard-Bold] text-xl">
        오늘의 경기 결과를 예측하고 크레딧을 받아가세요!
      </section>
      <section className="font-[Pretendard-SemiBold] text-[#8a8a8a]">
        경기 시작 10분전 마감됩니다.
      </section>
      <section className="relative w-full p-5 h-fit mt-5 flex justify-between items-center">
        {/* 승 */}
        <section
          className={`w-1/2 ${
            selectBet === "승"
              ? "bg-main text-white"
              : "bg-[#ffd0d0] text-black"
          } p-1 rounded-l-2xl flex items-center gap-2 px-3 cursor-pointer`}
          onClick={() => {
            setSelectBet("승");
            selectBetApiHandler("승");
          }}
        >
          <Image src={Kt} alt="kt" width={40} height={40} />
          <section className="flex flex-col font-[Pretendard-Bold]">
            <strong className="font-[Pretendard-SemiBold]">KT</strong>
          </section>
        </section>
        {/* 무 */}
        <section
          className={`absolute right-0 left-1/2 translate-x-[-50%] [clip-path:polygon(0_0,80%_0%,100%_100%,20%_100%)] p-1 translate-y-[-50%] top-1/2 w-1/3 cursor-pointer ${
            selectBet === "무"
              ? "bg-black text-white"
              : "bg-[#EFECEC] text-[#242424]"
          }`}
          onClick={() => {
            setSelectBet("무");
            selectBetApiHandler("무");
          }}
        >
          <section className="flex flex-col font-[Pretendard-Bold] items-center p-2">
            <strong className="font-[Pretendard-SemiBold]">무</strong>
          </section>
        </section>
        {/* 패 */}
        <section
          className={`bg-[#B8B2B2] w-1/2 p-1 rounded-r-2xl text-end text-white flex items-center gap-2 px-3 justify-end cursor-pointer ${
            selectBet === "패"
              ? "bg-black text-white"
              : "bg-[#b8b2b2] text-white"
          }`}
          onClick={() => {
            setSelectBet("패");
            selectBetApiHandler("패");
          }}
        >
          <section className="flex flex-col">
            <strong className="font-[Pretendard-SemiBold]">KIA</strong>
          </section>
          <Image src={Kia} alt="kia" width={40} height={40} />
        </section>
      </section>
    </section>
  );
}
