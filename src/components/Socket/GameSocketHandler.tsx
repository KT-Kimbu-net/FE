"use client";

import { useEffect } from "react";
import { gameSocket } from "@/socket/GameSocket";
import { useLiveScoreState } from "@/store/liveScore";
import { TChangeScore, TChangePitcher } from "@/types/liveScore";

export default function GameSocketHandler() {
  const { setKtPitcher, setOpponentPitcher, addKtScore, addOpponentScore } =
    useLiveScoreState((state) => ({
      setKtPitcher: state.setKtPitcher,
      setKtScore: state.setKtScore,
      setOpponentPitcher: state.setOpponentPitcher,
      setOpponentScore: state.setOpponentScore,
      addKtScore: state.addKtScore,
      addOpponentScore: state.addOpponentScore,
    }));

  const gameScoreSocketHandler = (data: TChangeScore) => {
    if (data.isKtwiz) addKtScore(data.score);
    else addOpponentScore(data.score);
  };

  const pitcherChangeSocketHandler = (data: TChangePitcher) => {
    if (data.isKtwiz) setKtPitcher(data.pitcher);
    else setOpponentPitcher(data.pitcher);
  };

  useEffect(() => {
    gameSocket.on("changeScore", gameScoreSocketHandler);
    gameSocket.on("changePitcher", pitcherChangeSocketHandler);
    return () => {
      gameSocket.off("changeScore", gameScoreSocketHandler);
      gameSocket.off("changePitcher", pitcherChangeSocketHandler);
    };
  }, []);

  return <></>;
}
