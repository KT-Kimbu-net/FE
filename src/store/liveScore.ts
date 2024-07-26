import { create } from "zustand";
import { TUseLiveScoreState } from "@/types/liveScore";

export const useLiveScoreState = create<TUseLiveScoreState>((set) => ({
  kt: {
    score: [],
    pitcher: "",
  },
  opponent: {
    score: [],
    pitcher: "",
  },
  setKtScore: (v: number[]) =>
    set((state) => ({
      kt: { ...state.kt, score: v },
    })),
  addKtScore: (score: number) =>
    set((state) => ({
      kt: { ...state.kt, score: [...state.kt.score, score] },
    })),
  setKtPitcher: (v: string) =>
    set((state) => ({
      kt: { ...state.kt, pitcher: v },
    })),
  setOpponentScore: (v: number[]) =>
    set((state) => ({
      opponent: { ...state.opponent, score: v },
    })),
  addOpponentScore: (score: number) =>
    set((state) => ({
      opponent: { ...state.opponent, score: [...state.opponent.score, score] },
    })),
  setOpponentPitcher: (v: string) =>
    set((state) => ({
      opponent: { ...state.opponent, pitcher: v },
    })),
  gameState: "경기전",
  setGameState: (v: string) => set({ gameState: v }),
  ktWinPercent: 50,
  opponentWinPercent: 50,
  setKtWinPercent: (v: number) => set({ ktWinPercent: v }),
  setOpponentWinPercent: (v: number) => set({ opponentWinPercent: v }),
}));
