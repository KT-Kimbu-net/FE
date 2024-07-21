import { create } from "zustand";
import { TUseLiveScoreState } from "@/types/liveScore";

export const useLiveScoreState = create<TUseLiveScoreState>((set) => ({
  kt: {
    ktScore: [],
    ktPitcher: "",
  },
  setKtScore: (v: number[]) =>
    set((state) => ({
      kt: { ...state.kt, ktScore: v },
    })),
  setKtPitcher: (v: string) =>
    set((state) => ({
      kt: { ...state.kt, ktPitcher: v },
    })),
  opponent: {
    opponentScore: [],
    opponentPitcher: "",
  },
  setOpponentScore: (v: number[]) =>
    set((state) => ({
      opponent: { ...state.opponent, opponentScore: v },
    })),
  setOpponentPitcher: (v: string) =>
    set((state) => ({
      opponent: { ...state.opponent, opponentPitcher: v },
    })),
}));
