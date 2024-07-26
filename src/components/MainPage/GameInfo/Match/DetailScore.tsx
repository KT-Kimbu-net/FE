"use client";

import { useLiveScoreState } from "@/store/liveScore";
import { useState, useEffect } from "react";
import {
  countUntilEmpty,
  calculateInningAndHalf,
  calculateWinProbability,
} from "@/utils/match/WinningPercentage";
import { TLeagueRankingInfo } from "@/types/teams";

type TDetailScore = {
  vsTeamData?: TLeagueRankingInfo;
  ktTeamData?: TLeagueRankingInfo;
};
export default function DetailScore(props: TDetailScore) {
  const [currentInning, setCurrentInning] = useState("");
  const {
    kt,
    opponent,
    setGameState,
    setKtWinPercent,
    setOpponentWinPercent,
    ktWinPercent,
  } = useLiveScoreState();
  const inningThStyle =
    "text-xs sm:text-base w-4 md:w-6 lg:w-8 xl:w-10 font-medium";
  const inningTdStyle =
    "xl:px-2 text-xs sm:text-base w-4 md:w-6 lg:w-8 xl:w-10 text-center";
  const inningsCount = 9;

  const fullKtScore = Array.from({ length: inningsCount }, (_, i) =>
    kt.score[i] !== undefined ? String(kt.score[i]) : ""
  );
  const fullOpponentScore = Array.from({ length: inningsCount }, (_, i) =>
    opponent.score[i] !== undefined ? String(opponent.score[i]) : ""
  );

  const ktTotalScore = fullKtScore
    .map((score) => Number(score) || 0)
    .reduce((sum, score) => sum + score, 0);

  const opponentTotalScore = fullOpponentScore
    .map((score) => Number(score) || 0)
    .reduce((sum, score) => sum + score, 0);

  useEffect(() => {
    const newInning = calculateInningAndHalf(fullKtScore, fullOpponentScore);
    if (currentInning !== newInning) {
      setCurrentInning(newInning);
      setGameState(newInning);
      const changeRate = calculateWinProbability(
        ktTotalScore,
        opponentTotalScore,
        Number(newInning.slice(0, 1)),
        ktWinPercent
      );
      setKtWinPercent(changeRate);
      setOpponentWinPercent(100 - changeRate);
    }
  }, [fullKtScore, fullOpponentScore, currentInning, setGameState]);

  const ktRow = [...fullKtScore, String(ktTotalScore), "0", "0", "0"];
  const opponentRow = [
    ...fullOpponentScore,
    String(opponentTotalScore),
    "0",
    "0",
    "0",
  ];

  return (
    <section className="w-full flex flex-col gap-6 justify-center sm:mt-4">
      <section className="relative sm:border-t-[2px] border-black w-full">
        <span className="hidden sm:block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white px-2 ">
          스코어
        </span>
      </section>
      <table className="border-collapse w-full">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th scope="col" className="rounded-tl-xl w-10 sm:w-20"></th>
            {Array.from({ length: inningsCount }, (_, i) => (
              <th scope="col" className={inningThStyle} key={i + 1}>
                {i + 1}
              </th>
            ))}
            <th
              scope="col"
              className="text-sm sm:text-base w-4 md:w-6 lg:w-8 xl:w-10"
            >
              <span className="text-xs sm:text-base">R</span>
            </th>
            <th
              scope="col"
              className="text-sm sm:text-base w-4 md:w-6 lg:w-8 xl:w-10"
            >
              <span className="text-xs sm:text-base">H</span>
            </th>
            <th
              scope="col"
              className="text-sm sm:text-base w-4 md:w-6 lg:w-8 xl:w-10"
            >
              <span className="text-xs sm:text-base">E</span>
            </th>
            <th
              scope="col"
              className="text-sm sm:text-base w-4 md:w-6 lg:w-8 xl:w-10 rounded-tr-xl"
            >
              <span className="text-xs sm:text-base">B</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#f3f3f3]">
            <td className="px-1 xl:px-2 border-r-[1px] text-xs sm:text-base border-white font-[Pretendard-SemiBold] text-center">
              {props.ktTeamData?.팀}
            </td>
            {ktRow.map((score, index) => (
              <td className={inningTdStyle} key={index}>
                {score}
              </td>
            ))}
          </tr>
          <tr className="bg-[#f3f3f3] border-t-[1px] border-white">
            <td className=" rounded-bl-xl border-r-[1px] text-xs sm:text-base  border-white font-[Pretendard-SemiBold] text-center">
              {props.vsTeamData?.팀}
            </td>
            {opponentRow.map((score, index) => (
              <td
                className={`${inningTdStyle} ${
                  index === opponentRow.length - 1 ? "rounded-br-xl" : ""
                }`}
                key={index}
              >
                {score}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
