"use client";

import Image from "next/image";
import prevArrow from "@/img/prevArrow.svg";
import subseArrow from "@/img/subseArrow.svg";
import rain from "@/img/rain.svg";
import MatchPredict from "./MatchPredict";
import { useLiveScoreState } from "@/store/liveScore";
import { useEffect, useState } from "react";
import { getCurrentDay } from "@/utils/date";
import { getTeamLogo } from "@/utils/gameInfo";
import { getTeamFullName } from "@/utils/gameInfo";
import { TLeagueRankingInfo } from "@/types/teams";

type TMatchScoreProps = {
  ktScore: number[];
  opponentScore: number[];
  vsTeamData?: TLeagueRankingInfo;
  ktTeamData?: TLeagueRankingInfo;
  location?: string;
  gtime?: string;
};

export default function MatchScore(props: TMatchScoreProps) {
  const [animate, setAnimate] = useState(false);
  const { setKtScore, setOpponentScore, kt, opponent, gameState } =
    useLiveScoreState();

  // const getWeatherApiHandler = async () => {
  //   const apiKey = process.env.NEXT_PUBLIC_APP_WEATHER_API_KEY;
  //   const baseDate = "20240716";
  //   const baseTime = "0500";
  //   const nx = 60;
  //   const ny = 121;

  //   const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

  //   return await (await fetch(url, { cache: "no-store" })).json();
  // };

  const sumScore = (score: number[]) => {
    return score.reduce((sum, current) => sum + current, 0);
  };

  const ktScore = sumScore(kt.score);
  const opponentScore = sumScore(opponent.score);

  useEffect(() => {
    setKtScore(props.ktScore);
    setOpponentScore(props.opponentScore);
  }, [props.ktScore, props.opponentScore]);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [gameState]);

  return (
    <>
      <section className="text-[clamp(0.75rem, 3vw, 1.25rem)] font-[Leferi]">
        Match
      </section>
      <section className="w-full flex justify-center">
        {/* <Image
          src={prevArrow}
          alt="prev game match"
          width={40}
          height={40}
          className="h-auto"
        /> */}
        <section className="flex gap-2 items-center">
          <section className="text-sm sm:text-base font-[Pretendard-ExtraBold]">
            {getCurrentDay().slice(4, 6)}.{getCurrentDay().slice(6, 8)} ( 화 )
            {props.gtime}
          </section>
          <span className="text-xs sm:text-sm font-[Pretendard-SemiBold] text-[#1B1B1B]">
            {props.location}
          </span>
          <section className="border-[1px] rounded-md border-[#e0e0e0] flex items-center gap-2 py-1 px-1 sm:px-2 text-gray-500 text-xs sm:text-base">
            <Image src={rain} alt="rain" />
            <span>60%</span>
          </section>
        </section>
        {/* <Image
          src={subseArrow}
          alt="next game match"
          width={40}
          height={40}
          className="h-auto"
        /> */}
      </section>
      <section className="w-full">
        <section className="w-full bg-[#1b1b1b] rounded-t-xl p-4 flex flex-col items-center">
          <section
            className={`text-center text-xs sm:text-base text-[#d6d6d6] w-fit py-1 px-2 sm:px-3 rounded-xl bg-[#3a3a3a] font-[Pretendard-Bold] ${
              animate ? "animate-scaleDown" : ""
            }`}
          >
            {gameState.slice(0, 1) === "0" ? "경기전" : gameState}
          </section>
          <section className="flex gap-2 sm:gap-8 w-full justify-between items-center">
            <section className="flex flex-col sm:flex-row items-center justify-between w-1/3">
              <strong className="text-white text-sm sm:text-lg font-[Pretendard-Bold]">
                {props.ktTeamData && getTeamFullName(props.ktTeamData?.팀)}
              </strong>
              {props.ktTeamData && (
                <Image
                  src={getTeamLogo(props.ktTeamData?.팀)}
                  alt="Kt"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:h-10 sm:w-10"
                />
              )}
            </section>
            <section className="w-1/3 text-center flex justify-between items-center text-white">
              <span className="text-2xl sm:text-[2rem] font-[Pretendard-ExtraBold]">
                {ktScore}
              </span>
              <span className="text-lg font-[Leferi] text-gray-500">vs</span>
              <span className="text-2xl sm:text-[2rem] font-[Pretendard-ExtraBold]">
                {opponentScore}
              </span>
            </section>
            <section className="w-1/3 flex flex-col-reverse sm:flex-row items-center justify-between">
              {props.vsTeamData && (
                <Image
                  src={getTeamLogo(props.vsTeamData.팀)}
                  alt="vs team"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:h-10 sm:w-10"
                />
              )}
              <strong className="text-white text-sm sm:text-lg text-center font-[Pretendard-Bold]">
                {props.vsTeamData && getTeamFullName(props.vsTeamData.팀)}
              </strong>
            </section>
          </section>
        </section>
        <MatchPredict />
      </section>
    </>
  );
}
