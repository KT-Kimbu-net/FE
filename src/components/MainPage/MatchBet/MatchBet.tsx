"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Kt from "@/img/TeamLogo/kt.png";
import { getCookie } from "cookies-next";
import { GameChoose } from "@/types/api";
import { useGameBetState } from "@/store/resultBet";
import { TDaySchedule } from "@/types/weekSchdule";
import { getCurrentDay } from "@/utils/date";
import { getTeamLogo } from "@/utils/gameInfo";
import { TimeLeft } from "./TimeLeft";
import { calculateTimeLeft } from "@/utils/date";
import ddory from "@/img/ddory.svg";

type TMatchBet = {
  weekSchedule: TDaySchedule[] | undefined;
};

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

export default function MatchBet(props: TMatchBet) {
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

  const todaySchedule =
    props.weekSchedule &&
    props.weekSchedule.find(
      (daySchedule: TDaySchedule) => daySchedule.displayDate === getCurrentDay()
    );

  const isGameOver = calculateTimeLeft(todaySchedule?.gtime);

  const todayVsTeam =
    todaySchedule && todaySchedule.stadium === "수원"
      ? todaySchedule?.visit
      : todaySchedule?.home;

  const selectBetLogo =
    selectBet === "승" ? getTeamLogo("KT") : getTeamLogo(todayVsTeam!);

  if (isLoading) {
    return (
      <section className="bg-white w-1/3 rounded-2xl flex flex-col items-center h-[13rem] p-5 animate-pulse"></section>
    );
  }

  return (
    <section className="bg-white w-full xl:w-1/3 rounded-2xl h-[13rem] flex flex-col gap-3 items-center p-5">
      {todaySchedule ? (
        <>
          <section className="flex flex-col gap-2 items-center">
            <span className="font-[Pretendard-Bold] text-response_text flex items-center gap-2">
              <Image src={ddory} alt="ddory" width={16} height={16} />
              오늘의 경기 결과를 예측하고 크레딧을 받아가세요!
            </span>
            <TimeLeft todaySchedule={todaySchedule} />
          </section>
          <section
            className={`relative flex gap-2 items-center h-1/3 ${
              selectBet === "무" ? "py-1.5" : ""
            }`}
          >
            <span className="text-xl font-[Pretendard-ExtraBold] z-10 text-black">
              {selectBet
                ? selectBet === "승"
                  ? "KT"
                  : selectBet === "무"
                  ? "무"
                  : todayVsTeam
                : ""}
            </span>
            {selectBet ? (
              todayVsTeam &&
              selectBet !== "무" && (
                <Image
                  src={selectBetLogo}
                  alt="vs team logo"
                  width={40}
                  height={40}
                  className="z-10"
                />
              )
            ) : (
              <></>
            )}
          </section>
          <section className="relative w-full flex justify-between items-stretch">
            {/* 승 */}
            <section
              className={`w-1/2 ${
                selectBet === "승"
                  ? "bg-main text-white"
                  : "bg-[#ffd0d0] text-black"
              } py-3 rounded-l-2xl flex items-center gap-2 px-3 cursor-pointer h-full overflow-hidden`}
              onClick={() => {
                if (isGameOver) {
                  setSelectBet("승");
                  selectBetApiHandler("승");
                }
              }}
            >
              <Image
                src={Kt}
                alt="kt"
                width={32}
                height={24}
                className="w-auto"
              />
              <section className="flex flex-col font-[Pretendard-Bold]">
                <strong className="font-[Pretendard-SemiBold]">KT</strong>
              </section>
            </section>

            {/* 무 */}
            <section
              className={`flex items-center justify-center absolute right-0 h-full left-1/2 translate-x-[-50%] [clip-path:polygon(0_0,80%_0%,100%_100%,20%_100%)] px-1 py-3 translate-y-[-50%] top-1/2 w-1/3 cursor-pointer ${
                selectBet === "무"
                  ? "bg-black text-white"
                  : "bg-[#EFECEC] text-[#242424]"
              }`}
              onClick={() => {
                if (isGameOver) {
                  setSelectBet("무");
                  selectBetApiHandler("무");
                }
              }}
            >
              <section className="flex flex-col font-[Pretendard-Bold] items-center p-2">
                <strong className="font-[Pretendard-SemiBold]">무</strong>
              </section>
            </section>

            {/* 패 */}
            <section
              className={`bg-[#B8B2B2] w-1/2 py-3 rounded-r-2xl text-end text-white flex items-center gap-2 px-3 justify-end cursor-pointer ${
                selectBet === "패"
                  ? "bg-black text-white"
                  : "bg-[#b8b2b2] text-white"
              }`}
              onClick={() => {
                if (isGameOver) {
                  setSelectBet("패");
                  selectBetApiHandler("패");
                }
              }}
            >
              <section className="flex flex-col">
                <strong className="font-[Pretendard-SemiBold]">
                  {todayVsTeam}
                </strong>
              </section>
              {todayVsTeam && (
                <Image
                  src={getTeamLogo(todayVsTeam)}
                  alt="nc"
                  width={24}
                  height={24}
                  className="w-auto"
                />
              )}
            </section>
          </section>
        </>
      ) : (
        <strong>오늘의 경기가 없습니다.</strong>
      )}
    </section>
  );
}
