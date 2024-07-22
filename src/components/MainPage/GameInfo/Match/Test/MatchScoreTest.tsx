"use client";

import Image from "next/image";
import prevArrow from "@/img/prevArrow.svg";
import subseArrow from "@/img/subseArrow.svg";
import Kt from "@/img/TeamLogo/kt.png";
import Nc from "@/img/TeamLogo/nc.png";
import rain from "@/img/rain.svg";
import MatchPredict from "../MatchPredict";
import { useLiveScoreState } from "@/store/liveScore";
import { useEffect, useState } from "react";
import { getCurrentDay } from "@/utils/date";

type TMatchScoreProps = {
  ktScore: number[];
  opponentScore: number[];
};

// 기상청 api를 이용한 강수확률 가져오는 api핸들러
const getWeatherApiHandler = async () => {
  const apiKey = process.env.NEXT_PUBLIC_APP_WEATHER_API_KEY;
  const baseDate = "20240716";
  const baseTime = "0500";
  const nx = 60;
  const ny = 121;

  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

  return await (await fetch(url, { cache: "no-store" })).json();
};

export default function MatchScoreTest(props: TMatchScoreProps) {
  const [animate, setAnimate] = useState(false);
  const { setKtScore, setOpponentScore, kt, opponent, gameState } =
    useLiveScoreState();

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
      <section className="text-xl font-[Leferi]">Match</section>
      <section className="w-full flex justify-between">
        <Image
          src={prevArrow}
          alt="prev game match"
          width={40}
          height={40}
          className="h-auto"
        />
        <section className="flex gap-2 items-center">
          <section className="text-base font-[Pretendard-ExtraBold]">
            {getCurrentDay().slice(4, 6)}.{getCurrentDay().slice(6, 8)} ( 화 )
            18:30
          </section>
          <span className="text-sm font-[Pretendard-SemiBold] text-[#1B1B1B]">
            수원 Kt wiz 파크
          </span>
          <section className="border-[1px] rounded-md border-[#e0e0e0] flex gap-2 py-1 px-2 text-gray-500">
            <Image src={rain} alt="rain" />
            60%
          </section>
        </section>
        <Image
          src={subseArrow}
          alt="next game match"
          width={40}
          height={40}
          className="h-auto"
        />
      </section>
      <section className="w-full">
        <section className="w-full bg-[#1b1b1b] rounded-t-xl p-4 flex flex-col items-center">
          <section
            className={`text-center text-[#d6d6d6] w-fit py-1 px-3 rounded-xl bg-[#3a3a3a] font-[Pretendard-Bold] ${
              animate ? "animate-scaleDown" : ""
            }`}
          >
            {gameState.slice(0, 1) === "0" ? "경기전" : gameState}
          </section>
          <section className="flex gap-8 w-full justify-between items-center">
            <section className="flex items-center justify-between w-1/3">
              <strong className="text-white text-lg font-[Pretendard-Bold]">
                KT Wiz
              </strong>
              <Image
                src={Kt}
                alt="Kt"
                width={40}
                height={40}
                className="h-auto"
              />
            </section>
            <section className="w-1/3 text-center flex justify-between items-center text-white">
              <span className="text-[2rem] font-[Pretendard-ExtraBold]">
                {ktScore}
              </span>
              <span className="text-lg font-[Leferi] text-gray-500">vs</span>
              <span className="text-[2rem] font-[Pretendard-ExtraBold]">
                {opponentScore}
              </span>
            </section>
            <section className="w-1/3 flex items-center justify-between">
              <Image
                src={Nc}
                alt="nc"
                width={40}
                height={40}
                className="h-auto"
              />
              <strong className="text-white text-lg font-[Pretendard-Bold]">
                NC Dinos
              </strong>
            </section>
          </section>
        </section>
        <MatchPredict />
      </section>
    </>
  );
}
