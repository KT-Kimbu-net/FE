"use client";

import { useEffect, useState } from "react";
import { matchPredictAction } from "@/libs/action/MatchPredictAction";

export default function MatchPredict() {
  const [ktWinPercent, setKtWinPercent] = useState(50);
  const [opponentWinPercent, setOpponentWinPercent] = useState(50);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // const fetchPredictData = async () => {
    //   const predictData = await matchPredictAction();
    //   const parsePredictData = Number(predictData?.predictData.substring(0, 2));
    //   setTimeout(() => {
    //     setKtWinPercent(parsePredictData);
    //     setOpponentWinPercent(100 - parsePredictData);
    //     setShowText(true);
    //   }, 100);
    // };
    // fetchPredictData();
  }, []);

  const ktWinBarStyle =
    "bg-main px-4 py-3 rounded-bl-xl text-white font-[Pretendard-ExtraBold] transition-all duration-500 ease-in-out";
  const opponentTeamWinBarStyle =
    "bg-[#4b4b4b] px-4 py-3 rounded-br-xl text-white text-end font-[Pretendard-ExtraBold] transition-all duration-500 ease-in-out";
  const textStyle = `transition-opacity duration-500 ease-in-out ${
    showText ? "opacity-100" : "opacity-0"
  }`;

  return (
    <section className="w-full flex justify-between">
      <section className={ktWinBarStyle} style={{ width: `${ktWinPercent}%` }}>
        <span className={textStyle}>{ktWinPercent}%</span>
      </section>
      <section
        className={opponentTeamWinBarStyle}
        style={{ width: `${opponentWinPercent}%` }}
      >
        <span className={textStyle}>{opponentWinPercent}%</span>
      </section>
    </section>
  );
}
