"use client";

import { useEffect, useState } from "react";
import { matchPredictAction } from "@/libs/action/MatchPredictAction";
import { useLiveScoreState } from "@/store/liveScore";

export default function MatchPredict() {
  const [showText, setShowText] = useState(false);
  const {
    ktWinPercent,
    opponentWinPercent,
    setKtWinPercent,
    setOpponentWinPercent,
  } = useLiveScoreState((state) => ({
    ktWinPercent: state.ktWinPercent,
    opponentWinPercent: state.opponentWinPercent,
    setKtWinPercent: state.setKtWinPercent,
    setOpponentWinPercent: state.setOpponentWinPercent,
  }));

  const fetchPredictData = async () => {
    const predictData = await matchPredictAction();
    const parsePredictData = predictData
      ? Number(predictData?.predictData.substring(0, 2))
      : 50;

    setTimeout(() => {
      setKtWinPercent(100 - parsePredictData);
      setOpponentWinPercent(parsePredictData);
      setShowText(true);
    }, 100);
  };

  useEffect(() => {
    fetchPredictData();
  }, []);

  const ktWinBarStyle =
    "bg-main px-4 py-3 rounded-bl-xl text-white font-[Pretendard-ExtraBold] transition-all duration-500 ease-in-out";
  const opponentTeamWinBarStyle =
    "bg-[#4b4b4b] px-4 py-3 rounded-br-xl text-white text-end font-[Pretendard-ExtraBold] transition-all duration-500 ease-in-out";
  const percentTextStyle = `transition-opacity duration-500 ease-in-out ${
    showText ? "opacity-100" : "opacity-0"
  }`;

  return (
    <section className="w-full flex justify-between">
      <section className={ktWinBarStyle} style={{ width: `${ktWinPercent}%` }}>
        <span className={percentTextStyle}>{ktWinPercent}%</span>
      </section>
      <section
        className={opponentTeamWinBarStyle}
        style={{ width: `${opponentWinPercent}%` }}
      >
        <span className={percentTextStyle}>{opponentWinPercent}%</span>
      </section>
    </section>
  );
}
